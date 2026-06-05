import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Spend Audit Tool",
  description:
    "Looking for a SaaS spend audit tool? See how StackSmart turns billing exports into a software inventory, overlap map, renewal calendar, and clear cut, consolidate, and renegotiate actions for owner-led SMBs.",
  path: "/saas-spend-audit-tool",
});

const sampleFindings = [
  {
    label: "Duplicate tools",
    detail: "Two project management tools active across the same team — one paid annually, one monthly.",
    color: "text-red-400",
    tag: "Cut one",
  },
  {
    label: "Unused seats",
    detail: "14 licensed seats on a collaboration tool, 6 with no login in 90+ days.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Tier mismatch",
    detail: "Enterprise plan on a design tool used by 3 people. Pro tier covers the same feature set.",
    color: "text-amber-400",
    tag: "Downgrade",
  },
  {
    label: "Renewal risk",
    detail: "Annual contract renews in 31 days — no usage review completed before auto-renewal.",
    color: "text-orange-400",
    tag: "Review now",
  },
  {
    label: "Consolidation opportunity",
    detail: "Three separate file-storage subscriptions. One vendor covers all three use cases.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
  {
    label: "Healthy spend",
    detail: "Core CRM — high adoption, reasonable per-seat cost, strong vendor fit. No action needed.",
    color: "text-emerald-400",
    tag: "Keep",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "SaaS Spend Audit Tool | StackSmart",
      description:
        "See how StackSmart turns billing exports into clear cut, consolidate, and renegotiate actions for growing teams.",
      url: absoluteUrl("/saas-spend-audit-tool"),
      dateModified: "2026-06-06",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "SaaS Spend Audit Tool", item: absoluteUrl("/saas-spend-audit-tool") },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a SaaS spend audit tool do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A SaaS spend audit tool analyzes your software subscriptions to find waste and savings opportunities. It identifies duplicate tools, unused seats, overpriced tiers, upcoming renewals, and consolidation opportunities — then produces a report with specific actions: what to cut, consolidate, renegotiate, or keep.",
          },
        },
        {
          "@type": "Question",
          name: "How is StackSmart different from enterprise SaaS management platforms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart is built for fast SMB review, not enterprise procurement. You upload a CSV billing export, and within minutes get a savings report with clear next actions. No integrations to configure, no multi-month rollout, no minimum seat counts. The sample report is public so you can judge the output before purchasing.",
          },
        },
        {
          "@type": "Question",
          name: "What data do I need to run a SaaS spend audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need a billing export — typically a CSV from your accounting tool, credit card statement, or expense platform. StackSmart works with line-item transaction data covering your recurring software charges. No bank credentials or live integrations are required for the core audit.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After uploading your billing data, StackSmart generates a savings report within minutes. The report groups tools by category, flags waste, surfaces overlaps, and provides clear action paths — ready to share with your team or use as a basis for vendor negotiations.",
          },
        },
        {
          "@type": "Question",
          name: "How much could a SaaS spend audit recover for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Savings vary widely depending on stack size, how recently the stack was last reviewed, and how many renewals have auto-processed without a decision. In stacks of 10 to 50 people, StackSmart commonly surfaces between $6,000 and $24,000 in possible annual review targets — a combination of cut candidates, over-provisioned seats, tier mismatches, and upcoming renewals worth renegotiating. These are estimates and possible targets, not guarantees. Your actual findings depend on your specific tools and billing history.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a SaaS spend audit tool starting from my credit card statement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The starting point is wherever you have billing data. For most business owners, the fastest starting point is the last three months of business credit card statements — this surfaces the most obvious recurring charges without requiring a formal export from accounting software. From there, pull a full billing export covering 12 months to catch annual charges, add-ons billed through platform marketplaces, and tools billed through different payment methods. Upload the combined export as a CSV and StackSmart categorises, flags waste, and prioritises findings without requiring bank access or live integrations. Software bills spread across multiple cards and accounts are common — a consolidated export gives you a clear picture of total recurring spend for the first time.",
          },
        },
        {
          "@type": "Question",
          name: "How does a SaaS spend audit tool help with the finance handoff to a bookkeeper or admin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a formatted savings report that is designed to be handed off directly to a bookkeeper, finance admin, or practice manager. The report lists specific actions — what to cancel, which seats to remove, which vendor conversations to open — with the annual dollar impact for each. The business owner makes the keep, cut, consolidate, or renegotiate decision; the bookkeeper or finance admin executes it without needing to understand the audit methodology. This is the standard workflow for owner-led SMBs where the owner identifies the problem and a finance admin handles the vendor paperwork.",
          },
        },
        {
          "@type": "Question",
          name: "Does a SaaS spend audit tool replace a software inventory spreadsheet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many owner-led SMBs, the useful output is the software inventory spreadsheet: every recurring charge grouped by category with owner, users, payment source, renewal date, and recommended action. StackSmart speeds up the work by turning a billing export into that inventory, adding duplicate-tool flags, ownerless renewal warnings, and a prioritised cut list so the owner is not starting from a blank spreadsheet.",
          },
        },
      ],
    },
  ],
};

export default function SaaSSpendAuditToolPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">SaaS spend audit tool</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Turn billing data into clear savings actions</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If you run a business with 5 to 50 staff and have not reviewed your software subscriptions recently, a billing export is all you need to start. Upload it and get a report that tells you what to cut, consolidate, renegotiate, and keep — no bank access, no integrations, no platform rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_saas_spend_audit_tool_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Direct answer block — GEO-friendly */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">What does a SaaS spend audit tool do?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300 max-w-[65ch]">
              A SaaS spend audit tool analyzes your recurring software subscriptions to surface waste and savings. It identifies duplicate tools across teams, unused or over-provisioned seats, tier mismatches where you are paying for features nobody uses, upcoming renewals at risk of auto-renewing without review, and consolidation opportunities where multiple tools serve the same job. The output is a structured report with four clear action buckets: keep, cut, consolidate, or renegotiate.
            </p>
          </div>
        </div>
      </section>


      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Built for the 20-person team asking “which subscriptions can we actually cut?”</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The latest buyer-intent signal was a small startup/operator asking whether all-in-one and AI workspaces really reduce fragmented subscription spend. That is exactly the owner-led SMB use case StackSmart serves: before buying another platform, upload the billing export or card statement and get a decision list for the tools already charging you. Live AU keyword checks also show software audit (110), software subscription management (90), and SaaS spend management (10) demand, while Plausible has started recording sparse visits to related high-intent pages.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">SaaS spend audit action map</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Upload a card statement, Xero/MYOB export, or software billing CSV — no employee surveillance or enterprise rollout required.</li>
                <li><span className="font-semibold text-white">2.</span> Group charges by tool, category, owner, billing cadence, renewal date, and likely team/use case.</li>
                <li><span className="font-semibold text-white">3.</span> Review duplicate tools, converted trials, inactive seats, AI workspace overlap, connector fees, annual renewals, and charges with no accountable owner.</li>
                <li><span className="font-semibold text-white">4.</span> Get an action-ready savings plan: keep, cancel, downgrade, consolidate, renegotiate, and assign a renewal owner for every meaningful line item.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Starting from the card statement */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Where most audits start</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Starting from your card statement</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most business owners do not have a clean inventory of their software subscriptions. What they do have is a credit card statement. Before uploading a formal billing export, a 30-minute card-statement pass is the fastest way to understand the scale of the problem and find the most obvious waste.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-sm font-semibold text-white">What a card-statement pass finds</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Recurring charges nobody on the team can identify",
                  "Trials that converted to paid plans and kept billing quietly",
                  "The same software category appearing twice on different cards",
                  "Annual charges that auto-renewed without a review decision",
                  "Tools billed to a personal card rather than the business account",
                  "Subscriptions where the person who signed up has left the business",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-7 text-dark-300">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dark-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-sm font-semibold text-white">What it misses — why the full export matters</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Annual charges that fall outside a 3-month statement window",
                  "Software billed through invoices or marketplace accounts, not cards",
                  "Per-seat costs where the seat count has drifted from current headcount",
                  "Tier mismatches where the plan is active but wrong-sized for actual usage",
                  "Upcoming renewal dates — 12 months of history needed to surface them reliably",
                  "Duplicate tools billed on different payment methods and easy to miss separately",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-7 text-dark-300">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dark-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm leading-7 text-dark-300 max-w-3xl">
              The card-statement pass and the full billing export audit are complementary. The statement pass takes 30 minutes and gives you a short list of obvious candidates. The full export — uploaded to StackSmart as a CSV — gives you the complete picture: every recurring charge, categorised, flagged for waste, with renewal risk dates and a prioritised action list you can hand to a bookkeeper or finance admin. No bank credentials or live integrations required for either.
            </p>
          </div>
        </div>
      </section>

      {/* How it works — 3 steps */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How it works</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              ["Upload billing data", "Start with a CSV export or invoice data. No bank access required for the core flow."],
              ["Get a savings report", "StackSmart groups tools, surfaces overlaps, and shows likely savings opportunities."],
              ["Take action faster", "Use the report to cut waste, consolidate tools, and renegotiate with more confidence."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need to get started */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Input requirements</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">What you need to get started</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most business owners can pull this together in under ten minutes. No finance team, no IT admin, no bank credentials required.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "A billing export",
                detail: "CSV or PDF from Xero, QuickBooks, MYOB, your business credit card, or your bank's transaction history. Cover at least six months — twelve is better for finding annual charges.",
                required: true,
              },
              {
                label: "Rough seat counts (optional)",
                detail: "If you know roughly how many people are on each tool, add it. StackSmart uses this to flag over-provisioned licences. If you do not have it, the report still runs.",
                required: false,
              },
              {
                label: "Renewal dates you know about (optional)",
                detail: "Any annual contracts renewing in the next 60 to 90 days are worth flagging. Search your email for 'subscription renewal' or 'auto-renewal notice' to find them quickly.",
                required: false,
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                  {item.required && (
                    <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-xs font-medium text-brand-300">Required</span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-7 text-dark-400">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
            <p className="text-sm font-semibold text-white">Why no bank access or live integrations?</p>
            <p className="mt-2 text-sm leading-7 text-dark-300 max-w-3xl">
              Most SaaS audit tools require you to connect live banking credentials or grant API access to each tool in your stack. For a business owner who just wants to find waste, that is a significant barrier. StackSmart works from a billing CSV — the same export you would already pull for tax time. No credentials, no integration setup, no waiting for a third-party connection to sync.
            </p>
          </div>
        </div>
      </section>

      {/* Proof: what the tool looks for */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">CSV-first audit logic</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Built for owners who want a savings snapshot, not another platform to manage</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-dark-300">StackSmart starts with the billing export because that is where owner-led SMB waste shows up first: monthly card charges, annual renewals, app-store subscriptions, marketplace add-ons, connector fees, and team-tier AI tools. The output groups each payment by job, assigns an action, and gives the owner/operator a practical cut list.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Integration add-on fees", "Zapier, Make, marketplace sync, reporting connector, and API add-on charges are grouped separately so hidden connector spend does not disappear inside generic software categories."],
              ["AI dashboard overlap", "ChatGPT, Claude, transcription, AI note tools, design AI, reporting AI, and meeting assistants are checked for active users and overlapping jobs before the next renewal."],
              ["Owner/use pass", "Each tool needs a named owner and a workflow. If nobody can explain why the app exists, it becomes a cancel, right-size, or investigate candidate."],
              ["Renewal calendar", "Annual contracts and converted trials are flagged before auto-renewal so the owner has time to renegotiate or cancel without a last-minute scramble."],
              ["Duplicate account cleanup", "Multiple accounts for the same vendor, departed-staff seats, old trials, and department-level duplicates are grouped into one review queue."],
              ["Which app can we cancel?", "Every finding is translated into a plain action: cut now, right-size seats, consolidate after a quiet week, renegotiate, or leave because it is clearly used."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample findings */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the report shows</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Every audit produces specific, actionable findings. Here are the types of issues StackSmart surfaces from real billing data.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {sampleFindings.map((f) => (
              <div key={f.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${f.color}`}>{f.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{f.tag}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-platform contrast */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Different from enterprise SaaS management software</h2>
            <p className="mt-3 text-sm leading-7 text-dark-300">Enterprise SaaS management platforms are built for IT procurement teams, app discovery, access governance, and ongoing administration. StackSmart is narrower on purpose: an owner-led SMB can upload billing data, see recurring software waste, and make practical savings decisions without implementing a new management layer.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/software-subscription-audit-checklist" className="rounded-full border border-dark-700 bg-dark-950 px-4 py-2 text-sm text-dark-200 hover:border-brand-500/60 hover:text-white">Audit checklist</a>
              <a href="/small-business-software-audit" className="rounded-full border border-dark-700 bg-dark-950 px-4 py-2 text-sm text-dark-200 hover:border-brand-500/60 hover:text-white">Small business audit</a>
              <a href="/ai-subscription-audit" className="rounded-full border border-dark-700 bg-dark-950 px-4 py-2 text-sm text-dark-200 hover:border-brand-500/60 hover:text-white">AI subscription audit</a>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical examples */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">By industry</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">What owners in your industry typically find</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software waste patterns differ by industry and how the business is run. These are the most common findings StackSmart surfaces in owner-led SMBs across the verticals we see most often.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                vertical: "Allied health & clinics",
                href: "/clinic-software-subscription-audit",
                findings: ["Duplicate booking platforms running simultaneously", "Practice management tool with unused patient portal or telehealth seats", "SMS reminder tool and booking platform with overlapping reminder features"],
              },
              {
                vertical: "Marketing & creative agencies",
                href: "/marketing-agency-software-stack-audit",
                findings: ["Three or more SEO or analytics tools with overlapping reports", "Design tool on an Enterprise plan used by two people", "Multiple project management tools across different client teams"],
              },
              {
                vertical: "Accounting & bookkeeping firms",
                href: "/accounting-firm-software-stack-audit",
                findings: ["E-sign tool duplicated with e-sign built into the practice management platform", "Document management tool alongside cloud storage that covers the same use case", "Former staff still licensed on practice management or tax software"],
              },
              {
                vertical: "Childcare & education operators",
                href: "/childcare-software-subscription-audit",
                findings: ["Rostering tool and payroll tool with overlapping scheduling features", "Communication platform alongside parent comms module in the management tool", "Enrolment tool still on a seat count from before last year's intake"],
              },
              {
                vertical: "Hospitality & multi-site venues",
                href: "/hospitality-group-software-audit",
                findings: ["Per-site POS add-ons that duplicate across locations", "Separate reservations tools for each venue when one covers the group", "Rostering platform and payroll tool both charging for scheduling features"],
              },
              {
                vertical: "Property services & real estate",
                href: "/real-estate-agency-software-audit",
                findings: ["CRM and portal platform both charging for e-signature or appraisal features", "Multiple inspection apps across a small team", "Marketing tool still on a full-agency tier for a principal-led office"],
              },
            ].map((item) => (
              <div key={item.vertical} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{item.vertical}</h3>
                  <a href={item.href} className="text-xs text-brand-400 hover:text-brand-300 transition-colors">Vertical guide →</a>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.findings.map((f) => (
                    <li key={f} className="flex gap-2 text-xs leading-6 text-dark-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-dark-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-dark-500">
            Not your industry? See the <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">full vertical audit guide</a> for 20+ business types.
          </p>
        </div>
      </section>

      {/* Savings estimator — static example */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Example estimate</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">What might a 25-person team recover?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Illustrative example based on patterns StackSmart commonly surfaces in stacks of 10–50 people. Your actual findings depend on your specific tools, billing history, and how recently the stack was reviewed.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Example inputs</p>
              <div className="mt-5 space-y-4">
                {[
                  ["Monthly software spend", "$4,200 / mo", "Across ~22 active tools and subscriptions"],
                  ["Active subscriptions", "22 tools", "Spanning 6 spend categories"],
                  ["Inactive licensed seats", "~18 seats", "No login recorded in 90+ days"],
                  ["Upcoming annual renewals", "3 contracts", "Auto-renewing within 60 days"],
                ].map(([label, value, note]) => (
                  <div key={label} className="border-b border-dark-800/60 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-xs text-dark-400">{label}</span>
                      <span className="text-sm font-semibold text-white tabular-nums">{value}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-dark-500">{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Possible review targets</p>
              <div className="mt-5 space-y-4">
                {[
                  { label: "Estimated annual waste band", value: "$9,000 – $18,000", color: "text-brand-300", note: "Possible range — often found in stacks this size" },
                  { label: "Cut candidates", value: "3 – 5 tools", color: "text-red-400", note: "Zero or near-zero usage in the past 90 days" },
                  { label: "Right-sizing opportunities", value: "2 – 4 tools", color: "text-amber-400", note: "Over-provisioned seats or mismatched tier" },
                  { label: "Renewal risk window", value: "$5,800 – $7,400", color: "text-orange-400", note: "Auto-renewing before a review decision is made" },
                ].map((row) => (
                  <div key={row.label} className="border-b border-brand-500/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-xs text-dark-400">{row.label}</span>
                      <span className={`text-sm font-semibold tabular-nums ${row.color}`}>{row.value}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-dark-500">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-dark-400">
                These figures are illustrative estimates based on typical patterns in 10–50 person software stacks. Actual results vary. StackSmart generates your specific findings from your billing data — not benchmarks.
              </p>
              <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row">
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_saas_spend_audit_tool_estimator" }} className="btn-primary text-sm">
                  See a real report
                </TrackLink>
                <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_estimator" }} className="btn-secondary text-sm">
                  View pricing
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs after */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Before vs after the audit</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Before</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Scattered charges across credit cards and invoices</li>
                <li>No visibility into tool overlap or unused seats</li>
                <li>Renewals auto-process without review</li>
                <li>Cost conversations based on gut feel</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">After</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Full inventory grouped by category and vendor</li>
                <li>Specific flags for waste, overlap, and tier mismatch</li>
                <li>Renewal calendar with risk dates highlighted</li>
                <li>Clear actions: cut, consolidate, renegotiate, or keep</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Finance / admin handoff */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Finance handoff</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Handing the findings to your bookkeeper or finance admin</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            In most owner-led businesses, the owner runs the initial audit and makes the decisions. The execution — cancellations, seat removals, vendor conversations — is usually better delegated to a bookkeeper, finance admin, or practice manager. StackSmart&apos;s report is formatted to support exactly that handoff.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Owner reviews and decides", "Pull the billing export and run it through StackSmart. Review the flagged findings — duplicate tools, ghost seats, tier mismatches, upcoming renewals — and make the keep, cut, consolidate, or renegotiate call on each one. This is the 20-minute finance-truth step: seeing clearly what the business is actually paying for."],
              ["Share the prioritised action list", "The StackSmart report is formatted to share directly with a bookkeeper or practice manager. They get a clear list of what to cancel, which seats to remove, and which vendor conversations to open — with the annual dollar impact on each item — without needing to understand the audit methodology."],
              ["Finance admin or bookkeeper executes", "Cancellations and seat removals do not require the business owner once decisions are documented. A finance admin or bookkeeper can work through the action list systematically, confirming each change in the accounting software or card statements as it processes. The report creates a clean handoff record for the next review cycle."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm leading-7 text-dark-300 max-w-3xl">
              Accounting and bookkeeping firms also use StackSmart with SMB clients as part of advisory practice — running a software spend review as part of EOFY or a business health check. The <a href="/accounting-firm-software-stack-audit" className="text-brand-400 hover:text-brand-300 transition-colors">accounting firm audit guide</a> and <a href="/bookkeeping-firm-software-stack-audit" className="text-brand-400 hover:text-brand-300 transition-colors">bookkeeping firm audit guide</a> cover the firm&apos;s own internal stack review and the client advisory context.
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for / not for */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is this the right fit?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led SMB with 5 to 50 staff — you pay the bills and you want to see what is on them</li>
                <li>Recurring software spend you have not reviewed recently</li>
                <li>Business owner or operator running the review without a dedicated ops or finance team</li>
                <li>Teams preparing for budget season or renewal pressure</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise procurement teams needing SSO and approval workflows</li>
                <li>Organizations requiring live usage telemetry from each tool</li>
                <li>Teams with fewer than 5 software subscriptions</li>
                <li>Companies that need contract lifecycle management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory spreadsheet output */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Output owners can act on</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">From billing export to software inventory, overlap map, and renewal calendar</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                A small business owner does not need another dashboard they have to maintain. They need the clean version of the spreadsheet they would build manually: every recurring software charge, category, active owner, payment source, rough usage signal, next renewal date, and recommended action. StackSmart turns a CSV export into that practical inventory and highlights the decisions most likely to recover money first.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">The questions the audit answers</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li>• Which app can we cancel because another tool already does the same job?</li>
                <li>• Which subscriptions have no named owner before renewal?</li>
                <li>• Which AI, reporting, booking, receipt, or e-sign tools have idle seats?</li>
                <li>• Which annual renewals need a keep/cancel decision in the next 90 days?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026-06-06 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-06-06 owner-led SMB proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">A billing-export audit before another dashboard</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The strongest current buying signal is not “we need enterprise SaaS management”. It is the owner or admin saying the software bills are scattered across card statements, QuickBooks/Xero, invoices, app stores, and direct debits. StackSmart is built for that moment: consolidate the billing evidence, find recurring waste, and produce actions the owner can hand to a bookkeeper, practice manager, or ops/admin lead.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/saas-subscription-management-software" event="homepage_cta_clicked" props={{ target: "subscription_management", location: "spend_audit_tool_2026_06_06" }} className="btn-secondary text-sm">Compare lightweight management</TrackLink>
                <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "spend_audit_tool_2026_06_06" }} className="btn-primary text-sm">Start with a $49 Snapshot</TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Best first-step data sources</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-white">Fastest:</span> 3-6 months of business card transactions to spot obvious monthly leakage.</li>
                <li><span className="font-semibold text-white">Most complete:</span> 12 months of Xero, QuickBooks, MYOB, invoices, direct debits, and marketplace receipts.</li>
                <li><span className="font-semibold text-white">Best proof:</span> seat/admin exports for AI, design, project, booking, CRM, reporting, and communication tools.</li>
                <li><span className="font-semibold text-white">Do not include:</span> bank logins, clinical/client records, employee files, participant notes, or confidential project content.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_spend_audit_tool"
            heading="Email yourself the sample report"
            body="Keep the proof asset handy while you compare options or share it with someone else on the team."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* Pricing routing */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Pick the path that fits your team</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Whether you need a one-time audit or ongoing savings visibility, StackSmart has a plan for that.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">One-time audit</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Snapshot — $49</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upload billing data once, get a full savings report with clear next actions. No subscription required.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_routing_snapshot" }} className="btn-primary mt-5 inline-block text-sm">
                Get Snapshot
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ongoing oversight</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Starter or Growth — from $29/mo</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Keep savings visibility running month over month with renewal alerts and ongoing recommendations.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_routing_recurring" }} className="btn-secondary mt-5 inline-block text-sm">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">See the output before you buy</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report and see the kind of buyer-facing output StackSmart delivers — then decide if it fits your review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_saas_spend_audit_tool_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit paths"
        title="Explore related StackSmart audit and savings pages"
        description="If you are looking for a SaaS spend audit tool, these related pages help you compare audit methods, software-cost optimisation approaches, and next-step decision support."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit hub",
            description: "The owner-led SMB guide to finding software waste — card-statement pass, owner-use accountability, and vertical routing for 20+ business types.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Use a practical 8-step checklist — including the owner-use pass — to structure the review before turning it into a report.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, AI subscription waste, e-sign duplication, and the 30-minute card-statement pass for accounting practices.",
          },
          {
            href: "/bookkeeping-firm-software-stack-audit",
            title: "Bookkeeping firm software stack audit",
            description: "Add-on sprawl, receipt capture duplication, software bills across multiple accounts, and AI seat right-sizing in Xero, QBO, and MYOB stacks.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "See a simple sequence for turning recurring software spend into concrete action.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "Compare StackSmart with broader cost-optimisation approaches and see where a report-first workflow fits.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
