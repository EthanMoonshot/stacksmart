import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Review the terms, acceptable use, billing rules, and liability limits for StackSmart.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-dark-500 hover:text-dark-300">
          ← Back to Home
        </Link>
        <h1 className="mb-6 text-3xl font-bold text-white">Terms of Service</h1>
        <div className="space-y-4 text-sm leading-relaxed text-dark-300">
          <p><strong className="text-white">Last updated:</strong> March 30, 2026</p>
          <p>
            These Terms of Service govern your access to and use of StackSmart. By using the service, you agree to these terms on behalf of yourself or the entity you represent.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Use of the service</h2>
          <p>
            You may use StackSmart only for lawful business purposes. You are responsible for ensuring that uploaded data is accurate, that you have the right to provide it,
            and that your use of the platform complies with applicable laws and contracts.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Accounts, billing, and trials</h2>
          <p>
            Paid plans, trials, and one-time audits may be offered through Stripe. Fees, plan features, renewal timing, and cancellation rules may vary by plan. Unless required
            by law, fees are non-refundable once a billing period has started.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Customer data</h2>
          <p>
            You retain ownership of the data you submit. You grant StackSmart the limited rights needed to host, process, analyze, and display that data in order to provide the service.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Acceptable use</h2>
          <p>
            You must not misuse the platform, attempt unauthorized access, interfere with service availability, reverse engineer restricted functionality, or use the service to process illegal content.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">No guarantee of savings</h2>
          <p>
            StackSmart provides recommendations and estimates, not financial, legal, or procurement advice. Savings figures are directional projections and are not guaranteed outcomes.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Limitation of liability</h2>
          <p>
            To the maximum extent allowed by law, StackSmart will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, goodwill,
            or data. Our aggregate liability for claims relating to the service will not exceed the amount you paid us in the prior 12 months.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Changes and termination</h2>
          <p>
            We may update the service and these terms from time to time. We may suspend or terminate access for misuse, non-payment, legal risk, or security concerns.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Contact</h2>
          <p>
            Questions? Email <a href="mailto:hello@stacksmart.io" className="text-brand-400 hover:text-brand-300">hello@stacksmart.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
