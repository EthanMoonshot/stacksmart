import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import CompetitorQuickAnswer from "@/components/seo/CompetitorQuickAnswer";
import { buildMetadata } from "@/lib/site";
import { buildCompetitorJsonLd } from "@/lib/competitor-jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Airbase Alternative for Lean Finance Teams",
  description:
    "Looking for an Airbase alternative without a full spend-management rollout? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  path: "/airbase-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Airbase",
  path: "/airbase-alternative",
  title: "Airbase Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for an Airbase alternative without a full spend-management rollout? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Airbase?",
      answer:
        "Airbase is a spend management and finance operations platform covering corporate cards, bill payments, procurement, and approvals. StackSmart is a report-first tool — upload billing exports, invoices, or contracts and get a savings report with keep, cut, consolidate, and renegotiate actions you execute yourself.",
    },
    {
      question: "Who should use StackSmart instead of Airbase?",
      answer:
        "Lean finance or ops teams that want fast visibility into duplicate seats, inactive tools, and renewal risks without committing to a broader spend-management or finance-operations platform. Best for teams that want savings clarity first, before deciding whether a heavier platform is needed.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function AirbaseAlternativePage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Competitor alternative</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Need an Airbase alternative for SaaS savings visibility?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If your team wants fast savings visibility from billing exports, invoices, or contracts before adopting a broader spend-management or finance-operations platform, StackSmart gives you a quicker path to concrete keep, cut, consolidate, and renegotiate actions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_airbase_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_airbase_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Airbase"
        shortAnswer="Airbase is a spend management and finance operations platform covering corporate cards, bill payments, procurement, and approvals. StackSmart is a self-serve savings report — upload billing data and get keep/cut/consolidate/renegotiate actions you run yourself. No spend-management layer or corporate-card program."
        bestFit="Lean finance or ops teams that want fast duplicate-seat, inactive-tool, and renewal-risk visibility without adopting a broader spend-management or finance-operations platform."
        chooseWhen={[
          "You want a savings report from exports or invoices before committing to a spend-management or procurement platform",
          "You care more about surfacing duplicate seats and renewal risks fast than rolling out corporate cards or bill-pay workflows",
          "You need a one-time Snapshot or lightweight recurring review, not a full finance-operations program",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Report first, not platform first", "StackSmart produces a savings report from billing data quickly, so finance or ops can act on duplicate seats and renewal risks before committing to a spend-management or finance-operations layer."],
            ["Built for lean teams", "Useful when the real need is cost visibility and action sequencing, not standing up corporate cards, bill-pay workflows, or procurement approvals."],
            ["Proof before commitment", "The public sample report lets you judge the output and share it internally before paying or uploading live billing data."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Airbase alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review instead of a spend-management platform with corporate cards, bill payments, and procurement approvals.</p>
            <p>You care more about surfacing duplicate seats, unused licences, and renewal risks fast than rolling out a finance-operations program across your org.</p>
            <p>You want to start with a CSV export or invoice batch and get a concrete answer before onboarding into a heavier spend-management platform.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_airbase_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Airbase alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need — without the spend-management overhead.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_airbase_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_airbase_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Airbase, these related pages help you compare lighter report-first workflows, adjacent procurement alternatives, and cost-optimization paths for leaner teams."
        links={[
          {
            href: "/vertice-alternative",
            title: "Vertice alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS procurement and vendor-management platforms.",
          },
          {
            href: "/sastrify-alternative",
            title: "Sastrify alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS procurement and vendor-negotiation platforms.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See how StackSmart fits when the main job is fast savings visibility rather than a broader buying layer.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
