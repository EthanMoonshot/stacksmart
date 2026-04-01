import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Learn how StackSmart collects, uses, secures, and retains customer data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-950 font-sans">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-dark-500 hover:text-dark-300">
          ← Back to Home
        </Link>
        <h1 className="mb-6 text-3xl font-bold text-white">Privacy Policy</h1>
        <div className="space-y-4 text-sm leading-relaxed text-dark-300">
          <p><strong className="text-white">Last updated:</strong> March 30, 2026</p>
          <p>
            StackSmart (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides SaaS spend analysis, reporting, and optimization tools for business customers.
            This Privacy Policy explains what information we collect, how we use it, and the choices available to you.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Information we collect</h2>
          <p>
            We may collect business contact details such as your name, work email, company name, company size, billing status, and support messages.
            When you upload billing files or forward invoices, we process the data needed to identify tools, pricing, billing cadence, and savings opportunities.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">How we use information</h2>
          <p>
            We use your information to operate the service, generate analyses and reports, process payments, send product emails, improve the product,
            protect against abuse, and comply with legal obligations.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Analytics and monitoring</h2>
          <p>
            We use privacy-focused analytics and error monitoring tools to understand product usage and diagnose failures. These tools are configured to avoid collecting
            sensitive billing-file contents where possible.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Sharing</h2>
          <p>
            We do not sell your data. We may share limited information with service providers that help us run StackSmart, including hosting, payments, email delivery,
            analytics, and monitoring vendors, subject to contractual protections.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Security and retention</h2>
          <p>
            We use reasonable administrative, technical, and organizational safeguards to protect your data. No system is perfectly secure, but we aim to minimize access,
            encrypt data in transit, and retain information only as long as needed for service delivery, legal compliance, and legitimate business purposes.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Your choices</h2>
          <p>
            You can request access, correction, or deletion of personal information we hold about you, subject to legal and operational constraints. You can also opt out of
            non-essential product emails at any time.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-white">Contact</h2>
          <p>
            Questions about this policy? Email <a href="mailto:hello@stacksmart.app" className="text-brand-400 hover:text-brand-300">hello@stacksmart.app</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
