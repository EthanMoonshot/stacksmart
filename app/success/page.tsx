import type { Metadata } from "next";
import Link from "next/link";
import EventTracker from "@/components/analytics/EventTracker";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Checkout Success",
  description: "Your StackSmart checkout completed successfully.",
  path: "/success",
});

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12">
      <EventTracker event="checkout_started" props={{ status: "completed" }} />
      <div className="w-full max-w-2xl rounded-3xl border border-green-500/20 bg-dark-900 p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-white">Payment successful</h1>
        <p className="mt-4 text-dark-400">
          Your Stripe test checkout completed successfully. You can head back to the dashboard to see your updated plan and continue onboarding.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/dashboard" className="btn-primary text-sm">Go to dashboard</Link>
          <Link href="/pricing" className="btn-secondary text-sm">View pricing</Link>
        </div>
      </div>
    </main>
  );
}
