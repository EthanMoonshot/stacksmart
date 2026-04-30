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
  {
    step: "List every recurring software charge from the last 12 months",
    detail: "Pull billing data from credit cards, invoices, and expense reports. Include annual and monthly charges.",
  },
  {
    step: "Group tools by workflow or category",
    detail: "Cluster subscriptions into buckets like project management, communication, design, dev tools, storage, and analytics.",
  },
  {
    step: "Flag tools with overlapping jobs",
    detail: "Look for two or more tools serving the same function across teams — these are consolidation candidates.",
  },
  {
    step: "Check whether seat counts match actual usage",
    detail: "Compare licensed seats to active users. If fewer than 70% of seats show recent activity, the tool is over-provisioned.",
  },
  {
    step: "Review whether pricing tiers still fit",
    detail: "Check if you are paying for an Enterprise or Pro tier when a lower tier covers the features your team actually uses.",
  },
  {
    step: "Mark renewals worth reviewing before they auto-process",
    detail: "Identify contracts renewing in the next 60 days. Flag any that should be renegotiated, downgraded, or cancelled.",
  },
  {
    step: "Sort every tool into a decision bucket",
    detail: "Classify each subscription as keep, cut, consolidate, or renegotiate. This is the output that drives action.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Software Subscription Audit Checklist | StackSmart",
      description:
        "A practical checklist for reviewing recurring software spend — find overlaps, right-size seats, and decide what to cut, consolidate, or renegotiate.",
      url: "https://stacksmart.app/software-subscription-audit-checklist",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "Software Subscription Audit Checklist", item: "https://stacksmart.app/software-subscription-audit-checklist" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What should a software subscription audit checklist produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A completed audit checklist should produce four things: a full inventory of recurring software charges, a list of waste flags (unused seats, duplicate tools, tier mismatches), a renewal calendar with upcoming risk dates, and a decision for every tool — keep, cut, consolidate, or renegotiate. Without these outputs, the audit is just an inventory exercise.",
          },
        },
        {
          "@type": "Question",
          name: "How often should you run a software subscription audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most teams benefit from a full audit every 6 months, with lighter renewal-focused reviews monthly. The key trigger is any period where headcount changes significantly, a budget cycle starts, or renewals cluster together. Teams that only audit annually often miss waste that accumulates between reviews.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a manual checklist and a SaaS audit tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A manual checklist helps you structure the review process, but you do all the data gathering, categorization, and analysis yourself in spreadsheets. A SaaS audit tool like StackSmart automates the heavy lifting — it ingests billing data, groups tools by category, flags duplicates and waste, and produces a formatted report with specific savings recommendations. The checklist tells you what to look for; the tool does the looking.",
          },
        },
        {
          "@type": "Question",
          name: "How do I prioritize which subscriptions to review first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with the highest-cost subscriptions and any renewals coming up in the next 60 days — these have the largest savings potential and the most time pressure. Then review tools where you suspect low adoption or overlap with other tools. Leave well-adopted, reasonably-priced tools for last.",
          },
        },
      ],
    },
  ],
};

export default function SoftwareSubscriptionAuditChecklistPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Audit checklist</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Software subscription audit checklist</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              A step-by-step checklist for reviewing recurring software spend. Use it standalone or pair it with StackSmart to turn the raw data into a formatted savings report.
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

      {/* Direct answer block — GEO-friendly */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">What should a completed audit produce?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300 max-w-[65ch]">
              A completed software subscription audit should produce four things: a full inventory of recurring charges, clear waste flags (unused seats, duplicate tools, tier mismatches), a renewal calendar with upcoming risk dates, and a specific decision for every subscription — keep, cut, consolidate, or renegotiate. Without those outputs, the audit is just an inventory exercise that does not drive action.
            </p>
          </div>
        </div>
      </section>

      {/* The checklist */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-dark-700 bg-dark-900/75 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">The 7-step checklist</h2>
            <div className="mt-6 space-y-4">
              {checklist.map((item, idx) => (
                <div key={item.step} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  <div className="flex gap-4">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">{idx + 1}</div>
                    <div>
                      <p className="text-sm font-medium leading-7 text-dark-200">{item.step}</p>
                      <p className="mt-1 text-sm leading-7 text-dark-400">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Output framework — 4 buckets */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The four decision buckets</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Every subscription in your stack should land in one of these buckets by the time the audit is done. If a tool does not have a clear bucket, it has not been reviewed yet.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-emerald-400">Keep</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">High adoption, fair price, no overlap. Leave it alone. This is healthy spend that does not need action.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-red-400">Cut</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">Low or zero usage, abandoned trials, tools nobody remembers signing up for. Cancel before the next billing cycle.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-brand-400">Consolidate</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">Two or more tools serving the same job. Pick the best one, migrate users, and cancel the rest.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-amber-400">Renegotiate</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">Worth keeping, but the price or tier is wrong. Right-size seats, downgrade plans, or negotiate better terms before renewal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manual checklist vs StackSmart comparison */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual checklist vs StackSmart</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The checklist above works on its own. StackSmart makes it faster by automating the data-heavy steps.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>You build the inventory from scratch in a spreadsheet</li>
                <li>Category grouping and overlap detection are manual</li>
                <li>Seat utilisation requires checking each tool individually</li>
                <li>Output format depends on your spreadsheet skills</li>
                <li>Works for small stacks under 15 tools</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">With StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Upload a billing CSV and the inventory builds itself</li>
                <li>Tools auto-grouped by category with overlap flags</li>
                <li>Seat and tier analysis included in the report</li>
                <li>Formatted output ready to share with your team</li>
                <li>Scales to any stack size without extra effort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_software_subscription_audit_checklist"
            heading="Email yourself the sample report"
            body="See what the output looks like when the checklist work is done by StackSmart instead of a spreadsheet."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* Pricing routing */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Ready to skip the spreadsheet?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            If the checklist confirmed you have work to do, StackSmart turns the billing data into a report with clear next actions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">One-time audit</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Snapshot — $49</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upload billing data once, get a full savings report. No subscription required.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_routing_snapshot" }} className="btn-primary mt-5 inline-block text-sm">
                Get Snapshot
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ongoing oversight</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Starter or Growth — from $29/mo</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Monthly savings visibility with renewal alerts and ongoing recommendations.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_routing_recurring" }} className="btn-secondary mt-5 inline-block text-sm">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">See the sample report first</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Before you upload anything, open the public sample report and judge whether the output is useful for your own stack review.
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
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "Owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
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
        ]}
      />

      <Footer />
    </main>
  );
}
