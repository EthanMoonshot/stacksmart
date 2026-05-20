import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Fitness Studio Software Subscription Audit | Cut the Cost of Your Studio Stack",
  description:
    "Fitness and wellness studios carry booking, member management, payments, marketing, payroll, access control, accounting, and class tools. A software audit finds what to cut, consolidate, and renegotiate before the next renewal.",
  path: "/fitness-studio-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/fitness-studio-software-subscription-audit"),
      url: absoluteUrl("/fitness-studio-software-subscription-audit"),
      name: "Fitness Studio Software Subscription Audit | StackSmart",
      description:
        "Fitness and wellness studios carry booking, member management, payments, marketing, payroll, access control, accounting, and class tools. A software audit finds what to cut, consolidate, and renegotiate.",
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
          name: "Fitness Studio Software Subscription Audit",
          item: absoluteUrl("/fitness-studio-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software do fitness and wellness studios typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typical fitness or wellness studio pays for a booking and member management platform (Mindbody, Glofox, Pike13, TeamUp, Hapana), a payment processing tool, an email or SMS marketing platform (Mailchimp, ActiveCampaign, Klaviyo), payroll software (Xero, MYOB), an access control system, accounting software, and often a class scheduling or on-demand content tool. Studios that expanded into online content or hybrid memberships during or after 2020 may be carrying additional subscriptions for video hosting or virtual class platforms.",
          },
        },
        {
          "@type": "Question",
          name: "How do fitness studio owners audit software subscriptions without a business manager?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card. Group every charge by function — booking and member management, payments, marketing, payroll, access control, and class or content tools. Check your member management platform's native features against standalone tools you are paying for separately. Pull your active staff list and cross-reference it against accounts in per-user tools. Flag any tools set up for a programme or initiative that is no longer running.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common software waste for fitness studios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common finding is a standalone marketing tool running in parallel with member management platform marketing features. Platforms like Mindbody, Glofox, and TeamUp include email marketing, automated sequences, and member communications. Studios that set up a separate Mailchimp or ActiveCampaign account often keep both active without consolidating. The second most common finding is a virtual or on-demand content platform set up during peak demand for hybrid memberships that is no longer generating enough usage to justify its cost.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to audit a fitness studio's software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best trigger is 60 to 90 days before your largest annual contracts renew — member management platforms are often billed annually and carry the highest monthly equivalent cost. For fitness studios, a natural review point is at the end of each membership cycle or before the January rush and the mid-year slow period, when member numbers and active class volumes are clearest.",
          },
        },
        {
          "@type": "Question",
          name: "What is a member-management add-on audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A member-management add-on audit separates the core fitness booking or member platform from optional paid modules such as SMS, waivers, access control, reporting, payment add-ons, challenge tools, and marketing upgrades. The goal is not to replace the platform; it is to decide which add-ons are used often enough to keep and which should be cut, downgraded, consolidated, or renegotiated.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Marketing tool alongside member management platform comms",
    detail:
      "Mindbody, Glofox, and TeamUp all include email marketing, automated welcome sequences, and member communications. Studios that set up a separate Mailchimp or ActiveCampaign account are frequently paying for the same capability twice.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Virtual or on-demand content platform past its peak",
    detail:
      "Video hosting or virtual class platforms set up for hybrid memberships during 2020 to 2022. If hybrid demand has returned to pre-pandemic norms, the subscription may be billing for a product that no longer justifies its cost against active member usage.",
    color: "text-red-400",
    tag: "Cancel or downgrade",
  },
  {
    label: "Ghost staff accounts in per-user tools",
    detail:
      "Instructors and casual staff who have left or reduced their hours but still hold active accounts in booking, payroll, or marketing platforms. Per-user pricing on these tools means idle accounts add direct cost with no return.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Payment processing tool alongside platform-native payments",
    detail:
      "Stripe or a standalone payment gateway running alongside a member management platform that includes native payment processing. Some studios never switched to the integrated payment feature, leaving both billing in parallel.",
    color: "text-amber-400",
    tag: "Audit overlap",
  },
  {
    label: "Member management on a tier built for higher volume",
    detail:
      "Platforms like Mindbody price by active members or locations. Studios that have had member churn since locking in an annual plan may be paying for a capacity tier that exceeds current active membership.",
    color: "text-orange-400",
    tag: "Renegotiate",
  },
  {
    label: "Class or scheduling add-on now included in main plan",
    detail:
      "Member management platforms regularly bundle features that used to be add-ons — class cap management, waitlisting, and on-demand scheduling. Studios on older plans sometimes pay for add-ons that their current plan already includes.",
    color: "text-brand-400",
    tag: "Remove add-on",
  },
];

export default function FitnessStudioSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Fitness studio software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the cost of your studio software stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Fitness and wellness studios carry a surprisingly complex software stack — booking and member management, payments, marketing, payroll, access control, accounting, and class or content tools. Member management platforms have expanded their feature sets significantly, yet many studios continue paying for standalone tools that those platforms now include natively. A software audit finds the overlap, idle seats, and underused plans worth acting on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "fitness_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "fitness_audit_secondary" }}
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
              How do fitness studios audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card. Group every recurring charge by category — member management and booking, payments, marketing, payroll, access control, accounting, and class or content tools. For any category with more than one active tool, check what your member management platform now includes natively — email marketing, payments, and scheduling features are commonly bundled in platforms like Mindbody, Glofox, and TeamUp. Pull your current staff and instructor list and remove idle accounts from per-user tools. Identify your highest annual contract — usually the member management platform — and flag it for renegotiation if your current active member count has changed since the contract was signed. Assign each subscription a keep, cut, consolidate, or renegotiate decision and act on the highest-value items first.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical fitness studio software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most independent fitness and wellness studios are running 8 to 14 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Booking and member management", "Mindbody, Glofox, Pike13, TeamUp, Hapana — the operational core. These platforms have expanded significantly to include marketing, payments, and scheduling features that many studios are still sourcing from standalone tools."],
              ["Payment processing", "Stripe, Square, or a payment gateway integrated via the member management platform. Some studios run both — the platform's native payments and an external gateway — without consolidating."],
              ["Email and SMS marketing", "Mailchimp, ActiveCampaign, Klaviyo, or a dedicated fitness marketing tool. Frequently redundant where the member management platform includes email automation and member communication features."],
              ["Class content and on-demand", "Vimeo OTT, Uscreen, or a dedicated virtual class platform. Set up during the hybrid membership era and often underused relative to its cost as in-person classes return to full capacity."],
              ["Access control", "Salto, Kisi, or a standalone door access system. Typically integrated with the member management platform but sometimes on a separate subscription with its own monthly fee."],
              ["Payroll and accounting", "Xero, MYOB, or Employment Hero for payroll — sometimes separate from accounting software, with both carrying their own subscription. Instructor casual payments are a common complexity that drives platform selection."],
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
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns for fitness studios</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing fitness studio billing exports.
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
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a fitness or wellness studio</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run in a quieter membership period. No dedicated business manager required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from Xero, MYOB, or your business credit card. Include any subscriptions charged to personal cards used for studio tools. Cover at least 12 months so annual contracts appear — member management platforms frequently bill annually. Consolidate everything into one list with vendor, amount, and billing frequency.",
              ],
              [
                "Week 2 — Map the stack and check platform feature overlap",
                "Group every subscription by function: member management, booking, payments, marketing, payroll, access control, content, and accounting. For each category with more than one tool, open your member management platform and check what it now includes natively. Marketing and payments are the two categories where overlap is most common. Pull your current staff and instructor list and flag accounts for anyone who has left or reduced their hours significantly.",
              ],
              [
                "Week 3 — Size savings and prioritise",
                "Calculate the annual cost of each flagged item. Redundant marketing tools and idle instructor accounts are usually the easiest wins. Then check your member management contract — if active member numbers have changed since signing, a renegotiation call is warranted. Prioritise: cancellations first, then account removals, then consolidation, then renegotiation conversations.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel or deactivate redundant tools and idle accounts before the next billing cycle. If your member management platform includes email marketing you are not using, set it up as a direct replacement before cancelling the standalone tool. Contact your member management vendor with your current active member count ahead of renewal. Document each decision so the next review — aligned to your annual plan renewal — starts from a clean baseline.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from a fitness studio software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative example findings based on common patterns in fitness studio billing data. Actual amounts vary by studio size and stack.
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
                  ["ActiveCampaign alongside Mindbody marketing features", "Consolidate to platform comms", "$480 – $1,800/yr"],
                  ["Virtual class platform, in-person classes at full capacity", "Cancel or downgrade to starter plan", "$720 – $3,600/yr"],
                  ["5 idle instructor accounts in member management tool", "Remove inactive accounts", "$600 – $2,400/yr"],
                  ["Stripe gateway alongside platform-native payments", "Consolidate to integrated payments", "$360 – $1,200/yr"],
                  ["Member management plan at 400-member rate, 280 active members", "Renegotiate to current tier", "$960 – $3,200/yr"],
                  ["Class scheduling add-on now included in base plan", "Remove redundant add-on", "$240 – $960/yr"],
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
          <h2 className="mt-3 text-2xl font-semibold text-white">Member-management add-on audit for fitness and wellness operators</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Fitness studios often know the core booking platform cost but miss the member-management add-on audit: SMS packs, waiver tools, payment modules, challenge apps, email tiers, and trial tools that became permanent after one campaign.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Booking and member-management modules</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Split the core booking/member platform from add-ons for SMS, waivers, access control, reporting, and payments. Keep modules that are part of weekly operations; challenge one-off campaign tools that became permanent.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Coach, contractor, and leaver seats</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Compare instructors, admin staff, casual contractors, and past managers against paid accounts in booking, payroll, M365/Google Workspace, Canva, email, and community tools. Remove people who only needed access for a launch or timetable change.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Campaign tools that stayed on</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Review free-trial conversions, challenge apps, landing-page tools, social schedulers, and email upgrades bought for a seasonal campaign. Assign a renewal owner so marketing extras do not renew after the campaign is finished.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-brand-400/20 bg-dark-950/70 p-6">
            <h3 className="text-base font-semibold text-white">What StackSmart returns</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              StackSmart turns the billing export into a practical owner/operator action list: keep the tools that are still doing real work, cut unused seats, right-size tiers, consolidate overlapping workflows, and renegotiate renewals before the card is charged again. It is deliberately lighter than an enterprise procurement platform and designed for a busy SMB owner, practice manager, operator, or bookkeeper.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "fitness_studio_software_subscription_audit_proof_refresh" }} className="btn-primary text-sm">
                See the audit tool
              </TrackLink>
              <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "fitness_studio_software_subscription_audit_proof_refresh" }} className="btn-secondary text-sm">
                Use the checklist
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for studio owners</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both routes find the same waste. StackSmart removes the spreadsheet step so the review gets done in a quiet week between membership cycles.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from Xero or MYOB and card statements separately</li>
                <li>Manually categorise each line item by function</li>
                <li>Check each platform's feature list against what you are paying for separately</li>
                <li>Pull instructor and staff lists from each tool individually</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Rebuild the process at the next annual renewal</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across fitness studio tool categories</li>
                <li>Flags feature overlap, idle accounts, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready immediately</li>
                <li>Repeatable baseline for the next annual membership cycle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your studio?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Fitness or wellness studio with 1 to 3 locations and up to 50 staff</li>
                <li>Owner or studio manager responsible for software decisions</li>
                <li>Paying for a member management platform, payroll, and at least 3 other tools</li>
                <li>No dedicated IT, ops, or procurement function</li>
                <li>Billing data accessible from Xero, MYOB, or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large fitness franchise group with a corporate IT or finance function</li>
                <li>Primary need is access control security or compliance reporting</li>
                <li>Fewer than five software subscriptions in total</li>
                <li>Requires automated member provisioning or directory integration</li>
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
                "What software do fitness and wellness studios typically subscribe to?",
                "A typical fitness or wellness studio pays for a booking and member management platform (Mindbody, Glofox, Pike13, TeamUp, Hapana), a payment processing tool, an email or SMS marketing platform (Mailchimp, ActiveCampaign, Klaviyo), payroll software (Xero, MYOB), an access control system, accounting software, and often a class scheduling or on-demand content tool. Studios that expanded into online content or hybrid memberships may be carrying additional subscriptions for video hosting or virtual class platforms.",
              ],
              [
                "How do fitness studio owners audit software subscriptions without a business manager?",
                "Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card. Group every charge by function — booking and member management, payments, marketing, payroll, access control, and class or content tools. Check your member management platform's native features against standalone tools you are paying for separately. Pull your active staff list and cross-reference it against accounts in per-user tools.",
              ],
              [
                "What is the most common software waste for fitness studios?",
                "The most common finding is a standalone marketing tool running in parallel with member management platform marketing features. Platforms like Mindbody, Glofox, and TeamUp include email marketing, automated sequences, and member communications. Studios that set up a separate Mailchimp or ActiveCampaign account often keep both active. The second most common finding is a virtual or on-demand content platform no longer generating enough usage to justify its cost.",
              ],
              [
                "When is the best time to audit a fitness studio's software subscriptions?",
                "The best trigger is 60 to 90 days before your largest annual contracts renew — member management platforms are often billed annually and carry the highest monthly equivalent cost. A natural review point is at the end of each membership cycle or before the January rush and the mid-year slow period, when member numbers and active class volumes are clearest.",
              ],
              [
                "What is a member-management add-on audit?",
                "A member-management add-on audit separates the core fitness booking or member platform from optional paid modules such as SMS, waivers, access control, reporting, payment add-ons, challenge tools, and marketing upgrades. The goal is not to replace the platform; it is to decide which add-ons are used often enough to keep and which should be cut, downgraded, consolidated, or renegotiated.",
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
            location="fitness_studio_audit"
            heading="See what a fitness studio software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal arrives</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "fitness_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "fitness_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for health, wellness, and service businesses"
        description="These pages cover the software audit process, tools, and guides for other owner-led SMB verticals."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/hospitality-group-software-audit",
            title: "Hospitality group software audit",
            description: "POS, reservations, rostering, and delivery stack audit guide for small hospitality groups and venues.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Allied health and clinic-specific guide to reviewing admin, booking, billing, and marketing subscriptions.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Step-by-step process for reviewing recurring software spend without a procurement specialist.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into a structured savings report.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
