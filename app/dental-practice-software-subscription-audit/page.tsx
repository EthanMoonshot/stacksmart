import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Dental Practice Software Subscription Audit",
  description:
    "Audit admin, billing, booking, and marketing software subscriptions at your dental practice without disrupting clinical operations. StackSmart turns billing exports into a clear keep, cut, and renegotiate report.",
  path: "/dental-practice-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/dental-practice-software-subscription-audit"),
      url: absoluteUrl("/dental-practice-software-subscription-audit"),
      name: "Dental Practice Software Subscription Audit | StackSmart",
      description:
        "Audit admin, billing, booking, and marketing software subscriptions at your dental practice. Focus on the business side: booking, reminders, payment plans, reviews, and marketing.",
      dateModified: "2026-06-09",
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
          name: "Dental Practice Software Subscription Audit",
          item: absoluteUrl("/dental-practice-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software subscriptions should a dental practice audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A dental practice software audit should cover practice management, online booking and appointment reminder tools, payment plan platforms, reputation and review management, team communication, email or SMS marketing, and accounting and payroll. The review focuses on admin and billing subscriptions — not clinical or imaging software. The goal is to find duplicate tools, inflated tiers, and unreviewed renewals in the business operations stack.",
          },
        },
        {
          "@type": "Question",
          name: "How do dental practices end up with duplicate software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reception staff and practice managers sign up for reminder, review, or payment tools independently without checking what the practice management system already includes. Platform migrations leave old systems billing after the move. Subscription tiers remain unchanged as patient volume or staff numbers shift over time — a tier selected during a growth period stays in place long after demand has stabilised.",
          },
        },
        {
          "@type": "Question",
          name: "Can a dental practice audit software subscriptions without disrupting clinical operations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The review runs entirely on billing data from your accounting software or business credit card. No clinical systems, patient records, or imaging platforms are accessed during the initial review. The practice owner or manager handles the audit independently and only involves admin staff when planning which tools to consolidate or retire.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart work for dental practice billing exports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart works with any billing export from any industry. It focuses on the admin and business side of the practice stack — booking, billing, reminders, reviews, and marketing subscriptions. It does not process clinical records or imaging data. Upload a CSV from your accounting software or card statements and the report categorises charges, flags overlap, and produces a prioritised action list.",
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
    category: "Practice management",
    issue:
      "Previous practice management system billing alongside the current one — common after migrations or when a second chair location was set up on a different system. Both charge at full tier during the transition period.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Online booking and reminders",
    issue:
      "Third-party online booking widget plus a standalone appointment reminder platform running alongside recall functionality already built into the practice management system. Multiple systems contacting the same patient list.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Payment plans",
    issue:
      "Payment plan platform contracted at a practice-size tier with lower active patient utilisation than the tier supports — particularly common where chair utilisation has changed since the subscription was first established.",
    action: "Right-size",
    color: "text-amber-400",
  },
  {
    category: "Reputation and reviews",
    issue:
      "Google review management platform or a tool like Podium signed up during a growth push, with low ongoing feature utilisation and underused send credits relative to the monthly subscription cost.",
    action: "Review",
    color: "text-amber-400",
  },
  {
    category: "Team communication",
    issue:
      "Practice-specific internal communication tool running alongside a general team messaging or collaboration app. Two platforms handling internal messages across a small admin and clinical team.",
    action: "Consolidate",
    color: "text-orange-400",
  },
  {
    category: "Marketing and email",
    issue:
      "Email or SMS marketing subscription at a volume send-tier that significantly exceeds the actual campaign frequency — common where a planned marketing calendar did not materialise at the expected pace.",
    action: "Downgrade",
    color: "text-brand-400",
  },
];

export default function DentalPracticeSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Dental practice software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Review dental practice software spend without touching clinical systems
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Owner-operated dental practices carry more admin software than most operators track — booking tools, reminder platforms, payment plan subscriptions, review management tools, and marketing apps that accumulate independently and often overlap. A subscription audit focused on the business side of the practice finds what to cut, consolidate, and renegotiate without disrupting clinical operations or accessing patient data.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "dental_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "dental_audit_secondary" }}
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
              How do dental practices audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export billing data from your business credit card or accounting software covering the past 6 to 12 months. Separate clinical licensing from admin and business software, then group the business subscriptions by function: practice management, online booking and reminders, payment plans, reputation and reviews, team communication, marketing, and accounting or payroll. Flag any category with more than one active tool. Compare chair count and current admin headcount against subscription tiers to identify inflated plans. Note contracts renewing within 60 days and prepare renegotiation conversations. Act on straightforward cancellations first — they require no vendor negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* Why practices accumulate software */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why dental practices carry more software than they track</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software accumulation in dental practices follows three consistent patterns across owner-operated practices of all sizes.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Admin-led independent signups",
                "Reception staff and practice managers add booking reminder tools, payment plan platforms, and review management subscriptions without a central check on what the practice management system already includes. The result is tool overlap across the admin stack.",
              ],
              [
                "Post-growth stack at the wrong tier",
                "Practice management, communication, and marketing tools contracted during a busier period remain on the same tier as patient volume and staffing levels stabilise or soften. The subscription tier selected during growth does not automatically adjust.",
              ],
              [
                "Platform migrations with trailing billing",
                "Moving from one practice management system to another leaves the previous platform billing for months after the transition. Both charge at full tier during the handover period, and the old subscription is often not actively cancelled.",
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
          <h2 className="text-2xl font-semibold text-white">Dental practice software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the subscription categories where dental practices most commonly find recoverable admin spend.
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
          <h2 className="text-2xl font-semibold text-white">30-day dental practice software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The practice owner or manager can run this in spare time across a few weeks. No clinical data or patient records required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Export billing data",
                "Pull 6 to 12 months of transactions from your accounting software (Xero, MYOB) or business credit card. Separate clinical licensing fees from admin and business software. Focus the cost review on the business side: booking, billing, communication, marketing, and accounting tools.",
              ],
              [
                "Week 2 — Group by admin function",
                "Categorise every subscription: practice management, booking and reminders, payment plans, reputation and reviews, team communication, marketing and email, and accounting and payroll. Flag any category with more than one active tool — this is where the recoverable spend sits.",
              ],
              [
                "Week 3 — Compare tiers against current usage",
                "For each flagged subscription, check whether the plan tier still reflects your current chair count, active admin headcount, and actual monthly usage. Flag payment plan and reputation tools where the contracted tier exceeds the practice's current demand.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel clearly unused tools before the next billing cycle. Discuss consolidations with admin staff before actioning — reception workflows and patient reminder sequences need to be migrated. Renegotiate annual contracts approaching renewal using current headcount and usage data as leverage.",
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
          <h2 className="text-2xl font-semibold text-white">What a dental practice software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from dental practice billing exports. Actual amounts vary by practice size and tool mix.
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
                  ["Online booking widget plus built-in recall system active", "Consolidate to built-in", "$480 – $2,400/yr"],
                  ["Reputation platform on unused tier, low review activity", "Downgrade or cancel", "$600 – $2,400/yr"],
                  ["Payment plan tool contracted above current utilisation tier", "Downgrade", "$480 – $1,800/yr"],
                  ["Old practice management system billing post-migration", "Cancel", "$1,200 – $4,800/yr"],
                  ["Email marketing at high send-volume tier, low send frequency", "Downgrade", "$360 – $1,440/yr"],
                  ["Annual PMS renewal, no comparison or renegotiation", "Renegotiate before renewal", "$800 – $4,800/yr"],
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
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Dental software demand is rising — audit the paid layer before replacing the PMS</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Live AU keyword checks showed dental software (210 monthly searches) and dental practice management software (140) with high commercial CPC. StackSmart uses that demand as a practical owner-led clinic wedge: not “buy a new PMS”, but “prove which booking, recall, payment-plan, review, SMS, marketing, payroll, and connector subscriptions still deserve to bill next month.”
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The best fit is a 5-50 staff dental practice where the owner, practice manager, or bookkeeper can export Xero/MYOB/card data, then hand a clean keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner list to admin — without clinical records or patient-data access.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-base font-semibold text-white">Dental practice action map</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Separate the core PMS from bolt-ons: booking widgets, recall/SMS packs, treatment-plan finance, forms, reviews, marketing, and reporting.</li>
                <li><span className="font-semibold text-white">2.</span> Match each paid seat, chair, location, and admin account to the current roster — flag departed clinicians, locums, and temporary campaign accounts.</li>
                <li><span className="font-semibold text-white">3.</span> Find add-ons already included in the current platform tier or no longer used after a PMS migration.</li>
                <li><span className="font-semibold text-white">4.</span> Assign a renewal owner and next action before annual PMS, SMS, payment, review, and marketing terms roll over.</li>
              </ol>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/clinic-software-subscription-audit" event="homepage_cta_clicked" props={{ target: "clinic_audit", location: "dental_2026_refresh" }} className="btn-secondary text-sm">Compare clinic audit</TrackLink>
                <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "dental_2026_refresh" }} className="btn-primary text-sm">See the audit tool</TrackLink>
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
                "90-day renewal triage",
                "StackSmart flags PMS, imaging, online booking, SMS/recall, payment, payroll, and connector subscriptions that renew soon, with a suggested keep, cancel, downgrade, consolidate, or renegotiate action before the notice period closes.",
              ],
              [
                "Seats, chairs, and locations",
                "The audit checks for hygienist, contractor, room, and location licences that no longer match the practice roster, chair count, or active sites — without changing access inside clinical systems.",
              ],
              [
                "Patient-data boundary",
                "No patient records, treatment notes, X-rays, imaging files, health identifiers, or PMS credentials are needed. Billing exports are enough to surface duplicate add-ons and renewal risk.",
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
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for dental practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches find the same waste. StackSmart removes the categorisation step so the review gets completed rather than deferred.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from accounting tool and business credit card separately</li>
                <li>Manually categorise each subscription line by admin function</li>
                <li>Open each platform to compare feature sets and user counts</li>
                <li>Check chair count and headcount against contracted plan tiers</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Repeat from scratch at the next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across dental practice tool categories</li>
                <li>Flags duplicate booking tools, inflated tiers, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready to share with the practice manager</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your dental practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-operated single or multi-chair dental practice with roughly 5 to 50 staff</li>
                <li>Practice owner, practice manager, or operations lead responsible for software decisions</li>
                <li>Multiple admin subscriptions across booking, reminders, payment plans, reviews, and marketing</li>
                <li>No dedicated IT or ops team managing software spend</li>
                <li>Billing data accessible from Xero, MYOB, or business credit card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Dental corporate group with central IT and procurement function</li>
                <li>Primary goal is clinical compliance or regulatory audit — StackSmart focuses on admin software only</li>
                <li>Fewer than five active business software subscriptions</li>
                <li>Requires enterprise identity management or automated provisioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* June 9 owner-led proof/conversion refresh */}
      <section className="border-t border-dark-800/80 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 owner-led dental audit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Reconcile admin subscriptions before the next PMS renewal</h2>
            <p className="mt-4 text-base leading-7 text-dark-300">DataForSEO AU checks (June 2026) show dental software at 210 monthly searches / $13.07 CPC. For an owner-operated dental practice, the fastest cost win is not replacing the PMS — it is reconciling every paid reminder tool, forms platform, payment-plan module, imaging-adjacent admin add-on, review service, marketing subscription, rostering/payroll seat, and AI scribe or admin tool already billing on the card statement.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">1. Separate PMS bolt-ons from core licensing</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Pull card statements, Xero/MYOB exports, and vendor invoices. Separate the core PMS from paid bolt-ons: recall/SMS packs, online booking widgets, waiver/forms tools, payment-plan modules, imaging-adjacent admin tools, AI scribe subscriptions, and review-management platforms.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">2. Match seats and tiers to current roster</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Compare paid seats, chair licences, and location tiers to the current clinician, hygienist, locum, admin, and reception roster. Flag converted trial accounts, departed-staff logins, and marketing tiers set during a growth push that no longer match patient volume.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">3. Assign a renewal owner before notice windows close</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">PMS, payment-plan, recall/SMS, review, imaging admin, AI scribe, rostering, and payroll subscriptions all renew on different dates. Each needs one named owner and a notice-window date — if nobody owns it, the default is review before renewal, not auto-renew.</p>
              </div>
          </div>
          <div className="mt-8 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Clinic-safe boundary: what StackSmart does and does not touch</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">StackSmart uses billing exports and card statements only — no clinical notes, imaging files, patient records, health identifiers, or PMS credentials. The owner, practice manager, or bookkeeper runs the first pass independently. The output is a keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner action list covering duplicate add-ons, unused licences, AI/tool overlap, connector fees, converted trials, and ownerless renewals.</p>
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
                "What software subscriptions should a dental practice audit?",
                "A dental practice software audit should cover practice management, online booking and appointment reminder tools, payment plan platforms, reputation and review management, team communication, email or SMS marketing, and accounting and payroll. The review focuses on admin and billing subscriptions — not clinical or imaging software. The goal is to find duplicate tools, inflated tiers, and unreviewed renewals in the business operations stack.",
              ],
              [
                "How do dental practices end up with duplicate software subscriptions?",
                "Reception staff and practice managers sign up for reminder, review, or payment tools independently without checking what the practice management system already includes. Platform migrations leave old systems billing after the move. Subscription tiers remain unchanged as patient volume or staff numbers shift over time — a tier selected during a growth period stays in place long after demand has stabilised.",
              ],
              [
                "Can a dental practice audit software subscriptions without disrupting clinical operations?",
                "Yes. The review runs entirely on billing data from your accounting software or business credit card. No clinical systems, patient records, or imaging platforms are accessed during the initial review. The practice owner or manager handles the audit independently and only involves admin staff when planning which tools to consolidate or retire.",
              ],
              [
                "Does StackSmart work for dental practice billing exports?",
                "StackSmart works with any billing export from any industry. It focuses on the admin and business side of the practice stack — booking, billing, reminders, reviews, and marketing subscriptions. It does not process clinical records or imaging data. Upload a CSV from your accounting software or card statements and the report categorises charges, flags overlap, and produces a prioritised action list.",
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
            location="dental_practice_software_audit"
            heading="See what the audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your practice billing data. No clinical data required."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Audit the admin stack, not the clinical one</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data. Focused purely on admin and business software — no clinical records involved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "dental_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "dental_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for health practices"
        description="These related pages cover the broader SMB audit guide, sibling health practice guides, the checklist, and the core StackSmart audit tool."
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
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Software audit guide for physiotherapy, podiatry, psychology, OT, and multi-disciplinary allied health practices.",
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
