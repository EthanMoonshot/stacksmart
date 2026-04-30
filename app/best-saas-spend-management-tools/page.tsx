import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Best SaaS Spend Management Tools for SMBs",
  description:
    "Compare the best SaaS spend management tools for SMBs — StackSmart, enterprise platforms, spreadsheets, and accounting-only reviews. Find the right fit for your team size and goal.",
  path: "/best-saas-spend-management-tools",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/best-saas-spend-management-tools"),
      url: absoluteUrl("/best-saas-spend-management-tools"),
      name: "Best SaaS Spend Management Tools for SMBs | StackSmart",
      description:
        "Compare the best SaaS spend management tools for SMBs — StackSmart, enterprise platforms, spreadsheets, and accounting-only reviews.",
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
          name: "Best SaaS Spend Management Tools",
          item: absoluteUrl("/best-saas-spend-management-tools"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best SaaS spend management tool for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best tool depends on your goal. If you need a fast report from billing data to find waste and act on it quickly, a lightweight report-first tool like StackSmart fits most SMBs. If you need ongoing procurement workflow, approval controls, and vendor lifecycle management, an enterprise SaaS management platform makes more sense — but comes with a much longer rollout and higher cost.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a SaaS spend management platform and a spend audit tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A SaaS management platform provides ongoing visibility through integrations with every tool you use — agent-based discovery, usage telemetry, provisioning controls, and approval workflows. A spend audit tool focuses on a point-in-time review: you upload billing data, get a structured report with findings, and act on it. Platforms require months to roll out and integrate. Audit tools deliver a report in minutes from a billing export.",
          },
        },
        {
          "@type": "Question",
          name: "Can a spreadsheet replace a SaaS spend management tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A spreadsheet can work for very small stacks or teams doing a one-off review. It becomes slow and error-prone once you have 20 or more subscriptions, multiple billing sources, or need to track renewals and seat counts systematically. A report-first tool like StackSmart is faster and produces a more structured, shareable output than a manually maintained spreadsheet.",
          },
        },
        {
          "@type": "Question",
          name: "Is reviewing SaaS spend in accounting software enough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accounting software shows you what you paid. It does not categorise subscriptions by function, flag duplicates, identify seat waste, surface upcoming renewal risks, or give you a prioritised action list. For a basic audit, you can export data from accounting software and feed it into a structured review — but the software itself does not do the analysis for you.",
          },
        },
      ],
    },
  ],
};

const approaches = [
  {
    name: "Report-first audit tool",
    example: "StackSmart",
    strengths: [
      "Upload billing export, get report in minutes",
      "No integrations or rollout required",
      "Works from any billing data source",
      "Clear keep/cut/consolidate/renegotiate actions",
      "Shareable output without internal setup",
    ],
    limitations: [
      "Point-in-time review, not ongoing monitoring",
      "No live usage telemetry without integrations",
      "Does not manage provisioning or approvals",
    ],
    fit: "SMBs wanting fast savings clarity from billing data",
    notFit: "Teams needing ongoing lifecycle management",
    highlight: true,
  },
  {
    name: "Enterprise SaaS management platform",
    example: "Zylo, Torii, Productiv",
    strengths: [
      "Continuous visibility through tool integrations",
      "Usage telemetry and seat tracking per tool",
      "Approval workflows and procurement controls",
      "Vendor lifecycle and contract management",
    ],
    limitations: [
      "Multi-month rollout and integration effort",
      "Significant cost — often per-seat pricing",
      "Designed for IT/procurement teams, not SMB owners",
      "Overkill for teams with fewer than 200 seats",
    ],
    fit: "Enterprise IT or procurement teams with large SaaS estates",
    notFit: "Owner-led SMBs wanting a fast, lightweight review",
    highlight: false,
  },
  {
    name: "Manual spreadsheet review",
    example: "Self-built in Excel or Google Sheets",
    strengths: [
      "No cost beyond your time",
      "Fully customisable to your categories",
      "Works for any billing source",
    ],
    limitations: [
      "Slow to categorise and cross-reference",
      "No duplicate detection or renewal tracking",
      "Output not easily shareable or structured",
      "Starts from scratch each review cycle",
    ],
    fit: "Very small stacks (under 15 tools), or first-time review",
    notFit: "Anything with 20+ subscriptions or multiple billing sources",
    highlight: false,
  },
  {
    name: "Accounting software review",
    example: "Xero, QuickBooks, MYOB",
    strengths: [
      "All charges visible in one place",
      "Easy to export billing data for further analysis",
      "Already in use for most businesses",
    ],
    limitations: [
      "Shows charges only — no categorisation or analysis",
      "No duplicate detection or waste flagging",
      "No renewal alerts or seat-count analysis",
      "Produces data, not a report",
    ],
    fit: "Starting point for data export, not a standalone audit approach",
    notFit: "Teams needing actionable findings from billing data",
    highlight: false,
  },
];

export default function BestSaaSSpendManagementToolsPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">SaaS spend management tools</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The right spend management tool depends on your actual problem
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Some teams need ongoing visibility and procurement workflow. Others need a fast answer on where software waste is hiding. The best SaaS spend management tool for your SMB depends on whether your priority is speed, process, or control.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "seo_best_tools_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "seo_best_tools_secondary" }}
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
              What is the best SaaS spend management tool for a small business?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              For most owner-led SMBs, the answer is a lightweight report-first tool that works from billing exports without requiring integrations or a platform rollout. Enterprise SaaS management platforms are built for IT procurement teams, not small business owners. A spreadsheet can work for very small stacks but becomes slow and unstructured past 15 or 20 subscriptions. Accounting software shows you charges but does not categorise, flag duplicates, or produce a prioritised action list. If the goal is finding waste and acting on it quickly, a tool that produces a structured report from billing data is the fastest path.
            </p>
          </div>
        </div>
      </section>

      {/* Three key decision frames */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Three questions to pick the right approach</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Do you need a fast answer or ongoing visibility?",
                "A report-first tool gets you findings from billing data in minutes. An enterprise platform gives continuous visibility but takes months to roll out. Most SMBs need the answer before they need the system.",
              ],
              [
                "Do you have an IT/ops team or is it just you?",
                "Enterprise SaaS platforms are built for teams with a dedicated IT or procurement function. If the founder, ops lead, or practice manager is running the review, a lighter tool will fit the actual workflow better.",
              ],
              [
                "Do you need procurement workflow or cost clarity?",
                "Approval controls, provisioning, and contract lifecycle management matter at enterprise scale. Most SMBs need to know what they are paying for and what to cut — that is a different problem with a simpler solution.",
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

      {/* Comparison table */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Comparing the four approaches</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Each approach suits a different team size, goal, and level of procurement maturity.
          </p>
          <div className="mt-8 space-y-6">
            {approaches.map((a) => (
              <div
                key={a.name}
                className={`rounded-2xl border p-6 sm:p-8 ${
                  a.highlight
                    ? "border-brand-400/30 bg-brand-500/5"
                    : "border-dark-700 bg-dark-900/70"
                }`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{a.name}</h3>
                    <p className="mt-0.5 text-xs text-dark-400">{a.example}</p>
                  </div>
                  {a.highlight && (
                    <span className="w-fit rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-0.5 text-xs font-medium text-brand-300">
                      Where StackSmart fits
                    </span>
                  )}
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-400">Strengths</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-dark-300">
                      {a.strengths.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-dark-400">Limitations</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-dark-400">
                      {a.limitations.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 border-t border-dark-800/60 pt-4">
                  <div>
                    <p className="text-xs font-medium text-dark-400">Best fit</p>
                    <p className="mt-1 text-sm text-dark-300">{a.fit}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-dark-400">Not the best fit</p>
                    <p className="mt-1 text-sm text-dark-300">{a.notFit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where StackSmart fits */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Where StackSmart fits in this landscape</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300 max-w-3xl">
            <p>
              StackSmart is a report-first SaaS spend audit tool. You upload a billing export — a CSV from Xero, QuickBooks, your credit card, or expense platform — and get a structured savings report in minutes. The report categorises your subscriptions, flags duplicates and waste, highlights upcoming renewal risks, and gives you specific keep, cut, consolidate, and renegotiate actions.
            </p>
            <p>
              It is not an enterprise procurement suite, a discovery agent platform, or a full SaaS lifecycle management system. It is built to help owner-led SMBs — businesses with 5 to 50 people and no dedicated IT or ops team — find and act on software waste without a lengthy rollout.
            </p>
            <p>
              The public sample report is available before you purchase anything. That is intentional: judge the output quality and format before deciding if it fits your review.
            </p>
          </div>
        </div>
      </section>

      {/* SMB fit / not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your team?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led business with 5 to 50 staff</li>
                <li>Recurring software spend you have not reviewed recently</li>
                <li>Founder, ops lead, finance manager, or practice manager running the review</li>
                <li>You want a structured report to share internally, not a platform to manage</li>
                <li>Billing data available from accounting tool, credit card, or invoice records</li>
                <li>You want findings within days, not after a multi-month integration rollout</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise IT or procurement teams needing discovery agents and SSO controls</li>
                <li>Organisations needing automated provisioning and user lifecycle management</li>
                <li>Teams where the primary goal is compliance and security governance</li>
                <li>Companies requiring full contract lifecycle management with vendor negotiation services</li>
                <li>Fewer than five active software subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / sample findings */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a StackSmart report typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from SMB billing exports. Actual results depend on stack size and time since last review.
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
                  ["Enterprise tier with Pro-level usage", "Downgrade tier", "$600 – $2,400/yr"],
                  ["Annual renewal approaching without review", "Renegotiate before auto-renew", "$500 – $4,000/yr"],
                  ["Three file-storage subscriptions, one workflow", "Consolidate", "$480 – $1,800/yr"],
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

      {/* FAQ */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What is the best SaaS spend management tool for a small business?",
                "For most owner-led SMBs, the answer is a lightweight report-first tool that works from billing exports without requiring integrations or a platform rollout. Enterprise SaaS management platforms are built for IT procurement teams, not small business owners. If the goal is finding waste and acting on it quickly, a tool that produces a structured report from billing data is the fastest path.",
              ],
              [
                "What is the difference between a SaaS spend management platform and a spend audit tool?",
                "A SaaS management platform provides ongoing visibility through integrations with every tool you use — agent-based discovery, usage telemetry, provisioning controls, and approval workflows. A spend audit tool focuses on a point-in-time review: you upload billing data, get a structured report with findings, and act on it. Platforms require months to roll out and integrate. Audit tools deliver a report in minutes from a billing export.",
              ],
              [
                "Can a spreadsheet replace a SaaS spend management tool?",
                "A spreadsheet can work for very small stacks or teams doing a one-off review. It becomes slow and error-prone once you have 20 or more subscriptions, multiple billing sources, or need to track renewals and seat counts systematically. A report-first tool like StackSmart is faster and produces a more structured, shareable output than a manually maintained spreadsheet.",
              ],
              [
                "Is reviewing SaaS spend in accounting software enough?",
                "Accounting software shows you what you paid. It does not categorise subscriptions by function, flag duplicates, identify seat waste, surface upcoming renewal risks, or give you a prioritised action list. For a basic audit, you can export data from accounting software and feed it into a structured review — but the software itself does not do the analysis for you.",
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
            location="seo_best_saas_spend_management_tools"
            heading="Send the sample report to your inbox"
            body="A simple way to keep the proof asset handy while you compare StackSmart against other spend-management options."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See if the output matches what you need</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Before comparing platforms, open the public sample report and judge whether the output is already enough for your use case.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "seo_best_tools_footer" }}
                className="btn-primary text-sm sm:text-base"
              >
                Open sample report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "seo_best_tools_footer" }}
                className="btn-secondary text-sm sm:text-base"
              >
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related pages"
        title="Explore adjacent spend-review paths"
        description="If you are comparing SaaS spend tools, these pages help you move from broad comparison into a specific audit, checklist, or vertical-specific guide."
        links={[
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A practical 30-day audit workflow for owner-led teams without a dedicated finance or IT function.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "Owner-led SMB guide to finding and acting on software waste without a procurement team.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing exports into structured findings and clear next actions.",
          },
          {
            href: "/cledara-alternative",
            title: "Cledara alternative for small teams",
            description: "Compare whether you need a spend platform or a lighter report-first workflow.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See where StackSmart fits when the main job is fast savings visibility rather than process control.",
          },
          {
            href: "/saas-spend-management",
            title: "SaaS spend management guide",
            description: "Compare three approaches to spend management and find the right starting point for your team.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
