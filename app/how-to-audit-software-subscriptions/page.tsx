import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "How to Audit Software Subscriptions",
  description:
    "Learn how to audit software subscriptions quickly, what to look for first, and how StackSmart turns billing data into concrete keep, cut, consolidate, and renegotiate decisions.",
  path: "/how-to-audit-software-subscriptions",
});

const steps = [
  "Pull the last 12 months of recurring software charges",
  "Group subscriptions by category or workflow",
  "Mark duplicate tools and stale subscriptions",
  "Check seat counts and pricing tiers for mismatch",
  "Prioritize the biggest, clearest savings opportunities first",
];

export default function HowToAuditSoftwareSubscriptionsPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">How-to page</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">How to audit software subscriptions without turning it into a giant finance project</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              The goal is not perfect procurement data. The goal is to find the most obvious waste, overlap, and pricing mismatch quickly enough to act.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_how_to_audit_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_how_to_audit_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-dark-700 bg-dark-900/75 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">Simple audit sequence</h2>
            <div className="mt-6 space-y-4">
              {steps.map((item, idx) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">{idx + 1}</div>
                  <p className="text-sm leading-7 text-dark-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_how_to_audit_software_subscriptions"
            heading="Email yourself the sample report"
            body="If you are doing this review later or sharing it with someone else, send the proof asset to your inbox now."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit pages"
        title="Go deeper on software-spend review"
        description="If you are auditing subscriptions now, these related pages help you compare methods, move into a structured checklist, and evaluate a faster report-driven path."
        links={[
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Use a practical checklist to review recurring software spend step by step.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing data into savings actions you can act on quickly.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with broader spend-management options for small teams.",
          },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">See what the output looks like</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report to see how StackSmart turns raw billing data into concrete actions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_how_to_audit_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_how_to_audit_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
