import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Bookkeeping Firm Software Stack Audit",
  description:
    "Bookkeeping firms using Xero, QBO, or MYOB ecosystems accumulate receipt capture, payroll, proposal, workflow, e-sign, and client portal add-ons with significant overlap. A software audit finds the duplicate tools, tier creep, and partner-stack waste.",
  path: "/bookkeeping-firm-software-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/bookkeeping-firm-software-stack-audit"),
      url: absoluteUrl("/bookkeeping-firm-software-stack-audit"),
      name: "Bookkeeping Firm Software Stack Audit | StackSmart",
      description:
        "Bookkeeping firms using Xero, QBO, or MYOB ecosystems accumulate receipt capture, payroll, proposal, workflow, e-sign, and client portal add-ons with significant overlap.",
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
          name: "Bookkeeping Firm Software Stack Audit",
          item: absoluteUrl("/bookkeeping-firm-software-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software should a bookkeeping firm audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A bookkeeping firm software audit should cover the core bookkeeping platform (Xero, QBO, MYOB), receipt and expense capture tools (Dext, Hubdoc), payroll software, proposal and engagement letter platforms (Ignition), e-sign tools (DocuSign, Adobe Sign), client portal and document management, workflow and practice management (Karbon, Jetpack Workflow), and marketing tools. The highest waste is typically found in the receipt capture, e-sign, and proposal categories where platforms have expanded their features and created natural overlap.",
          },
        },
        {
          "@type": "Question",
          name: "Why do bookkeeping firms carry duplicate add-ons in the Xero and QBO ecosystem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ecosystem marketplaces make it easy to trial multiple tools in the same category without a clear consolidation policy. Bookkeeping firms adopt a receipt capture tool early, the bookkeeping platform later adds a native feature, and both continue billing. Proposal platforms and practice management systems have both expanded into engagement letter and e-sign territory — creating natural overlap that is easy to miss without a structured review.",
          },
        },
        {
          "@type": "Question",
          name: "How do bookkeeping firms audit software without disrupting client work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data from your accounting software or business credit card — no client data is accessed. Clearly separate subscriptions used for internal firm operations from any client-pass-through billing before reviewing. The principal or practice manager handles the initial categorisation and flagging, then involves staff only when planning consolidations to avoid workflow disruption for active clients.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart work for Xero and QBO ecosystem audits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart processes any billing export CSV and recognises the common add-on categories in the Xero, QBO, and MYOB ecosystems — receipt capture, payroll, proposals, e-sign, client portals, and workflow tools. It categorises recurring charges, flags duplicates and idle seats, and produces a prioritised action list focused on the firm's internal software spend.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for a bookkeeping firm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by function (bookkeeping platform, receipt capture, payroll, proposals, e-sign, client portal, workflow, and marketing), a list of flagged attention areas (zombie seats, duplicate add-on pairs, forgotten subscriptions, upcoming renewals), and a prioritised action list ranked by annual dollar impact. The firm principal reviews the findings and can share the report with a practice manager or office manager to handle seat removals and vendor conversations — a practical spend view, not an enterprise procurement audit.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Receipt and expense capture",
    issue:
      "Dext, Hubdoc, and a native receipt feature inside the bookkeeping platform all active simultaneously. Three tools in the same category — receipt scanning and expense entry — billing independently with significant functional overlap.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "E-sign and document execution",
    issue:
      "DocuSign or Adobe Sign running alongside a proposal or practice management platform that includes built-in e-signing. Bookkeeping firms adopted standalone e-sign early and often have not retired it after their primary platform added the feature natively.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Payroll",
    issue:
      "Payroll tool contracted at a per-employee tier that exceeds the firm's current headcount, or a standalone payroll subscription billing alongside a platform that already includes payroll processing as part of the base plan.",
    action: "Right-size",
    color: "text-amber-400",
  },
  {
    category: "Proposals and engagement letters",
    issue:
      "Ignition or a standalone proposal tool running in parallel with practice management software that now includes engagement letter creation, scope-of-work templates, and client acceptance workflows — two systems for the same front-of-house process.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Client portal and document management",
    issue:
      "Multiple document sharing or client portal tools active: one adopted for a specific client type, one bundled with practice management, and a third for general file sharing. Feature overlap across all three is substantial.",
    action: "Audit overlap",
    color: "text-orange-400",
  },
  {
    category: "Workflow and practice management",
    issue:
      "Jetpack Workflow, Karbon, or similar tool contracted at a seat count that exceeds current active staff — particularly common after staffing changes where licences were not removed promptly following departures.",
    action: "Right-size",
    color: "text-brand-400",
  },
];

export default function BookkeepingFirmSoftwareStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Bookkeeping firm software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit the add-on sprawl in your bookkeeping firm stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Bookkeeping firms running on Xero, QBO, or MYOB accumulate ecosystem add-ons faster than almost any other professional services business. Receipt capture tools, payroll platforms, e-sign subscriptions, proposal tools, client portals, and workflow apps — many with significant feature overlap that nobody has reviewed since the initial signup. Zombie seats from past staff, forgotten annual subscriptions, and duplicate tools in the receipt or e-sign category are the patterns most principals don&apos;t realise are there until they look. StackSmart gives you a practical software-spend snapshot — not an enterprise procurement platform — so the firm owner or principal can see what they&apos;re paying for and act in a week.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "bookkeeping_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "bookkeeping_audit_secondary" }}
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
              How do bookkeeping firms audit their software stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from Xero, QBO, MYOB, or your business credit card. Clearly separate subscriptions used for internal firm operations from any client-pass-through billing, then group firm subscriptions by category: bookkeeping platform, receipt and expense capture, payroll, proposals and engagement letters, e-sign, client portal and document management, workflow and practice management, and marketing. For any category with more than one active tool, check what your primary bookkeeping or practice management platform now includes natively. Cross-reference user lists against current staff headcount for every per-seat subscription. Review whether partner-program pricing still applies to your active platform subscriptions. Flag annual contracts renewing within 90 days as renegotiation targets.
            </p>
          </div>
        </div>
      </section>

      {/* Why firms accumulate add-ons */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why bookkeeping firms accumulate software faster than most</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive the majority of software waste in Xero- and QBO-based bookkeeping practices.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Ecosystem add-on sprawl",
                "Xero, QBO, and MYOB each maintain marketplaces of add-ons. Bookkeeping firms trial multiple tools in the same category — receipt capture, expense management, payroll — and keep more than one active after evaluation. The platforms that expanded their native features made many early add-ons redundant without triggering a cancellation review.",
              ],
              [
                "Duplicate tools across client and firm billing",
                "Bookkeeping firms sometimes run tools for clients that also appear on their internal billing. A payroll platform, a receipt tool, or a document management subscription can exist twice — once for client work and once billed to the firm — with the firm-level subscription unreviewed.",
              ],
              [
                "Partner-stack tier creep",
                "Xero and QBO partner programs offer favourable rates at launch that are renegotiated or shifted to standard pricing over time. Many bookkeeping firms do not review pricing annually and remain on tiers that no longer reflect their partner discount status or current team size.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical stack */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical bookkeeping firm software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most small bookkeeping firms running 1 to 20 staff are paying for 8 to 14 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Core bookkeeping platform", "Xero, QBO, or MYOB — the operational centre. All three have expanded their native feature sets significantly, making some ecosystem add-ons that were necessary three to five years ago now redundant."],
              ["Receipt and expense capture", "Dext (formerly Receipt Bank), Hubdoc, AutoEntry — often two or three active simultaneously, particularly where different team members adopted different tools for different clients over time."],
              ["Payroll", "Xero Payroll, MYOB, Employment Hero, KeyPay — sometimes integrated with the core platform but occasionally on a separate subscription, particularly for firms managing payroll for multiple clients."],
              ["Proposals and engagement letters", "Ignition, Practice Ignition, or a standalone proposal tool — overlapping with practice management platforms that now generate engagement letters, scope-of-work documents, and client acceptance workflows."],
              ["E-sign", "DocuSign, Adobe Sign, or built-in e-sign from a proposal or document platform — frequently a redundant standalone subscription running alongside a platform that added native e-sign after the original tool was adopted."],
              ["Workflow and practice management", "Jetpack Workflow, Karbon, Senta, or a project management tool adapted for bookkeeping work — contracted at a seat count that may not reflect current team size after staff changes."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste in bookkeeping firm stacks</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing bookkeeping firm billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteCategories.map((s) => (
              <div key={s.category} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${s.color}`}>{s.category}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {s.action}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{s.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day workflow */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a bookkeeping firm</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run outside peak client delivery periods. No dedicated ops function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Export billing data",
                "Pull 6 to 12 months of transactions from Xero, QBO, MYOB, or your business credit card. Include both direct subscriptions and any add-ons billed through the bookkeeping ecosystem accounts. Cover at least 12 months — workflow and practice management platforms often bill annually.",
              ],
              [
                "Week 2 — Separate firm tools from client billing and map the stack",
                "Clearly identify which subscriptions are for internal firm use versus those passed through to client engagements. Group firm subscriptions by category: bookkeeping platform, receipt capture, payroll, proposals, e-sign, client portal, document management, workflow, and marketing. Flag every category with more than one active tool.",
              ],
              [
                "Week 3 — Check partner pricing and seat counts",
                "For every per-seat subscription, pull the current user list and compare against active staff headcount. Review whether partner-program rates from Xero, QBO, or MYOB still apply to your current subscription terms. Calculate the annual cost of every flagged redundancy and idle licence.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel clearly redundant add-ons — particularly in the receipt capture and e-sign categories — before the next billing cycle. Consolidate overlapping tools in a quiet client week. Open renegotiation conversations on annual contracts renewing within 90 days. Document each decision for the next review cycle.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from a bookkeeping firm software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative findings based on common patterns in bookkeeping firm billing exports. Actual amounts vary by firm size and stack.
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
                  ["Dext and Hubdoc both active on same firm account", "Consolidate to one", "$480 – $2,400/yr"],
                  ["DocuSign running alongside practice management e-sign", "Cancel DocuSign", "$600 – $2,400/yr"],
                  ["Ignition plus practice management proposals both active", "Consolidate to one", "$480 – $1,800/yr"],
                  ["Payroll tool at 15-employee tier, 9 current staff", "Renegotiate or downgrade", "$720 – $3,600/yr"],
                  ["Two client portal and document tools active simultaneously", "Retire secondary", "$600 – $2,400/yr"],
                  ["Workflow tool on annual contract above current seat count", "Renegotiate to current headcount", "$1,080 – $4,320/yr"],
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

      {/* What you get */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical software-spend snapshot for owner-led bookkeeping firms — not an enterprise procurement platform. The firm principal gets a clear view of recurring payments and a prioritised action list they can act on or hand off to a practice manager.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by function — bookkeeping platform, receipt capture, payroll, proposals, e-sign, client portal, workflow, and marketing. No manual sorting."],
              ["Flagged attention areas", "Zombie seats, duplicate add-on pairs, forgotten annual subscriptions, and renewal risks — recurring payments where there is no active owner making a decision."],
              ["Prioritised action list", "Cancel, consolidate, downgrade, and renegotiate — ranked by annual dollar impact so you know where to start before the next billing cycle."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Who uses and shares this report</p>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              The firm principal or bookkeeping practice owner typically runs the initial review and owns the cancellation and renegotiation decisions. The completed savings report is shared with a practice manager or office manager to handle seat removals and vendor conversations. It can be handed to a finance admin as a structured view of recurring payments — a line-by-line spend snapshot before they go through statements manually. Bookkeepers who work with SMB clients can also share the StackSmart concept as a practical advisory step for clients with unreviewed software spend.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for bookkeeping firms</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the spreadsheet step so the review gets completed rather than deferred to the next quarter.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from Xero/QBO/MYOB and business credit card separately</li>
                <li>Manually separate firm billing from client-pass-through billing</li>
                <li>Categorise each add-on by function and check current feature sets</li>
                <li>Pull user lists from each per-seat platform individually</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings to share with firm principal or partners</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across bookkeeping firm tool categories</li>
                <li>Flags receipt capture overlap, idle seats, e-sign duplicates, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready for principals or partners</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your bookkeeping firm?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led bookkeeping firm using Xero, QBO, or MYOB ecosystems</li>
                <li>1 to 20 staff, principal or practice manager responsible for software decisions</li>
                <li>Multiple ecosystem add-ons across receipt, payroll, proposal, and document categories</li>
                <li>No dedicated IT or ops function managing subscriptions</li>
                <li>Billing data accessible from Xero, QBO, or business credit card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large accounting or bookkeeping group with a dedicated IT or operations function</li>
                <li>Primary need is compliance audit tooling or AML/regulatory review</li>
                <li>Fewer than five active software subscriptions</li>
                <li>Requires automated user provisioning or directory integration</li>
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
                "What software should a bookkeeping firm audit?",
                "A bookkeeping firm software audit should cover the core bookkeeping platform (Xero, QBO, MYOB), receipt and expense capture tools (Dext, Hubdoc), payroll software, proposal and engagement letter platforms (Ignition), e-sign tools (DocuSign, Adobe Sign), client portal and document management, workflow and practice management (Karbon, Jetpack Workflow), and marketing tools. The highest waste is typically found in the receipt capture, e-sign, and proposal categories where platforms have expanded their features and created natural overlap.",
              ],
              [
                "Why do bookkeeping firms carry duplicate add-ons in the Xero and QBO ecosystem?",
                "Ecosystem marketplaces make it easy to trial multiple tools in the same category without a clear consolidation policy. Bookkeeping firms adopt a receipt capture tool early, the bookkeeping platform later adds a native feature, and both continue billing. Proposal platforms and practice management systems have both expanded into engagement letter and e-sign territory — creating natural overlap that is easy to miss without a structured review.",
              ],
              [
                "How do bookkeeping firms audit software without disrupting client work?",
                "Start with billing data from your accounting software or business credit card — no client data is accessed. Clearly separate subscriptions used for internal firm operations from any client-pass-through billing before reviewing. The principal or practice manager handles the initial categorisation and flagging, then involves staff only when planning consolidations to avoid workflow disruption for active clients.",
              ],
              [
                "Does StackSmart work for Xero and QBO ecosystem audits?",
                "Yes. StackSmart processes any billing export CSV and recognises the common add-on categories in the Xero, QBO, and MYOB ecosystems — receipt capture, payroll, proposals, e-sign, client portals, and workflow tools. It categorises recurring charges, flags duplicates and idle seats, and produces a prioritised action list focused on the firm's internal software spend.",
              ],
              [
                "What does the StackSmart output look like for a bookkeeping firm?",
                "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by function, a list of flagged attention areas (zombie seats, duplicate add-on pairs, forgotten subscriptions, and upcoming renewals), and a prioritised action list ranked by annual dollar impact. The firm principal reviews the findings and can share the report with a practice manager or office manager to handle seat removals and vendor conversations — a practical spend view, not an enterprise procurement audit.",
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
            location="bookkeeping_firm_software_audit"
            heading="See what a bookkeeping firm software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your firm billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Clean up the add-on stack before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your firm's review cadence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "bookkeeping_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "bookkeeping_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for bookkeeping and accounting firms"
        description="These pages cover the broader SMB audit guide, the accounting firm-specific guide, the checklist, and the core StackSmart audit tool."
        links={[
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, payroll, document, and e-sign stack audit guide for small accounting and bookkeeping firms.",
          },
          {
            href: "/xero-app-stack-audit",
            title: "Xero app stack audit",
            description: "Audit your Xero add-ons for duplicate payroll, receipt capture, reporting, and practice management tools.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Booking, telehealth, recalls, and admin subscription audit for owner-led allied health practices.",
          },
          {
            href: "/marketing-agency-software-stack-audit",
            title: "Marketing agency software stack audit",
            description: "SEO, social scheduling, design, and reporting stack audit for owner-led marketing and creative agencies.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your firm stack.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
