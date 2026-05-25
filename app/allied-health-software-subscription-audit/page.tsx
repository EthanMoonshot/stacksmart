import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Allied Health Software Subscription Audit",
  description:
    "Audit software subscriptions for physiotherapy, podiatry, psychology, occupational therapy, and multi-disciplinary allied health practices. Build a practical inventory, renewal calendar, and cut list for duplicate booking, billing, telehealth, AI scribe, forms, and admin tools without touching patient records.",
  path: "/allied-health-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/allied-health-software-subscription-audit"),
      url: absoluteUrl("/allied-health-software-subscription-audit"),
      name: "Allied Health Software Subscription Audit | StackSmart",
      description:
        "Audit software subscriptions for physiotherapy, podiatry, psychology, occupational therapy, and multi-disciplinary allied health practices — booking, billing, telehealth, AI scribe, and admin tools.",
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
          name: "Allied Health Software Subscription Audit",
          item: absoluteUrl("/allied-health-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software subscriptions should an allied health practice audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An allied health software audit should cover practice management, online booking, patient recall and reminder tools, telehealth and video consultation platforms, intake forms and patient communication, AI scribe and clinical documentation tools, secure team communication, accounting and payroll, and reputation or review management. The review focuses on admin and billing subscriptions — not clinical record systems. The goal is to find duplicates, unused seats from practitioners who left the roster, and tools billing at tiers that no longer reflect the practice's active caseload.",
          },
        },
        {
          "@type": "Question",
          name: "Why do allied health practices end up with overlapping software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Allied health practices accumulate software in three predictable ways: each discipline in a multi-practitioner clinic may adopt their preferred booking or recall tool; telehealth and AI scribe platforms were scaled up rapidly and often left on inflated tiers with lower current demand; and platform migrations leave the previous practice management system billing alongside the replacement for months after the move.",
          },
        },
        {
          "@type": "Question",
          name: "What AI tools are allied health practices paying for but not actively using?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common AI tools appearing in allied health billing exports are AI scribe and clinical note tools (Heidi Health, Nabla, Otter.ai used for session notes), ChatGPT or Claude subscriptions adopted for admin writing, and intake form automation tools with AI features. These are typically purchased at a per-practitioner or full-team tier during an AI adoption push, with active use concentrating in one or two practitioners while others return to manual workflows. Practitioners who have left the roster often retain active seats that continue billing. The owner-check: before your next roster review or EOFY, pull each AI tool's active user list and compare it to your current practitioner headcount.",
          },
        },
        {
          "@type": "Question",
          name: "Can I audit allied health software subscriptions without involving clinical staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The audit runs entirely on billing data from your accounting software or business credit card. No patient records, clinical notes, or regulated health systems are accessed. The practice owner or admin manager can complete the initial review independently and only involve clinical staff when planning which tools to consolidate or retire.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart work for allied health and multi-disciplinary clinics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart works with any billing export from any industry. It focuses entirely on the business administration side — booking, billing, recalls, telehealth, AI scribe, and marketing subscriptions — not clinical data. It categorises recurring charges, flags duplicates and inflated tiers, and produces a prioritised action list that the practice owner or manager can act on without disrupting clinical operations.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for an allied health practice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot from your billing export: every recurring admin charge grouped by function (practice management, booking, recalls, telehealth, AI scribe, accounting and payroll, marketing), a list of flagged attention areas including zombie seats from departed practitioners, duplicate tool pairs, inflated telehealth tiers, and upcoming annual renewals, and a prioritised action list ranked by annual dollar impact. The practice owner reviews the findings and can share the report with a practice manager or office manager to act on — a practical spend view, not an enterprise audit. No clinical records or patient data are involved.",
          },
        },
        {
          "@type": "Question",
          name: "How should allied health clinics review software renewals without touching patient records?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use billing exports only. The owner or practice manager lists each recurring admin subscription, category, payment source, seat count, named owner, and renewal date. Practice-management, booking, recall, telehealth, AI scribe, forms, payroll, accounting, and marketing tools can be reviewed from card or accounting data without opening patient records or clinical notes. The result is a renewal calendar and cut list for admin software, not a clinical-system audit.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Practice management and scheduling",
    issue:
      "Two practice management systems billing simultaneously after a migration — the previous system still handles some bookings while the team transitions to the new platform. Both charge at the same tier throughout.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Online booking",
    issue:
      "Third-party online booking widget running alongside built-in online booking in the practice management system. Both take reservations from the same patient population, with one becoming redundant.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "AI scribe and clinical note tools",
    issue:
      "Heidi Health, Nabla, or Otter.ai used for session documentation purchased at a per-practitioner plan. Seats remain active for practitioners who reduced their hours, moved to a different workflow, or left the roster. Active use often concentrates in one or two practitioners while the full team seat count bills.",
    action: "Right-size",
    color: "text-red-400",
  },
  {
    category: "Patient recalls and reminders",
    issue:
      "Standalone SMS recall tool and a separate email reminder platform running alongside recall functionality built into the practice management system. Two or three systems sending messages to the same patient list.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Telehealth and video consults",
    issue:
      "Video consultation platform contracted at a 10-practitioner tier during a period of high remote demand. Current active telehealth usage is two or three practitioners, with the remainder using in-clinic appointments only.",
    action: "Downgrade or cut",
    color: "text-amber-400",
  },
  {
    category: "Intake forms and patient communication",
    issue:
      "Standalone digital intake form tool or patient communication platform running alongside forms included natively in the practice management system. Both collecting patient information from the same intake workflow.",
    action: "Audit overlap",
    color: "text-orange-400",
  },
  {
    category: "Accounting and payroll",
    issue:
      "Payroll module inside the practice management system running alongside a separate Xero or MYOB payroll subscription. Some practices carry both after a partial integration that never completed.",
    action: "Right-size",
    color: "text-orange-400",
  },
  {
    category: "Reputation and marketing",
    issue:
      "Review management or patient marketing platform signed up during a growth phase, with low ongoing utilisation and underused features relative to the tier cost. Often unreviewed since initial setup.",
    action: "Review",
    color: "text-brand-400",
  },
];

export default function AlliedHealthSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Allied health software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the software overlap in your allied health practice
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Physiotherapy, podiatry, psychology, speech pathology, and occupational therapy practices carry more software than most owners track — booking tools, recall platforms, telehealth subscriptions, AI scribe tools, intake forms, payroll add-ons, and marketing subscriptions that accumulate across disciplines and platform migrations. Practitioners who left the roster often keep active seats. Telehealth tiers set during high-demand periods stay inflated. StackSmart gives you a practical software-spend snapshot — not an enterprise procurement platform — so the practice owner or manager can see the full picture and act without touching patient records.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "allied_health_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "allied_health_audit_secondary" }}
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
              How do allied health practices audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export billing data from your practice accounting software or business credit card covering the past 6 to 12 months. Group recurring charges by function: practice management, online booking, patient recalls and reminders, telehealth and video consultation, intake forms and patient communication, AI scribe and documentation tools, team communication, accounting and payroll, and reputation or marketing. Flag any category where you carry more than one active tool. Check seat counts against your current practitioner and admin headcount — specifically check AI scribe tools and telehealth platforms for practitioners who are no longer on the roster. Note telehealth subscriptions adopted during high-volume periods that may still be on inflated tiers. Flag annual contracts renewing within 60 days and prepare renegotiation conversations using your current usage data.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">2026 proof refresh</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Allied-health and physio software searches point to platform buyers; StackSmart audits the add-on layer
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Today’s AU keyword check showed measured demand for allied health software and physio practice software. The owner-led practice problem is not choosing another PMS; it is the recurring software drag around the PMS: online booking, payments, telehealth, reminders, digital forms, exercise-prescription tools, AI scribes, marketing platforms, and contractor clinician seats that keep billing after roster changes. StackSmart uses billing exports and card statements — not patient records — to turn that stack into a practical keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner action list.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic-owner subscription blind spots callout */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">Clinic-owner blind spots</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              The subscription waste that builds up between roster reviews
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Allied health practice owners are typically managing clinical work alongside the business. Software renewals happen quietly in the background. The four patterns that accumulate most between roster reviews:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Departed practitioner seats", "When a physiotherapist, OT, or psychologist leaves the practice, their seats in the PMS, telehealth platform, AI scribe tool, and booking system are rarely removed on the same day. Each per-seat subscription keeps billing at the old headcount."],
                ["AI scribe tools at full roster tier", "Heidi Health, Nabla, and similar AI documentation tools are typically purchased at the full practitioner count. After adoption, active use concentrates in two or three clinicians who prefer the workflow. The remaining seats bill monthly without a review trigger."],
                ["Telehealth platforms from peak demand", "Telehealth subscriptions signed up at 8–10 practitioner tiers in 2020–2022 are still frequently found billing at those tiers with two or three active remote users. Downgrading to a tier that reflects current usage is often the single largest saving in a clinic audit."],
                ["Forms and intake tools with PMS overlap", "Standalone intake form or patient communication tools running alongside forms included natively in the practice management system. Both collecting the same information from incoming patients, with the standalone tool forgotten rather than cancelled."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-amber-300">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The owner-use check: after any roster change — a new hire, a departure, a change in hours — spend 15 minutes updating seat counts in your PMS, telehealth, AI scribe, and recall tools. Combined with an annual billing export review, this prevents the majority of recurring waste in allied health practices.
            </p>
            <div className="mt-6">
              <TrackLink
                href="/saas-spend-audit-tool"
                event="homepage_cta_clicked"
                props={{ target: "audit_tool", location: "allied_health_blind_spots" }}
                className="btn-secondary text-sm"
              >
                Run the full billing audit
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why practices accumulate software */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why allied health practices carry more software than they need</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software accumulation in allied health practices follows three distinct patterns. Recognising them makes the audit faster to run.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Multi-disciplinary team adoption",
                "Each discipline in a shared clinic often adopts its preferred tool. The physio group uses one booking system, the OT team uses another, and speech pathology uses a third recall platform. All three bill at full team tiers.",
              ],
              [
                "Telehealth and AI tool tier creep",
                "Telehealth platforms were scaled up during high remote consultation demand and AI scribe tools were adopted at full practitioner counts. As in-clinic volumes recovered and AI adoption settled into fewer active users, subscription tiers were not reviewed downward.",
              ],
              [
                "Platform migrations with trailing subscriptions",
                "Switching practice management systems leaves the previous platform active during the transition period. Both billing simultaneously. The old system often keeps charging for months after migration because cancellation was not actioned cleanly.",
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

      {/* Owner-use and connector-fee review */}
      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">30-minute owner review</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Find the quiet add-ons before they become permanent overhead</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-dark-300">
            The fastest allied-health audit is not a procurement project. It is an owner-use pass across the card statement, practice-management billing, and any marketplace or integration account. For each recurring payment, the practice owner or manager should be able to name the current user, the patient/admin workflow it supports, the renewal date, and whether another active tool already does the same job.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Practice-management add-ons", "Check telehealth, SMS packs, reminder bundles, online forms, intake, payments, and reporting modules. Many clinics keep standalone tools after their core practice-management system adds a native feature."],
              ["NDIS and admin connectors", "List NDIS claiming, rostering, payroll, reporting, and workflow connectors separately. If a connector syncs two tools that are no longer both active, it is a cut candidate — not just a technical detail."],
              ["AI note and dashboard overlap", "AI scribe, transcription, dashboard, and summarisation tools are often bought at team tier but used by a small subset of clinicians. Pull active-user data before the renewal rolls over."],
              ["Reminder and communication duplicates", "SMS reminders, email marketing, patient recall, and online-booking messages can all bill separately. Group them by job so the team can choose one communication path per use case."],
              ["Card-statement line-by-line pass", "Search for monthly charges under vendor names, app-store billing, Stripe descriptors, and marketplace billing. Small recurring add-ons hide under generic payment descriptors."],
              ["Which app can we cancel?", "For every flagged duplicate, write the lowest-risk next action: cancel, right-size, consolidate, renegotiate, or leave until after a quieter clinical week."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "allied_health_owner_use" }} className="btn-secondary text-sm">Use the audit checklist</TrackLink>
            <TrackLink href="/ai-subscription-audit" event="homepage_cta_clicked" props={{ target: "ai_audit", location: "allied_health_owner_use" }} className="btn-secondary text-sm">Check AI subscriptions</TrackLink>
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Allied health software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the subscription categories where allied health practices most commonly find recoverable spend.
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
          <h2 className="text-2xl font-semibold text-white">30-day allied health software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The practice owner or admin manager can run this review during quieter clinical weeks. No clinical data or patient records involved.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Export billing data",
                "Pull 6 to 12 months of transactions from your accounting software (Xero, MYOB) or business credit card. Include both monthly and annual subscriptions. No clinical records or patient data are needed — billing statements are the only source required to begin.",
              ],
              [
                "Week 2 — Group by admin function",
                "Separate clinical licensing fees from business software. Then group the business subscriptions: practice management, online booking, patient recalls and reminders, telehealth and video, intake forms and patient communication, AI scribe and documentation, team communication, accounting and payroll, and marketing or reviews. This surfaces overlap across categories immediately.",
              ],
              [
                "Week 3 — Flag roster mismatches, overlaps, and inflated tiers",
                "Compare the seat count on every per-practitioner subscription (PMS, telehealth, AI scribe) against your current active roster. Mark any seat belonging to a practitioner who is no longer with the practice or who has significantly reduced their hours. Flag telehealth platforms where the contracted tier exceeds actual monthly usage. Note any category with more than one active tool as a consolidation candidate.",
              ],
              [
                "Week 4 — Act and document",
                "Remove departed practitioner seats before the next billing cycle — this is the quickest win and requires no vendor negotiation. Cancel clearly unused tools. Plan consolidations with admin staff before actioning — they need time to migrate appointment and recall workflows. Renegotiate annual contracts approaching renewal using actual usage data and current headcount as leverage.",
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
          <h2 className="text-2xl font-semibold text-white">What an allied health software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from allied health and multi-disciplinary clinic billing exports. Actual amounts vary by practice size and tool mix.
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
                  ["Dual PMS billing post-migration, old system still active", "Cancel old system", "$1,200 – $4,800/yr"],
                  ["Third-party booking widget alongside built-in booking", "Consolidate to built-in", "$480 – $2,400/yr"],
                  ["Telehealth platform at 10-seat tier, 2 active users", "Downgrade or cancel", "$720 – $3,600/yr"],
                  ["AI scribe tool with 4 departed-practitioner seats still active", "Remove inactive seats", "$960 – $2,880/yr"],
                  ["SMS recall tool, PMS now includes recalls natively", "Consolidate", "$600 – $2,400/yr"],
                  ["Intake form tool running alongside PMS forms", "Consolidate to PMS native", "$360 – $1,440/yr"],
                  ["Annual PMS renewal, no renegotiation conversation", "Renegotiate before renewal", "$600 – $3,600/yr"],
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

      {/* What you get */}
      <section className="border-t border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical software-spend snapshot for owner-led allied health practices — no clinical data involved. A report the practice owner, manager, or admin can review and act on in a week.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring admin charge grouped by function — practice management, booking, recalls, telehealth, AI scribe, intake forms, accounting and payroll, and marketing. No manual sorting required."],
              ["Flagged attention areas", "Departed-practitioner seats, duplicate tool pairs, telehealth tiers above current use, AI tool seat accumulation, and forgotten annual subscriptions — recurring payments where there is no active owner reviewing them."],
              ["Prioritised action list", "Cancel, consolidate, downgrade, and renegotiate — ranked by annual dollar impact so you know where to start and what to hand to your practice manager or office manager."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Who uses and shares this report</p>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              The practice owner or principal typically runs the initial billing review and owns the cancellation, renegotiation, and seat right-sizing decisions — including removing seats for practitioners who have left the roster. The completed savings report is shared with a practice manager or office manager to handle seat removals, vendor conversations, and workflow consolidations. It can be handed to an admin or finance helper as a structured view of recurring payments — a line-by-line spend snapshot before anyone goes through statements manually. The report does not include any clinical records or patient data.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for allied health practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the spreadsheet step so the review actually gets completed.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from Xero or MYOB and business credit card separately</li>
                <li>Manually categorise each line item by admin function</li>
                <li>Open each platform to check active user and seat counts</li>
                <li>Cross-reference AI scribe and telehealth seats against current roster</li>
                <li>Map feature overlap by reviewing each vendor&apos;s current offering</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Repeat from scratch at the next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across allied health tool categories</li>
                <li>Flags duplicate booking tools, inflated telehealth tiers, AI seat waste, and idle seats</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready to share with practice manager</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner or practice manager of a physiotherapy, podiatry, psychology, OT, speech pathology, or multi-disciplinary allied health clinic</li>
                <li>2 to 30 practitioners and admin staff</li>
                <li>Multiple software subscriptions across booking, billing, recalls, AI scribe, and marketing</li>
                <li>No dedicated IT or ops team managing software spend</li>
                <li>Billing data accessible from Xero, MYOB, or business credit card</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Hospital or large health network with central IT managing software procurement</li>
                <li>Primary goal is a clinical compliance or regulatory audit — StackSmart focuses on admin and billing software only</li>
                <li>Fewer than five active business software subscriptions</li>
                <li>Requires enterprise identity management or automated provisioning</li>
              </ul>
            </div>
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
                "What software subscriptions should an allied health practice audit?",
                "An allied health software audit should cover practice management, online booking, patient recall and reminder tools, telehealth and video consultation platforms, intake forms and patient communication, AI scribe and clinical documentation tools, secure team communication, accounting and payroll, and reputation or review management. The review focuses on admin and billing subscriptions — not clinical record systems.",
              ],
              [
                "Why do allied health practices end up with overlapping software?",
                "Allied health practices accumulate software in three predictable ways: each discipline in a multi-practitioner clinic may adopt their preferred booking or recall tool; telehealth and AI scribe platforms were scaled up rapidly and often left on inflated tiers with lower current demand; and platform migrations leave the previous practice management system billing alongside the replacement.",
              ],
              [
                "What AI tools are allied health practices paying for but not actively using?",
                "The most common AI tools in allied health billing exports are AI scribe tools (Heidi Health, Nabla, Otter.ai used for session notes) and ChatGPT or Claude subscriptions for admin writing. These are typically purchased at the full practitioner count, then active use concentrates in one or two clinicians while others return to manual workflows. Practitioners who leave the roster often retain active seats that continue billing. The fix: after any roster change, remove inactive seats from AI tools and telehealth platforms as part of your offboarding checklist.",
              ],
              [
                "Can I audit allied health software subscriptions without involving clinical staff?",
                "Yes. The audit runs entirely on billing data from your accounting software or business credit card. No patient records, clinical notes, or regulated health systems are accessed. The practice owner or admin manager can complete the initial review independently and only involve clinical staff when planning which tools to consolidate or retire.",
              ],
              [
                "Does StackSmart work for allied health and multi-disciplinary clinics?",
                "StackSmart works with any billing export from any industry. It focuses entirely on the business administration side — booking, billing, recalls, telehealth, AI scribe, and marketing subscriptions — not clinical data. It categorises recurring charges, flags duplicates and inflated tiers, and produces a prioritised action list that the practice owner or manager can act on without disrupting clinical operations.",
              ],
              [
                "What does the StackSmart output look like for an allied health practice?",
                "StackSmart produces a categorised software-spend snapshot: every recurring admin charge grouped by function, a list of flagged attention areas (departed-practitioner seats, duplicate tool pairs, inflated telehealth tiers, AI seat accumulation, and upcoming renewals), and a prioritised action list ranked by annual dollar impact. The practice owner reviews the findings and can share the report with a practice manager or office manager to act on — a practical spend view, not an enterprise audit. No clinical records or patient data are involved.",
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

      {/* Practice-manager inventory */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Admin software inventory</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">A clinic owner should be able to name the owner of every admin subscription</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Allied health practices often know exactly who owns clinical decisions but not who owns software renewals. Booking widgets, recall tools, SMS reminders, forms platforms, telehealth, AI scribe seats, payroll, accounting, and review tools can all renew without a named decision-maker. StackSmart creates a billing-only software inventory and renewal calendar so the practice manager can review admin spend without touching patient records, clinical notes, or regulated health systems.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["booking vs PMS features", "telehealth tiers vs active use", "AI scribe seats vs roster", "forms / recall / SMS overlap"].map((item) => (
                <div key={item} className="rounded-xl border border-dark-700 bg-dark-950/80 p-4 text-sm font-medium text-dark-200">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof note */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-500/25 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold text-brand-200">What StackSmart looks for in allied health exports</p>
            <p className="mt-2 text-sm leading-7 text-dark-200">The output groups recurring charges by clinical admin job — practice management, booking, telehealth, reminders, forms, payments, payroll, NDIS/admin, AI notes, reporting, and marketing — then highlights duplicate jobs, idle seats, ownerless renewals, and add-on fees that need a simple cut/consolidate/right-size decision.</p>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="allied_health_software_audit"
            heading="See what the audit report looks like for a health practice"
            body="Email yourself the sample report to review the output before uploading your practice billing data. No clinical data required."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Audit the admin stack, not the clinical one</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data. No clinical records involved — just the business software stack.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "allied_health_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "allied_health_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for health and owner-led SMB practices"
        description="These related pages cover the broader SMB audit guide, the checklist, and guides for other owner-led SMB verticals."
        links={[
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, payroll, document, and e-sign stack audit for small accounting and bookkeeping firms.",
          },
          {
            href: "/bookkeeping-firm-software-stack-audit",
            title: "Bookkeeping firm software stack audit",
            description: "Add-on sprawl, e-sign and receipt duplication, and tier creep in Xero, QBO, and MYOB ecosystem stacks.",
          },
          {
            href: "/marketing-agency-software-stack-audit",
            title: "Marketing agency software stack audit",
            description: "SEO, social scheduling, design, and reporting stack audit for owner-led marketing and creative agencies.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your practice stack.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into categorised findings and clear next actions.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
