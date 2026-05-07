import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Accounting Firm Software Stack Audit | Cut Subscription Waste in Your Practice",
  description:
    "Small accounting and bookkeeping firms carry practice management, tax, payroll, proposal, document, e-sign, CRM, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate.",
  path: "/accounting-firm-software-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/accounting-firm-software-stack-audit"),
      url: absoluteUrl("/accounting-firm-software-stack-audit"),
      name: "Accounting Firm Software Stack Audit | StackSmart",
      description:
        "Small accounting and bookkeeping firms carry practice management, tax, payroll, proposal, document, e-sign, CRM, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate.",
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
          name: "Accounting Firm Software Stack Audit",
          item: absoluteUrl("/accounting-firm-software-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software do small accounting and bookkeeping firms typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small accounting or bookkeeping firm typically pays for practice management software (XPM, Karbon, Jetpack Workflow), tax preparation tools (CCH, MYOB Tax, FutureTax), payroll (Xero, MYOB), a proposal and engagement letter platform (Ignition, Practice Ignition), document management (FYI Docs, SmartVault, ShareFile), an e-signature tool (DocuSign, Adobe Sign), and marketing tools. Firms frequently accumulate duplicate tools in the proposal, document, and e-sign categories as the market has matured and platforms have expanded their features.",
          },
        },
        {
          "@type": "Question",
          name: "How do accounting firms audit their software subscriptions without a dedicated ops function?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from Xero, MYOB, or your firm credit card. Group every charge by function — practice management, tax, payroll, proposals, documents, e-sign, CRM, and marketing. For each category with more than one active tool, check what features your practice management platform now includes. Cross-reference user lists against current staff headcount to find idle licences. Flag contracts renewing within 90 days as renegotiation targets. StackSmart automates the grouping and flags the patterns most common in accounting and bookkeeping firm stacks.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common software waste in accounting firms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common findings are e-sign and document management tool duplication. Many accounting practices adopted DocuSign when e-signing was new, then added their practice management or document platform's built-in e-sign feature without retiring the original. Similarly, document platforms often overlap with proposal tools that now include template libraries and document generation. A single audit typically finds one or two redundant subscriptions in these categories.",
          },
        },
        {
          "@type": "Question",
          name: "When should an accounting firm audit its software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management and tax platforms are often billed annually and carry the highest per-seat cost. For many firms, the end of tax season or end of financial year is a natural review point, when staffing and workflow volumes are clearer for the year ahead.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for an accounting firm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by practice function (practice management, tax, payroll, document management, e-sign, marketing), a list of flagged attention areas (zombie seats, duplicate tool pairs, forgotten subscriptions, upcoming renewals), and a prioritised action list ranked by annual dollar impact. The report is designed for the firm owner or accounting partner to review and share with a practice manager or office manager to action — a practical spend view, not an enterprise procurement audit.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Redundant e-sign subscriptions",
    detail:
      "DocuSign or Adobe Sign running alongside a practice management or document platform that now includes e-signing natively. Many firms adopted standalone e-sign early and never revisited after their primary platform added the feature.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Parallel document management and storage",
    detail:
      "FYI Docs, SmartVault, ShareFile, or a generic cloud storage tool running alongside each other. Document management platforms have expanded significantly — a second tool often became redundant after the primary platform added client portals or template libraries.",
    color: "text-red-400",
    tag: "Audit overlap",
  },
  {
    label: "Proposal tool alongside practice management features",
    detail:
      "Ignition or a standalone proposal tool running in parallel with practice management software that now includes engagement letter and proposal features. Both subscriptions continue billing while the team uses one for generation and the other for workflow.",
    color: "text-amber-400",
    tag: "Consolidate",
  },
  {
    label: "Ghost licences after staff departures",
    detail:
      "Tax and practice management platforms charge per user. When a staff accountant or bookkeeper leaves, their licence is rarely removed promptly. On a $60 to $120 per user per month platform, idle licences are expensive quickly.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Marketing platform on an unused tier",
    detail:
      "CRM or email marketing tools on a Business or Growth plan selected when the firm intended to invest in business development. If that initiative stalled, the subscription is paying for send volume and features the team does not use.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    label: "Annual platform contracts above current headcount",
    detail:
      "Practice management, tax, and payroll platforms contracted at a previous peak headcount renew without anyone comparing current user counts to the plan. A firm that went from 12 to 9 staff may still be paying for 12 seats.",
    color: "text-brand-400",
    tag: "Renegotiate",
  },
];

export default function AccountingFirmSoftwareStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Accounting firm software stack audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut subscription waste in your practice stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Small accounting and bookkeeping firms carry more software than most professional services businesses their size — practice management, tax, payroll, proposals, document management, e-sign, CRM, and marketing. As platforms have expanded their native features, most practices end up with zombie seats from departed staff, forgotten annual subscriptions, and duplicate e-sign or document tools where nobody stopped to ask what they are actually paying for. StackSmart produces a practical software-spend snapshot — the kind of line-by-line view an owner or partner needs before going through statements manually — without enterprise procurement overhead.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "accounting_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "accounting_audit_secondary" }}
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
              How do accounting firms audit their software stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from Xero, MYOB, or your firm credit card. Group every recurring charge by category — practice management, tax preparation, payroll, proposals, document management, e-sign, CRM, and marketing. For any category with more than one active tool, open each platform and compare what your primary practice management or document platform now includes natively. Cross-reference user licences against your current team list and flag any idle accounts. Identify contracts renewing within the next 90 days and open renegotiation conversations before auto-renewal. Prioritise by annual cost and act on cancellations first — they require no vendor discussion.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical accounting firm software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most small accounting and bookkeeping practices are running 10 to 16 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Practice management", "XPM (Xero Practice Manager), Karbon, Jetpack Workflow, Senta — the operational core. Increasingly includes client communications, document storage, and workflow automation that once required separate tools."],
              ["Tax preparation", "CCH, MYOB Tax, FutureTax, HandiTax — sometimes multiple platforms where a firm serves both individual and business clients, or where a team member has a preferred tool."],
              ["Payroll and HR", "Xero Payroll, MYOB, Employment Hero — often integrated with practice management but sometimes on a separate subscription, particularly where the firm manages payroll for clients as well as internally."],
              ["Proposals and engagement letters", "Ignition, Practice Ignition, or a dedicated proposal tool. Many practice management platforms now include engagement letter generation, creating overlap."],
              ["Document management and client portals", "FYI Docs, SmartVault, ShareFile, Citrix Content Collaboration — often running alongside each other or alongside a practice management portal."],
              ["E-sign", "DocuSign, Adobe Sign, or built-in e-sign from the document platform. Frequently a redundant standalone subscription running alongside a platform that added native e-sign."],
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
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in accounting practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing accounting firm billing exports.
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
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a small accounting firm</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run outside busy season. No dedicated ops function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from Xero, MYOB, or your firm credit card. Include direct debits and any subscriptions on personal cards used for practice tools. Cover at least 12 months — practice management and tax platforms frequently bill annually. Consolidate everything into one list with vendor, amount, and frequency.",
              ],
              [
                "Week 2 — Map the stack and identify overlap",
                "Group every subscription by category: practice management, tax, payroll, proposals, document management, e-sign, CRM, and marketing. For categories with more than one tool, check what your practice management and document platforms now include natively. The e-sign and document management categories are the most common sources of overlap in accounting firm stacks.",
              ],
              [
                "Week 3 — Size the savings and prioritise",
                "Pull the user list from each per-seat platform and compare it against your current team headcount. Calculate the annual cost of each idle licence and each redundant tool. Rank by dollar impact and ease of action. Cancellations come first — they need no negotiation. Then consolidation, downgrade, and renegotiation conversations for contracts renewing within 90 days.",
              ],
              [
                "Week 4 — Act and document",
                "Remove idle user accounts and cancel redundant tools before the next billing cycle. Initiate consolidation conversations where you have identified tool overlap. Contact vendors on annual contracts renewing soon — current user count and usage data are useful leverage. Document each decision so the next review starts from a clean baseline rather than repeating the groundwork.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from an accounting firm software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative example findings based on common patterns in accounting practice billing data. Actual amounts vary by firm size and stack.
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
                  ["DocuSign running alongside practice management e-sign", "Cancel DocuSign", "$600 – $2,400/yr"],
                  ["Two document management platforms active simultaneously", "Retire the secondary platform", "$900 – $3,600/yr"],
                  ["3 idle user accounts in practice management tool", "Remove inactive licences", "$1,080 – $4,320/yr"],
                  ["Proposal tool, practice management now handles proposals", "Consolidate to one platform", "$480 – $1,800/yr"],
                  ["Email marketing on Growth plan, monthly newsletter only", "Downgrade to standard tier", "$360 – $1,200/yr"],
                  ["Practice management contract at 12-seat rate, 9 current staff", "Renegotiate to current headcount", "$1,440 – $5,400/yr"],
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
            StackSmart produces a practical software-spend snapshot for owner-led accounting practices — not an enterprise procurement platform. A report you can review with a partner and action in a week.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by practice function — practice management, tax, payroll, document management, e-sign, and marketing. No manual sorting or spreadsheet required."],
              ["Flagged attention areas", "Zombie seats, duplicate tool pairs, forgotten annual subscriptions, and renewal risks — recurring payments with no active owner making a decision about them."],
              ["Prioritised action list", "Cancel, consolidate, downgrade, and renegotiate — ranked by annual dollar impact so you know where to start and what to delegate to your practice manager."],
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
              The firm owner or accounting partner runs the initial review and owns the cancellation and renegotiation decisions. The completed savings report is typically shared with a practice manager or office manager to action seat removals and vendor conversations. It can also be handed to a bookkeeper or finance admin as a structured view of recurring payments — useful before anyone goes through statements line by line. Accounting partners who work with SMB clients sometimes share the StackSmart concept as a practical advisory exercise for clients with unreviewed software spend.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="border-t border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for accounting practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both methods surface the same waste. StackSmart removes the spreadsheet step so the review gets done outside busy season.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from Xero or MYOB and firm credit card separately</li>
                <li>Manually categorise each line item by function</li>
                <li>Pull user lists from each platform individually</li>
                <li>Map overlap between platforms by reviewing feature sets</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings into something shareable with partners</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across accounting firm tool categories</li>
                <li>Flags duplicate tools, idle seats, and renewal risks</li>
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Accounting or bookkeeping practice with 2 to 30 staff</li>
                <li>Owner, partner, or practice manager responsible for software decisions</li>
                <li>Paying for practice management, tax, and at least 3 other tools</li>
                <li>No dedicated IT, ops, or procurement function</li>
                <li>Billing data accessible from Xero, MYOB, or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Mid-size or large accounting firm with a dedicated IT or operations function</li>
                <li>Primary need is security governance or compliance audit tooling</li>
                <li>Fewer than five software subscriptions in total</li>
                <li>Requires automated provisioning or directory integration</li>
              </ul>
            </div>
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
                "What software do small accounting and bookkeeping firms typically subscribe to?",
                "A small accounting or bookkeeping firm typically pays for practice management software (XPM, Karbon, Jetpack Workflow), tax preparation tools (CCH, MYOB Tax, FutureTax), payroll (Xero, MYOB), a proposal and engagement letter platform (Ignition, Practice Ignition), document management (FYI Docs, SmartVault, ShareFile), an e-signature tool (DocuSign, Adobe Sign), and marketing tools. Firms frequently accumulate duplicate tools in the proposal, document, and e-sign categories as the market has matured.",
              ],
              [
                "How do accounting firms audit their software subscriptions without a dedicated ops function?",
                "Export 6 to 12 months of billing data from Xero, MYOB, or your firm credit card. Group every charge by function — practice management, tax, payroll, proposals, documents, e-sign, CRM, and marketing. For each category with more than one active tool, check what features your practice management platform now includes. Cross-reference user lists against current staff headcount to find idle licences. Flag contracts renewing within 90 days as renegotiation targets.",
              ],
              [
                "What is the most common software waste in accounting firms?",
                "The most common findings are e-sign and document management tool duplication. Many accounting practices adopted DocuSign when e-signing was new, then added their practice management or document platform's built-in e-sign feature without retiring the original. Similarly, document platforms often overlap with proposal tools that now include template libraries and document generation.",
              ],
              [
                "When should an accounting firm audit its software subscriptions?",
                "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management and tax platforms are often billed annually and carry the highest per-seat cost. For many firms, the end of tax season or end of financial year is a natural review point, when staffing and workflow volumes are clearer for the year ahead.",
              ],
              [
                "What does the StackSmart output look like for an accounting firm?",
                "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by practice function, a list of flagged attention areas (zombie seats, duplicate tool pairs, forgotten subscriptions, and upcoming renewals), and a prioritised action list ranked by annual dollar impact. The report is designed for the firm owner or accounting partner to review and share with a practice manager or office manager to action — a practical spend view, not an enterprise procurement audit.",
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
            location="accounting_firm_audit"
            heading="See what an accounting firm software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before busy season returns</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "accounting_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "accounting_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for professional services"
        description="These pages cover the software audit process, tools, and guides for other owner-led SMB verticals."
        links={[
          {
            href: "/bookkeeping-firm-software-stack-audit",
            title: "Bookkeeping firm software stack audit",
            description: "Add-on sprawl, e-sign and receipt duplication, and tier creep in Xero, QBO, and MYOB ecosystem stacks.",
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
            description: "Work through a structured checklist before turning billing data into a savings report.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
