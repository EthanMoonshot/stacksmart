export type BillingInterval = "month" | "year" | "one_time";

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: BillingInterval;
  mode: "payment" | "subscription";
  highlight?: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "audit",
    name: "SaaS Audit",
    description: "A fast, focused one-time audit to uncover savings across your SaaS stack before you commit to anything bigger.",
    price: 49,
    interval: "one_time",
    mode: "payment",
    highlight: true,
    badge: "Launch Offer",
    features: [
      "Full SaaS stack analysis",
      "AI-powered savings report",
      "Actionable recommendations",
      "PDF export",
      "30 days report access",
    ],
    cta: "Get Your Audit — $49",
  },
];

export function formatPlanPrice(plan: PricingPlan) {
  if (plan.interval === "one_time") return `$${plan.price}`;
  if (plan.interval === "year") return `$${plan.price}/yr`;
  return `$${plan.price}/mo`;
}

export function getPlanById(planId: string) {
  return pricingPlans.find((plan) => plan.id === planId) ?? null;
}

export function getPlanGroup(baseName: string) {
  return pricingPlans.filter((plan) => plan.name === baseName);
}
