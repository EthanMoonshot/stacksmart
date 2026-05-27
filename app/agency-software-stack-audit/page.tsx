import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Agency Software Stack Audit",
  description:
    "Audit your agency or web studio software stack for duplicate tools, unused seats, and subscriptions that crept in with client projects. StackSmart turns billing exports into a clear savings report.",
  path: "/agency-software-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/agency-software-stack-audit"),
      url: absoluteUrl("/agency-software-stack-audit"),
      name: "Agency Software Stack Audit | StackSmart",
      description:
        "Audit your agency or web studio software stack for duplicate tools, unused seats, and subscriptions that crept in with client work.",
      isPartOf: { "@id": absoluteUrl("/") },
      publisher: {
        "@type": "Organization",
        name: "StackSmart",
        url: absoluteUrl("/"),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Agency Software Stack Audit",
          item: absoluteUrl("/agency-software-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do agencies accumulate software waste faster than other businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Agencies sign up for tools to serve specific client needs, test new platforms during pitches, and pick up software from freelancers or new hires. When projects end or people leave, the subscriptions often stay active. Over time, a studio of 10 to 30 people can carry significantly more subscriptions than a non-agency business of the same size.",
          },
        },
        {
          "@type": "Question",
          name: "What does an agency software stack audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A software stack audit for an agency covers project management and delivery tools, design and creative platforms, communication and collaboration subscriptions, development and hosting tools, client reporting and analytics platforms, marketing and outreach software, and finance and billing tools. The goal is to find duplicates, unused seats, and subscriptions that are no longer earning their cost.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit agency software subscriptions without disrupting client work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data only — no need to touch live tools. Export 6 to 12 months of charges, group by category, and identify candidates for review. Flag only what is clearly unused or duplicated before taking action. Consolidations should be planned in a gap between projects rather than mid-delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart help with agency software audits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is designed for the kind of messy, multi-tool billing exports that agencies produce. Upload a CSV from your accounting tool, credit card, or expense platform. The report categorises subscriptions, flags duplicates and waste, and gives you specific keep, cut, consolidate, and renegotiate actions — without a platform rollout.",
          },
        },
      ],
    },
  ],
};

const agencyWasteCategories = [
  {
    category: "Project management",
    issue: "Asana, Monday, Trello, and Linear all active at once — adopted by different team leads or client projects over time.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Design and creative",
    issue: "Figma, Adobe CC, and Canva all licensed when most day-to-day work flows through one platform.",
    action: "Right-size",
    color: "text-amber-400",
  },
  {
    category: "Communication",
    issue: "Slack, Teams, and Loom subscriptions running alongside each other — sometimes driven by client preferences.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Client reporting",
    issue: "Analytics and reporting tools signed up per-client that stayed active after the engagement ended.",
    action: "Cut",
    color: "text-red-400",
  },
  {
    category: "Dev and hosting",
    issue: "Staging environments, domain registrations, and developer tool licences that outlived the project they served.",
    action: "Audit and cut",
    color: "text-orange-400",
  },
  {
    category: "Marketing and outreach",
    issue: "Email platforms, SEO tools, and social scheduling apps running at team-size tiers when only one person uses them.",
    action: "Downgrade",
    color: "text-orange-400",
  },
];

export default function AgencySoftwareStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Agency software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit your agency stack before it gets worse
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Agencies accumulate software faster than almost any other business type. A tool for one client, a platform from a new hire, a trial that nobody cancelled. A software stack audit finds the overlap and unused spend before it compounds further.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "agency_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "agency_audit_secondary" }}
                className="btn-secondary text-sm sm:text-base"
              >
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Direct Answer Block */}
      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              What is an agency software stack audit?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              An agency software stack audit is a systematic review of every tool your studio pays for — across project delivery, design, communication, development, client reporting, and business operations. The goal is to find subscriptions that are unused, duplicated across similar tools, or inflated beyond your actual team needs. The output is a clear action list: which tools to keep, which to cut, where to consolidate, and which contracts to renegotiate.
            </p>
          </div>
        </div>
      </section>


      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Agency software audits for owner-led teams, not procurement departments</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Live AU demand is modest but specific — marketing agency software, agency project management software, creative agency software, and web design agency software each show measurable buyer searches. That is enough to justify a focused refresh because agencies keep creating StackSmart-fit waste: client-paid versus agency-paid tools, project-only seats that become permanent, contractor logins, duplicate reporting apps, and converted trials from campaigns that ended months ago.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Agency action map</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Export card and accounting lines for project management, design/prototyping, SEO, reporting, social scheduling, proposal, e-sign, hosting, AI, and client-collaboration tools.</li>
                <li><span className="font-semibold text-white">2.</span> Separate client-pass-through charges from agency-owned subscriptions so margin leaks do not hide inside job costs.</li>
                <li><span className="font-semibold text-white">3.</span> Review freelancers, leavers, project-only seats, duplicate analytics/reporting tools, converted trials, and renewal notices with no named owner.</li>
                <li><span className="font-semibold text-white">4.</span> Turn the stack into practical decisions: keep core delivery tools, cancel dead campaign apps, downgrade inflated tiers, consolidate overlaps, renegotiate annual renewals, and assign renewal owners.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why agencies accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why agencies accumulate software waste faster</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the problem at owner-led studios and boutique agencies.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Client-driven signups",
                "You adopt a tool because a client uses it or an engagement requires it. The project ends. The subscription stays active and quietly charges each month.",
              ],
              [
                "Team-led adoption",
                "New hires, freelancers, or team leads sign up for the tool they prefer without checking whether an existing subscription already covers it.",
              ],
              [
                "Trial-to-paid bleed",
                "Software evaluations during pitches or periods of growth convert to paid plans. Nobody revisits the decision after the pitch is won or the evaluation concludes.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Agency software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where overlap and unused spend appear most frequently in agency billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {agencyWasteCategories.map((item) => (
              <div key={item.category} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${item.color}`}>{item.category}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {item.action}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{item.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day audit workflow */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How to run an agency software stack audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This works in a quieter week and does not require disrupting active client work.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Gather billing data",
                "Pull 6 to 12 months of charges from your business credit card, payment processor, and accounting tool. Cover both monthly and annual subscriptions. Include any tools that individual team members expense through the business.",
              ],
              [
                "Step 2 — Categorise by function",
                "Group every subscription into a workflow bucket: project delivery, design and creative, communication and collaboration, dev and hosting, client reporting, marketing, and business operations. This surfaces overlap across categories immediately.",
              ],
              [
                "Step 3 — Flag candidates for review",
                "Mark every category with more than one active tool as a consolidation candidate. Flag any subscription where the seat count exceeds your current active team. Note contracts renewing within 60 days.",
              ],
              [
                "Step 4 — Prioritise by dollar impact",
                "Rank your flagged items by annual cost. Start with clean cancellations — tools that are clearly unused or replaced. Then plan consolidations across a project gap. Save renegotiations for contracts approaching renewal.",
              ],
              [
                "Step 5 — Act and document",
                "Cancel unused subscriptions before the next cycle. Consolidate overlapping tools deliberately, with a migration plan. Renegotiate contracts with the leverage of an upcoming renewal and a named alternative. Record each decision.",
              ],
            ].map(([title, copy], i) => (
              <div key={title} className="flex gap-4 sm:gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-dark-700 bg-dark-900 text-sm font-semibold text-brand-300">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample findings table */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What an agency audit typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from studio billing exports. Amounts vary by team size and tool mix.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Three project management tools across teams", "Consolidate to one", "$2,400 – $7,200/yr"],
                  ["Post-project client reporting tools still active", "Cancel", "$600 – $2,400/yr"],
                  ["Design tools licensed for non-design roles", "Remove unused seats", "$960 – $3,600/yr"],
                  ["Freelancer accounts kept after offboarding", "Audit and remove", "$480 – $1,800/yr"],
                  ["Annual agency tool renewal, no usage review", "Renegotiate", "$800 – $5,000/yr"],
                  ["Duplicate communication platforms", "Consolidate", "$1,200 – $3,600/yr"],
                ].map(([finding, action, impact]) => (
                  <tr key={finding} className="border-b border-dark-800/60">
                    <td className="py-3 pr-6 text-white">{finding}</td>
                    <td className="py-3 pr-6">{action}</td>
                    <td className="py-3">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your studio?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led agency, web studio, or boutique consultancy with 5 to 50 people</li>
                <li>Software stack grown across multiple projects, hires, and client engagements</li>
                <li>No dedicated ops or IT team managing subscriptions</li>
                <li>You want a fast report and action list, not a platform rollout</li>
                <li>Billing data available from credit card, accounting tool, or invoicing software</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large agency with IT or procurement team already managing SaaS lifecycle</li>
                <li>Need automated provisioning, SSO, or compliance controls</li>
                <li>Primary goal is software governance, not cost reduction</li>
                <li>Fewer than six active software subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "Why do agencies accumulate software waste faster than other businesses?",
                "Agencies sign up for tools to serve specific client needs, test new platforms during pitches, and pick up software from freelancers or new hires. When projects end or people leave, the subscriptions often stay active. Over time, a studio of 10 to 30 people can carry significantly more subscriptions than a non-agency business of the same size.",
              ],
              [
                "What does an agency software stack audit cover?",
                "A software stack audit for an agency covers project management and delivery tools, design and creative platforms, communication and collaboration subscriptions, development and hosting tools, client reporting and analytics platforms, marketing and outreach software, and finance and billing tools. The goal is to find duplicates, unused seats, and subscriptions that are no longer earning their cost.",
              ],
              [
                "How do I audit agency software subscriptions without disrupting client work?",
                "Start with billing data only — no need to touch live tools. Export 6 to 12 months of charges, group by category, and identify candidates for review. Flag only what is clearly unused or duplicated before taking action. Consolidations should be planned in a gap between projects rather than mid-delivery.",
              ],
              [
                "Can StackSmart help with agency software audits?",
                "Yes. StackSmart is designed for the kind of messy, multi-tool billing exports that agencies produce. Upload a CSV from your accounting tool, credit card, or expense platform. The report categorises subscriptions, flags duplicates and waste, and gives you specific keep, cut, consolidate, and renegotiate actions — without a platform rollout.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border-b border-dark-800/60 pb-6">
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="agency_software_audit"
            heading="See what the audit output looks like"
            body="Email yourself the sample report to judge whether the output format works for your studio before uploading anything."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal hits</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report first. See the output format, the finding types, and the action structure — then decide if it fits your studio.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "agency_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "agency_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software stack audits"
        description="If you are auditing your agency software stack, these related pages cover the broader SMB audit guide, the checklist, vertical-specific pages, and the core audit tool."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step walkthrough for turning billing data into a structured audit without a finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A practical checklist for reviewing subscriptions across every category in your stack.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart automates categorisation, duplicate detection, and action planning from billing exports.",
          },
          {
            href: "/marketing-agency-software-stack-audit",
            title: "Marketing agency software stack audit",
            description: "SEO tools, social scheduling, reporting, and design overlap in small marketing and creative studios.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
