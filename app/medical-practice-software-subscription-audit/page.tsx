import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedProofRefresh from "@/components/landing/OwnerLedProofRefresh";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Medical Practice Software Subscription Audit | Cut Software Waste in Your Clinic",
  description:
    "GP and specialist clinics carry booking, recalls, telehealth, billing, forms, marketing, payroll, accounting, rostering, and patient comms subscriptions. A software audit finds what to cut, consolidate, and renegotiate — using billing exports only, not patient records.",
  path: "/medical-practice-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/medical-practice-software-subscription-audit"),
      url: absoluteUrl("/medical-practice-software-subscription-audit"),
      name: "Medical Practice Software Subscription Audit | StackSmart",
      description:
        "GP and specialist clinics carry booking, recalls, telehealth, billing, forms, marketing, payroll, accounting, rostering, and patient comms subscriptions. A software audit finds what to cut, consolidate, and renegotiate — using billing exports only, not patient records.",
      dateModified: "2026-06-10",
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
          name: "Medical Practice Software Subscription Audit",
          item: absoluteUrl("/medical-practice-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software do small medical practices typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small GP or specialist clinic typically pays for a practice management and clinical system (Best Practice, Medical Director, Genie, Cliniko), an online booking platform (HotDoc, HealthEngine, Coreplus), telehealth software (Coviu, Healthdirect Video), a patient recall and reminder tool, billing and Medicare claiming software, payroll and rostering (Employment Hero, Deputy, Tanda), accounting (Xero, MYOB), a forms platform (Fillout, Typeform, Halaxy Forms), a patient communication or marketing tool, and sometimes a separate patient engagement app. Practices that adopted point solutions early often carry overlapping tools as their core practice management system has expanded.",
          },
        },
        {
          "@type": "Question",
          name: "How do medical practices audit software subscriptions without a dedicated ops function?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from your practice bank account, business credit card, and Xero or MYOB. You do not need patient records or clinical data — billing exports show vendor names, amounts, and billing dates, which is enough to identify overlap, idle seats, and renewal risk. Group charges by function: booking, clinical/practice management, telehealth, recalls, billing, comms, payroll, rostering, accounting, and marketing. For any category with more than one active tool, check whether your core practice management system now includes that capability natively. StackSmart automates the grouping step from a billing export.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common software waste in medical practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common findings are a standalone online booking platform running alongside booking features in the core clinical system, duplicate patient recall or reminder tools, and a telehealth subscription that overlapped with a Medicare-funded telehealth period and was never cancelled. Rostering and payroll overlap is also common — practices that added a rostering app often still carry a payroll HR platform with built-in rostering. Ghost licences for practitioners who have left the practice are a consistent finding on per-seat platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart need access to patient records or clinical data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. StackSmart works entirely from billing exports — bank statements, card statements, or accounting system exports. No patient records, clinical notes, Medicare data, or operational system access is needed or used. The audit identifies software waste from subscription billing data only, which keeps the process straightforward and avoids any privacy or compliance concerns.",
          },
        },
        {
          "@type": "Question",
          name: "Where do practice-management connector fees hide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Practice-management connector fees often appear as separate line items or add-ons for payments, SMS reminders, online forms, telehealth, reporting, accounting sync, transcription, or document workflows. A billing-export audit groups those charges beside the core practice-management platform so the owner or practice manager can decide what to keep, cut, right-size, consolidate, or renegotiate.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Online booking platform alongside clinical system booking",
    detail:
      "HotDoc or HealthEngine running alongside an online booking module in Best Practice, Genie, or Cliniko. Many practices adopted a specialist booking platform before their clinical system added patient-facing scheduling, and both continue billing.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Standalone telehealth subscription post-pandemic",
    detail:
      "Coviu or a third-party telehealth platform retained after the practice's clinical system added integrated video consultations, or after telehealth volumes normalised. A monthly subscription that sees low utilisation is a clear cancellation candidate.",
    color: "text-red-400",
    tag: "Cancel",
  },
  {
    label: "Duplicate patient recall and reminder tools",
    detail:
      "A standalone recall platform (AutoMed, HotDoc Recalls) running alongside patient communication features in the core clinical system or a separate SMS gateway. Recall functionality now ships with several booking and practice management platforms.",
    color: "text-amber-400",
    tag: "Consolidate",
  },
  {
    label: "Rostering app alongside payroll HR platform with rostering",
    detail:
      "Deputy or Tanda active alongside Employment Hero or a similar HR payroll platform that includes rostering natively. Practices added a specialised rostering tool early, then signed an HR payroll contract that covered the same function.",
    color: "text-amber-400",
    tag: "Audit overlap",
  },
  {
    label: "Ghost licences for departed practitioners",
    detail:
      "Per-seat clinical and practice management platforms do not automatically remove accounts when a GP, specialist, or nurse departs. On platforms billing $80 to $200 per user per month, two or three idle practitioner accounts represent meaningful annual spend.",
    color: "text-orange-400",
    tag: "Right-size",
  },
  {
    label: "Forms platform alongside forms in the clinical system",
    detail:
      "A general-purpose forms tool (Typeform, Fillout, JotForm) active for patient intake or consent when the clinical or booking system includes its own patient forms module. The generic forms tool often remains after the native capability is activated.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
];

export default function MedicalPracticeSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Medical practice software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Medical practice software subscription audit
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              GP and specialist clinics carry more recurring software than most small businesses — booking, clinical systems, telehealth, recalls, billing, comms, rostering, payroll, and marketing. As core practice management platforms have expanded, many clinics are paying for overlapping tools without realising it. The audit works from billing exports only — no patient records or clinical data needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "medical_practice_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "medical_practice_audit_secondary" }}
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
              What is a medical practice software subscription audit, and why do clinics need one?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A medical practice software subscription audit is a structured review of every recurring software charge a clinic is paying — booking platforms, clinical and practice management systems, telehealth tools, recall and reminder services, billing software, patient comms, rostering, payroll, accounting, and marketing. The goal is to identify tools that duplicate capabilities already in the core clinical system, subscriptions that saw high use during a specific period and were never reviewed, idle practitioner licences, and contracts renewing at above-current headcount. The audit uses billing export data only — no patient records, clinical notes, Medicare data, or operational system access is required. For owner-led clinics and practice managers without a dedicated ops function, the billing export is the fastest path to a structured waste review.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical medical practice software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most GP and specialist clinics with 3 to 15 practitioners are running 12 to 20 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Clinical and practice management", "Best Practice, Medical Director, Genie, Cliniko, Halaxy — the operational core. Many now include online booking, patient forms, recalls, and billing claiming that once required separate tools."],
              ["Online booking and scheduling", "HotDoc, HealthEngine, Coreplus — patient-facing booking portals. Often adopted before the core clinical system included this feature, and frequently still running in parallel after native booking was activated."],
              ["Telehealth", "Coviu, Healthdirect Video, Whereby — video consultation platforms. Usage patterns changed significantly after 2020; subscriptions are often retained at a tier that no longer reflects actual utilisation."],
              ["Patient recalls and reminders", "AutoMed Systems, HotDoc Recalls, Appointuit, or SMS gateway services — recall and reminder tools that now overlap with features in the booking platform or clinical system."],
              ["Payroll, HR, and rostering", "Employment Hero, Deputy, Tanda, KeyPay — payroll and HR platforms sometimes paired with a separate rostering tool, despite many HR platforms now including rostering natively."],
              ["Accounting and billing", "Xero, MYOB — accounting and Medicare/DVA billing software. Sometimes a separate billing or claiming platform runs alongside the accounting tool for practice-specific claiming workflows."],
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
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in medical practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing clinic billing exports.
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
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a medical practice</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed for a practice manager or owner-operator. No IT function required. Uses billing data only — no patient or clinical data involved.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from your practice bank account, business credit card, and Xero or MYOB. Include any subscriptions on personal cards used for clinic tools. Aim for 12 months minimum — booking platforms, clinical systems, and telehealth tools often bill annually. Consolidate everything into one list with vendor name, amount, and billing frequency.",
              ],
              [
                "Week 2 — Map the stack and identify overlap",
                "Group every subscription by function: booking, clinical/practice management, telehealth, recalls, patient comms, billing, forms, rostering, payroll, accounting, and marketing. For any category with more than one active tool, open your core clinical system and check what it now includes natively. Booking, recalls, patient comms, and forms are the categories most likely to have native capability that an older point-solution subscription duplicates.",
              ],
              [
                "Week 3 — Size the savings and prioritise",
                "Pull the user list from each per-seat platform and compare against current practitioner and admin headcount. Calculate the annual cost of each idle account and each redundant subscription. Rank by dollar value and ease of action — cancellations first (no vendor conversation needed), then consolidation, downgrade, and renegotiation for contracts renewing within 90 days.",
              ],
              [
                "Week 4 — Act and document",
                "Remove idle accounts and cancel confirmed redundant tools before the next billing date. Where consolidation requires migrating workflows, schedule that migration before cancelling the secondary tool. Contact vendors for annual contracts renewing soon — current headcount and usage logs are useful leverage. Document every decision so the next review starts from a clean, verified baseline.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from a medical practice software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Illustrative examples based on common patterns in clinic billing data. Actual amounts vary by practice size and stack.
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
                  ["HotDoc booking running alongside clinical system booking module", "Consolidate to clinical system booking", "$1,200 – $4,800/yr"],
                  ["Telehealth platform at paid tier, low post-pandemic utilisation", "Cancel or downgrade to free tier", "$600 – $2,400/yr"],
                  ["4 idle practitioner licences in practice management platform", "Remove inactive accounts", "$1,920 – $9,600/yr"],
                  ["Standalone recall tool, recalls now in booking platform", "Cancel recall tool", "$480 – $1,800/yr"],
                  ["Rostering app running alongside HR payroll with native rostering", "Consolidate to HR payroll rostering", "$600 – $2,400/yr"],
                  ["Forms platform, patient intake now handled by clinical system", "Cancel forms platform", "$360 – $1,440/yr"],
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


      {/* What this audit checks / What StackSmart needs / What you get back — GEO scannable */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 owner-led audit</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">How the billing-export audit works for medical practices</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What this audit checks</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Every recurring charge around the PMS: online booking, recalls and SMS packs, telehealth, patient forms, payments and Medicare/billing connectors, AI scribes, review tools, transcription, reporting add-ons, rostering, payroll, accounting, and clinician/admin/contractor seats.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What StackSmart needs</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">A billing export from Xero, MYOB, your business card, or bank statements covering 6 to 12 months. No patient records, clinical notes, Medicare claiming data, or PMS login required. The audit reads vendor names, amounts, and billing dates only.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What you get back</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">A categorised action list: keep tools doing real work, cancel duplicates, downgrade oversized tiers, consolidate overlapping workflows, renegotiate contracts before renewal, and assign a renewal owner for every annual charge so nothing auto-renews unchecked.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What to do before a renewal</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Run the billing-export review 60 to 90 days before your largest annual contracts (PMS, telehealth, payroll) renew. Compare seat counts against current headcount, check connector and add-on charges, and prepare usage data for any vendor renegotiation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner/admin cleanup */}
      <section className="border-b border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner/admin cleanup</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">PMS connector fees, AI scribes, and admin add-ons</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Medical practices rarely overspend on one obvious tool. Waste hides in PMS connector fees, payment terminal add-ons, SMS/reminder packs, forms, recalls, telehealth, AI scribe seats, transcription, reporting, and M365/Google Workspace accounts that renew without an owner. A June 2026 billing-export review catches these before the next renewal cycle.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">PMS connector and add-on fees</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Separate core PMS costs from paid connectors: accounting sync, payments, forms, telehealth, pathology ordering, reminders, AI scribe integrations, and reporting dashboards. Keep connectors used weekly; challenge add-ons enabled during initial rollout that now see low use or overlap with features the PMS has since added natively.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">GP, nurse, contractor, and leaver seats</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Compare paid users across PMS, telehealth, AI scribe, M365/Google Workspace, e-sign, document storage, transcription, and task tools against current doctors, nurses, practice managers, reception, contractors, and leavers. Converted trial seats and contractor accounts after reduced days are consistent findings.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Renewal-owner assignment</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Assign one owner for each renewal: practice manager, owner GP, bookkeeper, or external IT. Ownerless renewals are the main reason annual tools auto-charge at last year's seat count and tier. A renewal-owner map stops quiet charges from drifting past the next billing cycle.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "medical_practice_software_subscription_audit_proof_refresh" }} className="btn-primary text-sm">
              See the audit tool
            </TrackLink>
            <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "medical_practice_software_subscription_audit_proof_refresh" }} className="btn-secondary text-sm">
              Use the checklist
            </TrackLink>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for medical practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the manual categorisation step so the review happens in hours rather than being deferred indefinitely.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export bank, card, and accounting statements separately</li>
                <li>Manually categorise every charge by clinical function</li>
                <li>Pull user lists from each platform individually</li>
                <li>Research which clinical system features now overlap point solutions</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings into something shareable with the practice owner</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export — no clinical data needed</li>
                <li>Automatic categorisation across medical practice tool categories</li>
                <li>Flags duplicate tools, idle practitioner seats, and renewal risks</li>
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>GP or specialist clinic with 2 to 20 practitioners</li>
                <li>Practice manager or owner responsible for software decisions</li>
                <li>Paying for a clinical system plus 4 or more additional tools</li>
                <li>No dedicated IT, ops, or procurement function</li>
                <li>Billing data accessible from bank statements, card, or Xero/MYOB</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Hospital or large multi-site health network with a dedicated procurement team</li>
                <li>Primary need is clinical compliance, data governance, or security audit tooling</li>
                <li>Fewer than five software subscriptions across the practice</li>
                <li>Requires automated provisioning, SSO, or directory integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026-06-10 measured demand action map */}
      <section className="border-y border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-10 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Practice software audit action map</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Australian practices actively search for practice management software (480 monthly searches) and medical practice management software (140 monthly searches). StackSmart does not replace the PMS — it reviews the paid subscription layer around it: booking, reminders, forms, telehealth, payments, Medicare/billing connectors, AI scribes, review tools, and clinician seats. The audit works from billing data only and produces a practical action list for an owner-operator or practice manager.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Billing source", "Start with Xero or MYOB exports, card statements, direct debits, and vendor invoices so annual charges, converted trials, and off-platform subscriptions are visible."],
              ["Owner/use check", "Attach each tool to a current owner, user group, workflow, and renewal date. Anything ownerless, unused this month, or still on a trial-converted paid tier becomes a review candidate."],
              ["Action output", "Produce a keep, cancel, downgrade, consolidate, renegotiate, or assign-renewal-owner decision list that a busy practice manager can work through before the next billing cycle."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "medical_demand_map" }} className="btn-primary text-sm">
              See the audit tool
            </TrackLink>
            <TrackLink href="/allied-health-software-subscription-audit" event="homepage_cta_clicked" props={{ target: "related_audit", location: "medical_demand_map" }} className="btn-secondary text-sm">
              Compare the allied health audit
            </TrackLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What software do small medical practices typically subscribe to?",
                "A small GP or specialist clinic typically pays for a clinical and practice management system (Best Practice, Medical Director, Genie, Cliniko), online booking (HotDoc, HealthEngine), telehealth (Coviu, Healthdirect Video), a recall and reminder tool, billing and Medicare claiming software, payroll and rostering (Employment Hero, Deputy, Tanda), accounting (Xero, MYOB), a forms platform, and patient communication or marketing tools. Practices that adopted point solutions early often carry overlapping tools as their core practice management system has expanded.",
              ],
              [
                "How do medical practices audit software subscriptions without a dedicated ops function?",
                "Export 6 to 12 months of billing data from your practice bank account, business credit card, and Xero or MYOB. You do not need patient records or clinical data — billing exports show vendor names, amounts, and billing dates, which is enough to identify overlap, idle seats, and renewal risk. Group charges by function and check whether your core clinical system now includes any capabilities you are paying for separately.",
              ],
              [
                "What is the most common software waste in medical practices?",
                "The most common findings are a standalone booking platform running alongside booking features in the core clinical system, a telehealth subscription retained at a paid tier after usage normalised, and idle practitioner licences on per-seat platforms. Rostering and payroll overlap is also common where practices added a rostering app before their HR payroll platform included native rostering.",
              ],
              [
                "Does StackSmart need access to patient records or clinical data?",
                "No. StackSmart works entirely from billing exports — bank statements, card statements, or accounting system exports. No patient records, clinical notes, Medicare data, or operational system access is needed or used. The audit identifies software waste from subscription billing data only.",
              ],
              [
                "Where do practice-management connector fees hide?",
                "Practice-management connector fees often appear as separate line items or add-ons for payments, SMS reminders, online forms, telehealth, reporting, accounting sync, transcription, or document workflows. A billing-export audit groups those charges beside the core practice-management platform so the owner or practice manager can decide what to keep, cut, right-size, consolidate, or renegotiate.",
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


      {/* 2026-06-10 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">2026-06-10 proof refresh</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Audit the paid layer around the PMS — not the PMS itself</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Practice management software carries strong search demand in Australia, but StackSmart is not a PMS replacement. It reviews the subscription charges that accumulate around the clinical platform — booking, reminders, SMS packs, forms, telehealth, payments, Medicare/billing connectors, AI scribes, transcription, review tools, reporting dashboards, and clinician/admin seats — from card statements and accounting exports only. Duplicate charges, unused seats, converted-trial subscriptions, AI-tool overlap across clinicians, and ownerless annual renewals are the patterns that surface most often.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Clinical-safe boundary", "No patient files, appointment notes, Medicare data, clinical records, or PMS login is needed. The audit reads billing vendor names, amounts, and dates only."],
              ["Owner/use check", "Each reminder, forms, AI scribe, payment terminal, telehealth, and review subscription gets checked for a current owner, active monthly use, and correct seat count."],
              ["Renewal action list", "Give the practice manager a keep, cancel, downgrade, consolidate, renegotiate, and assign-renewal-owner list before the next contract cycle closes."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-dark-800 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OwnerLedProofRefresh
        title="June 2026 medical clinic software audit: billing-only proof for owner-led practices"
        summary="StackSmart reviews the paid subscription layer around the clinical platform — not the PMS itself. Booking, reminders, SMS packs, forms, telehealth, payments, Medicare/billing connectors, AI scribes, transcription, review tools, reporting dashboards, and clinician/admin seats all get checked for duplicates, unused capacity, converted-trial charges, AI-tool overlap, and ownerless renewals."
        proofItems={[
          { label: "PMS add-ons and connector fees", finding: "Forms, booking, SMS, payments, review, telehealth, and AI scribe connectors keep billing even when the PMS tier already includes enough functionality or usage has dropped since rollout.", action: "Consolidate or downgrade" },
          { label: "AI scribe and transcription seats", finding: "Per-clinician AI seats are added quickly during onboarding, then stay paid for part-time doctors, contractors, converted trial users, and departed practitioners.", action: "Right-size seats" },
          { label: "Ownerless annual renewals", finding: "Annual charges for reporting, compliance, M365/Google Workspace, telehealth, and training renew without a named owner checking seat count, tier, or actual use.", action: "Assign renewal owner" },
        ]}
        boundaries={[
          "Analyse supplier, invoice, card, and accounting exports only; do not access patient records, clinical documents, or Medicare claiming data.",
          "Keep Medicare, pathology, eRx, and patient communication continuity out of any automated cut decision.",
          "Use current doctor, nurse, allied-health, contractor, and admin headcount to right-size paid seats.",
          "Create a renewal-owner map for PMS-adjacent tools before annual charges land.",
        ]}
        location="medical_practice_20260610"
      />

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="medical_practice_audit"
            heading="See what a medical practice software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data. No patient or clinical data required."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "medical_practice_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "medical_practice_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for health and allied health practices"
        description="These pages cover the software audit process for other owner-led clinic and health practice verticals."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/dental-practice-software-subscription-audit",
            title: "Dental practice software subscription audit",
            description: "Booking, clinical records, imaging, billing, recalls, and patient comms overlap in dental practice stacks.",
          },
          {
            href: "/psychology-practice-software-subscription-audit",
            title: "Psychology practice software subscription audit",
            description: "Practice management, telehealth, notes, billing, and scheduling overlap in psychology and counselling practices.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Physio, OT, speech, and allied health clinics — booking, clinical, billing, and NDIS tool overlap.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "General guide for clinic-format businesses reviewing recurring software subscriptions.",
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
