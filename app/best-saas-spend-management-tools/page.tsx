import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Best SaaS Spend Management Tools for SMBs",
  description:
    "Compare the best SaaS spend management tools for SMBs, including when a lightweight self-serve savings report is enough and when a broader platform makes sense.",
  path: "/best-saas-spend-management-tools",
});

export default function BestSaaSSpendManagementToolsPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Comparison page</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Best SaaS spend management tools, depending on what problem you actually need to solve</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Some teams need a full spend-management platform. Others just need a fast answer on where waste is hiding. The best tool depends on whether your priority is control, procurement workflow, or immediate savings clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_best_tools_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_best_tools_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["For immediate savings visibility", "Use a lighter self-serve tool when you want fast output from billing data, not a heavyweight rollout."],
              ["For process and control", "Use a broader platform when approvals, procurement workflow, and spend governance matter more than quick review."],
              ["For SMB speed", "Smaller teams usually benefit from faster time-to-answer rather than enterprise-style software operations tooling."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Where StackSmart fits</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>StackSmart is a good fit when the goal is to get a fast, buyer-facing savings report from billing exports and invoice data.</p>
            <p>It is not pretending to be a full procurement suite. It is built to help SMBs identify likely waste, overlap, and pricing mismatch quickly.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_best_saas_spend_management_tools"
            heading="Send the sample report to your inbox"
            body="A simple way to keep the proof asset close while you compare StackSmart against broader spend-management tools."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See if the output matches what you need</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Before comparing platforms abstractly, open the public sample report and judge whether the output is already enough for your use case.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_best_tools_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_best_tools_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related decision pages"
        title="Explore adjacent spend-review paths"
        description="If you are comparing SaaS spend tools, these pages help you move from broad comparison into a more specific audit, software-management, or alternative decision path."
        links={[
          {
            href: "/cledara-alternative",
            title: "Cledara alternative for small teams",
            description: "Compare whether you need a platform or a lighter buyer-facing report-first workflow.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See where StackSmart fits when the main job is fast savings visibility rather than process control.",
          },
          {
            href: "/spendesk-alternative",
            title: "Spendesk alternative for SMBs",
            description: "See how a report-first workflow compares to Spendesk when your priority is fast savings visibility.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
