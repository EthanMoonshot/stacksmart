import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Cost Optimization Software for SMBs",
  description:
    "SaaS spend management software for lean teams. Upload billing data, get a savings report with keep, cut, consolidate, and renegotiate actions — no procurement platform required.",
  path: "/saas-cost-optimization-software",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/saas-cost-optimization-software"),
      url: absoluteUrl("/saas-cost-optimization-software"),
      name: "SaaS Cost Optimization Software for SMBs | StackSmart",
      description:
        "SaaS spend management software for lean teams. Upload billing data, get a savings report with keep, cut, consolidate, and renegotiate actions — no procurement platform required.",
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
          name: "SaaS Cost Optimization Software",
          item: absoluteUrl("/saas-cost-optimization-software"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does SaaS cost optimization software do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaaS cost optimization software analyses your billing data to identify waste — duplicate subscriptions, unused seats, tier mismatches, and renewals approaching without review. It produces a prioritised action list so teams can cut, consolidate, renegotiate, or keep each subscription based on actual usage and cost data.",
          },
        },
        {
          "@type": "Question",
          name: "When is a lightweight report better than a full SaaS management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When your primary need is cost visibility and savings actions from billing data — not discovery agents, compliance controls, or user lifecycle management. Teams with under 200 subscriptions and no dedicated IT procurement function typically get faster results from a report-first approach.",
          },
        },
        {
          "@type": "Question",
          name: "What findings should I expect from a SaaS cost optimization review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common findings include duplicate tools serving the same workflow, unused seats still billing, enterprise tiers with features nobody uses, forgotten trial conversions, and annual renewals approaching without competitive benchmarking. A structured review categorises each finding as keep, cut, consolidate, or renegotiate.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a SaaS spend management platform to reduce costs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Smaller teams can start with billing exports and a report-first tool like StackSmart. Full spend management platforms with discovery agents and governance controls make more sense once your SaaS estate is large enough to warrant ongoing lifecycle management and compliance reporting.",
          },
        },
      ],
    },
  ],
};

export default function SaaSCostOptimizationSoftwarePage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">SaaS spend management software</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find SaaS waste from billing data
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Most SaaS cost optimization software assumes you need a full procurement platform. If you just need a clear view of waste, overlap, and renewal risk from billing exports, StackSmart delivers a concrete savings report you can act on this week.
            </p>
            <div className="mt-8">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cost_optimization_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
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
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">What does SaaS cost optimization software actually do?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300 max-w-3xl">
              It analyses billing data — invoices, credit card exports, or subscription records — and identifies four categories of action: subscriptions to <strong className="text-white font-medium">keep</strong> (actively used, correctly priced), <strong className="text-white font-medium">cut</strong> (unused or redundant), <strong className="text-white font-medium">consolidate</strong> (overlapping tools serving the same workflow), and <strong className="text-white font-medium">renegotiate</strong> (wrong tier, approaching renewal, or overpriced relative to alternatives). The output is a prioritised action list, not a dashboard you have to interpret.
            </p>
          </div>
        </div>
      </section>

      {/* When lightweight beats full platform */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When a report-first approach beats a full platform</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            Full SaaS management platforms are built for enterprise IT teams running discovery agents, compliance audits, and user lifecycle management. If your team mainly needs cost clarity from billing data, a lightweight report gets you to savings faster.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-dark-400">Full SaaS management platform</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Multi-week implementation and agent deployment</li>
                <li>Discovery, compliance, and governance workflows</li>
                <li>User lifecycle and provisioning controls</li>
                <li>Enterprise pricing — typically $15k-$50k+/yr</li>
                <li>Best fit: 500+ subscriptions, dedicated IT procurement</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">StackSmart report-first approach</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload billing exports, get a report the same day</li>
                <li>Keep/cut/consolidate/renegotiate action list</li>
                <li>Renewal risk flags and duplicate detection</li>
                <li>From $49 one-time or $29/mo recurring</li>
                <li>Best fit: 20-200 subscriptions, lean finance or ops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What findings to expect */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a cost optimization review typically surfaces</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            These are the kinds of findings StackSmart produces from billing exports. Real results vary by company.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {([
                  ["Duplicate project management tools", "Consolidate", "$2,400-$6,000/yr"],
                  ["Unused seats on collaboration platform", "Cut or downgrade", "$1,200-$3,600/yr"],
                  ["Enterprise tier with unused features", "Renegotiate to lower tier", "$800-$2,400/yr"],
                  ["Forgotten trial converted to paid", "Cut", "$300-$1,200/yr"],
                  ["Annual renewal approaching — no review", "Renegotiate before auto-renew", "$500-$4,000/yr"],
                  ["Overlapping file storage services", "Consolidate", "$600-$1,800/yr"],
                ] as const).map(([finding, action, impact]) => (
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

      {/* Manual spreadsheet vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual spreadsheet vs StackSmart</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            You can run a SaaS cost optimization review with a spreadsheet. StackSmart makes it faster and more structured.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-dark-400">Manual spreadsheet</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export billing data and paste into a sheet</li>
                <li>Manually categorise each subscription</li>
                <li>Cross-reference seat counts across tools</li>
                <li>Build your own prioritisation logic</li>
                <li>Format a report to share internally</li>
                <li>Repeat from scratch at next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">StackSmart</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload billing exports or invoice data</li>
                <li>Automatic categorisation and duplicate detection</li>
                <li>Renewal risk flags and seat-count analysis</li>
                <li>Prioritised keep/cut/consolidate/renegotiate actions</li>
                <li>Shareable savings report for stakeholders</li>
                <li>Recurring reviews without rebuilding from scratch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not Fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Good fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>SMB or lean team with 20-200 SaaS subscriptions</li>
                <li>Finance, ops, or founder running the spend review</li>
                <li>You want a report and action list, not a platform rollout</li>
                <li>You have billing exports or invoice data available</li>
                <li>You want to act on savings within days, not months</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-dark-400">Not the best fit</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Enterprise IT needing discovery agents and compliance controls</li>
                <li>You need automated provisioning or user lifecycle management</li>
                <li>Your primary goal is security governance, not cost reduction</li>
                <li>You need a full procurement platform with vendor negotiation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pick your path */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Pick the path that fits your team</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Whether you need a one-time cost review or ongoing optimization, StackSmart has a plan for that.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">One-time review</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Snapshot — $49</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upload billing data once, get a full savings report with clear next actions. No subscription required.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_routing_snapshot" }} className="btn-primary mt-5 inline-block text-sm">
                Get Snapshot
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ongoing optimization</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Starter or Growth — from $29/mo</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Keep savings visibility running month over month with renewal alerts and ongoing recommendations.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_routing_recurring" }} className="btn-secondary mt-5 inline-block text-sm">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {([
              ["What does SaaS cost optimization software do?", "It analyses billing data to identify waste — duplicate subscriptions, unused seats, tier mismatches, and renewals approaching without review. The output is a prioritised action list: keep, cut, consolidate, or renegotiate each subscription based on actual usage and cost data."],
              ["When is a lightweight report better than a full SaaS management platform?", "When your primary need is cost visibility and savings actions from billing data — not discovery agents, compliance controls, or user lifecycle management. Teams with under 200 subscriptions and no dedicated IT procurement function typically get faster results from a report-first approach."],
              ["What findings should I expect from a cost optimization review?", "Common findings include duplicate tools serving the same workflow, unused seats still billing, enterprise tiers with features nobody uses, forgotten trial conversions, and annual renewals approaching without competitive benchmarking."],
              ["Do I need a SaaS spend management platform to reduce costs?", "Not necessarily. Smaller teams can start with billing exports and a report-first tool like StackSmart. Full spend management platforms with discovery agents and governance controls make more sense once your SaaS estate is large enough to warrant ongoing lifecycle management."],
            ] as const).map(([q, a]) => (
              <div key={q} className="border-b border-dark-800/60 pb-6">
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture + Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_cost_optimization_software"
            heading="Email yourself the sample report"
            body="A simple way to keep the proof asset close while you compare options or share it with someone else on the team."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you buy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report and judge whether the output is already enough for your use case.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cost_optimization_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related decision pages"
        title="Compare adjacent ways to cut software spend"
        description="If you're evaluating SaaS cost optimization software, these pages help you compare approaches, review the audit workflow, and pressure-test whether StackSmart fits your team."
        links={[
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See when a fast savings report is more useful than a broad procurement workflow.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with heavier platforms and SMB-friendly alternatives.",
          },
          {
            href: "/reduce-saas-spend-small-business",
            title: "Reduce SaaS spend for small business",
            description: "A practical guide to finding and acting on SaaS savings from billing data.",
          },
          {
            href: "/saas-management-software",
            title: "SaaS management software",
            description: "Evaluate when lightweight SaaS management is enough and when you need a full platform.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
