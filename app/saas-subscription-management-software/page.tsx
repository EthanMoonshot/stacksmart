import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Subscription Management Software for Small Business",
  description:
    "Compare software subscription management for owner-led SMBs. Find duplicate tools, ownerless renewals, leaver seats, add-on fees, and the fastest billing-export audit path before buying an enterprise platform.",
  path: "/saas-subscription-management-software",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "SaaS Subscription Management Software for Small Business | StackSmart",
      description:
        "Compare SaaS subscription management software for small businesses and find the right approach for your team size.",
      url: "https://stacksmart.app/saas-subscription-management-software",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "SaaS Subscription Management Software", item: "https://stacksmart.app/saas-subscription-management-software" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is SaaS subscription management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaaS subscription management software helps businesses track, organize, and optimize their recurring software subscriptions. Core features include building a tool inventory, monitoring spend across payment methods, flagging waste from unused licenses or duplicate tools, tracking renewal dates, and producing actionable savings recommendations. Options range from lightweight report-based tools to enterprise platforms with full procurement workflows.",
          },
        },
        {
          "@type": "Question",
          name: "What should small businesses look for in subscription management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Owner-led SMBs should prioritize fast time to first output, low setup overhead, and actionable recommendations over governance features. A 2026 proof refresh should start with billing exports, card statements, and accounting data, then flag duplicate tools, ownerless renewals, leaver or contractor seats, connector fees, converted trials, and specific keep, cancel, downgrade, consolidate, or renegotiate actions without SSO integration, bank access, IT involvement, or multi-week implementation.",
          },
        },
        {
          "@type": "Question",
          name: "How much does SaaS subscription management software cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enterprise SaaS management platforms typically cost $30K-$150K per year and require dedicated staff to manage. Lighter tools like StackSmart start from $49 for a one-time savings report or $29/month for ongoing tracking. Spreadsheet-based tracking is free but costs 8-20 hours per quarter in manual work.",
          },
        },
        {
          "@type": "Question",
          name: "When does a small business need subscription management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need subscription management when your team has more than 20 SaaS tools, when surprise renewals or duplicate subscriptions are showing up on credit card statements, or when nobody on the team can confidently say what you are paying for software and whether each tool is still earning its cost.",
          },
        },
      ],
    },
  ],
};

export default function SaaSSubscriptionManagementSoftwarePage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Comparison guide</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SaaS subscription management software for small businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If your main problem is recurring software spend getting messy, the first question is whether you need a full management platform or a fast report that shows where the waste is hiding.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_subscription_management_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_subscription_management_secondary" }} className="btn-secondary text-sm sm:text-base">
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
            <h2 className="text-2xl font-semibold text-white">What is SaaS subscription management software?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              SaaS subscription management software helps businesses track, organize, and optimize their recurring software subscriptions. Core features include building a tool inventory, monitoring spend across payment methods, flagging waste from unused licenses or duplicate tools, tracking renewal dates, and producing actionable savings recommendations. Options range from lightweight report-based tools to enterprise platforms with full procurement workflows.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">What should small businesses look for first?</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              Owner-led SMBs should prioritize fast time to first output, low setup overhead, and actionable recommendations over governance features. A 2026 proof refresh should start with billing exports, card statements, and accounting data, then flag duplicate tools, ownerless renewals, leaver or contractor seats, connector fees, converted trials, and specific keep, cancel, downgrade, consolidate, or renegotiate actions without SSO integration, bank access, IT involvement, or multi-week implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Three approaches comparison */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Three categories of subscription management software</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Subscription management tools fall into three categories. Each solves a different version of the problem, and the right choice depends on team size, urgency, and budget.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Category 1</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Manual spreadsheet tracking</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-dark-300">
                <li>Pull billing data into a spreadsheet manually</li>
                <li>Cross-reference tools with team usage</li>
                <li>Time cost: 8-20 hours per quarter</li>
                <li>Prone to gaps, stale data, missed renewals</li>
                <li>No automated alerts or overlap detection</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-dark-400">Best for: teams under 10 with fewer than 20 tools</p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Category 2</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Enterprise subscription management platform</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-dark-300">
                <li>Full procurement workflow and approval gates</li>
                <li>SSO/SCIM integrations for per-user usage data</li>
                <li>6-12 week implementation timeline</li>
                <li>Requires dedicated ops/IT staff to manage</li>
                <li>Typical cost: $30K-$150K/year</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-dark-400">Best for: 500+ employees with formal procurement</p>
            </div>

            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Category 3</p>
              <h3 className="mt-3 text-lg font-semibold text-white">StackSmart savings report</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-dark-300">
                <li>Upload billing exports, get a savings report</li>
                <li>Flags waste, overlap, renewal risk, and pricing mismatch</li>
                <li>Time to first output: under 1 hour</li>
                <li>No SSO integration or IT rollout needed</li>
                <li>From $49 one-time or $29/month ongoing</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-brand-300">Best for: SMBs that want fast answers now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use-case decision matrix */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Decision matrix: which approach fits your team</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Use this matrix to match your situation to the right category of subscription management software.
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-dark-500 sm:hidden">Swipe table &rarr;</p>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-dark-800 sm:mt-8">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="py-3 pr-4 pl-4 font-semibold text-dark-300">Your situation</th>
                  <th className="py-3 px-4 font-semibold text-dark-300">Spreadsheet</th>
                  <th className="py-3 px-4 font-semibold text-dark-300">Enterprise platform</th>
                  <th className="py-3 px-4 font-semibold text-brand-300">StackSmart</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Under 20 tools, 1-10 people</td>
                  <td className="py-3 px-4">Workable</td>
                  <td className="py-3 px-4">Overkill</td>
                  <td className="py-3 px-4 text-brand-300">Fast and sufficient</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">20-150 tools, 10-200 people</td>
                  <td className="py-3 px-4">Too slow, gaps appear</td>
                  <td className="py-3 px-4">Heavy for the need</td>
                  <td className="py-3 px-4 text-brand-300">Right fit</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">150+ tools, compliance required</td>
                  <td className="py-3 px-4">Not viable</td>
                  <td className="py-3 px-4">Right fit</td>
                  <td className="py-3 px-4 text-brand-300">Good starting point</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Need answers this week</td>
                  <td className="py-3 px-4">If you have time</td>
                  <td className="py-3 px-4">Not possible</td>
                  <td className="py-3 px-4 text-brand-300">Under 1 hour</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Need approval workflows</td>
                  <td className="py-3 px-4">Manual process</td>
                  <td className="py-3 px-4">Built-in</td>
                  <td className="py-3 px-4 text-brand-300">Not included</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 pl-4 font-medium text-white">Need per-user usage data</td>
                  <td className="py-3 px-4">Not possible</td>
                  <td className="py-3 px-4">Via SSO/SCIM</td>
                  <td className="py-3 px-4 text-brand-300">Not included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sample outputs */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the StackSmart report produces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Instead of a dashboard you need to learn, StackSmart produces a report with specific findings and actions. Here is what the output looks like for subscription management.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Complete subscription inventory</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Every recurring software charge across all billing sources — organized by vendor, cost, billing frequency, and category. No manual entry required. You get the full picture of what you are paying for without cross-referencing spreadsheets.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Waste and overlap flags</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Specific findings like &quot;Two project management tools active at combined $11,400/year&quot; or &quot;Design tool at 50-seat plan with billing patterns suggesting 12 active users.&quot; Each flag includes a recommended action — cancel, downgrade, or consolidate.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Renewal calendar with risk flags</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upcoming renewal dates sorted by urgency, with risk flags for contracts where action is needed before auto-renewal. Includes estimated savings potential for each renewal opportunity so you know where to focus effort.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Savings recommendations</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                A prioritized list of savings actions — not just data, but what to do about it. Each recommendation includes the estimated savings amount, the effort required, and a suggested timeline. Typical first-report savings: 15-30% of total SaaS spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">The first subscription-management job is not buying a platform. It is finding the waste you can act on this month.</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                For an owner-led business with 5-50 staff, software subscription management usually starts with messy billing reality: the old designer still has a Figma seat, a clinic manager bought an SMS add-on, the agency has two project tools, and a renewal owner left six months ago. StackSmart turns billing exports, card statements, Xero or QuickBooks data, direct debits, and marketplace invoices into a practical decision list before you spend weeks implementing enterprise procurement software.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Find", "Every recurring software, app, connector, API, SMS, reporting, marketplace, and add-on charge across uploaded billing sources."],
                  ["Explain", "Which charge has an owner, which workflow it supports, whether it overlaps another tool, and whether the billing tier still matches actual use."],
                  ["Act", "Assign keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner actions with the highest-value cleanups first."],
                  ["Protect", "Use billing data only. No bank connection, no SSO rollout, no sensitive client, patient, or employee records needed for the first pass."],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-dark-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-500/25 bg-brand-500/5 p-6">
              <h3 className="text-lg font-semibold text-white">Where 5-50 staff teams usually leak subscription spend</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-brand-300">Leavers and contractors:</span> seats still active after staff, clinicians, designers, coordinators, bookkeepers, or project contractors leave.</li>
                <li><span className="font-semibold text-brand-300">Ownerless renewals:</span> annual tools renewing after the admin, practice manager, or agency producer who bought them has moved on.</li>
                <li><span className="font-semibold text-brand-300">Connector fees:</span> paid integrations, reporting packs, SMS bundles, marketplace modules, and API add-ons that escaped the main software budget.</li>
                <li><span className="font-semibold text-brand-300">Duplicate categories:</span> two CRMs, two booking tools, two design apps, two file stores, or multiple project boards doing the same job.</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "seo_subscription_management_refresh" }} className="btn-secondary text-sm">
                  Use the audit checklist
                </TrackLink>
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_subscription_management_refresh" }} className="btn-primary text-sm">
                  See the sample decision list
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_subscription_management_software"
            heading="Send the sample report to your inbox"
            body="See the exact output StackSmart produces — subscription inventory, waste flags, renewal risk, and savings recommendations. Judge the quality before committing to any tool."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* Implementation time comparison */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Implementation timeline comparison</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The time from &quot;we need to manage our subscriptions&quot; to &quot;we have actionable data&quot; varies dramatically by approach.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Spreadsheet approach</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">
                    Day 1-3: Collect billing data from all payment sources. Day 4-7: Build the spreadsheet, cross-reference tools with team members. Day 8-14: Research renewal dates from contracts and vendor portals. Ongoing: 4-8 hours per quarter to maintain accuracy. First actionable output: 2 weeks.
                  </p>
                </div>
                <span className="shrink-0 rounded-lg border border-dark-700 bg-dark-900 px-3 py-1 text-sm font-medium text-dark-300">~2 weeks</span>
              </div>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Enterprise platform</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">
                    Week 1-2: Vendor selection and procurement approval. Week 3-6: SSO integration, agent deployment, data ingestion. Week 7-10: Configuration, workflow setup, team training. Week 11-12: First usable dashboard with populated data. First actionable output: 3 months.
                  </p>
                </div>
                <span className="shrink-0 rounded-lg border border-dark-700 bg-dark-900 px-3 py-1 text-sm font-medium text-dark-300">~3 months</span>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-dark-900/70 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-brand-300">StackSmart savings report</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">
                    Step 1: Export billing data from your payment sources (10 minutes). Step 2: Upload to StackSmart (2 minutes). Step 3: Review the savings report with inventory, waste flags, renewal calendar, and recommendations (30 minutes). First actionable output: under 1 hour.
                  </p>
                </div>
                <span className="shrink-0 rounded-lg border border-brand-500/30 bg-dark-900 px-3 py-1 text-sm font-medium text-brand-300">&lt;1 hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When StackSmart is / isn't a fit */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When StackSmart fits and when it does not</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-brand-300">Good fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Your team is 10-200 people and subscriptions are growing faster than oversight</li>
                <li>You want savings visibility from billing data without IT involvement</li>
                <li>You need a clear inventory, waste flags, and action items this week</li>
                <li>Your goal is reducing spend, not building a procurement workflow</li>
                <li>You want to evaluate before committing to a platform purchase</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Not a fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>You need automated approval workflows for new tool purchases</li>
                <li>You require SSO/SCIM-based per-employee usage tracking</li>
                <li>Your organization has compliance mandates around vendor access control</li>
                <li>You need contract storage, e-signature workflows, and vendor lifecycle management</li>
                <li>You already have a functioning SaaS management platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common questions about subscription management software</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white">How much does SaaS subscription management software cost?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Enterprise platforms (Zylo, Productiv, Torii) typically run $30K-$150K per year and require dedicated staff. StackSmart starts from $49 for a one-time savings report or $29/month for ongoing tracking. Spreadsheet tracking is free but costs 8-20 hours per quarter in manual work.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">When does a small business need subscription management software?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                You need it when your team has more than 20 SaaS tools, when surprise renewals are showing up on credit card statements, or when nobody can confidently say what you are paying for software and whether each tool is still earning its cost. If any of these describe your situation, you are past the point where ad-hoc tracking works.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Can I start with StackSmart and move to an enterprise platform later?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Yes. Many teams use a savings report to understand their current state, act on quick wins, and then decide with data whether they need broader governance tooling. The report output often shows that 80% of the value comes from visibility and action, not from procurement controls — which changes the platform calculus.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">What billing data formats does StackSmart accept?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Credit card statements (CSV exports from most providers), accounting software exports (QuickBooks, Xero), invoices, and bank transaction data. Any source that shows recurring software charges works. The more payment methods you include, the more complete your subscription inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <SeoClusterLinks
        eyebrow="Related guides"
        title="Explore related subscription management topics"
        description="If you are evaluating subscription management software, these pages cover related approaches — spend management, renewal tracking, audit workflows, and tool comparisons."
        links={[
          {
            href: "/saas-spend-management",
            title: "SaaS spend management for SMBs",
            description: "Broader guide to tracking and optimizing recurring software costs.",
          },
          {
            href: "/saas-renewal-management",
            title: "SaaS renewal management",
            description: "Stop surprise renewals and reduce recurring waste with a structured approach.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See when a fast savings report replaces a manual audit process.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Step-by-step framework for running your first subscription review.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with heavier platforms and SMB-friendly alternatives.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See where StackSmart fits when cost reduction is the primary goal.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report and judge whether the output already solves your subscription management problem — before buying anything.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_subscription_management_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_subscription_management_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
