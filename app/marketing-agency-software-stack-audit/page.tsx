import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Marketing Agency Software Stack Audit",
  description:
    "Marketing and creative agencies accumulate SEO tools, social scheduling apps, reporting platforms, design tools, project management, and proposal software with significant overlap. A software audit cuts the margin leak from unused and duplicate subscriptions.",
  path: "/marketing-agency-software-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/marketing-agency-software-stack-audit"),
      url: absoluteUrl("/marketing-agency-software-stack-audit"),
      name: "Marketing Agency Software Stack Audit | StackSmart",
      description:
        "Marketing and creative agencies accumulate SEO tools, social scheduling apps, reporting platforms, design tools, and project management software with significant overlap. A software audit finds the margin leak.",
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
          name: "Marketing Agency Software Stack Audit",
          item: absoluteUrl("/marketing-agency-software-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software should a marketing agency audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A marketing agency software audit should cover SEO and keyword research platforms (Ahrefs, Semrush, Moz), social media scheduling tools (Buffer, Hootsuite, Sprout Social, Later), client reporting platforms (Agency Analytics, DashThis), design and creative tools (Adobe CC, Figma, Canva), project management (Monday, Asana, ClickUp), proposal and contract tools, email and outreach platforms, and CRM or client management software. Focus the review on categories where per-seat pricing is highest and where client-driven signups have accumulated beyond active use.",
          },
        },
        {
          "@type": "Question",
          name: "Why do marketing agencies carry more software than other businesses their size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three patterns drive most of the accumulation: client-driven signups where a tool subscribed for one engagement keeps billing after the client offboards; new hire stack preferences where each senior strategist or designer brings their preferred SEO, reporting, or design platform; and pitch evaluation trials that convert to paid plans and never get cancelled. An agency that grew from 5 to 20 people over three years can carry 60-plus active subscriptions without a central review ever having been run.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit marketing agency software without disrupting client delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data only — no changes to live tools during the review. Export 6 to 12 months of charges from your accounting software or credit card, categorise by workflow type, and flag duplicates and client-linked tools still billing after offboarding. Plan any consolidations between campaigns or in a quieter delivery period rather than mid-execution.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart handle a marketing agency billing export?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart processes any billing export CSV and recognises the common SEO, social scheduling, design, project management, and reporting tool categories that appear in agency billing. It flags duplicates, per-client tools still active after offboarding, idle seats in high per-seat-cost platforms, and renewal risks — and produces a prioritised action list without requiring a platform rollout.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for a marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot from your billing export: every recurring charge grouped by workflow function (SEO, social scheduling, design, project management, client reporting, proposals, email, and CRM), a list of flagged attention areas including client-linked orphan subscriptions, zombie seats, duplicate platform pairs, and upcoming annual renewals, and a prioritised action list ranked by annual dollar impact. The agency founder or studio owner reviews the findings and can share the report with an ops manager, finance lead, or senior account manager to execute — a practical spend view, not an enterprise procurement audit.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "SEO and keyword research",
    issue:
      "Ahrefs, Semrush, and Moz licences all active across a team where one platform covers the full workflow. Per-seat pricing at enterprise or agency tiers makes running multiple SEO platforms simultaneously one of the highest-cost forms of software waste in a marketing agency.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Social media scheduling",
    issue:
      "Buffer, Hootsuite, Sprout Social, and Later all active — each adopted for different client accounts, different channel types, or different team leads. Significant feature overlap across all four, with most teams regularly using only one or two.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Client reporting and dashboards",
    issue:
      "Agency Analytics, DashThis, and Google Looker Studio Pro subscriptions covering the same client reporting workflow across different account managers — each signed up for their preferred platform rather than a shared team tool.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Design and creative",
    issue:
      "Adobe CC team plan, Figma Organisation, and Canva Pro all licensed across the same team. The full Adobe CC plan is expensive but rarely needed by most team members who use two or three applications, making individual app licensing or a scaled-down tier more cost-effective.",
    action: "Right-size",
    color: "text-amber-400",
  },
  {
    category: "Project management",
    issue:
      "Monday, Asana, ClickUp, and Notion all active — adopted by different account managers, inherited from client communication preferences, or carried from a previous team structure. No firm-wide consolidation has occurred as the team grew.",
    action: "Consolidate",
    color: "text-orange-400",
  },
  {
    category: "Proposals and contracts",
    issue:
      "Proposal tool (Better Proposals, Proposify) running alongside a CRM or project management platform that now includes contract templates and proposal generation — both billing at team tier for overlapping front-of-house workflow.",
    action: "Review",
    color: "text-brand-400",
  },
];

export default function MarketingAgencySoftwareStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Marketing agency software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Stop the margin leak in your marketing agency tool stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Small marketing and creative agencies accumulate software faster than almost any other business type — SEO platforms, social scheduling tools, client reporting apps, design subscriptions, project management tools, and proposal software all layer up across clients, hires, and pitches. Forgotten client-linked subscriptions, zombie seats from departed team members, and duplicate tools where nobody has asked what the agency is actually paying for are the patterns that leak real margin. StackSmart gives you a practical software-spend snapshot — not an enterprise procurement platform — so the agency founder or studio owner can see what&apos;s billing and act in a week.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "marketing_agency_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "marketing_agency_audit_secondary" }}
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
              How do marketing agencies audit their software stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from your business credit card or accounting software. Include any tools expensed by individual team members. Group recurring charges by workflow category: SEO and keyword research, social media scheduling, design and creative, project management, client reporting and analytics, proposals and contracts, email and outreach, and finance or billing. Flag categories with more than one active tool, particularly SEO platforms and social scheduling tools where per-seat pricing is highest. Identify any per-client tool subscriptions still billing after the client engagement ended. These are immediate cancellation candidates. Rank flagged items by annual cost and act on the highest-value items first.
            </p>
          </div>
        </div>
      </section>

      {/* Why agencies accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why marketing agencies accumulate software waste faster</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive the majority of tool accumulation at owner-led marketing and creative studios.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Per-client tool signups that outlive the engagement",
                "A social scheduling tool subscribed for one client's channels, an SEO platform licensed for a specific campaign, or a reporting integration kept for a client dashboard — all quietly continue billing after the client offboards. Without a client-linked subscription review, these accumulate.",
              ],
              [
                "New hire stack preferences",
                "Each senior hire or strategist brings their preferred SEO platform, reporting tool, or design application. Without a standard stack policy, the agency ends up with parallel subscriptions in the same category across team members — each paying for the same type of tool.",
              ],
              [
                "Pitch evaluation trials that convert to paid",
                "Tools trialled during capability-building periods or pitch preparation convert to paid plans when the trial ends. When the pitch is won or lost, the evaluation tools often stay on the billing run for months or years without a cancellation decision being made.",
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
          <h2 className="text-2xl font-semibold text-white">Marketing agency software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where overlap and unused spend appear most consistently in marketing and creative agency billing exports.
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
          <h2 className="text-2xl font-semibold text-white">How to audit a marketing agency software stack</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This works in a quieter delivery week. No disruption to active client campaigns required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Pull all billing data",
                "Export 6 to 12 months of charges from your business credit card, accounting software (Xero, MYOB, QBO), or expense management tool. Include any tools expensed by individual team members on personal cards. Cover both monthly and annual subscriptions — SEO and design platforms frequently bill annually.",
              ],
              [
                "Step 2 — Group by workflow category",
                "Separate every subscription into a workflow bucket: SEO and keyword research, social scheduling, design and creative, project management, client reporting and analytics, proposals and contracts, email and outreach, and business operations. Running this across team members' preferences quickly surfaces parallel subscriptions in the same category.",
              ],
              [
                "Step 3 — Flag per-client tools still billing",
                "Identify any subscription originally set up for a specific client or campaign where that client has since offboarded. These are the cleanest cancellation candidates — no migration or consolidation planning needed. Flag every tool tied to a client account that is no longer active.",
              ],
              [
                "Step 4 — Prioritise the highest-cost overlaps",
                "SEO platforms and design tool suites carry the highest per-seat cost in a marketing agency stack. Review these categories first. Calculate the annual cost difference between running multiple platforms versus consolidating to the one your team uses most heavily.",
              ],
              [
                "Step 5 — Consolidate to a standard stack",
                "Cancel clearly redundant and per-client tools. Establish a standard tool for each workflow category and plan migrations between client campaigns. Renegotiate annual contracts approaching renewal using current headcount and usage data as leverage.",
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
          <h2 className="text-2xl font-semibold text-white">What a marketing agency audit typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from marketing and creative agency billing exports. Amounts vary by team size and tool mix.
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
                  ["Three SEO platforms active across a team of 10", "Consolidate to one", "$2,400 – $9,600/yr"],
                  ["Post-client social scheduling subscriptions still billing", "Cancel", "$480 – $2,400/yr"],
                  ["Adobe CC team plan, full suite rarely accessed", "Downgrade to individual apps", "$1,200 – $4,800/yr"],
                  ["Four project management tools across 12 team members", "Consolidate to one", "$1,800 – $7,200/yr"],
                  ["Reporting tool per account manager instead of shared", "Consolidate to team plan", "$960 – $3,600/yr"],
                  ["Annual proposal tool, CRM now includes proposal templates", "Cancel standalone tool", "$480 – $1,800/yr"],
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
            StackSmart produces a practical software-spend snapshot for owner-led marketing and creative agencies — not an enterprise procurement platform. A report the agency founder or studio owner can review and act on in a week, or hand to an ops or finance lead to execute.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by workflow function — SEO, social scheduling, design, project management, client reporting, proposals, email, and CRM. No manual sorting or spreadsheet required."],
              ["Flagged attention areas", "Client-linked subscriptions that outlived the engagement, zombie seats, duplicate platform pairs in the same category, and annual contracts approaching renewal — recurring payments with no active owner reviewing them."],
              ["Prioritised action list", "Cancel, consolidate, downgrade, and renegotiate — ranked by annual dollar impact. SEO and design platforms carry the highest per-seat cost in an agency stack, so those come first."],
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
              The agency founder or studio owner typically runs the initial billing review and owns the cancellation and renegotiation decisions. The completed savings report is shared with an ops manager, finance lead, or senior account manager to handle seat removals, client-linked subscription clean-ups, and vendor conversations. It can be used as a quarterly spend check before renewal season hits — a practical line-by-line view of what the agency is paying for before anyone goes through card statements manually.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for marketing agencies</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the categorisation step and surfaces per-client orphan tools automatically.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from accounting tool and collect team card expenses separately</li>
                <li>Manually categorise each subscription by workflow type</li>
                <li>Cross-reference per-client tool signups against active client list</li>
                <li>Review each SEO and design platform for active user counts</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Repeat from scratch at the next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across marketing agency tool categories</li>
                <li>Flags duplicate SEO tools, idle client subscriptions, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready for studio leads or owners</li>
                <li>Repeatable baseline for the next annual or quarterly review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your agency?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led marketing, creative, content, or digital agency with 4 to 40 staff</li>
                <li>Multiple SEO, social scheduling, reporting, and design subscriptions accumulated across clients and hires</li>
                <li>No dedicated IT or ops team managing tool purchases and renewals</li>
                <li>You want a report and action list, not a platform rollout</li>
                <li>Billing data accessible from accounting software, credit card, or expense tool</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large integrated marketing group with a central procurement function</li>
                <li>Primary need is software governance, SSO, or identity management</li>
                <li>Fewer than six active software subscriptions</li>
                <li>Requires automated provisioning or enterprise compliance controls</li>
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
                "What software should a marketing agency audit?",
                "A marketing agency software audit should cover SEO and keyword research platforms (Ahrefs, Semrush, Moz), social media scheduling tools (Buffer, Hootsuite, Sprout Social, Later), client reporting platforms (Agency Analytics, DashThis), design and creative tools (Adobe CC, Figma, Canva), project management (Monday, Asana, ClickUp), proposal and contract tools, email and outreach platforms, and CRM or client management software. Focus the review on categories where per-seat pricing is highest and where client-driven signups have accumulated beyond active use.",
              ],
              [
                "Why do marketing agencies carry more software than other businesses their size?",
                "Three patterns drive most of the accumulation: client-driven signups where a tool subscribed for one engagement keeps billing after the client offboards; new hire stack preferences where each senior strategist or designer brings their preferred SEO, reporting, or design platform; and pitch evaluation trials that convert to paid plans and never get cancelled. An agency that grew from 5 to 20 people over three years can carry 60-plus active subscriptions without a central review ever having been run.",
              ],
              [
                "How do I audit marketing agency software without disrupting client delivery?",
                "Start with billing data only — no changes to live tools during the review. Export 6 to 12 months of charges from your accounting software or credit card, categorise by workflow type, and flag duplicates and client-linked tools still billing after offboarding. Plan any consolidations between campaigns or in a quieter delivery period rather than mid-execution.",
              ],
              [
                "Can StackSmart handle a marketing agency billing export?",
                "Yes. StackSmart processes any billing export CSV and recognises the common SEO, social scheduling, design, project management, and reporting tool categories that appear in agency billing. It flags duplicates, per-client tools still active after offboarding, idle seats in high per-seat-cost platforms, and renewal risks — and produces a prioritised action list without requiring a platform rollout.",
              ],
              [
                "What does the StackSmart output look like for a marketing agency?",
                "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by workflow function, a list of flagged attention areas (client-linked orphan subscriptions, zombie seats, duplicate platform pairs, and upcoming renewals), and a prioritised action list ranked by annual dollar impact. The agency founder reviews the findings and can share the report with an ops manager, finance lead, or account manager to execute — a practical spend view, not an enterprise procurement audit.",
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
            location="marketing_agency_software_audit"
            heading="See what a marketing agency audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your agency billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next SEO renewal hits</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your agency&apos;s review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "marketing_agency_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "marketing_agency_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for agencies and owner-led SMBs"
        description="These pages cover the SMB audit hub, the checklist, and guides for other owner-led SMB verticals where software spend is unreviewed."
        links={[
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, payroll, document, and e-sign stack audit for small accounting and bookkeeping firms.",
          },
          {
            href: "/bookkeeping-firm-software-stack-audit",
            title: "Bookkeeping firm software stack audit",
            description: "Add-on sprawl, e-sign and receipt duplication, and tier creep in Xero, QBO, and MYOB ecosystem stacks.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Booking, telehealth, recalls, and admin subscription audit for owner-led allied health practices.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your agency stack.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into categorised findings and clear next actions.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
