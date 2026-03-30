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
    name: "One-Time Audit",
    description: "Best for a fast savings review before you commit to ongoing optimization.",
    price: 299,
    interval: "one_time",
    mode: "payment",
    features: [
      "One full SaaS spend audit",
      "AI savings report + PDF export",
      "Priority recommendations in under 24 hours",
      "30 days of report access",
      "Email support",
    ],
    cta: "Buy Audit",
  },
  {
    id: "starter-monthly",
    name: "Starter",
    description: "For lean teams that want continuous visibility without enterprise overhead.",
    price: 99,
    interval: "month",
    mode: "subscription",
    features: [
      "Monthly stack analysis",
      "Dashboard + reports",
      "Up to 5 users",
      "Email alerts",
      "Standard support",
    ],
    cta: "Start Starter",
  },
  {
    id: "starter-yearly",
    name: "Starter",
    description: "Annual Starter plan with a 20% discount.",
    price: 950,
    interval: "year",
    mode: "subscription",
    features: [
      "Everything in Starter monthly",
      "Billed annually",
      "20% savings vs monthly",
    ],
    cta: "Start Starter Annual",
  },
  {
    id: "growth-monthly",
    name: "Growth",
    description: "The sweet spot for growing teams with enough SaaS spend to optimize every month.",
    price: 149,
    interval: "month",
    mode: "subscription",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Renewal calendar",
      "Price increase alerts",
      "Negotiation guidance",
      "Priority support",
    ],
    cta: "Start Growth",
  },
  {
    id: "growth-yearly",
    name: "Growth",
    description: "Annual Growth plan with a 20% discount.",
    price: 1430,
    interval: "year",
    mode: "subscription",
    features: [
      "Everything in Growth monthly",
      "Billed annually",
      "20% savings vs monthly",
    ],
    cta: "Start Growth Annual",
  },
  {
    id: "scale-monthly",
    name: "Scale",
    description: "For bigger teams with multi-tool sprawl and more stakeholders to manage.",
    price: 249,
    interval: "month",
    mode: "subscription",
    features: [
      "Everything in Growth",
      "Advanced reporting",
      "Unlimited users",
      "Integration support",
      "Dedicated success support",
    ],
    cta: "Start Scale",
  },
  {
    id: "scale-yearly",
    name: "Scale",
    description: "Annual Scale plan with a 20% discount.",
    price: 2390,
    interval: "year",
    mode: "subscription",
    features: [
      "Everything in Scale monthly",
      "Billed annually",
      "20% savings vs monthly",
    ],
    cta: "Start Scale Annual",
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
