import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Bookkeeping Firm Software Stack Audit",
  description:
    "Bookkeeping firms using Xero, QBO, QuickBooks, or MYOB ecosystems accumulate receipt capture, payroll, proposal, workflow, e-sign, AI transcription, connector fees, and client portal add-ons. A software audit finds duplicate tools, integration fee waste, renewal gaps, and recurring payment sprawl.",
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
        "Bookkeeping firms using Xero, QBO, or MYOB ecosystems accumulate receipt capture, payroll, proposal, workflow, e-sign, AI transcription, connector fees, and client portal add-ons with significant overlap.",
      dateModified: "2026-07-09",
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
            text: "A bookkeeping firm software audit should cover the core bookkeeping platform (Xero, QBO, MYOB), receipt and expense capture tools (Dext, Hubdoc), payroll software, proposal and engagement letter platforms (Ignition), e-sign tools (DocuSign, Adobe Sign), client portal and document management, workflow and practice management (Karbon, Jetpack Workflow), AI transcription and automation tools (Otter.ai, Fireflies, ChatGPT Teams), and marketing tools. Also check connector and integration fees billed separately through the Xero, QBO, or MYOB marketplace. The highest waste is typically found in the receipt capture, e-sign, proposal, connector fees, and AI tool categories where platforms have expanded their features and created natural overlap.",
          },
        },
        {
          "@type": "Question",
          name: "Why do bookkeeping firms carry duplicate add-ons in the Xero and QBO ecosystem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ecosystem marketplaces make it easy to trial multiple tools in the same category without a clear consolidation policy. Bookkeeping firms adopt a receipt capture tool early, the bookkeeping platform later adds a native feature, and both continue billing. Proposal platforms and practice management systems have both expanded into engagement letter and e-sign territory. AI transcription and meeting tools were adopted firm-wide but active use concentrated in one or two people — creating seat waste that is easy to miss without a structured review.",
          },
        },
        {
          "@type": "Question",
          name: "What are connector and integration fees in a Xero or QBO bookkeeping stack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Connector and integration fees are charges billed separately from the base subscription of each tool — typically by the integration layer that keeps two platforms in sync. In a Xero or QBO bookkeeping stack, these appear as Zapier workflow fees, API connector charges, marketplace add-on sync fees, and third-party automation costs for things like receipt capture-to-ledger sync or payroll-to-payroll-platform connectors. These fees are often missed in a standard card-statement review because they appear as separate small-dollar recurring charges rather than named software subscriptions. The audit step is to pull Xero and QBO marketplace billing separately and map every connector to the two tools it connects — then check whether the underlying tools or native features have made the connector redundant.",
          },
        },
        {
          "@type": "Question",
          name: "How does month-end reconciliation cleanup relate to a bookkeeping firm software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Month-end reconciliation drag is often a symptom of connector sprawl. When a bookkeeping firm has three or four tools all touching the same ledger — a receipt capture tool, a payroll add-on, a reporting dashboard, and an expense platform — the overlap creates duplicate transaction mapping, wrong account allocations, and reconciliation work that takes hours each month to untangle. A software audit that maps which tools are touching the chart of accounts and what each connector is doing often surfaces consolidation opportunities that reduce reconciliation time as well as subscription cost. Firms that consolidate to two or three tools with clean, native integrations typically find month-end runs faster once the stack is cleaned up.",
          },
        },
        {
          "@type": "Question",
          name: "What AI tools do bookkeeping firms subscribe to that often go unused?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common AI tools appearing in bookkeeping firm billing exports are Otter.ai and Fireflies (meeting transcription), ChatGPT Teams or Claude Pro (writing and client communication assistance), and Notion AI (workflow documentation). These are typically purchased at team tier following a firm-wide AI adoption push, then used actively by one or two people while the remaining seats bill quietly. The fix is simple: before the annual renewal, pull the tool's active user list, identify who has logged in within the last 30 days, and right-size the seat count. On a 10-person Otter.ai Business plan ($20/user/month), removing 7 unused seats saves $1,680/year.",
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
            text: "Yes. StackSmart processes any billing export CSV and recognises the common add-on categories in the Xero, QBO, and MYOB ecosystems — receipt capture, payroll, proposals, e-sign, client portals, workflow tools, connector fees, and AI assistants. It categorises recurring charges, flags duplicates and idle seats, and produces a prioritised action list focused on the firm's internal software spend.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for a bookkeeping firm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by function (bookkeeping platform, receipt capture, payroll, proposals, e-sign, client portal, workflow, AI tools, and marketing), a list of flagged attention areas (zombie seats, duplicate add-on pairs, AI tool seat accumulation, forgotten subscriptions, upcoming renewals, connector fees), and a prioritised action list ranked by annual dollar impact. The firm principal reviews the findings and can share the report with a practice manager or office manager to handle seat removals and vendor conversations — a practical spend view, not an enterprise procurement audit.",
          },
        },
        {
          "@type": "Question",
          name: "Why do bookkeeping firms often have software bills spread across multiple accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bookkeeping firms accumulate billing across multiple payment methods for three reasons. First, principals who started as sole traders often set up early subscriptions on a personal card before the firm had a dedicated business account. Second, the Xero, QBO, and MYOB ecosystem marketplaces bill add-ons directly through the platform account, which may use different payment details than the firm credit card. Third, team members sometimes sign up for tools independently during client projects, creating subscriptions on cards not reviewed in the principal's regular billing check. A software audit should cover all payment paths — firm credit card, marketplace account billing, and any personal cards used for firm tools — to get a clear picture of what the practice is actually paying for.",
          },
        },
        {
          "@type": "Question",
          name: "How does the owner-use accountability check work for bookkeeping firm software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For every recurring charge in the firm's software stack, the principal should be able to name one current team member who uses that tool regularly and would notice if it was cancelled. This owner-use check catches waste that category-level review misses: AI transcription tools at team tier with only one active user, receipt capture add-ons where both the standalone tool and the platform's native feature are billing simultaneously, and workflow seats for staff who departed months ago. The check takes under 30 minutes for most bookkeeping firm stacks and produces an immediate short list of cut candidates — no vendor conversation needed, just a cancellation or seat removal before the next billing cycle.",
          },
        },
        {
          "@type": "Question",
          name: "How can bookkeeping firms find duplicate QuickBooks or Xero-connected apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export billing from the firm card plus marketplace billing from QuickBooks, Xero, QBO, or MYOB. Put each connected app into a software inventory spreadsheet with category, owner, current users, payment source, and renewal date. Then group apps by job: receipt capture, payroll, reporting, client portal, proposals, e-sign, workflow, and AI. If two apps do the same job, or if an app creates duplicate transaction mapping and month-end cleanup drag, it becomes a cut, consolidate, or reconfigure candidate.",
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
    category: "AI transcription and automation tools",
    issue:
      "Otter.ai, Fireflies, or similar meeting transcription tools purchased at a team plan during a firm-wide AI adoption push, with active use now concentrated in one or two people. ChatGPT Teams or Notion AI similarly billing at full seat count while most staff have returned to previous workflows.",
    action: "Right-size",
    color: "text-red-400",
  },
  {
    category: "Connector and integration fees",
    issue:
      "Zapier, Make, or third-party API connector fees billed separately to sync receipt capture tools, payroll platforms, reporting dashboards, and CRM tools to Xero or QBO. These connector charges often appear as small-dollar recurring items that survive long after the underlying tools are consolidated or replaced — or after the native integration made them redundant.",
    action: "Map and cut",
    color: "text-orange-400",
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Bookkeeping firm software audit · 2026-06-26 refresh</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit the add-on sprawl in your bookkeeping firm stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Bookkeeping firms running on Xero, QBO, or MYOB accumulate ecosystem add-ons faster than almost any other professional services business. Receipt capture tools, payroll platforms, e-sign subscriptions, proposal tools, AI transcription apps, client portals, workflow apps, and connector fees — many with significant feature overlap that nobody has reviewed since the initial signup. Recurring payments that looked justified at launch quietly compound into thousands per year in waste. StackSmart gives you a practical software-spend snapshot — not an enterprise procurement platform — so the firm owner or principal can see what they&apos;re paying for and act in a week.
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
              Export 6 to 12 months of billing data from Xero, QBO, MYOB, or your business credit card — and also pull your Xero or QBO marketplace billing separately, which is where connector fees and add-on charges often hide. Clearly separate subscriptions used for internal firm operations from any client-pass-through billing, then group firm subscriptions by category: bookkeeping platform, receipt and expense capture, payroll, proposals and engagement letters, e-sign, client portal and document management, workflow and practice management, AI tools, connector and integration fees, and marketing. For any category with more than one active tool, check what your primary bookkeeping or practice management platform now includes natively. Cross-reference user lists against current staff headcount for every per-seat subscription — including AI tools where seat counts are often set at onboarding and never reviewed. Flag annual contracts renewing within 90 days as renegotiation targets. Map every active connector fee to the two tools it joins — connectors for tools already consolidated are immediate cut candidates.
            </p>
          </div>
        </div>
      </section>

      {/* First 30 minutes: principal quick-start */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Principal quick-start — card-statement pass</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              What a bookkeeping firm principal can find in 30 minutes from the card statement
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              You do not need a full audit to spot the most common waste. Pull the last three months of the firm credit card and any marketplace billing accounts (Xero, QBO, MYOB). Software bills spread across a business card, a personal card, and ecosystem marketplace accounts are easy to miss when reviewed separately — this is the finance-truth step that tells you what the practice is actually paying for. In 30 minutes, work through the categories that most often carry recoverable spend:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["1. Receipt capture", "Count how many receipt/expense tools are on the bill — Dext, Hubdoc, AutoEntry, and any native feature inside Xero or QBO. If you have more than one, flag it. Most firms only need one."],
                ["2. E-sign", "Check if DocuSign or Adobe Sign bills alongside your proposal or practice management platform. If yes, check which one the team actually uses for client signatures. Cancel the other."],
                ["3. AI tools", "List every AI subscription: ChatGPT, Otter.ai, Fireflies, Notion AI, Canva Pro. For each, note the seat count and think of one person who used it this week. If you cannot — right-size it before the renewal date."],
                ["4. Connector fees", "Open your Xero or QBO marketplace billing. List every connector or integration add-on fee. For each, name the two tools it connects. If either tool has been cancelled or replaced, cut the connector too."],
                ["5. Workflow seats", "Open Karbon, Jetpack, or your practice management tool. Check the active user count against the invoice. Note departed staff who still have a seat."],
                ["6. Annual renewals in the next 90 days", "Scan for any annual contracts with an upcoming renewal date. These are renegotiation windows — flag them now to open the conversation before auto-renewal."],
              ].map(([step, detail]) => (
                <div key={step} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-white">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              If you find more than two flags in 30 minutes, a full billing export audit will almost always surface additional savings. StackSmart automates the full categorisation so you move straight from billing export to action list.
            </p>
            <div className="mt-6 flex gap-3">
              <TrackLink
                href="/saas-spend-audit-tool"
                event="homepage_cta_clicked"
                props={{ target: "audit_tool", location: "bookkeeping_quick_start" }}
                className="btn-primary text-sm"
              >
                Run the full audit
              </TrackLink>
              <TrackLink
                href="/software-subscription-audit-checklist"
                event="homepage_cta_clicked"
                props={{ target: "checklist", location: "bookkeeping_quick_start" }}
                className="btn-secondary text-sm"
              >
                View checklist
              </TrackLink>
            </div>
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
                "Recurring AI tool subscriptions with no usage review",
                "AI tools adopted during 2023–2024 were purchased at full team tier with good intentions. After the initial onboarding, active use concentrated in one or two people. Otter.ai, ChatGPT Teams, and Notion AI now appear regularly in bookkeeping firm billing exports as recurring payments with no active owner reviewing whether the seat count still makes sense.",
              ],
              [
                "Partner-stack tier creep and connector accumulation",
                "Xero and QBO partner programs offer favourable rates at launch that are renegotiated or shifted to standard pricing over time. Many bookkeeping firms do not review pricing annually and remain on tiers that no longer reflect their partner discount status or current team size. Connector and automation fees accumulate alongside the tools, surviving even after consolidations.",
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

      {/* Software bills across multiple accounts */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Finance-truth check</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Why bookkeeping firm software bills are spread across multiple accounts</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            One of the most common reasons bookkeeping firm principals do not have a clear picture of their software spend is that the charges are never in one place. A software audit starts by consolidating all payment paths before going line by line.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                source: "The firm credit card",
                detail: "The main business card is the first place to look — but it rarely contains everything. Tools signed up under individual team members' cards, or before the firm had a dedicated business account, will not appear here.",
                color: "text-brand-300",
              },
              {
                source: "Personal card or personal accounts",
                detail: "Many principals who started as sole traders set up early subscriptions — Xero, QBO, receipt tools, e-sign — on a personal card before the firm had a proper business account. These subscriptions are often still billing there years later.",
                color: "text-amber-400",
              },
              {
                source: "Ecosystem marketplace billing",
                detail: "The Xero, QBO, and MYOB marketplaces bill add-ons directly through the platform account — which may use different payment details than the firm's main card. Dext, Hubdoc, and workflow add-ons adopted through the marketplace may not appear in a standard card statement search. Connector fees for Zapier or Make integrations often appear here too.",
                color: "text-amber-400",
              },
              {
                source: "Team member personal accounts",
                detail: "Staff who sign up for tools during a client project or busy period may use their own login and billing details. When they leave, the subscription keeps charging — sometimes to their personal card, sometimes re-billed to the firm, sometimes just forgotten.",
                color: "text-red-400",
              },
            ].map((item) => (
              <div key={item.source} className="flex gap-4 rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${item.color}`}>{item.source}</p>
                  <p className="mt-1.5 text-sm leading-7 text-dark-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm leading-7 text-dark-300 max-w-3xl">
              A complete bookkeeping firm software audit covers all four payment paths. The easiest starting point is 12 months of the firm credit card plus a download of the Xero or QBO marketplace billing history. Together, these two sources capture the majority of recurring spend. StackSmart processes any billing export CSV — export everything into one file and upload it as a single audit run. See the <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> for the full structured workflow before uploading.
            </p>
          </div>
        </div>
      </section>

      {/* Typical stack */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical bookkeeping firm software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most small bookkeeping firms running 1 to 20 staff are paying for 10 to 16 recurring subscriptions across these categories — plus additional connector and integration fees that do not appear in the main subscription list.
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

      {/* Integration and connector-fee cleanup */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Connector-fee cleanup</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Integration add-on fees and connector sprawl</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Beyond the named tool subscriptions, bookkeeping firms accumulate a separate layer of connector and integration fees. These are recurring charges billed for automation workflows, API syncs, and marketplace add-ons that keep tools talking to each other. They are easy to miss in a card-statement review because they appear as small-dollar line items, not named software products.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "Zapier or Make connector fees",
                detail: "Automation workflows built to sync receipt capture tools, CRM platforms, and reporting dashboards to Xero or QBO. Often billed at a task or workflow tier that crept up during heavy adoption. When the underlying tools are consolidated or the platform adds a native integration, the connector keeps billing.",
                color: "text-amber-400",
              },
              {
                type: "Marketplace add-on sync fees",
                detail: "The Xero and QBO marketplaces charge separate fees for certain connected app integrations — distinct from the add-on's own subscription cost. These marketplace sync fees survive tool consolidations because they are billed by the platform, not the add-on vendor, and require a separate cancellation step in the marketplace account.",
                color: "text-amber-400",
              },
              {
                type: "Reconciliation tool and reporting add-on fees",
                detail: "Reporting dashboards and business intelligence add-ons sometimes bill a separate data-connector fee for pulling Xero or QBO ledger data. When the bookkeeping platform's native reports are sufficient — which is increasingly common — the reporting add-on and its connector fee are both candidates for removal.",
                color: "text-orange-400",
              },
            ].map((item) => (
              <div key={item.type} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className={`text-sm font-semibold ${item.color}`}>{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm font-semibold text-white">The connector cleanup step</p>
            <p className="mt-2 text-sm leading-7 text-dark-300 max-w-3xl">
              After building the main software inventory, list every connector and integration fee separately. For each connector, name the two tools it joins. If either tool has been consolidated, cancelled, or replaced with a native feature, mark the connector for immediate cut. Connectors for tools that are still active should be reviewed to confirm the automation is still running and that a native integration has not made it redundant. A two-hour connector cleanup pass in a Xero or QBO ecosystem typically saves $600 to $2,400 per year in fees that would otherwise roll over unreviewed.
            </p>
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste in bookkeeping firm stacks</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the eight patterns StackSmart most commonly surfaces when reviewing bookkeeping firm billing exports.
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
                "Week 1 — Export billing data from all payment paths",
                "Pull 6 to 12 months of transactions from Xero, QBO, MYOB, or your business credit card. Critically, also export Xero or QBO marketplace billing separately — this is where connector fees, add-on sync charges, and ecosystem-specific fees appear. Cover at least 12 months — workflow and practice management platforms often bill annually, and AI tools adopted in 2023–2024 may be approaching first-year renewals.",
              ],
              [
                "Week 2 — Separate firm tools from client billing, map the stack, and list connectors",
                "Clearly identify which subscriptions are for internal firm use versus those passed through to client engagements. Group firm subscriptions by category: bookkeeping platform, receipt capture, payroll, proposals, e-sign, client portal, document management, workflow, AI tools, connector and integration fees, and marketing. Flag every category with more than one active tool. Create a separate connector list: for each connector or automation fee, name the two tools it joins.",
              ],
              [
                "Week 3 — Check partner pricing, seat counts, AI usage, and connector relevance",
                "For every per-seat subscription, pull the current user list and compare against active staff headcount. For AI tools specifically, check the last-login date for each seat — anything idle for 30-plus days is a right-size candidate. Review whether partner-program rates from Xero, QBO, or MYOB still apply to your current subscription terms. For every connector in your connector list, verify that both connected tools are still active and that no native integration now covers the same sync.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel clearly redundant add-ons — particularly in the receipt capture, e-sign, and AI tool categories — before the next billing cycle. Cut connectors for tools that have been consolidated or replaced. Right-size AI subscription seat counts to active users. Consolidate overlapping tools in a quiet client week. Open renegotiation conversations on annual contracts renewing within 90 days. Document each decision for the next review cycle.",
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
                  ["Otter.ai Business plan at 8 seats, 1 active user", "Right-size to 1–2 seats", "$1,200 – $1,680/yr"],
                  ["ChatGPT Teams at 10 seats, 2 people actively using it", "Right-size before annual renewal", "$1,920 – $2,880/yr"],
                  ["Ignition plus practice management proposals both active", "Consolidate to one", "$480 – $1,800/yr"],
                  ["Payroll tool at 15-employee tier, 9 current staff", "Renegotiate or downgrade", "$720 – $3,600/yr"],
                  ["Zapier connector fee for receipt capture tool that was cancelled", "Cut connector", "$240 – $960/yr"],
                  ["QBO marketplace sync fee for reporting dashboard with native reports available", "Cut add-on connector", "$360 – $1,200/yr"],
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
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical software-spend snapshot for owner-led bookkeeping firms — not an enterprise procurement platform. The firm principal gets a clear view of recurring payments and a prioritised action list they can act on or hand off to a practice manager.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by function — bookkeeping platform, receipt capture, payroll, proposals, e-sign, client portal, workflow, AI tools, connector fees, and marketing. No manual sorting."],
              ["Flagged attention areas", "Zombie seats, duplicate add-on pairs, AI tool seat accumulation, connector fees for cancelled tools, forgotten annual subscriptions, and renewal risks — recurring payments where there is no active owner making a decision."],
              ["Prioritised action list", "Cancel, consolidate, downgrade, cut connectors, and renegotiate — ranked by annual dollar impact so you know where to start before the next billing cycle."],
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
              The firm principal or bookkeeping practice owner typically runs the initial review and owns the cancellation and renegotiation decisions — including AI subscription seat right-sizing and connector fee cuts. The completed savings report is shared with a practice manager or office manager to handle seat removals and vendor conversations. It can be handed to a finance admin as a structured view of recurring payments — a line-by-line spend snapshot before they go through statements manually. Bookkeepers who work with SMB clients can also share the StackSmart concept as a practical advisory step for clients with unreviewed software spend.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
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
                <li>Map every connector fee to the two tools it joins</li>
                <li>Check AI subscription last-login dates manually per tool</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings to share with firm principal or partners</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across bookkeeping firm tool categories</li>
                <li>Flags receipt capture overlap, connector fees, idle seats, AI seat waste, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, cut connectors, and renegotiate action list</li>
                <li>Shareable savings report ready for principals or partners</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your bookkeeping firm?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led bookkeeping firm using Xero, QBO, or MYOB ecosystems</li>
                <li>1 to 20 staff, principal or practice manager responsible for software decisions</li>
                <li>Multiple ecosystem add-ons across receipt, payroll, proposal, AI tools, and document categories</li>
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

      {/* 2026 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">What a principal should check before the next renewal window</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            The highest-value bookkeeping firm audit is not a generic software list. It is a practical owner review of which app is doing which job, who owns the renewal, and whether the firm can keep, cancel, downgrade, or consolidate before another annual charge lands.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Standardise the client app stack", "Group Xero, QBO, MYOB, receipt capture, payroll, reporting, document, portal, proposal, e-sign, workflow, and AI tools by job so the principal can pick one default workflow instead of funding every historical preference."],
              ["Assign a renewal owner", "Every app gets one named owner, a renewal date, a payment source, and a keep/cancel recommendation. Ownerless marketplace add-ons and ex-staff workflow seats move to the top of the action list."],
              ["Separate pass-through from firm waste", "Client-recovered subscriptions are tagged separately from firm-owned costs. The waste usually sits in legacy client-project tools, seasonal staff seats, and add-ons that stayed on after the client or workflow changed."],
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
            {[
              [
                "What software should a bookkeeping firm audit?",
                "A bookkeeping firm software audit should cover the core bookkeeping platform (Xero, QBO, MYOB), receipt and expense capture tools (Dext, Hubdoc), payroll software, proposal and engagement letter platforms (Ignition), e-sign tools (DocuSign, Adobe Sign), client portal and document management, workflow and practice management (Karbon, Jetpack Workflow), AI transcription and automation tools (Otter.ai, Fireflies, ChatGPT Teams), connector and integration fees, and marketing tools. The highest waste is typically found in the receipt capture, e-sign, connector fees, proposal, and AI tool categories.",
              ],
              [
                "What are connector and integration fees in a Xero or QBO bookkeeping stack?",
                "Connector and integration fees are charges billed separately from the base subscription of each tool — typically by the integration layer (Zapier, Make, or a marketplace connector) that keeps two platforms in sync. In a Xero or QBO stack, these appear as automation workflow fees, API connector charges, marketplace add-on sync fees, and third-party connector costs. The audit step is to pull Xero and QBO marketplace billing separately, list every connector fee, and map each connector to the two tools it joins — connectors for tools already consolidated or replaced are immediate cut candidates.",
              ],
              [
                "How does month-end reconciliation cleanup relate to a bookkeeping firm software audit?",
                "Month-end reconciliation drag is often a symptom of connector sprawl. When a firm has three or four tools all touching the same ledger — receipt capture, payroll, reporting, and expense platform — the overlap creates duplicate transaction mapping and reconciliation work. A software audit that maps which tools touch the chart of accounts often surfaces consolidation opportunities that reduce both subscription cost and reconciliation time.",
              ],
              [
                "Why do bookkeeping firms carry duplicate add-ons in the Xero and QBO ecosystem?",
                "Ecosystem marketplaces make it easy to trial multiple tools in the same category without a clear consolidation policy. Bookkeeping firms adopt a receipt capture tool early, the bookkeeping platform later adds a native feature, and both continue billing. AI transcription tools were adopted firm-wide in 2023–2024 but active use concentrated in one or two people — creating seat waste that is easy to miss without a structured review.",
              ],
              [
                "What AI tools do bookkeeping firms subscribe to that often go unused?",
                "The most common AI tools in bookkeeping firm billing exports are Otter.ai and Fireflies (meeting transcription), ChatGPT Teams or Claude Pro (writing assistance), and Notion AI (workflow documentation). These are typically purchased at team tier, then active use concentrates in one or two people while the remaining seats bill quietly. Before the annual renewal, pull each tool's active user list and right-size the seat count to active users.",
              ],
              [
                "Does StackSmart work for Xero and QBO ecosystem audits?",
                "Yes. StackSmart processes any billing export CSV and recognises the common add-on categories in the Xero, QBO, and MYOB ecosystems — receipt capture, payroll, proposals, e-sign, client portals, workflow tools, connector fees, and AI assistants. It categorises recurring charges, flags duplicates and idle seats, and produces a prioritised action list focused on the firm's internal software spend.",
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

      {/* QuickBooks and Xero connected-app cleanup */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/70 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Connected-app cleanup</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">When seven QuickBooks or Xero apps are all touching the same workflow</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              The strongest bookkeeping waste signal is not just "too many apps"; it is duplicated admin work and connector sprawl. A small practice can have a receipt tool, payroll add-on, reporting dashboard, proposal app, e-sign tool, workflow system, and AI meeting assistant all connected to QuickBooks or Xero — plus a separate connector fee for each integration — then spend month end untangling duplicate transactions, wrong mappings, buried fees, and subscriptions nobody remembers approving. StackSmart turns the billing export into a software inventory, connector map, and renewal calendar so the principal can ask one concrete question per category: which app can we cancel or consolidate without breaking client delivery?
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Map", "List every Xero/QBO/QuickBooks-connected app and every connector fee. Record payment source, owner, user count, and renewal date."],
                ["Group", "Cluster by job: receipt capture, payroll, reporting, e-sign, proposals, workflow, portals, AI. List connectors alongside the tools they join."],
                ["Decide", "Mark each duplicate as keep, cancel, consolidate, reconfigure, or review before renewal. Cut connectors for cancelled tools immediately."],
              ].map(([step, detail]) => (
                <div key={step} className="rounded-xl border border-dark-700 bg-dark-950/80 p-4">
                  <p className="text-sm font-semibold text-brand-200">{step}</p>
                  <p className="mt-2 text-xs leading-6 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 2026-05-30 measured owner-led SMB refresh */}
      <section className="border-y border-dark-800/80 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-11 proof refresh · measured AU demand</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">Bookkeeping firms need a billing-layer audit, not another practice platform.</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                June 2026 AU keyword data shows &ldquo;bookkeeping software Australia&rdquo; at 880 monthly searches (CPC $36.09, high bid $51.55) — strong commercial demand where the conversion wedge is not platform selection but subscription ownership. For an owner-led bookkeeping firm with 5 to 50 staff, the practical opportunity is finding the firm-owned add-ons, client-pass-through subscriptions, connector fees, AI seats, duplicate charges, and renewal owners that nobody has reviewed since the last growth phase or seasonal staffing cycle.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart starts from firm billing exports, card statements, marketplace invoices, and subscription receipts only. It does not review client ledgers or client financial records. The output is a principal-friendly action list: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner before the next monthly or annual charge hits.
              </p>
            </div>
            <div className="rounded-3xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Bookkeeping action map</h3>
              <div className="mt-5 grid gap-3">
                {[
                  "Separate firm-owned tools from client pass-through app billing",
                  "Map Xero, QBO, MYOB, payroll, receipt-capture, reporting, proposal, document, and e-sign charges",
                  "Find duplicate workflow, AI, meeting-note, document, and automation tools",
                  "Compare staff, contractor, and leaver seats with current users",
                  "Review marketplace connectors, Zapier/API fees, and add-ons that survived a process change",
                  "Assign each renewal to a principal, practice manager, or admin owner",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-dark-700/80 bg-dark-950/60 px-4 py-3 text-sm leading-6 text-dark-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/xero-app-stack-audit" event="homepage_cta_clicked" props={{ from: "bookkeeping_firm_refresh", target: "xero_app_stack_audit" }} className="btn-secondary text-sm">Audit Xero app billing</TrackLink>
            <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ from: "bookkeeping_firm_refresh", target: "subscription_checklist" }} className="btn-primary text-sm">Use the audit checklist</TrackLink>
          </div>
        </div>
      </section>


      {/* 2026-06-11 measured refresh */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-06-11 measured refresh</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Bookkeeping software Australia holds at 880 monthly searches — the conversion gap is add-on ownership, not platform choice</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Today&apos;s DataForSEO AU live check confirms &ldquo;bookkeeping software Australia&rdquo; at 880 monthly searches with a competition index of 46 and a high-bid CPC of $51.55 — the strongest measured commercial term in the accounting/bookkeeping cluster. For owner-led bookkeeping firms with 5 to 50 staff, the practical question is not which bookkeeping platform to switch to. It is which Xero, QBO, or MYOB add-ons are still earning their place this month — and who owns the renewal decision for each one.
            </p>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              The billing-export pass starts from firm card statements, marketplace invoices, and direct debits. It separates firm-owned subscriptions from client-pass-through billing, then flags the patterns that compound across every quarter without a structured review: duplicate receipt capture tools where Dext and Hubdoc both run alongside a native platform feature, connector fees for integrations that were replaced by native sync, AI workspace seats purchased during the 2023&ndash;2024 adoption wave and never right-sized, converted trials on proposal and workflow tools, ghost users from seasonal contractors and departed bookkeepers, and ownerless annual renewals on practice management and reporting platforms.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Firm vs client billing split", "Separate firm-owned subscriptions from client-pass-through billing before cancellation decisions. The most common error is a client-engagement tool that migrated to firm cost after the client left — nobody noticed because it was never tagged."],
                ["Duplicate-charge and connector cleanup", "Flag receipt capture, workflow, reporting, proposal, e-sign, and AI tools overlapping with the core platform. Map every connector fee to the two tools it joins — connectors for consolidated tools are immediate cuts."],
                ["Renewal-owner and notice-window pass", "Build a 30/60/90-day renewal list with a named owner for each contract. Ownerless renewals auto-process at the previous tier and headcount — the window to renegotiate or cancel closes before anyone reviews the charge."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-dark-700/80 bg-dark-950/70 p-4">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_06_11", target: "checklist" }} className="btn-secondary text-sm">Use the checklist</TrackLink>
              <TrackLink href="/saas-renewal-management" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_06_11", target: "renewal_management" }} className="btn-primary text-sm">Track renewal risk</TrackLink>
            </div>
          </div>
        </div>
      </section>


      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">2026-06-26 practice-owner refresh</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Bookkeeping software bills hide across Xero apps, QBO add-ons, cards, and client-tool overlap</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Today&apos;s DataForSEO AU check showed “bookkeeping software Australia” at 880 searches with $33.75 CPC, “accounting practice software” at 390 searches, and “Xero apps” at 260 searches. That demand is broader than software selection. For a 5-to-50-person bookkeeping firm, the commercial pain is usually the connected-app stack: Xero or QBO add-ons, receipt capture, payroll, practice management, proposals, e-sign, client portals, reporting, AI meeting notes, and connector fees all billing in different places.
            </p>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              StackSmart treats the bookkeeping stack as a billing and ownership problem first. Pull the firm card, accounting export, marketplace billing, and invoices. Then assign each tool a job, owner, payment source, renewal date, last-confirmed-still-needed date, and action decision before the next busy-season or annual-plan renewal.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Xero and QBO connected apps", "Receipt capture, payroll, reporting, workflow, and client-portal add-ons often survive after the core platform or practice-management tool adds overlapping features."],
              ["Seasonal and former-staff seats", "Bookkeepers, contractors, and admin support can remain active after peak lodgement work, maternity cover, or short-term client projects end."],
              ["Connector and AI fees", "Zapier, Make, API sync tools, ChatGPT, transcription, and document automation subscriptions are easy to approve but rarely reviewed for active use."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-dark-800 bg-dark-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/small-business-software-inventory" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_06_26", target: "software_inventory" }} className="btn-primary text-sm">Build the software inventory</TrackLink>
            <TrackLink href="/business-subscription-tracker-small-business" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_06_26", target: "subscription_tracker" }} className="btn-secondary text-sm">Track recurring subscriptions</TrackLink>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <OwnerLedRefreshSection type="bookkeeping" />


      {/* 2026-07-09 bookkeeping operator refresh */}
      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-07-09 refresh · bookkeeping firms</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Separate the firm’s paid stack from client work before the next QBO or Xero renewal</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The current buyer pain is not only “which accounting app should we use?” It is “which add-ons are we still paying for, who owns them, and which are practice costs versus client-pass-through costs?” StackSmart reviews firm billing exports, card statements, app invoices, partner-tool receipts, and recurring expense categories to identify duplicate receipt-capture tools, old workflow trials, unused AI seats, shared-login risk, connector fees, and cancelled-but-still-charged vendors. It does not need client ledger access or sensitive client files.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <TrackLink href="/xero-app-stack-audit" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_07_09", to: "xero_app_stack" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Xero app audit</TrackLink>
                <TrackLink href="/accounting-firm-software-stack-audit" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_07_09", to: "accounting_firm" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Accounting firm audit</TrackLink>
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ from: "bookkeeping_2026_07_09", to: "demo" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Sample report</TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">What the audit answers</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Which QuickBooks, Xero, receipt, payroll, workflow, reporting, and AI tools are firm-owned versus client-owned?</li>
                <li><span className="font-semibold text-white">2.</span> Which recurring bills are duplicated across cards, owner accounts, partner portals, and old shared logins?</li>
                <li><span className="font-semibold text-white">3.</span> Which seats, connectors, and app tiers can be downgraded before the next renewal or price increase?</li>
                <li><span className="font-semibold text-white">4.</span> Who owns each renewal so the firm does not go line-by-line from scratch every quarter?</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

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
            Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your firm&apos;s review cadence.
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
        description="These pages cover the broader SMB audit guide, the accounting firm-specific guide, the checklist, the core audit tool, and related health and AI subscription audit guides."
        links={[
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, AI subscription right-sizing, e-sign duplication, and the 30-minute card-statement pass for accounting firms.",
          },
          {
            href: "/small-business-software-inventory",
            title: "Small business software inventory",
            description: "Build the billing-first software inventory for Xero, QBO, MYOB, practice tools, add-ons, and firm subscriptions.",
          },
          {
            href: "/business-subscription-tracker-small-business",
            title: "Business subscription tracker",
            description: "Track renewal dates, owners, payment sources, and action decisions for recurring firm software subscriptions.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "How StackSmart turns a billing CSV into a structured savings report — and how to hand the findings off to a practice manager or finance admin.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured 10-step checklist — including owner-use accountability pass and connector-fee review — for reviewing every subscription category in your firm stack.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide — card-statement pass, owner-use accountability, and vertical routing for 20+ business types.",
          },
          {
            href: "/ai-subscription-audit",
            title: "AI subscription audit",
            description: "Audit AI tool seats, overlapping ChatGPT and meeting transcription plans, and AI dashboard sprawl across your firm stack.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Admin and billing subscription audit for physiotherapy, psychology, OT, and multi-disciplinary allied health practices.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
