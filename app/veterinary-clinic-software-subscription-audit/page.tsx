import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedProofRefresh from "@/components/landing/OwnerLedProofRefresh";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Veterinary Clinic Software Subscription Audit | Cut Software Waste in Your Vet Practice",
  description:
    "Vet clinics carry practice management, online booking, reminders, payment terminals, inventory and pharmacy add-ons, payroll, team comms, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate — using billing exports only.",
  path: "/veterinary-clinic-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/veterinary-clinic-software-subscription-audit"),
      url: absoluteUrl("/veterinary-clinic-software-subscription-audit"),
      name: "Veterinary Clinic Software Subscription Audit | StackSmart",
      description:
        "Vet clinics carry practice management, online booking, reminders, payment terminals, inventory and pharmacy add-ons, payroll, team comms, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate — using billing exports only.",
      dateModified: "2026-06-14",
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
          name: "Small Business Software Audit",
          item: absoluteUrl("/small-business-software-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Veterinary Clinic Software Subscription Audit",
          item: absoluteUrl("/veterinary-clinic-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software do small veterinary clinics typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small veterinary clinic typically pays for a practice management system (Ezyvet, RxWorks, Vetlink, Provet Cloud), an online booking platform (VetBooker, HotDoc for Vets, or a generic booking tool), patient reminder and recall software, inventory and pharmacy management (sometimes a standalone tool alongside the practice management system), payment terminal software, payroll and HR (Xero Payroll, Employment Hero, MYOB), team communications (Slack, Microsoft Teams), accounting (Xero, MYOB), and review and marketing tools. Clinics that have grown or changed systems often carry point solutions that now duplicate features in their core practice management platform.",
          },
        },
        {
          "@type": "Question",
          name: "How do vet clinics audit software subscriptions without a dedicated admin function?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from your business bank account, credit card, and Xero or MYOB. You do not need patient records or clinical history — billing exports show vendor names, amounts, and billing dates, which is sufficient to identify overlap, idle accounts, and renewal risk. Group every charge by function: practice management, booking, recalls, inventory, payments, payroll, comms, accounting, and marketing. For any category with more than one tool, check whether your core practice management system now handles that function natively. StackSmart automates the grouping step from a billing export.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common software waste in veterinary practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common findings are a standalone online booking tool running alongside booking features in the practice management system, a separate reminder or recall platform duplicating reminder functionality already in the PMS, and idle staff accounts on per-user platforms after team turnover. Inventory add-on subscriptions are also frequently identified — some clinics pay for a pharmacy or inventory module as an add-on while the base practice management system includes the same functionality at their current tier.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time for a vet clinic to audit its software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management systems are typically billed annually and carry the highest per-seat cost. For many clinics, the quieter winter months (June to August in Australia, January to February in the northern hemisphere) provide a natural window to run a review when the clinical pace is slightly lower.",
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

const wasteSignals = [
  {
    label: "Standalone booking tool alongside PMS booking module",
    detail:
      "A third-party booking platform running in parallel with online booking features in Ezyvet, Provet Cloud, or RxWorks. Many vet practices adopted a booking tool before the practice management system included patient-facing scheduling, and both are still billing.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Separate reminder platform duplicating PMS reminders",
    detail:
      "A standalone reminder or recall tool active alongside automated reminder functionality in the practice management system. Most modern vet PMS platforms include appointment reminders and recall workflows — a separate SMS or email reminder service is often redundant.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Inventory or pharmacy add-on included in base PMS tier",
    detail:
      "A paid inventory or pharmacy module subscription where the current PMS plan already includes this functionality. This is common after platform upgrades or plan changes where features shift between tiers and the add-on was not reviewed.",
    color: "text-amber-400",
    tag: "Cancel add-on",
  },
  {
    label: "Ghost licences after staff and vet departures",
    detail:
      "Per-user veterinary practice management, payroll, and team comms platforms rarely auto-remove accounts after staff leave. On a platform billing $50 to $150 per user per month, two or three idle vet or nurse accounts are significant annual spend.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Review and marketing platform on an unused tier",
    detail:
      "A review management or social media marketing tool on a Business or Pro plan selected during a growth initiative, with the practice since reverting to organic channels. Monthly subscription at a tier that far exceeds actual usage volume.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    label: "Team comms tool alongside practice management messaging",
    detail:
      "Slack or Microsoft Teams running alongside internal messaging and task features in the PMS or a separate clinic management tool. Small vet teams often adopted Slack for convenience, but the communication surface it provides is now duplicated in their clinical platform.",
    color: "text-brand-400",
    tag: "Audit overlap",
  },
];

export default function VeterinaryClinicSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Veterinary clinic software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Veterinary clinic software subscription audit
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Vet clinics carry more recurring software than most small service businesses — practice management, online booking, reminders, inventory, pharmacy add-ons, payment terminals, payroll, team comms, accounting, and marketing tools. As core practice management platforms have expanded their feature sets, many clinics are paying for tools that duplicate what their PMS already includes. The audit works from billing exports only — no patient records or clinical data involved.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "vet_clinic_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "vet_clinic_audit_secondary" }}
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
              What is a veterinary clinic software subscription audit, and why do vet practices need one?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A veterinary clinic software subscription audit is a structured review of every recurring software charge the practice pays — practice management systems, online booking platforms, reminder and recall tools, inventory and pharmacy add-ons, payment software, payroll and HR, team communications, accounting, and marketing. The goal is to identify tools that duplicate features already included in the core practice management system, add-on subscriptions that overlap with the current PMS tier, idle staff accounts on per-user platforms, and contracts renewing above current headcount. The audit uses billing export data only — no patient records, clinical histories, or operational system access is required. For owner-led clinics and practice managers without a dedicated admin or ops function, a billing export is the fastest path to a structured waste review.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical veterinary clinic software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most independent vet clinics with 3 to 12 staff are running 10 to 18 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Practice management system", "Ezyvet, Provet Cloud, RxWorks, Vetlink, Cornerstone — the clinical and operational core. Most now include online booking, reminders, client comms, and inventory that once required separate tools."],
              ["Online booking and scheduling", "VetBooker, PetYeti, or a generic booking tool — patient-facing appointment scheduling. Often adopted before the PMS included this capability, and frequently still active after the PMS booking module was enabled."],
              ["Reminders and recalls", "Standalone SMS or email reminder tools — automated appointment reminders and wellness recall campaigns. Most modern PMS platforms include reminder and recall workflows natively."],
              ["Inventory and pharmacy management", "Add-on inventory or pharmacy modules — sometimes purchased as a separate subscription when the base PMS tier includes equivalent functionality, particularly after platform plan changes."],
              ["Payroll, HR, and team management", "Xero Payroll, Employment Hero, MYOB, Deputy — payroll and rostering tools. Small clinic teams often carry a payroll platform and a separate rostering or team comms tool that now overlap."],
              ["Accounting and payments", "Xero, MYOB — accounting platforms. Payment terminal software (Tyro, Square, Stripe) is sometimes subscribed to separately from the PMS payment integration, creating parallel payment processing costs."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in veterinary clinics</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing vet clinic billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteSignals.map((s) => (
              <div key={s.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${s.color}`}>{s.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day workflow */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a veterinary clinic</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed for a practice owner or head nurse. No IT function or clinical data access required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from your business bank account, credit card, and Xero or MYOB. Include any subscriptions billed to personal cards used for clinic tools. Aim for 12 months — practice management systems and clinical platforms often bill annually. Consolidate into one list with vendor name, amount, and billing frequency.",
              ],
              [
                "Week 2 — Map the stack and identify overlap",
                "Group every subscription by function: practice management, booking, reminders and recalls, inventory and pharmacy, payments, payroll, rostering, team comms, accounting, and marketing. For any category with more than one tool, open your PMS and check what it now includes at your current tier. Booking, reminders, inventory, and comms are the categories most likely to have native PMS capability that an older point-solution subscription duplicates.",
              ],
              [
                "Week 3 — Size the savings and prioritise",
                "Pull user lists from each per-seat platform and compare against current headcount for vets, nurses, and admin staff. Calculate the annual cost of each idle account and each redundant tool. Rank by dollar value and ease of action — cancellations first, then consolidation, downgrade, and renegotiation for contracts renewing within 90 days.",
              ],
              [
                "Week 4 — Act and document",
                "Remove idle accounts and cancel confirmed redundant tools before the next billing cycle. Where consolidation requires testing PMS features that replace a point solution, schedule a week of parallel running before cancellation. Contact vendors for annual contracts renewing soon — current headcount and usage data are useful leverage. Document every decision for the next review cycle.",
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

      {/* Sample findings */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Example findings from a veterinary clinic software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Illustrative examples based on common patterns in vet clinic billing data. Actual amounts vary by practice size and stack.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual saving</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Booking platform running alongside PMS booking module", "Consolidate to PMS booking", "$840 – $3,600/yr"],
                  ["Reminder tool active, PMS reminder module unused", "Cancel reminder tool", "$480 – $1,920/yr"],
                  ["3 idle staff accounts in practice management system", "Remove inactive accounts", "$1,440 – $5,400/yr"],
                  ["Inventory add-on included in current PMS plan tier", "Cancel add-on subscription", "$600 – $2,400/yr"],
                  ["Marketing tool on Growth plan, one campaign per quarter", "Downgrade to lower tier", "$480 – $1,800/yr"],
                  ["Team comms tool, internal messaging in PMS unused", "Consolidate to PMS messaging", "$360 – $1,440/yr"],
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


      {/* June 2026 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">June 2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Vet practice management software is a $9.79 CPC search — the real spend problem is the paid layer around it</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                DataForSEO AU live checks show veterinary practice management software at 50 monthly searches with a $9.79 CPC and $12.98 high top bid. The category demand is real, but most owner-led clinics do not need another procurement project. They need the paid layer around their existing PMS reconciled from billing exports — the add-ons, reminders, booking tools, inventory modules, and staff seats that duplicate what the practice management system already includes.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart reviews PMS add-ons, reminders, online booking, stock and inventory tools, lab and diagnostics connectors, forms, payment tools, payroll, marketing, review platforms, and casual or locum seats — billing data only, no animal health records or PMS credentials. The output is a credit-card statement audit with a keep, cancel, downgrade, consolidate, renegotiate decision and a named renewal owner for every subscription.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-base font-semibold text-white">Vet clinic billing-export workflow</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Export 12 months of Xero/MYOB/card charges so annual PMS, diagnostic, inventory, and reminder renewals appear. Include any tools on personal cards.</li>
                <li><span className="font-semibold text-white">2.</span> Separate clinical must-keep systems from optional add-ons, duplicate reminders, review tools, and marketing subscriptions that may duplicate PMS features.</li>
                <li><span className="font-semibold text-white">3.</span> Run the seat and offboarding check: match paid accounts to current vets, nurses, reception, locums, and former contractors. Flag anyone not on the current roster.</li>
                <li><span className="font-semibold text-white">4.</span> Produce the practical list: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner. Hand the list to the practice manager or admin to execute.</li>
              </ol>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/clinic-software-subscription-audit" event="homepage_cta_clicked" props={{ target: "clinic_audit", location: "vet_2026_06_14" }} className="btn-secondary text-sm">General clinic audit</TrackLink>
                <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "vet_2026_06_14" }} className="btn-primary text-sm">See the audit tool</TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Renewal and data-boundary proof block */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              [
                "Renewal windows that matter",
                "StackSmart highlights PMS, reminder, telehealth, forms, diagnostics, payment, payroll, and marketing subscriptions with annual renewals inside the next 90 days so the clinic owner can act before auto-renew clauses roll over.",
              ],
              [
                "Seat and role cleanup",
                "Part-time vets, locums, nurses, reception staff, and former contractors often leave paid seats behind. The audit separates clinical access decisions from obvious billing and roster mismatches.",
              ],
              [
                "Billing data only",
                "The review does not require patient records, clinical notes, animal health data, lab results, or PMS login access. Vendor, amount, date, and billing frequency are enough to find recurring waste.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for vet clinics</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the manual categorisation step so the review happens in hours rather than being deferred.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export bank, card, and accounting statements separately</li>
                <li>Manually categorise every charge by clinical function</li>
                <li>Pull user lists from each platform individually</li>
                <li>Research which PMS features now overlap point solutions</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings into something shareable with the practice owner</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export — no clinical data needed</li>
                <li>Automatic categorisation across vet clinic tool categories</li>
                <li>Flags duplicate tools, idle seats, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready immediately</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your vet practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Independent or small-group vet clinic with roughly 5 to 50 staff</li>
                <li>Practice owner, clinic manager, or head nurse responsible for software decisions</li>
                <li>Paying for a PMS plus 4 or more additional tools</li>
                <li>No dedicated IT, ops, or procurement function</li>
                <li>Billing data accessible from bank statements, card, or Xero/MYOB</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large corporate veterinary group with a dedicated procurement function</li>
                <li>Primary need is clinical compliance or data governance auditing</li>
                <li>Fewer than five software subscriptions across the practice</li>
                <li>Requires automated provisioning, SSO, or directory integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <OwnerLedProofRefresh
        title='What the 2026 owner-led vet clinic audit now proves'
        summary='The refresh focuses on smaller veterinary clinics where the owner, practice manager, and bookkeeper share software admin. The page now answers veterinary practice management software searches with a billing-led cleanup path for PMS add-ons, reminders, inventory, payment, payroll, team comms, AI, and review tools — without touching patient or clinical records.'
        proofItems={[{ label: 'PMS feature overlap', finding: 'Standalone booking, recall, or client-message tools keep billing after the practice management system adds comparable features.', action: 'Consolidate' }, { label: 'Former staff seats', finding: 'Per-user payroll, comms, inventory, AI note, or document tools still include leavers, locums, or contractors after roster changes.', action: 'Cancel seats' }, { label: 'Inventory and reminder renewals', finding: 'Annual add-ons renew quietly at the old clinic size or locked-rate uplift with no owner comparing actual use.', action: 'Renegotiate' }]}
        boundaries={['Works from business billing exports and card statements, not patient files, treatment notes, or medical records.', 'Designed for clinics with lean admin capacity, not corporate veterinary groups with procurement teams.', 'Separates core clinical systems from admin subscriptions so the first audit is low disruption.', 'Produces a keep/cancel/downgrade/consolidate/renegotiate list the owner can review with the practice manager.']}
        location='vet_clinic_audit'
      />

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What software do small veterinary clinics typically subscribe to?",
                "A small vet clinic typically pays for a practice management system (Ezyvet, Provet Cloud, RxWorks, Vetlink), an online booking platform, reminder and recall tools, inventory and pharmacy add-ons, payment terminal software, payroll and HR (Employment Hero, Xero Payroll), team communications, accounting (Xero, MYOB), and review or marketing tools. Clinics that have grown or changed systems often carry point solutions that now duplicate features in their core practice management platform.",
              ],
              [
                "How do vet clinics audit software subscriptions without a dedicated admin function?",
                "Export 6 to 12 months of billing data from your business bank account, credit card, and Xero or MYOB. Group every charge by function and check whether your core practice management system now handles any functions you are paying for separately. Booking, reminders, inventory, and team comms are the categories most likely to have native PMS capability running alongside an older point-solution subscription.",
              ],
              [
                "What is the most common software waste in veterinary practices?",
                "The most common findings are a standalone booking tool running alongside booking features in the PMS, a separate reminder or recall platform duplicating reminder functionality already in the practice management system, and idle staff accounts on per-user platforms after staff turnover. Inventory add-on subscriptions are also frequently identified where the base PMS tier already includes equivalent functionality.",
              ],
              [
                "When is the best time for a vet clinic to audit its software subscriptions?",
                "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management systems are typically billed annually and carry the highest per-seat cost. For many clinics, slightly quieter seasonal periods provide a natural window to run a review without disrupting clinical operations.",
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
            location="vet_clinic_audit"
            heading="See what a veterinary clinic software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data. No patient records or clinical data required."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next PMS renewal</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "vet_clinic_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "vet_clinic_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for owner-led health and service businesses"
        description="These pages cover the software audit process for other owner-led SMB verticals with recurring software stacks."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/medical-practice-software-subscription-audit",
            title: "Medical practice software subscription audit",
            description: "GP and specialist clinics — booking, telehealth, recalls, billing, and admin tool overlap.",
          },
          {
            href: "/dental-practice-software-subscription-audit",
            title: "Dental practice software subscription audit",
            description: "Booking, clinical records, imaging, billing, recalls, and patient comms overlap in dental stacks.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "General guide for clinic-format businesses reviewing recurring software subscriptions.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Physio, OT, speech, and allied health clinics — booking, clinical, billing, and NDIS tool overlap.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Step-by-step process for reviewing recurring software spend without a procurement specialist.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
