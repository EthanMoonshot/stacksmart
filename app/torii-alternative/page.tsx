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
  title: "Torii Alternative for Lean Teams",
  description:
    "Looking for a Torii alternative without a full SaaS management rollout? See when a lightweight report-first savings workflow is the better fit for lean finance and ops teams.",
  path: "/torii-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Torii",
  path: "/torii-alternative",
  title: "Torii Alternative for Lean Teams | StackSmart",
  description:
    "Looking for a Torii alternative without a full SaaS management rollout? See when a lightweight report-first savings workflow is the better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Torii?",
      answer:
        "Torii is a SaaS management platform built for IT with app discovery, license governance, and workflow automation. StackSmart is a report-first tool — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions, without deploying discovery agents or governance workflows.",
    },
    {
      question: "Who should use StackSmart instead of Torii?",
      answer:
        "Finance or ops teams that need cost clarity and savings actions from billing data, rather than standing up an IT-focused SaaS management platform with discovery agents and automated workflows.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function ToriiAlternativePage() {
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
              Need a Torii alternative that starts with savings, not governance?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Torii is built for IT teams that want deep SaaS discovery, license governance, and workflow automation. If your team needs cost clarity first, StackSmart gives you a concrete savings report from billing data without standing up a full management platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_torii_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_torii_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Torii"
        shortAnswer="Torii is a SaaS management platform for IT with discovery agents and governance workflows. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions. No agents, no governance rollout."
        bestFit="Finance or ops teams that need cost clarity from billing data, not an IT-focused SaaS management platform with discovery and workflow automation."
        chooseWhen={[
          "You need savings actions from billing data, not app discovery or license governance",
          "Your team is finance or ops, not IT — you want a report, not a management layer",
          "You want to act on cost data this week, not after deploying agents and workflows",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Savings report, not a platform rollout", "StackSmart produces a buyer-facing savings report from billing data quickly, so finance or ops can act before committing to broader SaaS governance tooling."],
            ["Built for lean teams, not IT departments", "Useful when the real need is cost visibility and action sequencing, not standing up discovery agents, license tracking, or workflow automations."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Torii alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review instead of deploying a SaaS management platform with discovery agents and license governance.</p>
            <p>You care more about finding savings opportunities fast than cataloguing every app and automating onboarding workflows.</p>
            <p>You want to start with a CSV export and get a concrete answer before onboarding into a heavier program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_torii_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Torii alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_torii_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_torii_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Torii, these related pages help you compare lighter report-first workflows, adjacent competitor alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/zluri-alternative",
            title: "Zluri alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams that want savings clarity without a full SaaS management suite.",
          },
          {
            href: "/productiv-alternative",
            title: "Productiv alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams that want savings clarity without a SaaS intelligence rollout.",
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
