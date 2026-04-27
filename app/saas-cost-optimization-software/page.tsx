import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Cost Optimization Software for SMBs",
  description:
    "Looking for SaaS cost optimization software? See when a lightweight self-serve savings report is the fastest way to find waste, overlap, and renegotiation opportunities.",
  path: "/saas-cost-optimization-software",
});

export default function SaaSCostOptimizationSoftwarePage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Bottom-funnel software page</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">SaaS cost optimization software for teams that want a fast answer</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Some companies need a broad procurement workflow. Others need a quick way to see waste, overlap, and pricing mismatch from billing data. StackSmart is built for the second case.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cost_optimization_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Fast first answer", "Use billing exports to get a savings view quickly instead of starting with a long implementation."],
            ["Action-oriented output", "See what to cut, consolidate, renegotiate, or leave alone."],
            ["Good SMB fit", "Designed for smaller teams that want clarity without enterprise overhead."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_cost_optimization_software"
            heading="Email yourself the sample report"
            body="A simple way to keep the proof asset close while you compare options or share it with someone else on the team."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Pick the path that fits your team</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Whether you need a one-time cost review or ongoing optimization, StackSmart has a plan for that.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">One-time review</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Snapshot — $49</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upload billing data once, get a full savings report with clear next actions. No subscription required.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_routing_snapshot" }} className="btn-primary mt-5 inline-block text-sm">
                Get Snapshot
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ongoing optimization</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Starter or Growth — from $29/mo</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Keep savings visibility running month over month with renewal alerts and ongoing recommendations.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_routing_recurring" }} className="btn-secondary mt-5 inline-block text-sm">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related decision pages"
        title="Compare adjacent ways to cut software spend"
        description="If you're evaluating SaaS cost optimization software, these pages help you compare approaches, review the audit workflow, and pressure-test whether StackSmart fits your team."
        links={[
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See when a fast savings report is more useful than a broad procurement workflow.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with heavier platforms and SMB-friendly alternatives.",
          },
          {
            href: "/zylo-alternative",
            title: "Zylo alternative for growing teams",
            description: "Compare Zylo with a lighter report-first approach when enterprise SaaS management is more than you need.",
          },
          {
            href: "/saas-management-software",
            title: "SaaS management software",
            description: "Evaluate when lightweight SaaS management is enough and when you need a full platform.",
          },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">See the output before you buy</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report and judge whether the output is already enough for your use case.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cost_optimization_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cost_optimization_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
