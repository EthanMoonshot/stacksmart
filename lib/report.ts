import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { AnalysisResult, Recommendation } from "@/lib/types";

const SHARED_REPORTS_DIR = path.join(process.cwd(), "data", "reports");

export interface ReportSnapshot {
  id: string;
  createdAt: string;
  analysis: AnalysisResult;
}

export interface ReportViewModel {
  analysis: AnalysisResult;
  recommendationCount: number;
  monthlyProjection: number;
  annualProjection: number;
  threeYearProjection: number;
  roiPercentage: number;
  prioritizedRecommendations: Recommendation[];
  quickWins: Recommendation[];
  highestSavings: Recommendation[];
}

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function capProjectedSavings(projectedSavings: number, monthlySpend: number) {
  if (monthlySpend <= 0) return 0;
  const realisticCeiling = roundCurrency(monthlySpend * 0.7);
  if (projectedSavings > monthlySpend) return realisticCeiling;
  return roundCurrency(Math.min(projectedSavings, realisticCeiling));
}

export function buildReportViewModel(analysis: AnalysisResult): ReportViewModel {
  const prioritizedRecommendations = [...analysis.recommendations].sort((a, b) => b.monthlySavings - a.monthlySavings);
  const quickWins = prioritizedRecommendations
    .filter((item) => item.effortLevel === "Low" || item.priority === "high")
    .slice(0, 4);
  const highestSavings = prioritizedRecommendations.slice(0, 3);
  const monthlyProjection = capProjectedSavings(analysis.potentialMonthlySavings, analysis.monthlySpend);
  const annualProjection = roundCurrency(monthlyProjection * 12);
  const threeYearProjection = roundCurrency(annualProjection * 3);
  const roiPercentage = analysis.monthlySpend > 0 ? roundCurrency((monthlyProjection / analysis.monthlySpend) * 100) : 0;

  return {
    analysis,
    recommendationCount: prioritizedRecommendations.length,
    monthlyProjection,
    annualProjection,
    threeYearProjection,
    roiPercentage,
    prioritizedRecommendations,
    quickWins,
    highestSavings,
  };
}

export async function createSharedReport(analysis: AnalysisResult): Promise<ReportSnapshot> {
  const id = crypto.randomUUID().slice(0, 8);
  const snapshot: ReportSnapshot = {
    id,
    createdAt: new Date().toISOString(),
    analysis,
  };

  await fs.mkdir(SHARED_REPORTS_DIR, { recursive: true });
  await fs.writeFile(path.join(SHARED_REPORTS_DIR, `${id}.json`), JSON.stringify(snapshot, null, 2));

  return snapshot;
}

export async function readSharedReport(id: string): Promise<ReportSnapshot | null> {
  try {
    const raw = await fs.readFile(path.join(SHARED_REPORTS_DIR, `${id}.json`), "utf8");
    return JSON.parse(raw) as ReportSnapshot;
  } catch {
    return null;
  }
}
