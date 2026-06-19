import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Software Subscription Audit Checklist",
  description:
    "Before you go line by line through the credit card statement, use this checklist to structure a business software subscription audit. Find what to cut, consolidate, or renegotiate — for owner-led businesses with 5 to 50 staff.",
  path: "/software-subscription-audit-checklist",
});

const checklist = [
  {
    step: "Pull every recurring charge — starting from the card statement",
    detail: "Start with the last three months of your business credit card statements to surface the most obvious recurring charges. Then broaden to 12 months of billing data from invoices and expense reports to catch annual charges. Software bills spread across multiple cards or accounts should all be consolidated into one list before you begin. Once you have a baseline from this review, a quarterly 30-to-45-minute pass — covering converted trials, new ghost seats, and ownerless renewals — keeps the stack clean between full annual cycles.",
  },
  {
    step: "Group tools by workflow or category",
    detail: "Cluster subscriptions into buckets like project management, communication, design, dev tools, storage, and analytics.",
  },
  {
    step: "Build a software overlap map",
    detail: "Lay out a category-by-category grid: every workflow function on one axis, every active tool per category on the other. Any row with more than one tool is a consolidation candidate. The overlap map is distinct from a seat-count check — it surfaces tools doing the same job, even when both are actively used by different teams or departments. Most owner-led businesses find two to four overlap categories in a first-time review.",
  },
  {
    step: "Identify and consolidate duplicate accounts",
    detail: "Check whether the same tool is being paid for more than once under separate individual plans rather than one consolidated team licence. Common examples: individual Canva Pro, Notion, or meeting transcription accounts billing per person instead of under one team account. Duplicate accounts differ from overlap — it is the same platform, just paid for separately. Consolidating individual plans to a team licence typically saves 30 to 50 percent and requires no vendor negotiation. This step belongs after the overlap map — once you have confirmed each category has one tool, verify that tool is on a single consolidated account.",
  },
  {
    step: "Check whether seat counts match actual usage",
    detail: "Compare licensed seats to active users. If fewer than 70% of seats show recent activity, the tool is over-provisioned.",
  },
  {
    step: "Review whether pricing tiers still fit",
    detail: "Check if you are paying for an Enterprise or Pro tier when a lower tier covers the features your team actually uses.",
  },
  {
    step: "Mark renewals and assign a named owner to each",
    detail: "Identify contracts renewing in the next 60 days. For each, assign a named owner — one current team member accountable for the keep, right-size, or cancel decision before the auto-renewal processes. Renewals with no named owner are ownerless renewals: the highest-risk category in most SMB stacks. Once the charge processes, the renegotiation window is gone for another year. Flag ownerless renewals as immediate priority regardless of the tool's perceived value.",
  },
  {
    step: "Flag and review converted trials",
    detail: "Identify subscriptions that moved from free trial to paid plan — especially in the last 12 months. Look for charges that first appeared on billing statements in a specific month with no preceding annual commitment. For each converted trial, confirm: was this an intentional adoption decision, or did it convert by default when the trial ended? Trials that defaulted to paid without genuine adoption are cut candidates. Trials with real active use should be reviewed for seat count and tier — they often converted to a default full-team tier that is over-provisioned for actual usage.",
  },
  {
    step: "Run a leaver and contractor seat pass",
    detail: "List every staff member who departed in the last 12 months — including contractors and project-based hires whose engagements ended. For each person, check every per-seat platform for their active accounts. Any seat belonging to a departed employee or ended contractor is an immediate removal candidate. This pass is the fastest source of recoverable spend in most first-time audits — a 10–30 person business with two or more recent departures typically finds four to eight orphaned seats across multiple platforms. Run this check immediately, not at the end of the review — seat removal on active plans takes effect right away.",
  },
  {
    step: "Audit workspace admin access and renewal ownership",
    detail: "For each platform — especially AI tools, project management, Google Workspace, and design tools — confirm that the current workspace admin is an active team member in the relevant role. If the person who set up the workspace has since left, their email may still be the admin contact and billing notification address. Ownerless workspaces renew automatically without anyone reviewing the seat count. For each tool: name the current workspace admin, confirm they are still at the business, and confirm billing notifications go to an active business inbox. Where the admin has left, recovering admin access is the first step before any seat review or renewal decision.",
  },
  {
    step: "Sort every tool into a decision bucket",
    detail: "Classify each subscription as keep, cut, consolidate, or renegotiate. This is the output that drives action.",
  },
  {
    step: "Run an owner-use accountability pass",
    detail: "For every remaining subscription, name one current team member who uses this tool regularly and would notice if it was cancelled. If you cannot name someone, the payment has no active owner — mark it as a cut or right-size candidate regardless of the tool's original purpose. Ghost seats, AI subscriptions at full team tier with low active use, ownerless renewals, and project-only tools that outlived their original purpose are the most common findings in this final pass.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Software Subscription Audit Checklist | StackSmart",
      description:
        "A practical checklist for reviewing recurring software spend — find overlaps, right-size seats, and decide what to cut, consolidate, or renegotiate.",
      url: "https://stacksmart.app/software-subscription-audit-checklist",
      dateModified: "2026-06-20",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "Software Subscription Audit Checklist", item: "https://stacksmart.app/software-subscription-audit-checklist" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do business owners typically start a software subscription audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most owners start the same way: they pull up last month's credit card statement and begin scrolling through recurring charges. The problem is that monthly statements miss annual charges, and there is usually no clean way to group tools by what they actually do. A structured approach starts by gathering 12 months of billing data from all payment sources, grouping subscriptions by category, then applying a decision to each: keep, cut, consolidate, or renegotiate. That sequence turns a scroll through transactions into an action list.",
          },
        },
        {
          "@type": "Question",
          name: "What should a software subscription audit checklist produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A completed audit checklist should produce four things: a full inventory of recurring charges, clear waste flags (unused seats, duplicate tools, tier mismatches), a renewal calendar with upcoming risk dates, and a specific decision for every subscription — keep, cut, consolidate, or renegotiate. Without those outputs, the audit is just an inventory exercise that does not drive action.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a business owner audit their software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most owner-led businesses benefit from a full review once a year, with a lighter renewal-focused check every quarter. The most important trigger is any period of significant headcount change — each hire or departure is an opportunity for new subscriptions to appear or old seats to linger. A one-time audit is the fastest way to find out whether the problem is worth ongoing attention.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a manual checklist and a SaaS audit tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A manual checklist helps you structure the review process, but you do all the data gathering, categorization, and analysis yourself in spreadsheets. A SaaS audit tool like StackSmart automates the heavy lifting — it ingests billing data, groups tools by category, flags duplicates and waste, and produces a formatted report with specific savings recommendations. The checklist tells you what to look for; the tool does the looking.",
          },
        },
        {
          "@type": "Question",
          name: "What data do I need before starting a software subscription audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before starting, gather: a billing export from your bank, credit card, or accounting tool covering the last 12 months; seat license counts from each tool's admin panel; a rough count of active users per tool; upcoming renewal dates for annual contracts; and current headcount by department. Having these ready prevents the review from stalling midway. The most common audit delay is discovering mid-review that you do not have seat or usage data for a specific tool.",
          },
        },
        {
          "@type": "Question",
          name: "What is an owner-use pass and how does it fit into a software subscription audit checklist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An owner-use pass is a final accountability check added to the end of the software subscription audit process: for every recurring charge on your list, name one current team member who uses that tool regularly. Any subscription without a named active owner is a cut or right-size candidate. It is most effective as the last step before finalising the decision bucket for each tool — after you have already grouped subscriptions by category, checked seat counts, and reviewed tier fit. The owner-use pass catches the waste that category analysis misses: tools where one person is technically licensed but rarely logs in, AI subscriptions purchased at full team tier with minimal active use, and trials that converted without a genuine adoption decision being made.",
          },
        },
        {
          "@type": "Question",
          name: "How does a quarterly software subscription review work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A quarterly software subscription review is a lighter pass than the full annual audit, designed to run in 30 to 45 minutes once you have an established baseline. It covers three things: converted trials that moved from free to paid in the last 90 days without a deliberate adoption decision; new ghost seats from staff departures since the last review; and ownerless renewals — annual contracts due in the next 60 days where no current team member is the named owner and accountable for the keep, right-size, or cancel decision. The quarterly pass does not replace the full annual review; it prevents the drift that turns a clean stack into a messy one between cycles. Owner-led businesses with 5 to 50 staff that run quarterly reviews typically catch one to three recoverable items per pass.",
          },
        },
        {
          "@type": "Question",
          name: "What is duplicate account cleanup in a software audit checklist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duplicate account cleanup is a specific audit step that checks whether the same tool is being paid for multiple times under separate individual plans rather than once under a consolidated team licence. It differs from overlap detection, which finds two different tools doing the same job. Duplicate account examples: three individual Canva Pro subscriptions billing on separate cards instead of one team plan; individual Notion plans per team member instead of one shared workspace; individual meeting transcription accounts instead of a team plan. The fix is consolidation — identify all individual accounts for the same tool, migrate to a single team licence, and cancel the individual plans. This step belongs after the overlap map is built: once you have confirmed each category has one chosen tool, verify that tool is on a single consolidated billing account.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle a converted trial in a software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A converted trial is a subscription that moved from a free trial to a paid plan — sometimes without a deliberate decision being made. When auditing software subscriptions, identify converted trials by looking for charges that first appeared on billing statements in a specific month with no preceding annual commitment. For each converted trial, ask two questions: was this an intentional adoption decision, or did it convert by default when the trial period ended? Is the tool actively used by at least one current team member? Converted trials that defaulted to paid without genuine adoption are immediate cut candidates. Converted trials with genuine active use should be reviewed for seat count and tier fit — they often converted to a default full-team tier that is over-provisioned for actual usage.",
          },
        },
        {
          "@type": "Question",
          name: "Why should a software audit checklist include a leaver and contractor seat pass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every staff departure leaves a trail of active software seats across multiple platforms — project management, communication, design, AI, and HR tools. Without a formal offboarding checklist that removes seats, those accounts accumulate across every departure cycle. A leaver and contractor seat pass is one of the fastest sources of recoverable spend in any first-time audit: list every staff member and contractor whose employment or engagement ended in the last 12 months, then check each per-seat platform for their active accounts. Any seat belonging to a departed team member is an immediate removal candidate. A 10–30 person business with two or more recent departures typically finds four to eight orphaned seats across multiple platforms. Including this as an explicit checklist step — not an afterthought — ensures it gets done before the owner-use pass and renewal review, where incomplete seat counts can obscure the true cost of each subscription.",
          },
        },
        {
          "@type": "Question",
          name: "What is a workspace admin audit and why does it belong in a software subscription checklist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A workspace admin audit checks whether the current admin for each platform — AI tools, project management, Google Workspace, design tools — is an active team member in the relevant role. If the person who originally set up a workspace has since left, their email may still be the admin contact and billing notification address. The subscription keeps billing, seats from departed users are never removed, and annual renewals auto-process without anyone reviewing the seat count. The workspace admin audit belongs in the checklist because it is a prerequisite for accurate seat counts — you cannot reliably review or remove seats on a platform where no current team member has admin access. For each tool, confirm: who is the workspace admin, are they still at the business, and do billing notifications go to an active business inbox?",
          },
        },
      ],
    },
  ],
};

export default function SoftwareSubscriptionAuditChecklistPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Audit checklist · 2026 owner-led SMB proof refresh</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Software subscription audit checklist</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Use this before you scroll line by line through the credit card statement. A structured checklist for owner-led businesses with 5 to 50 staff — covering everything from gathering billing data and building an overlap map to identifying duplicate accounts, flagging converted trials, assigning ownerless renewals, and making a clear decision on every subscription.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_checklist_primary" }} className="btn-primary text-sm sm:text-base">
                See the report output
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_secondary" }} className="btn-secondary text-sm sm:text-base">
                See pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Direct answer block — GEO-friendly */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">What does &ldquo;going through the software subscriptions&rdquo; actually mean?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300 max-w-[65ch]">
              A software subscription audit checklist is a practical decision workflow for owner-led SMBs with 5 to 50 staff that have software creep but no procurement team. Start from billing exports, card statements, accounting exports, invoices, and marketplace receipts only; you do not need bank login access, SSO, client files, patient records, or employee monitoring data to complete the first pass. The finished checklist should produce four outputs: a full recurring-charge inventory, clear waste flags (unused seats, duplicate tools, converted trials, tier mismatches), a renewal calendar with notice windows, and a decision for every subscription — keep, cancel, downgrade, consolidate, renegotiate, or assign an owner. Use the <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">small business software audit guide</a> for the broader workflow, the <a href="/ai-subscription-audit" className="text-brand-400 hover:text-brand-300 transition-colors">AI subscription audit</a> for AI seats and credits, and <a href="/saas-renewal-management" className="text-brand-400 hover:text-brand-300 transition-colors">SaaS renewal management</a> when notice windows are the risk.
            </p>
          </div>
        </div>
      </section>

      {/* How owners describe the problem */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner voice</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">How business owners describe this problem</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the phrases that come up consistently when business owners talk about their software spend. If any of these sounds familiar, a structured review is overdue.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                quote: "I know I am paying for things I do not need. I just have not had the time to go through it properly.",
                context: "The most common reason audits do not happen. A structured checklist turns an open-ended task into a series of decisions with a clear end.",
              },
              {
                quote: "Before I go line by line through the credit card statement, I want to know what I am actually looking for.",
                context: "A checklist converts a reactive scroll into a proactive review. Knowing the categories of waste before you start saves hours.",
              },
              {
                quote: "There are charges on there I do not even recognise — I am not sure who set them up or whether anyone is still using them.",
                context: "Common in businesses with any staff turnover. Owner ambiguity — where nobody is clearly responsible for a subscription — is one of the most common waste categories.",
              },
              {
                quote: "It is like I need a Rocket Money for my business subscriptions.",
                context: "The personal finance analogy is accurate. StackSmart does for your business software spend what Rocket Money does for personal subscriptions — but with keep/cut/consolidate/renegotiate actions and a shareable report instead of a consumer dashboard.",
              },
              {
                quote: "I upgraded for a feature we used once during a proposal, and we have been paying the higher rate ever since.",
                context: "Tier creep. An upgrade decision made in context stays even after the context has passed. The audit surfaces these and tells you whether the downgrade is worth pursuing.",
              },
              {
                quote: "Every time I try to do this myself I get two thirds through and realise I do not have all the data in one place.",
                context: "The worksheet below solves this. Gather the six items before you start — billing export, seat counts, active user data, renewal calendar, headcount, and last audit date — and the review does not stall.",
              },
            ].map((item) => (
              <div key={item.quote} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-sm leading-7 text-dark-200 italic">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-3 text-xs leading-6 text-dark-400">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The checklist */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-dark-700 bg-dark-900/75 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">The 12-step checklist</h2>
            <div className="mt-6 space-y-4">
              {checklist.map((item, idx) => (
                <div key={item.step} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  <div className="flex gap-4">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">{idx + 1}</div>
                    <div>
                      <p className="text-sm font-medium leading-7 text-dark-200">{item.step}</p>
                      <p className="mt-1 text-sm leading-7 text-dark-400">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Owner/Operator Worksheet */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner worksheet</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Data to gather before you start</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Have these six items ready before working through the checklist. Missing data mid-review is the most common reason audits stall.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Billing export", detail: "CSV or PDF from your card, accounting tool, invoice folder, direct debits, or marketplace receipts — 12 months preferred to catch annual subscriptions", color: "text-brand-300" },
              { label: "Seat license counts", detail: "How many seats you are paying for per tool — check admin settings or the most recent invoice", color: "text-brand-300" },
              { label: "Privacy boundary", detail: "Use seat counts, billing exports, and rough active-user checks only. Do not upload patient records, client files, payroll details, or employee-performance data for a subscription-spend review", color: "text-amber-400" },
              { label: "Renewal calendar", detail: "Annual contract dates and named renewal owners — search email for subscription confirmed or auto-renewal notices, then assign a current team member as owner for each", color: "text-amber-400" },
              { label: "Team headcount", detail: "Current employee count per department — needed to check whether seat counts still match actual team size and to identify ghost seats from departures", color: "text-brand-300" },
              { label: "Last audit date", detail: "When (if ever) the stack was last reviewed — anything older than 6 months is a probable waste zone; set a quarterly review reminder after the initial audit completes", color: "text-orange-400" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-dark-400">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Spreadsheet column guide */}
          <div className="mt-8 rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Worksheet column layout</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-dark-300">
              If you are tracking in a spreadsheet, these six columns cover the full review. One row per subscription. Add a row for every charge you find, even ones you do not recognise yet.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-dark-700">
                    {["Tool name", "Monthly cost", "Seats paid", "Active users", "Category", "Decision"].map((col) => (
                      <th key={col} className="pb-3 pr-5 text-left text-xs font-medium uppercase tracking-[0.12em] text-dark-400 last:pr-0">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-800/60">
                  <tr>
                    <td className="py-3 pr-5 text-xs text-dark-300">Project Mgmt A</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">$189 / mo</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">15</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">14</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">Project mgmt</td>
                    <td className="py-3 pr-0 text-xs font-medium text-emerald-400">Keep</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-5 text-xs text-dark-300">Project Mgmt B</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">$79 / mo</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">10</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">2</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">Project mgmt</td>
                    <td className="py-3 pr-0 text-xs font-medium text-red-400">Cut</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-5 text-xs text-dark-300">Design tool</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">$299 / mo</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">5</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">3</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">Design</td>
                    <td className="py-3 pr-0 text-xs font-medium text-amber-400">Renegotiate</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-5 text-xs text-dark-300">File storage X</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">$49 / mo</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">—</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">—</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">Storage</td>
                    <td className="py-3 pr-0 text-xs font-medium text-brand-400">Consolidate</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-5 text-xs text-dark-300">File storage Y</td>
                    <td className="py-3 pr-5 text-xs text-dark-300 tabular-nums">$29 / mo</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">—</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">—</td>
                    <td className="py-3 pr-5 text-xs text-dark-300">Storage</td>
                    <td className="py-3 pr-0 text-xs font-medium text-brand-400">Consolidate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-dark-500">Example rows only. Replace with your actual subscriptions. Renewal trigger: flag any annual contract renewing within 60 days — these need a decision before the auto-renewal date.</p>
          </div>
        </div>
      </section>

      {/* Connector, AI, and owner-use pass */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">High-yield checks</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Three checks that find waste before a full procurement process exists</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Owner/use accountability", "Every recurring payment needs a named owner, current user count, and one plain-English reason it still exists. Unknown owner means review before next renewal."],
              ["Connector-fee review", "List Zapier, Make, marketplace sync, reporting connector, and integration add-on charges separately. Map each fee to the two tools it connects, then cut connectors attached to replaced or native features."],
              ["AI subscription pass", "Check ChatGPT, Claude, AI note tools, transcription, design AI, dashboard AI, and meeting assistants by active usage. Right-size team tiers before they renew."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-dark-300">For an owner-led SMB, the goal is a short list of decisions: which app can we cancel this week, which seats can we remove before renewal, which duplicate tools need a quieter consolidation window, and which annual contracts need renegotiation before auto-renewal.</p>
        </div>
      </section>

      {/* Output framework — 4 buckets */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The four decision buckets</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Every subscription in your stack should land in one of these buckets by the time the audit is done. If a tool does not have a clear bucket, it has not been reviewed yet.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-emerald-400">Keep</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">High adoption, fair price, no overlap. Leave it alone. This is healthy spend that does not need action.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-red-400">Cut</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">Low or zero usage, abandoned trials, tools nobody remembers signing up for. Cancel before the next billing cycle.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-brand-400">Consolidate</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">Two or more tools serving the same job. Pick the best one, migrate users, and cancel the rest.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-sm font-semibold text-amber-400">Renegotiate</p>
              <p className="mt-2 text-sm leading-7 text-dark-300">Worth keeping, but the price or tier is wrong. Right-size seats, downgrade plans, or negotiate better terms before renewal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related audit paths */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">Use this checklist with a focused audit page</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              ["Small business software audit", "/small-business-software-audit"],
              ["Microsoft 365 licence audit", "/microsoft-365-license-audit-small-business"],
              ["Google Workspace licence audit", "/google-workspace-license-audit-small-business"],
              ["AI subscription audit", "/ai-subscription-audit"],
              ["Accounting firm audit", "/accounting-firm-software-stack-audit"],
              ["Marketing agency audit", "/marketing-agency-software-stack-audit"],
              ["Bookkeeping stack audit", "/bookkeeping-firm-software-stack-audit"],
              ["Allied health audit", "/allied-health-software-subscription-audit"],
              ["NDIS provider audit", "/ndis-provider-software-audit"],
              ["Property management audit", "/property-management-software-subscription-audit"],
              ["Clinic audit", "/clinic-software-subscription-audit"],
              ["SaaS spend audit tool", "/saas-spend-audit-tool"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="rounded-full border border-dark-700 bg-dark-900 px-4 py-2 text-sm text-dark-200 hover:border-brand-500/60 hover:text-white">{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Manual checklist vs StackSmart comparison */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual checklist vs StackSmart</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The checklist above works on its own. StackSmart makes it faster by automating the data-heavy steps.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>You build the inventory from scratch in a spreadsheet</li>
                <li>Category grouping and overlap detection are manual</li>
                <li>Seat utilisation requires checking each tool individually</li>
                <li>Output format depends on your spreadsheet skills</li>
                <li>Works for small stacks under 15 tools</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">With StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Upload a billing CSV and the inventory builds itself</li>
                <li>Tools auto-grouped by category with overlap flags</li>
                <li>Seat and tier analysis included in the report</li>
                <li>Formatted output ready to share with your team</li>
                <li>Scales to any stack size without extra effort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After the checklist — completion routing */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What to do after finishing the checklist</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            A completed checklist is a decision list. These three steps turn it into actual savings.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Step 1</p>
              <h3 className="mt-3 text-base font-semibold text-white">See the report output</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">Open the StackSmart sample report to see how findings look when the data is in the tool rather than a spreadsheet. Judge the output before spending anything.</p>
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_checklist_completion_routing" }} className="btn-secondary mt-5 inline-block text-sm">
                Open sample report
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Step 2</p>
              <h3 className="mt-3 text-base font-semibold text-white">Run your billing data</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">Upload a billing export and let StackSmart handle the categorisation, overlap detection, and savings report automatically — no spreadsheet required.</p>
              <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "saas_spend_audit_tool", location: "seo_checklist_completion_routing" }} className="btn-secondary mt-5 inline-block text-sm">
                About the audit tool
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Step 3</p>
              <h3 className="mt-3 text-base font-semibold text-white">Pick a plan and start</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">Snapshot at $49 for a one-time review. Recurring plans from $29/mo if you want ongoing savings visibility and renewal alerts across future cycles.</p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_completion_routing" }} className="btn-primary mt-5 inline-block text-sm">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2026-06-12 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-06-12 owner-led SMB proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Five steps that turn a card statement into a decision list</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Owner/operator VOC is consistent: every tool under the microscope, scattered client context across apps, AI-tool sprawl from shared GPT and Chrome logins, duplicate auto-renewing charges nobody reviews, and hidden admin overhead from ownerless renewals. This checklist converts the card-statement scroll into an action-oriented workflow: billing export, owner/use pass, renewal-owner assignment, decision list, and handoff to a bookkeeper or admin.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "checklist_2026_06_12" }} className="btn-primary text-sm">Automate the checklist</TrackLink>
                <TrackLink href="/saas-subscription-management-software" event="homepage_cta_clicked" props={{ target: "subscription_management", location: "checklist_2026_06_12" }} className="btn-secondary text-sm">Compare management options</TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">The five action outputs</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-white">1. Card statement + billing export:</span> consolidate all recurring charges from cards, Xero/MYOB, direct debits, and marketplace billing into one view.</li>
                <li><span className="font-semibold text-white">2. Owner/use pass:</span> every subscription needs a named current user who would notice if the tool disappeared. No owner means review before renewal.</li>
                <li><span className="font-semibold text-white">3. Renewal-owner assignment:</span> 30, 60, and 90-day windows with a named decision-maker, not a forgotten calendar reminder. Ownerless renewals are the highest-risk category.</li>
                <li><span className="font-semibold text-white">4. Decision list:</span> keep, cancel, downgrade, consolidate, renegotiate, or assign-owner for every meaningful line item — ranked by annual dollar impact.</li>
                <li><span className="font-semibold text-white">5. Handoff record:</span> a formatted list the bookkeeper, practice manager, or ops admin can execute without understanding the audit methodology.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026-06-20 recurring bills tracker / subscription bloat section */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-06-20 subscription bloat refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">The recurring bills tracker every owner-led business needs before a full audit</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Owner-led businesses with 5 to 50 staff typically carry 12 to 18 active software subscriptions across multiple payment methods. The pattern is consistent: duplicate services running simultaneously, forgotten signups that quietly converted to paid, and charges nobody has reviewed since the original purchase. A recurring bills tracker turns the card-statement scroll into a structured register with one row per charge and one decision per row.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">What the recurring bills register captures</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                For every recurring software charge, record these fields in one place. Missing any one of them is how subscriptions become invisible waste.
              </p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[480px] text-sm">
                  <thead>
                    <tr className="border-b border-dark-700">
                      {["Field", "Why it matters"].map((col) => (
                        <th key={col} className="pb-3 pr-5 text-left text-xs font-medium uppercase tracking-[0.12em] text-dark-400 last:pr-0">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-800/60">
                    {[
                      ["Tool name and vendor", "Identifies the charge — some billing lines use parent company names, not the product name you recognise"],
                      ["Monthly or annual cost", "Normalise everything to monthly for comparison; flag annual charges separately for renewal-window tracking"],
                      ["Payment account", "Which card, direct debit, PayPal, or accounting source the charge hits — subscriptions spread across accounts are harder to see as a whole"],
                      ["Billing date or renewal date", "When the next charge processes — annual renewals need a decision 30 to 60 days before the auto-renewal window closes"],
                      ["Named owner", "One current team member responsible for the keep/cancel decision — subscriptions with no owner are the highest-risk category"],
                      ["Last confirmed still needed", "The date someone on the team last confirmed this tool is actively used and earning its cost — anything older than 6 months is a review candidate"],
                      ["Decision", "Keep, cancel, downgrade, consolidate, renegotiate, or assign-owner — every row needs a decision before the register is complete"],
                    ].map(([field, detail]) => (
                      <tr key={field}>
                        <td className="py-3 pr-5 text-xs font-medium text-dark-200">{field}</td>
                        <td className="py-3 pr-0 text-xs text-dark-400">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">Subscription bloat: what it looks like from inside</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">
                  The pattern is consistent across owner-led SMBs: a business discovers it is carrying 12 to 16 active subscriptions at $1,800 to $2,400 per month, with duplicate services running in parallel, forgotten signups from past projects, and an estimated 30 to 40 percent in recoverable spend once the full picture is visible. The surprise is rarely one large charge — it is the accumulation of small charges that were never reviewed together.
                </p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">Platform-specific licence audits</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">
                  Microsoft 365 and Google Workspace are typically the two largest single subscription line items in a small business software bill. Both carry their own waste patterns — leaver seats, tier mismatches, and add-ons assigned to the full team when only a few people use them. Run the platform-specific audit alongside the general subscription review.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a href="/microsoft-365-license-audit-small-business" className="text-sm text-brand-400 hover:text-brand-300 transition-colors">Microsoft 365 licence audit for small business</a>
                  <a href="/google-workspace-license-audit-small-business" className="text-sm text-brand-400 hover:text-brand-300 transition-colors">Google Workspace licence audit for small business</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "checklist_2026_06_20_bloat" }} className="btn-primary text-sm">Automate the register</TrackLink>
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "checklist_2026_06_20_bloat" }} className="btn-secondary text-sm">See the sample output</TrackLink>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_software_subscription_audit_checklist"
            heading="See what the output looks like when the checklist work is done"
            body="Most owners who complete the checklist want to see what a structured savings report looks like before uploading their own billing data. The sample report shows exactly that."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* Pricing routing */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Ready to skip the spreadsheet?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            If the checklist confirmed you have work to do, StackSmart turns the billing data into a report with clear next actions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">One-time audit</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Snapshot — $49</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upload billing data once, get a full savings report. No subscription required.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_routing_snapshot" }} className="btn-primary mt-5 inline-block text-sm">
                Get Snapshot
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ongoing oversight</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Starter or Growth — from $29/mo</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Monthly savings visibility with renewal alerts and ongoing recommendations.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_routing_recurring" }} className="btn-secondary mt-5 inline-block text-sm">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">See the sample report first</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Before you upload anything, open the public sample report and judge whether the output is useful for your own stack review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_checklist_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_checklist_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit guides"
        title="Move from checklist to action"
        description="These related pages help you turn a manual checklist into a faster software-spend decision path, with clearer next steps for review, comparison, and savings analysis."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit hub",
            description: "Owner-led SMB guide covering waste signals, admin-sprawl symptoms, and vertical routing for 20+ industry types.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing data into keep, cut, consolidate, and renegotiate actions — including the finance handoff workflow.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, AI subscription, e-sign, and document stack audit for owner-led accounting practices.",
          },
          {
            href: "/bookkeeping-firm-software-stack-audit",
            title: "Bookkeeping firm software stack audit",
            description: "Add-on sprawl, receipt capture duplication, AI seat accumulation, and tier creep in Xero, QBO, and MYOB ecosystem stacks.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Follow a simple audit sequence without turning it into a giant finance project.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "Compare when a lightweight cost review tool fits better than a broad procurement platform.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
