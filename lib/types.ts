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
