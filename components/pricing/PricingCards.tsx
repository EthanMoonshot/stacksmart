"use client";

import { useMemo, useState } from "react";
import { getPlanGroup } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";

const planFamilies = [
  {
    name: "One-Time Audit",
    description: "For teams that want proof before committing to ongoing monitoring.",
    fit: "Best for first-time buyers",
    features: ["One complete SaaS audit", "Action-ready report", "30 days of access", "Email support"],
  },
  {
    name: "Starter",
    description: "For smaller teams that want recurring visibility into wasted spend.",
    fit: "Best for lean teams",
    features: ["Monthly monitoring", "Dashboard + report history", "5 user seats", "Email alerts"],
  },
  {
    name: "Growth",
    description: "For growing teams with enough sprawl and renewal pressure to justify action every month.",
    fit: "Best for most SMBs",
    features: ["Everything in Starter", "Renewal calendar", "Negotiation guidance", "Priority support"],
    badge: "Most Popular",
    highlight: true,
  },
  {
    name: "Scale",
    description: "For larger teams with more stakeholders, more tools, and more reporting needs.",
    fit: "Best for broad oversight",
    features: ["Everything in Growth", "Unlimited users", "Advanced reporting", "Integration support"],
  },
];

const comparisonRows = [
  ["Primary outcome", "One-off savings audit", "Recurring monitoring", "Recurring monitoring + negotiation support", "Broader oversight + collaboration"],
  ["Recommended for", "First audit", "<25 employees", "12–100 employees", "Complex multi-team stack"],
  ["Monitoring cadence", "Single run", "Monthly", "Monthly", "Monthly"],
  ["Renewal / vendor guidance", "—", "—", "Included", "Included"],
  ["Seats", "Viewer access", "Up to 5", "Up to 15", "Unlimited"],
];

function formatPriceLabel(price: number, interval: string) {
  if (interval === "one_time") return `$${price}`;
  if (interval === "year") return `$${price}`;
  return `$${price}`;
}

export default function PricingCards({ currentPlanId }: { currentPlanId?: string | null }) {
  const [annual, setAnnual] = useState(false);
  const [billingEmail, setBillingEmail] = useState("");
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cards = useMemo(() => {
    return planFamilies.map((family) => {
      if (family.name === "One-Time Audit") return getPlanGroup("One-Time Audit")[0];
      return getPlanGroup(family.name).find((plan) => (annual ? plan.interval === "year" : plan.interval === "month"));
    });
  }, [annual]);

  async function startCheckout(planId: string) {
    if (!billingEmail.trim()) {
      setError("Enter your work email before continuing to secure checkout.");
      return;
    }

    setLoadingPlanId(planId);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, email: billingEmail.trim() }),
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
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-dark-700 bg-dark-900 px-4 py-2">
          <span className={`text-sm font-medium ${!annual ? "text-white" : "text-dark-400"}`}>Monthly</span>
          <button
            onClick={() => setAnnual((prev) => !prev)}
            className={`relative h-6 w-12 rounded-full transition-colors ${annual ? "bg-brand-500" : "bg-dark-700"}`}
            aria-label="Toggle annual billing"
          >
            <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-white" : "text-dark-400"}`}>Annual</span>
          <span className="rounded-full border border-success-500/20 bg-success-900/30 px-2 py-0.5 text-xs font-semibold text-success-500">Save 20%</span>
        </div>
        <p className="max-w-2xl text-sm text-dark-300">
          Annual plans are for teams that already know this is an ongoing discipline. One-Time Audit stays available as the lowest-friction proof point.
        </p>
        <div className="w-full max-w-xl rounded-[24px] border border-dark-700 bg-dark-900/75 p-5 text-left">
          <label htmlFor="billing-email" className="mb-2 block text-sm font-medium text-dark-200">
            Work email for secure checkout
          </label>
          <input
            id="billing-email"
            type="email"
            value={billingEmail}
            onChange={(e) => setBillingEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-dark-700 bg-dark-950 px-4 py-3 text-white placeholder:text-dark-500 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <p className="mt-2 text-xs leading-5 text-dark-400">
            Used to prefill Stripe Checkout and send billing receipts. Distill doesn&apos;t require a sales call to buy.
          </p>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((plan, index) => {
          const family = planFamilies[index];
          if (!plan) return null;
          const isCurrent = currentPlanId === plan.id;
          const priceLabel = formatPriceLabel(plan.price, plan.interval);
          const suffix = plan.interval === "one_time" ? "one-time" : plan.interval === "year" ? "per year" : "per month";

          return (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col rounded-[26px] border p-6 ${family.highlight ? "border-brand-500/35 bg-brand-500/10 shadow-[0_25px_60px_rgba(59,130,246,0.14)]" : "border-dark-700 bg-dark-900/85"}`}
            >
              {family.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">{family.badge}</span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-300">{family.fit}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{family.name}</h3>
                <p className="mt-2 text-sm leading-6 text-dark-300">{family.description}</p>
              </div>

              <div className="mb-6 border-y border-dark-700 py-5">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-white">{priceLabel}</span>
                  <span className="pb-1 text-sm text-dark-400">{suffix}</span>
                </div>
                {plan.interval === "year" ? (
                  <p className="mt-2 text-xs text-success-500">Annual billing with 20% savings vs monthly pricing</p>
                ) : (
                  <p className="mt-2 text-xs text-dark-400">Clear ROI framing, no hidden add-ons for the core workflow</p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {[...new Set([...(plan.features || []), ...family.features])].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-dark-200">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-success-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => startCheckout(plan.id)}
                disabled={loadingPlanId === plan.id || isCurrent}
                className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${family.highlight ? "bg-brand-500 text-white hover:bg-brand-600" : "border border-dark-700 bg-dark-950 text-white hover:bg-dark-800"} ${isCurrent ? "cursor-default opacity-60" : ""}`}
              >
                {isCurrent ? "Current plan" : loadingPlanId === plan.id ? "Redirecting..." : "Continue to checkout"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-[26px] border border-dark-700 bg-dark-900/75">
        <div className="border-b border-dark-700 px-6 py-5">
          <h3 className="text-xl font-semibold text-white">Plan comparison</h3>
          <p className="mt-1 text-sm text-dark-300">Enough structure to choose quickly, without enterprise-style complexity.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-dark-950/80 text-xs uppercase tracking-[0.18em] text-dark-400">
              <tr>
                <th className="px-6 py-4">Category</th>
                {planFamilies.map((plan) => (
                  <th key={plan.name} className="px-6 py-4">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]} className="border-t border-dark-700">
                  {row.map((cell, idx) => (
                    <td key={cell} className={`px-6 py-4 align-top ${idx === 0 ? "font-medium text-white" : "text-dark-200"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["CSV only setup", "You can start without giving Distill banking access."],
          ["No card required for the free audit request", "Use the waitlist flow to validate interest before purchase."],
          ["Upgrade or downgrade later", "Billing flows remain flexible once you move to monitoring."],
        ].map(([title, copy]) => (
          <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/75 p-5">
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm leading-6 text-dark-300">{copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
