import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Agency Software Audit",
  description:
    "Audit your real estate agency's software subscriptions for duplicate CRM seats, unused portal listings, redundant e-sign tools, and subscriptions that crept in across offices and agents. StackSmart turns billing exports into a clear savings report.",
  path: "/real-estate-agency-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/real-estate-agency-software-audit"),
      url: absoluteUrl("/real-estate-agency-software-audit"),
      name: "Real Estate Agency Software Audit | StackSmart",
      description:
        "Audit your real estate agency software for duplicate CRM licences, unused portal seats, and subscriptions that accumulated across agents and offices.",
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
          name: "Real Estate Agency Software Audit",
          item: absoluteUrl("/real-estate-agency-software-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do real estate agencies accumulate software waste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real estate agencies grow their software stack in layers — each new office or agent cohort brings preferred tools, portal subscriptions stack up across listings, and CRM seats persist long after agents leave. Trial tools adopted during slow periods stay active when the market picks up and nobody reviews the billing. A principal with 10 to 30 agents will often find subscriptions from three or four years of accumulated decisions.",
          },
        },
        {
          "@type": "Question",
          name: "What does a real estate agency software audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A real estate agency software audit covers CRM and agent management platforms, property portal subscriptions, marketing and campaign tools, appraisal and market data software, inspection and forms apps, e-signature tools, communication and team collaboration platforms, accounting and payroll software, and training or onboarding systems. The goal is to find duplicated seats, tools that are paid for but rarely used, and subscriptions that grew with a team that has since contracted.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit real estate software subscriptions without disrupting active listings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data only — no need to touch active tools during a live campaign. Export 6 to 12 months of charges from your business card or accounting software, identify every recurring subscription by name, and cross-reference seat counts against your current active agent roster. Flag unused seats and duplicate category tools before taking any action. Plan cancellations and consolidations in quieter periods between settlement cycles.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart help real estate agencies find software savings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is built for owner-led businesses with messy billing histories — including real estate agencies where costs span offices, individual agent expenses, and shared business subscriptions. Upload a CSV from Xero, your credit card, or your expense platform. The report categorises every subscription, flags duplicates and unused seats, and gives you clear keep, cut, consolidate, and renegotiate actions.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "CRM and agent management",
    issue: "Multiple CRM licences active across offices — VaultRE, Rex, Eagle, or similar — often because individual offices chose their own platform before consolidation.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Property portal subscriptions",
    issue: "Portal listing tiers inflated during peak market conditions, not right-sized when listing volumes dropped or competition shifted.",
    action: "Downgrade",
    color: "text-amber-400",
  },
  {
    category: "Marketing and campaigns",
    issue: "Email marketing, social scheduling, and campaign tools running simultaneously — often adopted separately by principals and property managers.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Appraisal and market data",
    issue: "CoreLogic, PriceFinder, or similar data subscriptions licensed at seat counts that exceed the agents who actively prepare appraisals.",
    action: "Right-size",
    color: "text-orange-400",
  },
  {
    category: "E-signature and forms",
    issue: "DocuSign, DigiSign, and Signed separately licensed when one platform covers all transaction and compliance needs.",
    action: "Cut duplicates",
    color: "text-red-400",
  },
  {
    category: "Communication and comms",
    issue: "Team chat, video conferencing, and SMS platforms each separately licensed across a small team where one tool would cover all daily needs.",
    action: "Consolidate",
    color: "text-orange-400",
  },
];

export default function RealEstateAgencySoftwareAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Real estate agency software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the software waste in your agency before it compounds
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Real estate agencies accumulate subscriptions across agents, offices, and market cycles. CRM seats outlast the agents who needed them. Portal tiers stay inflated after listing volumes fall. A software audit finds exactly what to cut, consolidate, and renegotiate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "real_estate_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "real_estate_audit_secondary" }}
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
              What is a real estate agency software audit?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A real estate agency software audit is a structured review of every software subscription your agency pays for — across CRM, portal subscriptions, marketing, appraisal data, inspection tools, e-signature, communication, accounting, and agent support platforms. The goal is to find duplicate licences, seats that no longer reflect your active agent roster, and subscriptions that crept in during growth phases and were never reviewed. The output is a clear action list: which tools to keep, which to cut, where to consolidate, and which contracts to renegotiate before renewal.
            </p>
          </div>
        </div>
      </section>

      {/* Why agencies accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why real estate agencies accumulate software waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the creeping SaaS spend in property businesses.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Agent turnover leaves ghost seats",
                "Each time an agent joins they get provisioned across CRM, portal, forms, and comms tools. When they leave — or move to a different office — the seats often stay active, quietly billing each month.",
              ],
              [
                "Market-cycle inflation",
                "Portal tiers and data subscriptions get upgraded during strong market conditions. When volumes soften, nobody reviews the tier. The inflated subscription continues on autopilot.",
              ],
              [
                "Office-by-office tool adoption",
                "Each office or branch tends to pick the tools its principal prefers. A three-office agency can end up running two or three CRM platforms, two e-sign tools, and duplicate marketing stacks.",
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
          <h2 className="text-2xl font-semibold text-white">Real estate software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where overlap and unused spend appear most frequently in agency billing exports.
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
          <h2 className="text-2xl font-semibold text-white">How to run a real estate agency software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This works in a quieter week between settlement cycles and does not require disrupting active listings or transactions.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Pull billing data",
                "Export 6 to 12 months of charges from your business credit card, Xero, or MYOB. Include both the agency account and any expenses agents bill back to the business. Annual subscriptions need the full 12-month window to appear.",
              ],
              [
                "Step 2 — Map by category",
                "Group every subscription: CRM and agent tools, portal subscriptions, marketing and campaigns, appraisal and data, inspection and forms, e-signature, communication, accounting, payroll, and training. This immediately reveals where the agency is paying for the same function twice.",
              ],
              [
                "Step 3 — Cross-reference seat counts",
                "For each subscription, compare the licensed seat count against your current active agent and staff roster. Flag any seat count that exceeds active headcount by more than one or two. These are the fastest cuts.",
              ],
              [
                "Step 4 — Rank and prioritise",
                "Calculate annual cost for every flagged item. Start with clear cancellations — seats for departed agents, tools nobody opened in 6 months. Then plan portal tier downgrades and tool consolidations around your next quieter period.",
              ],
              [
                "Step 5 — Act and document",
                "Cancel unused seats before the next billing cycle. Initiate consolidation across tools with a migration plan. Open renegotiation conversations on portal contracts approaching renewal with a clear alternative or volume argument.",
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

      {/* Sample findings table */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a real estate agency audit typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from agency billing exports. Amounts vary by team size, office count, and tool mix.
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
                  ["Ghost CRM seats from departed agents", "Remove and downgrade", "$1,200 – $4,800/yr"],
                  ["Portal tier inflated from peak market period", "Downgrade to actual usage", "$2,400 – $9,600/yr"],
                  ["Two e-sign platforms running in parallel", "Cancel one", "$600 – $2,400/yr"],
                  ["Appraisal data seats exceed active appraisers", "Right-size licences", "$960 – $3,600/yr"],
                  ["Marketing tools duplicated across offices", "Consolidate to one", "$1,800 – $5,400/yr"],
                  ["Annual CRM contract renewing, no usage review", "Renegotiate or switch", "$1,500 – $6,000/yr"],
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

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your agency?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Principal-led agency with 5 to 50 agents across one or more offices</li>
                <li>Software stack grown across agent cohorts, market cycles, and office expansions</li>
                <li>No dedicated ops or IT team managing subscriptions</li>
                <li>You want a clear report and action list, not a platform rollout</li>
                <li>Billing data available from Xero, MYOB, or business credit card</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large franchise network with centralised IT and procurement</li>
                <li>Need automated agent provisioning or compliance controls</li>
                <li>Primary goal is regulatory compliance, not cost reduction</li>
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
                "Why do real estate agencies accumulate software waste?",
                "Real estate agencies grow their software stack in layers — each new office or agent cohort brings preferred tools, portal subscriptions stack up across listings, and CRM seats persist long after agents leave. Trial tools adopted during slow periods stay active when the market picks up and nobody reviews the billing. A principal with 10 to 30 agents will often find subscriptions from three or four years of accumulated decisions.",
              ],
              [
                "What does a real estate agency software audit cover?",
                "A real estate agency software audit covers CRM and agent management platforms, property portal subscriptions, marketing and campaign tools, appraisal and market data software, inspection and forms apps, e-signature tools, communication and team collaboration platforms, accounting and payroll software, and training or onboarding systems. The goal is to find duplicated seats, tools that are paid for but rarely used, and subscriptions that grew with a team that has since contracted.",
              ],
              [
                "How do I audit real estate software subscriptions without disrupting active listings?",
                "Start with billing data only — no need to touch active tools during a live campaign. Export 6 to 12 months of charges from your business card or accounting software, identify every recurring subscription by name, and cross-reference seat counts against your current active agent roster. Flag unused seats and duplicate category tools before taking any action. Plan cancellations and consolidations in quieter periods between settlement cycles.",
              ],
              [
                "Can StackSmart help real estate agencies find software savings?",
                "Yes. StackSmart is built for owner-led businesses with messy billing histories — including real estate agencies where costs span offices, individual agent expenses, and shared business subscriptions. Upload a CSV from Xero, your credit card, or your expense platform. The report categorises every subscription, flags duplicates and unused seats, and gives you clear keep, cut, consolidate, and renegotiate actions.",
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
            location="real_estate_agency_audit"
            heading="See what the audit output looks like"
            body="Email yourself the sample report to review the finding types and action format before uploading your agency's billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next portal renewal</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report first. See the output format and the types of findings a real estate audit surfaces — then decide if it fits your agency.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "real_estate_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "real_estate_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software stack audits for owner-led businesses"
        description="If you are auditing your agency software spend, these related guides cover the broader SMB audit approach, the checklist, and vertical-specific pages for other service businesses."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step walkthrough for turning billing data into a structured audit without a finance team.",
          },
          {
            href: "/agency-software-stack-audit",
            title: "Agency software stack audit",
            description: "Audit guide for web studios, creative agencies, and consultancies with project-driven tool spread.",
          },
          {
            href: "/professional-services-software-audit",
            title: "Professional services software audit",
            description: "Stack audit guide for boutique consultancies with project management, proposals, and time-tracking tools.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart automates categorisation, duplicate detection, and action planning from billing exports.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
