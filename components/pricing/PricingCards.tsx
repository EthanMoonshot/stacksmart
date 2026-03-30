"use client";

import { useMemo, useState } from "react";
import { getPlanGroup } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";

const planFamilies = [
  {
    name: "One-Time Audit",
    description: "A fixed-cost audit for teams that want proof before a subscription.",
    features: [
      "One complete SaaS audit",
      "Savings report + PDF export",
      "30 days of access",
      "Email support",
    ],
  },
  {
    name: "Starter",
    description: "A lightweight plan for smaller teams that still want proactive savings detection.",
    features: [
      "Monthly monitoring",
      "Dashboard + analysis history",
      "Email alerts",
      "5 user seats",
    ],
  },
  {
    name: "Growth",
    description: "The best fit for growing teams with more vendors, renewals, and optimization opportunities.",
    features: [
      "Everything in Starter",
      "Renewal calendar",
      "Negotiation guidance",
      "Priority support",
    ],
    badge: "Most Popular",
    highlight: true,
  },
  {
    name: "Scale",
    description: "For larger teams that need broader oversight, collaboration, and support.",
    features: [
      "Everything in Growth",
      "Unlimited users",
      "Advanced reporting",
      "Integration support",
    ],
  },
];

export default function PricingCards({ currentPlanId }: { currentPlanId?: string | null }) {
  const [annual, setAnnual] = useState(false);
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cards = useMemo(() => {
    return planFamilies.map((family) => {
      if (family.name === "One-Time Audit") {
        return getPlanGroup("One-Time Audit")[0];
      }
      return getPlanGroup(family.name).find((plan) => (annual ? plan.interval === "year" : plan.interval === "month"));
    });
  }, [annual]);

  async function startCheckout(planId: string) {
    setLoadingPlanId(planId);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, email: "demo@stacksmart.io" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to start checkout.");
      trackEvent("checkout_started", { planId, billingCycle: annual ? "annual" : "monthly" });
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
    } finally {
      setLoadingPlanId(null);
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-3 bg-dark-900 border border-dark-700 rounded-full px-4 py-2">
          <span className={`text-sm font-medium ${!annual ? "text-white" : "text-dark-500"}`}>Monthly</span>
          <button
            onClick={() => setAnnual((prev) => !prev)}
            className={`relative h-6 w-12 rounded-full transition-colors ${annual ? "bg-brand-500" : "bg-dark-700"}`}
            aria-label="Toggle annual billing"
          >
            <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-white" : "text-dark-500"}`}>Annual</span>
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-400">Save 20%</span>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((plan, index) => {
          const family = planFamilies[index];
          if (!plan) return null;
          const isCurrent = currentPlanId === plan.id;
          const priceLabel = plan.interval === "one_time" ? `$${plan.price}` : plan.interval === "year" ? `$${plan.price}` : `$${plan.price}`;
          const suffix = plan.interval === "one_time" ? "one-time" : plan.interval === "year" ? "per year" : "per month";

          return (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-2xl border p-6 ${family.highlight ? "border-brand-500/40 bg-brand-500/10 shadow-lg shadow-brand-500/10" : "border-dark-800 bg-dark-900"}`}
            >
              {family.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">{family.badge}</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{family.name}</h3>
                <p className="mt-2 text-sm text-dark-400">{family.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-white">{priceLabel}</span>
                  <span className="pb-1 text-sm text-dark-400">{suffix}</span>
                </div>
                {plan.interval === "year" && <p className="mt-1 text-xs text-green-400">Annual billing with 20% discount</p>}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {[...new Set([...(plan.features || []), ...family.features])].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-dark-300">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => startCheckout(plan.id)}
                disabled={loadingPlanId === plan.id || isCurrent}
                className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${family.highlight ? "bg-brand-500 text-white hover:bg-brand-400" : "border border-dark-700 bg-dark-800 text-white hover:bg-dark-700"} ${isCurrent ? "cursor-default opacity-60" : ""}`}
              >
                {isCurrent ? "Current plan" : loadingPlanId === plan.id ? "Redirecting..." : plan.cta}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
