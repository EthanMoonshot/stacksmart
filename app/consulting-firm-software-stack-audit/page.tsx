import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import SeoDailyRefresh20260708 from "@/components/landing/SeoDailyRefresh20260708";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Consulting Firm Software Stack Audit",
  description:
    "Audit your consulting firm's software subscriptions for duplicate project management, CRM, proposals, time tracking, research and AI tools, reporting dashboards, and document tools. StackSmart turns a billing export into a clear action list.",
  path: "/consulting-firm-software-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/consulting-firm-software-stack-audit"),
      url: absoluteUrl("/consulting-firm-software-stack-audit"),
      name: "Consulting Firm Software Stack Audit | StackSmart",
      dateModified: "2026-07-08",
      description:
        "Audit your consulting firm's software subscriptions for duplicate project management, CRM, proposals, time tracking, research and AI tools, reporting dashboards, and document tools.",
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
          name: "Professional Services Software Audit",
          item: absoluteUrl("/professional-services-software-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Consulting Firm Software Stack Audit",
          item: absoluteUrl("/consulting-firm-software-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software should a consulting firm audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A consulting firm software audit should cover project management platforms, client CRM and pipeline tools, proposal and quoting software, time tracking and billing systems, research and knowledge management tools, AI meeting and writing assistants, reporting and dashboard platforms, document management and e-signature tools, team communication and collaboration software, marketing and outreach platforms, and accounting and invoicing software. The goal is to find duplicated tools across the same workflow category, seats licensed above actual active headcount, and subscriptions contracted at growth-phase tiers the firm has not filled.",
          },
        },
        {
          "@type": "Question",
          name: "Why do consulting firms end up with too many software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Owner-led consultancies accumulate software in three main ways: each new senior consultant or partner hire brings their preferred stack of project management, time tracking, and proposal tools; rapid adoption of AI writing, research, and meeting tools in the past two years has created a dense layer of overlapping subscriptions that were individually justified but collectively redundant; and growth-phase over-buying where seats and tier sizes were purchased expecting team growth that did not materialise at the projected rate, leaving the firm paying for capacity it does not use.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit a consulting firm's software stack without disrupting active projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data only — export 6 to 12 months of charges from your accounting software or card statements. Do not touch any live tool until you have a complete picture of what is running. Group every charge by function, identify categories with more than one active tool, check seat counts against your current roster, and build a prioritised action list. Plan any consolidation or migration for a gap between active project phases so that client delivery is not disrupted.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart help a consulting firm reduce its software spend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is well-suited to owner-led consultancies with 5 to 50 staff and a software stack that has grown incrementally without a dedicated procurement review. Upload a billing export from Xero, QuickBooks, or your business card. StackSmart categorises every subscription, flags duplicates, unused seats, and inflated tiers, and produces a prioritised keep, cut, consolidate, and renegotiate action list you can act on between project phases.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Project management",
    issue:
      "Notion, ClickUp, Asana, and Monday.com all running across the same firm because different principals or project leads adopted their preferred tool. No firm-wide standard means four tiers billing simultaneously for one workflow.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "AI and research tools",
    issue:
      "Perplexity, Otter.ai, Fireflies, Grain, and multiple ChatGPT or Claude API subscriptions all active — each adopted during a period of AI tool experimentation, with no consolidation review since the initial sign-up.",
    action: "Cut to essentials",
    color: "text-red-400",
  },
  {
    category: "CRM and pipeline management",
    issue:
      "HubSpot and Pipedrive both active — one from a business development push, one from a prior hire who set up their own pipeline. Client and prospect data split across two platforms with neither fully maintained.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Proposals and quoting",
    issue:
      "Proposify, PandaDoc, and Better Proposals all installed — two from testing phases, one in active use — and the evaluation subscriptions never formally cancelled after the decision was made.",
    action: "Cut duplicates",
    color: "text-amber-400",
  },
  {
    category: "Time tracking and billing",
    issue:
      "Harvest, Toggl Track, and Clockify all billing simultaneously because team members set up individual preferences rather than a firm-wide standard. No consistent time data across the firm and three subscription costs for one function.",
    action: "Standardise one",
    color: "text-orange-400",
  },
  {
    category: "Reporting and dashboards",
    issue:
      "Databox, Klipfolio, and Google Looker Studio Pro all subscribed for client reporting. Active usage concentrated in one platform with the others generating charges without regular use.",
    action: "Review and cut",
    color: "text-brand-400",
  },
];

export default function ConsultingFirmSoftwareStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Consulting firm software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit the software stack your consulting firm has grown into
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Owner-led consultancies accumulate software one tool at a time — a project management platform for a new hire, a proposal tool for a pitch, an AI research assistant for a project, a time tracker for billing. Without a structured review, a 10-person consulting firm can easily carry $15,000 or more in overlapping, unused, and oversized subscriptions. A software stack audit finds what to cut, consolidate, and renegotiate between projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "consulting_firm_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "consulting_firm_audit_secondary" }}
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
              How does a consulting firm audit its software stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from your accounting software, business bank, and card statements. Include every recurring charge the firm pays: project management platforms, CRM and pipeline tools, proposal and quoting software, time tracking, AI tools and research subscriptions, reporting and dashboard platforms, document management and e-signature, communication tools, marketing platforms, and accounting. Group every charge by function. Flag any category where the firm runs more than one active subscription. Check per-seat tools against your current active team roster — consultant hires who have since left often leave their tool preferences billing on firm accounts. Identify growth-phase tier upgrades where the firm never filled the seat capacity that justified the upgrade. Note annual contracts renewing in the next 60 days. Plan consolidation for gaps between active project phases rather than during client delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Why firms accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why consulting firms accumulate software stack waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the problem at owner-led consultancies and boutique advisory firms.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Hire-driven tool fragmentation",
                "Each new senior hire imports their preferred project management tool, time tracker, and proposal platform. Over 24 months, a firm that has grown from 5 to 12 consultants can carry four project management tools, three time trackers, and two CRM platforms — all billing at full tiers.",
              ],
              [
                "AI tool proliferation",
                "The past two years have produced a wave of AI writing, research, meeting, and productivity tools. Most consulting teams trialled several and kept signing up without a firm-wide review. A 10-person firm can easily carry six or seven AI tool subscriptions covering largely the same functions.",
              ],
              [
                "Tier overshoot during growth",
                "During a growth phase, firms upgrade to Business or Enterprise tiers expecting team expansion to fill the seats. When growth slows or changes direction, the tier stays in place — and the overpayment compounds on auto-renew without a review conversation.",
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

      {/* Waste by category */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Consulting firm software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where consulting firms most commonly find recoverable spend in billing exports.
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
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How to run a consulting firm software audit in 30 days</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This runs between project phases and does not require disrupting active client engagements.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Export billing data",
                "Pull 6 to 12 months of charges from your accounting software (Xero, QuickBooks), business bank, and card statements. Include firm-level subscriptions and any tools individual consultants expense or manage on personal accounts reimbursed by the firm. Annual subscriptions need the full 12-month window to appear.",
              ],
              [
                "Step 2 — Group by workflow function",
                "Organise every charge: project management, CRM and pipeline, proposals and quoting, time tracking and billing, AI and research tools, reporting and dashboards, document management and e-sign, communications and collaboration, marketing and outreach, and accounting and payroll. Any category with more than one active subscription is a consolidation candidate.",
              ],
              [
                "Step 3 — Check seat counts against current roster",
                "Compare every per-seat licence count against your current active team. Flag former consultants whose tool preferences are still billing on firm accounts. Note tools where the seat count exceeds active staff by more than one or two — these are the easiest items to right-size immediately.",
              ],
              [
                "Step 4 — Prioritise by dollar impact",
                "Calculate annual cost for each flagged item. Rank by total annual value. Start with clearly unused tools — anything nobody has opened in 60 or more days. Then plan tier downgrades, tool consolidations, and renegotiations in descending order of impact.",
              ],
              [
                "Step 5 — Act between project phases",
                "Cancel unused tools before the next billing cycle. Plan tool migrations and consolidations for a gap between active client engagements — consultants need lead time to migrate project data and time tracking history. Renegotiate annual contracts before auto-renewal using current usage data as leverage.",
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
          <h2 className="text-2xl font-semibold text-white">What a consulting firm software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from consultancy billing exports. Amounts vary by firm size and tool mix.
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
                  ["Four project management tools, no firm standard", "Consolidate to one", "$2,880 – $8,400/yr"],
                  ["AI and research tools duplicated across team members", "Cut to firm standard", "$960 – $4,800/yr"],
                  ["Two CRM platforms, pipeline data split", "Consolidate", "$1,200 – $4,800/yr"],
                  ["Proposal tools from testing phases never cancelled", "Cancel unused", "$720 – $3,000/yr"],
                  ["Seats above active headcount on project management tier", "Right-size", "$840 – $3,600/yr"],
                  ["Annual strategy tool contract, no review conversation", "Renegotiate at renewal", "$1,200 – $6,000/yr"],
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


      {/* June 2026 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">June 2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Consultancies inherit project tools long after the project ends</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Consulting practice management software shows 10 AU monthly searches with a $80.96 CPC — the buyers are real but few. The stronger small-firm wedge is not procurement software. It is a billing-led audit of project-only tools that became permanent subscriptions, AI research assistants nobody consolidated, proposal platforms from testing phases, CRM overlap across principals, contractor seats that outlived the engagement, and duplicate vendor bills on different cards.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                This is built for owner-led advisory, research, strategy, and boutique consulting firms with 5-50 staff and low ops maturity. The owner or managing director exports the billing data, identifies what is still serving active delivery, and hands admin a prioritised action list with a renewal owner assigned to every subscription.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-base font-semibold text-white">Consulting firm billing-export workflow</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Export card statements, Xero/QuickBooks data, and invoice PDFs. Split internal operating tools from client-specific tools, research trials, workshop apps, proposal platforms, and delivery workspaces.</li>
                <li><span className="font-semibold text-white">2.</span> Run the owner-use check: match every seat to current employees, associates, contractors, and active client projects. Flag offboarding gaps where departed consultants left tools billing.</li>
                <li><span className="font-semibold text-white">3.</span> Decide whether each tool is firm capability, client-rechargeable, project residue, a consolidation candidate, or an immediate cancellation (still paying for it, nobody uses it).</li>
                <li><span className="font-semibold text-white">4.</span> Turn the export into a keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner handoff the admin can execute.</li>
              </ol>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "consulting_2026_06_14" }} className="btn-secondary text-sm">Use the checklist</TrackLink>
                <TrackLink href="/saas-cost-optimization-software" event="homepage_cta_clicked" props={{ target: "cost_optimization", location: "consulting_2026_06_14" }} className="btn-primary text-sm">See cost optimization software</TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Renewal and delivery-boundary proof block */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              [
                "Project-only tools that stuck",
                "Workshop, research, proposal, AI, meeting, dashboard, and client-collaboration tools often start as one-project expenses and become permanent subscriptions. StackSmart separates active delivery tools from forgotten project residue.",
              ],
              [
                "Client-paid vs internal spend",
                "The audit helps the owner identify subscriptions that should be recharged to a client, retained as firm capability, downgraded, or cancelled before the next renewal cycle.",
              ],
              [
                "Admin handoff, not enterprise rollout",
                "StackSmart produces a practical keep, cancel, downgrade, consolidate, and renegotiate list from billing exports. It is designed for low-procurement consultancies, not enterprise SaaS-management implementations.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your firm?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner or managing director of a boutique consultancy, advisory, or research firm</li>
                <li>5 to 50 consultants and support staff</li>
                <li>Software stack built incrementally through new hires and project needs</li>
                <li>No dedicated IT, ops, or procurement team managing subscriptions</li>
                <li>Billing data accessible from Xero, QuickBooks, or business card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large consulting group with centralised IT and procurement managing software lifecycle</li>
                <li>Need automated provisioning, SSO, or compliance workflows</li>
                <li>Primary goal is security governance, not cost reduction</li>
                <li>Fewer than six active software subscriptions</li>
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
                "What software should a consulting firm audit?",
                "A consulting firm software audit should cover project management platforms, CRM and pipeline tools, proposal and quoting software, time tracking and billing systems, AI meeting and research tools, reporting and dashboard platforms, document management and e-signature, team communication and collaboration software, marketing platforms, and accounting. The goal is to find duplicated tools, seats above active headcount, and subscriptions at growth-phase tiers the firm has not filled.",
              ],
              [
                "Why do consulting firms end up with too many software subscriptions?",
                "Owner-led consultancies accumulate software through hire-driven fragmentation where each new consultant imports their preferred tools; rapid AI tool adoption with no firm consolidation review; and growth-phase tier upgrades where the firm never filled the seat capacity that justified the higher plan tier.",
              ],
              [
                "How do I audit a consulting firm's software without disrupting active projects?",
                "Start with billing data only — export 6 to 12 months of charges from your accounting software or card statements. Do not change any live tool until you have a complete picture. Group every charge by function, identify overlapping tools, and plan consolidation for gaps between active project phases.",
              ],
              [
                "Can StackSmart help a consulting firm reduce software spend?",
                "Yes. StackSmart is well-suited to owner-led consultancies with layered software spend and no dedicated procurement role. Upload a billing export from Xero, QuickBooks, or your business card. StackSmart categorises every subscription, flags duplicates, unused seats, and inflated tiers, and produces a prioritised action list you can act on between client engagements.",
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
      <SeoDailyRefresh20260708 type="consulting" />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="consulting_firm_software_audit"
            heading="See what the consulting firm audit report looks like"
            body="Email yourself the sample report to review the finding format before uploading your firm&apos;s billing data. No client or project data required."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit between project phases</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your firm&apos;s next review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "consulting_firm_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "consulting_firm_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for owner-led service firms"
        description="These related pages cover the professional services audit guide, sibling firm-type guides, and the core StackSmart audit tool."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/ai-subscription-audit",
            title: "AI subscription audit",
            description: "Find overlapping AI tools, idle seats, and unused workspace subscriptions in owner-led SMB billing exports.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "How StackSmart compares to enterprise platforms for owner-led businesses that need savings visibility.",
          },
          {
            href: "/saas-spend-management",
            title: "SaaS spend management",
            description: "The practical spend-management workflow for SMBs: billing export, categorise, detect waste, decide, assign follow-through.",
          },
          {
            href: "/marketing-agency-software-stack-audit",
            title: "Marketing agency software stack audit",
            description: "SEO tools, AI subscriptions, social scheduling, and reporting stack audit for owner-led agencies.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A step-by-step framework for running your first subscription audit.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into categorised findings and a clear action list.",
          },
          {
            href: "/saas-renewal-management",
            title: "SaaS renewal management",
            description: "Stop surprise renewals and assign renewal owners before auto-renew clauses roll over.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
