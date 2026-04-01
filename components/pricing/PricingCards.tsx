"use client";

import { useMemo, useState } from "react";
import { pricingPlans } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";

export default function PricingCards({ currentPlanId }: { currentPlanId?: string | null }) {
  const [billingEmail, setBillingEmail] = useState("");
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const plan = useMemo(() => pricingPlans[0], []);

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
      trackEvent("checkout_started", { planId, billingCycle: "one_time" });
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
    } finally {
      setLoadingPlanId(null);
    }
  }

  if (!plan) return null;

  const isCurrent = currentPlanId === plan.id;

  return (
    <div className="space-y-10">
      <div className="mx-auto w-full max-w-xl rounded-[24px] border border-dark-700 bg-dark-900/75 p-5 text-left">
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
          Used to prefill Stripe Checkout and send billing receipts.
        </p>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>

      <div className="mx-auto max-w-md">
        <div className="relative flex h-full flex-col rounded-[28px] border border-brand-500/35 bg-brand-500/10 p-8 text-center shadow-[0_25px_60px_rgba(59,130,246,0.14)]">
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">{plan.badge}</span>
            </div>
          )}

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">One-time purchase</p>
            <h3 className="mt-3 text-3xl font-bold text-white">{plan.name}</h3>
            <p className="mt-3 text-sm leading-6 text-dark-200">{plan.description}</p>
          </div>

          <div className="mb-6 border-y border-dark-700 py-6">
            <div className="flex items-end justify-center gap-2">
              <span className="text-5xl font-bold text-white">${plan.price}</span>
              <span className="pb-1 text-sm text-dark-400">one-time</span>
            </div>
            <p className="mt-3 text-sm text-brand-200">Launch pricing for your first StackSmart audit.</p>
          </div>

          <ul className="mb-8 space-y-3 text-left">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-dark-100">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-success-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => startCheckout(plan.id)}
            disabled={loadingPlanId === plan.id || isCurrent}
            className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${isCurrent ? "cursor-default opacity-60" : "bg-brand-500 text-white hover:bg-brand-600"}`}
          >
            {isCurrent ? "Purchased" : loadingPlanId === plan.id ? "Redirecting..." : plan.cta}
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["CSV-first workflow", "Start with billing exports and invoices — no banking access required."],
          ["Fast buying decision", "One price, one audit, one clear deliverable. No subscription commitment."],
          ["Built for action", "You get a report you can share internally and use immediately."],
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
