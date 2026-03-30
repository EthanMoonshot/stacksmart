import { promises as fs } from "fs";
import path from "path";
import {
  AnalysisResult,
  AnalyzedTool,
  CategoryBreakdown,
  Recommendation,
  SaaSTool,
  ToolStack,
} from "@/lib/types";
import {
  alternativeBundles,
  getBestAlternative,
  getFallbackSuggestion,
  lookupTool,
  normalizeToolName,
} from "@/lib/recommendations-db";

const TOOLS_FILE = path.join(process.cwd(), "data", "tools.json");
const ANALYSIS_FILE = path.join(process.cwd(), "data", "analysis.json");

function toMonthlyCost(tool: SaaSTool): number {
  if (tool.billingFrequency === "quarterly") return tool.cost / 3;
  if (tool.billingFrequency === "annually") return tool.cost / 12;
  return tool.cost;
}

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

function getPriority(monthlySavings: number): Recommendation["priority"] {
  if (monthlySavings >= 100) return "high";
  if (monthlySavings >= 25) return "medium";
  return "low";
}

function getEffortLevel(type: Recommendation["type"], toolCount: number): Recommendation["effortLevel"] {
  if (type === "review") return "Low";
  if (type === "consolidate") return toolCount >= 3 ? "High" : "Medium";
  return "Medium";
}

function capRecommendationSavings(monthlySavings: number, currentMonthlyCost?: number) {
  if (!currentMonthlyCost || currentMonthlyCost <= 0) return roundCurrency(Math.max(0, monthlySavings));
  return roundCurrency(Math.min(Math.max(0, monthlySavings), currentMonthlyCost * 0.7));
}

function calculateConservativeProjectedSavings(recommendations: Recommendation[], monthlySpend: number) {
  const maxTotalSavings = roundCurrency(monthlySpend * 0.7);
  const selected = new Set<string>();
  let total = 0;

  const prioritized = [...recommendations].sort((a, b) => b.monthlySavings - a.monthlySavings);

  for (const recommendation of prioritized) {
    const normalizedAffectedTools = recommendation.affectedTools.map((tool) => normalizeToolName(tool));
    if (normalizedAffectedTools.some((tool) => selected.has(tool))) continue;

    const remainingCapacity = maxTotalSavings - total;
    if (remainingCapacity <= 0) break;

    total += Math.min(recommendation.monthlySavings, remainingCapacity);
    normalizedAffectedTools.forEach((tool) => selected.add(tool));
  }

  if (total > monthlySpend) return maxTotalSavings;
  return roundCurrency(Math.min(total, maxTotalSavings));
}

function buildOverlapGroups(analyzedTools: AnalyzedTool[]) {
  const normalizedSet = new Set(analyzedTools.map((tool) => normalizeToolName(tool.toolName)));
  const adjacency = new Map<string, Set<string>>();

  for (const tool of analyzedTools) {
    const key = normalizeToolName(tool.toolName);
    if (!adjacency.has(key)) adjacency.set(key, new Set<string>());

    for (const overlap of tool.overlapsWith) {
      const overlapKey = normalizeToolName(overlap);
      if (!normalizedSet.has(overlapKey)) continue;
      adjacency.get(key)?.add(overlapKey);
      if (!adjacency.has(overlapKey)) adjacency.set(overlapKey, new Set<string>());
      adjacency.get(overlapKey)?.add(key);
    }
  }

  const visited = new Set<string>();

  return analyzedTools
    .map((tool) => normalizeToolName(tool.toolName))
    .filter((key) => !visited.has(key))
    .map((startKey) => {
      const queue = [startKey];
      const component = new Set<string>();
      visited.add(startKey);

      while (queue.length > 0) {
        const key = queue.shift()!;
        component.add(key);
        for (const neighbor of adjacency.get(key) || []) {
          if (visited.has(neighbor)) continue;
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }

      const componentTools = analyzedTools.filter((tool) => component.has(normalizeToolName(tool.toolName)));
      if (componentTools.length < 2) return null;

      const categoryCounts = new Map<string, number>();
      for (const tool of componentTools) {
        categoryCounts.set(tool.category, (categoryCounts.get(tool.category) || 0) + 1);
      }

      const dominantCategory = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "Overlap";

      return {
        category: dominantCategory,
        tools: componentTools.map((tool) => tool.toolName).sort((a, b) => a.localeCompare(b)),
      };
    })
    .filter((group): group is { category: string; tools: string[] } => Boolean(group))
    .sort((a, b) => b.tools.length - a.tools.length || a.category.localeCompare(b.category));
}

export async function readStacks(): Promise<ToolStack[]> {
  try {
    const raw = await fs.readFile(TOOLS_FILE, "utf8");
    return JSON.parse(raw) as ToolStack[];
  } catch {
    return [];
  }
}

export async function readLatestAnalysis(): Promise<AnalysisResult | null> {
  try {
    const raw = await fs.readFile(ANALYSIS_FILE, "utf8");
    return JSON.parse(raw) as AnalysisResult;
  } catch {
    return null;
  }
}

export async function writeAnalysis(result: AnalysisResult): Promise<void> {
  await fs.mkdir(path.dirname(ANALYSIS_FILE), { recursive: true });
  await fs.writeFile(ANALYSIS_FILE, JSON.stringify(result, null, 2));
}

export function analyzeStack(stack: ToolStack): AnalysisResult {
  const normalizedNames = new Set(stack.tools.map((tool) => normalizeToolName(tool.toolName)));

  const analyzedTools: AnalyzedTool[] = stack.tools.map((tool) => {
    const dbTool = lookupTool(tool.toolName);
    const monthlyCost = roundCurrency(toMonthlyCost(tool));
    const annualCost = roundCurrency(monthlyCost * 12);

    const overlapsWith = (dbTool?.overlapsWith || []).filter((candidate) =>
      normalizedNames.has(normalizeToolName(candidate))
    );

    const notes: string[] = [];
    let status: AnalyzedTool["status"] = "active";

    if (overlapsWith.length > 0) {
      notes.push(`Overlaps with ${overlapsWith.join(", ")}`);
      status = overlapsWith.length > 1 ? "underused" : "redundant";
    }

    const bestAlternative = getBestAlternative(tool.toolName);
    if (bestAlternative && bestAlternative.monthlyCost < monthlyCost) {
      notes.push(
        `Possible cheaper alternative: ${bestAlternative.name} (~$${bestAlternative.monthlyCost.toFixed(2)}/mo)`
      );
      if (status === "active") status = "underused";
    }

    return {
      id: tool.id,
      toolName: tool.toolName,
      category: dbTool?.category || tool.category || "Other",
      monthlyCost,
      annualCost,
      billingFrequency: tool.billingFrequency,
      status,
      overlapsWith,
      notes,
    };
  });

  const categoryMap = new Map<string, CategoryBreakdown>();
  for (const tool of analyzedTools) {
    const current = categoryMap.get(tool.category) || {
      category: tool.category,
      monthlyCost: 0,
      annualCost: 0,
      toolCount: 0,
    };
    current.monthlyCost += tool.monthlyCost;
    current.annualCost += tool.annualCost;
    current.toolCount += 1;
    categoryMap.set(tool.category, current);
  }

  const categories = Array.from(categoryMap.values())
    .map((item) => ({
      ...item,
      monthlyCost: roundCurrency(item.monthlyCost),
      annualCost: roundCurrency(item.annualCost),
    }))
    .sort((a, b) => b.monthlyCost - a.monthlyCost);

  const overlaps = buildOverlapGroups(analyzedTools);

  const recommendations: Recommendation[] = [];
  const seenRecommendationKeys = new Set<string>();

  for (const bundle of alternativeBundles) {
    const affectedTools = bundle.consolidates.filter((toolName) => normalizedNames.has(normalizeToolName(toolName)));
    if (affectedTools.length < 2) continue;

    const currentMonthlySpend = analyzedTools
      .filter((tool) => affectedTools.some((name) => normalizeToolName(name) === normalizeToolName(tool.toolName)))
      .reduce((sum, tool) => sum + tool.monthlyCost, 0);

    const monthlySavings = capRecommendationSavings(
      roundCurrency(Math.max(0, currentMonthlySpend - bundle.monthlyCost)),
      currentMonthlySpend
    );
    if (monthlySavings <= 0) continue;

    const key = `bundle:${bundle.name}:${affectedTools.sort().join(",")}`;
    if (seenRecommendationKeys.has(key)) continue;
    seenRecommendationKeys.add(key);

    recommendations.push({
      id: key,
      type: "consolidate",
      title: `Consolidate with ${bundle.name}`,
      description: bundle.note,
      monthlySavings,
      annualSavings: roundCurrency(monthlySavings * 12),
      affectedTools,
      alternative: bundle.name,
      alternativeMonthlyCost: bundle.monthlyCost,
      currentMonthlyCost: roundCurrency(currentMonthlySpend),
      effortLevel: getEffortLevel("consolidate", affectedTools.length),
      migrationNotes: `Consolidates ${affectedTools.join(", ")} into ${bundle.name}. Validate integrations, user permissions, and data retention before cutover.`,
      whyBetterForSmbs: "Reduces vendor sprawl, admin overhead, and overlapping seat spend.",
      priority: getPriority(monthlySavings),
    });
  }

  for (const tool of analyzedTools) {
    const bestAlternative = getBestAlternative(tool.toolName);
    if (bestAlternative && bestAlternative.monthlyCost < tool.monthlyCost) {
      const monthlySavings = capRecommendationSavings(tool.monthlyCost - bestAlternative.monthlyCost, tool.monthlyCost);
      const key = `switch:${tool.toolName}:${bestAlternative.name}`;
      if (!seenRecommendationKeys.has(key)) {
        seenRecommendationKeys.add(key);
        recommendations.push({
          id: key,
          type: "switch",
          title: `Switch ${tool.toolName} to ${bestAlternative.name}`,
          description: bestAlternative.whyBetterForSmbs,
          monthlySavings,
          annualSavings: roundCurrency(monthlySavings * 12),
          affectedTools: [tool.toolName],
          alternative: bestAlternative.name,
          currentTool: tool.toolName,
          currentMonthlyCost: tool.monthlyCost,
          alternativeMonthlyCost: bestAlternative.monthlyCost,
          effortLevel: getEffortLevel("switch", 1),
          migrationNotes: bestAlternative.migrationNotes,
          whyBetterForSmbs: bestAlternative.whyBetterForSmbs,
          priority: getPriority(monthlySavings),
        });
      }
    }

    if ((tool.status === "redundant" || tool.status === "underused") && tool.overlapsWith.length > 0) {
      const key = `review:${tool.toolName}`;
      if (!seenRecommendationKeys.has(key)) {
        const specificAlternative = getBestAlternative(tool.toolName);
        const fallback = getFallbackSuggestion(tool.toolName, tool.category, tool.monthlyCost * 0.7);
        const monthlySavings = capRecommendationSavings(tool.monthlyCost * 0.35, tool.monthlyCost);
        seenRecommendationKeys.add(key);
        recommendations.push({
          id: key,
          type: "review",
          title: specificAlternative
            ? `Review ${tool.toolName} vs ${specificAlternative.name}`
            : `${fallback.action} for ${tool.toolName}`,
          description: specificAlternative
            ? `${tool.toolName} overlaps with ${tool.overlapsWith.join(", ")}. ${specificAlternative.name} is the most credible lower-cost option to validate before renewal.`
            : `${tool.toolName} overlaps with ${tool.overlapsWith.join(", ")}. ${fallback.description}`,
          monthlySavings,
          annualSavings: roundCurrency(monthlySavings * 12),
          affectedTools: [tool.toolName],
          alternative: specificAlternative?.name,
          currentTool: tool.toolName,
          currentMonthlyCost: tool.monthlyCost,
          alternativeMonthlyCost: specificAlternative?.monthlyCost,
          effortLevel: "Low",
          migrationNotes: specificAlternative
            ? specificAlternative.migrationNotes
            : `Validate actual usage, owner, and renewal date, then benchmark credible SMB-friendly replacements before renewing ${tool.toolName}.`,
          whyBetterForSmbs: specificAlternative?.whyBetterForSmbs || "Keeps recommendations specific and actionable instead of defaulting to a generic review note.",
          priority: getPriority(monthlySavings),
        });
      }
    }
  }

  recommendations.sort((a, b) => b.monthlySavings - a.monthlySavings);

  const monthlySpend = roundCurrency(analyzedTools.reduce((sum, tool) => sum + tool.monthlyCost, 0));
  const potentialMonthlySavings = calculateConservativeProjectedSavings(recommendations, monthlySpend);

  return {
    id: `analysis_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    stackId: stack.id,
    analyzedAt: new Date().toISOString(),
    source: stack.source,
    toolCount: analyzedTools.length,
    tools: analyzedTools,
    categories,
    monthlySpend,
    annualSpend: roundCurrency(monthlySpend * 12),
    potentialMonthlySavings,
    potentialAnnualSavings: roundCurrency(potentialMonthlySavings * 12),
    overlaps,
    recommendations,
  };
}
