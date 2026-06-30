import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "NDIS Provider Software Audit | Find Subscription Waste in Your Care Stack",
  description:
    "NDIS and community care providers carry rostering, care management, payroll, compliance, billing, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate before the next renewal cycle.",
  path: "/ndis-provider-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/ndis-provider-software-audit"),
      url: absoluteUrl("/ndis-provider-software-audit"),
      name: "NDIS Provider Software Audit | StackSmart",
      description:
        "NDIS and community care providers carry rostering, care management, payroll, compliance, billing, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate.",
      dateModified: "2026-07-01",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "NDIS Provider Software Audit",
          item: absoluteUrl("/ndis-provider-software-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where do NDIS software costs hide outside the core care-management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They hide in optional rostering, SMS, compliance, claims, reporting, document, and accounting connector fees, plus dormant coordinator, support-worker, contractor, and admin seats. A 2026 proof refresh should compare billing exports with the current roster and renewal calendar, then assign keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decisions.",
          },
        },
        {
          "@type": "Question",
          name: "What software subscriptions do NDIS providers typically carry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small NDIS or community care provider typically pays for rostering software (Deputy, Humanforce, Skedulo), a care management platform (ShiftCare, Careview, Brevity), payroll (Xero, MYOB), a compliance or audit tool, NDIS claims and billing software, a CRM or marketing tool, and general admin tools like document storage, e-sign, and email. Many providers accumulate overlapping tools as they scale, particularly across rostering and care management.",
          },
        },
        {
          "@type": "Question",
          name: "How do NDIS providers find software waste without a dedicated ops or IT team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing transactions from Xero, MYOB, or your business credit card. Group every charge by function — scheduling, care management, payroll, compliance, billing, communications. Look for categories with more than one active tool, seat counts that exceed current staff headcount, and tools that auto-renewed without a usage review. StackSmart automates this grouping and flags the waste patterns most common in care and NDIS organisations.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest source of software waste for NDIS providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ghost seats are the most common finding. NDIS providers often have high staff turnover among support workers and coordinators. When someone leaves, their software licences are rarely removed promptly — leaving paid seats sitting idle. Rostering and care management platforms with per-user pricing are particularly affected.",
          },
        },
        {
          "@type": "Question",
          name: "How should an NDIS provider handle a plan-management subscription handoff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treat the plan-management subscription handoff as an owner/admin control point: list each plan-management, claims, billing, and care-platform add-on, record the person responsible for renewal, and compare paid users against current coordinators and finance staff. StackSmart can help turn the billing export into a keep, cut, right-size, consolidate, or renegotiate action list, but the provider still makes the operational decision.",
          },
        },
        {
          "@type": "Question",
          name: "Should a small NDIS provider use a subscription management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most small providers with 5 to 50 staff, a one-time or annual software audit produces most of the value at a fraction of the ongoing cost. Subscription management platforms are better suited to mid-market organisations with a dedicated ops function. A structured billing review with StackSmart is a faster starting point — it gives you a concrete findings report and action list without a platform rollout.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Ghost seats from staff turnover",
    detail:
      "Support workers and coordinators leave, but their rostering and care management licences remain active. In per-seat tools like Humanforce or ShiftCare, this adds up to hundreds of dollars per idle account per year.",
    color: "text-red-400",
    tag: "Right-size",
  },
  {
    label: "Parallel rostering and scheduling tools",
    detail:
      "Rostering started in one platform, a new coordinator set up another, and now the team is split across both. Each carries a monthly fee — and the integrations between them add further cost.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Overlapping care management and billing",
    detail:
      "Care management platforms increasingly include billing and claims features. Providers who added a separate billing or NDIS claims tool before that feature matured are often paying for overlapping capability.",
    color: "text-amber-400",
    tag: "Audit overlap",
  },
  {
    label: "Compliance tools no longer in active use",
    detail:
      "Audit and compliance software bought during an accreditation period and left active afterward. These often bill annually and renew without review because no one triggers a cancel workflow.",
    color: "text-amber-400",
    tag: "Cancel or pause",
  },
  {
    label: "Marketing tools beyond actual use",
    detail:
      "Email marketing or CRM platforms on Business or Pro tiers for a team that sends a monthly newsletter to families and staff. The features justify the tier on paper, but not in practice.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    label: "Annual renewals without participant-count review",
    detail:
      "NDIS participant numbers shift across the year. Annual contracts locked in at a higher participant or staff count renew before anyone checks whether current numbers still match the pricing tier.",
    color: "text-brand-400",
    tag: "Renegotiate",
  },
];

export default function NdisProviderSoftwareAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">NDIS provider software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the software waste in your care stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              NDIS and community care providers carry more software subscriptions than most small businesses — rostering, care management, payroll, compliance, NDIS billing, communications, and marketing. High staff turnover and layered regulatory requirements make this stack expensive to maintain and easy to over-pay. A software audit finds what to cut, right-size, and renegotiate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "ndis_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "ndis_audit_secondary" }}
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
              How do NDIS providers audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card. Group every recurring charge by category — rostering, care management, payroll, compliance, NDIS billing, and communications. For each category with more than one active tool, flag it for consolidation. Cross-reference seat counts against your current support worker and coordinator headcount and remove idle licences. Check renewal dates for any annual contracts — particularly care management and rostering platforms — and open renegotiation conversations before auto-renewal. Assign each subscription a keep, cut, consolidate, or renegotiate decision and act on the highest-value items first.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              2026 proof refresh: measured AU demand for NDIS software is useful category intent, but StackSmart is not trying to replace the operating platform. It audits the subscription layer around that platform for an owner-led NDIS provider or community care operator: rostering add-ons, care-management modules, SMS/document packs, claims and plan-management connectors, compliance tools bought for an audit, duplicate payroll/admin systems, and coordinator or support-worker seats left active after handover. Start with Xero or MYOB exports, business-card statements, direct debits, and invoices for care-management, rostering, payroll, SMS, compliance, and claims tools. The output is a practical keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner action list before notice windows or auto-renewals close.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              DataForSEO showed 390 monthly Australian searches for "NDIS software" plus adjacent home/community-care demand. This page now turns that category research into the safer owner-led provider question: which roster, care, plan-management, claims, document, SMS, and compliance subscriptions are still needed, and which can be cut without touching participant records.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical NDIS provider software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most small NDIS and community care organisations are running 8 to 14 recurring software subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Rostering and scheduling", "Deputy, Humanforce, Skedulo, Tanda — often with a second tool from a previous system that was never fully retired."],
              ["Care management", "ShiftCare, Careview, Brevity, Lumary — the core operational platform, increasingly including billing and progress notes."],
              ["Payroll and HR", "Xero Payroll, MYOB, Employment Hero — frequently integrated with rostering but sometimes running as a separate subscription."],
              ["NDIS billing and claims", "Proda is mandatory but many providers also pay for a billing layer or claims automation tool on top."],
              ["Compliance and audit", "Incident management, policy management, or accreditation prep tools — often bought for a specific audit and left active."],
              ["Communications and marketing", "Email platforms (Mailchimp, Campaign Monitor), SMS tools, and sometimes a CRM for participant or referrer outreach."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in NDIS organisations</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing NDIS provider billing exports.
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
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day software audit for an NDIS provider</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run alongside normal operations. No dedicated finance or IT function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from Xero, MYOB, or your business credit card. Include any direct debit or PayPal subscriptions. The output should list every vendor name, amount, and billing frequency. NDIS providers often have charges spread across multiple payment methods — consolidate them into one list before you start grouping.",
              ],
              [
                "Week 2 — Map the stack and flag duplicates",
                "Group every subscription by function: rostering, care management, payroll, compliance, billing/claims, communications, and admin. Any category with more than one active tool is a consolidation candidate. Pull your current staff list and cross-reference it against seat counts in rostering and care management platforms — flag any accounts for people no longer active.",
              ],
              [
                "Week 3 — Size the savings and set priorities",
                "Calculate the annual cost of each flagged item. Ghost seats and duplicate rostering tools usually carry the highest value. Start with cancellations — idle accounts can be removed without a vendor conversation. Then prioritise: consolidation conversations, tier downgrades, and renewal renegotiations for contracts within 90 days.",
              ],
              [
                "Week 4 — Act, document, and schedule the next review",
                "Remove idle accounts directly in each platform. Open consolidation conversations where you have two tools in the same category. Contact vendors on contracts renewing soon with your current usage data as leverage. Document each decision so the next review — ideally 12 months out — starts from a clean baseline.",
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
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Example findings from an NDIS provider software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative example findings based on common patterns in care and NDIS provider billing data. Actual amounts vary by organisation size and stack.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual saving</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["8 idle support worker seats in rostering platform", "Remove inactive accounts", "$960 – $3,200/yr"],
                  ["Two rostering tools running in parallel", "Consolidate to primary platform", "$1,800 – $5,400/yr"],
                  ["Care management and separate billing tool overlap", "Disable billing module duplicate", "$600 – $2,400/yr"],
                  ["Compliance tool active post-accreditation", "Cancel or pause until next cycle", "$480 – $1,800/yr"],
                  ["Email marketing on Business tier, newsletter-only use", "Downgrade to standard plan", "$360 – $1,200/yr"],
                  ["Annual rostering contract renewing at peak-headcount rate", "Renegotiate to current count", "$900 – $4,000/yr"],
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


      {/* 2026 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner/admin cleanup</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Billing handoff checks for NDIS and community care teams</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            The easiest waste to miss is not the headline care platform. It is the plan-management subscription handoff between coordinators, finance, and owners: old users, add-ons, connector fees, and annual renewals that nobody owns after staff or participant mix changes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Plan-management and billing handoff</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Match plan-management, claims, and billing add-ons against the current person who owns each workflow. If finance, a coordinator, and the owner all think someone else reviews the subscription, assign one renewal owner before the next auto-renewal.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Support-worker and coordinator seats</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Compare active support workers, coordinators, contractors, and departed staff against rostering, care-management, Microsoft 365, Google Workspace, and e-sign seats. Remove or downgrade accounts that are only retained for historical access.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Connector and compliance add-ons</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Separate core care-management spend from optional SMS, document, compliance, reporting, and accounting connectors. Keep add-ons that are used weekly; pause or renegotiate modules bought for a past audit or implementation push.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-brand-400/20 bg-dark-950/70 p-6">
            <h3 className="text-base font-semibold text-white">What StackSmart returns</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              StackSmart turns the billing export into a practical owner/operator action list: keep the tools that are still doing real work, cut unused seats, right-size tiers, consolidate overlapping workflows, and renegotiate renewals before the card is charged again. It is deliberately lighter than an enterprise procurement platform and designed for a busy SMB owner, practice manager, operator, or bookkeeper.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "ndis_provider_software_audit_proof_refresh" }} className="btn-primary text-sm">
                See the audit tool
              </TrackLink>
              <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "ndis_provider_software_audit_proof_refresh" }} className="btn-secondary text-sm">
                Use the checklist
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for care providers</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both routes surface the same waste. StackSmart removes the spreadsheet work so the review gets done rather than deferred.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export billing from Xero, MYOB, and card statements separately</li>
                <li>Manually deduplicate and categorise each line item</li>
                <li>Pull seat lists from each platform individually</li>
                <li>Build your own prioritisation logic in a spreadsheet</li>
                <li>Format findings into a shareable document</li>
                <li>Rebuild the process at the next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across care-stack tool categories</li>
                <li>Flags ghost seats, duplicate tools, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready immediately</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your organisation?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>NDIS or community care provider with 5 to 50 staff</li>
                <li>Owner or practice manager responsible for software decisions</li>
                <li>Paying for rostering, care management, payroll, and at least 3 other tools</li>
                <li>No dedicated IT or procurement function</li>
                <li>Billing data accessible from Xero, MYOB, or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large NDIS provider with an IT or finance department</li>
                <li>Primary need is security, access governance, or NDIS audit compliance</li>
                <li>Fewer than five software subscriptions</li>
                <li>Requires live integrations or automated provisioning workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026-06-12 NDIS action map */}
      <section className="border-y border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-12 action map</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">NDIS provider billing-layer audit</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            For an owner-led NDIS or community care provider, the billing-layer audit covers rostering, care management, claims and plan-support tools, document and forms workflows, SMS packs, compliance modules, payroll connectors, AI note and admin tools, and coordinator/support-worker seats. Start with Xero or MYOB exports, business-card statements, direct debits, and vendor invoices. The output is a practical action list — not a compliance review or platform replacement project.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Card-statement + billing export", "Consolidate all recurring charges across card statements, accounting exports, direct debits, marketplace billing, and vendor invoices so annual charges and off-platform subscriptions surface in one view."],
              ["Owner/use pass", "Attach each tool to a current owner, user group, active workflow, and renewal date. Anything ownerless or with no login in 90 days becomes a review candidate — especially after coordinator or support-worker turnover."],
              ["Decision list output", "Keep, cancel, downgrade, consolidate, renegotiate, or assign-renewal-owner for every meaningful line item. Ranked by annual dollar impact so the busy provider operator starts with the highest-value actions."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "ndis_demand_map_0612" }} className="btn-primary text-sm">
              See the audit tool
            </TrackLink>
            <TrackLink href="/community-care-software-subscription-audit" event="homepage_cta_clicked" props={{ target: "related_audit", location: "ndis_demand_map_0612" }} className="btn-secondary text-sm">
              Compare the community care audit
            </TrackLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What software subscriptions do NDIS providers typically carry?",
                "A small NDIS or community care provider typically pays for rostering software (Deputy, Humanforce, Skedulo), a care management platform (ShiftCare, Careview, Brevity), payroll (Xero, MYOB), a compliance or audit tool, NDIS claims and billing software, a CRM or marketing tool, and general admin tools like document storage, e-sign, and email. Many providers accumulate overlapping tools as they scale, particularly across rostering and care management.",
              ],
              [
                "How do NDIS providers find software waste without a dedicated ops or IT team?",
                "Export 6 to 12 months of billing transactions from Xero, MYOB, or your business credit card. Group every charge by function — scheduling, care management, payroll, compliance, billing, communications. Look for categories with more than one active tool, seat counts that exceed current staff headcount, and tools that auto-renewed without a usage review. StackSmart automates this grouping and flags the waste patterns most common in care and NDIS organisations.",
              ],
              [
                "What is the biggest source of software waste for NDIS providers?",
                "Ghost seats are the most common finding. NDIS providers often have high staff turnover among support workers and coordinators. When someone leaves, their software licences are rarely removed promptly — leaving paid seats sitting idle. Rostering and care management platforms with per-user pricing are particularly affected.",
              ],
              [
                "How should an NDIS provider handle a plan-management subscription handoff?",
                "Treat the plan-management subscription handoff as an owner/admin control point: list each plan-management, claims, billing, and care-platform add-on, record the person responsible for renewal, and compare paid users against current coordinators and finance staff. StackSmart can help turn the billing export into a keep, cut, right-size, consolidate, or renegotiate action list, but the provider still makes the operational decision.",
              ],
              [
                "Should a small NDIS provider use a subscription management platform?",
                "For most small providers with 5 to 50 staff, a one-time or annual software audit produces most of the value at a fraction of the ongoing cost. Subscription management platforms are better suited to mid-market organisations with a dedicated ops function. A structured billing review with StackSmart is a faster starting point — it gives you a concrete findings report and action list without a platform rollout.",
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


      {/* 2026-06-12 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">2026-06-12 provider-safe billing audit</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Every subscription under the microscope — no participant data needed</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              DataForSEO shows 390 monthly AU searches for NDIS software (competition 61, CPC $21.19). Most results serve platform buyers. The owner-led NDIS provider with 5 to 50 staff needs the cheaper first move: pull card statements and billing exports, find the ghost support-worker seats, duplicate rostering charges, auto-renewing compliance tools from the last audit, AI note subscriptions at full coordinator headcount, and ownerless plan-management renewals that nobody reviews before the direct debit processes.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Provider-safe scope", "Card statements, accounting exports, vendor invoices, and direct-debit lists only. No participant plans, case notes, claims detail, support logs, or clinical records."],
              ["Seat and role audit", "Compare active support workers, coordinators, contractors, and admin staff against rostering, care-management, Microsoft 365, Google Workspace, and e-sign seat counts. Departed staff and ended contractors are immediate removal candidates."],
              ["AI and admin sprawl", "AI note tools, transcription, compliance dashboards, and ChatGPT or Claude subscriptions adopted during a team push often concentrate active use in one or two coordinators. Right-size before the next renewal."],
              ["Renewal-owner handoff", "Every subscription needs a named renewal owner across operations, finance, support coordination, rostering, and admin. Ownerless renewals are the highest-risk category — assign one person before the auto-charge window closes."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-dark-800 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <OwnerLedRefreshSection type="ndis" />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="ndis_provider_audit"
            heading="See what a care provider software audit report looks like"
            body="Email yourself the sample report to see the output format before uploading your own billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit without an IT team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "ndis_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "ndis_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for care and health businesses"
        description="These pages cover the software audit process, tools, and vertical guides for other owner-led SMB sectors."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Allied health and clinic-specific guide to reviewing admin, booking, billing, and marketing subscriptions.",
          },
          {
            href: "/childcare-software-subscription-audit",
            title: "Childcare software subscription audit",
            description: "Enrolment, rostering, payroll, and parent comms — audit guide for childcare and early learning operators.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Step-by-step process for reviewing recurring software spend without a procurement specialist.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into a structured savings report.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
