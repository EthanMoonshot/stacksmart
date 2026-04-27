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
  title: "Spendflo Alternative for Lean Finance Teams",
  description:
    "Looking for a Spendflo alternative without a procurement rollout? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  path: "/spendflo-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Spendflo",
  path: "/spendflo-alternative",
  title: "Spendflo Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Spendflo alternative without a procurement rollout? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Spendflo?",
      answer:
        "Spendflo is a SaaS buying and procurement platform that centralises vendor negotiations, intake workflows, and contract management. StackSmart is a report-first tool — upload billing exports, contracts, or invoices and get a savings report with keep, cut, consolidate, and renegotiate actions you execute yourself.",
    },
    {
      question: "Who should use StackSmart instead of Spendflo?",
      answer:
        "Lean finance or ops teams that want fast visibility into duplicate seats, inactive tools, and renewal risks without rolling out a procurement workflow. Best for teams that want to act on savings data directly rather than delegating to a buying platform.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function SpendfloAlternativePage() {
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
              Need a Spendflo alternative that skips procurement and surfaces savings faster?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If your team does not need a full SaaS buying platform, StackSmart gives you a faster path from billing exports to clear duplicate-seat, inactive-tool, and renewal-risk visibility without a heavyweight procurement rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_spendflo_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spendflo_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Spendflo"
        shortAnswer="Spendflo is a SaaS buying platform with vendor negotiations, intake workflows, and contract management. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions you run yourself. No procurement layer or buying-workflow setup."
        bestFit="Lean finance or ops teams that want fast cost visibility and concrete savings actions from billing data, without adopting a procurement platform."
        chooseWhen={[
          "You want duplicate-seat and inactive-tool visibility this week, not after a procurement rollout",
          "You want to own your savings actions directly, not route them through a buying workflow",
          "You need a concrete report from exports or invoices, not an intake-and-negotiation layer",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Report first, not procurement first", "StackSmart produces a savings report from billing data quickly, so finance or ops can act on duplicate seats and renewal risks before committing to a broader buying platform."],
            ["Built for lean teams", "Useful when the real need is cost visibility and action sequencing, not standing up intake workflows, vendor negotiations, or contract management."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Spendflo alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review instead of a managed SaaS buying workflow with intake forms and negotiation queues.</p>
            <p>You care more about surfacing duplicate seats, unused licences, and renewal risks fast than centralising all vendor purchasing.</p>
            <p>You want to start with a CSV export or invoice batch and get a concrete answer before onboarding into a heavier program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_spendflo_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Spendflo alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_spendflo_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spendflo_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Spendflo, these related pages help you compare lighter report-first workflows, adjacent procurement alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/tropic-alternative",
            title: "Tropic alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams evaluating procurement-heavy spend management platforms.",
          },
          {
            href: "/cloudeagle-alternative",
            title: "CloudEagle alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating broader SaaS management and procurement tooling.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing exports into concrete keep, cut, consolidate, and renegotiate actions.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
