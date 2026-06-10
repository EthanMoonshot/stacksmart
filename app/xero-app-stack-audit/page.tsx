import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Xero App Stack Audit",
  description:
    "Audit your Xero app stack for duplicate add-ons, unused seats, ownerless renewals, surprise annual charges, and inflated tiers across payroll, receipt capture, reporting, practice management, and client portal tools. StackSmart turns your billing export into an overlap map and action list.",
  path: "/xero-app-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/xero-app-stack-audit"),
      url: absoluteUrl("/xero-app-stack-audit"),
      name: "Xero App Stack Audit | StackSmart",
      description:
        "Audit your Xero app stack for duplicate add-ons, unused seats, surprise annual renewals, and tier creep across payroll, receipt capture, reporting, practice management, and client portal tools.",
      dateModified: "2026-06-11",
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
          name: "Bookkeeping Firm Software Stack Audit",
          item: absoluteUrl("/bookkeeping-firm-software-stack-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Xero App Stack Audit",
          item: absoluteUrl("/xero-app-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a Xero app stack audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Xero app stack audit covers every recurring subscription connected to or used alongside Xero — payroll add-ons, receipt capture and expense tools, reporting and dashboard platforms, practice management or workflow software, client portal and document tools, e-signature platforms, proposal and quoting tools, CRM, debt collection or late payment tools, and any other Xero Marketplace add-ons in use. The goal is to find duplicate add-ons covering the same function, subscriptions that have been superseded by features now included in Xero natively, seats and tiers above actual usage, and tools left active after a migration. StackSmart does not access financial data inside Xero — it works from billing statements only.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Xero users accumulate too many app stack subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xero's marketplace and partner ecosystem make it easy to add functionality incrementally — each new add-on solving a specific problem at the time. Over 18 to 36 months, a firm or SMB can accumulate multiple receipt capture tools, overlapping payroll options, two or three reporting platforms, and several client communication tools, many of which duplicate each other. Xero also adds native features over time, making previously essential add-ons redundant while they continue billing unnoticed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I separate firm-owned Xero app costs from client pass-through billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with your billing export and tag each line as either firm-owned (the subscription belongs to the firm) or client pass-through (billed on behalf of a client and recovered). Firm-owned subscriptions are the audit target — client pass-throughs should be reviewed separately to ensure they are being recovered. The most common error is a firm-owned subscription that was set up for a specific client engagement and never cancelled after that client left — it migrated from pass-through to firm cost without anyone noticing.",
          },
        },
        {
          "@type": "Question",
          name: "What are surprise annual renewal charges in Xero app stacks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Xero Marketplace add-ons offer a discounted annual plan at the time of signup. When the annual renewal hits 12 months later — often at a higher rate than the introductory price — it appears as a single large charge on a credit card statement that was not budgeted for. The app owner who set up the subscription may no longer be in the firm, and nobody else has ownership of the renewal decision. Identifying these before they hit — typically by scanning for annual charges in the billing export and flagging those renewing within 60 days — is one of the highest-value actions in a Xero stack audit.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart audit a Xero app stack for an accounting or bookkeeping firm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is well-suited to accounting and bookkeeping firms using Xero who want to review their own practice stack — the tools they use internally to serve clients, not client financial data. Upload a billing export from your firm's accounting or card data. StackSmart categorises every subscription, flags duplicates and inflated tiers, and produces a prioritised action list. It does not access Xero ledgers, client files, or any regulated financial data.",
          },
        },
        {
          "@type": "Question",
          name: "What does StackSmart produce from a Xero app stack audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot from your billing export: every recurring charge grouped by Xero ecosystem function (payroll, receipt capture, reporting, practice management, client portals, e-sign, and CRM), a list of flagged attention areas including migration leftovers, zombie seats, duplicate add-on pairs, upcoming annual renewals, and app-owner accountability gaps, and a prioritised action list ranked by annual dollar impact. The output is designed for the firm owner or principal to review and share with a practice manager or office manager to action — a practical spend view, not an enterprise audit platform.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Xero app overlap map?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Xero app overlap map groups every recurring Xero-connected subscription by the job it performs: payroll, receipt capture, reporting, practice management, client portal, e-sign, proposals, CRM, and AI assistance. It shows which apps do the same job, who owns each renewal, how many users are active, and whether Xero or the main practice platform now includes a native feature that makes an add-on redundant. The output is a practical keep, cancel, consolidate, or renegotiate list.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Payroll add-ons",
    issue:
      "Standalone payroll platform (KeyPay, Employment Hero, Payroller) running alongside Xero Payroll after a migration that was never fully completed. Both processing pay runs or both billing at active tiers while only one is actively used.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Receipt capture and expense management",
    issue:
      "Dext, Hubdoc, AutoEntry, and Xero's built-in document capture all active across the same firm. Multiple tools scanning the same receipts, with a legacy platform left running after the firm moved to a newer integration.",
    action: "Cut duplicates",
    color: "text-red-400",
  },
  {
    category: "Reporting and dashboards",
    issue:
      "Fathom, Spotlight Reporting, and LivePlan all subscribed across different client tiers — each adopted at different points, with report generation now concentrated in one platform while the others generate charges without active use.",
    action: "Standardise one",
    color: "text-amber-400",
  },
  {
    category: "Practice management and workflow",
    issue:
      "Karbon, XPM (Xero Practice Manager), and Ignition all installed — typically one as the legacy system, one as the current tool, and one trialled and never formally cancelled after the evaluation period ended.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Client portals and document delivery",
    issue:
      "Liscio, Portal, and Clinked all running to deliver documents and collect client information — each adopted at a different growth stage, with client onboarding now consolidated on one platform while the others continue billing.",
    action: "Cut to one",
    color: "text-orange-400",
  },
  {
    category: "E-signature tools",
    issue:
      "DocuSign, Adobe Acrobat Sign, and Dropbox Sign all active when one platform handles all engagement letters, authority forms, and client approvals. Two are holdovers from team members who set up their own preferences.",
    action: "Consolidate",
    color: "text-orange-400",
  },
  {
    category: "App-owner accountability gaps",
    issue:
      "Xero Marketplace add-ons often have no named internal owner after the person who set them up leaves or changes role. Annual renewal charges arrive with no one authorised to make the keep-or-cancel decision. The subscription renews by default because nobody owns the action.",
    action: "Assign owners",
    color: "text-brand-400",
  },
];

export default function XeroAppStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Xero app stack audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the add-on overlap in your Xero stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Xero&apos;s marketplace makes it easy to solve one problem at a time. After a few years, most accounting firms and Xero-heavy SMBs carry duplicate receipt capture tools, overlapping payroll add-ons, two or three reporting platforms, and practice management systems left billing after a migration — alongside zombie seats, forgotten subscriptions, and surprise annual renewal charges where the original app owner has left the firm. StackSmart gives you a practical software-spend snapshot from your billing export — not an enterprise procurement platform — so the owner or principal can see the full picture and act in a week without touching client financial data.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "xero_stack_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "xero_stack_audit_secondary" }}
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
              How do you audit a Xero app stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export billing data from your firm&apos;s business bank, credit card statements, or the Xero subscription billing history covering the past 6 to 12 months. Clearly separate firm-owned subscriptions from any client pass-through billing before reviewing. Group every firm charge by function: payroll, receipt capture, reporting and dashboards, practice management, client portals, e-signature, proposals, CRM, and late payment tools. Flag any category carrying more than one active subscription. Check seat counts against your current team roster. Identify any native Xero features that make previously purchased add-ons redundant. Note annual subscriptions renewing within 60 days and identify who owns the renewal decision for each. This review works from billing data only — no access to Xero ledgers, client files, or financial records is required.
            </p>
          </div>
        </div>
      </section>

      {/* Why Xero stacks accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why Xero app stacks accumulate subscription waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The Xero ecosystem design creates predictable patterns of accumulation. These are the three most common.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Incremental add-on adoption",
                "Each business problem gets solved with an add-on at the time it appears. Over 24 to 36 months, a 10-person firm accumulates 15 to 25 separate recurring subscriptions across the Xero ecosystem — each individually justified, collectively excessive and overlapping.",
              ],
              [
                "Xero native feature creep",
                "Xero regularly adds features that make previously purchased add-ons redundant — document capture, bank reconciliation, reporting, and payroll have all been enhanced significantly. Add-ons that solved real gaps two years ago often duplicate current Xero functionality while continuing to bill.",
              ],
              [
                "Migration leftovers and no-owner renewals",
                "Switching from one practice management system, payroll tool, or reporting platform to another leaves the previous system active during the transition. The old platform often keeps charging for months after the team has fully moved. When the original app owner leaves the firm, the renewal renews on autopilot because nobody else owns the decision.",
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

      {/* Xero Marketplace surprise renewals callout */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">Xero Marketplace renewal pattern</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Surprise annual renewal charges and app-owner accountability
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Many Xero Marketplace add-ons are purchased on an annual plan at signup — often at a discounted introductory rate. When year two arrives, the charge hits a card statement as a single large debit. Two problems compound this:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["No named app owner", "The staff member who signed up the add-on may have changed roles or left the firm. Nobody else has ownership of the renewal — so it renews by default. The first notice is a charge on the card statement that was not budgeted."],
                ["Internal vs client pass-through confusion", "Add-ons originally set up for a client engagement can migrate to firm-owned costs after the client leaves. If the subscription was in the firm's name, it stays on the billing run without a client to recover it from."],
                ["Rate changes at renewal", "Introductory partner or promotional rates often do not persist to year two. The renewal comes in at standard pricing — sometimes 20–40% higher than the original subscription — without a notification that prompts a review."],
                ["Annual charges are easy to miss quarterly", "Monthly subscriptions appear on every card statement. Annual ones appear once — and if the billing period does not align with a regular review cycle, they can renew unnoticed for two or three years."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-amber-300">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The fix: when reviewing your Xero stack, export 12 months of billing data (not just 3 or 6) and filter for annual charges. For each annual subscription, note the next renewal date and assign a named owner who has the authority to renew, renegotiate, or cancel. Do this pass 60 days before the renewal date — that window gives you time for a renegotiation conversation with the vendor.
            </p>
          </div>
        </div>
      </section>

      {/* Integration add-ons, paid bridge tools, and connected-app inventory */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Connected-app and bridge tool inventory</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Integration add-ons, paid connectors, and the connected-app cancel decision
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Beyond the Xero Marketplace add-ons themselves, most Xero-heavy firms carry a second layer of recurring cost: the paid bridge tools and integration connectors that sit between Xero and other platforms. These are often missed in a standard billing review because they appear under obscure vendor names — not the platform names they connect — and they continue billing long after the connection becomes redundant or native Xero features replace the need.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Paid connector and bridge tool fees", "Tools like Invoice Stack, Zapier, or Make that connect Xero to a CRM, ecommerce platform, or payroll tool. When either platform adds native integration, the connector keeps billing. These charges ($30–$120/month) often appear under unfamiliar vendor names and are rarely reviewed."],
                ["Connected-app inventory — the which-app-can-we-cancel pass", "The connected-app audit starts with a simple question: for each Xero add-on, which job does it do, and does Xero or another active platform now do that job natively? Category by category — receipt capture, payroll, reporting, e-sign — this pass identifies the specific app that can be cancelled before the next renewal without disrupting any active workflow."],
                ["Duplicate sync and cleanup cost", "When two tools both attempt to sync data to Xero — a CRM pushing invoices and an ecommerce platform pushing the same transactions — the result is duplicate records, reconciliation errors, and manual cleanup every month-end. Auditing the connected-app layer often reveals the root cause of recurring data cleanup work, not just the subscription cost."],
                ["Migration leftover connectors", "A firm that migrated from QBO to Xero or from one payroll tool to another often retains the integration connectors from the old platform. These bridge tools continue billing while connecting to a platform the firm no longer uses. They appear in billing exports as $20–$80/month charges under names that do not match any active tool."],
                ["AI subscription layer in Xero stacks", "AI tools — ChatGPT Teams, Claude Pro, Otter.ai, Microsoft 365 Copilot — are now a standard finding in Xero-heavy firm billing exports. They follow the same pattern as other add-ons: purchased at full team tier, usage concentrated in one or two people, annual renewals arriving before anyone checks the seat count. See the <span class='text-brand-400'>AI subscription audit</span> for the specific right-sizing workflow."],
                ["App-cancel decision criteria", "For each connected app and bridge tool: Is the connection active and in daily use? Does a native Xero feature or another active platform now cover the same need? If the connector was cancelled tomorrow, which workflow would break — and could that workflow run through an existing tool instead? If the answer to the last question is yes, the connector is a cancellation candidate before the next billing cycle."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300" dangerouslySetInnerHTML={{ __html: detail }} />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The connected-app inventory pass takes 20 to 30 minutes from a 12-month billing export. Filter for any vendor name you don&apos;t immediately recognise as a core platform. These obscure line items are almost always connectors, bridge tools, or integration add-ons. For each one: identify what it connects, confirm the connection is still active, and check whether either platform now offers a native sync. See also: <a href="/ai-subscription-audit" className="text-brand-400 hover:text-brand-300 transition-colors">AI subscription audit</a> for the AI tool layer, and <a href="/accounting-firm-software-stack-audit" className="text-brand-400 hover:text-brand-300 transition-colors">accounting firm software stack audit</a> for the full practice stack review.
            </p>
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Xero app stack waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where Xero-heavy firms most commonly find recoverable spend.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteCategories.map((item) => (
              <div key={item.category} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${item.color}`}>{item.category}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {item.action}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{item.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day audit workflow */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How to audit your Xero app stack in 30 days</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This review works from billing data. It does not require access to Xero ledgers, client files, or financial records.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Export billing data (12 months minimum)",
                "Pull 12 months of charges from your firm's business bank and card statements. Include Xero's own subscription, all partner and marketplace add-ons, and any standalone tools used alongside the Xero ecosystem. A 12-month view is essential — annual subscriptions only appear once and will be missed on a shorter export. Separate firm-owned costs from any client pass-through billing before you begin the review.",
              ],
              [
                "Step 2 — Group by function",
                "Organise every charge: payroll, receipt capture and expense management, reporting and dashboards, practice management and workflow, client portals and document delivery, e-signature, proposals, CRM, and late payment tools. Any category with more than one active subscription is a consolidation candidate.",
              ],
              [
                "Step 3 — Check for Xero native overlap",
                "Review what Xero now includes natively in your current subscription tier. Add-ons purchased to fill gaps 18 to 36 months ago may be redundant today. Document capture, bank feeds, basic reporting, and payroll features have all been extended significantly in recent Xero releases.",
              ],
              [
                "Step 4 — Flag migration leftovers, inflated seats, and renewal orphans",
                "Identify any tools billing alongside their replacement — a previous practice management system, a legacy payroll add-on, an old client portal. Check seat counts on per-user tools against your current active team roster. For each annual subscription, note the renewal date and identify who owns the renewal decision. If no one does, assign an owner now — before the charge hits.",
              ],
              [
                "Step 5 — Act in order of dollar impact",
                "Cancel clearly unused tools before the next billing cycle. Plan consolidations with the team before actioning — workflow migrations need lead time. Renegotiate annual contracts before auto-renew using current usage data, seat count, and the fact that you are an informed buyer as leverage.",
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
          <h2 className="text-2xl font-semibold text-white">What a Xero app stack audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from accounting firm and Xero-heavy SMB billing exports. Amounts vary by firm size and add-on mix.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Legacy payroll add-on billing alongside current payroll platform", "Cancel legacy", "$840 – $4,800/yr"],
                  ["Dext and Hubdoc both active, processing the same receipts", "Cut to one", "$600 – $3,600/yr"],
                  ["Three reporting platforms, one in active use", "Cancel unused two", "$1,200 – $6,000/yr"],
                  ["Previous practice management system still billing post-migration", "Cancel old system", "$1,800 – $8,400/yr"],
                  ["E-sign tools duplicated across team preferences", "Standardise one", "$480 – $2,400/yr"],
                  ["Annual add-on renewed at new-rate with no renegotiation conversation", "Renegotiate before next renewal", "$600 – $3,600/yr"],
                  ["App owner departed, annual renewal hit without a review decision", "Assign owner, review and negotiate", "$480 – $2,400/yr"],
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
      <section className="border-t border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical Xero stack snapshot — a categorised view of what your firm is paying for across the full add-on ecosystem, with clear next actions the owner or practice manager can act on.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by function — payroll, receipt capture, reporting, practice management, client portals, e-sign, proposals, and CRM. No manual sorting or spreadsheet required."],
              ["Flagged attention areas", "Migration leftovers still billing, zombie seats, duplicate add-on pairs, app-owner accountability gaps, and annual contracts approaching renewal — recurring payments with no active owner reviewing them."],
              ["Prioritised action list", "Cancel, consolidate, downgrade, and renegotiate — ranked by annual dollar impact so you know where to start before the next billing cycle hits."],
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
              The accounting firm owner, bookkeeping principal, or Xero-heavy SMB operator runs the initial review and owns the cancellation, renegotiation, and app-owner assignment decisions. The completed savings report is shared with a practice manager or office manager to handle seat removals and vendor conversations. It can be given to a finance admin or bookkeeper as a structured view of recurring payments — useful before they go through Xero billing statements line by line. The report also surfaces which add-ons have no named owner so the principal can assign accountability before the next renewal cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your firm?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner or principal of an accounting or bookkeeping firm running Xero and a mix of add-ons</li>
                <li>Xero-heavy SMB with 5 to 50 staff and a growing app stack</li>
                <li>No dedicated IT or procurement role managing software subscriptions</li>
                <li>Multiple add-ons across payroll, receipts, reporting, and client tools</li>
                <li>Want a report and action list — not another platform to maintain</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large accounting group with centralised IT and procurement managing add-ons</li>
                <li>Need an audit of client financial data or Xero ledger contents — StackSmart audits practice billing only</li>
                <li>Fewer than five recurring software subscriptions</li>
                <li>Requires automated provisioning or enterprise identity integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Turn the Xero app list into a keep, cancel, downgrade, or consolidate plan</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Xero app stack waste usually hides in small recurring marketplace charges, connected-app permissions, and annual renewals nobody owns. StackSmart keeps the review billing-led: no ledger access, no client data, just the subscriptions and decisions an owner can act on.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-dark-300">
            The measured demand is practical rather than theoretical: DataForSEO showed 260 monthly Australian searches for "Xero apps" and 110 for "Xero app marketplace". StackSmart now frames that marketplace demand as a finance-truth audit: match every add-on to a current owner, client, workflow, renewal date, and recovery path.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Connected-app cleanup", "Map each Xero-connected app to its job: receipt capture, payroll, reporting, client portal, proposals, e-sign, workflow, debt collection, AI notes, or payment collection. Duplicate jobs become consolidation candidates."],
              ["Permission and owner check", "Flag apps where the original admin left, the renewal contact is unclear, or team seats remain active after a contractor, bookkeeper, or practice manager changed role."],
              ["Pre-renewal action list", "Pull renewals due in the next 60 days and decide before the charge hits: keep, cancel, downgrade, consolidate, or renegotiate based on actual use and overlap."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 measured demand action map */}
      <section className="border-y border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-11 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Xero app audit action map — updated for June 2026 demand data</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            This refresh turns measured Xero marketplace demand (260 searches for &ldquo;Xero apps&rdquo;, 210 for &ldquo;Xero add ons&rdquo;, high-bid CPCs above $200) into a practical owner/principal workflow: separate firm-owned from client pass-through costs, identify duplicate add-ons and connector fees, surface converted trials and ghost users, and assign every renewal to a named person with authority to keep, cancel, or renegotiate.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Billing source", "Start with accounting exports, card statements, direct debits, and vendor invoices so annual charges and off-platform subscriptions are visible."],
              ["Owner/use check", "Attach each tool to a current owner, user group, workflow, and renewal date; anything ownerless becomes a review candidate."],
              ["Action output", "Produce a keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decision list that a busy operator can work through this month."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "xero_app_demand_map" }} className="btn-primary text-sm">
              See the audit tool
            </TrackLink>
            <TrackLink href="/bookkeeping-firm-software-stack-audit" event="homepage_cta_clicked" props={{ target: "related_audit", location: "xero_app_demand_map" }} className="btn-secondary text-sm">
              Compare the bookkeeping stack audit
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
                "What does a Xero app stack audit cover?",
                "A Xero app stack audit covers every recurring subscription connected to or used alongside Xero — payroll add-ons, receipt capture and expense tools, reporting and dashboard platforms, practice management or workflow software, client portal and document tools, e-signature platforms, proposal and quoting tools, CRM, and any other Xero Marketplace add-ons in use. The goal is to find duplicate add-ons, subscriptions superseded by native Xero features, seats and tiers above actual usage, and tools left active after a migration.",
              ],
              [
                "Why do Xero users accumulate too many app stack subscriptions?",
                "Xero's marketplace and partner ecosystem make it easy to add functionality incrementally. Over 18 to 36 months, a firm or SMB can accumulate multiple receipt capture tools, overlapping payroll options, several reporting platforms, and practice management systems left billing after a migration. Xero also adds native features over time, making previously essential add-ons redundant.",
              ],
              [
                "How do I separate firm-owned Xero app costs from client pass-through billing?",
                "Tag each subscription in your billing export as firm-owned (the subscription belongs to the firm) or client pass-through (billed on behalf of a client and recovered). Firm-owned subscriptions are the audit target. The most common error is a firm-owned subscription originally set up for a client engagement that was never cancelled after that client left — it migrated from pass-through to firm cost without anyone noticing.",
              ],
              [
                "What are surprise annual renewal charges in Xero app stacks?",
                "Many Xero Marketplace add-ons are purchased on an annual plan at a discounted introductory rate. When year two arrives, the charge hits a card as a single large debit — often at a higher rate — with no named owner reviewing whether the app is still needed. Identifying annual renewals in your billing export 60 days before they hit creates the window to renegotiate or cancel.",
              ],
              [
                "Can StackSmart audit a Xero app stack for an accounting or bookkeeping firm?",
                "Yes. StackSmart is well-suited to accounting and bookkeeping firms using Xero who want to review their own practice stack. Upload a billing export from your firm's bank or card data. StackSmart categorises every subscription, flags duplicates, inflated tiers, and app-owner accountability gaps, and produces a prioritised action list. It does not access Xero ledgers, client files, or any regulated financial data.",
              ],
              [
                "What does StackSmart produce from a Xero app stack audit?",
                "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by Xero ecosystem function, a list of flagged attention areas (migration leftovers, zombie seats, duplicate add-on pairs, app-owner accountability gaps, and upcoming renewals), and a prioritised action list ranked by annual dollar impact. The output is designed for the firm owner or principal to review and share with a practice manager or office manager to action — a practical spend view, not an enterprise audit platform.",
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

      {/* Overlap map and renewal calendar */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Overlap map</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Group Xero apps by job, not vendor name</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                A Xero-heavy business does not need a procurement suite to find waste. It needs a category map: receipt capture, payroll, reporting, practice management, client portal, e-sign, proposals, late payment, CRM, and AI support. When two apps sit in the same box, or when Xero now covers the job natively, the owner has a specific cancellation conversation instead of a vague software review.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Renewal calendar</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Stop annual add-ons renewing by default</h3>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The hidden cost in Xero app stacks is ownerless renewal. Add-ons are often installed by a staff member during a client deadline, then the first annual renewal arrives after that person has changed role or left. StackSmart flags renewal dates and missing app owners so the question becomes "who decides before this renews?" rather than "why did this charge appear?"
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 2026-06-11 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">2026-06-11 proof refresh</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Xero apps at 260 searches and Xero add-ons at 210 — the audit question is which installed add-ons still earn their billing</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Today&apos;s DataForSEO AU live check shows &ldquo;Xero apps&rdquo; at 260 monthly searches (competition index 35, high bid $242.09) and &ldquo;Xero add ons&rdquo; at 210 monthly searches (competition index 37, high bid $217.33). The high-bid CPCs confirm strong commercial intent behind both terms — advertisers pay over $200 per click because Xero add-on decisions directly affect recurring revenue. StackSmart uses that demand as a practical audit moment: list each Xero Marketplace add-on, practice tool, AI seat, proposal app, e-signature account, reporting dashboard, connector fee, and document tool, then decide whether it is firm-owned, client-recovered, duplicated, underused, or due for renewal with no named owner.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Firm-owned", "Practice tools paid by the firm and used by staff — the audit target."],
              ["Client pass-through", "Subscriptions recovered from a client, excluded from savings math."],
              ["Ownerless", "Apps created for a past client or staff member that bill silently with no current decision-maker."],
              ["Renewal-risk", "Annual tools needing a named owner before the 60-day notice window closes."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-dark-800 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-primary-400/20 bg-primary-500/10 p-5">
            <p className="text-sm font-semibold text-white">Privacy boundary</p>
            <p className="mt-2 text-sm leading-7 text-dark-200">
              The audit works from the firm&apos;s billing exports, card statements, and marketplace invoices. It does not require Xero ledger access, BAS/tax data, client files, payroll records, or regulated financial records.
            </p>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <OwnerLedRefreshSection type="xero" />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="xero_app_stack_audit"
            heading="See what the Xero app stack audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your firm's billing data. No Xero login or client data required."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Audit the add-on stack — not the client ledgers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see what StackSmart produces from a billing export. No Xero credentials or client financial data needed.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "xero_stack_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "xero_stack_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for accounting and bookkeeping firms"
        description="These related pages cover the broader bookkeeping and accounting firm audit guides, the SMB checklist, and the core StackSmart audit tool."
        links={[
          {
            href: "/bookkeeping-firm-software-stack-audit",
            title: "Bookkeeping firm software stack audit",
            description: "Full software stack audit guide for owner-operated bookkeeping firms using Xero, QBO, or MYOB.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, document, and e-sign stack audit guide for small accounting firms.",
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
            href: "/ai-subscription-audit",
            title: "AI subscription audit",
            description: "ChatGPT Teams, Claude Pro, Copilot add-ons, and meeting transcription tools are now a standard Xero-firm billing finding. Right-size before the annual renewal.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your practice stack.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
