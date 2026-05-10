import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Marketing Agency Software Stack Audit | Cut Subscription Waste",
  description:
    "Owner-led marketing, creative, and web agencies accumulate SEO tools, AI subscriptions, design platforms, social scheduling apps, and reporting tools with significant overlap. A software audit cuts the margin leak before the next surprise renewal hits.",
  path: "/marketing-agency-software-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/marketing-agency-software-stack-audit"),
      url: absoluteUrl("/marketing-agency-software-stack-audit"),
      name: "Marketing Agency Software Stack Audit | StackSmart",
      description:
        "Owner-led marketing, creative, and web agencies accumulate SEO tools, AI subscriptions, design platforms, social scheduling apps, and reporting tools with significant overlap. A software audit finds what to cut, consolidate, and renegotiate.",
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
          name: "Marketing Agency Software Stack Audit",
          item: absoluteUrl("/marketing-agency-software-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software should a marketing agency audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A marketing agency software audit should cover SEO and keyword research platforms (Ahrefs, Semrush, Moz), social media scheduling tools (Buffer, Hootsuite, Sprout Social, Later), client reporting platforms (Agency Analytics, DashThis), design and creative tools (Adobe CC, Figma, Canva Pro), project management (Monday, Asana, ClickUp, Notion), proposal and contract tools, email and outreach platforms, CRM, and AI tools (ChatGPT Teams, Claude Pro, Midjourney, Notion AI, Otter.ai, Fireflies). Focus the review on categories where per-seat pricing is highest and where client-driven signups and AI subscriptions have accumulated beyond active use.",
          },
        },
        {
          "@type": "Question",
          name: "Why do marketing agencies carry more software than other businesses their size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three patterns drive most of the accumulation: client-driven signups where a tool subscribed for one engagement keeps billing after the client offboards; new hire stack preferences where each senior strategist, designer, or developer brings their preferred SEO, reporting, design, or AI platform; and pitch evaluation trials that convert to paid plans and never get cancelled. An agency that grew from 5 to 20 people over three years can carry 60-plus active subscriptions — including multiple AI tool tiers bought at different points in 2023 and 2024 — without a central review ever having been run.",
          },
        },
        {
          "@type": "Question",
          name: "Do marketing agencies overspend on AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — AI subscription waste is now one of the fastest-growing categories in marketing agency billing exports. Agencies that adopted ChatGPT Teams, Claude Pro, Midjourney, Notion AI, Canva Pro, and meeting transcription tools (Otter.ai, Fireflies) during the 2023–2024 AI adoption wave often find multiple AI tools billing at full team tiers while active use is concentrated in two or three people. A 12-person agency paying ChatGPT Teams ($30/user/month) across all seats — while only three staff use it regularly — is spending $3,240/year on unused AI licences. The fix is the same as any ghost licence: assign a named owner to each AI subscription and right-size seat counts before the annual renewal.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit marketing agency software without disrupting client delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with billing data only — no changes to live tools during the review. Export 6 to 12 months of charges from your accounting software or credit card, categorise by workflow type, and flag duplicates, AI seat accumulation, and client-linked tools still billing after offboarding. Plan any consolidations between campaigns or in a quieter delivery window rather than mid-execution. The review itself takes a few hours; execution can be staged across a fortnight.",
          },
        },
        {
          "@type": "Question",
          name: "What are surprise renewal charges in a marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Surprise renewal charges are annual subscriptions — typically SEO platforms, design tool suites, and AI tools — that auto-renew without anyone reviewing whether the seat count or tier still matches the team. They are most common in tools where the annual plan was originally chosen for the price discount, then forgotten. Common examples: Ahrefs or Semrush renewing at an agency-tier seat count from a previous headcount peak; Adobe CC team plan renewing for a designer who left; Midjourney or Canva Pro subscriptions on individual plans billing across multiple team members independently. A billing export covering the last 12 months surfaces all of them in one pass.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart handle a marketing agency billing export?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart processes any billing export CSV and recognises the common SEO, social scheduling, design, AI, project management, and reporting tool categories that appear in agency billing. It flags duplicates, per-client tools still active after offboarding, idle seats in high per-seat-cost platforms, AI subscription seat accumulation, and renewal risks — and produces a prioritised action list without requiring a platform rollout.",
          },
        },
        {
          "@type": "Question",
          name: "What does the StackSmart output look like for a marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot from your billing export: every recurring charge grouped by workflow function (SEO, social scheduling, design, AI tools, project management, client reporting, proposals, email, and CRM), a list of flagged attention areas including client-linked orphan subscriptions, zombie seats, duplicate platform pairs, AI seat accumulation, and upcoming annual renewals, and a prioritised action list ranked by annual dollar impact. The agency founder or studio owner reviews the findings and can share the report with an ops manager, finance lead, or senior account manager to execute — a practical weekly spend view, not an enterprise procurement audit.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a marketing agency run a software subscription review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quarterly is the right cadence for most owner-led marketing and creative agencies. Run a full billing export review once a year — ideally before your largest annual renewals arrive — and a lighter quarterly pass in between. The quarterly check covers three things: new subscriptions added since the last review, converted trials that moved to paid in the last 90 days without a deliberate adoption decision, and upcoming annual renewals in the next 60 days where seat counts or tiers should be reassessed before the auto-renewal processes. Agencies that skip the quarterly check typically discover two to four converted trials and at least one AI subscription that renewed at full team tier before the annual review finds them.",
          },
        },
        {
          "@type": "Question",
          name: "What are duplicate accounts in a marketing agency software stack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duplicate accounts occur when the same tool is paid for multiple times under separate individual plans rather than once under a consolidated team licence. Common examples in marketing agencies: three individual Canva Pro subscriptions billing on separate cards instead of one team plan; individual Notion plans billing per team member instead of a single team workspace; separate Midjourney subscriptions per designer rather than a shared team account. Duplicate accounts are distinct from duplicate tools — they are the same tool, paid for separately. The fix is consolidation: migrate to a single team licence and cancel the individual plans. Savings are typically immediate and require no vendor negotiation.",
          },
        },
        {
          "@type": "Question",
          name: "What is an ownerless renewal in a marketing agency tool stack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An ownerless renewal is an annual subscription that auto-renews without any current team member being responsible for the keep-or-cancel decision. Most common when the person who originally signed up has left, changed roles, or is no longer involved in the relevant workflow. Common examples: an SEO platform renewal owned by a strategist who departed six months ago; an annual Adobe CC seat for a designer who left; an AI tool subscription nobody has logged into since the first month. The fix is assigning a named owner before the renewal date — confirm current usage, then make an active keep, right-size, or cancel decision with the leverage of the upcoming renewal window.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Parallel SEO platforms at agency tier",
    detail:
      "Ahrefs, Semrush, and Moz licences all active across the same team. Per-seat agency-tier pricing makes running multiple SEO platforms simultaneously the single highest-cost form of software waste in most marketing agency stacks. Each tool was adopted by a different strategist or for a different client vertical, and no consolidation decision was ever made.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "AI tool seat accumulation",
    detail:
      "ChatGPT Teams, Claude Pro, Midjourney, Notion AI, and Canva Pro all billing at full team tier while active use is concentrated in two or three people. AI subscriptions adopted across the team during 2023–2024 now often have 60–80% idle seats with no named owner and no review before the annual renewal date.",
    color: "text-red-400",
    tag: "Right-size",
  },
  {
    label: "Post-client social scheduling subscriptions",
    detail:
      "Buffer, Hootsuite, Sprout Social, and Later subscriptions originally set up for specific client accounts — each on a separate tier or channel allocation — continuing to bill long after the client offboarded. Without a client-linked subscription review, these accumulate across every offboarded account.",
    color: "text-red-400",
    tag: "Cancel",
  },
  {
    label: "Adobe CC full suite, partial use",
    detail:
      "Adobe CC team plan active across a team where most members use two or three applications. The full all-apps plan is significantly more expensive than individual app licences or a scaled-down tier. Often running alongside Figma and Canva Pro without a single platform decision being made.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Redundant project management tools",
    detail:
      "Monday, Asana, ClickUp, and Notion all active across the same team — each adopted by a different account manager, inherited from a client communication preference, or carried over from a previous structure. No firm-wide consolidation has occurred as the team and client roster grew.",
    color: "text-amber-400",
    tag: "Consolidate",
  },
  {
    label: "Meeting transcription tools forgotten post-trial",
    detail:
      "Otter.ai or Fireflies subscribed at a team plan during a push to document client calls and creative briefs. Often forgotten after the first month, or replaced by a built-in Zoom or Teams transcript feature. $10–$19/user/month at team tier, billed annually with no active owner reviewing the renewal.",
    color: "text-orange-400",
    tag: "Review",
  },
  {
    label: "Client reporting tools per account manager",
    detail:
      "Agency Analytics, DashThis, or similar reporting platforms on separate plans per account manager rather than a shared team licence. Each signed up for their preferred platform, creating duplicate reporting capability at individual-plan pricing instead of a single team plan.",
    color: "text-orange-400",
    tag: "Consolidate",
  },
  {
    label: "Proposal tool alongside CRM proposal features",
    detail:
      "Better Proposals or Proposify running at team tier alongside a CRM or project management platform that now includes contract templates and proposal generation natively. Both billing for the same front-of-house workflow. A common finding in agencies where the CRM expanded its feature set after the standalone proposal tool was already in place.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
  {
    label: "Individual accounts instead of a team licence",
    detail:
      "Canva Pro, Notion, Midjourney, or meeting transcription tools each billing independently on separate individual plans per team member rather than under one consolidated team account. Most platforms charge 30 to 50 percent less per seat on a team plan than on multiple individual subscriptions. A common finding when team members signed up independently before a team account was set up — often on personal cards that never got consolidated.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
];

export default function MarketingAgencySoftwareStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Marketing agency software stack audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the margin leak in your agency tool stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Owner-led marketing, creative, and web agencies accumulate software faster than almost any other business type — SEO platforms, social scheduling tools, client reporting apps, design subscriptions, project management tools, proposal software, and now a growing layer of AI tools all compound across clients, hires, and pitches. Forgotten client-linked subscriptions, zombie seats from departed staff, surprise annual renewals on AI tools bought at full team tier, and duplicate platforms nobody consolidated are the patterns that leak real margin. StackSmart gives you a practical software-spend snapshot — not an enterprise procurement platform — so the agency founder or studio owner can see the full picture and act in a week.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "marketing_agency_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "marketing_agency_audit_secondary" }}
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
              How do marketing agencies audit their software stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from your business credit card or accounting software, including any tools expensed by individual team members. Group recurring charges by workflow category: SEO and keyword research, social media scheduling, design and creative, AI tools, project management, client reporting and analytics, proposals and contracts, email and outreach, and finance or billing. Flag any category with more than one active tool — SEO platforms and AI subscriptions are where per-seat cost is highest. Identify any per-client tool subscriptions still billing after the client engagement ended. Check every AI subscription seat count against the number of staff who use it at least twice a week. Flag annual contracts renewing within the next 90 days as renegotiation targets. Rank all flagged items by annual cost and act on cancellations first — they need no vendor negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* Typical agency stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical owner-led marketing agency stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most owner-led marketing and creative agencies with 5 to 30 staff are running 15 to 25 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["SEO and keyword research", "Ahrefs, Semrush, or Moz — often multiple platforms active across the team, where different strategists or departments adopted their preferred tool independently. Agency-tier pricing makes this the highest-cost duplication category in most agency stacks."],
              ["Social media scheduling", "Buffer, Hootsuite, Sprout Social, or Later — each adopted for different client accounts or channel types. Per-client signups accumulate quickly and continue billing after clients offboard if no lifecycle review is run."],
              ["Design and creative tools", "Adobe CC team plan, Figma, and Canva Pro frequently running in parallel across the same team. The all-apps Adobe CC plan is expensive relative to what most team members actually open. Individual Canva Pro seats often bill independently rather than under a consolidated team account."],
              ["AI writing and generation tools", "ChatGPT Teams, Claude Pro, Midjourney, Notion AI, and Canva Pro AI features — adopted at different points across 2023 and 2024, typically at full team tiers, with active use now concentrated in a few people. Meeting transcription tools (Otter.ai, Fireflies) frequently forgotten after the initial trial period."],
              ["Project management", "Monday, Asana, ClickUp, and Notion often all present in a growing agency — each adopted by a different account manager or inherited from client communication preferences. No consolidation decision is made as the team expands."],
              ["Client reporting and proposals", "Agency Analytics, DashThis, or similar reporting tools on per-account-manager plans instead of a shared team licence. Proposal tools (Better Proposals, Proposify) billing alongside a CRM or project management platform that now includes proposal features natively."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI subscription waste callout */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">New waste category: AI tool sprawl</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              AI subscription seat accumulation is now a standard agency audit finding
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Since 2023, most owner-led marketing agencies have added at least three AI subscriptions — and many have six or more. The problem is not the tools themselves; it is that seat counts were set when the whole team was expected to adopt them, and usage concentrated in one or two people. Surprise annual renewals arrive before anyone reviews who is actually using each tool. Common findings:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["ChatGPT Teams or Claude Pro", "Purchased at full team tier (8–15 seats) for agency-wide AI writing and strategy assistance. Active use typically 2–3 people after the initial onboarding period. $25–$30/user/month. On a 12-person agency, unused seats cost $2,700–$3,240/year."],
                ["Midjourney team subscription", "Subscribed for a design or creative push, then retained even after generative image work moved to a different tool or was deprioritised. Often on an individual plan per designer rather than a consolidated team account, with billing scattered across personal and business cards."],
                ["Meeting transcription (Otter.ai / Fireflies)", "Subscribed at a team plan during a push to document client briefs and creative reviews. Frequently replaced by a built-in Zoom or Teams transcript feature and forgotten. $10–$19/user/month at team tier, typically billed annually with no active owner reviewing the renewal."],
                ["Notion AI and Canva Pro seat sprawl", "Notion AI enabled across a full team Notion workspace when only a few writers use it regularly. Canva Pro seats on individual plans billing independently per team member rather than under one consolidated team account — doubling or tripling the effective cost versus a single team licence."],
              ].map(([tool, detail]) => (
                <div key={tool} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-amber-300">{tool}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The owner-use check: before the next quarterly billing review or before a major annual renewal hits, pull every AI subscription from your billing export and assign a named seat-owner to each. If you cannot name who uses it at least twice a week, it is a right-size or cancellation candidate. A studio owner or ops lead can work through this in under 30 minutes with a billing export — the same pass you run on client-linked social scheduling and SEO tool duplication.
            </p>
            <div className="mt-6">
              <TrackLink
                href="/saas-spend-audit-tool"
                event="homepage_cta_clicked"
                props={{ target: "audit_tool", location: "marketing_agency_ai_callout" }}
                className="btn-secondary text-sm"
              >
                Run the audit with StackSmart
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why agencies accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why marketing agencies accumulate software waste faster</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Four patterns drive the majority of tool accumulation at owner-led marketing, creative, and web studios.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              [
                "Per-client tool signups that outlive the engagement",
                "A social scheduling tool subscribed for one client&apos;s channels, an SEO platform licensed for a specific campaign, or a reporting integration kept for a client dashboard — all quietly continue billing after the client offboards. Without a client-lifecycle subscription review tied to offboarding, these accumulate across every departed client.",
              ],
              [
                "New hire stack preferences",
                "Each senior hire — strategist, designer, developer, or account lead — brings their preferred SEO platform, reporting tool, design application, or AI assistant. Without a standard stack policy, the agency ends up with parallel subscriptions in the same category across team members, each paying for the same workflow at separate seat rates.",
              ],
              [
                "AI tool sprawl across the 2023–2024 adoption wave",
                "Teams that moved fast on AI adoption signed up for multiple tools at full team tiers — ChatGPT, Claude, Midjourney, Notion AI, transcription tools — expecting firm-wide adoption that concentrated in two or three users. Annual renewals arrive before anyone reviews seat counts, turning an intentional investment into a recurring margin leak.",
              ],
              [
                "Pitch evaluation trials that convert to paid",
                "Tools trialled during capability-building periods or pitch preparation convert to paid plans when the trial ends. When the pitch is won or lost, the evaluation tools often stay on the billing run for months without a cancellation decision being made — then renew annually before anyone notices.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300" dangerouslySetInnerHTML={{ __html: copy as string }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Marketing agency software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the eight patterns StackSmart most commonly surfaces when reviewing marketing and creative agency billing exports.
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

      {/* 4-week audit workflow */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">4-week software audit for an owner-led marketing agency</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run in a quieter delivery window. No dedicated IT or ops function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull all billing data",
                "Export 6 to 12 months of charges from your business credit card, accounting software (Xero, MYOB, QBO), or expense management tool. Include any tools expensed by individual team members on personal cards — designers, developers, and strategists frequently have individual AI or design tool subscriptions billing independently. Cover at least 12 months to capture annual subscriptions: SEO platforms, design tool suites, and AI tools all frequently bill annually, and a renewal missed in month one can cost the same as three months of vigilance.",
              ],
              [
                "Week 2 — Map the stack and identify overlap",
                "Group every subscription by category: SEO and keyword research, social media scheduling, design and creative, AI tools, project management, client reporting and analytics, proposals and contracts, email and outreach, and business operations. For any category with more than one active tool, identify which the team uses most heavily. For AI subscriptions specifically, note each tool&apos;s seat count alongside the number of staff who use it at least twice a week. Flag any subscription that was set up for a specific client or campaign where that client is no longer active — these are your cleanest cancellation candidates.",
              ],
              [
                "Week 3 — Size the savings and assign seat owners",
                "Calculate the annual cost of each redundant tool and each over-provisioned AI subscription. The owner-use check for AI tools: if you cannot name who uses a seat regularly, it is a right-size or cancellation candidate. For SEO platforms, design tool suites, and social scheduling tools, compare active user counts against the seat tier being paid for. Rank all findings by annual dollar impact. Cancellations and seat removals come first — they require no vendor negotiation. Then consolidation, downgrade, and renegotiation conversations for contracts renewing within 90 days.",
              ],
              [
                "Week 4 — Act, document, and set a weekly spend check",
                "Cancel clearly redundant tools and remove idle seats before the next billing cycle. Right-size AI subscriptions to active user counts before the next annual renewal date. Initiate consolidation conversations where you have identified tool overlap. Contact vendors on annual contracts renewing soon — current headcount and usage data are useful leverage. Establish a recurring weekly owner-facing spend snapshot: a five-minute review of new recurring charges and upcoming renewals so the next surprise renewal is caught before it hits, not after.",
              ],
            ].map(([title, copy], i) => (
              <div key={title} className="flex gap-4 sm:gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-dark-700 bg-dark-900 text-sm font-semibold text-brand-300">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300" dangerouslySetInnerHTML={{ __html: copy as string }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly review and overlap map */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Quarterly subscription review</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              What a quarterly agency software review covers
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Most owner-led agencies run one big audit — then let subscriptions drift again. A quarterly review keeps the stack clean between annual contracts and catches the three patterns that accumulate fastest in active agencies: converted trials, duplicate accounts, and AI seat count drift. The quarterly pass is faster than the annual review because the baseline is already set.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Converted trial cleanup", "Any free trial that converted to a paid plan in the past 90 days without a deliberate adoption decision. Agencies running active pitches and capability evaluations convert two to four trials per quarter. Without a quarterly check, these are caught only at the annual review — after 9 to 12 months of billing."],
                ["Duplicate account sweep", "The same tool paid for under separate individual plans by different team members — Canva Pro, Notion, Midjourney, or meeting transcription tools each billing independently per person. A quarterly sweep finds new individual signups and consolidates them onto the existing team account before they accumulate."],
                ["Overlap map update", "Every new hire brings tool preferences. A quarterly review checks whether any new subscription duplicates a category already covered — project management, reporting, AI writing, design — and flags it before it becomes entrenched across the team."],
                ["Ownerless renewal assignment", "Annual contracts renewing in the next 60 days where no current team member is the named renewal owner. These are the highest-risk renewals — nobody reviews the seat count or tier before the auto-renewal processes. A quarterly review gives a 60-day window to assign ownership and make an active keep, right-size, or cancel decision."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The full structured workflow is in the{" "}
              <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a>.
              For the broader owner-led SMB guide, see the{" "}
              <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">small business software audit hub</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Sample findings */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Example findings from a marketing agency software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative example findings based on common patterns in marketing and creative agency billing data. Actual amounts vary by team size and tool mix.
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
                  ["Three SEO platforms active across a team of 10", "Consolidate to one", "$2,400 – $9,600/yr"],
                  ["ChatGPT Teams at 12 seats, 3 active users", "Right-size before renewal", "$2,430 – $3,240/yr"],
                  ["Post-client social scheduling subscriptions still billing", "Cancel", "$480 – $2,400/yr"],
                  ["Adobe CC full-suite team plan, partial use", "Downgrade or switch to individual apps", "$1,200 – $4,800/yr"],
                  ["Notion AI at full team tier, 2–3 regular users", "Right-size to active seats", "$720 – $2,160/yr"],
                  ["Otter.ai or Fireflies team plan, unused after first month", "Cancel", "$480 – $1,800/yr"],
                  ["Client reporting tools per account manager vs team plan", "Consolidate to team licence", "$960 – $3,600/yr"],
                  ["Four project management tools across 12 team members", "Consolidate to one", "$1,800 – $7,200/yr"],
                  ["Proposal tool, CRM now includes proposal templates", "Cancel standalone tool", "$480 – $1,800/yr"],
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
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical software-spend snapshot for owner-led marketing and creative agencies — not an enterprise procurement platform. A report the agency founder or studio owner can review and act on in a week, or hand to an ops or finance lead to execute.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Categorised spend", "Every recurring charge grouped by workflow function — SEO, social scheduling, design, AI tools, project management, client reporting, proposals, email, and CRM. No manual sorting or spreadsheet required."],
              ["Flagged attention areas", "Client-linked subscriptions that outlived the engagement, zombie seats from departed staff, AI seat accumulation, duplicate platform pairs, and annual contracts approaching renewal — recurring payments with no active owner reviewing them."],
              ["Prioritised action list", "Cancel, consolidate, right-size, and renegotiate — ranked by annual dollar impact. SEO platforms and AI subscriptions carry the highest per-seat cost in an agency stack, so those surface first."],
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
              The agency founder or studio owner typically runs the initial billing review and owns the cancellation, right-sizing, and renegotiation decisions — including AI subscription seat reviews before surprise annual renewals hit. The completed savings report is shared with an ops manager, finance lead, or senior account manager to handle seat removals, client-linked subscription clean-ups, and vendor conversations. It can be used as a quarterly spend check before renewal season, or set up as a recurring weekly owner-facing spend snapshot — a practical line-by-line view of what the agency is paying for before anyone goes through card statements manually.
            </p>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for marketing agencies</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the categorisation step and surfaces per-client orphan tools and AI seat accumulation automatically.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from accounting tool and collect individual team card expenses separately</li>
                <li>Manually categorise each subscription by workflow type</li>
                <li>Cross-reference per-client tool signups against active client list</li>
                <li>Check AI subscription seat counts against active usage individually</li>
                <li>Review each SEO and design platform for active user counts</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings into something shareable with an ops lead or partner</li>
                <li>Repeat from scratch at the next review cycle</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across marketing agency tool categories</li>
                <li>Flags duplicate SEO tools, idle client subscriptions, AI seat accumulation, and renewal risks</li>
                <li>Prioritised cancel, consolidate, right-size, and renegotiate action list</li>
                <li>Shareable savings report ready for studio leads or owners</li>
                <li>Repeatable baseline for the next quarterly or annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your agency?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led marketing, creative, content, web, or digital agency with 4 to 50 staff</li>
                <li>Multiple SEO, AI tool, social scheduling, reporting, and design subscriptions accumulated across clients and hires</li>
                <li>No dedicated IT or ops team managing tool purchases and renewals</li>
                <li>You want a report and action list — not a platform rollout or ongoing SaaS management system</li>
                <li>Billing data accessible from accounting software, credit card, or expense tool</li>
                <li>Surprise annual renewals on AI or design tools have hit without anyone reviewing seat counts first</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large integrated marketing group with a central procurement or IT function</li>
                <li>Primary need is software governance, SSO, or identity management</li>
                <li>Fewer than six active software subscriptions</li>
                <li>Requires automated provisioning, vendor management, or enterprise compliance controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What software should a marketing agency audit?",
                "A marketing agency software audit should cover SEO and keyword research platforms (Ahrefs, Semrush, Moz), social media scheduling tools (Buffer, Hootsuite, Sprout Social, Later), client reporting platforms (Agency Analytics, DashThis), design and creative tools (Adobe CC, Figma, Canva Pro), project management (Monday, Asana, ClickUp, Notion), proposal and contract tools, email and outreach platforms, CRM, and AI tools (ChatGPT Teams, Claude Pro, Midjourney, Notion AI, Otter.ai, Fireflies). Focus the review on categories where per-seat pricing is highest and where client-driven signups and AI subscriptions have accumulated beyond active use.",
              ],
              [
                "Why do marketing agencies carry more software than other businesses their size?",
                "Four patterns drive most of the accumulation: client-driven signups where a tool subscribed for one engagement keeps billing after the client offboards; new hire stack preferences where each senior strategist, designer, or developer brings their preferred SEO, reporting, design, or AI platform; AI tool sprawl from the 2023–2024 adoption wave where tools were bought at full team tier and usage concentrated in a few users; and pitch evaluation trials that convert to paid plans and never get cancelled. An agency that grew from 5 to 20 people over three years can carry 60-plus active subscriptions without a central review ever having been run.",
              ],
              [
                "Do marketing agencies overspend on AI subscriptions?",
                "Yes — AI subscription waste is now one of the fastest-growing categories in marketing agency billing exports. Agencies that adopted ChatGPT Teams, Claude Pro, Midjourney, Notion AI, Canva Pro, and meeting transcription tools during the 2023–2024 AI adoption wave often find multiple AI tools billing at full team tiers while active use is concentrated in two or three people. A 12-person agency paying ChatGPT Teams at $30/user/month across all seats — while only three staff use it regularly — is spending $3,240/year on unused AI licences. The fix is the same as any ghost licence: assign a named owner to each AI subscription and right-size seat counts before the annual renewal.",
              ],
              [
                "How do I audit marketing agency software without disrupting client delivery?",
                "Start with billing data only — no changes to live tools during the review. Export 6 to 12 months of charges from your accounting software or credit card, categorise by workflow type, and flag duplicates, AI seat accumulation, and client-linked tools still billing after offboarding. Plan any consolidations between campaigns or in a quieter delivery window rather than mid-execution. The review itself takes a few hours; execution can be staged across a fortnight without touching any live client workflow.",
              ],
              [
                "What are surprise renewal charges in a marketing agency?",
                "Surprise renewal charges are annual subscriptions — typically SEO platforms, design tool suites, and AI tools — that auto-renew without anyone reviewing whether the seat count or tier still matches the team. Common examples: Ahrefs or Semrush renewing at an agency-tier seat count from a previous headcount peak; Adobe CC team plan renewing for a designer who left; Midjourney or Canva Pro subscriptions on individual plans billing across multiple team members independently. A billing export covering the last 12 months surfaces all of them in one pass.",
              ],
              [
                "Can StackSmart handle a marketing agency billing export?",
                "Yes. StackSmart processes any billing export CSV and recognises the common SEO, social scheduling, design, AI, project management, and reporting tool categories that appear in agency billing. It flags duplicates, per-client tools still active after offboarding, idle seats in high per-seat-cost platforms, AI subscription seat accumulation, and renewal risks — and produces a prioritised action list without requiring a platform rollout.",
              ],
              [
                "What does the StackSmart output look like for a marketing agency?",
                "StackSmart produces a categorised software-spend snapshot: every recurring charge grouped by workflow function (SEO, social scheduling, design, AI tools, project management, client reporting, proposals, email, and CRM), a list of flagged attention areas including client-linked orphan subscriptions, zombie seats, duplicate platform pairs, AI seat accumulation, and upcoming annual renewals, and a prioritised action list ranked by annual dollar impact. The agency founder reviews the findings and can share the report with an ops manager, finance lead, or account manager to execute — a practical spend view, not an enterprise procurement audit.",
              ],
              [
                "How often should a marketing agency run a software subscription review?",
                "Quarterly is the right cadence for most owner-led marketing and creative agencies. Run a full billing export review once a year — ideally before your largest annual renewals arrive — and a lighter quarterly pass in between. The quarterly check covers three things: new subscriptions added since the last review, converted trials that moved to paid in the last 90 days without a deliberate adoption decision, and upcoming annual renewals in the next 60 days where seat counts or tiers should be reassessed before auto-renewal processes. Agencies that skip the quarterly check typically discover two to four converted trials and at least one AI subscription that renewed at full team tier before the annual review finds them.",
              ],
              [
                "What are duplicate accounts in a marketing agency software stack?",
                "Duplicate accounts occur when the same tool is paid for multiple times under separate individual plans rather than once under a consolidated team licence. Common examples: three individual Canva Pro subscriptions billing on separate cards instead of one team plan; individual Notion plans per team member instead of a single team workspace; separate Midjourney subscriptions per designer. The fix is consolidation — migrate to a single team licence and cancel the individual plans. Savings are typically immediate and require no vendor negotiation.",
              ],
              [
                "What is an ownerless renewal in a marketing agency tool stack?",
                "An ownerless renewal is an annual subscription that auto-renews without any current team member being responsible for the keep-or-cancel decision. Most common when the person who originally signed up has left or changed roles. Examples: an SEO platform renewal owned by a strategist who departed six months ago; an annual Adobe CC seat for a designer who left; an AI tool nobody has logged into since the first month. The fix: assign a named owner before the renewal date, confirm current usage, then make an active keep, right-size, or cancel decision.",
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
            location="marketing_agency_software_audit"
            heading="See what a marketing agency audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your agency billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next surprise renewal hits</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your agency&apos;s review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "marketing_agency_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "marketing_agency_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for agencies and owner-led SMBs"
        description="These pages cover the SMB audit hub, the checklist, and guides for other owner-led SMB verticals where software spend is unreviewed."
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
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Booking, telehealth, recalls, and admin subscription audit for owner-led allied health practices.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your agency stack.",
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
