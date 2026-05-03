import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Multi-Site Venue Software Audit",
  description:
    "Small hospitality groups and multi-site venues carry POS add-ons, rostering, reservations, delivery apps, loyalty, and marketing tools — often duplicated across sites. A software audit finds per-site overlap and recoverable spend without disrupting operations.",
  path: "/multi-site-venue-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/multi-site-venue-software-audit"),
      url: absoluteUrl("/multi-site-venue-software-audit"),
      name: "Multi-Site Venue Software Audit | StackSmart",
      description:
        "Small hospitality groups and multi-site venues carry POS add-ons, rostering, reservations, delivery apps, loyalty, and marketing tools — often duplicated across sites. Find per-site overlap and recoverable spend.",
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
          name: "Multi-Site Venue Software Audit",
          item: absoluteUrl("/multi-site-venue-software-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software should a multi-site venue or hospitality group audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A multi-site venue software audit should cover POS and payment processing add-ons, rostering and staff management tools, table reservation platforms, delivery app integrations and middleware, loyalty and gift card programs, accounting and payroll, and reputation or review management. The most recoverable spend is typically in rostering and reservation tools that are subscribed separately per site rather than under a group plan, and in POS add-ons that pre-date the current POS system.",
          },
        },
        {
          "@type": "Question",
          name: "Why do multi-site venues accumulate duplicate software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each site often subscribes to tools independently when it opens or when a venue manager makes a local decision — rostering tools, reservation platforms, and loyalty programs set up at venue level each bill separately rather than under a group account. POS add-ons accumulate over time and frequently outlive POS upgrades. Delivery integrations and loyalty platforms were established at different periods across locations and were never consolidated into group pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Can a hospitality group audit software without disrupting daily service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The review starts with billing data from accounting software or card statements — no POS system, kitchen display, or reservation platform is accessed or modified during the initial review. Any tool changes or consolidations should be planned for a quieter trading period (early week, off-season, or between trading days) and coordinated with venue managers in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart work for hospitality and multi-site venue billing exports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart processes any CSV billing export and recognises common hospitality tool categories including POS add-ons, rostering, reservations, delivery integrations, loyalty, and marketing. It flags per-site duplicate subscriptions, legacy POS add-ons still billing after a POS upgrade, and renewal risks — and produces a prioritised action list for the group owner or operations manager.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "POS add-ons",
    issue:
      "Table management, tip handling, split billing, and payment integrations added to a POS system that has since been upgraded or replaced. Add-ons from the previous POS environment can continue billing independently even after the parent system is decommissioned.",
    action: "Audit and cut",
    color: "text-red-400",
  },
  {
    category: "Rostering and staff management",
    issue:
      "Deputy, Tanda, Humanforce, or similar rostering tools subscribed and billing at the individual site level when a group plan would reduce the per-site rate and consolidate reporting and payroll export across all venues.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Table reservations",
    issue:
      "Separate reservation tools set up independently at each location — OpenTable, Quandoo, or Google Reserve — each billing at venue level rather than under a single group account with multi-location coverage at a lower combined rate.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Delivery app integrations",
    issue:
      "Third-party aggregator middleware subscriptions (Deliverect, Kounta, me&u) running at a tier or across channels that no longer reflects current delivery volume — particularly common where delivery as a revenue share has shifted since the integration was first established.",
    action: "Right-size",
    color: "text-amber-400",
  },
  {
    category: "Loyalty and gift cards",
    issue:
      "Loyalty platform subscriptions running alongside point-of-sale loyalty features that were included in a later POS upgrade. Both billing when only one is being actively used at most locations — a review rarely triggered by either vendor.",
    action: "Review",
    color: "text-orange-400",
  },
  {
    category: "Reputation and marketing",
    issue:
      "Review management platform, Google advertising subscription, and email marketing tool each billing at a tier that reflected a higher-volume growth period. Current usage and campaign frequency have not triggered a tier review.",
    action: "Review",
    color: "text-brand-400",
  },
];

export default function MultiSiteVenueSoftwareAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Multi-site venue software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the per-site software duplication in your venue group
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Small hospitality groups and multi-site venues carry POS add-ons, rostering tools, reservation platforms, delivery integrations, loyalty programs, and marketing subscriptions — frequently duplicated across locations because each site set up its own tools independently. A software audit maps the per-site overlap, finds legacy add-ons that survived a POS upgrade, and identifies group-level pricing opportunities that reduce the combined bill without changing how each venue operates.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "multi_site_venue_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "multi_site_venue_audit_secondary" }}
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
              How do multi-site venues audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from your group accounting software or master business credit card, covering both group-level and any site-level accounts where tools were subscribed independently. Group charges by function: POS and payment processing, POS add-ons, rostering and staff management, table reservations, delivery app integrations, loyalty and gift cards, accounting and payroll, and reputation or marketing. Flag subscriptions that appear as separate per-site billing when a group or multi-location plan would reduce total cost. Check whether the number of active sites covered by each subscription still reflects your current trading locations. Identify legacy POS add-ons still billing after a system upgrade. Flag annual contracts renewing within 60 days as renegotiation targets.
            </p>
          </div>
        </div>
      </section>

      {/* Why venues accumulate software */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why multi-site venues carry more software than they track</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Software duplication in hospitality groups follows consistent patterns regardless of venue type or size.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Per-site independent subscriptions",
                "Rostering tools, reservation platforms, and loyalty programs were each set up independently when a venue opened or when a local manager made the decision. The same tool billing three or four times at individual site level instead of under a single group plan is the most common and most recoverable form of waste in multi-site venue billing.",
              ],
              [
                "POS add-on stack after provider changes",
                "Point-of-sale ecosystems attract add-ons at launch — table management, kitchen display integration, tip management, and payment plan tools. When the POS is upgraded or replaced, the add-ons from the previous system often continue billing independently because they are not cancelled as part of the POS migration process.",
              ],
              [
                "Delivery and loyalty platform fragmentation",
                "Multiple delivery integrations, middleware subscriptions, and loyalty programs were established at different points in time across different locations. Each vendor has continued billing without a group-level review comparing the combined cost to available consolidated pricing.",
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
          <h2 className="text-2xl font-semibold text-white">Multi-site venue software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where per-site duplication and legacy billing most commonly appear in hospitality group billing exports.
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
          <h2 className="text-2xl font-semibold text-white">How to run a multi-site venue software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The group owner or operations manager can run this across a quieter trading week without involving individual venue teams initially.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Collect group-level and site-level billing",
                "Pull 6 to 12 months of transactions from the group accounting software or master business account. Collect site-level card statements for any venues where tools were subscribed independently at venue level. Consolidate into a single list covering all locations.",
              ],
              [
                "Step 2 — Map subscriptions against active sites",
                "For each subscription, note which sites it covers and whether it is billing at individual site level or under a group account. Flag tools that appear as separate per-site billing when a group or multi-location plan exists from the same vendor.",
              ],
              [
                "Step 3 — Identify POS add-on orphans",
                "Review the list of POS add-ons and integrations against your current POS system. Any tool that was set up with a previous POS and is not actively connected to your current environment is a cancellation candidate. These are often missed in POS migration projects.",
              ],
              [
                "Step 4 — Calculate the per-site consolidation saving",
                "For each per-site tool with a group plan equivalent, calculate the difference between the current combined per-site billing and available group pricing. Consolidating rostering and reservation tools from per-site to group plans is typically the highest-value action for multi-site operators.",
              ],
              [
                "Step 5 — Act, consolidate, renegotiate",
                "Cancel disconnected POS add-ons. Request group pricing conversations for per-site tools where vendor consolidation pricing exists. Plan reservation and rostering consolidations with venue managers during a low-trading window. Renegotiate annual contracts approaching renewal using current site count and actual usage data.",
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
          <h2 className="text-2xl font-semibold text-white">What a multi-site venue software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from hospitality group billing exports. Actual amounts vary by number of sites and tool mix.
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
                  ["Rostering tool billing per site across 3 venues", "Move to group plan", "$1,200 – $4,800/yr"],
                  ["POS add-ons from previous provider still active post-migration", "Cancel orphaned add-ons", "$720 – $3,600/yr"],
                  ["Three separate reservation tools across locations", "Consolidate to one group plan", "$960 – $4,800/yr"],
                  ["Loyalty platform alongside POS loyalty feature now included", "Consolidate to one", "$600 – $2,400/yr"],
                  ["Delivery middleware at higher tier than current volume warrants", "Downgrade", "$480 – $2,400/yr"],
                  ["Annual group marketing tool, unused send volume at current tier", "Renegotiate or downgrade", "$480 – $1,800/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for venue groups</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart handles multi-account billing exports and flags per-site duplicates automatically.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Collect billing from both group and site-level accounts separately</li>
                <li>Categorise each subscription and note which sites it covers</li>
                <li>Identify per-site duplicates by comparing tool names across location billing</li>
                <li>Contact each vendor to compare per-site vs group pricing</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Repeat the site-collection process at each review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload combined billing export (single CSV from all accounts)</li>
                <li>Automatic categorisation for hospitality and venue tool categories</li>
                <li>Flags per-site duplicate subscriptions and legacy POS add-ons</li>
                <li>Prioritised keep, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready for group owner or operations manager</li>
                <li>Repeatable baseline for the next annual review across all sites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your venue group?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-operated hospitality group or multi-site venue with 2 to 8 locations</li>
                <li>Tools subscribed independently at site level in rostering, reservations, or POS add-ons</li>
                <li>Group owner or operations manager responsible for software decisions</li>
                <li>No central IT or procurement function managing subscriptions</li>
                <li>Billing accessible from group accounting software or master card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large hospitality group or hotel chain with a central procurement function</li>
                <li>Primary need is enterprise inventory management or corporate financial reporting</li>
                <li>Fewer than six active business software subscriptions across all sites</li>
                <li>Requires centralised identity management or automated provisioning</li>
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
                "What software should a multi-site venue or hospitality group audit?",
                "A multi-site venue software audit should cover POS and payment processing add-ons, rostering and staff management tools, table reservation platforms, delivery app integrations and middleware, loyalty and gift card programs, accounting and payroll, and reputation or review management. The most recoverable spend is typically in rostering and reservation tools that are subscribed separately per site rather than under a group plan, and in POS add-ons that pre-date the current POS system.",
              ],
              [
                "Why do multi-site venues accumulate duplicate software subscriptions?",
                "Each site often subscribes to tools independently when it opens or when a venue manager makes a local decision — rostering tools, reservation platforms, and loyalty programs set up at venue level each bill separately rather than under a group account. POS add-ons accumulate over time and frequently outlive POS upgrades. Delivery integrations and loyalty platforms were established at different periods across locations and were never consolidated into group pricing.",
              ],
              [
                "Can a hospitality group audit software without disrupting daily service?",
                "Yes. The review starts with billing data from accounting software or card statements — no POS system, kitchen display, or reservation platform is accessed or modified during the initial review. Any tool changes or consolidations should be planned for a quieter trading period (early week, off-season, or between trading days) and coordinated with venue managers in advance.",
              ],
              [
                "Does StackSmart work for hospitality and multi-site venue billing exports?",
                "Yes. StackSmart processes any CSV billing export and recognises common hospitality tool categories including POS add-ons, rostering, reservations, delivery integrations, loyalty, and marketing. It flags per-site duplicate subscriptions, legacy POS add-ons still billing after a POS upgrade, and renewal risks — and produces a prioritised action list for the group owner or operations manager.",
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
            location="multi_site_venue_software_audit"
            heading="See what a venue group software audit report looks like"
            body="Email yourself the sample report to review the output before uploading your group billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Map the per-site duplication before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your venue group&apos;s review process.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "multi_site_venue_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "multi_site_venue_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for hospitality and venue businesses"
        description="These pages cover the broader hospitality audit guide, the SMB hub, the checklist, and the core StackSmart audit tool."
        links={[
          {
            href: "/hospitality-group-software-audit",
            title: "Hospitality group software audit",
            description: "POS, reservations, rostering, and delivery stack audit guide for small hospitality groups and single-site venues.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category across your venue or group stack.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into categorised findings and clear next actions.",
          },
          {
            href: "/retail-store-software-subscription-audit",
            title: "Retail store software subscription audit",
            description: "POS, rostering, inventory, loyalty, and email tools — audit guide for independent and multi-site retailers.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
