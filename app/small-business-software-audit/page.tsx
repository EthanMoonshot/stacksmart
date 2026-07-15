import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Small Business Software Audit",
  description:
    "Run a software audit for your small business without a finance team or IT department. StackSmart turns billing exports into a clear keep, cut, consolidate, and renegotiate report.",
  path: "/small-business-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/small-business-software-audit"),
      url: absoluteUrl("/small-business-software-audit"),
      name: "Small Business Software Audit | StackSmart",
      description:
        "Run a software audit for your small business without a finance team or IT department. StackSmart turns billing exports into a clear savings report.",
      dateModified: "2026-07-16",
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
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a small business software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small business software audit is a structured review of every software subscription your business pays for. The goal is to find waste — duplicate tools, unused seats, auto-renewals nobody reviewed, and pricing tiers your team has outgrown or underuses — and produce a clear action list: keep, cut, consolidate, or renegotiate.",
          },
        },
        {
          "@type": "Question",
          name: "How do you run a software audit without a dedicated IT or finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export billing data from your payment processor, credit card, or accounting tool. Upload the file to StackSmart. The report groups your subscriptions by category, flags duplicates and waste, highlights upcoming renewals, and gives you specific actions — without needing a procurement specialist or IT admin.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a small business audit its software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At minimum, run a full review once a year before your largest annual contracts renew. Many small businesses find quarterly check-ins useful once they have a baseline. A one-time audit is the fastest way to find out whether the problem is worth ongoing attention.",
          },
        },
        {
          "@type": "Question",
          name: "What data do I need to start a software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A billing export covering 6 to 12 months of recurring charges is enough. Most small businesses pull this from Xero, QuickBooks, their credit card, or Stripe. No bank login or live integrations required.",
          },
        },
        {
          "@type": "Question",
          name: "What do business owners usually find in their first week of auditing software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most owners find three to five surprises in the first week: at least one tool that was trialling and quietly converted to paid, one or two seats still billing for someone who left the business, and usually one category — file storage, project management, or communication — where two separate tools are running simultaneously. The most common reaction is 'I had no idea we were paying for that.' A billing export covering the last six to twelve months almost always surfaces at least one item that can be cancelled immediately.",
          },
        },
        {
          "@type": "Question",
          name: "How does software sprawl happen in a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It accumulates gradually. A team member signs up for a free trial during a crunch, the trial converts to paid, and nobody notices because the charge is small and the billing email goes to the person who set it up, not the owner. Someone onboards a new hire into three tools, then the hire leaves but the seats stay active. The owner upgrades a plan to unlock a feature for a project, the project ends, but the plan never gets downgraded. None of these individually are large. Together they often represent $4,000 to $15,000 in annual waste for a 10-to-30 person business.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start a software audit from my credit card statement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pull the last three months of your business credit card statements and scroll through every recurring charge. For each one, ask: can I name a current team member who uses this regularly? Mark anything without a clear owner as a cut or right-size candidate. This 30-minute card-statement pass surfaces the most obvious waste before moving to a full billing export covering 12 months. Software bills spread across multiple cards or accounts — including personal cards and ecosystem marketplace billing — should all be reviewed together. Annual charges may not appear in a three-month statement window, which is why the full 12-month export matters for catching forgotten annual renewals.",
          },
        },
        {
          "@type": "Question",
          name: "What is an owner-use pass for software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An owner-use pass is a simple accountability check applied to every recurring software payment: can you name one person on your current team who uses this tool regularly and would notice if it was cancelled? If yes, the subscription has an active owner and is a keep or right-size candidate. If not, the payment has no active owner — and that is the definition of recoverable spend. Running an owner-use pass on a small business stack typically takes 30 minutes and surfaces the most obvious categories of waste: ghost seats from departed staff, trials that converted without anyone adopting them, and AI subscriptions purchased at full team tier where active use concentrated in one or two people.",
          },
        },
        {
          "@type": "Question",
          name: "What is a software overlap map for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A software overlap map is a category-by-category grid that shows every workflow function where your business has more than one active tool — communication, project management, file storage, design, analytics, and so on. For most owner-led businesses with 5 to 50 staff, an overlap map takes 15 to 20 minutes to build from a billing export and immediately reveals where consolidation decisions have never been made. Overlap is common in businesses that have grown from 5 to 20 people without a standard tool policy: different team members adopted different tools for the same job, and nobody compared what each team was running.",
          },
        },
        {
          "@type": "Question",
          name: "What is duplicate account cleanup in a small business software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duplicate account cleanup identifies tools being paid for multiple times under separate individual plans rather than once under a consolidated team licence. Common examples: individual Canva Pro subscriptions billing on separate cards for each team member instead of one team plan; separate Notion plans per person instead of a shared workspace; individual meeting transcription accounts instead of one team account. Duplicate accounts differ from duplicate tools — it is the same platform, just paid for separately. Consolidating to a team licence typically saves 30 to 50 percent versus multiple individual plans and requires no vendor negotiation.",
          },
        },
        {
          "@type": "Question",
          name: "How do you run a quarterly software review for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A quarterly software review for a small business is a lighter pass than the full annual audit — around 30 to 45 minutes once you have a baseline. It covers three things: converted trials that moved from free to paid in the last 90 days, any ghost seats from staff departures since the last review, and annual contracts renewing in the next 60 days that need a seat count or tier check before auto-renewal. The quarterly pass does not replace the annual review; it prevents the drift between cycles. Owner-led businesses with 5 to 50 staff that run quarterly checks typically catch one to three recoverable items per pass — small individually, meaningful over the course of a year.",
          },
        },
        {
          "@type": "Question",
          name: "What is the leaver trigger in a small business software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The leaver trigger is the pattern where every staff departure leaves a trail of active software seats across multiple platforms. When someone leaves without a formal offboarding checklist, their licences on project management, communication, design, AI, and HR tools remain active and billing. A 10-person business with two departures in the last 12 months will typically have four to eight orphaned seats still billing across multiple platforms. The leaver trigger is often the fastest starting point for an audit: list every staff member who departed in the last 12 months, then check each per-seat platform for their active accounts. This pass alone typically surfaces $1,500–$6,000 in recoverable annual spend for a 10–30 person business with two or more recent departures.",
          },
        },
        {
          "@type": "Question",
          name: "What are project-only tools in a small business software audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Project-only tools are software subscriptions originally purchased for a specific project, campaign, or initiative that kept billing after the project ended. The person who signed up has often since left or changed roles, so nobody is actively managing the keep-or-cancel decision. In a billing review, project-only tools often appear as subscriptions with a clear first-billing date that corresponds to a project or hire, followed by months of charges with no corresponding active use. For each one, ask: does this tool serve a current ongoing workflow, or was it bought for something that has since ended? If the latter, it is an immediate cancellation candidate.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Duplicate tools",
    detail: "Two project management, two file-storage, or two design tools running simultaneously — often from different team members signing up independently.",
    color: "text-red-400",
    tag: "Cut one",
  },
  {
    label: "Ghost seats",
    detail: "Licences provisioned during onboarding that were never removed after someone left, changed roles, or moved to a different tool.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Trial bleed",
    detail: "Free trials that converted to paid plans and kept billing quietly. Common with marketing tools, scheduling apps, and niche productivity software.",
    color: "text-amber-400",
    tag: "Cut",
  },
  {
    label: "Tier mismatch",
    detail: "Paying for a Pro or Business plan because someone checked a feature once during evaluation, not because your team actually uses it daily.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    label: "Unreviewed renewals",
    detail: "Annual contracts that auto-renew before anyone checks whether the tool is still useful, competitively priced, or used by the team.",
    color: "text-orange-400",
    tag: "Review now",
  },
  {
    label: "Overlap across departments",
    detail: "Sales using one video platform, ops using another, and admin using a third — three subscriptions doing the same job across a 12-person team.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
  {
    label: "Project-only tools that became permanent",
    detail: "A tool purchased for a specific project — an AI pilot, a design sprint, a content campaign — that kept billing after the work wrapped. The original owner has often since left or changed roles, and nobody is actively managing the keep-or-cancel decision. These accumulate silently across every project cycle.",
    color: "text-dark-400",
    tag: "Review now",
  },
];

export default function SmallBusinessSoftwareAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Small business software audit · 2026 owner-led SMB proof refresh</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find software waste before it renews again
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              For most business owners running a 5-to-50-person operation, software spend is the one cost category nobody reviews between budget cycles. Trials convert to paid plans. People leave and their seats stay active. Renewals process before anyone checks whether the tool still earns its place. A software audit brings it all into the open.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "smb_software_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "smb_software_audit_secondary" }}
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
              How do you audit software subscriptions for a small business?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A small business software audit is a billing-first review for owner-led, admin-heavy businesses with roughly 5 to 50 staff — clinics, NDIS and community care providers, childcare operators, agencies, bookkeeping firms, boutique professional services, hospitality groups, fitness studios, property offices, and ecommerce or retail teams. Start with 6 to 12 months of billing exports, card statements, accounting exports, invoices, or marketplace receipts only; StackSmart does not need bank login access, SSO rollout, patient records, client files, or employee performance data for the first pass. The output is an action list for every subscription: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner, ranked by the fastest savings and renewal-risk items first.
            </p>
          </div>
        </div>
      </section>

      {/* 30-minute card-statement pass */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Card-statement pass</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              What you can find in 30 minutes from your card statement
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Most business owners already have everything they need to start: the last three months of business credit card statements. Before pulling a full billing export, a 30-minute card-statement pass surfaces the most obvious waste — recurring charges with no clear owner, trials that converted quietly, and tools appearing on multiple payment methods. Software bills spread across a business card, a personal card, and platform marketplace accounts are often harder to see as a whole than owners expect.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Highlight every recurring charge", "Work through the statement and mark anything that appears every month or that looks like an annual subscription. Most owners find 20 to 40 percent more tools than they expected."],
                ["Run the owner-use check", "For each charge, ask: can I name the person on the team who uses this regularly? If not, the subscription has no active owner and is a cut or right-size candidate."],
                ["Flag charges with no named owner", "Subscriptions where the person who signed up has left or changed roles — and nobody currently accountable for the keep decision. These are your easiest cancellations."],
                ["Note which card or account it came from", "Software bills spread across a business card, personal card, PayPal, and Stripe invoices are easy to miss in any single monthly review. The pass is how you find them all."],
                ["Mark annual renewals in the next 90 days", "Annual charges appear once on a statement. Note the renewal date and the amount. These are your renegotiation windows — once the auto-renewal processes, the leverage is gone for another year."],
                ["Total what you flagged", "Add up the flagged recurring charges. Most owners who have not reviewed recently find 30 to 50 percent more in monthly software spend than they expected — before a single subscription is touched."],
              ].map(([step, detail]) => (
                <div key={step} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-white">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              A card-statement pass gives you a short list of obvious problems. A full billing export audit — covering 6 to 12 months including annual charges — turns that list into a structured savings report with clear decisions, dollar impact per line, and a handoff-ready action plan for whoever manages vendors in your business. See the <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> for the full structured workflow.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "smb_card_statement_pass" }} className="btn-secondary text-sm">
                Full audit checklist
              </TrackLink>
              <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "smb_card_statement_pass" }} className="btn-secondary text-sm">
                About the audit tool
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* What owners find in week one */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Week one reality check</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">What owners typically find in week one</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most business owners who have not reviewed their software stack in the past six months find the same categories of problem. These are the most common first-week discoveries from owner-led audits of 5 to 50-person businesses.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                finding: "A trial that converted and kept billing quietly",
                detail: "A team member signed up during a crunch. It looked like a free trial. It is now $79 a month and has been billing for eleven months. Nobody touched it after the project ended.",
                tag: "Cut immediately",
                color: "text-red-400",
              },
              {
                finding: "Seats for people who left the business",
                detail: "Three licensed seats on a project management or communication tool belonging to staff who left between three and eighteen months ago. Still active, still billing.",
                tag: "Right-size",
                color: "text-amber-400",
              },
              {
                finding: "Two tools doing the same job across departments",
                detail: "Operations uses one video conferencing platform. Admin uses another. Sales has a third. Three subscriptions, one workflow — because nobody compared what each team was using.",
                tag: "Consolidate",
                color: "text-brand-400",
              },
              {
                finding: "An annual contract that auto-renewed without a review",
                detail: "A $3,600 annual renewal processed last month. Nobody had reviewed whether the tool was still useful, still competitively priced, or still used by anyone on the team.",
                tag: "Renegotiate next cycle",
                color: "text-orange-400",
              },
              {
                finding: "A Pro or Business tier nobody upgraded into",
                detail: "Paying for an Enterprise plan because someone checked a feature once during evaluation. The team has never used the features that justify the premium tier price.",
                tag: "Downgrade",
                color: "text-amber-400",
              },
              {
                finding: "Charges with no clear owner or use",
                detail: "At least one recurring charge where the person who signed up has left the business, the tool has not been logged into in months, and nobody on the current team can confirm what it does.",
                tag: "Assign or cancel",
                color: "text-dark-400",
              },
            ].map((item) => (
              <div key={item.finding} className="flex gap-4 rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className={`text-sm font-semibold ${item.color}`}>{item.finding}</h3>
                    <span className="rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{item.tag}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-dark-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The leaver trigger */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">The leaver trigger</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Every staff departure leaves a trail of active software seats
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Staff turnover is one of the fastest drivers of software waste in owner-led SMBs. When someone leaves, their licences across project management, communication, design, AI, and HR tools rarely get removed on the same day — or the same week. In businesses without a formal offboarding checklist, seats from departed staff accumulate across every platform until a billing review catches them. A 10-person business with two staff departures in the last 12 months will typically have four to eight orphaned seats still billing across multiple platforms.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Immediate seat removal on departure",
                  detail: "The day a staff member leaves, remove their accounts from every per-seat platform: project management, communication, design, AI tools, and any tool where they were the sole named owner. Do not wait for the next billing cycle.",
                  urgency: "Day one",
                  color: "text-red-400",
                },
                {
                  title: "Workspace and admin access handoff",
                  detail: "For every tool where the departing person was the workspace admin — AI platforms, Google Workspace, project management tools — transfer admin access to a current team member before the departure. Admin access left with a deactivated email creates an ownerless workspace that renews without review.",
                  urgency: "Before departure",
                  color: "text-red-400",
                },
                {
                  title: "Contractor and project staff",
                  detail: "Contractors and project-based staff are frequently given the same tool access as full-time employees. When the project or contract ends, their seats are rarely included in any formal offboarding process — they accumulate silently across AI platforms, design tools, and project management software.",
                  urgency: "End of engagement",
                  color: "text-amber-400",
                },
                {
                  title: "Renewal ownership reassignment",
                  detail: "Any annual subscription where the departed person was the named renewal owner needs to be reassigned immediately. Ownerless renewals — subscriptions due to auto-renew with no current team member accountable for the decision — are the single most common waste category in post-departure audits.",
                  urgency: "Within one week",
                  color: "text-amber-400",
                },
                {
                  title: "Billing email and notification redirection",
                  detail: "Subscription billing confirmations and renewal reminders that went to the departed person's email are now unmonitored. Annual renewals will auto-process without anyone seeing the notification. Update billing contacts for all subscriptions immediately after the departure.",
                  urgency: "Within one week",
                  color: "text-brand-400",
                },
                {
                  title: "The quarterly departed-staff pass",
                  detail: "A quarterly sweep of active seats against current headcount catches the cumulative drift between full annual audits. For any staff departure in the last 90 days, check every per-seat platform for their active accounts. Most businesses complete this pass in under 20 minutes once they have a baseline.",
                  urgency: "Quarterly",
                  color: "text-dark-400",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className={`text-sm font-semibold ${item.color}`}>{item.title}</h3>
                    <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2 py-0.5 text-xs text-dark-400">{item.urgency}</span>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-dark-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The leaver trigger is the fastest way to start a software audit: list every staff member who departed in the last 12 months, then check each per-seat platform for their active accounts. This pass alone typically surfaces $1,500–$6,000 in recoverable annual spend for a 10–30 person business that has had two or more departures without a formal offboarding process. See the <a href="/ai-subscription-audit" className="text-brand-400 hover:text-brand-300 transition-colors">AI subscription audit guide</a> for specific AI seat and workspace cleanup after staff departures.
            </p>
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste in small businesses</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most owner-led businesses have no clear picture of what is being used across their software stack. These are the seven patterns StackSmart most commonly surfaces from SMB billing exports — small leaks that become costly habits over time.
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

      {/* Overlap map and duplicate account cleanup */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">For owner-operators: 5–50 staff</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Overlap mapping and duplicate account cleanup</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Two of the fastest wins in an owner-led SMB audit — neither requires vendor negotiation. Both are common in businesses that have grown from 5 to 20 staff without a standard tool policy.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Overlap map</p>
              <h3 className="mt-3 text-base font-semibold text-white">Same job, different tools</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                An overlap map lists every workflow category where you have more than one active subscription. For most owner-led businesses with 5 to 50 staff, the most common overlaps are project management, file storage, and design. Building the map takes 15 minutes from a billing export and immediately shows where a consolidation decision has not been made.
              </p>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Overlap is common in businesses where different team members adopted different tools for the same job — ops uses one platform, sales uses another — with no single owner pushing for consolidation. The map makes the cost of inaction visible.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Duplicate account cleanup</p>
              <h3 className="mt-3 text-base font-semibold text-white">Same tool, separate individual plans</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Duplicate accounts occur when the same tool is paid for multiple times under individual plans per team member rather than one consolidated team licence. Common examples: individual Canva Pro subscriptions per designer, separate Notion plans per staff member, individual meeting transcription accounts. Most platforms offer a team plan at 30 to 50 percent less per seat.
              </p>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Unlike tool overlap, duplicate account cleanup requires no migration decision. It is the same tool, just consolidated billing. One team account replaces multiple individual accounts. The savings are immediate.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm font-medium text-white">Quarterly review cadence for owner-led SMBs</p>
            <p className="mt-2 text-sm leading-7 text-dark-300 max-w-3xl">
              Once you have a baseline from the initial audit, a quarterly 30-minute pass covers three things: converted trials (free plans that moved to paid in the last 90 days), new ghost seats from staff departures, and ownerless renewals in the next 60 days. For businesses with 5 to 50 staff without a dedicated ops function, this is the lightest sustainable review cycle. See the{" "}
              <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> for the full structured workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Hidden fees, integration add-on costs, and shopping overwhelm */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">The costs that hide in plain sight</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Hidden monthly fees, integration add-ons, and the cleanup drag nobody budgets for
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Beyond duplicate tools and ghost seats, there is a second layer of software cost that most owner-led businesses do not see until they go looking. These four patterns together often add $2,000 to $6,000 per year to a small business software bill — without any of them appearing obviously on a high-level statement review.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Integration add-on and connector fees",
                  detail: "Many software combinations require a paid bridge tool or native connector to sync data between platforms — HubSpot to Xero, QuickBooks to a CRM, Shopify to an accounting tool. Some of these connectors bill monthly at $30 to $120, others charge per-sync or per-record. When the integration breaks or is replaced by a native sync, the add-on keeps billing. Billing exports often show these as obscure vendor names rather than the platforms they connect.",
                  color: "text-amber-300",
                },
                {
                  title: "Hidden monthly fees inside free or cheap plans",
                  detail: "Free trials that converted to paid, usage-based charges that spiked during a busy period and never reset, or platform \"add-ons\" sold inside an existing subscription — a premium inbox, a reporting module, a higher API limit. These charges are real but rarely reviewed because they appear as small line items on an existing vendor invoice rather than a new subscription.",
                  color: "text-amber-300",
                },
                {
                  title: "Software shopping overwhelm recreating sprawl",
                  detail: "When the team runs into a workflow problem, the instinct is to find a new tool — not to check whether an existing subscription already handles it. A business paying for five productivity tools, three AI subscriptions, and two scheduling platforms often adds a sixth, fourth, and third before reviewing what the current stack can do. The solution is an audit of existing tools before adding any new subscription.",
                  color: "text-amber-300",
                },
                {
                  title: "Cleanup drag — the time cost of the mess",
                  detail: "An unreviewed software stack creates recurring admin friction: duplicate data across systems that don&apos;t sync, manual export-import steps between tools that should talk directly, staff switching between three platforms to do one job. This is not just a cost of the subscriptions themselves — it is the compounding time cost of running a disorganised stack. The audit produces a cleaner baseline that reduces the ongoing drag, not just the recurring bill.",
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
              AI subscriptions now form their own version of this pattern — tools adopted at full team tier, individual accounts billing separately, and overlap between ChatGPT, Claude, Canva, Notion AI, and meeting transcription tools. See the <a href="/ai-subscription-audit" className="text-brand-400 hover:text-brand-300 transition-colors">AI subscription audit guide</a> for the specific workflow to review and right-size AI tool spending.
            </p>
          </div>
        </div>
      </section>

      {/* 30-day workflow */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a small business</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This runs in spare time. No dedicated ops or finance role required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export transactions from your accounting tool, payment processor, or business credit card. Cover at least 6 months so annual charges appear. The output should be a list of every recurring software charge with vendor name, amount, and billing frequency.",
              ],
              [
                "Week 2 — Categorise, map overlaps, and flag duplicate accounts",
                "Group every subscription by function: communication, project management, file storage, design, analytics, finance, HR, marketing. Build an overlap map — a list of every category where you have more than one active tool. Separately, check each tool for duplicate accounts: the same platform being paid for under individual plans by multiple team members instead of one consolidated team licence. These two passes together typically surface 70 to 80 percent of recoverable spend for a 5-to-50 person owner-led business.",
              ],
              [
                "Week 3 — Size, prioritise, and assign renewal owners",
                "Calculate the annual cost of each flagged item: duplicate tools, duplicate accounts, ghost seats, and converted trials. Rank by dollar impact and ease of action. Start with cancellations — they require no vendor negotiation. For annual contracts renewing within 90 days, assign a named owner from the current team: someone accountable for the keep, right-size, or cancel decision. Ownerless renewals that process without this review are one of the most common waste categories in owner-led SMBs.",
              ],
              [
                "Week 4 — Act, document, and set a quarterly review cadence",
                "Cancel unused subscriptions before the next billing cycle. Consolidate duplicate tools and duplicate accounts. Initiate renegotiation conversations on contracts renewing within 90 days. Document each decision so the next review has a clean baseline. Then set a quarterly review reminder — a 30-to-45-minute pass to catch converted trials, new ghost seats, and ownerless renewals before they accumulate into the next annual audit.",
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
          <h2 className="text-2xl font-semibold text-white">What a small business software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are real categories of findings from SMB billing exports. Actual amounts vary by team size and stack.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding type</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Duplicate project management tools", "Consolidate to one", "$1,800 – $6,000/yr"],
                  ["Ghost seats on collaboration platform", "Remove or downgrade", "$900 – $3,600/yr"],
                  ["Forgotten trial converted to paid", "Cancel immediately", "$240 – $1,200/yr"],
                  ["Enterprise tier, Pro-level usage", "Downgrade tier", "$600 – $2,400/yr"],
                  ["Annual renewal, no usage review", "Renegotiate before auto-renew", "$500 – $4,000/yr"],
                  ["Three storage subscriptions, one workflow", "Consolidate", "$480 – $1,800/yr"],
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

      {/* How StackSmart helps */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How StackSmart helps small businesses audit faster</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The manual path works. StackSmart makes it faster and more structured, without a platform rollout.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export billing data, paste into a spreadsheet</li>
                <li>Manually categorise each line item</li>
                <li>Cross-reference seat counts by hand</li>
                <li>Build your own prioritisation logic</li>
                <li>Format a report to share internally</li>
                <li>Repeat from scratch at next review</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload billing export (CSV or invoice data)</li>
                <li>Automatic categorisation and duplicate detection</li>
                <li>Renewal risk flags and seat-count analysis</li>
                <li>Prioritised keep/cut/consolidate/renegotiate actions</li>
                <li>Shareable savings report ready to use immediately</li>
                <li>Repeatable without starting over each time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admin-sprawl symptoms */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Recognition check</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Signs your software stack needs a review</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Admin-heavy small businesses accumulate software sprawl faster than they realise. These are the most common signals that the stack has not been reviewed in too long.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["You are not sure how many tools you are paying for", "Most owners who have not audited recently underestimate their tool count by 30 to 50 percent."],
              ["Software charges appear on multiple cards or accounts", "When subscriptions span a business credit card, a personal card, and a PayPal account, things fall through the cracks."],
              ["You have had staff turnover in the last 12 months", "Every departure is a potential ghost seat. Every new hire is a potential new subscription that duplicates something you already have."],
              ["You have never renegotiated a software contract", "Vendors rarely lower prices automatically. Annual renewal is the only natural negotiation point, and most owners let it pass without a call."],
              ["You are paying for the same category in two different tools", "Two project management tools. Two file storage platforms. Two scheduling apps. Common in businesses where different team members made separate purchasing decisions."],
              ["You want a savings snapshot, not enterprise SAM", "StackSmart is built for a fast owner/operator decision list from billing data. It is not legal advice, compliance evidence, or a replacement for vertical operating systems."],
              ["Your last software review was more than six months ago", "Any stack older than six months without a review has almost certainly accumulated at least one unnecessary subscription."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-dark-400">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical routing section */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Which vertical audit fits your business?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software waste patterns differ by industry. If you run one of the businesses below, the vertical guide covers the specific tools, admin stack, and waste patterns relevant to how your business operates.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/agency-software-stack-audit", "Agency / web studio", "Project delivery, design, client reporting, and dev tools across a creative or digital studio."],
              ["/clinic-software-subscription-audit", "Allied health clinic", "Booking, billing, patient recalls, telehealth, and admin tools for practice owners."],
              ["/law-firm-software-subscription-audit", "Law firm", "Practice management, document, e-sign, matter intake, billing, and client portal tools for small firms."],
              ["/hospitality-group-software-audit", "Hospitality group", "POS, reservations, rostering, and delivery stack for small venues and multi-site groups."],
              ["/fitness-studio-software-subscription-audit", "Fitness studio", "Booking, member management, payments, and marketing for gyms and wellness studios."],
              ["/ndis-provider-software-audit", "NDIS provider", "Rostering, care management, and compliance tools for community care and NDIS providers."],
              ["/childcare-software-subscription-audit", "Childcare operator", "Enrolment, rostering, payroll, and parent comms tools for childcare and early learning."],
              ["/real-estate-agency-software-audit", "Real estate agency", "CRM, portal, appraisal, marketing, and e-sign tools for principal-led agencies."],
              ["/ecommerce-software-subscription-audit", "Ecommerce store", "Shopify apps, email, reviews, loyalty, shipping, and attribution tools for online retailers."],
              ["/professional-services-software-audit", "Professional services", "Project management, proposals, time tracking, CRM, and AI tools for boutique consultancies."],
              ["/retail-store-software-subscription-audit", "Retail store", "POS, rostering, inventory, loyalty, and email tools for independent and multi-site retailers."],
              ["/allied-health-software-subscription-audit", "Allied health practice", "Booking, billing, recalls, telehealth, and admin tools for physiotherapy, podiatry, psychology, and OT practices."],
              ["/dental-practice-software-subscription-audit", "Dental practice", "Admin and billing subscription audit for owner-operated dental practices — booking, reminders, payment plans, and reviews."],
              ["/bookkeeping-firm-software-stack-audit", "Bookkeeping firm", "Add-on sprawl, e-sign and receipt duplication, and tier creep in Xero, QBO, and MYOB ecosystem stacks."],
              ["/marketing-agency-software-stack-audit", "Marketing agency", "SEO tools, social scheduling, reporting, design, and project management overlap in small marketing and creative studios."],
              ["/multi-site-venue-software-audit", "Multi-site venue group", "Per-site POS add-ons, rostering, reservations, and delivery tools duplicated across hospitality group locations."],
              ["/medical-practice-software-subscription-audit", "Medical practice", "Booking, recalls, telehealth, billing, forms, and rostering subscriptions for GP and specialist clinics."],
              ["/veterinary-clinic-software-subscription-audit", "Veterinary clinic", "Practice management, reminders, inventory, payments, payroll, and marketing stack audit for vet clinics."],
              ["/optometry-practice-software-subscription-audit", "Optometry practice", "Booking, recalls, POS, inventory, lens-ordering, marketing, and accounting subscriptions for optometry owners."],
              ["/architecture-firm-software-stack-audit", "Architecture firm", "CAD/BIM seats, rendering tools, project delivery, proposals, file storage, and admin subscriptions for design studios."],
              ["/property-management-software-subscription-audit", "Property management office", "Inspection apps, maintenance portals, CRM, e-signature, forms, payments, and accounting subscriptions."],
            ].map(([href, title, description]) => (
              <a
                key={href}
                href={href}
                className="group rounded-2xl border border-dark-700 bg-dark-900/70 p-5 transition-colors hover:border-brand-400/40 hover:bg-dark-900"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-brand-300">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-dark-400">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is this the right fit for your business?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led business with 5 to 50 staff</li>
                <li>You are the one who pays the bills and you want to know what you are actually paying for</li>
                <li>Multiple recurring software subscriptions you have not reviewed recently</li>
                <li>No dedicated IT, ops, or procurement team</li>
                <li>You want a report and action list, not a platform to manage</li>
                <li>Billing data available from accounting software or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise IT team needing discovery agents and compliance controls</li>
                <li>Fewer than five software subscriptions</li>
                <li>Primary goal is security governance, not cost reduction</li>
                <li>Need automated provisioning or user lifecycle management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Owner-use accountability */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner-use accountability</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Every recurring payment needs a named owner</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The fastest path to a clear software spend picture is an owner-use pass: for every recurring charge, someone on the team should be able to name the person responsible for that subscription and confirm it is actively used. If you cannot do that, the payment has no active owner — and that is the definition of recoverable spend.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                status: "Has an active owner",
                color: "text-emerald-400",
                tag: "Keep",
                tagColor: "text-emerald-400",
                body: "A named person on your current team actively uses this tool at least twice a week. They would notice immediately if it was cancelled. No review needed — healthy spend.",
              },
              {
                status: "Owner uses it but the tier no longer fits",
                color: "text-amber-400",
                tag: "Right-size",
                tagColor: "text-amber-400",
                body: "There is a clear user, but the seat count, plan tier, or feature set no longer matches how the business actually uses the tool. Right-size before the next renewal rather than cancel.",
              },
              {
                status: "Owner left or changed roles",
                color: "text-red-400",
                tag: "Cancel",
                tagColor: "text-red-400",
                body: "The person who signed up has left or moved to a different role. Nobody on the current team has taken ownership of the keep decision. This is a ghost seat — the most common and easiest waste category to act on.",
              },
              {
                status: "Cannot name a current owner",
                color: "text-red-400",
                tag: "Cut",
                tagColor: "text-red-400",
                body: "Nobody on the team can confidently name who uses this, why the business pays for it, or what would break if it was cancelled. The most common first-audit surprise — and almost always a candidate for immediate cancellation.",
              },
            ].map((item) => (
              <div key={item.status} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className={`text-sm font-semibold ${item.color}`}>{item.status}</p>
                  <span className={`flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs ${item.tagColor}`}>{item.tag}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-dark-300">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm leading-7 text-dark-300 max-w-3xl">
              Running an owner-use pass takes under 30 minutes for most small business stacks. The output is a short, clear decision list — not a spreadsheet project. Once the pass is done, act on the cancellations first (no vendor conversation needed), then hand the renegotiation and right-sizing list to whoever manages vendor conversations in your business. Accounting and bookkeeping firms that run audits for SMB clients can use the same pass as an advisory starting point — the <a href="/bookkeeping-firm-software-stack-audit" className="text-brand-400 hover:text-brand-300 transition-colors">bookkeeping firm audit guide</a> and <a href="/professional-services-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">professional services audit guide</a> cover both internal reviews and client advisory use.
            </p>
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
                "What is a small business software audit?",
                "A small business software audit is a structured review of every software subscription your business pays for. The goal is to find waste — duplicate tools, unused seats, auto-renewals nobody reviewed, and pricing tiers your team has outgrown or underuses — and produce a clear action list: keep, cut, consolidate, or renegotiate.",
              ],
              [
                "How do you run a software audit without a dedicated IT or finance team?",
                "Export billing data from your payment processor, credit card, or accounting tool. Upload the file to StackSmart. The report groups your subscriptions by category, flags duplicates and waste, highlights upcoming renewals, and gives you specific actions — without needing a procurement specialist or IT admin.",
              ],
              [
                "How often should a small business audit its software subscriptions?",
                "At minimum, run a full review once a year before your largest annual contracts renew. Many small businesses find quarterly check-ins useful once they have a baseline. A one-time audit is the fastest way to find out whether the problem is worth ongoing attention.",
              ],
              [
                "What data do I need to start a software audit?",
                "A billing export covering 6 to 12 months of recurring charges is enough. Most small businesses pull this from Xero, QuickBooks, their credit card, or Stripe. No bank login or live integrations required.",
              ],
              [
                "What do business owners usually find in their first week of auditing software?",
                "Most owners find three to five surprises in the first week: at least one tool that was trialling and quietly converted to paid, one or two seats still billing for someone who left the business, and usually one category — file storage, project management, or communication — where two separate tools are running simultaneously. The most common reaction is 'I had no idea we were paying for that.' A billing export covering the last six to twelve months almost always surfaces at least one item that can be cancelled immediately.",
              ],
              [
                "How does software sprawl happen in a small business?",
                "It accumulates gradually. A team member signs up for a free trial during a crunch, the trial converts to paid, and nobody notices because the charge is small and the billing email goes to the person who set it up, not the owner. Someone onboards a new hire into three tools, then the hire leaves but the seats stay active. The owner upgrades a plan to unlock a feature for a project, the project ends, but the plan never gets downgraded. None of these individually are large. Together they often represent $4,000 to $15,000 in annual waste for a 10-to-30 person business.",
              ],
              [
                "What is a software overlap map for a small business?",
                "A software overlap map is a category-by-category grid that shows every workflow function where your business has more than one active tool. For most owner-led businesses with 5 to 50 staff, an overlap map takes 15 to 20 minutes to build from a billing export and immediately reveals where consolidation decisions have not been made. Overlap is common in businesses that have grown without a standard tool policy — different team members adopted different tools for the same job and nobody compared what each team was running.",
              ],
              [
                "What is duplicate account cleanup in a small business software audit?",
                "Duplicate account cleanup identifies tools being paid for multiple times under separate individual plans rather than once under a consolidated team licence. Common examples: individual Canva Pro subscriptions on separate cards per team member instead of one team plan; separate Notion plans per person instead of a shared workspace. Consolidating to a team licence typically saves 30 to 50 percent versus multiple individual plans and requires no vendor negotiation.",
              ],
              [
                "How do you run a quarterly software review for a small business?",
                "A quarterly software review covers three things: converted trials that moved from free to paid in the last 90 days, any ghost seats from staff departures, and annual contracts renewing in the next 60 days needing a review before auto-renewal. Once you have a baseline from the initial audit, the quarterly pass takes 30 to 45 minutes. Owner-led businesses with 5 to 50 staff that run quarterly reviews typically catch one to three recoverable items per pass — small individually but meaningful over the course of a year.",
              ],
              [
                "What is the leaver trigger in a software audit?",
                "The leaver trigger is the pattern where every staff departure leaves a trail of active software seats across multiple platforms. When someone leaves without a formal offboarding process, their licences on project management, communication, design, AI, and other per-seat tools remain active and billing. A 10-person business with two departures in the last 12 months typically has four to eight orphaned seats still billing across multiple platforms. The leaver trigger is often the fastest starting point for an audit: list every staff member who departed in the last 12 months and check each per-seat platform for their active accounts. This pass alone typically surfaces $1,500–$6,000 in recoverable spend for a business with two or more recent departures.",
              ],
              [
                "What are project-only tools in a software audit?",
                "Project-only tools are software subscriptions originally purchased for a specific project, campaign, or initiative that kept billing after the project ended. The person who signed up has often since left or changed roles, so nobody is managing the keep-or-cancel decision. In a billing review, project-only tools appear as subscriptions with a clear first-billing date corresponding to a project or hire, followed by months of charges with no corresponding active use. For each one: does this tool serve a current ongoing workflow, or was it bought for something that has since ended? If the latter, it is an immediate cancellation candidate.",
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

      {/* 2026-06-08 owner-led SMB card-statement and billing-export audit */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-08 conversion refresh · line-by-line billing review for SMB owners</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">The line-by-line software bill review every owner should run before renewal season</h2>
          <p className="mt-4 text-sm leading-7 text-dark-300">
            Owner-led businesses with 5 to 50 staff typically carry 15 to 40 recurring software charges across card statements, accounting exports, and direct debits. Most have never been reviewed as a group. The line-by-line pass takes one sitting and produces a clear action list: which tools to keep, which to cancel immediately, which seats to remove, which duplicate charges to consolidate, and which renewals need a named owner before the auto-renewal window closes.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1. Export card statements and accounting data",
                detail: "Pull 12 months from your business credit card, Xero, MYOB, or QBO. Include personal cards used for business subscriptions, PayPal, Stripe invoices, and any marketplace billing (Shopify apps, Xero add-ons, Google Workspace marketplace). The goal is one consolidated list of every recurring software charge, regardless of payment source.",
              },
              {
                step: "2. Run the owner-use pass on every line item",
                detail: "For each recurring charge, name the person on your current team who uses it at least twice a week. If you cannot name someone, the subscription has no active owner — and that is the definition of recoverable spend. This single pass typically flags 20 to 40 percent of subscriptions in a 5-to-50 person business.",
              },
              {
                step: "3. Flag duplicate charges, unused licences, and ownerless renewals",
                detail: "Look for the same tool paid multiple times on individual plans (Canva, Notion, Midjourney, transcription tools), seats still active for departed staff, trials that quietly converted to paid, and annual contracts renewing in the next 90 days with no named decision-maker. These four categories account for the majority of recoverable spend.",
              },
              {
                step: "4. Build a software inventory with one action per line",
                detail: "Every subscription gets a decision: keep (active owner, justified tier), cancel (no owner, no workflow), right-size (remove idle seats or downgrade tier), consolidate (merge individual plans to team account or eliminate duplicate tools), renegotiate (annual renewal approaching with usage below current tier), or assign renewal-owner (someone must own the keep/cancel decision before auto-renewal).",
              },
              {
                step: "5. Act on cancellations first, then schedule renegotiations",
                detail: "Cancellations and seat removals need no vendor conversation — execute them before the next billing cycle. Consolidations (individual to team plans) save 30 to 50 percent and require only an account migration. Renegotiations require a call but have highest dollar impact on annual SEO, design, AI, and project management contracts. Set a quarterly 30-minute review to catch drift between annual audits.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6">
              <h3 className="text-base font-semibold text-white">Why owner-led SMBs carry more waste than they expect</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Without a dedicated IT, ops, or finance function reviewing recurring spend, software charges accumulate through four patterns: staff signups that nobody tracks centrally, trials that auto-convert, leavers whose seats stay active, and annual renewals that process before anyone reviews usage. A 15-person business that has not audited in 12 months typically discovers $4,000 to $12,000 in annual recoverable spend — mostly from duplicate tools, ghost seats, and ownerless renewals.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6">
              <h3 className="text-base font-semibold text-white">The output: a decision list, not a procurement platform</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                StackSmart produces a categorised spend snapshot with one action per subscription. The business owner reviews the flagged items and either acts directly (cancellations, seat removals) or hands the renegotiation and consolidation list to whoever manages vendor relationships. It is a practical one-sitting review tool for busy owners — not an ongoing SaaS management platform.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ from: "smb_2026_06_08", target: "demo" }} className="btn-primary text-sm">See sample SMB report</TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ from: "smb_2026_06_08", target: "pricing" }} className="btn-secondary text-sm">View pricing</TrackLink>
          </div>
        </div>
      </section>



      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-07-16 direct-answer refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">What StackSmart checks in an owner-led SMB software audit</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart is built for business owners, operators, office managers, bookkeepers, and admin leads who can see the software bills but do not have a mature procurement process. The audit starts with billing exports, card statements, invoice folders, app-marketplace charges, and renewal emails — then turns messy recurring payments into a ranked action list.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The review does not require bank login access or sensitive customer records. It looks for duplicate vendor bills, cancelled-but-still-charged tools, former-staff licences, AI seats or credits nobody owns, month-end software charges that surprise the bookkeeper, and missed renewal notices buried in old inboxes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Billing sources", "Card exports, Xero or QuickBooks exports, invoice folders, Microsoft and Google billing, Shopify/Xero app marketplaces, and renewal-email trails."],
                ["Admin handoff", "A simple owner, office-manager, AP, or bookkeeper handoff showing who owns each charge and which rows need a decision."],
                ["Waste flags", "Duplicate tools, duplicate vendor bills, cancelled-but-still-charged subscriptions, former-staff seats, annual renewals, and AI tool sprawl."],
                ["Decision output", "Keep, cancel, downgrade, consolidate, renegotiate, assign owner, or investigate before the next renewal window closes."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/80 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2026-07-16 owner-led SMB subscription bloat + M365/GWS routing */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-07-16 owner-led SMB software-spend refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">The subscription bloat pattern in owner-led businesses</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Owner-led SMBs with 5 to 50 staff and no dedicated procurement or IT function share a consistent pattern: 12 to 18 active software subscriptions, $1,800 to $2,400 per month in recurring charges, duplicate services running in parallel across departments, forgotten signups from past projects that quietly converted to paid, and an estimated 30 to 40 percent in recoverable spend once the full picture is visible. The surprise is never one large charge. It is the accumulation of small charges that were never reviewed together.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Where the bloat hides</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-white">Microsoft 365 and Google Workspace:</span> leaver seats, tier mismatches, Copilot or Gemini add-ons assigned to the full team, shared mailboxes on paid seats, and suspended accounts still billing. These are typically the two largest single software line items.</li>
                <li><span className="font-semibold text-white">Recurring bills across payment methods:</span> subscriptions split across a business credit card, a personal card, PayPal, Stripe invoices, and platform marketplace billing (Shopify apps, Xero add-ons) are harder to see as a whole than owners expect.</li>
                <li><span className="font-semibold text-white">Duplicate services across departments:</span> operations using one project tool, sales using another, admin using a third. Three subscriptions doing the same job across a 15-person team because nobody compared what each group was paying for.</li>
                <li><span className="font-semibold text-white">Forgotten signups and converted trials:</span> a team member started a free trial during a crunch, the trial converted to paid, and nobody noticed because the billing email went to the person who set it up — not the business owner.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6">
                <h3 className="text-base font-semibold text-white">Platform-specific licence audits</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">
                  Microsoft 365 and Google Workspace each carry distinct waste patterns that a general subscription audit misses. Run the platform-specific licence audit alongside your broader software review to catch leaver seats, add-on waste, and tier mismatches specific to each platform.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a href="/microsoft-365-license-audit-small-business" className="group rounded-xl border border-dark-700 bg-dark-800/60 p-4 transition-colors hover:border-brand-400/40">
                    <p className="text-sm font-semibold text-white group-hover:text-brand-300">Microsoft 365 licence audit</p>
                    <p className="mt-1 text-xs leading-5 text-dark-400">Leaver seats, Copilot waste, tier downgrades, shared mailbox conversions</p>
                  </a>
                  <a href="/google-workspace-license-audit-small-business" className="group rounded-xl border border-dark-700 bg-dark-800/60 p-4 transition-colors hover:border-brand-400/40">
                    <p className="text-sm font-semibold text-white group-hover:text-brand-300">Google Workspace licence audit</p>
                    <p className="mt-1 text-xs leading-5 text-dark-400">Suspended accounts, Gemini waste, aliases vs paid users, storage review</p>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">From bloat recognition to action list</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">
                  The recurring bills tracker turns the card-statement scroll into a structured register: one row per charge, with payment account, billing date, named owner, last-confirmed-still-needed date, and a clear decision — keep, cancel, downgrade, consolidate, renegotiate, or assign-owner. The <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> walks through the full process step by step.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "smb_2026_06_20_bloat" }} className="btn-primary text-sm">Run the audit from billing data</TrackLink>
            <TrackLink href="/saas-subscription-management-software" event="homepage_cta_clicked" props={{ target: "subscription_management", location: "smb_2026_06_20_bloat" }} className="btn-secondary text-sm">Compare management options</TrackLink>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="smb_software_audit"
            heading="Get the sample report before uploading your own data"
            body="See how StackSmart organises billing data into keep, cut, consolidate, and renegotiate actions for an owner-led SMB."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit without a finance team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "smb_software_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "smb_software_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits and spend review"
        description="If you are running a small business software audit, these related pages cover the checklist, the audit tool, and vertical-specific guides for agencies and clinics."
        links={[
          {
            href: "/microsoft-365-license-audit-small-business",
            title: "Microsoft 365 licence audit",
            description: "Billing-first M365 licence audit for small businesses — leaver seats, Copilot waste, tier downgrades, and shared mailbox conversions.",
          },
          {
            href: "/google-workspace-license-audit-small-business",
            title: "Google Workspace licence audit",
            description: "Billing-first Workspace audit for small businesses — suspended accounts, Gemini waste, aliases vs paid users, and storage review.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A practical step-by-step guide for reviewing recurring software spend without a finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Work through a structured checklist before turning billing data into a savings report.",
          },
          {
            href: "/agency-software-stack-audit",
            title: "Agency software stack audit",
            description: "Audit guide tailored to web studios, creative agencies, and consultancies managing tool spread across client work.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Allied health and clinic-specific guide to reviewing admin, booking, billing, and marketing subscriptions.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into a structured savings report in minutes.",
          },
          {
            href: "/ndis-provider-software-audit",
            title: "NDIS provider software audit",
            description: "Rostering, care management, and compliance stack audit guide for NDIS and community care providers.",
          },
          {
            href: "/childcare-software-subscription-audit",
            title: "Childcare software subscription audit",
            description: "Enrolment, rostering, payroll, and parent comms — audit guide for childcare and early learning operators.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, document, and e-sign stack audit guide for small accounting and bookkeeping firms.",
          },
          {
            href: "/hospitality-group-software-audit",
            title: "Hospitality group software audit",
            description: "POS, reservations, rostering, and delivery stack audit guide for small hospitality groups and multi-site venues.",
          },
          {
            href: "/fitness-studio-software-subscription-audit",
            title: "Fitness studio software subscription audit",
            description: "Booking, member management, payments, and marketing stack audit guide for fitness and wellness studios.",
          },
          {
            href: "/real-estate-agency-software-audit",
            title: "Real estate agency software audit",
            description: "CRM, portal, appraisal, and marketing stack audit guide for principal-led real estate agencies.",
          },
          {
            href: "/ecommerce-software-subscription-audit",
            title: "Ecommerce software subscription audit",
            description: "App and subscription audit guide for small Shopify and ecommerce store operators.",
          },
          {
            href: "/professional-services-software-audit",
            title: "Professional services software audit",
            description: "Project management, proposals, time tracking, and CRM audit guide for boutique consultancies.",
          },
          {
            href: "/retail-store-software-subscription-audit",
            title: "Retail store software subscription audit",
            description: "POS, rostering, inventory, loyalty, and ecommerce stack audit guide for independent and multi-site retailers.",
          },
          {
            href: "/psychology-practice-software-subscription-audit",
            title: "Psychology practice software subscription audit",
            description: "Booking, telehealth, reminders, billing, and marketing stack audit for psychology and counselling practices.",
          },
          {
            href: "/shopify-app-stack-audit",
            title: "Shopify app stack audit",
            description: "Find duplicate review, loyalty, email, upsell, analytics, and helpdesk apps charging your Shopify store.",
          },
          {
            href: "/law-firm-software-subscription-audit",
            title: "Law firm software subscription audit",
            description: "Matter management, dictation, e-sign, and research stack audit for boutique and owner-led law firms.",
          },
          {
            href: "/consulting-firm-software-stack-audit",
            title: "Consulting firm software stack audit",
            description: "Project management, CRM, proposals, time tracking, AI tools, and reporting audit for owner-led consultancies.",
          },
          {
            href: "/ai-subscription-audit",
            title: "AI subscription audit",
            description: "Find overlapping AI tools, idle seats on ChatGPT Teams and Claude Pro, and individual-plan duplicates that should be on a team account.",
          },
          {
            href: "/xero-app-stack-audit",
            title: "Xero app stack audit",
            description: "Audit your Xero add-ons for duplicate payroll, receipt capture, reporting, and practice management tools.",
          },
          {
            href: "/medical-practice-software-subscription-audit",
            title: "Medical practice software subscription audit",
            description: "Booking, recalls, telehealth, billing, forms, patient comms, and rostering stack audit for GP and specialist clinics.",
          },
          {
            href: "/veterinary-clinic-software-subscription-audit",
            title: "Veterinary clinic software subscription audit",
            description: "Practice management, reminders, inventory, payments, payroll, and marketing audit guide for veterinary clinics.",
          },
          {
            href: "/optometry-practice-software-subscription-audit",
            title: "Optometry practice software subscription audit",
            description: "Booking, recalls, POS, inventory, lens ordering, marketing, and accounting stack audit for optometry practices.",
          },
          {
            href: "/architecture-firm-software-stack-audit",
            title: "Architecture firm software stack audit",
            description: "CAD/BIM seats, rendering plugins, project management, proposals, file storage, and admin tools for design studios.",
          },
          {
            href: "/property-management-software-subscription-audit",
            title: "Property management software subscription audit",
            description: "Inspection apps, maintenance portals, e-signature, CRM, forms, payments, and accounting audit guide for property teams.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
