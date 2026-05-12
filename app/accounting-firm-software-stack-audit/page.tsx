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
    "Small accounting and bookkeeping firms carry practice management, tax, payroll, proposal, document, e-sign, CRM, AI assistant, and marketing tools. A software audit builds an overlap map, renewal calendar, and cut list before the next renewal cycle.",
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
        "Small accounting and bookkeeping firms carry practice management, tax, payroll, proposal, document, e-sign, CRM, AI assistant, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate.",
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
            text: "A small accounting or bookkeeping firm typically pays for practice management software (XPM, Karbon, Jetpack Workflow), tax preparation tools (CCH, MYOB Tax, FutureTax), payroll (Xero, MYOB), a proposal and engagement letter platform (Ignition, Practice Ignition), document management (FYI Docs, SmartVault, ShareFile), an e-signature tool (DocuSign, Adobe Sign), marketing tools, and increasingly AI assistants (ChatGPT Teams, Microsoft 365 Copilot, Otter.ai, Fireflies). Firms frequently accumulate duplicate tools in the proposal, document, e-sign, and AI assistant categories as the market has matured and platforms have expanded their features.",
          },
        },
        {
          "@type": "Question",
          name: "How do accounting firms audit their software subscriptions without a dedicated ops function?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from Xero, MYOB, or your firm credit card. Group every charge by function — practice management, tax, payroll, proposals, documents, e-sign, CRM, AI assistants, and marketing. For each category with more than one active tool, check what features your practice management platform now includes. Cross-reference user lists against current staff headcount to find idle licences. Flag contracts renewing within 90 days as renegotiation targets. StackSmart automates the grouping and flags the patterns most common in accounting and bookkeeping firm stacks.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common software waste in accounting firms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common findings are e-sign and document management tool duplication, ghost licences after staff departures, and — increasingly — AI assistant seat accumulation. Many practices now pay for ChatGPT Teams or Microsoft 365 Copilot at the full team tier while only one or two partners actively use it. Otter.ai or Fireflies meeting transcription tools are frequently forgotten after an initial trial. DocuSign running alongside a practice management platform's built-in e-sign is also a perennial finding.",
          },
        },
        {
          "@type": "Question",
          name: "Do accounting firms overspend on AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — AI subscription waste is a fast-growing category in accounting firm billing exports. Practices that adopted ChatGPT Teams, Microsoft 365 Copilot, Canva Pro (for AI features), and meeting assistant tools like Otter.ai or Fireflies during the 2023–2024 AI adoption wave now often find multiple AI tools billing at full team tiers with two or three active users. A firm with 10 staff paying for ChatGPT Teams ($30/user/month) across all seats — while only the owner and one senior accountant use it — is spending $3,600/year on unused AI licences. The fix is the same as any other ghost licence: assign a named owner for each AI subscription and right-size the seat count before renewal.",
          },
        },
        {
          "@type": "Question",
          name: "When should an accounting firm audit its software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management and tax platforms are often billed annually and carry the highest per-seat cost. For many firms, the end of tax season or end of financial year is a natural review point, when staffing and workflow volumes are clearer for the year ahead. AI subscription renewals now add a second category worth reviewing at the same time.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for an accounting firm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by practice function (practice management, tax, payroll, document management, e-sign, AI tools, marketing), a list of flagged attention areas (zombie seats, duplicate tool pairs, forgotten subscriptions, upcoming renewals), and a prioritised action list ranked by annual dollar impact. The report is designed for the firm owner or accounting partner to review and share with a practice manager or office manager to action — a practical spend view, not an enterprise procurement audit.",
          },
        },
        {
          "@type": "Question",
          name: "How does a 30-minute card-statement pass help accounting firms find software waste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A card-statement pass for an accounting firm involves pulling the last three months of the firm credit card and reviewing every recurring charge against two questions: does this have an active named user on the current team, and is there a duplicate tool in the same category? This pass typically flags two to four obvious issues in 30 minutes — a standalone e-sign tool running alongside a practice management platform that already includes e-sign, AI subscriptions at full team tier with one or two active users, ghost licences from departed staff, and annual contracts approaching renewal without a review decision. If two or more flags appear, a full billing export audit covering 12 months will almost certainly surface additional recoverable spend.",
          },
        },
        {
          "@type": "Question",
          name: "How should an accounting firm handle the finance truth cleanup after an audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After running the audit, the firm owner or managing partner makes the keep, cut, consolidate, or renegotiate decision on each flagged item. The completed savings report is then handed to a practice manager or office manager to execute — removing seats, cancelling redundant subscriptions, and opening renegotiation conversations with vendors on upcoming renewals. Accounting partners who work with SMB clients can also share the StackSmart concept as a practical advisory exercise, running a software spend review as part of an EOFY check or business health review for clients who have no clear picture of what their business is actually paying for in recurring software charges.",
          },
        },
        {
          "@type": "Question",
          name: "How should accounting firm owners use a software inventory spreadsheet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the spreadsheet as a working overlap map, not a procurement database. List every recurring software charge, the category it serves, the named owner, current users, payment source, renewal date, and whether another tool already does the same job. In accounting firms the useful columns are practice management, tax, payroll, receipt capture, proposals, documents, e-sign, reporting, AI assistants, and marketing. The owner or practice manager can then ask the practical question: which app can we cancel before the next renewal without disrupting client work?",
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
    label: "AI assistant and automation seat accumulation",
    detail:
      "ChatGPT Teams, Microsoft 365 Copilot, Otter.ai, Fireflies, and Canva Pro all billing at full team tier while active usage is limited to one or two partners. AI tools adopted firm-wide during 2023–2024 now often have 60–80% idle seats with no named owner for the subscription renewal.",
    color: "text-red-400",
    tag: "Right-size",
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
              Small accounting and bookkeeping firms carry more software than most professional services businesses their size — practice management, tax, payroll, proposals, document management, e-sign, CRM, AI assistants, and marketing. As platforms have expanded their native features and every AI vendor now offers a team tier, most practices end up with zombie seats from departed staff, forgotten annual subscriptions, duplicate e-sign or document tools, and AI assistant seats where nobody stopped to ask what they are actually paying for. StackSmart produces a practical software-spend snapshot — the kind of prioritised action list an owner or partner needs before going through statements manually — without enterprise procurement overhead.
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
              Export 6 to 12 months of billing data from Xero, MYOB, or your firm credit card. Group every recurring charge by category — practice management, tax preparation, payroll, proposals, document management, e-sign, CRM, AI assistants, and marketing. For any category with more than one active tool, open each platform and compare what your primary practice management or document platform now includes natively. Cross-reference user licences against your current team list and flag any idle accounts. Check AI subscription seat counts — ChatGPT Teams, Microsoft 365 Copilot, Otter.ai, and Canva Pro often bill at the original purchase quantity long after active use concentrated in two or three users. Identify contracts renewing within the next 90 days and open renegotiation conversations before auto-renewal. Prioritise by annual cost and act on cancellations first — they require no vendor discussion.
            </p>
          </div>
        </div>
      </section>

      {/* 30-minute card-statement pass for accounting firms */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Partner or principal quick-start</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              What an accounting firm owner can check in 30 minutes from the card statement
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Before running a full billing export audit, a 30-minute card-statement pass gives a practice owner or managing partner a clear view of what the firm is paying for and where the most obvious waste is. Pull the last three months of the firm credit card and work through these categories:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Practice management and tax seats", "Confirm the seat counts on your practice management and tax platforms match current team size. A firm that went from 12 to 9 staff and never updated the licence count is one of the most common findings."],
                ["E-sign and document tools", "Check whether DocuSign or Adobe Sign appears on the statement alongside your practice management platform. If your PM tool includes native e-sign, the standalone subscription is a consolidation candidate."],
                ["AI subscriptions — the owner-use check", "List every AI tool on the statement: ChatGPT Teams, Microsoft 365 Copilot, Otter.ai, Fireflies, Canva Pro. For each, name one partner or staff member who used it this week. If you cannot — right-size the seat count before the next billing date."],
                ["Proposal and engagement letter tools", "Note whether Ignition or a standalone proposal tool appears alongside your practice management subscription. PM platforms that now include engagement letter generation are a frequent source of duplication."],
                ["Ghost licences from departed staff", "Any team member who left in the last 12 months may still have an active licence on a per-seat platform. Pull the user list from each tool and compare against current headcount."],
                ["Annual renewals within 90 days", "Search email for auto-renewal notices and note any practice management, tax, or payroll contracts renewing soon. These are renegotiation windows — act before the renewal date, not after it processes."],
              ].map(([step, detail]) => (
                <div key={step} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-white">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              If the 30-minute pass surfaces two or more flags — which is typical for a practice that has not reviewed its stack in the past 12 months — a full billing export audit will almost certainly surface additional recoverable spend. StackSmart automates the categorisation and flags the patterns most common in accounting firm stacks, producing a report the owner or partner can share with a practice manager or finance admin to execute. See also: <a href="/bookkeeping-firm-software-stack-audit" className="text-brand-400 hover:text-brand-300 transition-colors">bookkeeping firm audit guide</a> and <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a>.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "accounting_card_statement_pass" }} className="btn-primary text-sm">
                Run the full audit
              </TrackLink>
              <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "accounting_card_statement_pass" }} className="btn-secondary text-sm">
                View audit checklist
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Integration add-on and connected-app sprawl */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">Connected-app sprawl and integration add-on costs</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Paid connectors, bridge tools, and QuickBooks/Xero connected-app sprawl
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Beyond the core practice tools, accounting and bookkeeping firms accumulate a second layer of hidden recurring cost: the integration connectors, bridge subscriptions, and connected-app ecosystem fees that sit between primary platforms. These charges are easy to miss because they appear as obscure vendor names rather than the platforms they connect — and they keep billing long after the integration breaks, the client leaves, or the primary platforms introduce a native sync.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "HubSpot–Xero integration add-ons",
                  detail: "Connecting HubSpot CRM to Xero for invoicing often requires a paid connector — Invoice Stack, Zapier, or a native integration add-on. These connector fees ($30–$120/month) are separate from both platform subscriptions and are rarely reviewed when either platform changes its native integration capability. When HubSpot or Xero adds a native sync, the third-party connector keeps billing.",
                  color: "text-amber-300",
                },
                {
                  title: "QuickBooks connected-app sprawl",
                  detail: "Firms that manage QuickBooks clients — or run QBO internally — accumulate connected apps through the QBO marketplace: receipt capture, payroll, inventory, time tracking, and reporting tools each requiring separate authorisation and often separate billing. When a firm switches a client from QBO to Xero, the QBO-connected apps frequently keep billing until someone audits the connected-app list explicitly.",
                  color: "text-amber-300",
                },
                {
                  title: "Xero connected-app ecosystem fees",
                  detail: "Xero&apos;s marketplace add-ons often carry integration fees on top of the add-on subscription itself — per-transaction charges, API call fees, or data-sync costs that are not visible on the main Xero billing page. Receipt capture tools (Dext, Hubdoc), payroll integrations, and client portal add-ons all carry their own billing cycles. When the firm migrates a client or replaces a tool, the connected billing rarely cancels automatically.",
                  color: "text-amber-300",
                },
                {
                  title: "Cleanup drag: the time cost of broken integrations",
                  detail: "A broken or partially configured integration between accounting and CRM platforms creates recurring manual cleanup work — duplicate transactions, mismatched records, manual export-import between tools. The cleanup drag compounds across every month the integration runs in a broken state. Auditing the connected-app layer often surfaces not just cost savings but the root cause of recurring reconciliation friction.",
                  color: "text-amber-300",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className={`text-sm font-semibold ${item.color}`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The connected-app audit pass: export 12 months of billing data and filter for any vendor name you don&apos;t immediately recognise as a primary platform. These obscure line items are almost always connectors, add-ons, or bridge tools. For each one, identify which two platforms it connects, whether that connection is still active, and whether either platform now offers a native sync that makes the connector redundant. See also: <a href="/xero-app-stack-audit" className="text-brand-400 hover:text-brand-300 transition-colors">Xero app stack audit</a> for the full connected-app review workflow, and <a href="/ai-subscription-audit" className="text-brand-400 hover:text-brand-300 transition-colors">AI subscription audit</a> for the separate AI tool layer now common in accounting firm billing exports.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical accounting firm software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most small accounting and bookkeeping practices are running 12 to 18 recurring subscriptions across these categories.
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

      {/* AI subscription waste callout */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">New waste category: AI subscriptions</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              AI tool seat accumulation is now a standard accounting firm audit finding
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Since 2023, most accounting practices have added at least two AI subscriptions — and many have four or five. The problem is not the tools themselves; it is that seat counts were set when the whole team was expected to adopt them, and usage concentrated in one or two people. Common findings:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["ChatGPT Teams or Claude Pro", "Purchased at full team tier (8–15 seats) for firm-wide AI writing assistance. Active use typically 1–3 people after the initial onboarding period. $25–$30/user/month at full tier."],
                ["Microsoft 365 Copilot add-on", "Added to an existing M365 Business subscription at $30/user/month. Usage rarely validated after the first 60 days. On a 12-person plan, unused seats cost $4,320/year."],
                ["Meeting transcription (Otter.ai / Fireflies)", "Subscribed at a team plan during a push to document client calls. Often forgotten after the first month or replaced by a built-in Teams/Zoom transcript feature. $10–$19/user/month."],
                ["Canva Pro (AI features tier)", "Upgraded from free to Pro for AI background removal and generative features. Multiple team members on separate individual plans billing independently of the firm account."],
              ].map(([tool, detail]) => (
                <div key={tool} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-amber-300">{tool}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The owner-use check: before tax season or EOFY, pull every AI subscription from your billing export and assign a named seat-owner to each. If you cannot name who uses it regularly, it is a right-size or cancellation candidate. A partner or practice manager can work through this in under 30 minutes with a billing export — the same pass you run on e-sign or document tools.
            </p>
            <div className="mt-6">
              <TrackLink
                href="/saas-spend-audit-tool"
                event="homepage_cta_clicked"
                props={{ target: "audit_tool", location: "accounting_ai_callout" }}
                className="btn-secondary text-sm"
              >
                Run the audit with StackSmart
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in accounting practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the seven patterns StackSmart most commonly surfaces when reviewing accounting firm billing exports.
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
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a small accounting firm</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run outside busy season. No dedicated ops function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from Xero, MYOB, or your firm credit card. Include direct debits and any subscriptions on personal cards used for practice tools. Cover at least 12 months — practice management and tax platforms frequently bill annually, and AI subscriptions adopted in 2023 may be approaching their first annual renewal without anyone noticing. Consolidate everything into one list with vendor, amount, and frequency.",
              ],
              [
                "Week 2 — Map the stack and identify overlap",
                "Group every subscription by category: practice management, tax, payroll, proposals, document management, e-sign, AI assistants, CRM, and marketing. For categories with more than one tool, check what your practice management and document platforms now include natively. The e-sign, document management, and AI tool categories are the most common sources of overlap in accounting firm stacks. For AI tools specifically, note each tool's seat count alongside the number of staff who use it weekly.",
              ],
              [
                "Week 3 — Size the savings and prioritise",
                "Pull the user list from each per-seat platform and compare it against your current team headcount. Calculate the annual cost of each idle licence and each redundant tool. For AI subscriptions, the owner-use check is straightforward: if you cannot name who uses the tool at least twice a week, it is a right-size candidate. Rank all findings by dollar impact and ease of action. Cancellations come first — they need no negotiation. Then consolidation, downgrade, and renegotiation conversations for contracts renewing within 90 days.",
              ],
              [
                "Week 4 — Act and document",
                "Remove idle user accounts and cancel redundant tools before the next billing cycle. Right-size AI subscriptions to the actual active users before the annual renewal date. Initiate consolidation conversations where you have identified tool overlap. Contact vendors on annual contracts renewing soon — current user count and usage data are useful leverage. Document each decision so the next review starts from a clean baseline rather than repeating the groundwork.",
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
                  ["ChatGPT Teams at 12 seats, 2 active users", "Right-size to 2–3 seats before renewal", "$2,160 – $3,600/yr"],
                  ["Microsoft 365 Copilot on full team plan, low active use", "Remove unused seats", "$1,440 – $4,320/yr"],
                  ["3 idle user accounts in practice management tool", "Remove inactive licences", "$1,080 – $4,320/yr"],
                  ["Proposal tool, practice management now handles proposals", "Consolidate to one platform", "$480 – $1,800/yr"],
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
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical software-spend snapshot for owner-led accounting practices — not an enterprise procurement platform. A report you can review with a partner and action in a week.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by practice function — practice management, tax, payroll, document management, e-sign, AI tools, and marketing. No manual sorting or spreadsheet required."],
              ["Flagged attention areas", "Zombie seats, duplicate tool pairs, forgotten annual subscriptions, AI seat accumulation, and renewal risks — recurring payments with no active owner making a decision about them."],
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
              The firm owner or accounting partner runs the initial review and owns the cancellation and renegotiation decisions — including AI subscription right-sizing before EOFY or tax-season renewal dates. The completed savings report is typically shared with a practice manager or office manager to action seat removals and vendor conversations. It can also be handed to a bookkeeper or finance admin as a structured view of recurring payments — useful before anyone goes through statements line by line. Accounting partners who work with SMB clients sometimes share the StackSmart concept as a practical advisory exercise for clients with unreviewed software spend.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
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
                <li>Check AI subscription seat counts against active usage</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings into something shareable with partners</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across accounting firm tool categories</li>
                <li>Flags duplicate tools, idle seats, AI seat accumulation, and renewal risks</li>
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
                "A small accounting or bookkeeping firm typically pays for practice management software (XPM, Karbon, Jetpack Workflow), tax preparation tools (CCH, MYOB Tax, FutureTax), payroll (Xero, MYOB), a proposal and engagement letter platform (Ignition, Practice Ignition), document management (FYI Docs, SmartVault, ShareFile), an e-signature tool (DocuSign, Adobe Sign), AI assistants (ChatGPT Teams, Microsoft 365 Copilot, Otter.ai), and marketing tools. Firms frequently accumulate duplicate tools in the proposal, document, e-sign, and AI assistant categories as the market has matured.",
              ],
              [
                "How do accounting firms audit their software subscriptions without a dedicated ops function?",
                "Export 6 to 12 months of billing data from Xero, MYOB, or your firm credit card. Group every charge by function — practice management, tax, payroll, proposals, documents, e-sign, AI assistants, CRM, and marketing. For each category with more than one active tool, check what features your practice management platform now includes. Cross-reference user lists against current staff headcount to find idle licences. Flag contracts renewing within 90 days as renegotiation targets.",
              ],
              [
                "What is the most common software waste in accounting firms?",
                "The most common findings are e-sign and document management tool duplication, ghost licences after staff departures, and AI assistant seat accumulation. Many practices now pay for ChatGPT Teams or Microsoft 365 Copilot at the full team tier while only one or two partners actively use it. Otter.ai or Fireflies meeting transcription tools are frequently forgotten. DocuSign running alongside a practice management platform's built-in e-sign remains a perennial finding.",
              ],
              [
                "Do accounting firms overspend on AI subscriptions?",
                "Yes — AI subscription waste is a fast-growing category in accounting firm billing exports. Practices that adopted ChatGPT Teams, Microsoft 365 Copilot, Canva Pro, and meeting assistant tools during the 2023–2024 AI adoption wave now often find multiple AI tools billing at full team tiers with two or three active users. The fix is the same as any other ghost licence: assign a named owner for each AI subscription and right-size the seat count before renewal.",
              ],
              [
                "When should an accounting firm audit its software subscriptions?",
                "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management and tax platforms are often billed annually and carry the highest per-seat cost. For many firms, the end of tax season or EOFY is a natural review point. AI subscription renewals now add a second category worth checking at the same time.",
              ],
              [
                "What does the StackSmart output look like for an accounting firm?",
                "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by practice function, a list of flagged attention areas (zombie seats, duplicate tool pairs, AI seat accumulation, forgotten subscriptions, and upcoming renewals), and a prioritised action list ranked by annual dollar impact. The report is designed for the firm owner or accounting partner to review and share with a practice manager or office manager to action — a practical spend view, not an enterprise procurement audit.",
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

      {/* Software inventory and renewal ownership */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Inventory before opinions</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Build the overlap map before asking partners what to cut</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The most useful first artifact for a 5–50 staff accounting practice is a simple software inventory spreadsheet. StackSmart turns billing exports into that map: every recurring charge, the function it serves, the payment source, a named owner, current user count, and the next renewal date. That makes the conversation practical: not “do we like this app?”, but “which app can we cancel, right-size, or move to the platform we already pay for?”
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">CPA / small-practice red flags to add to the sheet</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ["Seven connected apps", "QuickBooks or Xero add-ons causing duplicate transactions, buried fees, and wrong mapping cleanup at month end."],
                  ["No renewal owner", "Annual tax, proposal, document, AI, or reporting tools renewing because nobody owns the keep/cancel decision."],
                  ["Two tools, one workflow", "Receipt capture, e-sign, reporting, or proposal tools overlapping with features already included in practice management."],
                  ["Staff changed, seats stayed", "Practice management, AI assistants, and workflow seats still active for departed or inactive users."],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-xl border border-dark-700/80 bg-dark-950/80 p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-xs leading-6 text-dark-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
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
            description: "Add-on sprawl, e-sign and receipt duplication, software bills across multiple accounts, and AI seat right-sizing in Xero, QBO, and MYOB stacks.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into structured savings actions — including the finance handoff workflow for practices.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Work through a structured 8-step checklist — including owner-use accountability pass — before turning billing data into a savings report.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste — including the 30-minute card-statement pass and owner-use accountability workflow.",
          },
          {
            href: "/xero-app-stack-audit",
            title: "Xero app stack audit",
            description: "Audit your Xero add-ons for duplicate payroll, receipt capture, reporting, and practice management tools.",
          },
          {
            href: "/ai-subscription-audit",
            title: "AI subscription audit",
            description: "Find overlapping AI tools, idle seats on ChatGPT Teams and Claude Pro, and Copilot add-ons with low active use in accounting firm billing exports.",
          },
          {
            href: "/marketing-agency-software-stack-audit",
            title: "Marketing agency software stack audit",
            description: "SEO, social scheduling, design, and reporting stack audit for owner-led marketing and creative agencies.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
