import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Renewal Management for Small Teams",
  description:
    "Stop surprise SaaS renewals in owner-led SMBs. Track 90-day notice windows, auto-renew clauses, renewal owners, leaver seats, and keep/cancel/downgrade decisions from billing data.",
  path: "/saas-renewal-management",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "SaaS Renewal Management for Small Teams | StackSmart",
      description:
        "Stop surprise SaaS renewals from draining your budget. Track renewal dates, evaluate contracts, and reduce recurring waste.",
      url: "https://stacksmart.app/saas-renewal-management",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "SaaS Renewal Management", item: "https://stacksmart.app/saas-renewal-management" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is SaaS renewal management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaaS renewal management is the process of tracking when each software subscription renews, evaluating whether the tool is still needed at its current tier, and acting before auto-renewal clauses lock you into another billing cycle. For small teams, this usually means maintaining a renewal calendar, reviewing usage before each renewal window, and canceling or renegotiating contracts that no longer deliver value.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first step for small teams managing SaaS renewals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export billing data from card statements, Xero, QuickBooks, invoices, direct debits, and marketplace/app-store receipts, then run it through a savings report tool like StackSmart. A 2026 proof refresh should flag 30/60/90-day notice windows, auto-renew clauses, ownerless contracts, leaver or contractor seats, duplicate categories, add-on fees, and concrete keep/cancel/downgrade/consolidate/renegotiate/renewal-owner actions in under an hour without building a spreadsheet from scratch.",
          },
        },
        {
          "@type": "Question",
          name: "How much do surprise renewals typically cost small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Teams that have never tracked renewals systematically typically find 10-25% of their SaaS budget is locked into contracts they would have canceled, downgraded, or renegotiated if they had acted before the renewal window closed. On a $120K annual SaaS spend, that is $12K-$30K in avoidable cost.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a dedicated renewal management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dedicated renewal management platforms make sense for organizations with 500+ subscriptions and formal procurement teams. For small teams with 20-150 tools, a savings report that flags renewal dates and risk from billing data alone is faster to set up and covers the highest-impact renewals without the overhead of a full platform.",
          },
        },
      ],
    },
  ],
};

export default function SaaSRenewalManagementPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Renewal guide</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Stop surprise SaaS renewals before they hit
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Auto-renewal clauses lock your team into another year of spend before anyone notices. You need a renewal calendar, contract review triggers, and a clear picture of which tools still earn their cost — without building a procurement department.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_renewal_management_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_renewal_management_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* GEO-ready direct answer */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white">What is SaaS renewal management?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              SaaS renewal management is the process of tracking when each software subscription renews, evaluating whether the tool is still needed at its current tier, and acting before auto-renewal clauses lock you into another billing cycle. For small teams, this usually means maintaining a renewal calendar, reviewing usage before each renewal window, and canceling or renegotiating contracts that no longer deliver value.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">What is the best first step for small teams?</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              Export billing data from card statements, Xero, QuickBooks, invoices, direct debits, and marketplace/app-store receipts, then run it through a savings report tool like StackSmart. A 2026 proof refresh should flag 30/60/90-day notice windows, auto-renew clauses, ownerless contracts, leaver or contractor seats, duplicate categories, add-on fees, and concrete keep/cancel/downgrade/consolidate/renegotiate/renewal-owner actions in under an hour without building a spreadsheet from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Renewal risk symptoms */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Signs your team has a renewal problem</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most teams do not realize renewal waste is a problem until a charge hits. If any of these sound familiar, your renewal process has gaps.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Unexpected annual charges</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                A $4,800 annual renewal hits your credit card for a tool only two people used last quarter. Nobody remembered the renewal date because it was buried in a contract signed 14 months ago.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Paying for tools the team outgrew</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                The team switched from one project management tool to another six months ago, but the old subscription is still active at the enterprise tier. Nobody owns the cancellation.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Missed negotiation windows</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Your CRM contract has a 30-day cancellation notice clause. By the time finance flags the charge, the window has closed and you are locked in for another year at last year&apos;s rate.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">No single source of truth</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Renewal dates live in scattered calendar entries, email threads, and contract PDFs. When someone leaves, their renewal knowledge leaves with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three approaches comparison */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Three approaches to renewal tracking</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Every team handles renewals differently. The right approach depends on how many subscriptions you manage, how much is at stake, and how much setup time you can afford.
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-dark-500 sm:hidden">Swipe table &rarr;</p>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-dark-800 sm:mt-8">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="py-3 pr-4 pl-4 font-semibold text-dark-300">Dimension</th>
                  <th className="py-3 px-4 font-semibold text-dark-300">Spreadsheet tracker</th>
                  <th className="py-3 px-4 font-semibold text-dark-300">Enterprise renewal platform</th>
                  <th className="py-3 px-4 font-semibold text-brand-300">StackSmart savings report</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Setup time</td>
                  <td className="py-3 px-4">4-8 hours to build</td>
                  <td className="py-3 px-4">6-12 weeks implementation</td>
                  <td className="py-3 px-4 text-brand-300">Under 1 hour</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Renewal detection</td>
                  <td className="py-3 px-4">Manual entry from contracts</td>
                  <td className="py-3 px-4">Automated via integrations</td>
                  <td className="py-3 px-4 text-brand-300">Flagged from billing patterns</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Coverage gaps</td>
                  <td className="py-3 px-4">Misses tools paid by individuals</td>
                  <td className="py-3 px-4">Comprehensive if fully deployed</td>
                  <td className="py-3 px-4 text-brand-300">Covers all billing sources uploaded</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Ongoing maintenance</td>
                  <td className="py-3 px-4">Someone must update it manually</td>
                  <td className="py-3 px-4">Automated but needs admin</td>
                  <td className="py-3 px-4 text-brand-300">Re-run with fresh data anytime</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Cost</td>
                  <td className="py-3 px-4">Free (just your time)</td>
                  <td className="py-3 px-4">$30K-$150K/year</td>
                  <td className="py-3 px-4 text-brand-300">From $49 one-time</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Best fit</td>
                  <td className="py-3 px-4">Under 15 subscriptions</td>
                  <td className="py-3 px-4">500+ employee orgs</td>
                  <td className="py-3 px-4 text-brand-300">SMBs (10-200 people)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 30-day renewal workflow */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">A 30-day renewal management workflow</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            You do not need a permanent process to start. This four-step workflow gets renewal risk under control in a single billing cycle.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Week 1</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Build your renewal inventory</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Export billing data from every payment method your team uses — corporate credit cards, expense reports, accounting software. Upload to StackSmart or build a spreadsheet. The goal is a single list of every SaaS subscription with its renewal date, annual cost, and billing frequency. StackSmart extracts this automatically from billing data; a manual approach requires cross-referencing contracts and invoices.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Week 2</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Triage by renewal urgency</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Sort your inventory by renewal date. Flag anything renewing in the next 90 days as urgent. For each urgent renewal, answer three questions: Is the team still using this tool? Are we on the right tier and seat count? Is the price competitive? If the answer to any question is no, that renewal is an action item.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Week 3</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Act on quick wins</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Cancel tools nobody uses. Downgrade tiers where usage does not justify the plan. Contact vendors to renegotiate annual contracts before auto-renewal kicks in — most B2B SaaS vendors will offer 10-20% if you ask before the renewal window closes. StackSmart&apos;s report highlights which contracts have the strongest renegotiation leverage based on spend size and vendor pricing patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Week 4</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Set up ongoing tracking</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Schedule a quarterly re-run. Upload fresh billing data, review the updated renewal calendar, and repeat the triage. This prevents the inventory from going stale and ensures new subscriptions get caught. A quarterly cadence is enough for most SMBs — monthly is overkill unless you are adding tools every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample findings */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Sample renewal findings from a real report</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the kinds of findings StackSmart surfaces from billing data. Each one includes a specific action — not just a flag, but what to do about it.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                finding: "Design tool renewing in 22 days at $7,200/year",
                action: "Team switched to a competitor 5 months ago. Cancel before auto-renewal to save $7,200.",
                impact: "$7,200 annual savings",
              },
              {
                finding: "Project management tool on 50-seat enterprise plan",
                action: "Only 18 active users in billing data. Downgrade to 25-seat tier before renewal to save $3,840/year.",
                impact: "$3,840 annual savings",
              },
              {
                finding: "Two overlapping analytics platforms",
                action: "Both tools serve the same dashboarding function. Consolidate to one before the smaller contract renews in 45 days.",
                impact: "$2,160 annual savings",
              },
              {
                finding: "Cloud storage at legacy pricing from 2022 contract",
                action: "Current market rate is 30% lower. Contact vendor rep for renewal renegotiation — leverage competing quote from alternative provider.",
                impact: "$4,100 estimated annual savings",
              },
            ].map((item) => (
              <div key={item.finding} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{item.finding}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{item.action}</p>
                <p className="mt-2 text-sm font-medium text-brand-300">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">Renewal management for teams without a procurement owner</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                In owner-led SMBs, renewals often belong to whoever first bought the tool: the bookkeeper, clinic admin, venue manager, agency producer, or founder. When that person changes role or leaves, the renewal window closes quietly. StackSmart gives the operator a billing-first renewal map before the 30, 60, or 90-day notice period passes.
              </p>
              <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-base font-semibold text-white">Direct answer: what should you track?</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">
                  Track vendor, renewal date, notice window, billing owner, admin owner, current seat count, last known usage, contract term, cancellation method, and the next decision: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner. If you do not know all of that yet, start with the charges: card statements and accounting exports reveal the highest-risk renewals first.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["90-day notice missed", "A contract needed notice last quarter, but the admin owner had left and the calendar invite was never transferred."],
                ["Auto-renew by default", "A CRM, booking app, practice tool, or reporting add-on renews for another year unless someone acts before the clause date."],
                ["Seat pool drift", "Contractors, casual staff, clinicians, designers, or project-only users kept paid seats after the work ended."],
                ["Add-ons renew separately", "SMS, forms, API, reporting, marketplace, and connector modules renew outside the core platform invoice."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-brand-500/25 bg-brand-500/5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-dark-300">Want the faster path? Upload billing exports and get a renewal-risk action list without connecting bank accounts or rolling out SSO.</p>
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_renewal_refresh" }} className="btn-primary shrink-0 text-sm">
              View sample renewal output
            </TrackLink>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_renewal_management"
            heading="See the full sample report"
            body="Get the sample savings report in your inbox. See renewal flags, waste detection, overlap analysis, and savings recommendations — the exact output StackSmart produces from billing data."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* When StackSmart is / isn't a fit */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When StackSmart is and is not a fit for renewal management</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-brand-300">Good fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Your team is 10-200 people with 20-150 SaaS subscriptions</li>
                <li>You want renewal visibility from billing data without IT involvement</li>
                <li>You need actionable output this week, not a six-month rollout</li>
                <li>Your primary goal is stopping waste and renegotiating before renewals hit</li>
                <li>You do not have a dedicated procurement team or compliance mandates</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Not a fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>You need automated approval workflows for new software purchases</li>
                <li>You require SSO/SCIM-based usage tracking per employee</li>
                <li>Your organization has 500+ subscriptions with compliance requirements</li>
                <li>You need a vendor lifecycle management system with contract storage</li>
                <li>You already have a SaaS management platform handling renewals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common questions about SaaS renewal management</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white">How much do surprise renewals typically cost small businesses?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Teams that have never tracked renewals systematically typically find 10-25% of their SaaS budget is locked into contracts they would have canceled, downgraded, or renegotiated if they had acted before the renewal window closed. On a $120K annual SaaS spend, that is $12K-$30K in avoidable cost.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Do I need a dedicated renewal management platform?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Dedicated renewal management platforms make sense for organizations with 500+ subscriptions and formal procurement teams. For small teams with 20-150 tools, a savings report that flags renewal dates and risk from billing data alone is faster to set up and covers the highest-impact renewals without the overhead of a full platform.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">How often should I review renewals?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Quarterly is the right cadence for most SMBs. Upload fresh billing data each quarter, review the updated renewal calendar, and act on anything renewing in the next 90 days. Monthly reviews make sense only if your team adds or changes tools frequently.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">What billing data do I need to get started?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Credit card statements, accounting software exports (QuickBooks, Xero), invoices, or bank transaction data. Any source that shows recurring software charges works. The more payment methods you include, the more complete your renewal picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <SeoClusterLinks
        eyebrow="Related guides"
        title="Keep building your renewal management process"
        description="If you are working on SaaS renewal management, these pages cover related topics — spend management, audit workflows, and subscription management approaches."
        links={[
          {
            href: "/saas-spend-management",
            title: "SaaS spend management for SMBs",
            description: "Broader guide to tracking, analyzing, and optimizing recurring software costs.",
          },
          {
            href: "/saas-subscription-management-software",
            title: "SaaS subscription management software",
            description: "Compare subscription management platforms for small businesses.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See when a fast savings report replaces a manual audit process.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Step-by-step framework for running your first subscription review.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "Where StackSmart fits when cost reduction is the primary goal.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with heavier platforms and SMB-friendly alternatives.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">See your renewal risk in one report</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report and see how StackSmart flags renewal dates, waste, overlap, and savings opportunities from billing data alone.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_renewal_management_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_renewal_management_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
