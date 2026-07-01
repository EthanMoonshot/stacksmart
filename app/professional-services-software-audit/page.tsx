import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Professional Services Software Audit",
  description:
    "Audit your consultancy or professional services firm's software subscriptions for duplicate project management, proposals, time tracking, CRM, and AI tools. StackSmart turns billing exports into a clear savings report.",
  path: "/professional-services-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/professional-services-software-audit"),
      url: absoluteUrl("/professional-services-software-audit"),
      name: "Professional Services Software Audit | StackSmart",
      description:
        "Audit your professional services firm's software subscriptions for duplicate tools, unused seats, and subscriptions that accumulated across project work and team growth.",
      dateModified: "2026-07-02",
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
          name: "Professional Services Software Audit",
          item: absoluteUrl("/professional-services-software-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do professional services firms accumulate software waste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Boutique consultancies and professional services firms sign up for tools to win work, deliver projects, and support a growing team. Proposal tools, time trackers, CRM platforms, project management software, and AI transcription apps each get added incrementally. When team size stabilises or a tool gets replaced, the old subscription rarely gets cancelled. A 10-person firm can easily carry three project management platforms, two proposal tools, and multiple time trackers billing simultaneously.",
          },
        },
        {
          "@type": "Question",
          name: "What does a professional services software audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A professional services software audit covers project management platforms, client proposal and quoting tools, time tracking and billing software, CRM and pipeline management, document management and e-signature, reporting and analytics, AI meeting transcription and note-taking, communication and collaboration tools, marketing and outreach platforms, and accounting and invoicing software. The goal is to find duplicates, unused seats, and tools priced at tiers beyond what a boutique firm actually uses.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit software subscriptions for a consultancy without disrupting client delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data only — no need to change anything live while projects are running. Export 6 to 12 months of charges, group by function, and identify where more than one tool covers the same workflow. Flag unused seats and tools where no team member has logged in recently. Plan any consolidation or migration for a gap between project phases, not during active delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart help professional services firms find software savings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is well-suited to boutique consultancies and professional services firms with layered software spend and no dedicated IT or procurement role. Upload a CSV from Xero, QuickBooks, or your card statement. The report categorises every subscription, flags duplicates and unused seats, and produces a clear keep, cut, consolidate, and renegotiate action list.",
          },
        },
        {
          "@type": "Question",
          name: "What changed in the 2026 owner-led SMB proof refresh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 2026 refresh adds stronger owner-led SMB proof: billing-export-only boundaries, late-fee and barely-used-subscription examples, recurring-payment cleanup, renewal-owner assignment, and practical keep, cancel, downgrade, consolidate, and renegotiate actions for smaller teams without procurement maturity.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Project management",
    issue: "Asana, Monday.com, ClickUp, Notion, and Basecamp all active across different teams or client project types — each adopted by a different principal or project lead.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Proposals and quoting",
    issue: "Proposify, PandaDoc, and Better Proposals all installed — two from testing, one in active use — and the testing subscriptions never cancelled.",
    action: "Cut duplicates",
    color: "text-red-400",
  },
  {
    category: "Time tracking",
    issue: "Harvest, Toggl Track, and Clockify all billing simultaneously because different team members prefer different tools, with no firm-wide standard enforced.",
    action: "Standardise one",
    color: "text-amber-400",
  },
  {
    category: "CRM and pipeline",
    issue: "HubSpot and Pipedrive both active — one from business development, one from a past hire — with pipeline data split across both platforms and neither fully maintained.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "AI and transcription tools",
    issue: "Otter.ai, Fireflies.ai, and Grain all licensed across the team for meeting notes — adopted rapidly during a period of AI tool experimentation and never reviewed.",
    action: "Cut to one",
    color: "text-orange-400",
  },
  {
    category: "Document and e-sign",
    issue: "DocuSign, Dropbox Sign, and Adobe Acrobat Sign all running when one platform handles all client contracts, proposals, and compliance documents.",
    action: "Consolidate",
    color: "text-orange-400",
  },
];

export default function ProfessionalServicesSoftwareAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Professional services software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit your firm's software before the stack gets out of hand
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Boutique consultancies and professional services firms accumulate software one tool at a time — a new project management platform, a proposal tool, a time tracker, an AI transcription app. Without a clear picture of what is being used, creeping SaaS spend becomes a costly habit. A software audit finds what to cut, consolidate, and renegotiate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "professional_services_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "professional_services_audit_secondary" }}
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
              What is a professional services software audit?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A professional services software audit is a structured review of every tool a boutique firm or consultancy pays for — across project management, proposals, time tracking, CRM, document management, e-signature, reporting, AI tools, communication, marketing, and accounting. The goal is to find subscriptions that are duplicated across similar tools, seats that no longer match your active headcount, and plans priced at tiers your team has never actually used. The output is a clear action list: keep, cut, consolidate, or renegotiate.
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
              <h2 className="mt-3 text-2xl font-semibold text-white">Professional-services software waste usually hides between projects</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Current AU checks show professional services software (50), consulting firm software (10), and project management software for consultants (10). StackSmart targets the practical owner-led firm problem underneath those searches: tools bought for a client, matter, engagement, proposal, or delivery sprint keep billing after the project closes because no one owns the renewal or seat cleanup.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Professional-services action map</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Collect billing lines for practice/project management, document management, CRM, proposal, e-sign, AI notes, research databases, client portals, and time/billing tools.</li>
                <li><span className="font-semibold text-white">2.</span> Separate firm-owned subscriptions from client or project-pass-through expenses so recoverable spend is not mistaken for overhead.</li>
                <li><span className="font-semibold text-white">3.</span> Check partner/admin owners, temporary project seats, contractor/leaver access, duplicate document/e-sign tools, and renewals with no named decision maker.</li>
                <li><span className="font-semibold text-white">4.</span> Output a simple keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner plan between project phases — without reading client files or confidential matter data.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why firms accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why professional services firms accumulate software waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the problem at owner-led consultancies and boutique firms.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Hire-driven tool sprawl",
                "Each new senior hire brings their preferred stack — a different project management tool, a different time tracker, a different proposal platform. Over time a 12-person firm runs four versions of the same workflow across four different tools.",
              ],
              [
                "AI tool experimentation",
                "The rapid proliferation of AI meeting, writing, and productivity tools has created a new category of fast-accumulating subscriptions. Most firms trialled three or four and kept them all active without a review.",
              ],
              [
                "Growth-phase over-buying",
                "During a period of growth, firms upgrade to Business or Enterprise tiers expecting to fill the seats. When growth stabilises, the tier stays — and the overpayment continues on auto-renew.",
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
          <h2 className="text-2xl font-semibold text-white">Professional services software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where overlap and unused spend appear most frequently in consultancy billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteCategories.map((item) => (
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
          <h2 className="text-2xl font-semibold text-white">How to run a professional services software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This runs between project phases and does not require disrupting active client work.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Pull billing data",
                "Export 6 to 12 months of charges from your accounting tool, business card, and expense system. Include both firm-level subscriptions and any tools individual team members expense. Annual subscriptions need the full 12-month window.",
              ],
              [
                "Step 2 — Group by workflow function",
                "Organise every subscription: project management, proposals and quoting, time tracking, CRM, document and e-sign, reporting, AI and productivity tools, communication, marketing, and accounting. Any category with more than one active tool is an immediate consolidation candidate.",
              ],
              [
                "Step 3 — Verify seat counts",
                "For each tool, compare the licensed seat count against your current active team roster. Flag where the seat count exceeds active staff by more than one or two. These are the easiest items to act on.",
              ],
              [
                "Step 4 — Size and prioritise",
                "Calculate annual cost for every flagged item. Rank by dollar impact. Start with unused subscriptions — tools nobody has opened in 60+ days. Then plan tier downgrades, consolidations, and renegotiations in order of value.",
              ],
              [
                "Step 5 — Act and document decisions",
                "Cancel unused tools before the next billing cycle. Consolidate overlapping platforms with a migration plan that does not disrupt active project delivery. Renegotiate annual contracts approaching renewal before auto-renew locks in another year.",
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
          <h2 className="text-2xl font-semibold text-white">What a professional services software audit typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from consultancy and professional services billing exports. Amounts vary by team size and tool mix.
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
                  ["Two proposal platforms, one actively used", "Cancel unused", "$600 – $2,400/yr"],
                  ["AI transcription tools duplicated across team", "Standardise one", "$480 – $2,400/yr"],
                  ["CRM seats above active headcount", "Right-size licences", "$960 – $3,600/yr"],
                  ["Time tracker subscriptions per-person, no standard", "Consolidate", "$720 – $2,880/yr"],
                  ["Annual project management contract, no review", "Renegotiate before renewal", "$1,200 – $5,000/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your firm?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led consultancy, advisory firm, or boutique professional services business</li>
                <li>5 to 50 staff with software that has grown tool-by-tool over time</li>
                <li>No dedicated IT, ops, or procurement team managing subscriptions</li>
                <li>You want a report and action list — not a platform to manage</li>
                <li>Billing data available from Xero, QuickBooks, or business card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large firm with IT, legal, and procurement teams handling SaaS lifecycle</li>
                <li>Need automated provisioning, SSO, or compliance workflows</li>
                <li>Primary goal is security governance, not cost reduction</li>
                <li>Fewer than six active software subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">A practical software audit for partner-led firms without procurement maturity</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Boutique advisory, consulting, and professional services firms often buy software project-by-project. The audit should help an owner see which proposal, CRM, project, time, document, e-sign, AI, and client delivery tools still earn their place after the project or contractor has moved on.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Project-only tools", "Spot subscriptions bought for one client engagement, pitch, or implementation that became permanent card charges after the work ended."],
              ["Contractor and leaver seats", "Find project-management, time-tracking, AI meeting, document, and CRM seats still assigned to departed contractors, freelancers, or former staff."],
              ["Stack standardisation", "Choose the default tool for proposals, CRM, delivery, time, files, and signing so every partner is not funding their preferred alternative."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* June 9 owner-led proof/conversion refresh */}
      <section className="border-t border-dark-800/80 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 owner-led professional services audit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Audit the delivery stack between project phases</h2>
            <p className="mt-4 text-base leading-7 text-dark-300">DataForSEO AU checks (June 2026) show professional services automation software at 210 monthly searches / $116.20 CPC and software subscriptions at 70 / $50.53 CPC. That CPC signals serious commercial intent. StackSmart meets it practically: before buying a PSA platform, reconcile the billing export for duplicate project management tools, proposal platforms nobody standardised, CRM overlap, time-tracking sprawl, converted trial AI tools, reporting dashboard add-ons, and client portal seats that outlived the engagement.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">1. Separate firm tools from project pass-throughs</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Pull card statements, Xero/QuickBooks exports, and vendor invoices. Group by PSA/project management, CRM, proposals, time tracking, reporting dashboards, doc/e-sign, research/AI, transcription, accounting, and client portals. Separate firm-owned subscriptions from client-reimbursable charges so recoverable spend is not confused with project overhead.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">2. Flag partner-preference tools and leaver seats</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Compare paid licences to the current partner, consultant, contractor, and admin roster. Flag unused licence seats from departed contractors, converted trial accounts, AI/tool overlap where three transcription or meeting-note apps cover the same job, and duplicate doc/e-sign platforms that were never consolidated across the firm.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">3. Assign renewal owners before auto-renew</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">PSA/project management, CRM, proposal, time-tracking, reporting, doc/e-sign, research/AI, and accounting tools all renew on different schedules. Each needs one named owner and a notice-window date. The output is a keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner action list the principal can hand to an operations lead.</p>
              </div>
          </div>
          <div className="mt-8 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Owner-led proof: billing exports only — no client files or project IP</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">StackSmart uses billing exports, card statements, and vendor invoices only — no client files, commercial documents, project IP, or system credentials. The principal, practice manager, or bookkeeper runs the first pass between project phases. Findings cover duplicate charges, platform add-ons, converted trials, unused licences, connector fees, AI/tool overlap, and ownerless renewals across the professional services delivery stack.</p>
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
                "Why do professional services firms accumulate software waste?",
                "Boutique consultancies and professional services firms sign up for tools to win work, deliver projects, and support a growing team. Proposal tools, time trackers, CRM platforms, project management software, and AI transcription apps each get added incrementally. When team size stabilises or a tool gets replaced, the old subscription rarely gets cancelled.",
              ],
              [
                "What does a professional services software audit cover?",
                "A professional services software audit covers project management platforms, client proposal and quoting tools, time tracking and billing software, CRM and pipeline management, document management and e-signature, reporting and analytics, AI meeting transcription and note-taking, communication and collaboration tools, marketing and outreach platforms, and accounting and invoicing software.",
              ],
              [
                "How do I audit software subscriptions for a consultancy without disrupting client delivery?",
                "Start with billing data only — no need to change anything live while projects are running. Export 6 to 12 months of charges, group by function, and identify where more than one tool covers the same workflow. Flag unused seats and tools where no team member has logged in recently. Plan any consolidation or migration for a gap between project phases.",
              ],
              [
                "Can StackSmart help professional services firms find software savings?",
                "Yes. StackSmart is well-suited to boutique consultancies and professional services firms with layered software spend and no dedicated IT or procurement role. Upload a CSV from Xero, QuickBooks, or your card statement. The report categorises every subscription, flags duplicates and unused seats, and produces a clear keep, cut, consolidate, and renegotiate action list.",
              ],

              [
                "What changed in the 2026 owner-led SMB proof refresh?",
                "The 2026 refresh adds stronger owner-led SMB proof: billing-export-only boundaries, late-fee and barely-used-subscription examples, recurring-payment cleanup, renewal-owner assignment, and practical keep, cancel, downgrade, consolidate, and renegotiate actions for smaller teams without procurement maturity.",
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
            location="professional_services_audit"
            heading="See what the audit output looks like"
            body="Email yourself the sample report to review the finding types and action format before uploading your firm's billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit between project phases</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data — then decide if it fits your firm's next review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "professional_services_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "professional_services_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <OwnerLedRefreshSection type="professionalServices" />

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for owner-led businesses"
        description="If you are auditing your firm's software spend, these related guides cover the broader SMB audit approach and vertical-specific pages for other service businesses."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
          },
          {
            href: "/agency-software-stack-audit",
            title: "Agency software stack audit",
            description: "Audit guide for creative and digital agencies with project-driven tool spread.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step walkthrough for turning billing data into a structured audit without a finance team.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, document, and e-sign stack audit guide for small accounting and bookkeeping firms.",
          },
          {
            href: "/law-firm-software-subscription-audit",
            title: "Law firm software subscription audit",
            description: "Matter management, dictation, e-sign, and research stack audit for boutique and owner-led law firms.",
          },
          {
            href: "/consulting-firm-software-stack-audit",
            title: "Consulting firm software stack audit",
            description: "Project management, CRM, proposals, time tracking, AI tools, and reporting audit for owner-led consultancies.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart automates categorisation, duplicate detection, and action planning from billing exports.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
