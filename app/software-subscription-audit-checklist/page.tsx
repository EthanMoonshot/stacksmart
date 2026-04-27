import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Software Subscription Audit Checklist",
  description:
    "Use this software subscription audit checklist to review recurring software spend, find overlaps, and decide what to cut, consolidate, or renegotiate.",
  path: "/software-subscription-audit-checklist",
});

const checklist = [
  "List every recurring software charge from the last 12 months",
  "Group tools by workflow or category",
  "Flag tools with overlapping jobs",
  "Check whether seat counts still match team usage",
  "Review whether pricing tiers still fit current needs",
  "Mark renewals or vendors worth renegotiating",
  "Separate keep / cut / consolidate / renegotiate decisions",
];

export default function SoftwareSubscriptionAuditChecklistPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Checklist page</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Software subscription audit checklist for fast cost review</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If you want a simple way to review recurring software spend, start with this checklist. Then use StackSmart to turn the raw billing data into a more actionable savings report.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_checklist_primary" }} className="btn-primary text-sm sm:text-base">
                See the report output
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_secondary" }} className="btn-secondary text-sm sm:text-base">
                See pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-dark-700 bg-dark-900/75 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">Audit checklist</h2>
            <div className="mt-6 space-y-4">
              {checklist.map((item, idx) => (
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">Where StackSmart helps after the checklist</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The checklist helps you structure the review. StackSmart helps you move faster by turning billing data into a buyer-facing report with category spend, likely savings, and clear action paths.
              </p>
            </div>
            <div className="rounded-[24px] border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Good fit for</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>SMB founders with messy recurring software spend</li>
                <li>Ops leads trying to clean up duplicate tools</li>
                <li>Teams preparing for renewals or budget pressure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit guides"
        title="Move from checklist to action"
        description="These related pages help you turn a manual checklist into a faster software-spend decision path, with clearer next steps for review, comparison, and savings analysis."
        links={[
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Follow a simple audit sequence without turning it into a giant finance project.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing data into keep, cut, consolidate, and renegotiate actions.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "Compare when a lightweight cost review tool fits better than a broad procurement platform.",
          },
          {
            href: "/saas-management-software",
            title: "SaaS management software",
            description: "See when lightweight SaaS management software is enough for your team size and goals.",
          },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_software_subscription_audit_checklist"
            heading="Email yourself the sample report"
            body="If this checklist is useful, keep the sample report close too. It makes the StackSmart output easy to revisit or share later."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the sample report first</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Before you upload anything, open the public sample report and judge whether the output is useful enough for your own stack review.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_checklist_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
