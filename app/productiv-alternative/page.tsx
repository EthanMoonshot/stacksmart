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
  title: "Productiv Alternative for Lean Finance Teams",
  description:
    "Looking for a Productiv alternative without rolling out a SaaS intelligence platform? See when a faster report-first savings workflow is the better fit for lean finance and ops teams.",
  path: "/productiv-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Productiv",
  path: "/productiv-alternative",
  title: "Productiv Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Productiv alternative without rolling out a SaaS intelligence platform? See when a faster report-first savings workflow is the better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Productiv?",
      answer:
        "Productiv is a SaaS intelligence platform built for IT and procurement with app-level adoption analytics, engagement scoring, and license-reclamation workflows. StackSmart is a report-first tool — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions, without deploying analytics or engagement tracking.",
    },
    {
      question: "Who should use StackSmart instead of Productiv?",
      answer:
        "Lean finance or ops teams that need to surface duplicate seats, inactive tools, and renewal risks from billing data quickly, rather than deploying a SaaS intelligence platform with adoption analytics and engagement scoring.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function ProductivAlternativePage() {
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
              Need a Productiv alternative that finds savings without an intelligence rollout?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Productiv is built for IT and procurement teams that want deep app-level adoption analytics, employee engagement scoring, and license-reclamation workflows across a broad SaaS estate. If your team needs cost clarity first, StackSmart turns invoices, contracts, and billing exports into a concrete savings report with keep, cut, consolidate, and renegotiate actions without standing up a SaaS intelligence layer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_productiv_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_productiv_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Productiv"
        shortAnswer="Productiv is a SaaS intelligence platform with adoption analytics and engagement scoring. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions. No analytics rollout, no engagement tracking."
        bestFit="Lean finance or ops teams that need to surface duplicate seats and renewal risks from billing data, not an IT-focused intelligence platform with adoption telemetry."
        chooseWhen={[
          "You need savings actions from billing data, not app-level adoption analytics",
          "Your team is too lean to justify deploying engagement scoring and license-reclamation workflows",
          "You want to act on cost data this week, not after a SaaS intelligence rollout",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Duplicate seats and inactive tools, fast", "StackSmart flags overlapping subscriptions, unused licenses, and renewal risks from billing data quickly, so finance or ops can act without waiting on adoption telemetry to roll out."],
            ["Built for lean teams, not analytics orgs", "Useful when the real need is cost visibility and clear next steps, not standing up employee-level usage scoring, SSO integrations, or engagement dashboards."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better Productiv alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring savings review instead of deploying a SaaS intelligence platform with adoption analytics and engagement scoring.</p>
            <p>You need to surface duplicate seats, inactive tools, and renewal risks from billing data quickly, not wait for a broader analytics rollout before you can act.</p>
            <p>You want to start with a CSV or invoice upload and get a concrete answer before onboarding into a heavier program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_productiv_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Productiv alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_productiv_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_productiv_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Productiv, these related pages help you compare lighter report-first workflows, adjacent competitor alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/spendflo-alternative",
            title: "Spendflo alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams evaluating procurement-heavy SaaS buying platforms.",
          },
          {
            href: "/zluri-alternative",
            title: "Zluri alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams that want savings clarity without a full SaaS management suite.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See how StackSmart compares to broader cost optimization tools for teams focused on reducing SaaS spend.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
