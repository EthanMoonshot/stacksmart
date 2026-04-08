import type { Metadata } from "next";
import Link from "next/link";
import PricingCards from "@/components/pricing/PricingCards";
import { getCurrentSubscription } from "@/lib/subscriptions";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Choose the right StackSmart plan — one-time audit or ongoing SaaS spend optimisation — and start secure Stripe checkout.",
  path: "/pricing",
});

export default async function PricingPage() {
  const subscription = await getCurrentSubscription();

  return (
    <main className="min-h-screen bg-dark-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
            StackSmart pricing
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Pick the StackSmart plan that fits your buying stage.</h1>
          <p className="mt-4 text-lg leading-8 text-dark-300">
            Start with a focused $49 audit or move straight into ongoing SaaS optimisation with Starter or Growth.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            ["Audit", "$49 one-time"],
            ["Starter", "$49/mo"],
            ["Growth", "$99/mo"],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/75 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">{title}</p>
              <p className="mt-2 text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>

        {subscription && (
          <div className="mx-auto max-w-4xl rounded-[26px] border border-dark-700 bg-dark-900/80 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-dark-400">Current purchase</p>
                <h2 className="mt-1 text-2xl font-bold text-white">{subscription.planName}</h2>
                <p className="mt-1 text-sm text-dark-300">
                  Status: <span className="capitalize text-brand-300">{subscription.status}</span>
                  {subscription.billingInterval ? <> · Billing: {subscription.billingInterval.replace("_", " ")}</> : null}
                </p>
              </div>
              <Link href="/dashboard" className="btn-secondary text-sm">
                Back to dashboard
              </Link>
            </div>
          </div>
        )}

        <PricingCards currentPlanId={subscription?.planId ?? null} />

        <div className="rounded-[26px] border border-dark-700 bg-dark-900/70 p-6 md:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">What a buyer should know before paying</h2>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                StackSmart is built to reduce wasted SaaS spend from billing exports and invoice data. The audit is designed for buyers who want quick clarity and action, not a heavyweight procurement rollout.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "CSV-first workflow",
                "No banking access required",
                "Useful for ops, finance, and founders",
                "Audit + recurring plan options", 
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-dark-700 bg-dark-950/70 px-4 py-4 text-sm text-dark-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
