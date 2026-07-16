import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import OwnerLedProofRefresh from "@/components/landing/OwnerLedProofRefresh";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "How to Reduce SaaS Spend for Small Business",
  description:
    "A practical guide to reducing SaaS spend for small business teams — find duplicate subscriptions, flag renewal risks, and act on the highest-leverage savings from billing data.",
  path: "/reduce-saas-spend-small-business",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/reduce-saas-spend-small-business"),
      url: absoluteUrl("/reduce-saas-spend-small-business"),
      name: "How to Reduce SaaS Spend for Small Business | StackSmart",
      description:
        "A practical guide to reducing SaaS spend for small business teams — find duplicate subscriptions, flag renewal risks, and act on the highest-leverage savings from billing data.",
      dateModified: "2026-07-17",
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
          name: "Reduce SaaS Spend for Small Business",
          item: absoluteUrl("/reduce-saas-spend-small-business"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can a small business save on SaaS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small businesses often find avoidable SaaS waste in duplicate seats, forgotten trials, overlapping tools, and unreviewed renewals. The actual savings depend on how many subscriptions you carry and how long it has been since the last review.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find duplicate SaaS subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export billing data from your payment processor or accounting tool, then group subscriptions by category. Look for multiple tools serving the same workflow — project management, file storage, video conferencing, and design tools are common overlap areas.",
          },
        },
        {
          "@type": "Question",
          name: "What is a SaaS spend audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A SaaS spend audit reviews every software subscription your team pays for, categorises each tool, identifies waste like duplicate seats or unused licences, flags upcoming renewals, and produces a concrete list of actions: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a SaaS management platform to reduce spend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Smaller teams can start with a billing export and a report-first tool like StackSmart to surface savings. Full management platforms with discovery agents and governance controls make more sense once your SaaS estate is large enough to warrant ongoing lifecycle management.",
          },
        },
      ],
    },
  ],
};

export default function ReduceSaaSSpendSmallBusinessPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">SaaS spend reduction</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Reduce SaaS spend without breaking workflows
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Small businesses often carry avoidable SaaS waste in duplicate seats, forgotten trials, overlapping tools, and auto-renewals nobody reviewed. The fix is not random cost cutting. It is finding the waste, sizing the savings, and acting on the highest-leverage changes first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_reduce_saas_spend_primary" }} className="btn-primary text-sm sm:text-base">
                See a sample savings report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_reduce_saas_spend_secondary" }} className="btn-secondary text-sm sm:text-base">
                See StackSmart pricing
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
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">How do small businesses reduce SaaS spend?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300 max-w-3xl">
              For a 5-50 staff business, export billing data first — Xero, MYOB, QuickBooks, bank and card statements, direct debits, marketplace invoices, and annual vendor receipts — then group subscriptions by category. Look for duplicate tools serving the same workflow, seats nobody uses, subscriptions on tiers you have outgrown or underutilise, and renewals approaching without an owner. Then prioritise actions: keep what the team depends on, cancel dead tools, downgrade inflated tiers, consolidate overlaps, renegotiate valuable contracts, and assign a named renewal owner before notice windows close.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms of SaaS Waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Symptoms of SaaS waste in small businesses</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            If any of these sound familiar, there is likely recoverable spend in your SaaS stack.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {([
              ["Multiple tools for the same job", "Two project management tools, three file-sharing services, or overlapping design subscriptions across teams that never coordinated."],
              ["Seats that nobody uses", "Licences provisioned during onboarding that were never cancelled after someone left or switched roles."],
              ["Auto-renewals without review", "Annual contracts renewing at last year's pricing without anyone checking whether the tier, seat count, or tool still fits."],
              ["Trial conversions nobody approved", "Free trials that converted to paid plans and kept billing quietly month after month."],
              ["No single view of spend", "Billing data scattered across credit cards, expense reports, and department budgets — nobody sees the full picture."],
              ["Pricing tier mismatch", "Paying for enterprise features your team does not use, or stuck on a per-seat plan when a flat-rate option costs less."],
            ] as const).map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Reduction Workflow */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day SaaS spend reduction workflow</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            A small team can run this in spare cycles. No new platform required — just billing data and a structured review.
          </p>
          <div className="mt-8 space-y-6">
            {([
              ["Week 1: Gather billing data", "Export transactions from your payment processor, accounting tool, or credit card statements. Pull 6-12 months so you catch annual renewals and seasonal tools. The goal is a single list of every SaaS subscription your company pays for."],
              ["Week 2: Categorise and flag", "Group subscriptions by function — project management, communication, file storage, design, analytics, dev tools. Flag duplicates, unused seats, and any subscription with a renewal in the next 90 days."],
              ["Week 3: Size the savings", "Estimate the annual cost of each flagged item. Rank opportunities by dollar impact. Focus on the top five or six actions that recover the most spend with the least disruption to active workflows."],
              ["Week 4: Act and document", "Cancel, consolidate, downgrade, or open a renegotiation conversation. Document each decision so the next review starts from a clean baseline instead of repeating the same discovery."],
            ] as const).map(([title, copy], i) => (
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

      {/* Keep / Cut / Consolidate / Renegotiate Decision Framework */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The keep / cut / consolidate / renegotiate framework</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            Every subscription in your audit gets one practical action. This is the decision model StackSmart reports use.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {([
              ["Keep", "The tool is actively used, correctly sized, and competitively priced. No action needed until the next review cycle."],
              ["Cancel", "The tool is unused, redundant, or replaced by another subscription. Cancel before the next billing cycle or renewal date."],
              ["Downgrade", "The tool is needed, but the current tier, module set, or seat count is bigger than actual usage."],
              ["Consolidate / renegotiate / assign owner", "Two or more tools serve the same workflow, or a valuable tool is renewing without leverage. Pick the best fit, negotiate if it stays, and give one person the renewal date."],
            ] as const).map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Findings */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a savings report typically surfaces</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            These are the kinds of findings StackSmart produces from billing exports. Real results vary by company.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {([
                  ["Duplicate project management tools", "Consolidate", "$2,400-$6,000/yr"],
                  ["Unused seats on collaboration platform", "Cut or downgrade", "$1,200-$3,600/yr"],
                  ["Enterprise tier with unused features", "Renegotiate to lower tier", "$800-$2,400/yr"],
                  ["Forgotten trial converted to paid", "Cut", "$300-$1,200/yr"],
                  ["Annual renewal approaching — no review", "Renegotiate before auto-renew", "$500-$4,000/yr"],
                  ["Overlapping file storage services", "Consolidate", "$600-$1,800/yr"],
                ] as const).map(([finding, action, impact]) => (
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

      {/* Manual Spreadsheet vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual spreadsheet vs StackSmart</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            You can run a SaaS spend audit with a spreadsheet. StackSmart makes it faster and more structured.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-dark-400">Manual spreadsheet</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export billing data and paste into a sheet</li>
                <li>Manually categorise each subscription</li>
                <li>Cross-reference seat counts across tools</li>
                <li>Build your own prioritisation logic</li>
                <li>Format a report to share internally</li>
                <li>Repeat from scratch at next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">StackSmart</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload billing exports or invoice data</li>
                <li>Automatic categorisation and duplicate detection</li>
                <li>Renewal risk flags and seat-count analysis</li>
                <li>Prioritised keep/cancel/downgrade/consolidate/renegotiate/renewal-owner actions</li>
                <li>Shareable savings report for stakeholders</li>
                <li>Recurring Snapshots without rebuilding from scratch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not Fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Good fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Owner-led small business with 5-50 staff and messy subscription billing</li>
                <li>Finance, ops, or founder running the spend review</li>
                <li>You want a report and action list, not a platform rollout</li>
                <li>You have billing exports or invoice data available</li>
                <li>You want to act on savings within days, not months</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-dark-400">Not the best fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Enterprise IT team needing discovery agents and compliance controls</li>
                <li>You need automated provisioning or user lifecycle management</li>
                <li>Your primary goal is security governance, not cost reduction</li>
                <li>You need a full enterprise procurement platform with vendor negotiation services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">The 30-day owner-led software-cost reduction plan</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            For a 5-50 person business, the fastest savings usually come from a billing-export audit rather than a new SaaS-management platform. DataForSEO AU live checks show software subscription management at 90 monthly searches / $32.54 CPC / $24.95 high bid and software audit at 110 / $8.59 CPC / $20.40 high bid, confirming the commercial problem without requiring enterprise procurement positioning. Pull the charges, group the tools, assign owners, and make keep/cancel/downgrade/consolidate/renegotiate/renewal-owner decisions before the next renewal cycle.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Week 1", "Export card, bank, Xero, QuickBooks, Shopify, and marketplace charges. Tag obvious software subscriptions and annual renewals."],
              ["Week 2", "Group by job: CRM, marketing, accounting, payroll, scheduling, documents, AI, project management, ecommerce, and reporting."],
              ["Week 3", "Ask one question per tool: who uses it, who owns it, what would break if it was cancelled, and when does it renew?"],
              ["Week 4", "Cancel dead tools, downgrade inflated tiers, remove leaver seats, consolidate duplicate apps, and renegotiate only the subscriptions worth keeping."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {([
              ["How much can a small business save on SaaS?", "Small businesses often find avoidable SaaS waste in duplicate seats, forgotten trials, overlapping tools, and unreviewed renewals. The actual savings depend on how many subscriptions you carry and how long it has been since the last review."],
              ["How do I find duplicate SaaS subscriptions?", "Export billing data from your payment processor or accounting tool, then group subscriptions by category. Look for multiple tools serving the same workflow — project management, file storage, video conferencing, and design tools are common overlap areas."],
              ["What is a SaaS spend audit?", "A SaaS spend audit reviews every software subscription your team pays for, categorises each tool, identifies waste like duplicate seats or unused licences, flags upcoming renewals, and produces a concrete list of actions: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner."],
              ["Do I need a SaaS management platform to reduce spend?", "Not necessarily. Smaller teams can start with a billing export and a report-first tool like StackSmart to surface savings. Full management platforms with discovery agents and governance controls make more sense once your SaaS estate is large enough to warrant ongoing lifecycle management."],
            ] as const).map(([q, a]) => (
              <div key={q} className="border-b border-dark-800/60 pb-6">
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OwnerLedProofRefresh
        title="2026 small-business SaaS spend reduction: start with the billing truth"
        summary="For owner-led teams with 5-50 staff, the fastest route is not an enterprise procurement platform. It is a billing-export pass that finds duplicate tools, poor exports, annual/prepaid lock-in, former-employee seats, licence policing gaps, and unclear renewal owners — then turns them into a practical action queue."
        proofItems={[
          { label: "Line-by-line software cleanup", finding: "Owners and bookkeepers often see a messy Software & Subscriptions category in Xero/QuickBooks but lack a clean keep/cancel/use-owner pass.", action: "Categorise + assign owner" },
          { label: "Automation and contact overages", finding: "HubSpot marketing contacts, Zapier task usage, AI tools, and connector add-ons can become production costs before anyone sets a budget guardrail.", action: "Set tier and usage limits" },
          { label: "Annual renewal surprises", finding: "Prepaid SaaS contracts renew quietly because no one owns the decision 60-90 days before the card or invoice charge.", action: "Renegotiate before renewal" },
        ]}
        boundaries={[
          "Use card, bank, Xero/MYOB/QuickBooks, and invoice exports rather than employee monitoring or browser agents.",
          "Protect active workflows: every recommendation should say keep, cancel, downgrade, consolidate, renegotiate, or assign owner.",
          "Flag ownerless tools and former-employee seats before removing access.",
          "Prioritise recoverable spend and renewal risk over raw app count.",
        ]}
        location="reduce_saas_spend_20260605"
      />

      <OwnerLedRefreshSection type="reduceSaasSpend" />

      {/* Lead Capture + Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_reduce_saas_spend_small_business"
            heading="Send the sample report to yourself"
            body="Useful if you are reviewing savings options now but want the proof asset in your inbox for later or for internal sharing."
            successMessage="Sample report sent. You can view it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">Want to see the end result first?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to see the StackSmart output before you upload anything.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_reduce_saas_spend_footer" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_reduce_saas_spend_footer" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related pages"
        title="More on SaaS spend management"
        description="If you are looking to reduce SaaS spend, these related pages cover audit tools, management approaches, and optimisation strategies for leaner teams."
        links={[
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing exports into concrete keep, cut, consolidate, and renegotiate actions.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A step-by-step checklist for reviewing every software subscription your team pays for.",
          },
          {
            href: "/saas-spend-management",
            title: "SaaS spend management",
            description: "How lean teams manage SaaS spend without deploying a full management platform.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimisation software",
            description: "Compare approaches to SaaS cost optimisation for teams that want savings clarity fast.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
