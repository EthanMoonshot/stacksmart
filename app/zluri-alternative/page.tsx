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
  title: "Zluri Alternative for Lean Finance Teams",
  description:
    "Looking for a Zluri alternative without rolling out a full SaaS management suite? See when a faster report-first savings workflow is a better fit for lean finance and ops teams.",
  path: "/zluri-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Zluri",
  path: "/zluri-alternative",
  title: "Zluri Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Zluri alternative without rolling out a full SaaS management suite? See when a faster report-first savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Zluri?",
      answer:
        "Zluri is a SaaS management platform for IT with app discovery, license governance, SSO integrations, and automated provisioning workflows. StackSmart is a report-first tool — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions, without deploying agents or governance workflows.",
    },
    {
      question: "Who should use StackSmart instead of Zluri?",
      answer:
        "Lean finance or ops teams that need to surface SaaS savings from billing data quickly, without standing up an IT-focused management platform with discovery agents, SSO integrations, and provisioning workflows.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function ZluriAlternativePage() {
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
              Need a Zluri alternative that delivers savings without a platform rollout?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Zluri is built for IT teams that want app discovery, license governance, and automated workflows across an entire SaaS estate. If your team needs cost clarity first, StackSmart turns invoices and billing exports into a concrete savings report and action list without standing up a heavier management layer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_zluri_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_zluri_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Zluri"
        shortAnswer="Zluri is an IT-focused SaaS management suite with discovery agents, SSO, and automated provisioning. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions. No agents, no IT rollout."
        bestFit="Lean finance or ops teams that need savings actions from billing data, not an IT-focused platform with discovery, SSO, and provisioning workflows."
        chooseWhen={[
          "You need a savings report from billing data, not app discovery or automated provisioning",
          "Your team is finance or ops — you want cost actions, not an IT management suite",
          "You want results this week, not after deploying agents and integrations",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Upload exports, get actions", "StackSmart produces a savings report from billing data, contracts, or invoices quickly, so finance or ops can act on keep, cut, consolidate, and renegotiate decisions without a longer implementation cycle."],
            ["Built for lean teams, not IT departments", "Useful when the real need is cost visibility and clear next steps, not standing up discovery agents, SSO integrations, or automated provisioning workflows."],
            ["Proof before commitment", "The public sample report lets stakeholders judge the output and share it internally before paying or uploading live billing data."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Zluri alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring savings review instead of deploying a SaaS management platform with discovery agents and license governance.</p>
            <p>You need clear next actions from billing data quickly, not a longer rollout before you can assess savings opportunities.</p>
            <p>You want to start with a CSV or invoice upload and get a concrete answer before onboarding into a heavier program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_zluri_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Zluri alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_zluri_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_zluri_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Zluri, these related pages help you compare lighter report-first workflows, adjacent competitor alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/josys-alternative",
            title: "Josys alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS and device governance platforms with identity management.",
          },
          {
            href: "/trelica-alternative",
            title: "Trelica alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams evaluating SaaS management platforms with discovery and compliance.",
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
