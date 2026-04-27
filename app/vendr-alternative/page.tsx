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
  title: "Vendr Alternative for Lean Finance Teams",
  description:
    "Looking for a Vendr alternative without the procurement overhead? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  path: "/vendr-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Vendr",
  path: "/vendr-alternative",
  title: "Vendr Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Vendr alternative without the procurement overhead? See when a lightweight report-first SaaS savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Vendr?",
      answer:
        "Vendr is a procurement platform that negotiates SaaS contracts on your behalf, often with buyer-assist fees. StackSmart is a report-first tool — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions you execute yourself.",
    },
    {
      question: "Who should use StackSmart instead of Vendr?",
      answer:
        "Teams that want to find and act on SaaS savings themselves, without delegating negotiations to a third party or paying buyer-assist fees. Best for lean finance or ops teams that want fast cost visibility.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function VendrAlternativePage() {
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
              Need a Vendr alternative that skips procurement and gets to savings faster?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If your team is not ready for a procurement-heavy buying layer, StackSmart gives you a faster path from billing data to clear keep, cut, consolidate, and renegotiate actions without a lengthy onboarding cycle.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_vendr_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_vendr_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Vendr"
        shortAnswer="Vendr is a procurement platform that negotiates SaaS contracts for you, often with buyer-assist fees. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions you execute yourself. No procurement layer or third-party negotiation fees."
        bestFit="Lean finance or ops teams that want to own their SaaS savings decisions directly, without delegating to a managed procurement service."
        chooseWhen={[
          "You want to find and act on savings yourself, not delegate to a third-party negotiator",
          "You want a concrete report from billing data, not a procurement onboarding cycle",
          "Buyer-assist fees do not make sense for your team size or contract volume",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Report first, not procurement first", "StackSmart produces a buyer-facing savings report from billing data quickly, so finance or ops can act before committing to a broader platform."],
            ["Built for lean teams", "Useful when the real need is cost visibility and action sequencing, not standing up a managed procurement workflow."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Vendr alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review instead of a managed purchasing layer with buyer-assist fees.</p>
            <p>You care more about finding savings opportunities fast than delegating vendor negotiations to a third party.</p>
            <p>You want to start with a CSV export and get a concrete answer before onboarding into a heavier program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_vendr_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Vendr alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_vendr_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_vendr_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Vendr, these related pages help you compare lighter report-first workflows, adjacent competitor alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/tropic-alternative",
            title: "Tropic alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams evaluating procurement-heavy spend management platforms.",
          },
          {
            href: "/spendflo-alternative",
            title: "Spendflo alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams evaluating procurement-heavy SaaS buying platforms.",
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
