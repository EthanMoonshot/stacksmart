import type { Metadata } from "next";
import Link from "next/link";
import PricingCards from "@/components/pricing/PricingCards";
import { getCurrentSubscription } from "@/lib/subscriptions";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Review StackSmart plans and start a secure Stripe checkout for SaaS spend optimization.",
  path: "/pricing",
});

export default async function PricingPage() {
  const subscription = await getCurrentSubscription();

  return (
    <main className="min-h-screen bg-dark-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-400">
            STRIPE TEST MODE
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Simple pricing. Obvious ROI.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-400">
            Pick a one-time audit or a subscription plan. Every option is wired for Stripe test mode so the MVP can be validated end-to-end without live billing.
          </p>
        </div>

        {subscription && (
          <div className="mx-auto max-w-3xl rounded-2xl border border-dark-800 bg-dark-900 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-dark-500">Current plan</p>
                <h2 className="mt-1 text-2xl font-bold text-white">{subscription.planName}</h2>
                <p className="mt-1 text-sm text-dark-400">Status: <span className="capitalize text-brand-300">{subscription.status}</span> · Billing: {subscription.billingInterval.replace("_", " ")}</p>
              </div>
              <Link href="/dashboard" className="btn-secondary text-sm">
                Back to dashboard
              </Link>
            </div>
          </div>
        )}

        <PricingCards currentPlanId={subscription?.planId ?? null} />

        <div className="rounded-2xl border border-dark-800 bg-dark-900 p-6 text-center text-sm text-dark-400">
          Need a custom rollout? Start with Growth, then upgrade or downgrade anytime from the same checkout flow during MVP testing.
        </div>
      </div>
    </main>
  );
}
