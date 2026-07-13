import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Spend Management for SMBs",
  description:
    "SaaS spend management for owner-led SMBs: use billing exports to find duplicate tools, unused seats, connector fees, marketplace add-ons, ownerless renewals, and practical savings actions.",
  path: "/saas-spend-management",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "SaaS Spend Management for SMBs | StackSmart",
      dateModified: "2026-07-14",
      description:
        "SaaS spend management for owner-led SMBs: find duplicate tools, unused seats, add-on fees, ownerless renewals, and practical savings actions from billing exports.",
      url: "https://stacksmart.app/saas-spend-management",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "SaaS Spend Management", item: "https://stacksmart.app/saas-spend-management" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is SaaS spend management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaaS spend management is the practice of tracking, analyzing, and optimizing recurring software costs across your organization. It includes maintaining a complete inventory of tools, identifying waste from unused seats or duplicate apps, flagging renewal risks, and surfacing renegotiation opportunities — so teams can reduce spend without cutting productivity.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best first step for a small team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export your billing data (credit card statements, invoices, or accounting exports), run it through a savings report tool like StackSmart, and review the output for waste, overlap, and pricing mismatch. This gives you a concrete action list in under an hour without needing to roll out enterprise procurement software.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an enterprise SaaS management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enterprise platforms make sense when you have 500+ employees, formal procurement workflows, and compliance requirements around vendor access. For teams under 200, a lightweight savings report usually surfaces 80% of the actionable waste without the six-month implementation timeline.",
          },
        },
      ],
    },
  ],
};

export default function SaaSSpendManagementPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Category guide</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SaaS spend management for teams that need answers fast
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Your software costs are growing faster than headcount. You need visibility into what you are paying for, what is wasted, and what to do next — without a six-month procurement rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_spend_management_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spend_management_secondary" }} className="btn-secondary text-sm sm:text-base">
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
            <h2 className="text-2xl font-semibold text-white">What is SaaS spend management?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              SaaS spend management is the practice of tracking, analyzing, and optimizing recurring software costs across your organization. It includes maintaining a complete inventory of tools, identifying waste from unused seats or duplicate apps, flagging renewal risks, and surfacing renegotiation opportunities — so teams can reduce spend without cutting productivity.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">What is the best first step for a small team?</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              Export your billing data (credit card statements, invoices, or accounting exports), run it through a savings report tool like StackSmart, and review the output for waste, overlap, and pricing mismatch. This gives you a concrete action list in under an hour without needing to roll out enterprise procurement software.
            </p>
          </div>
        </div>
      </section>

      {/* Three approaches comparison */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Three approaches to SaaS spend management</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Every team starts somewhere. The right approach depends on your size, urgency, and tolerance for implementation overhead.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Approach 1</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Manual spreadsheet audit</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-dark-300">
                <li>Pull billing data into a spreadsheet manually</li>
                <li>Cross-reference tools with team usage</li>
                <li>Time cost: 8-20 hours per quarter</li>
                <li>Prone to gaps, inconsistency, stale data</li>
                <li>No automated renewal alerts</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-dark-400">Best for: teams under 10 with fewer than 20 tools</p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Approach 2</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Enterprise SaaS management platform</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-dark-300">
                <li>Full procurement workflow and approval gates</li>
                <li>SSO/SCIM integrations for usage data</li>
                <li>6-12 week implementation timeline</li>
                <li>Requires dedicated ops/IT staff to manage</li>
                <li>Typical cost: $30K-$150K/year</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-dark-400">Best for: 500+ employees with formal procurement</p>
            </div>

            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Approach 3</p>
              <h3 className="mt-3 text-lg font-semibold text-white">StackSmart savings report</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-dark-300">
                <li>Upload billing exports, get a savings report</li>
                <li>Flags waste, overlap, and pricing mismatch</li>
                <li>Time to first output: under 1 hour</li>
                <li>No SSO integration or IT rollout needed</li>
                <li>From $49 one-time or $29/month ongoing</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-brand-300">Best for: SMBs that want fast answers now</p>
            </div>
          </div>
        </div>
      </section>

      {/* When each approach makes sense */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When each approach makes sense</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white">You have fewer than 20 tools and a small team</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                A spreadsheet might work, but even here you lose time on manual reconciliation. Running billing data through StackSmart takes less time than building a spreadsheet from scratch and catches things you would miss.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">You need governance, approvals, and vendor lifecycle management</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Enterprise platforms like Zylo, Productiv, or Torii solve a different problem — compliance-driven procurement control. If you have a procurement team and compliance mandates, that investment is justified. StackSmart is not trying to be that.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">You need savings visibility and action items this week</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                StackSmart gives you a concrete savings report — waste, overlap, renewal risk, renegotiation targets — from billing data alone. No IT involvement. No procurement workflow. Just a clear picture of where money is going and what to do about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold text-white">SaaS spend management for SMBs starts with the spend you can actually see.</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The fastest way for an owner-operator to control SaaS spend is not a procurement suite. It is a billing-data pass that shows every recurring software charge, what it belongs to, who owns it, and what should happen next. StackSmart focuses on the practical 5-50 staff workflow: export, categorise, detect waste, decide, and assign follow-through.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Use it before quarterly budget reviews, annual renewals, staff offboarding, vendor price increases, new site launches, or after a messy growth phase where teams bought tools independently.
              </p>
            </div>
            <div className="min-w-0 rounded-3xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">The StackSmart spend-management output</h3>
              <div className="mt-5 grid gap-3">
                {[
                  "Recurring software inventory from uploaded billing exports",
                  "Duplicate category and overlap flags",
                  "Leaver, contractor, project-only, and ownerless-seat cleanup list",
                  "Connector, API, reporting, SMS, marketplace, and add-on fee review",
                  "Renewal owner and notice-window assignments",
                  "Keep, cancel, downgrade, consolidate, or renegotiate action list",
                ].map((item) => (
                  <div key={item} className="min-w-0 break-words rounded-xl border border-dark-700/80 bg-dark-950/60 px-4 py-3 text-sm text-dark-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/reduce-saas-spend-small-business" event="homepage_cta_clicked" props={{ target: "reduce_saas_spend", location: "seo_spend_management_refresh" }} className="btn-secondary text-sm">
              Reduce SaaS spend in 30 days
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spend_management_refresh" }} className="btn-primary text-sm">
              See audit options
            </TrackLink>
          </div>
        </div>
      </section>


      {/* June 2026 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 proof refresh · owner-led SMB spend management</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">For a small business, SaaS spend management means one actionable billing pass.</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                SaaS spend management is often sold as an enterprise procurement system. For a 5-50 staff owner-led business with low procurement maturity, the first win is simpler: export card statements, invoices, and accounting data; group recurring software charges; find unused seats, duplicate vendor bills, converted trials nobody adopted, offboarding gaps where departed staff left seats active, and ownerless renewals approaching auto-renew — then decide what to keep, cancel, downgrade, consolidate, or renegotiate.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart is built for that first 30-day cleanup. It does not require SSO, SCIM, bank access, vendor portals, or a procurement team. It gives the owner, operator, bookkeeper, or admin lead a practical action list — with a named renewal owner for each subscription — they can work through before the next renewal calendar closes.
              </p>
            </div>
            <div className="rounded-3xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">First 30 days with StackSmart</h3>
              <div className="mt-5 grid gap-3">
                {[
                  "Day 1: upload billing exports, card statements, invoices, or accounting CSVs",
                  "Day 2: group recurring charges by tool, category, payment path, and subscription owner",
                  "Week 1: cancel clear waste, remove leaver seats, close converted trials",
                  "Week 2: consolidate duplicate categories and downgrade unused tiers",
                  "Week 3: renegotiate material vendors and check annual renewal notice windows",
                  "Week 4: assign renewal owners and repeat the billing pass quarterly",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-dark-700/80 bg-dark-950/60 px-4 py-3 text-sm leading-6 text-dark-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/small-business-software-audit" event="homepage_cta_clicked" props={{ from: "saas_spend_management_2026_06_14", target: "small_business_audit" }} className="btn-secondary text-sm">Small business audit</TrackLink>
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ from: "saas_spend_management_2026_06_14", target: "audit_tool" }} className="btn-primary text-sm">Use the audit tool</TrackLink>
          </div>
        </div>
      </section>

      {/* Credit-card statement audit and evidence workflow */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The credit-card statement audit: what to export and what to look for</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            For admin-heavy SMBs where the owner pays the software bills, the credit-card statement is the single richest source of subscription data. Here is the evidence workflow StackSmart uses.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              ["What evidence to export", "Business credit-card statements (6-12 months), Xero/QuickBooks/MYOB transaction exports, invoice PDFs from vendor portals, marketplace receipts (Xero Marketplace, Shopify App Store), and any tools expensed on personal cards and reimbursed."],
              ["What to look for", "Still paying for it after cancellation, duplicate vendor bills on different cards, converted trials nobody deliberately adopted, seats for staff who left, project-only tools that became permanent spend, and connector or API fees buried in platform invoices."],
              ["Owner-use review per subscription", "For each charge: name the current team member who uses it weekly, confirm the subscription owner and billing contact are current staff, note whether the tool is project-only or permanent, and flag any tool where you cannot name an active user."],
              ["Action output from the pass", "A prioritised keep, cancel, downgrade, consolidate, renegotiate list — ranked by recoverable annual spend — with a named renewal owner for each subscription. Hand the list to an admin or office manager to execute."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-dark-300">
            This workflow applies across verticals. See the <TrackLink href="/ai-subscription-audit" event="homepage_cta_clicked" props={{ target: "ai_audit", location: "spend_management_evidence" }} className="text-brand-400 hover:text-brand-300 transition-colors">AI subscription audit</TrackLink> for the AI-specific seat and overlap review, the <TrackLink href="/consulting-firm-software-stack-audit" event="homepage_cta_clicked" props={{ target: "consulting_audit", location: "spend_management_evidence" }} className="text-brand-400 hover:text-brand-300 transition-colors">consulting firm software stack audit</TrackLink> for project-tool residue patterns, or the <TrackLink href="/veterinary-clinic-software-subscription-audit" event="homepage_cta_clicked" props={{ target: "vet_audit", location: "spend_management_evidence" }} className="text-brand-400 hover:text-brand-300 transition-colors">veterinary clinic software audit</TrackLink> for PMS add-on overlap in clinic settings.
          </p>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_spend_management"
            heading="Email yourself the sample report"
            body="See the exact output StackSmart produces — waste flags, overlap detection, renewal risk, and savings recommendations. Judge the quality before buying anything."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* What a good spend management process covers */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What good SaaS spend management covers</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Regardless of the tool you use, effective spend management should address these areas:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Complete tool inventory", "Know every SaaS subscription across all payment methods — credit cards, invoices, expensed tools, and shadow IT."],
              ["Waste identification", "Find unused seats, abandoned trials, duplicate tools serving the same function, and licenses that outlived their project."],
              ["Renewal calendar", "Track renewal dates so you can renegotiate or cancel before auto-renewal locks you in for another year."],
              ["Pricing benchmarks", "Understand whether you are paying market rate or if a renegotiation conversation is worth having."],
              ["Consolidation opportunities", "Spot overlapping tools where one subscription could replace two or three."],
              ["Actionable recommendations", "The output should tell you what to do — not just show data, but recommend specific cuts, consolidations, and renegotiations."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common questions about SaaS spend management</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white">How much do companies typically save?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Teams that have never run a structured audit typically find 15-30% of their SaaS spend is wasted, duplicated, or priced above market. The actual figure depends on team size, growth rate, and how long since the last review.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Do I need an enterprise SaaS management platform?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Enterprise platforms make sense when you have 500+ employees, formal procurement workflows, and compliance requirements around vendor access. For teams under 200, a lightweight savings report usually surfaces 80% of the actionable waste without the six-month implementation timeline.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">What data do I need to get started?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Billing exports work best — credit card statements, accounting exports, or invoices. StackSmart analyzes these to build your tool inventory, flag waste, and produce recommendations. No SSO integration or IT involvement required.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 2026-07-14 owner-led SMB spend-management refresh */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-07-14 refresh · practical SMB workflow</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">For small businesses, spend management is a monthly owner-to-admin handoff</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                A 5-50 staff business does not need enterprise procurement ceremonies to stop software waste. It needs a current list of recurring charges, a renewal calendar, an owner-use check, and a clear person responsible for each action. StackSmart makes that handoff concrete: the owner reviews the decisions; an accounts-payable, office-manager, practice-manager, or bookkeeping contact executes cancellations, downgrades, vendor emails, and renewal-owner updates.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                This is especially useful when software bills are scattered across cards, direct debits, app marketplaces, and invoice PDFs — the exact pattern in clinics, agencies, bookkeeping firms, ecommerce stores, hospitality groups, fitness studios, and professional-services teams.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">The lightweight monthly control loop</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Export new card, accounting, invoice, and app-marketplace charges.</li>
                <li><span className="font-semibold text-white">2.</span> Flag new tools, duplicate vendor bills, cancelled-but-still-charged lines, and annual renewals inside notice windows.</li>
                <li><span className="font-semibold text-white">3.</span> Confirm owner-use: who uses it, how often, what job it does, and whether another tool already covers it.</li>
                <li><span className="font-semibold text-white">4.</span> Assign the action: keep, cancel, downgrade, consolidate, renegotiate, or assign renewal owner.</li>
              </ol>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/business-subscription-tracker-small-business" event="homepage_cta_clicked" props={{ target: "tracker", location: "spend_management_2026_07_14" }} className="btn-secondary text-sm">Track renewals</TrackLink>
                <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "spend_management_2026_07_14" }} className="btn-primary text-sm">Run an audit</TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <SeoClusterLinks
        eyebrow="Related guides"
        title="Explore related spend-management topics"
        description="If you are evaluating SaaS spend management approaches, these pages help you compare tools, review audit workflows, and see how StackSmart compares to specific platforms."
        links={[
          {
            href: "/saas-renewal-management",
            title: "SaaS renewal management",
            description: "Stop surprise renewals and assign renewal owners before auto-renew clauses roll over.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See where StackSmart fits when the main job is fast savings visibility from billing data.",
          },
          {
            href: "/ai-subscription-audit",
            title: "AI subscription audit",
            description: "Find overlapping AI tools, idle seats, and unused workspace subscriptions in owner-led SMB billing exports.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See when a fast savings report replaces a manual audit process.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A step-by-step framework for running your first subscription audit.",
          },
          {
            href: "/consulting-firm-software-stack-audit",
            title: "Consulting firm software stack audit",
            description: "Project management, proposals, CRM, and AI tool audit for owner-led consultancies.",
          },
          {
            href: "/veterinary-clinic-software-subscription-audit",
            title: "Veterinary clinic software subscription audit",
            description: "PMS add-ons, reminders, booking, inventory, and staff seat audit for independent vet clinics.",
          },
          {
            href: "/saas-subscription-management-software",
            title: "SaaS subscription management software",
            description: "Compare subscription management approaches for teams that need renewal tracking and seat accountability.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report and judge whether the output already solves your spend-management problem — before buying anything.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_spend_management_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spend_management_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
