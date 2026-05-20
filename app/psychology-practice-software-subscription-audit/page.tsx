import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Psychology Practice Software Subscription Audit",
  description:
    "Audit software subscriptions for psychology and counselling practices. Find duplicate booking, telehealth, reminders, billing, payroll, and marketing tools without accessing clinical records or disrupting client appointments.",
  path: "/psychology-practice-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/psychology-practice-software-subscription-audit"),
      url: absoluteUrl("/psychology-practice-software-subscription-audit"),
      name: "Psychology Practice Software Subscription Audit | StackSmart",
      description:
        "Audit software subscriptions for psychology and counselling practices — booking, telehealth, reminders, billing, payroll, and marketing tools without accessing clinical records.",
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
          name: "Allied Health Software Subscription Audit",
          item: absoluteUrl("/allied-health-software-subscription-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Psychology Practice Software Subscription Audit",
          item: absoluteUrl("/psychology-practice-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software subscriptions should a psychology practice audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A psychology practice software audit should cover practice management and scheduling, online booking and self-referral intake, appointment reminders and SMS notifications, telehealth and video consultation platforms, payment processing and invoicing, secure client messaging, accounting and payroll, marketing and reputation management, and any client portal tools. The audit focuses entirely on admin and billing subscriptions — not clinical records, session notes, or regulated health data. The goal is to find duplicates, unused seats, and subscriptions billing at tiers that no longer reflect the practice's actual caseload and team size.",
          },
        },
        {
          "@type": "Question",
          name: "Why do psychology practices accumulate too many software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Psychology practices typically accumulate software through three patterns: telehealth platforms scaled up during periods of high remote demand and left on inflated tiers as in-person volumes recovered; standalone reminder and booking tools added on top of practice management systems that already include those features natively; and marketing or review platforms signed up during a growth phase and left running at Business tiers with minimal ongoing use. Solo practitioners who join group practices also often bring their individual tool preferences, leaving the combined practice running multiple versions of the same workflow.",
          },
        },
        {
          "@type": "Question",
          name: "Can a psychology practice audit software without accessing client records?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The audit runs entirely on billing data from your accounting software or business bank and credit card statements. No client records, session notes, intake forms, or regulated health information is accessed at any point. The practice owner or admin manager can complete the review independently using only financial transaction data. StackSmart analyses recurring billing charges, not clinical data.",
          },
        },
        {
          "@type": "Question",
          name: "How much does software waste typically cost a psychology practice per year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most psychology practices with 2 to 15 practitioners carry between $3,000 and $12,000 in recoverable software spend annually. The largest items are typically telehealth platforms contracted at a peak-demand tier with only one or two active remote users, practice management migration leftovers where both the old and new system bill simultaneously, and standalone reminder tools that duplicate recall functionality already included in the core practice management platform.",
          },
        },
        {
          "@type": "Question",
          name: "How can a psychology practice do contractor clinician seat cleanup safely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start from billing and admin access lists rather than clinical records. Compare paid users in practice-management, telehealth, forms, transcription, M365/Google Workspace, and design/admin tools against current clinicians, contractors, and admin staff. Remove or downgrade unused paid seats while preserving any access the practice needs for records and continuity.",
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
      "Two practice management systems billing simultaneously after a platform migration — the previous system kept active during a gradual transition, with both charging at the same tier for months after the move was complete.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Online booking and intake",
    issue:
      "Third-party online booking widget running alongside built-in online booking in the practice management system. Both accepting new client requests from the same referral sources, with one sitting largely unused.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Appointment reminders and SMS",
    issue:
      "Standalone SMS reminder platform billing monthly alongside the reminder functionality already included in the practice management subscription. Two systems sending messages to the same client list.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Telehealth and video consultations",
    issue:
      "Telehealth platform contracted at an 8 or 10-practitioner tier during a period of high remote demand. In-person volumes have since recovered and only one or two clinicians actively conduct remote sessions.",
    action: "Downgrade or cut",
    color: "text-amber-400",
  },
  {
    category: "Payments and billing",
    issue:
      "Separate payment gateway or invoicing platform running alongside payment processing built into the practice management system. Transaction fees and subscription costs doubled without a clear benefit.",
    action: "Right-size",
    color: "text-orange-400",
  },
  {
    category: "Marketing and reputation",
    issue:
      "Review or client marketing platform signed up during a growth phase, currently on a Business tier with minimal active usage. Rarely reviewed since the initial onboarding period.",
    action: "Downgrade or review",
    color: "text-brand-400",
  },
];

export default function PsychologyPracticeSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Psychology practice software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the software overlap in your psychology practice
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Psychology and counselling practices carry more recurring software than most owners notice — booking tools, telehealth platforms, reminder systems, payment gateways, payroll add-ons, and marketing tools that stack up across platform migrations and periods of high demand. A subscription audit finds what to cut, consolidate, and renegotiate without accessing clinical records or disrupting client appointments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "psychology_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "psychology_audit_secondary" }}
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
              How do psychology practices audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export billing data from your practice accounting software or business bank and card statements covering the past 6 to 12 months. Group every recurring charge by function: practice management, online booking, appointment reminders, telehealth and video consultations, payments and invoicing, secure client communications, accounting and payroll, and marketing or reviews. Flag any category where you are running more than one active tool. Compare seat counts and telehealth tier sizes against your current active practitioner and admin headcount. Identify reminder or booking tools that duplicate features already included in your core practice management subscription. Note annual contracts renewing within 60 days and prepare to renegotiate using current usage data. No clinical records, client notes, or regulated health data is needed at any step of this process.
            </p>
          </div>
        </div>
      </section>

      {/* Why practices accumulate software */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why psychology practices carry more software than they need</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software accumulation in psychology practices follows predictable patterns. Recognising them makes the audit straightforward to complete.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Telehealth tier creep",
                "Remote consultation platforms were scaled up rapidly when demand for telehealth rose. As in-person appointment volumes recovered, the subscription tier was not reviewed. A platform contracted for 8 to 10 practitioners keeps billing at that rate with only one or two active remote users.",
              ],
              [
                "Platform migrations with trailing subscriptions",
                "Moving between practice management systems — a common event for growing practices — leaves the previous platform active throughout a transition period. Both systems bill simultaneously, sometimes for months after the migration is effectively complete.",
              ],
              [
                "Feature overlap in the core PMS",
                "Modern practice management systems now include online booking, appointment reminders, SMS notifications, and basic client portals natively. Practices that added standalone tools for these functions before the features were available often keep both running.",
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
          <h2 className="text-2xl font-semibold text-white">Psychology practice software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the subscription categories where psychology and counselling practices most commonly find recoverable spend.
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
          <h2 className="text-2xl font-semibold text-white">30-day psychology practice software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The practice owner or admin manager can run this review independently. No clinical data or client records are involved at any step.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Export billing data",
                "Pull 6 to 12 months of transactions from your accounting software (Xero, MYOB, QuickBooks) or business bank and card statements. Include monthly and annual subscriptions. Practice management platforms, telehealth tools, reminder systems, and payment gateways all need to be in this export. No clinical data is needed — billing statements are the only source required.",
              ],
              [
                "Week 2 — Group by admin function",
                "Separate any clinical licensing or regulatory fees from business software costs. Then group the business subscriptions: practice management, online booking, appointment reminders, telehealth, payments and invoicing, secure messaging, accounting and payroll, and marketing or reviews. Any category with more than one active tool is immediately visible as a consolidation candidate.",
              ],
              [
                "Week 3 — Flag overlaps and inflated tiers",
                "Mark every category carrying more than one active tool. Check seat counts on your telehealth platform and practice management system against your current active practitioner and admin headcount. Note any reminder or booking tools that now duplicate features your practice management system includes natively. Flag annual contracts due for renewal within 60 days.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel clearly unused tools before the next billing cycle. Consolidate overlapping systems after confirming with admin staff — they manage appointment workflows and need lead time. Renegotiate annual contracts approaching renewal using current usage data and active headcount as leverage. Document every decision for the next review cycle.",
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
          <h2 className="text-2xl font-semibold text-white">What a psychology practice software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from psychology and counselling practice billing exports. Actual amounts vary by practice size and tool mix.
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
                  ["Dual PMS billing post-migration, old system still active", "Cancel old system", "$1,400 – $5,200/yr"],
                  ["Standalone booking widget alongside built-in PMS booking", "Consolidate to built-in", "$480 – $2,400/yr"],
                  ["Telehealth platform at 8-seat tier, 1–2 active remote users", "Downgrade or cancel", "$960 – $4,200/yr"],
                  ["SMS reminder tool, PMS now includes reminders natively", "Consolidate", "$600 – $2,400/yr"],
                  ["Separate payment gateway duplicating PMS billing module", "Consolidate", "$360 – $1,800/yr"],
                  ["Marketing platform on Business plan, minimal active use", "Downgrade", "$480 – $2,000/yr"],
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


      {/* 2026 proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner/admin cleanup</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Contractor clinician seat cleanup for psychology practices</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Psychology practices often grow with a mix of employees, contractors, rooms, telehealth, forms, transcription, and practice-management tools. The biggest practical win is contractor clinician seat cleanup: removing or right-sizing accounts after clinicians change days, leave, or only need temporary access.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Clinician and contractor access pass</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Compare paid practice-management, telehealth, form, M365/Google Workspace, and AI/transcription seats against active clinicians, contractor days, admin staff, and leavers. Keep access needed for records; remove paid seats that are no longer operational.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Telehealth, forms, and transcription overlap</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Check whether telehealth, intake forms, reminders, notes, and transcription are already included in the practice-management platform. If a separate tool duplicates an included module, mark it for cut, downgrade, or consolidation.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Privacy-aware billing review</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Use billing exports and subscription names for the audit; do not upload patient notes or clinical records. StackSmart’s useful role here is cost and ownership cleanup, not clinical governance or legal compliance advice.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-brand-400/20 bg-dark-950/70 p-6">
            <h3 className="text-base font-semibold text-white">What StackSmart returns</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              StackSmart turns the billing export into a practical owner/operator action list: keep the tools that are still doing real work, cut unused seats, right-size tiers, consolidate overlapping workflows, and renegotiate renewals before the card is charged again. It is deliberately lighter than an enterprise procurement platform and designed for a busy SMB owner, practice manager, operator, or bookkeeper.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "psychology_practice_software_subscription_audit_proof_refresh" }} className="btn-primary text-sm">
                See the audit tool
              </TrackLink>
              <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "psychology_practice_software_subscription_audit_proof_refresh" }} className="btn-secondary text-sm">
                Use the checklist
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for psychology practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches find the same waste. StackSmart removes the spreadsheet step so the review actually gets done.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from accounting software and bank/card statements separately</li>
                <li>Manually categorise every recurring charge by admin function</li>
                <li>Open each platform to check active user and seat counts</li>
                <li>Identify feature overlap by reviewing each vendor&apos;s current feature set</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Repeat from scratch at the next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across health practice tool categories</li>
                <li>Flags duplicate booking tools, inflated telehealth tiers, idle seats</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready to review with your practice manager</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your psychology practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner or principal psychologist of a solo, group, or multi-disciplinary psychology practice</li>
                <li>2 to 20 clinicians and admin staff</li>
                <li>Multiple recurring subscriptions across booking, telehealth, reminders, billing, and marketing</li>
                <li>No dedicated IT or operations team managing software spend</li>
                <li>Billing data accessible from Xero, MYOB, QuickBooks, or business card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large health network or hospital group with central IT managing software procurement</li>
                <li>Primary goal is a clinical compliance, data governance, or regulatory audit — StackSmart focuses on admin and billing software only</li>
                <li>Fewer than five active business software subscriptions</li>
                <li>Requires automated provisioning, SSO, or enterprise identity management</li>
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
                "What software subscriptions should a psychology practice audit?",
                "A psychology practice software audit should cover practice management and scheduling, online booking and self-referral intake, appointment reminders and SMS notifications, telehealth and video consultation platforms, payment processing and invoicing, secure client messaging, accounting and payroll, and marketing or reputation management. The review focuses on admin and billing subscriptions — not clinical records. The goal is to find duplicates, unused seats, and tools billing at tiers that no longer reflect the practice's active caseload.",
              ],
              [
                "Why do psychology practices accumulate too many software subscriptions?",
                "Psychology practices typically accumulate software through three patterns: telehealth platforms scaled up during periods of high remote demand and left on inflated tiers as in-person volumes recovered; standalone reminder and booking tools added on top of practice management systems that already include those features natively; and marketing platforms signed up during a growth phase and left running at Business tiers with minimal ongoing use.",
              ],
              [
                "Can a psychology practice audit software without accessing client records?",
                "Yes. The audit runs entirely on billing data from your accounting software or business bank and credit card statements. No client records, session notes, intake forms, or regulated health information is accessed at any point. The practice owner or admin manager can complete the review independently using only financial transaction data.",
              ],
              [
                "How much does software waste typically cost a psychology practice per year?",
                "Most psychology practices with 2 to 15 practitioners carry between $3,000 and $12,000 in recoverable software spend annually. The largest items are typically telehealth platforms contracted at a peak-demand tier with only one or two active remote users, practice management migration leftovers where both old and new systems bill simultaneously, and standalone reminder tools that duplicate functionality already in the core practice management platform.",
              ],
              [
                "How can a psychology practice do contractor clinician seat cleanup safely?",
                "Start from billing and admin access lists rather than clinical records. Compare paid users in practice-management, telehealth, forms, transcription, M365/Google Workspace, and design/admin tools against current clinicians, contractors, and admin staff. Remove or downgrade unused paid seats while preserving any access the practice needs for records and continuity.",
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
            location="psychology_practice_software_audit"
            heading="See what the audit report looks like for a psychology practice"
            body="Email yourself the sample report to review the output format before uploading your practice billing data. No clinical records required — billing data only."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Audit the admin stack — not the clinical one</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data. No clinical records involved — just the business software stack.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "psychology_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "psychology_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for health and clinical practices"
        description="These related pages cover the allied health audit guide, the broader SMB checklist, sibling clinical practice guides, and the core StackSmart audit tool."
        links={[
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Broader allied health and multi-disciplinary clinic guide covering booking, billing, recalls, and marketing subscriptions.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Practice management, booking, telehealth, and billing stack audit for owner-operated clinics.",
          },
          {
            href: "/dental-practice-software-subscription-audit",
            title: "Dental practice software subscription audit",
            description: "Admin and billing subscription audit guide for owner-operated dental practices.",
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
            description: "See how StackSmart turns a billing export into categorised findings and a clear action list.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
