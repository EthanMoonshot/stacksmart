import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Software Subscription Audit",
  description:
    "Review and cut wasted software spend at your clinic or allied health practice. StackSmart helps you audit admin, booking, billing, and marketing subscriptions without disrupting patient operations.",
  path: "/clinic-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/clinic-software-subscription-audit"),
      url: absoluteUrl("/clinic-software-subscription-audit"),
      name: "Clinic Software Subscription Audit | StackSmart",
      description:
        "Review and cut wasted software spend at your clinic or allied health practice — admin, booking, billing, and marketing subscriptions.",
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
          name: "Clinic Software Subscription Audit",
          item: absoluteUrl("/clinic-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software subscriptions should a clinic audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A clinic software audit should cover practice management and scheduling platforms, online booking tools, billing and invoicing software, secure messaging and team communication apps, patient recall and marketing tools, reputation management platforms, accounting and payroll software, and any telehealth or video consultation platforms. The goal is to find duplicates, unused seats, and subscriptions that have grown beyond what the practice actually needs.",
          },
        },
        {
          "@type": "Question",
          name: "How do allied health clinics end up with too many software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clinics accumulate software in layers: a tool introduced by a previous practice manager, a new booking platform adopted during growth, a telehealth subscription from a period when remote consults were common, and marketing tools signed up individually by reception staff. When tools overlap or usage drops, the subscriptions often keep billing without review.",
          },
        },
        {
          "@type": "Question",
          name: "Can I audit clinic software subscriptions without involving my clinical team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Start with billing data — a CSV from your business credit card or accounting software covers most subscriptions. The audit can be run by the practice owner or admin manager without interrupting clinical workflows. Only involve clinical staff when deciding which tools to keep or consolidate, not during the initial data-gathering phase.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart work for healthcare and allied health practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart handles any billing export from any industry. It is not a clinical or compliance tool — it focuses purely on the business administration side: finding duplicate subscriptions, unused seats, inflated tiers, and unreviewed renewals in your admin, booking, billing, and marketing software stack. It does not touch clinical data.",
          },
        },
      ],
    },
  ],
};

const clinicWasteCategories = [
  {
    category: "Booking and scheduling",
    issue: "Online booking tool plus a separate scheduling module in the practice management system — two subscriptions handling the same appointment flow.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Billing and invoicing",
    issue: "Standalone invoicing software alongside built-in billing in the practice management platform. Overlap is common after system migrations.",
    action: "Review and cut",
    color: "text-amber-400",
  },
  {
    category: "Patient recalls and marketing",
    issue: "Recall and reminder tool plus a separate email marketing platform, both sending to the same patient list from different systems.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Team communication",
    issue: "Secure messaging apps and general communication platforms both licensed — one for clinical messaging, one for admin, with significant overlap.",
    action: "Right-size",
    color: "text-orange-400",
  },
  {
    category: "Telehealth platforms",
    issue: "Video consultation tools adopted during high-demand periods that are now rarely used but still billing at a team-sized tier.",
    action: "Downgrade or cut",
    color: "text-orange-400",
  },
  {
    category: "Reputation and reviews",
    issue: "Reputation management subscriptions signed up during growth phases, with low ongoing usage and poor ROI relative to cost.",
    action: "Review",
    color: "text-brand-400",
  },
];

export default function ClinicSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Clinic software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Review your clinic software spend without disrupting the practice
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Allied health and clinic practices carry more software subscriptions than most owners realise — booking tools, billing platforms, recall systems, telehealth apps, and marketing software often overlap or go unused. A subscription audit finds what to cut, consolidate, and renegotiate without touching clinical operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "clinic_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "clinic_audit_secondary" }}
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
              How do allied health clinics audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export billing data from your business credit card or accounting software covering the past 6 to 12 months. Group charges by function: practice management, booking, billing, communication, patient marketing, and other admin tools. Flag categories where you carry more than one active tool, seats that exceed your active staff count, and contracts renewing within the next 60 days. For each flagged item, assign a decision — keep, cut, consolidate, or renegotiate. Act on cancellations first, then plan consolidations to avoid disrupting admin workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Why clinics accumulate subscriptions */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why clinics carry more software than they need</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software accumulation in clinics follows predictable patterns. Understanding them makes the audit faster.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "System migrations that left tools behind",
                "Practices switching from one practice management platform to another often keep the old billing or scheduling module active for months after migration. Both continue billing.",
              ],
              [
                "Staff-led signups for admin tools",
                "Receptionists and admin managers sign up for tools independently — a new recall system, a scheduling add-on, a review platform — without checking what the practice already has.",
              ],
              [
                "Growth-phase tools at the wrong tier",
                "Software adopted during a busier period or expansion stays at the same tier even as demand drops. A telehealth platform licensed for 10 practitioners when only two use it regularly is a common example.",
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
          <h2 className="text-2xl font-semibold text-white">Clinic software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the subscription categories where clinics most commonly find overlap and recoverable spend.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {clinicWasteCategories.map((item) => (
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

      {/* How to run the audit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How to audit clinic software subscriptions</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The practice owner or admin manager can run this review in spare time across a week or two.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Export billing data",
                "Pull 6 to 12 months of charges from your business credit card, accounting software, or bank statements. Include both monthly and annual subscriptions. This is the only data you need to start — no clinical records involved.",
              ],
              [
                "Step 2 — Separate business software from clinical systems",
                "Mark any subscription that touches clinical data or regulatory requirements separately. Focus your cost-reduction review on admin, booking, billing, communication, and marketing tools. Do not plan cancellations for clinical systems without a proper review.",
              ],
              [
                "Step 3 — Group and flag overlaps",
                "Group subscriptions by function. Flag categories where you carry more than one active tool. Check whether seat or practitioner counts still reflect your actual team. Note contracts renewing within 60 days.",
              ],
              [
                "Step 4 — Prioritise by dollar impact and risk",
                "Rank flagged items by annual cost. Prioritise actions where the risk of cancellation or consolidation is lowest — unused marketing tools and duplicate billing software are lower-risk than a recall system your reception team uses daily.",
              ],
              [
                "Step 5 — Act carefully, in order",
                "Cancel clearly unused subscriptions first. Plan consolidations with admin staff before actioning — they need time to migrate processes. Renegotiate contracts approaching renewal using the leverage of an alternative you have already evaluated.",
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
          <h2 className="text-2xl font-semibold text-white">What a clinic software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from allied health and clinic billing exports. Actual amounts vary by practice size.
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
                  ["Duplicate booking tools — third-party and built-in", "Consolidate to built-in", "$960 – $3,600/yr"],
                  ["Telehealth platform at team tier, low active usage", "Downgrade or cancel", "$600 – $2,400/yr"],
                  ["Separate invoicing tool alongside practice management", "Consolidate", "$480 – $1,800/yr"],
                  ["Marketing tool with overlapping recall functionality", "Consolidate to one", "$720 – $2,400/yr"],
                  ["Annual software renewal, no review", "Renegotiate before auto-renew", "$500 – $3,600/yr"],
                  ["Reputation management at high tier, low utilisation", "Downgrade or cancel", "$480 – $1,800/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-operated clinic, allied health practice, or NDIS/community care provider</li>
                <li>Multiple software subscriptions across admin, booking, billing, and marketing</li>
                <li>No dedicated IT or ops team managing subscriptions</li>
                <li>Practice manager or owner handling software decisions</li>
                <li>Billing data available from accounting software or business credit card</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large health network with central IT managing software procurement</li>
                <li>Looking to audit clinical or compliance systems — StackSmart focuses on admin/business software only</li>
                <li>Need automated provisioning or enterprise identity management</li>
                <li>Fewer than five active business software subscriptions</li>
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
                "What software subscriptions should a clinic audit?",
                "A clinic software audit should cover practice management and scheduling platforms, online booking tools, billing and invoicing software, secure messaging and team communication apps, patient recall and marketing tools, reputation management platforms, accounting and payroll software, and any telehealth or video consultation platforms. The goal is to find duplicates, unused seats, and subscriptions that have grown beyond what the practice actually needs.",
              ],
              [
                "How do allied health clinics end up with too many software subscriptions?",
                "Clinics accumulate software in layers: a tool introduced by a previous practice manager, a new booking platform adopted during growth, a telehealth subscription from a period when remote consults were common, and marketing tools signed up individually by reception staff. When tools overlap or usage drops, the subscriptions often keep billing without review.",
              ],
              [
                "Can I audit clinic software subscriptions without involving my clinical team?",
                "Yes. Start with billing data — a CSV from your business credit card or accounting software covers most subscriptions. The audit can be run by the practice owner or admin manager without interrupting clinical workflows. Only involve clinical staff when deciding which tools to keep or consolidate, not during the initial data-gathering phase.",
              ],
              [
                "Does StackSmart work for healthcare and allied health practices?",
                "StackSmart handles any billing export from any industry. It is not a clinical or compliance tool — it focuses purely on the business administration side: finding duplicate subscriptions, unused seats, inflated tiers, and unreviewed renewals in your admin, booking, billing, and marketing software stack. It does not touch clinical data.",
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
            location="clinic_software_audit"
            heading="See what the audit report looks like"
            body="Email yourself the sample report to review the output before uploading your practice's billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Audit the admin stack, not the clinical one</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see the output format before uploading anything. StackSmart works purely on billing data — no clinical records involved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "clinic_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "clinic_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software subscription audits"
        description="These related pages cover the broader SMB audit guide, the checklist, agency-specific patterns, and the core StackSmart audit tool."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step guide to turning billing data into a structured audit you can act on in days, not months.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A practical checklist for reviewing every subscription across every category in your stack.",
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
