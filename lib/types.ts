export interface SaaSTool {
  id: string;
  toolName: string;
  cost: number;
  billingFrequency: "monthly" | "quarterly" | "annually";
  category: string;
}

export interface ToolStack {
  id: string;
  tools: SaaSTool[];
  createdAt: string;
  source: "csv" | "manual" | "sample";
}

export interface AnalyzedTool {
  id: string;
  toolName: string;
  category: string;
  monthlyCost: number;
  annualCost: number;
  billingFrequency: SaaSTool["billingFrequency"];
  status: "active" | "redundant" | "underused";
  overlapsWith: string[];
  notes: string[];
}

export interface CategoryBreakdown {
  category: string;
  monthlyCost: number;
  annualCost: number;
  toolCount: number;
}

export interface Recommendation {
  id: string;
  type: "consolidate" | "switch" | "review";
  title: string;
  description: string;
  monthlySavings: number;
  annualSavings: number;
  affectedTools: string[];
  alternative?: string;
  currentTool?: string;
  currentMonthlyCost?: number;
  alternativeMonthlyCost?: number;
  effortLevel?: "Low" | "Medium" | "High";
  migrationNotes?: string;
  whyBetterForSmbs?: string;
  priority?: "high" | "medium" | "low";
}

export interface AnalysisResult {
  id: string;
  stackId: string;
  analyzedAt: string;
  source: ToolStack["source"];
  toolCount: number;
  tools: AnalyzedTool[];
  categories: CategoryBreakdown[];
  monthlySpend: number;
  annualSpend: number;
  potentialMonthlySavings: number;
  potentialAnnualSavings: number;
  overlaps: Array<{
    category: string;
    tools: string[];
  }>;
  recommendations: Recommendation[];
}

export const BILLING_FREQUENCIES = ["monthly", "quarterly", "annually"] as const;

export const CATEGORIES = [
  "Communication",
  "Project Management",
  "Design",
  "Development",
  "Marketing",
  "Sales",
  "HR",
  "Finance",
  "Security",
  "Analytics",
  "Cloud Infrastructure",
  "Customer Support",
  "Documentation",
  "Other",
] as const;
