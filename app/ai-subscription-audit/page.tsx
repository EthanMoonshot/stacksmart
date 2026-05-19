import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "AI Subscription Audit | Stop Paying for AI Tools Nobody Uses",
  description:
    "ChatGPT Teams, Claude Pro, Midjourney, Canva, Notion AI, and meeting transcription tools are now a standard waste category in owner-led SMB billing exports. An AI subscription audit finds overlapping tools, idle seats, and unused tiers before the next annual renewal.",
  path: "/ai-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/ai-subscription-audit"),
      url: absoluteUrl("/ai-subscription-audit"),
      name: "AI Subscription Audit | StackSmart",
      description:
        "ChatGPT Teams, Claude Pro, Midjourney, Canva Pro, Notion AI, and meeting transcription tools are a fast-growing waste category in owner-led SMB billing exports. An AI subscription audit finds overlapping tools, idle seats, and full-tier plans with two active users.",
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
          name: "AI Subscription Audit",
          item: absoluteUrl("/ai-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI subscription audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI subscription audit is a structured review of every AI tool your business pays for — ChatGPT Teams, Claude Pro, Midjourney, Canva Pro, Notion AI, Otter.ai, Fireflies, Perplexity Pro, and similar tools. The goal is to find overlapping tools doing the same job, full-team-tier plans where active use is concentrated in one or two people, individual accounts that should be consolidated onto a team plan, and meeting transcription or generation tools forgotten after the first month. The output is a clear keep, right-size, consolidate, or cancel decision for each AI subscription.",
          },
        },
        {
          "@type": "Question",
          name: "Why do small businesses accumulate too many AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI subscriptions accumulate for three reasons. First, every team member adopts their preferred AI writing, image, or productivity tool independently during 2023–2024 without a firm-wide standard being set. Second, team-tier plans are purchased expecting firm-wide adoption that concentrates in one or two power users — the seat count never gets right-sized before the annual renewal. Third, new AI tools are announced constantly, creating software shopping overwhelm where businesses add a new subscription to solve a problem the existing tools could already handle. The result is five tools doing the same job: a general-purpose AI (ChatGPT or Claude), an image generator (Midjourney or Canva AI), a writing assistant (Notion AI or Grammarly Business), a meeting tool (Otter.ai or Fireflies), and a search assistant (Perplexity). Most businesses need two of these, not five.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit AI subscriptions without a finance team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 3 to 6 months of billing data from your business credit card or accounting software. Filter for any charge containing the words AI, Pro, Teams, Plus, or Business. For each AI subscription: note the tool name, monthly or annual cost, number of seats purchased, and whether you can name a current team member who uses it at least twice a week. If you cannot name an active user for a full-team-tier seat, that seat is a right-size or cancellation candidate. Check whether any two tools on the list do the same job — AI writing, image generation, meeting transcription, or search assistance. Rank by annual cost and act on cancellations first. Most owner-led businesses complete this pass in under 30 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most common AI subscription waste patterns in small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The five most common findings are: (1) ChatGPT Teams or Claude Pro purchased at full team tier with two or three active users — unused seats billing at $25–$30/user/month; (2) meeting transcription tools (Otter.ai, Fireflies) forgotten after the first month or replaced by a built-in Zoom or Teams transcript feature; (3) Canva Pro on individual plans per team member instead of a consolidated team account — paying three to five times the effective per-seat cost; (4) Notion AI enabled across a full workspace when only one or two writers use it weekly; (5) Midjourney or image generation tools retained after generative image work moved to Canva or Adobe Firefly. In most businesses, these five patterns represent $3,000 to $8,000 in recoverable annual spend.",
          },
        },
        {
          "@type": "Question",
          name: "How much do small businesses typically overspend on AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 10-person business that adopted AI tools broadly during 2023–2024 and has not reviewed seat counts typically finds $3,000 to $8,000 in recoverable AI subscription spend per year. The largest single item is usually a full-team-tier general-purpose AI plan (ChatGPT Teams or Claude Pro) where 8 to 12 seats were purchased for anticipated adoption and 2 to 3 people use it regularly. At $25–$30 per seat per month, 8 unused seats on a 12-month plan is $2,400–$2,880 in recoverable spend from a single subscription. Add meeting transcription, image generation, and writing assistant tools at team tiers and the total accumulates quickly.",
          },
        },
        {
          "@type": "Question",
          name: "What AI tools create the most subscription overlap for SMBs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The highest-overlap category in owner-led SMB stacks is general-purpose AI writing and reasoning assistants. Businesses frequently pay for both ChatGPT Teams and Claude Pro — doing identical jobs for the same team members. Canva Pro (for AI generation features), Midjourney, and Adobe Firefly create overlap in the image generation category. Otter.ai and Fireflies overlap with each other and with built-in transcript features in Zoom, Microsoft Teams, and Google Meet. Notion AI overlaps with ChatGPT for writing assistance. Perplexity Pro overlaps with ChatGPT and Claude for research tasks. Most owner-led SMBs need one general-purpose AI, one image tool, and their video conferencing platform's built-in transcript — not six separate subscriptions.",
          },
        },
        {
          "@type": "Question",
          name: "When should a small business audit its AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best trigger is 60 to 90 days before your largest annual AI contract renews — ChatGPT Teams and Claude Pro annual plans often carry the highest per-seat cost. For many businesses, the first annual renewal anniversary of a 2023 or 2024 AI adoption is arriving now, and the seat count reflects the original optimistic purchase rather than actual usage. A second trigger is any time a new AI tool is being considered — before adding a subscription, run a 30-minute owner-use check on existing AI tools to confirm what is actively used and what overlaps with the proposed new tool. Software shopping overwhelm is itself a signal that the existing stack needs a review, not an expansion.",
          },
        },
        {
          "@type": "Question",
          name: "What does StackSmart produce from an AI subscription audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "StackSmart produces a categorised software-spend snapshot that includes all AI subscriptions grouped by function — general-purpose AI, image generation, meeting transcription, writing assistance, and search/research tools. It flags idle seat counts on team-tier plans, duplicate tools in the same category, individual accounts that should be consolidated onto a team plan, and annual renewal dates where the seat count should be reviewed before auto-renewal. The output is a prioritised keep, right-size, consolidate, or cancel list ranked by annual dollar impact — designed for the business owner to review and action in under an hour, or hand to an admin or office manager to execute.",
          },
        },
        {
          "@type": "Question",
          name: "What is workspace-owner confusion in AI subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Workspace-owner confusion occurs when the person who set up an AI team subscription — ChatGPT Teams, Claude Pro, Notion AI — has left or changed roles, leaving no current team member with admin access or accountability for the renewal decision. The subscription keeps billing. Seats from departed team members are never removed. Annual renewals auto-process without anyone reviewing the seat count. Renewal notices go to an inbox nobody monitors. The fix is a workspace ownership audit: for each AI team subscription, confirm the current workspace admin is still at the business in the relevant role, that billing notifications go to an active business email, and that a named current team member owns the keep-or-cancel renewal decision.",
          },
        },
        {
          "@type": "Question",
          name: "Should contractors have AI subscription seats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contractors are frequently provisioned with the same AI tool access as full-time staff — a seat on ChatGPT Teams, Claude Pro, or Notion AI — for the duration of a project. When the project ends and the contractor offboards, the seat typically stays active unless someone with workspace admin access explicitly removes it. On an annual plan at $25–$30 per seat per month, a single dormant contractor seat costs $300–$360 per year. Most owner-led businesses with regular contractor use have two to four of these sitting active at any point. The audit check: compare the active user list on each AI workspace against the current team roster, including contractors currently engaged. Anyone not on the current roster is a seat removal candidate.",
          },
        },
        {
          "@type": "Question",
          name: "What are converted AI trials and how do you find them in a billing review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A converted AI trial is a subscription that moved from a free trial to a paid plan, often without a deliberate adoption decision. A team member starts a free trial of a specialist assistant, transcription service, or research platform to evaluate it for a specific use case. The trial ends and converts automatically. If the evaluation was inconclusive or the team member who signed up has since left, the subscription bills monthly without active use. In a billing review, converted AI trials appear as charges that first showed up in the last 12 months without a preceding annual commitment. For each one, confirm: was this an intentional adoption decision, and is there a current team member who uses it at least twice a week? If not, it is an immediate cancellation candidate before the next renewal.",
          },
        },
      ],
    },
  ],
};

const aiWastePatterns = [
  {
    label: "ChatGPT Teams or Claude Pro at full team tier",
    detail:
      "Purchased at 8 to 15 seats for firm-wide AI writing and reasoning assistance. Active use concentrated in 1 to 3 people after the initial onboarding period. At $25–$30/user/month, 10 unused seats on a 12-month plan is $3,000–$3,600 in recoverable spend — from a single subscription.",
    color: "text-red-400",
    tag: "Right-size",
  },
  {
    label: "Meeting transcription tools forgotten post-trial",
    detail:
      "Otter.ai or Fireflies subscribed at a team plan during a push to document client meetings or internal reviews. Often replaced by a built-in Zoom, Google Meet, or Microsoft Teams transcript feature within the first 60 days — and then forgotten. $10–$19/user/month, typically billed annually with no active renewal owner.",
    color: "text-red-400",
    tag: "Cancel",
  },
  {
    label: "Two general-purpose AI assistants",
    detail:
      "ChatGPT Teams and Claude Pro both active for the same team — one adopted first, the second added during a trial or at a team member's request. Both doing identical work: drafting, summarising, research assistance. One is a clear cancellation candidate once the team nominates a primary tool.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Canva Pro on individual plans instead of a team account",
    detail:
      "Three to five individual Canva Pro subscriptions billing on separate personal and business cards instead of one consolidated team account. Most platforms charge 30 to 50 percent less per seat on a team plan than multiple individual accounts. The fix requires no vendor negotiation — just migration to a single team account.",
    color: "text-amber-400",
    tag: "Consolidate",
  },
  {
    label: "Image generation tools after workflow shifted",
    detail:
      "Midjourney, Adobe Firefly, or a dedicated image generation platform retained after generative image work moved to Canva AI, ChatGPT image generation, or another existing tool. Frequently on individual plans per designer rather than a team account, with billing spread across personal and business cards.",
    color: "text-amber-400",
    tag: "Cancel or consolidate",
  },
  {
    label: "Notion AI at team tier, one or two active users",
    detail:
      "Notion AI enabled across a full team workspace at the team plan tier, where only one or two writers use the AI features regularly. The rest of the team uses Notion for documents and databases without touching the AI layer. Right-sizing to the active users or switching to a lower tier often halves the effective cost.",
    color: "text-orange-400",
    tag: "Right-size",
  },
  {
    label: "AI tools solving the same research need",
    detail:
      "Perplexity Pro, ChatGPT Plus, and Claude Pro all active for the same person or team — each used for AI-assisted research and summarisation. Three subscriptions covering identical workflow. One general-purpose AI handles research, writing, and summarisation for most owner-led SMB teams.",
    color: "text-orange-400",
    tag: "Consolidate",
  },
  {
    label: "Microsoft 365 Copilot add-on at full team tier",
    detail:
      "Added to an existing Microsoft 365 Business subscription at $30/user/month across all licensed users. Usage rarely validated after the first 60 days. A 10-person team where two people use Copilot regularly is paying $3,600/year for eight unused seats on a single add-on. The seat count can be adjusted before the annual renewal.",
    color: "text-brand-400",
    tag: "Right-size",
  },
];

export default function AiSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">AI subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Stop paying for AI tools nobody uses
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              ChatGPT Teams, Claude Pro, Midjourney, Canva Pro, Notion AI, Otter.ai, and Fireflies are now a standard waste category in owner-led SMB billing exports. The pattern is consistent: tools adopted at full team tier during 2023–2024 AI rollouts with active use concentrated in one or two people, annual renewals arriving before anyone checks the seat count, and five tools doing jobs that two would cover. An AI subscription audit finds the overlap, sizes the recoverable spend, and gives you a clear keep, right-size, consolidate, or cancel list — before the next renewal processes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "ai_subscription_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "ai_subscription_audit_secondary" }}
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
              How do you audit AI subscriptions for a small business?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 3 to 6 months of billing data from your business credit card or accounting software. Filter for any charge containing AI, Pro, Teams, Plus, Business, or the names of known AI tools — ChatGPT, Claude, Midjourney, Canva, Notion, Otter, Fireflies, Perplexity, Copilot, Grammarly. For each AI subscription, record the tool name, monthly or annual cost, and seat count. Run the owner-use check: can you name a current team member who uses this tool at least twice a week? If not, it is a right-size or cancellation candidate. Then look for category overlap — two general-purpose AI assistants, two image generation tools, two meeting transcription platforms. Rank findings by annual cost. Act on cancellations and seat right-sizing first — they require no vendor conversation. Complete this pass in under 30 minutes for most small business stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI subscriptions accumulate */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why AI subscriptions accumulate in owner-led SMBs</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            AI tool sprawl follows a different pattern from general SaaS waste. These are the four dynamics specific to small business AI subscription accumulation.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              [
                "Full-team-tier plans, partial adoption",
                "When a business subscribes to ChatGPT Teams or Claude Pro, the seat count is set optimistically — the whole team is expected to adopt it. Within 60 to 90 days, active use concentrates in one or two power users. The seat count never gets adjusted before the annual renewal. On a 12-person plan at $30/seat/month, 8 unused seats cost $2,880 per year from a single subscription.",
              ],
              [
                "Software shopping overwhelm creates more sprawl",
                "New AI tools launch constantly, each promising to solve a specific problem better than existing tools. Rather than reviewing what the current stack already handles, businesses add the new subscription. The result is five tools doing two jobs — and the underlying problem (the existing tools are underused, not insufficient) goes unaddressed. The solution is an audit of what the current AI stack actually does, not another subscription.",
              ],
              [
                "Individual accounts instead of team plans",
                "Team members sign up for Canva Pro, Notion AI, or Midjourney individually — on personal cards, at individual-plan pricing — rather than under a consolidated team account. The same tool ends up billing three to five times across separate invoices. Most platforms offer team plans at 30 to 50 percent less per seat than multiple individual accounts. Consolidation requires no vendor negotiation.",
              ],
              [
                "Annual renewals arrive before anyone checks usage",
                "AI tools adopted in 2023 and 2024 are now hitting their first or second annual renewal. The seat count on the renewal reflects the original purchase, not current usage. Otter.ai, Fireflies, and meeting transcription tools are the most common finding: subscribed at a team plan during a documentation push, replaced by a built-in Zoom or Teams transcript feature, and forgotten — renewing annually for two years before anyone notices.",
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

      {/* Five tools doing the same job callout */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">The five-tools pattern</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              When five AI tools are doing jobs that two would cover
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              The most common AI subscription profile in an owner-led SMB audit looks like this: one general-purpose AI (ChatGPT Teams), a second general-purpose AI (Claude Pro) added when someone preferred it, an image tool (Midjourney or Canva Pro), a meeting tool (Otter.ai or Fireflies), and a writing or research assistant (Notion AI or Perplexity Pro). Five subscriptions, two actual jobs. Most owner-led businesses — clinics, agencies, accounting firms, childcare operators — need one reliable general-purpose AI and their video platform's built-in transcript. The audit question is not which tools are good. It is which tools the team actually uses this week.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  job: "General-purpose AI",
                  tools: "ChatGPT Teams, Claude Pro, Microsoft 365 Copilot, Gemini Advanced",
                  verdict: "Pick one. The others are cancellation candidates.",
                  color: "text-red-400",
                },
                {
                  job: "Image and creative generation",
                  tools: "Midjourney, Adobe Firefly, Canva Pro AI, DALL-E (via ChatGPT)",
                  verdict: "Most teams already have this via Canva or ChatGPT. Check before subscribing separately.",
                  color: "text-amber-400",
                },
                {
                  job: "Meeting transcription",
                  tools: "Otter.ai, Fireflies, Zoom AI Companion, Microsoft Teams recap, Google Meet transcript",
                  verdict: "Your video platform likely includes this free. Check before paying separately.",
                  color: "text-brand-400",
                },
              ].map((item) => (
                <div key={item.job} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-dark-400">AI job category</p>
                  <h3 className={`mt-2 text-sm font-semibold ${item.color}`}>{item.job}</h3>
                  <p className="mt-2 text-xs leading-6 text-dark-400">{item.tools}</p>
                  <p className="mt-3 text-xs leading-6 font-medium text-dark-300">{item.verdict}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              Running the owner-use check across these three categories takes under 20 minutes. For each tool in each category, name the current team member who used it this week. If you cannot — or if two tools in the same category have the same answer — you have identified the consolidation candidates before touching a single vendor conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contractor seats and project-only AI subscriptions */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Contractor seats and project-only AI subscriptions</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Two AI subscription patterns that create recurring waste in owner-led businesses and are rarely caught in a standard seat-count review: contractor seats on full-team-tier plans, and AI tools subscribed for a project that never got cancelled when the work ended.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">Contractor seats</p>
              <h3 className="mt-3 text-base font-semibold text-white">Full employee-tier AI seats for contractors</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                When a contractor joins for a project, they are typically provisioned with the same AI tool access as full-time staff — a seat on ChatGPT Teams, Claude Pro, or Notion AI. The contractor completes the project and offboards. The seat stays active. On an annual plan at $25–$30/month, a single dormant contractor seat costs $300–$360 per year. Most owner-led businesses with regular contractor use have two to four of these sitting active at any point.
              </p>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                The check: compare the active user list on each AI workspace against your current team list including contractors actively engaged. Anyone not on the current roster is a seat removal candidate.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-400">Project-only tools</p>
              <h3 className="mt-3 text-base font-semibold text-white">AI tools bought for a project that became permanent</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                A business runs an AI-driven content, research, or design project and signs up for a purpose-specific AI tool for the duration. The project ends. The tool stays on the billing run. Six months later, nobody remembers what it was for, the tool has not been opened since the project wrapped, and it is approaching its annual renewal with no named owner reviewing it.
              </p>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                The check: for any AI subscription you cannot immediately assign to a current ongoing workflow, ask — was this bought for a specific project or campaign? If yes and that project has ended, it is an immediate cancellation candidate before the next billing cycle.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-900/50 p-5">
            <p className="text-sm font-medium text-white">Converted AI trials: the third pattern</p>
            <p className="mt-2 text-sm leading-7 text-dark-300 max-w-3xl">
              A team member starts a free trial of a new AI tool — a specialist assistant, transcription service, or research platform — intending to evaluate it. The trial converts to paid automatically. The evaluation was inconclusive, the use case did not materialise, or the team member who signed up has since left — but the subscription is now billing monthly. Converted AI trials appear in billing reviews as charges that first showed up within the last 12 months. For each one, confirm: was this an intentional adoption decision, and is there a current team member who uses it at least twice a week? If not, cancel before the next renewal. See the <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> for the full converted-trial review step.
            </p>
          </div>
        </div>
      </section>

      {/* AI waste patterns */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common AI subscription waste patterns in small businesses</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the eight patterns StackSmart most commonly surfaces when reviewing AI tool spending in owner-led SMB billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aiWastePatterns.map((s) => (
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

      {/* Sample findings table */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Example findings from an AI subscription audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Illustrative findings based on common patterns in owner-led SMB billing exports. Actual amounts vary by team size and tool mix.
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
                  ["ChatGPT Teams at 12 seats, 2–3 active users", "Right-size to active users before renewal", "$2,430 – $3,240/yr"],
                  ["Claude Pro + ChatGPT Teams both active, same team", "Pick one, cancel the other", "$2,160 – $4,320/yr"],
                  ["Microsoft 365 Copilot add-on, 2 active of 10 seats", "Remove unused seats", "$2,880 – $3,600/yr"],
                  ["Otter.ai team plan, unused after Zoom transcript adopted", "Cancel", "$720 – $2,280/yr"],
                  ["Canva Pro: 4 individual plans instead of team account", "Consolidate to team licence", "$480 – $960/yr"],
                  ["Midjourney retained after Canva AI adopted", "Cancel Midjourney", "$480 – $1,200/yr"],
                  ["Notion AI at full workspace tier, 1 active writer", "Right-size or downgrade tier", "$480 – $960/yr"],
                  ["Fireflies annual plan renewed, team uses Teams recap", "Cancel at next renewal", "$480 – $1,800/yr"],
                  ["Perplexity Pro + Claude Pro for same research workflow", "Consolidate to one", "$240 – $960/yr"],
                  ["Contractor seats left active after project ended — 2 seats", "Remove from workspace admin panel", "$600 – $720/yr"],
                  ["AI trial converted to paid, no adoption decision made", "Cancel before next billing", "$120 – $960/yr"],
                  ["Workspace admin email belongs to departed team member", "Recover admin access, audit and remove inactive seats", "$300 – $1,800/yr"],
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

      {/* 30-day workflow */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day AI subscription audit for an owner-led SMB</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run in spare time. No dedicated IT or ops function required. Works from billing data — no tool access or admin credentials needed.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data and list every AI charge",
                "Export 6 to 12 months of charges from your business credit card, accounting software (Xero, QuickBooks, MYOB), or expense tool. A 12-month view is important — AI tools with annual plans adopted in 2023 or 2024 will be approaching renewal and may not appear in a shorter export. Include any tools expensed on personal cards by team members. Filter for AI-related charges: look for ChatGPT, Claude, Anthropic, OpenAI, Midjourney, Canva, Notion, Otter, Fireflies, Perplexity, Copilot, Grammarly, Adobe (for Firefly and AI features), and any other AI product names. List each tool with its monthly or annual cost, seat count, and billing date.",
              ],
              [
                "Week 2 — Group by job and run the owner-use check",
                "Organise every AI subscription by the job it performs: general-purpose AI writing and reasoning, image and creative generation, meeting transcription and summaries, writing assistance and editing, search and research assistance. For any job category with more than one active tool, identify which the team uses most heavily — that is your keep candidate, and the others are consolidation or cancellation candidates. For every subscription in the list, run the owner-use check: name the current team member who uses this tool at least twice a week. If you cannot name them, the subscription has no active owner — that is your right-size or cancel signal. For team-tier plans (ChatGPT Teams, Claude Pro, Microsoft 365 Copilot), compare the seat count on the billing statement against the number of active users you identified.",
              ],
              [
                "Week 3 — Size the savings and prioritise",
                "Calculate the annual cost of each redundant or over-provisioned AI subscription. For team-tier plans, the formula is simple: (total seats − active users) × monthly cost per seat × 12. For individual-plan duplicates that should be on a team account, calculate the per-seat saving from consolidation. Rank all findings by annual dollar impact. Cancellations come first — they require no vendor negotiation and take effect immediately. Seat right-sizing on annual plans may require waiting for the renewal window to adjust the count; note the renewal date and set a calendar reminder 60 days before. Consolidations from individual to team plans can typically be done immediately.",
              ],
              [
                "Week 4 — Act and set a quarterly AI review",
                "Cancel clearly unused AI tools before the next billing cycle. Consolidate individual-plan duplicates onto team accounts — this is usually a self-serve action inside the platform. For seat right-sizing on annual plans, initiate the conversation with the vendor now so the adjustment is ready at the renewal date. For tools approaching annual renewal within 60 days, make an active keep or cancel decision before the auto-renewal processes. Document each decision so the next review has a clean baseline. Then set a quarterly review reminder: a 20-minute pass to check for new AI subscriptions added since the last review, converted free-tier tools that moved to paid, and annual renewals arriving in the next 60 days.",
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

      {/* Owner-use accountability for AI */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Owner-use check for AI tools</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Every AI seat needs a named user who would notice if it was cancelled
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              The owner-use check is the fastest way to surface AI subscription waste: for every AI tool seat, name the current team member who uses it at least twice a week and would notice within 24 hours if the subscription was cancelled. If you cannot name them, the seat has no active owner — that is the definition of recoverable spend.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  status: "Active user — keeps and uses it weekly",
                  color: "text-emerald-400",
                  tag: "Keep",
                  body: "A named current team member uses this AI tool at least twice a week for real work. They would notice within 24 hours if the subscription was cancelled. No action required — this is healthy spend.",
                },
                {
                  status: "Active user — seat count exceeds usage",
                  color: "text-amber-400",
                  tag: "Right-size",
                  body: "There is a real user, but the team plan has more seats than active users. Right-size the seat count before the annual renewal. Do not cancel — reduce to the actual number of regular users.",
                },
                {
                  status: "Tool is covered by another subscription",
                  color: "text-red-400",
                  tag: "Cancel",
                  body: "The job this tool does is already covered by another AI subscription the team uses more heavily. This is a duplicate — one of the two is a cancellation candidate. Pick the one the team prefers and cancel the other.",
                },
                {
                  status: "Cannot name a current user",
                  color: "text-red-400",
                  tag: "Cancel",
                  body: "Nobody on the current team can name who uses this AI tool, or the person who signed up has left or changed roles. The subscription has no active owner. This is the most common AI waste finding — and almost always a candidate for immediate cancellation before the next billing cycle.",
                },
              ].map((item) => (
                <div key={item.status} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className={`text-sm font-semibold ${item.color}`}>{item.status}</p>
                    <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{item.tag}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workspace ownership and admin confusion */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-red-400/15 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-400">Workspace-owner confusion</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Who owns the AI workspace when the person who set it up has left?
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              AI team subscriptions are typically set up by one person — often using their own email as the workspace admin. When that person leaves, the workspace does not transfer automatically. The subscription keeps billing, the seats stay active, but there is no named owner managing access, reviewing the seat count, or making the renewal decision. Renewal notices go to an inbox nobody monitors. Seat counts from departed team members are never adjusted. The annual renewal processes without review. This is the AI version of an ownerless renewal — and it is one of the most common findings in owner-led SMB billing audits.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  signal: "Admin email belongs to a departed team member",
                  detail: "The workspace was set up under a personal email or the account of someone who has since left. Billing continues to a card on file, but no current team member has admin access to manage seats or review the renewal.",
                  tag: "Reassign admin",
                  color: "text-red-400",
                },
                {
                  signal: "Renewal notices go to an unmonitored inbox",
                  detail: "Seat limit alerts, renewal confirmations, and billing notifications go to an email address nobody currently checks. Annual renewals auto-process without anyone seeing the notification — or reviewing the seat count.",
                  tag: "Update billing contact",
                  color: "text-red-400",
                },
                {
                  signal: "No current team member has workspace admin access",
                  detail: "Nobody on the team can confirm how many seats are active, which users are on the plan, or when the annual renewal date is — because nobody has the admin credentials. The subscription is effectively ownerless even if two or three people actively use it.",
                  tag: "Recover admin access",
                  color: "text-amber-400",
                },
                {
                  signal: "Departed users still listed as active seats",
                  detail: "Team members who left are still provisioned on the ChatGPT Teams or Claude Pro workspace. Their accounts cannot be used after their email is deactivated, but the seats bill at full rate until someone with admin access explicitly removes them.",
                  tag: "Remove inactive seats",
                  color: "text-amber-400",
                },
              ].map((item) => (
                <div key={item.signal} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className={`text-sm font-semibold ${item.color}`}>{item.signal}</p>
                    <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{item.tag}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-dark-300">
              The workspace ownership audit is a one-time check before the next annual renewal: confirm who the current workspace admin is for each AI subscription, verify they are still at the business, and confirm billing notifications go to an active business inbox. If no current team member can access the workspace admin panel, recovering that access is the first step — before reviewing seat counts or making any renewal decision. See the <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">small business software audit guide</a> for the broader owner-use accountability workflow.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the AI subscription audit report gives you</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            StackSmart produces a practical AI-spend snapshot — every AI subscription grouped by job, flagged for overlap or idle seats, with a prioritised action list the business owner can review in under an hour.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["AI spend by category", "Every AI charge grouped by function — general-purpose AI, image generation, meeting transcription, writing assistance, research tools. No manual sorting or spreadsheet required. Includes both team-tier and individual-plan subscriptions across all payment methods."],
              ["Flagged overlap and idle seats", "Duplicate tools in the same category, team-tier plans with fewer active users than purchased seats, individual accounts that should be consolidated onto team plans, and annual renewals arriving within 60 days where no active owner has reviewed the seat count."],
              ["Prioritised action list", "Keep, right-size, consolidate, and cancel — ranked by annual dollar impact. AI tools at team tier with mostly idle seats surface first. Cancellations (no vendor conversation needed) are listed before renegotiations and consolidations so you know where to start."],
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
              The business owner or director reviews the AI findings and makes the keep, right-size, and cancel decisions — including the seat count adjustments on team-tier plans before annual renewals. The completed report is shared with an admin, office manager, or finance lead to execute the seat removals and cancellations. For verticals with a practice manager or operations role — accounting firms, allied health clinics, marketing agencies — the practice manager handles vendor conversations while the owner retains the subscription decisions. See the <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">small business software audit guide</a> for the broader stack review workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is this the right approach for your business?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led business with 5 to 50 staff that adopted AI tools during 2023–2024</li>
                <li>Paying for two or more general-purpose AI subscriptions (ChatGPT and Claude, or Copilot and ChatGPT)</li>
                <li>Team-tier AI plans where the seat count was set at adoption and never reviewed</li>
                <li>Meeting transcription, image generation, or writing tools that may duplicate built-in platform features</li>
                <li>No dedicated IT or ops function managing tool purchases and renewals</li>
                <li>Annual AI renewals arriving and no current review of who is actually using each seat</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise IT team with centralised AI governance, SSO provisioning, or procurement controls</li>
                <li>Primary need is AI security, data residency, or compliance audit — not cost review</li>
                <li>Fewer than three AI subscriptions in total</li>
                <li>Require automated seat provisioning or identity management across AI platforms</li>
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
                "What is an AI subscription audit?",
                "An AI subscription audit is a structured review of every AI tool your business pays for — ChatGPT Teams, Claude Pro, Midjourney, Canva Pro, Notion AI, Otter.ai, Fireflies, Microsoft 365 Copilot, Perplexity Pro, and similar tools. The goal is to find overlapping tools doing the same job, full-team-tier plans with mostly idle seats, and meeting transcription or generation tools forgotten after the first month. The output is a clear keep, right-size, consolidate, or cancel decision for each subscription.",
              ],
              [
                "Why do small businesses accumulate too many AI subscriptions?",
                "Three patterns drive most accumulation: team-tier plans purchased at full seat count expecting firm-wide adoption that concentrates in one or two power users; software shopping overwhelm where new AI tools are added to solve problems the existing stack could already handle; and individual accounts (Canva Pro, Notion AI, Midjourney) billing separately per team member instead of under a consolidated team plan. The result is typically five tools doing jobs that two would cover — a general-purpose AI, an image tool, and a meeting transcript (likely already included in your video platform for free).",
              ],
              [
                "How do I audit AI subscriptions without a finance team?",
                "Export 3 to 6 months of billing data from your business card or accounting software. Filter for AI-related charges. For each subscription, run the owner-use check: name the current team member who uses it at least twice a week. If you cannot, it is a right-size or cancellation candidate. Then check for category overlap — two general-purpose AIs, two image tools, two meeting transcription platforms. Rank by annual cost and act on cancellations first. Most owner-led business stacks can be reviewed in under 30 minutes.",
              ],
              [
                "What are the most common AI subscription waste patterns?",
                "The five most common findings are: ChatGPT Teams or Claude Pro at full team tier with two or three active users; meeting transcription tools (Otter.ai, Fireflies) forgotten after Zoom or Teams transcript replaced them; Canva Pro on individual plans per team member instead of one team account; Notion AI at full tier where only one or two writers use the AI layer; and Midjourney retained after image generation moved to Canva or ChatGPT. In most businesses, these five patterns represent $3,000 to $8,000 in recoverable annual AI subscription spend.",
              ],
              [
                "When should a small business audit its AI subscriptions?",
                "The best trigger is 60 to 90 days before your largest annual AI contract renews — ChatGPT Teams and Claude Pro annual plans often carry the highest per-seat cost, and the renewal is your renegotiation window. A second trigger is any time a new AI tool is being considered: run the owner-use check on existing AI tools before adding another subscription. Software shopping overwhelm is itself a signal that the existing stack needs a review, not an expansion.",
              ],
              [
                "What does StackSmart produce from an AI subscription audit?",
                "StackSmart produces a categorised AI-spend snapshot: every AI subscription grouped by function (general-purpose AI, image generation, meeting transcription, writing assistance, research tools), flagged findings (idle seat counts, duplicate tools, individual-plan duplicates, upcoming renewals), and a prioritised keep, right-size, consolidate, and cancel list ranked by annual dollar impact. The report is designed for the business owner to review in under an hour and share with an admin or office manager to execute.",
              ],
              [
                "What is workspace-owner confusion in AI subscriptions?",
                "Workspace-owner confusion occurs when the person who set up an AI team subscription — ChatGPT Teams, Claude Pro, Notion AI — has left or changed roles, leaving no current team member with admin access or accountability for the renewal decision. The subscription keeps billing, seats from departed users are never removed, and annual renewals auto-process without anyone reviewing the seat count. The fix: for each AI team subscription, confirm who the current workspace admin is, verify they are still at the business, and confirm billing notifications go to an active business email. If no current team member has admin access, recovering it is the first step before any seat review or renewal decision.",
              ],
              [
                "Should contractors have AI subscription seats?",
                "Contractors are frequently given the same AI tool access as full-time staff — a seat on ChatGPT Teams, Claude Pro, or Notion AI — for the duration of a project. When the project ends and the contractor offboards, the seat typically stays active unless someone with workspace admin access removes it. On an annual plan at $25–$30 per seat per month, a single dormant contractor seat costs $300–$360 per year. Most owner-led businesses with regular contractor use have two to four of these active at any point. The check: compare active users on each AI workspace against the current team roster. Anyone not on the current list is a removal candidate.",
              ],
              [
                "What are converted AI trials and how do you find them?",
                "A converted AI trial is a subscription that moved from a free trial to a paid plan, often without a deliberate adoption decision. A team member evaluates a tool, the trial ends, and it converts automatically. If the evaluation was inconclusive or the team member has since left, the subscription bills monthly without active use. In a billing review, converted AI trials appear as charges that first showed up in the last 12 months without a preceding annual commitment. For each one: was this an intentional adoption decision, and does a current team member use it at least twice a week? If not, cancel before the next renewal.",
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
            location="ai_subscription_audit"
            heading="See what an AI subscription audit report looks like"
            body="Email yourself the sample report to see how StackSmart groups AI tools, flags idle seats, and surfaces the overlap before it renews."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Right-size the AI stack before the next renewal hits</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart surfaces from billing data, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "ai_subscription_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "ai_subscription_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for owner-led SMBs"
        description="These pages cover the broader software audit process, vertical-specific guides, and the tools most commonly found in owner-led SMB billing exports."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste — including the 30-minute card-statement pass and owner-use accountability workflow.",
          },
          {
            href: "/marketing-agency-software-stack-audit",
            title: "Marketing agency software stack audit",
            description: "SEO tools, AI subscriptions, social scheduling, design platforms, and reporting stack audit for owner-led marketing and creative agencies.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, payroll, document, e-sign, and AI subscription stack audit for small accounting and bookkeeping firms.",
          },
          {
            href: "/xero-app-stack-audit",
            title: "Xero app stack audit",
            description: "Audit your Xero add-ons and connected apps for duplicate payroll, receipt capture, reporting, and practice management tools.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Work through a structured 8-step checklist — including AI subscription owner-use pass — before turning billing data into a savings report.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into structured savings actions — including AI subscription seat right-sizing.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
