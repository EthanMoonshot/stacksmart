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
  title: "Vendr Alternative — SaaS Savings Without Procurement",
  description:
    "Looking for a Vendr alternative? StackSmart gives lean finance and ops teams a self-serve savings report from billing data — no buyer-assist fees, no procurement onboarding.",
  path: "/vendr-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Vendr",
  path: "/vendr-alternative",
  title: "Vendr Alternative — SaaS Savings Without Procurement | StackSmart",
  description:
    "Looking for a Vendr alternative? StackSmart gives lean finance and ops teams a self-serve savings report from billing data — no buyer-assist fees, no procurement onboarding.",
  faqs: [
    {
      question: "How is StackSmart different from Vendr?",
      answer:
        "Vendr is a procurement platform that negotiates SaaS contracts on your behalf, often with buyer-assist fees and percentage-of-savings pricing. StackSmart is a report-first tool — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions you execute yourself. No third-party negotiation layer.",
    },
    {
      question: "Who should use StackSmart instead of Vendr?",
      answer:
        "Teams that want to find and act on SaaS savings themselves, without delegating negotiations to a third party or paying buyer-assist fees. Best for lean finance or ops teams under 200 subscriptions that want fast cost visibility and a concrete action list.",
    },
    {
      question: "When is Vendr the better choice?",
      answer:
        "When you have a large SaaS estate with high-value contracts and want a managed procurement service to handle vendor negotiations on your behalf. Vendr makes more sense for teams with dedicated procurement budgets and contract volumes that justify buyer-assist fees.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
    {
      question: "What does a StackSmart savings report include?",
      answer:
        "A prioritised list of every subscription categorised as keep, cut, consolidate, or renegotiate — with renewal dates, duplicate flags, seat-count analysis, and estimated savings for each action.",
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

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Vendr alternative</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SaaS savings without procurement
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Vendr negotiates SaaS contracts for you through a managed procurement layer. If your team wants to find savings from billing data and act on them directly — without buyer-assist fees or a procurement onboarding cycle — StackSmart gets you there faster.
            </p>
            <div className="mt-8">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_vendr_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Vendr"
        shortAnswer="Vendr is a procurement platform that negotiates SaaS contracts on your behalf, typically with buyer-assist fees and percentage-of-savings pricing. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions you execute yourself. No procurement layer, no third-party negotiation fees."
        bestFit="Lean finance or ops teams that want to own their SaaS savings decisions directly, without delegating to a managed procurement service or paying per-deal fees."
        chooseWhen={[
          "You want to find and act on savings yourself, not delegate to a third-party negotiator",
          "Buyer-assist fees do not make sense for your team size or contract volume",
          "You want a concrete report from billing data, not a procurement onboarding cycle",
          "You need results within days, not after a multi-week implementation",
        ]}
      />

      {/* Structured comparison */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">StackSmart vs Vendr at a glance</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            Different tools for different buying motions. Pick the one that matches how your team operates.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium"></th>
                  <th className="pb-3 pr-6 font-medium">StackSmart</th>
                  <th className="pb-3 font-medium">Vendr</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {([
                  ["Approach", "Self-serve savings report", "Managed procurement / negotiation"],
                  ["Input", "Billing exports, invoices, CSV", "Contract data + procurement intake"],
                  ["Output", "Keep/cut/consolidate/renegotiate report", "Negotiated contracts + procurement workflow"],
                  ["Time to value", "Same day", "Multi-week onboarding"],
                  ["Pricing", "From $49 one-time", "Buyer-assist fees / % of savings"],
                  ["Best for", "20-200 subscriptions, lean teams", "Large SaaS estate, dedicated procurement"],
                  ["Who acts", "Your team executes actions", "Vendr negotiates on your behalf"],
                ] as const).map(([label, stacksmart, vendr]) => (
                  <tr key={label} className="border-b border-dark-800/60">
                    <td className="py-3 pr-6 font-medium text-white">{label}</td>
                    <td className="py-3 pr-6">{stacksmart}</td>
                    <td className="py-3">{vendr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who should choose StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Who should choose StackSmart over Vendr</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review instead of a managed purchasing layer with buyer-assist fees.</p>
            <p>You care more about finding savings opportunities fast than delegating vendor negotiations to a third party.</p>
            <p>Your SaaS estate is under 200 subscriptions and the ROI on a managed procurement service does not pencil out yet.</p>
            <p>You want to start with a billing export and get a concrete answer before committing to a heavier program.</p>
          </div>
        </div>
      </section>

      {/* When Vendr is the better fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When Vendr is actually the better fit</h2>
          <p className="mt-4 text-sm leading-7 text-dark-300 max-w-3xl">
            StackSmart is honest about where it stops. Vendr makes more sense when:
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-dark-500" />
              You have a large SaaS estate with high-value enterprise contracts worth negotiating through a buyer-assist service.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-dark-500" />
              Your team has a procurement budget and wants someone else to handle vendor conversations and contract negotiations.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-dark-500" />
              You need a managed purchasing workflow with intake requests, approval routing, and vendor benchmarking data.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-dark-500" />
              The savings on individual contracts are large enough that percentage-of-savings pricing is a good trade.
            </li>
          </ul>
        </div>
      </section>

      {/* Expected outputs */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a StackSmart savings report includes</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300 max-w-3xl">
            Upload billing data and get a structured report with these outputs.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {([
              ["Keep/cut/consolidate/renegotiate actions", "Every subscription categorised with a clear next step and rationale."],
              ["Duplicate and overlap detection", "Tools serving the same workflow flagged for consolidation."],
              ["Renewal risk flags", "Subscriptions approaching renewal without recent review, sorted by date and cost."],
              ["Seat-count analysis", "Seats provisioned vs seats likely active, with savings estimates for right-sizing."],
            ] as const).map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture + Final CTA */}
      <section className="border-t border-dark-800/80 py-16">
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
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "Compare approaches to SaaS cost optimization when you want savings clarity fast.",
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
