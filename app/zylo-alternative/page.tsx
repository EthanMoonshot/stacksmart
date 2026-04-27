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
  title: "Zylo Alternative for Lean Finance Teams",
  description:
    "Looking for a Zylo alternative for a smaller or leaner team? See when a faster SaaS savings report is a better fit than a broader spend-management program.",
  path: "/zylo-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Zylo",
  path: "/zylo-alternative",
  title: "Zylo Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Zylo alternative for a smaller or leaner team? See when a faster SaaS savings report is a better fit than a broader spend-management program.",
  faqs: [
    {
      question: "How is StackSmart different from Zylo?",
      answer:
        "Zylo is a SaaS management platform designed for enterprise IT with discovery, benchmarking, and license optimization. StackSmart is a report-first tool — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions, without a longer implementation cycle.",
    },
    {
      question: "Who should use StackSmart instead of Zylo?",
      answer:
        "Lean finance or ops teams that need to surface SaaS savings opportunities quickly from billing data, rather than deploying an enterprise spend-management program with discovery integrations and benchmarking.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function ZyloAlternativePage() {
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
              Need a Zylo alternative that helps a lean team find savings before committing to a bigger platform?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If you are not ready for a full SaaS management program, StackSmart gives you a faster way to turn invoices and billing exports into clear keep, cut, consolidate, and renegotiate actions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_zylo_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_zylo_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Zylo"
        shortAnswer="Zylo is an enterprise SaaS management platform with discovery and benchmarking. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions. No enterprise implementation required."
        bestFit="Lean finance or ops teams that need savings visibility from billing data, not an enterprise SaaS management program with discovery integrations."
        chooseWhen={[
          "You need savings actions from billing data now, not after an enterprise discovery rollout",
          "Your team is too lean to justify standing up a full spend-management program",
          "You want a proof asset you can share internally before committing to a bigger tool",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Faster path to an answer", "StackSmart is built to generate a savings report quickly, so finance or ops can review concrete actions before committing to a larger management rollout."],
            ["Better for lighter operating models", "Useful when the core problem is wasted SaaS spend and unclear renewal decisions, not standing up a broad governance program right away."],
            ["Easy internal proof", "The public sample report gives stakeholders something tangible to review before they buy or upload live billing data."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Zylo alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring savings review instead of a heavier spend-management layer.</p>
            <p>You need clear next actions from billing data quickly, not a longer implementation cycle before you can assess savings opportunities.</p>
            <p>You want a proof asset you can share internally before buying into a broader program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_zylo_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Zylo alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_zylo_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_zylo_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Zylo, these related pages help you compare broader spend-management options, lighter report-first workflows, and adjacent audit paths for smaller teams."
        links={[
          {
            href: "/vendr-alternative",
            title: "Vendr alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams that want savings clarity without procurement overhead.",
          },
          {
            href: "/torii-alternative",
            title: "Torii alternative for lean teams",
            description: "Compare another lighter-weight alternative for teams that want savings clarity without a full SaaS governance rollout.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns raw billing exports into concrete keep, cut, consolidate, and renegotiate actions.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
