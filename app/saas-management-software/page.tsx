import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Management Software for Small Teams",
  description:
    "Compare SaaS management software for owner-led SMBs. See when a billing-export audit beats an enterprise platform for duplicate apps, leaver seats, add-ons, and renewals.",
  path: "/saas-management-software",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "SaaS Management Software for Small Teams | StackSmart",
      description:
        "Compare SaaS management software for owner-led SMBs and see when a billing-export audit beats an enterprise platform for duplicate apps, leaver seats, add-ons, and renewals.",
      url: "https://stacksmart.app/saas-management-software",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "SaaS Management Software", item: "https://stacksmart.app/saas-management-software" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does SaaS management software do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaaS management software helps organizations discover, track, and optimize their software subscriptions. Core capabilities include building a tool inventory, monitoring spend and usage, flagging waste from unused seats or duplicate tools, tracking renewal dates, and producing recommendations to reduce costs — all from a central view rather than scattered spreadsheets.",
          },
        },
        {
          "@type": "Question",
          name: "When is lightweight SaaS management enough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lightweight SaaS management is enough when your team is under 200 people, you don't have formal procurement workflows, and your primary goal is savings visibility rather than governance and compliance. In that case, a tool that produces a savings report from billing data gives you most of the value of a full platform without the implementation overhead.",
          },
        },
        {
          "@type": "Question",
          name: "What should the first useful output look like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The first useful output from any SaaS management tool should be a clean inventory of what you're paying for, clear waste flags (unused seats, duplicate tools, abandoned trials), a renewal calendar with upcoming risk dates, and specific savings recommendations you can act on immediately.",
          },
        },
      ],
    },
  ],
};

export default function SaaSManagementSoftwarePage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Category evaluation</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SaaS management software that gives you useful output fast
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              When a small team needs SaaS management software, the first useful output is a clean inventory, waste flags, renewal risk, and savings recommendations — not a six-month governance rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_management_software_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_management_software_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* GEO-ready direct answer */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white">What does SaaS management software do?</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              SaaS management software helps organizations discover, track, and optimize their software subscriptions. Core capabilities include building a tool inventory, monitoring spend and usage, flagging waste from unused seats or duplicate tools, tracking renewal dates, and producing recommendations to reduce costs — all from a central view rather than scattered spreadsheets.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-white">When is lightweight SaaS management enough?</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              Lightweight SaaS management is enough when your team is under 200 people, you don&apos;t have formal procurement workflows, and your primary goal is savings visibility rather than governance and compliance. In that case, a tool that produces a savings report from billing data gives you most of the value of a full platform without the implementation overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Use-case fit matrix */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Use-case fit: which approach works for your team</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Not every team needs the same level of SaaS management. Here is how the three main approaches compare across the capabilities that actually matter.
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-dark-500 sm:hidden">Swipe table →</p>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-dark-800 sm:mt-8">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="py-3 pr-4 font-semibold text-dark-300">Capability</th>
                  <th className="py-3 px-4 font-semibold text-dark-300">Manual process</th>
                  <th className="py-3 px-4 font-semibold text-dark-300">Enterprise SMP</th>
                  <th className="py-3 px-4 font-semibold text-brand-300">StackSmart</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 font-medium text-white">Tool inventory</td>
                  <td className="py-3 px-4">Manual, error-prone</td>
                  <td className="py-3 px-4">Automated via SSO/agents</td>
                  <td className="py-3 px-4 text-brand-300">From billing data, fast</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 font-medium text-white">Spend visibility</td>
                  <td className="py-3 px-4">Spreadsheet aggregation</td>
                  <td className="py-3 px-4">Full dashboard</td>
                  <td className="py-3 px-4 text-brand-300">Savings report output</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 font-medium text-white">Waste detection</td>
                  <td className="py-3 px-4">Relies on memory</td>
                  <td className="py-3 px-4">Usage-based analytics</td>
                  <td className="py-3 px-4 text-brand-300">Billing pattern analysis</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 font-medium text-white">Renewal tracking</td>
                  <td className="py-3 px-4">Calendar reminders</td>
                  <td className="py-3 px-4">Automated alerts</td>
                  <td className="py-3 px-4 text-brand-300">Flagged in report</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 font-medium text-white">Time to first output</td>
                  <td className="py-3 px-4">8-20 hours</td>
                  <td className="py-3 px-4">6-12 weeks</td>
                  <td className="py-3 px-4 text-brand-300">Under 1 hour</td>
                </tr>
                <tr className="border-b border-dark-800/60">
                  <td className="py-3 pr-4 font-medium text-white">IT involvement</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 px-4">Heavy (SSO, agents)</td>
                  <td className="py-3 px-4 text-brand-300">None</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Best fit</td>
                  <td className="py-3 px-4">Very small teams</td>
                  <td className="py-3 px-4">500+ employees</td>
                  <td className="py-3 px-4 text-brand-300">SMBs (10-200 people)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Capability sections */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What SaaS management should actually solve</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Strip away the enterprise marketing and SaaS management comes down to six concrete problems. Here is how StackSmart handles each one.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Tool inventory</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                You cannot manage what you cannot see. StackSmart builds your inventory from billing data — credit card statements, invoices, accounting exports. No SSO integration or browser agent needed. You get a complete list of what you are paying for in minutes.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Spend visibility</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                See exactly what each tool costs, how spend is trending, and where the biggest line items are. StackSmart breaks down your SaaS spend by category, vendor, and growth trajectory so you know where to focus negotiation effort.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Renewal risk</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Auto-renewal clauses lock teams into another year of spend before anyone notices. StackSmart flags upcoming renewals so you can evaluate, renegotiate, or cancel before the window closes.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Duplicate tools</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Teams adopt tools independently. The result is three project management tools, two video platforms, and redundant storage subscriptions. StackSmart detects functional overlap and recommends consolidation.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Unused seats</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Per-seat pricing means every unused license is direct waste. StackSmart flags tools where your seat count likely exceeds active usage based on billing patterns and team size, so you can right-size before the next renewal.
              </p>
            </div>

            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Vendor and pricing review</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Are you paying a fair price? StackSmart surfaces renegotiation opportunities based on contract size, vendor pricing patterns, and common discount triggers so you know which conversations are worth having.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <div className="mt-4 max-w-3xl">
            <h2 className="text-2xl font-semibold text-white">Most 5-50 staff businesses do not need enterprise SaaS management first. They need a clean software-waste map.</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Enterprise SaaS management software is built for procurement, IT, SSO, approval workflows, and hundreds of managed apps. Owner-led SMBs usually have a different problem: recurring charges spread across cards, Xero or QuickBooks, direct debits, marketplace add-ons, and invoices nobody reviews until a renewal hits. StackSmart starts with the billing evidence and turns it into an action plan before a full platform rollout is justified.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Start from charges", "CSV exports, accounting data, card statements, app-store receipts, and platform invoices reveal the tools people forgot."],
              ["Match to owners", "Assign each tool to a current workflow owner, admin owner, and renewal owner so waste does not hide behind old staff or contractors."],
              ["Act before procurement", "Cut, downgrade, consolidate, renegotiate, or calendar renewals before deciding whether you need heavier governance software."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 rounded-3xl border border-brand-500/25 bg-brand-500/5 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <p className="text-sm leading-7 text-dark-300">Best-fit verticals include clinics, NDIS and community care, childcare, agencies, bookkeeping firms, boutique consultancies, hospitality groups, fitness and wellness operators, property services, and small ecommerce or retail teams that have recurring tools but no dedicated procurement owner.</p>
            <TrackLink href="/small-business-software-audit" event="homepage_cta_clicked" props={{ target: "small_business_audit", location: "seo_saas_management_refresh" }} className="btn-primary text-sm">
              Start with an SMB audit
            </TrackLink>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_management_software"
            heading="See the report before you decide"
            body="Get the sample savings report in your inbox. See inventory, waste flags, renewal risk, and savings recommendations — the exact output StackSmart produces from billing data."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common questions</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white">What should the first useful output look like?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                A clean inventory of what you are paying for, clear waste flags (unused seats, duplicate tools, abandoned trials), a renewal calendar with upcoming risk dates, and specific savings recommendations you can act on immediately. If a tool cannot produce this from billing data alone, it is asking for too much setup relative to the value it delivers.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">How is StackSmart different from enterprise SaaS management platforms?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Enterprise platforms (Zylo, Productiv, Torii) are built for large organizations with dedicated procurement teams, compliance mandates, and multi-month implementation budgets. StackSmart is built for SMB teams that want savings visibility from billing data without the governance overhead. Different problem, different tool.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Can I start with StackSmart and move to a full platform later?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Yes. Many teams use a savings report to understand their current state, act on quick wins, and then decide whether they need broader governance tooling. The report output helps you make that decision with data rather than guessing whether a platform purchase is justified.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">What billing data formats does StackSmart accept?</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Credit card statements (CSV exports from most providers), accounting software exports (QuickBooks, Xero), invoices, and bank transaction data. If it shows recurring software charges, StackSmart can work with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <SeoClusterLinks
        eyebrow="Related pages"
        title="Continue evaluating SaaS management approaches"
        description="If you are evaluating SaaS management software, these pages help you compare specific tools, review audit workflows, and see how StackSmart fits different use cases."
        links={[
          {
            href: "/saas-renewal-management",
            title: "SaaS renewal management",
            description: "Stop surprise renewals and reduce recurring waste with a structured approach.",
          },
          {
            href: "/saas-subscription-management-software",
            title: "SaaS subscription management software",
            description: "Compare subscription management platforms for small businesses.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See where StackSmart fits when cost reduction is the primary goal.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A practical guide to running your first SaaS audit from scratch.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Step-by-step framework for a structured subscription review.",
          },
          {
            href: "/zylo-alternative",
            title: "Zylo alternative",
            description: "Compare Zylo with a lighter report-first approach for growing teams.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">Start with the output, not the platform</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the public sample report. If the output solves your problem, you do not need a six-month platform rollout. If it does not, you will know exactly what capabilities to look for next.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_management_software_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_management_software_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
