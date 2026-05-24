import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "How to Audit Software Subscriptions",
  description:
    "How owner-led SMBs audit software subscriptions: export billing data, find duplicate tools, leaver seats, connector fees, ownerless renewals, and turn findings into cut/downgrade/consolidate actions.",
  path: "/how-to-audit-software-subscriptions",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/how-to-audit-software-subscriptions"),
      url: absoluteUrl("/how-to-audit-software-subscriptions"),
      name: "How to Audit Software Subscriptions | StackSmart",
      description:
        "A practical guide to auditing software subscriptions for small businesses — what to look for, a 30-day workflow, and how to act without a finance team.",
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
          name: "How to Audit Software Subscriptions",
          item: absoluteUrl("/how-to-audit-software-subscriptions"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you audit software subscriptions for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from your payment processor, credit card, direct debits, app stores, Xero, QuickBooks, MYOB, or invoices. Group every recurring charge by category and owner. Look for duplicate tools, seats for leavers or contractors, converted trials, connector/API/SMS/reporting add-ons, pricing tiers with unused features, and renewals inside the next 30/60/90 days. A 2026 proof refresh should assign each subscription a keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decision, then act on the highest-value items first.",
          },
        },
        {
          "@type": "Question",
          name: "What data do I need to audit software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A billing export covering 6 to 12 months of recurring charges is enough. Most businesses pull this from Xero, QuickBooks, their business credit card, or Stripe. The export should include vendor name, charge amount, and billing frequency. No bank credentials or live integrations are required.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a software subscription audit take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A manual audit typically takes 2 to 4 hours of focused work across a week or two. With StackSmart, you upload a billing export and get a categorised report with findings in minutes. Acting on the findings — cancellations, consolidations, renegotiations — takes additional time depending on the number of changes.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main waste signals to look for in a software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The five main waste signals are: duplicate tools serving the same workflow, seats provisioned for users who are no longer active, pricing tiers with features your team does not use, trial conversions that kept billing after the evaluation ended, and annual contracts approaching renewal without a usage review.",
          },
        },
        {
          "@type": "Question",
          name: "How often should you audit software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At minimum, run a full audit once a year before your largest annual contracts renew. Owner-led SMBs with active hiring or growth often benefit from a lighter quarterly review to catch new waste before it compounds. The first audit takes the most time; subsequent reviews are faster once you have a baseline.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    title: "Duplicate tools",
    detail: "Two or more subscriptions serving the same workflow — two project management tools, two file-storage services, two video platforms. Common when different team members or departments signed up independently.",
    color: "text-red-400",
    tag: "Cut one",
  },
  {
    title: "Ghost seats",
    detail: "Licensed seats for users who left, changed roles, or moved to a different tool. Rarely audited, and billing continues regardless of activity.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    title: "Trial bleed",
    detail: "Free trials that converted to paid plans after evaluation ended. Often missed because the charge is small enough to pass unnoticed month to month.",
    color: "text-amber-400",
    tag: "Cut",
  },
  {
    title: "Tier mismatch",
    detail: "Paying for Pro or Enterprise features your team does not use — usually the result of an upgrade made during evaluation or rapid growth that was never revisited.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    title: "Renewal risk",
    detail: "Annual contracts approaching auto-renewal without a usage or pricing review. Missing the window means 12 more months at last year's terms.",
    color: "text-orange-400",
    tag: "Review now",
  },
];

const decisionBuckets = [
  {
    label: "Keep",
    description: "The tool is actively used, correctly sized, and reasonably priced relative to the value it delivers. Review again at the next renewal cycle.",
    when: "High active usage, no cheaper equivalent, fits current team size",
  },
  {
    label: "Cut",
    description: "The tool is unused, replaced by something else, or failed to deliver value after trial. Cancel before the next billing cycle or renewal date.",
    when: "Zero or near-zero active usage, duplicate of another subscription, forgotten trial",
  },
  {
    label: "Consolidate",
    description: "Two or more tools serve the same workflow. Pick the strongest fit, migrate users, and cancel the rest.",
    when: "Multiple tools in the same category, team fragmented across platforms",
  },
  {
    label: "Renegotiate",
    description: "The tool is genuinely needed but overpriced — wrong tier, too many seats, or a renewal approaching without leverage. Open a pricing conversation before the auto-renew date.",
    when: "Active use, upcoming renewal, tier or seat count exceeds actual need",
  },
];

export default function HowToAuditSoftwareSubscriptionsPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Subscription audit guide</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              How to audit software subscriptions without a finance team
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              The goal is not perfect procurement data. The goal is to find the most obvious waste, overlap, and pricing mismatch quickly enough to act on it. This guide shows you the complete workflow — from billing export to decision list — in 30 days or less.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "seo_how_to_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "seo_how_to_audit_secondary" }}
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
              Export 6 to 12 months of billing data from your payment processor, credit card, direct debits, app stores, Xero, QuickBooks, MYOB, or invoices. Group every recurring charge by category and owner. Look for duplicate tools, seats for leavers or contractors, converted trials, connector/API/SMS/reporting add-ons, pricing tiers with unused features, and renewals inside the next 30/60/90 days. A 2026 proof refresh should assign each subscription a keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decision, then act on the highest-value items first.
            </p>
          </div>
        </div>
      </section>

      {/* Quick audit sequence */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-dark-700 bg-dark-900/75 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">The five-step audit sequence</h2>
            <div className="mt-6 space-y-4">
              {[
                "Pull the last 12 months of recurring software charges from billing and accounting data",
                "Group subscriptions by category or workflow — project management, communication, storage, design, analytics",
                "Mark duplicate tools and identify subscriptions with no recent active usage",
                "Check seat counts and pricing tiers for mismatch against your actual team size and feature use",
                "Prioritise the biggest, clearest savings opportunities first — start with cancellations, then consolidations",
              ].map((item, idx) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">
                    {idx + 1}
                  </div>
                  <p className="text-sm leading-7 text-dark-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The five waste signals to look for</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most recoverable spend in a small business software stack comes from one of these five patterns.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {wasteSignals.map((s) => (
              <div key={s.title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${s.color}`}>{s.title}</h3>
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
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day audit workflow for small teams</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            You do not need to run this as a dedicated project. It fits into a few focused hours spread across a month.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Gather billing data",
                "Export transactions from your accounting tool, payment processor, or business credit card. Pull at least 6 months — ideally 12 — so annual subscriptions appear alongside monthly ones. The output should list every recurring software charge with vendor, amount, and billing frequency.",
              ],
              [
                "Week 2 — Categorise and flag",
                "Group subscriptions by function: communication, project management, file storage, design, analytics, finance, HR, marketing, and development tools. Flag any category with more than one active tool. Flag seats that exceed your current headcount or where active logins have dropped significantly.",
              ],
              [
                "Week 3 — Size the savings",
                "Calculate the annual cost of each flagged item. Rank opportunities by dollar impact. Focus on the five or six actions that recover the most spend with the least disruption to active workflows. Cancellations come first — they require no negotiation. Consolidations come next. Renegotiations last.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel unused subscriptions before the next billing cycle. Plan consolidations with the affected team members before touching live tools. Open renegotiation conversations on contracts renewing within 90 days. Record each decision so the next review starts from a known baseline rather than repeating the same discovery.",
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

      {/* Decision buckets */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The four decision buckets</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Every subscription in your audit gets one of four actions. Assign them before you act so the output is a clear, prioritised list.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {decisionBuckets.map((b) => (
              <div key={b.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{b.label}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{b.description}</p>
                <p className="mt-3 text-xs text-dark-500">
                  <span className="text-dark-400 font-medium">When: </span>{b.when}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample findings */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a software subscription audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings and ranges from SMB billing exports. Actual impact varies by team size and stack complexity.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Decision</th>
                  <th className="pb-3 font-medium">Typical annual impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Duplicate project management tools", "Consolidate", "$1,800 – $6,000/yr"],
                  ["Unused seats on collaboration platform", "Remove or downgrade", "$900 – $3,600/yr"],
                  ["Trial converted to paid — not in use", "Cut immediately", "$240 – $1,200/yr"],
                  ["Enterprise tier, Pro-level usage", "Downgrade", "$600 – $2,400/yr"],
                  ["Annual renewal approaching without review", "Renegotiate before auto-renew", "$500 – $4,000/yr"],
                  ["Three file-storage services for one team", "Consolidate", "$480 – $1,800/yr"],
                ].map(([finding, decision, impact]) => (
                  <tr key={finding} className="border-b border-dark-800/60">
                    <td className="py-3 pr-6 text-white">{finding}</td>
                    <td className="py-3 pr-6">{decision}</td>
                    <td className="py-3">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">A software audit is a billing truth pass, not a procurement transformation.</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                If you run a clinic, NDIS provider, childcare centre, agency, accounting practice, consultancy, hospitality group, fitness studio, property office, or ecommerce operation, your first audit should answer one practical question: which recurring software charges should we keep, cancel, downgrade, consolidate, renegotiate, or assign to a renewal owner before more money leaks out?
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Start with billing exports, card statements, Xero/QuickBooks/MYOB data, direct debits, app-store receipts, and invoices. You do not need bank access, SSO logs, or sensitive patient/client/customer records to find the first round of waste.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-500/25 bg-brand-500/5 p-6">
              <h3 className="text-lg font-semibold text-white">The 45-minute owner/operator pass</h3>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-brand-300">1. Export:</span> pull 6-12 months of recurring software charges from finance sources.</li>
                <li><span className="font-semibold text-brand-300">2. Group:</span> label each charge by workflow: finance, admin, clinical/care, bookings, marketing, design, ecommerce, POS, reporting, communication, or operations.</li>
                <li><span className="font-semibold text-brand-300">3. Match:</span> assign current user owner, admin owner, and renewal owner.</li>
                <li><span className="font-semibold text-brand-300">4. Flag:</span> duplicate categories, leaver seats, contractor seats, converted trials, add-ons, and renewals inside 90 days.</li>
                <li><span className="font-semibold text-brand-300">5. Decide:</span> keep, cancel, downgrade, consolidate, renegotiate, or calendar a renewal-owner review.</li>
              </ol>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Waste signals", "Duplicate tools, ghost seats, trial bleed, tier mismatch, ownerless renewals, and connector fees."],
              ["Data boundary", "Billing data only. No bank connection, no SSO rollout, no patient/client/customer records."],
              ["Output", "A ranked action list your owner, bookkeeper, admin lead, or operations manager can execute."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="border-y border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_how_to_audit_software_subscriptions"
            heading="Email yourself the sample report"
            body="If you are doing this review later or sharing with someone else on the team, send the proof asset to your inbox now."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit pages"
        title="Go deeper on software-spend review"
        description="If you are auditing subscriptions now, these related pages help you compare methods, use a structured checklist, and find vertical-specific guides for agencies and clinics."
        links={[
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Use a practical checklist to review recurring software spend category by category.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing data into savings actions you can act on quickly.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "Owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
          },
          {
            href: "/agency-software-stack-audit",
            title: "Agency software stack audit",
            description: "Audit guide tailored to web studios and consultancies carrying tool spread across client work.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Allied health and clinic guide to reviewing admin, booking, billing, and marketing subscriptions.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with broader spend-management options for SMBs.",
          },
          {
            href: "/ndis-provider-software-audit",
            title: "NDIS provider software audit",
            description: "Rostering, care management, and compliance stack audit guide for NDIS and community care providers.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, document, and e-sign stack audit guide for small accounting firms.",
          },
          {
            href: "/hospitality-group-software-audit",
            title: "Hospitality group software audit",
            description: "POS, reservations, rostering, and delivery stack audit for small hospitality groups and venues.",
          },
          {
            href: "/fitness-studio-software-subscription-audit",
            title: "Fitness studio software subscription audit",
            description: "Booking, member management, and marketing stack audit guide for fitness and wellness studios.",
          },
          {
            href: "/real-estate-agency-software-audit",
            title: "Real estate agency software audit",
            description: "CRM, portal, appraisal, and marketing stack audit guide for principal-led real estate agencies.",
          },
          {
            href: "/ecommerce-software-subscription-audit",
            title: "Ecommerce software subscription audit",
            description: "App and subscription audit guide for small Shopify and ecommerce store operators.",
          },
          {
            href: "/professional-services-software-audit",
            title: "Professional services software audit",
            description: "Project management, proposals, time tracking, and CRM audit guide for boutique consultancies.",
          },
          {
            href: "/retail-store-software-subscription-audit",
            title: "Retail store software subscription audit",
            description: "POS, rostering, inventory, loyalty, and ecommerce stack audit guide for independent retailers.",
          },
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">See what the output looks like</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report to see how StackSmart turns raw billing data into concrete keep, cut, consolidate, and renegotiate actions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "seo_how_to_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "seo_how_to_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
