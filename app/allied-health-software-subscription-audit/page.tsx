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
    "Audit software subscriptions for physiotherapy, podiatry, psychology, occupational therapy, and multi-disciplinary allied health practices. Find duplicate booking, billing, telehealth, and admin tools without disrupting patient operations.",
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
        "Audit software subscriptions for physiotherapy, podiatry, psychology, occupational therapy, and multi-disciplinary allied health practices — booking, billing, telehealth, and admin tools.",
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
            text: "An allied health software audit should cover practice management, online booking, patient recall and reminder tools, telehealth and video consultation platforms, secure team communication, accounting and payroll, and reputation or review management. The review focuses on admin and billing subscriptions — not clinical record systems. The goal is to find duplicates, unused seats, and tools billing at tiers that no longer reflect the practice's active caseload.",
          },
        },
        {
          "@type": "Question",
          name: "Why do allied health practices end up with overlapping software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Allied health practices accumulate software in three predictable ways: each discipline in a multi-practitioner clinic may adopt their preferred booking or recall tool; telehealth platforms were scaled up rapidly and often left on inflated tiers with lower current demand; and platform migrations leave the previous practice management system billing alongside the replacement for months after the move.",
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
            text: "StackSmart works with any billing export from any industry. It focuses entirely on the business administration side — booking, billing, recalls, telehealth, and marketing subscriptions — not clinical data. It categorises recurring charges, flags duplicates and inflated tiers, and produces a prioritised action list that the practice owner or manager can act on without disrupting clinical operations.",
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
              Physiotherapy, podiatry, psychology, speech pathology, and occupational therapy practices carry more software than most owners track — booking tools, recall platforms, telehealth subscriptions, payroll add-ons, and marketing tools that accumulate across disciplines and platform migrations. A subscription audit finds what to cut, consolidate, and renegotiate without accessing clinical records or disrupting patient care.
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
              Export billing data from your practice accounting software or business credit card covering the past 6 to 12 months. Group recurring charges by function: practice management, online booking, patient recalls and reminders, telehealth and video consultation, team communication, accounting and payroll, and reputation or marketing. Flag any category where you carry more than one active tool. Check seat counts against your current practitioner and admin headcount. Note telehealth subscriptions adopted during high-volume periods that may still be on inflated tiers. Flag annual contracts renewing within 60 days and prepare renegotiation conversations using your current usage data.
            </p>
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
                "Telehealth tier creep",
                "Telehealth platforms were scaled up during periods of high remote consultation demand. As in-clinic volumes recovered, the subscription tier was not reviewed downward. A platform contracted for 10 practitioners remains at that tier with two active remote users.",
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
                "Separate clinical licensing fees from business software. Then group the business subscriptions: practice management, online booking, patient recalls and reminders, telehealth and video, team communication, accounting and payroll, and marketing or reviews. This surfaces overlap across categories immediately.",
              ],
              [
                "Week 3 — Flag overlaps and inflated tiers",
                "Mark any category with more than one active tool as a consolidation candidate. Check practitioner and admin seat counts against current headcount for each per-seat subscription. Note telehealth platforms where the contracted tier exceeds actual monthly usage.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel clearly unused tools before the next billing cycle. Plan consolidations with admin staff before actioning — they need time to migrate appointment and recall workflows. Renegotiate annual contracts approaching renewal using actual usage data and current headcount as leverage.",
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
                  ["SMS recall tool, PMS now includes recalls natively", "Consolidate", "$600 – $2,400/yr"],
                  ["Marketing platform on Business plan, one person using it", "Downgrade", "$480 – $1,800/yr"],
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
                <li>Flags duplicate booking tools, inflated telehealth tiers, idle seats</li>
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
                <li>Multiple software subscriptions across booking, billing, recalls, and marketing</li>
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
                "An allied health software audit should cover practice management, online booking, patient recall and reminder tools, telehealth and video consultation platforms, secure team communication, accounting and payroll, and reputation or review management. The review focuses on admin and billing subscriptions — not clinical record systems. The goal is to find duplicates, unused seats, and tools billing at tiers that no longer reflect the practice's active caseload.",
              ],
              [
                "Why do allied health practices end up with overlapping software?",
                "Allied health practices accumulate software in three predictable ways: each discipline in a multi-practitioner clinic may adopt their preferred booking or recall tool; telehealth platforms were scaled up rapidly and often left on inflated tiers with lower current demand; and platform migrations leave the previous practice management system billing alongside the replacement for months after the move.",
              ],
              [
                "Can I audit allied health software subscriptions without involving clinical staff?",
                "Yes. The audit runs entirely on billing data from your accounting software or business credit card. No patient records, clinical notes, or regulated health systems are accessed. The practice owner or admin manager can complete the initial review independently and only involve clinical staff when planning which tools to consolidate or retire.",
              ],
              [
                "Does StackSmart work for allied health and multi-disciplinary clinics?",
                "StackSmart works with any billing export from any industry. It focuses entirely on the business administration side — booking, billing, recalls, telehealth, and marketing subscriptions — not clinical data. It categorises recurring charges, flags duplicates and inflated tiers, and produces a prioritised action list that the practice owner or manager can act on without disrupting clinical operations.",
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
        title="More on software audits for health and clinical practices"
        description="These related pages cover the broader SMB audit guide, the checklist, sibling health practice guides, and the core StackSmart audit tool."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Broader allied health and clinic guide covering booking, billing, recalls, and marketing subscriptions.",
          },
          {
            href: "/dental-practice-software-subscription-audit",
            title: "Dental practice software subscription audit",
            description: "Admin and billing subscription audit guide for owner-operated dental practices.",
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
