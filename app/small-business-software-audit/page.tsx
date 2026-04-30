import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Small Business Software Audit",
  description:
    "Run a software audit for your small business without a finance team or IT department. StackSmart turns billing exports into a clear keep, cut, consolidate, and renegotiate report.",
  path: "/small-business-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/small-business-software-audit"),
      url: absoluteUrl("/small-business-software-audit"),
      name: "Small Business Software Audit | StackSmart",
      description:
        "Run a software audit for your small business without a finance team or IT department. StackSmart turns billing exports into a clear savings report.",
      isPartOf: { "@id": absoluteUrl("/") },
      publisher: {
        "@type": "Organization",
        name: "StackSmart",
        url: absoluteUrl("/"),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Small Business Software Audit",
          item: absoluteUrl("/small-business-software-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a small business software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small business software audit is a structured review of every software subscription your business pays for. The goal is to find waste — duplicate tools, unused seats, auto-renewals nobody reviewed, and pricing tiers your team has outgrown or underuses — and produce a clear action list: keep, cut, consolidate, or renegotiate.",
          },
        },
        {
          "@type": "Question",
          name: "How do you run a software audit without a dedicated IT or finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export billing data from your payment processor, credit card, or accounting tool. Upload the file to StackSmart. The report groups your subscriptions by category, flags duplicates and waste, highlights upcoming renewals, and gives you specific actions — without needing a procurement specialist or IT admin.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a small business audit its software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At minimum, run a full review once a year before your largest annual contracts renew. Many small businesses find quarterly check-ins useful once they have a baseline. A one-time audit is the fastest way to find out whether the problem is worth ongoing attention.",
          },
        },
        {
          "@type": "Question",
          name: "What data do I need to start a software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A billing export covering 6 to 12 months of recurring charges is enough. Most small businesses pull this from Xero, QuickBooks, their credit card, or Stripe. No bank login or live integrations required.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Duplicate tools",
    detail: "Two project management, two file-storage, or two design tools running simultaneously — often from different team members signing up independently.",
    color: "text-red-400",
    tag: "Cut one",
  },
  {
    label: "Ghost seats",
    detail: "Licences provisioned during onboarding that were never removed after someone left, changed roles, or moved to a different tool.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Trial bleed",
    detail: "Free trials that converted to paid plans and kept billing quietly. Common with marketing tools, scheduling apps, and niche productivity software.",
    color: "text-amber-400",
    tag: "Cut",
  },
  {
    label: "Tier mismatch",
    detail: "Paying for a Pro or Business plan because someone checked a feature once during evaluation, not because your team actually uses it daily.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    label: "Unreviewed renewals",
    detail: "Annual contracts that auto-renew before anyone checks whether the tool is still useful, competitively priced, or used by the team.",
    color: "text-orange-400",
    tag: "Review now",
  },
  {
    label: "Overlap across departments",
    detail: "Sales using one video platform, ops using another, and admin using a third — three subscriptions doing the same job across a 12-person team.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
];

export default function SmallBusinessSoftwareAuditPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Small business software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find software waste before it renews again
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Most small businesses carry avoidable software spend — duplicate tools, seats nobody uses, trials that converted to paid plans, and annual contracts renewing on autopilot. A software audit finds exactly what to cut, consolidate, and renegotiate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "smb_software_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "smb_software_audit_secondary" }}
                className="btn-secondary text-sm sm:text-base"
              >
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Direct Answer Block */}
      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              How do you audit software subscriptions for a small business?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from your payment processor, credit card, or accounting tool. Group every charge by category — project management, communication, file storage, design, analytics, and so on. Look for duplicates across categories, seats that no longer reflect your headcount, pricing tiers with features nobody uses, and renewals within the next 60 to 90 days. Assign each subscription a decision: keep, cut, consolidate, or renegotiate. Act on the highest-value items first.
            </p>
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste in small businesses</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces from SMB billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteSignals.map((s) => (
              <div key={s.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${s.color}`}>{s.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day workflow */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a small business</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This runs in spare time. No dedicated ops or finance role required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export transactions from your accounting tool, payment processor, or business credit card. Cover at least 6 months so annual charges appear. The output should be a list of every recurring software charge with vendor name, amount, and billing frequency.",
              ],
              [
                "Week 2 — Categorise and flag",
                "Group every subscription by function: communication, project management, file storage, design, analytics, finance, HR, marketing. Mark any category with more than one active tool. Flag seats that exceed your current headcount or where active usage looks low.",
              ],
              [
                "Week 3 — Size and prioritise",
                "Calculate the annual cost of each flagged item. Rank by dollar impact and ease of action. Start with cancellations — they require no negotiation. Then move to consolidations, downgrades, and renegotiations.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel unused subscriptions before the next billing cycle. Initiate consolidation where you identified overlaps. Open renegotiation conversations on contracts renewing within 90 days. Document each decision so the next review has a clean baseline.",
              ],
            ].map(([title, copy], i) => (
              <div key={title} className="flex gap-4 sm:gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-dark-700 bg-dark-900 text-sm font-semibold text-brand-300">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample findings */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a small business software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are real categories of findings from SMB billing exports. Actual amounts vary by team size and stack.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding type</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Duplicate project management tools", "Consolidate to one", "$1,800 – $6,000/yr"],
                  ["Ghost seats on collaboration platform", "Remove or downgrade", "$900 – $3,600/yr"],
                  ["Forgotten trial converted to paid", "Cancel immediately", "$240 – $1,200/yr"],
                  ["Enterprise tier, Pro-level usage", "Downgrade tier", "$600 – $2,400/yr"],
                  ["Annual renewal, no usage review", "Renegotiate before auto-renew", "$500 – $4,000/yr"],
                  ["Three storage subscriptions, one workflow", "Consolidate", "$480 – $1,800/yr"],
                ].map(([finding, action, impact]) => (
                  <tr key={finding} className="border-b border-dark-800/60">
                    <td className="py-3 pr-6 text-white">{finding}</td>
                    <td className="py-3 pr-6">{action}</td>
                    <td className="py-3">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How StackSmart helps */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How StackSmart helps small businesses audit faster</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The manual path works. StackSmart makes it faster and more structured, without a platform rollout.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export billing data, paste into a spreadsheet</li>
                <li>Manually categorise each line item</li>
                <li>Cross-reference seat counts by hand</li>
                <li>Build your own prioritisation logic</li>
                <li>Format a report to share internally</li>
                <li>Repeat from scratch at next review</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload billing export (CSV or invoice data)</li>
                <li>Automatic categorisation and duplicate detection</li>
                <li>Renewal risk flags and seat-count analysis</li>
                <li>Prioritised keep/cut/consolidate/renegotiate actions</li>
                <li>Shareable savings report ready to use immediately</li>
                <li>Repeatable without starting over each time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is this the right fit for your business?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led business with 5 to 50 staff</li>
                <li>Multiple recurring software subscriptions you have not reviewed recently</li>
                <li>No dedicated IT, ops, or procurement team</li>
                <li>You want a report and action list, not a platform to manage</li>
                <li>Billing data available from accounting software or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise IT team needing discovery agents and compliance controls</li>
                <li>Fewer than five software subscriptions</li>
                <li>Primary goal is security governance, not cost reduction</li>
                <li>Need automated provisioning or user lifecycle management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What is a small business software audit?",
                "A small business software audit is a structured review of every software subscription your business pays for. The goal is to find waste — duplicate tools, unused seats, auto-renewals nobody reviewed, and pricing tiers your team has outgrown or underuses — and produce a clear action list: keep, cut, consolidate, or renegotiate.",
              ],
              [
                "How do you run a software audit without a dedicated IT or finance team?",
                "Export billing data from your payment processor, credit card, or accounting tool. Upload the file to StackSmart. The report groups your subscriptions by category, flags duplicates and waste, highlights upcoming renewals, and gives you specific actions — without needing a procurement specialist or IT admin.",
              ],
              [
                "How often should a small business audit its software subscriptions?",
                "At minimum, run a full review once a year before your largest annual contracts renew. Many small businesses find quarterly check-ins useful once they have a baseline. A one-time audit is the fastest way to find out whether the problem is worth ongoing attention.",
              ],
              [
                "What data do I need to start a software audit?",
                "A billing export covering 6 to 12 months of recurring charges is enough. Most small businesses pull this from Xero, QuickBooks, their credit card, or Stripe. No bank login or live integrations required.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border-b border-dark-800/60 pb-6">
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="smb_software_audit"
            heading="See what a software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit without a finance team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "smb_software_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "smb_software_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits and spend review"
        description="If you are running a small business software audit, these related pages cover the checklist, the audit tool, and vertical-specific guides for agencies and clinics."
        links={[
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A practical step-by-step guide for reviewing recurring software spend without a finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Work through a structured checklist before turning billing data into a savings report.",
          },
          {
            href: "/agency-software-stack-audit",
            title: "Agency software stack audit",
            description: "Audit guide tailored to web studios, creative agencies, and consultancies managing tool spread across client work.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Allied health and clinic-specific guide to reviewing admin, booking, billing, and marketing subscriptions.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into a structured savings report in minutes.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
