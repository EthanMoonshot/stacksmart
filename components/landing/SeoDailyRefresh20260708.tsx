import Link from "next/link";

const refreshes = {
  alliedHealth: {
    eyebrow: "2026-07-08 owner-led allied-health refresh",
    title: "Audit the admin subscriptions around the practice-management system",
    answer:
      "An allied-health software subscription audit should start with billing exports, card statements, direct debits, and software invoices — not clinical notes or patient files. StackSmart helps a 5-50 staff clinic owner or practice manager find dormant practitioner seats, duplicate booking/forms/comms tools, forgotten AI/admin subscriptions, and renewals nobody owns before the next notice window closes.",
    measurement:
      "Fresh live measurement was degraded today: Mission Control was unavailable or auth-gated and DataForSEO returned a billing 402 with no usable rows. This refresh therefore uses the existing StackSmart keyword-intelligence file, recent allied-health prospect-mining signals, and current owner-led SMB ICP fit rather than pretending a fresh volume row exists.",
    exportList: [
      "Xero, MYOB, card, bank, direct-debit, and vendor invoice exports for 6-12 months",
      "Practice-management, booking, forms, telehealth, SMS, payments, reminders, document, marketing, AI, and accounting tool invoices",
      "Current practitioner, admin, contractor, and location seat counts",
      "Renewal dates, payment accounts, billing contacts, and last-confirmed-still-needed notes",
    ],
    findings: [
      "Dormant clinician or contractor seats left active after roster changes",
      "Booking, forms, SMS, telehealth, and payments overlap around the core practice system",
      "AI note, transcription, marketing, or reporting tools bought by one practitioner and never reviewed",
      "Annual renewals still owned by a former practice manager, admin, or clinic director",
    ],
    actions: [
      "Keep only tools with a current owner and active use case",
      "Cancel converted trials, old campaign tools, and duplicate add-ons",
      "Downgrade seats or tiers where current practitioner/admin usage is lower than billing",
      "Consolidate overlap before shopping for a new practice-management platform",
      "Assign one renewal owner and payment account to every recurring charge",
    ],
    boundary:
      "StackSmart does not need patient records, health information, clinical notes, treatment plans, appointment details, or Medicare/private-health data for this billing-layer review.",
    links: [
      ["Clinic audit", "/clinic-software-subscription-audit"],
      ["Psychology practice audit", "/psychology-practice-software-subscription-audit"],
      ["Small business software inventory", "/small-business-software-inventory"],
    ],
  },
  psychology: {
    eyebrow: "2026-07-08 owner-led psychology practice refresh",
    title: "Find subscription waste without touching client notes",
    answer:
      "A psychology practice software subscription audit reviews billing for practice management, telehealth, secure forms, SMS/reminders, payments, dictation, AI/admin tools, document storage, marketing, and accounting. The practical first pass is billing-only: compare seats and add-ons with current clinicians/admins, then return keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions.",
    measurement:
      "Today’s live DataForSEO pull returned HTTP 402 and Mission Control was unavailable/auth-gated, so this page refresh leans on existing keyword intelligence, recent allied-health/psychology prospect-mining, and current social VOC around renewal shocks, card-statement chaos, and ownerless software spend.",
    exportList: [
      "Practice card, bank, Xero, MYOB, and direct-debit recurring software exports",
      "Practice-management, telehealth, SMS, forms, payments, AI/admin, dictation, document, and marketing invoices",
      "Current psychologist, provisional, contractor, receptionist, and admin seat counts",
      "Billing-contact, renewal-date, payment-account, and owner notes for every recurring app",
    ],
    findings: [
      "Telehealth, SMS, forms, and payments modules still billing after workflow changes",
      "AI note-taking or transcription seats that expanded faster than active clinician use",
      "Former contractor or admin accounts still included in per-seat tools",
      "Old marketing, document, or reporting tools carried on the director card",
    ],
    actions: [
      "Separate clinical systems from the non-clinical subscription layer",
      "Right-size clinician/admin seats before annual renewals",
      "Cancel duplicate forms, reminders, document, marketing, and AI tools",
      "Consolidate around the tools the practice actually uses now",
      "Assign one named renewal owner for every vendor before the next notice period",
    ],
    boundary:
      "The audit does not require client notes, appointment histories, referrals, mental-health records, assessments, treatment plans, or Medicare/private-health information.",
    links: [
      ["Allied-health audit", "/allied-health-software-subscription-audit"],
      ["Clinic software audit", "/clinic-software-subscription-audit"],
      ["Software audit checklist", "/software-subscription-audit-checklist"],
    ],
  },
  clinic: {
    eyebrow: "2026-07-08 owner-led clinic refresh",
    title: "Give the owner a clean software action list before renewals hit",
    answer:
      "A clinic software subscription audit starts from billing exports and invoices, then groups recurring charges by job: practice management, booking, reminders, forms, telehealth, payments, rostering, payroll, document storage, marketing, AI/admin, and accounting. StackSmart turns that into an owner/operator action list without asking for patient records.",
    measurement:
      "Measurement access was degraded in this run — DataForSEO live rows were unavailable because the API returned 402, and Mission Control was not publicly accessible. The refresh uses established keyword intelligence, recent clinic/allied-health sourcing work, and commercial fit for admin-heavy 5-50 staff SMBs.",
    exportList: [
      "6-12 months of card, bank, Xero, MYOB, direct-debit, and vendor invoice exports",
      "Practice platform, booking, reminders/SMS, forms, payments, telehealth, roster, payroll, marketing, and AI/admin bills",
      "Current clinician, admin, contractor, and site/location user counts",
      "Renewal dates, billing owners, payment accounts, and last-confirmed-still-needed notes",
    ],
    findings: [
      "Duplicate booking, forms, SMS, payments, telehealth, and reporting add-ons",
      "Inactive clinicians, reception users, contractors, or location seats",
      "Tools bought for one campaign, accreditation task, or workflow change that kept billing",
      "Renewals paid by a director card with no current operating owner",
    ],
    actions: [
      "Keep subscriptions with current users and clear job ownership",
      "Cancel converted trials, duplicate add-ons, and one-off project tools",
      "Downgrade practitioner/admin seats to current usage",
      "Consolidate overlap around existing clinic systems where practical",
      "Renegotiate or assign renewal owners before notice windows close",
    ],
    boundary:
      "StackSmart works from billing data only. Patient files, clinical notes, treatment records, appointment-level data, and health information stay out of scope.",
    links: [
      ["Allied-health audit", "/allied-health-software-subscription-audit"],
      ["Medical practice audit", "/medical-practice-software-subscription-audit"],
      ["Business subscription tracker", "/business-subscription-tracker-small-business"],
    ],
  },
  hospitality: {
    eyebrow: "2026-07-08 owner-led hospitality refresh",
    title: "Multi-site venue software waste usually hides in add-ons and ownerless renewals",
    answer:
      "A hospitality group software audit reviews billing across POS, booking, ordering, delivery, reservations, rostering, payroll, stock, loyalty, Wi-Fi, music, marketing, accounting, and AI/admin tools. For owner-led venue groups, the first win is often a card-statement and invoice pass that finds duplicate tools, old campaign apps, unused location seats, and renewals nobody at head office owns.",
    measurement:
      "Fresh measurement was not fully available today: DataForSEO returned a billing 402 and Mission Control was unavailable/auth-gated. The refresh is based on existing keyword intelligence that already shows commercial demand around POS, venue, inventory, and subscription-management terms plus StackSmart’s owner-led SMB ICP fit.",
    exportList: [
      "Venue-group card, bank, Xero/MYOB, direct-debit, and vendor invoice exports",
      "POS, booking, reservations, ordering, delivery, stock, rostering, payroll, loyalty, Wi-Fi, music, marketing, accounting, and AI/admin bills",
      "Current site/location, manager, staff, and admin user counts",
      "Payment account, renewal date, billing contact, and owner notes by venue or head office",
    ],
    findings: [
      "Delivery, booking, ordering, reservations, and loyalty tools duplicated across sites",
      "Rostering, payroll, and staff-comms seats that no longer match active venue staff",
      "Music, Wi-Fi, marketing, campaign, or QR tools left billing after one promotion",
      "Annual contracts paid by an owner card with no venue manager accountable for review",
    ],
    actions: [
      "Map recurring tools by venue and by head-office function",
      "Cancel old campaign, trial, and site-specific tools after use ends",
      "Downgrade seats, locations, and contact tiers to current operating reality",
      "Consolidate duplicate booking, loyalty, ordering, staff, and marketing tools",
      "Assign renewal owners before seasonal or annual notice windows close",
    ],
    boundary:
      "The audit does not need customer data, staff personal records, payroll detail, POS transaction detail, reservation histories, or loyalty-member exports for the first billing-layer pass.",
    links: [
      ["Retail store audit", "/retail-store-software-subscription-audit"],
      ["Small business software audit", "/small-business-software-audit"],
      ["SaaS renewal management", "/saas-renewal-management"],
    ],
  },
  consulting: {
    eyebrow: "2026-07-08 boutique consulting refresh",
    title: "Turn scattered software bills into principal-ready decisions",
    answer:
      "A consulting firm software stack audit reviews recurring billing for CRM, proposal, e-sign, project management, time tracking, documentation, client portals, research tools, AI/transcription, design, reporting, finance, and marketing. StackSmart is built for owner-led consultancies that need a practical action list, not an enterprise procurement rollout.",
    measurement:
      "Today’s live measurement checks were degraded — Mission Control was unavailable or unauthorized and DataForSEO live rows were blocked by HTTP 402. This refresh uses the existing keyword-intelligence baseline and current VOC around AI spend, duplicate tools, renewal shocks, and small-business subscription tracking.",
    exportList: [
      "Firm card, bank, Xero/MYOB, and direct-debit recurring software exports",
      "CRM, proposal, e-sign, PM, time, document, client-portal, AI/transcription, research, design, reporting, finance, and marketing invoices",
      "Current principal, consultant, contractor, admin, and project owner notes",
      "Renewal dates, payment accounts, billing contacts, and last-confirmed-still-needed fields",
    ],
    findings: [
      "Client-project subscriptions that became permanent overhead after delivery",
      "Duplicate proposal, CRM, PM, time, e-sign, document, AI, and reporting tools",
      "Contractor, adviser, or former staff seats still billing after offboarding",
      "Renewals split across principal cards and admin inboxes with no single owner",
    ],
    actions: [
      "Keep subscriptions tied to a current delivery, sales, or admin job",
      "Cancel project residue, converted trials, and duplicate tools",
      "Downgrade idle seats and over-bought AI/transcription tiers",
      "Consolidate the stack before buying another platform",
      "Assign renewal owner, payment account, and next-review date to every recurring charge",
    ],
    boundary:
      "StackSmart does not need client files, strategy documents, legal/financial advice records, project deliverables, or confidential workpapers for this billing-layer audit.",
    links: [
      ["Professional services audit", "/professional-services-software-audit"],
      ["Marketing agency audit", "/marketing-agency-software-stack-audit"],
      ["Small business software inventory", "/small-business-software-inventory"],
    ],
  },
} as const;

type RefreshKey = keyof typeof refreshes;

export default function SeoDailyRefresh20260708({ type }: { type: RefreshKey }) {
  const data = refreshes[type];

  return (
    <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-400/20 bg-dark-900/80 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">{data.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{data.title}</h2>
          <div className="mt-6 rounded-xl border border-dark-700 bg-dark-950/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Direct answer for AI search</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">{data.answer}</p>
          </div>
          <p className="mt-5 text-sm leading-7 text-dark-300">{data.measurement}</p>
          <p className="mt-4 text-sm leading-7 text-dark-300">{data.boundary}</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
              <h3 className="text-sm font-semibold text-white">What to export first</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                {data.exportList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
              <h3 className="text-sm font-semibold text-white">Likely sample findings</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                {data.findings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
              <h3 className="text-sm font-semibold text-white">Owner/operator output</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                {data.actions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {data.links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-dark-700 bg-dark-950/70 px-4 py-2 text-sm font-medium text-brand-200 transition hover:border-brand-300/60 hover:bg-brand-400/10"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="rounded-full border border-brand-300/40 bg-brand-400/10 px-4 py-2 text-sm font-medium text-brand-100 transition hover:bg-brand-400/20"
            >
              View sample report
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
