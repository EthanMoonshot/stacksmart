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
  title: "Tropic Alternative for Lean Finance Teams",
  description:
    "Looking for a Tropic alternative without the procurement desk? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  path: "/tropic-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Tropic",
  path: "/tropic-alternative",
  title: "Tropic Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Tropic alternative without the procurement desk? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Tropic?",
      answer:
        "Tropic is a procurement platform with intake workflows, approval routing, and negotiation services. StackSmart is a report-first tool — upload billing exports, contracts, or invoices and get a savings report with keep, cut, consolidate, and renegotiate actions you execute yourself. No procurement desk required.",
    },
    {
      question: "Who should use StackSmart instead of Tropic?",
      answer:
        "Teams that want fast cost visibility — duplicate seats, inactive tools, renewal risks — without rolling out a procurement workflow. Best for lean finance or ops teams under 50 people who want savings actions, not a buying layer.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function TropicAlternativePage() {
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
              Need a Tropic alternative without the procurement desk?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If your team does not need intake workflows or managed negotiations, StackSmart gives you a faster path from billing exports to clear keep, cut, consolidate, and renegotiate actions — no procurement rollout required.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_tropic_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_tropic_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Tropic"
        shortAnswer="Tropic is a procurement platform with intake forms, approval routing, and negotiation services. StackSmart is a self-serve savings report — upload billing data and get keep/cut/consolidate/renegotiate actions you execute yourself. No procurement desk or managed buying layer."
        bestFit="Lean finance or ops teams that want fast duplicate-seat, inactive-tool, and renewal-risk visibility without standing up a procurement workflow."
        chooseWhen={[
          "You want a savings report from exports or invoices, not a procurement onboarding cycle",
          "You need duplicate-seat and inactive-tool visibility without rolling out intake workflows",
          "You want renewal-risk flags and concrete actions before committing to a heavier platform",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Savings report, not procurement desk", "StackSmart produces a savings report from billing exports quickly, so finance or ops can act before committing to intake workflows or approval routing."],
            ["Duplicate seats and inactive tools surfaced fast", "Upload exports or contracts and see overlapping licenses and unused seats in minutes — no vendor integration or agent rollout needed."],
            ["Renewal risks before they hit", "Get a timeline of upcoming renewals with renegotiate or cancel recommendations so nothing auto-renews without a decision."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Tropic alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review instead of a managed procurement desk with intake workflows and approval chains.</p>
            <p>You care more about finding duplicate seats and inactive tools fast than routing purchase requests through an approval layer.</p>
            <p>You want to start with a CSV export or contract upload and get a concrete answer before onboarding into a heavier procurement program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_tropic_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Tropic alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need — without the procurement overhead.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_tropic_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_tropic_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Tropic, these related pages help you compare lighter report-first workflows, adjacent procurement alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/sastrify-alternative",
            title: "Sastrify alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS procurement and vendor-negotiation platforms.",
          },
          {
            href: "/cloudeagle-alternative",
            title: "CloudEagle alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating broader SaaS management and procurement tooling.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See how StackSmart fits teams that mainly want savings actions, not a bigger management layer.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
