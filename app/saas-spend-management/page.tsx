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
    "Learn what SaaS spend management is, compare three approaches (spreadsheet, enterprise platform, savings report), and find the fastest first step for small teams.",
  path: "/saas-spend-management",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "SaaS Spend Management for SMBs | StackSmart",
      description:
        "Learn what SaaS spend management is, compare three approaches, and find the fastest first step for small teams.",
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

      {/* Internal links */}
      <SeoClusterLinks
        eyebrow="Related guides"
        title="Explore related spend-management topics"
        description="If you are evaluating SaaS spend management approaches, these pages help you compare tools, review audit workflows, and see how StackSmart compares to specific platforms."
        links={[
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See when a fast savings report replaces a manual audit process.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with heavier platforms and SMB-friendly alternatives.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See where StackSmart fits when the main job is fast savings visibility.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A step-by-step framework for running your first subscription audit.",
          },
          {
            href: "/zylo-alternative",
            title: "Zylo alternative for growing teams",
            description: "Compare Zylo with a lighter report-first approach for SMBs.",
          },
          {
            href: "/torii-alternative",
            title: "Torii alternative",
            description: "See how StackSmart compares when you want spend visibility without a full SMP.",
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
