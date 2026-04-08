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
    name: "Audit",
    description: "A fast, focused one-time SaaS spend audit for teams that want quick clarity before committing to ongoing optimisation.",
    price: 49,
    interval: "one_time",
    mode: "payment",
    badge: "Launch Offer",
    features: [
      "Full SaaS stack analysis",
      "AI-powered savings report",
      "Actionable recommendations",
      "PDF export",
      "30 days report access",
    ],
    cta: "Get Audit — $49",
  },
  {
    id: "starter",
    name: "Starter",
    description: "For lean teams that want ongoing visibility into waste, renewals, and quick savings wins every month.",
    price: 79,
    interval: "month",
    mode: "subscription",
    features: [
      "Everything in Audit",
      "Monthly spend monitoring",
      "Renewal risk visibility",
      "Ongoing savings recommendations",
      "Priority support",
    ],
    cta: "Start Starter",
  },
  {
    id: "growth",
    name: "Growth",
    description: "For growing businesses that want StackSmart running as a proactive SaaS optimisation layer, not just a one-off review.",
    price: 199,
    interval: "month",
    mode: "subscription",
    highlight: true,
    badge: "Best Value",
    features: [
      "Everything in Starter",
      "Deeper savings analysis",
      "Higher-volume stack coverage",
      "Quarterly optimisation reviews",
      "Fastest support",
    ],
    cta: "Start Growth",
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
