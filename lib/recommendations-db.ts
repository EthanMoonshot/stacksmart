export interface ToolAlternative {
  name: string;
  monthlyCost: number;
  savingsEstimate: number;
  whyBetterForSmbs: string;
  migrationNotes: string;
}

export interface ToolInfo {
  name: string;
  category: string;
  typicalMonthlyCost: number;
  aliases?: string[];
  overlapsWith: string[];
  alternatives?: ToolAlternative[];
}

export interface AlternativeBundle {
  name: string;
  category: string;
  monthlyCost: number;
  consolidates: string[];
  note: string;
}

export interface FallbackAlternativeSuggestion {
  action: string;
  description: string;
}

const normalizeKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const estimateSavings = (currentCost: number, alternativeCost: number) =>
  Math.max(0, Math.round((currentCost - alternativeCost) * 100) / 100);

const createAlternative = (
  currentCost: number,
  name: string,
  monthlyCost: number,
  whyBetterForSmbs: string,
  migrationNotes: string
): ToolAlternative => ({
  name,
  monthlyCost,
  savingsEstimate: estimateSavings(currentCost, monthlyCost),
  whyBetterForSmbs,
  migrationNotes,
});

const tools: ToolInfo[] = [
  {
    name: "Slack",
    category: "Communication",
    typicalMonthlyCost: 8.75,
    overlapsWith: ["Microsoft Teams", "Google Chat", "Discord"],
    alternatives: [
      createAlternative(8.75, "Microsoft Teams", 6, "Often already included in Microsoft 365, reducing extra vendor spend.", "Best if your team already lives in Outlook, Office, and OneDrive."),
      createAlternative(8.75, "Google Chat", 0, "Simple internal chat for SMBs already on Google Workspace.", "Low-friction if you can standardise on Google Workspace for docs and meetings."),
      createAlternative(8.75, "Discord", 0, "Very low-cost for startup teams that mainly need channels, voice, and community-style collaboration.", "Works best for informal workflows; check compliance needs first."),
    ],
  },
  {
    name: "Microsoft Teams",
    category: "Communication",
    typicalMonthlyCost: 6,
    overlapsWith: ["Slack", "Zoom", "Google Chat", "Discord", "Google Meet"],
    alternatives: [
      createAlternative(6, "Slack (free tier)", 0, "Fast onboarding, broad integration ecosystem, and enough chat capability for many smaller teams.", "Best for teams willing to accept limited message history on the free tier."),
      createAlternative(6, "Discord", 0, "Free channels, voice, and async collaboration work well for lean teams with lighter governance needs.", "Useful for startups and product teams, less ideal for heavily regulated environments."),
      createAlternative(6, "Google Chat", 0, "Included with Google Workspace and easier to manage for companies already using Gmail and Docs.", "Strong fit if you want one vendor for chat, docs, and meetings."),
    ],
  },
  {
    name: "Zoom",
    category: "Communication",
    typicalMonthlyCost: 13.33,
    overlapsWith: ["Microsoft Teams", "Google Meet", "whereby.com"],
    alternatives: [
      createAlternative(13.33, "Google Meet", 0, "Included in Google Workspace for many SMBs and good enough for standard team/customer calls.", "Straightforward if calendars and email already run on Google."),
      createAlternative(13.33, "whereby.com", 8.99, "Lighter-weight video meetings with simple browser-based joins and less admin overhead.", "Good for smaller teams focused on quick client calls rather than webinar features."),
    ],
  },
  {
    name: "Google Meet",
    category: "Communication",
    typicalMonthlyCost: 0,
    overlapsWith: ["Zoom", "Microsoft Teams"],
  },
  {
    name: "Google Chat",
    category: "Communication",
    typicalMonthlyCost: 0,
    overlapsWith: ["Slack", "Microsoft Teams", "Discord"],
  },
  {
    name: "Discord",
    category: "Communication",
    typicalMonthlyCost: 0,
    overlapsWith: ["Slack", "Microsoft Teams", "Google Chat"],
  },
  {
    name: "whereby.com",
    category: "Communication",
    typicalMonthlyCost: 8.99,
    overlapsWith: ["Zoom", "Google Meet", "Microsoft Teams"],
    aliases: ["Whereby"],
  },
  {
    name: "Jira",
    category: "Project Management",
    typicalMonthlyCost: 7.75,
    overlapsWith: ["Asana", "ClickUp", "Linear", "Monday.com", "Trello"],
    alternatives: [
      createAlternative(7.75, "Linear", 8, "Cleaner workflow and less admin overhead for product-led SMB teams.", "Best if your team wants speed and simplicity over heavy customization."),
      createAlternative(7.75, "ClickUp", 7, "Broad feature coverage at lower cost with docs, tasks, and dashboards in one place.", "Helpful when you want to consolidate project tooling into one platform."),
      createAlternative(7.75, "Asana", 10.99, "Easier for non-technical teams that need less process overhead than Jira.", "Useful when adoption matters more than engineering-specific workflows."),
    ],
  },
  {
    name: "Asana",
    category: "Project Management",
    typicalMonthlyCost: 10.99,
    overlapsWith: ["Jira", "ClickUp", "Linear", "Monday.com", "Trello"],
    alternatives: [
      createAlternative(10.99, "ClickUp", 7, "Can replace task and project tracking at a lower price.", "Strong fit if you want docs, whiteboards, and tasks together."),
      createAlternative(10.99, "Linear", 8, "Faster and more focused for product and engineering teams.", "Migration is simplest if most work is issue and sprint based."),
    ],
  },
  {
    name: "ClickUp",
    category: "Project Management",
    typicalMonthlyCost: 7,
    overlapsWith: ["Jira", "Asana", "Monday.com", "Trello", "Linear"],
  },
  {
    name: "Linear",
    category: "Project Management",
    typicalMonthlyCost: 8,
    overlapsWith: ["Jira", "Asana", "ClickUp"],
  },
  {
    name: "Monday.com",
    category: "Project Management",
    typicalMonthlyCost: 10,
    overlapsWith: ["Jira", "Asana", "ClickUp", "Trello"],
    alternatives: [
      createAlternative(10, "ClickUp", 7, "Broad project management coverage at a lower per-seat cost.", "Best when you want dashboards, docs, and tasks in one platform."),
      createAlternative(10, "Trello", 5, "Simpler kanban workflows can materially cut cost for teams with lightweight planning needs.", "Ideal if your team mainly uses boards, checklists, and due dates."),
    ],
  },
  {
    name: "Trello",
    category: "Project Management",
    typicalMonthlyCost: 5,
    overlapsWith: ["Jira", "Asana", "ClickUp", "Monday.com", "Notion"],
    alternatives: [
      createAlternative(5, "Notion", 0, "Can absorb lightweight task tracking inside a docs-first workspace.", "Useful when Trello is mostly used for simple internal planning and docs already matter more."),
    ],
  },
  {
    name: "Notion",
    category: "Documentation",
    typicalMonthlyCost: 8,
    overlapsWith: ["Confluence", "Coda", "Google Docs", "GitBook", "Trello", "Asana"],
    alternatives: [
      createAlternative(8, "Google Docs", 0, "Good fit if the team only needs lightweight docs and collaboration.", "Best when structured wikis and databases are not essential."),
      createAlternative(8, "Trello", 5, "Can be overkill if it is mostly being used for simple project boards instead of deep wiki workflows.", "Only makes sense if docs and databases are barely used."),
    ],
  },
  {
    name: "Confluence",
    category: "Documentation",
    typicalMonthlyCost: 5.75,
    aliases: ["confluence", "Atlassian Confluence"],
    overlapsWith: ["Notion", "Google Docs", "Coda", "GitBook"],
    alternatives: [
      createAlternative(5.75, "GitBook", 4.5, "Cleaner publishing and knowledge-base UX for teams focused on structured documentation.", "Strong option for product docs and help centres with less process baggage."),
      createAlternative(5.75, "Notion", 4, "Combines docs, lightweight projects, and internal wiki workflows in one simpler workspace.", "Best if your team wants one flexible workspace rather than Atlassian-style admin."),
    ],
  },
  {
    name: "Coda",
    category: "Documentation",
    typicalMonthlyCost: 10,
    overlapsWith: ["Notion", "Confluence", "Google Docs"],
  },
  {
    name: "GitBook",
    category: "Documentation",
    typicalMonthlyCost: 6.7,
    overlapsWith: ["Confluence", "Notion"],
  },
  {
    name: "Google Docs",
    category: "Documentation",
    typicalMonthlyCost: 0,
    overlapsWith: ["Notion", "Confluence", "Coda"],
  },
  {
    name: "Figma",
    category: "Design",
    typicalMonthlyCost: 15,
    overlapsWith: ["Sketch", "Adobe XD", "Adobe Creative Cloud", "Canva Pro", "Miro", "Loom"],
    alternatives: [
      createAlternative(15, "Canva Pro", 14.99, "Lower-cost design workflow for marketing-heavy teams that do not need advanced product design depth.", "Best for lightweight brand, social, and presentation asset creation."),
      createAlternative(15, "Miro", 8, "If Figma is mostly used for whiteboards and workshops, Miro can cover collaboration at lower cost.", "Only switch if design system and prototyping depth are not core needs."),
    ],
  },
  {
    name: "Sketch",
    category: "Design",
    typicalMonthlyCost: 10,
    overlapsWith: ["Figma", "Adobe XD"],
  },
  {
    name: "Adobe XD",
    category: "Design",
    typicalMonthlyCost: 9.99,
    overlapsWith: ["Figma", "Sketch", "Adobe Creative Cloud"],
  },
  {
    name: "Adobe Creative Cloud",
    category: "Design",
    typicalMonthlyCost: 89.99,
    overlapsWith: ["Figma", "Canva Pro", "Adobe XD"],
    aliases: ["Adobe CC"],
    alternatives: [
      createAlternative(89.99, "Figma", 15, "Excellent for collaborative design with far less seat cost and lower admin overhead.", "Best if most of your work is UI, brand assets, and collaborative review rather than full Adobe suite depth."),
      createAlternative(89.99, "Canva Pro", 14.99, "Much easier for SMB teams creating marketing assets without specialist designers.", "Great for marketing-heavy teams that value speed over advanced creative tooling."),
    ],
  },
  {
    name: "Canva Pro",
    category: "Design",
    typicalMonthlyCost: 14.99,
    overlapsWith: ["Adobe Creative Cloud", "Figma"],
  },
  {
    name: "GitHub",
    category: "Development",
    typicalMonthlyCost: 4,
    overlapsWith: ["GitLab", "Bitbucket"],
    alternatives: [
      createAlternative(4, "Bitbucket", 3, "Lower cost for teams that only need basic repo hosting and CI.", "Works well if you are already committed to the Atlassian ecosystem."),
    ],
  },
  { name: "GitLab", category: "Development", typicalMonthlyCost: 29, overlapsWith: ["GitHub", "Bitbucket"], alternatives: [createAlternative(29, "GitHub", 4, "Much cheaper for standard source control workflows.", "Best if you do not need GitLab's heavier enterprise feature set.")] },
  { name: "Bitbucket", category: "Development", typicalMonthlyCost: 3, overlapsWith: ["GitHub", "GitLab"] },
  { name: "Vercel", category: "Development", typicalMonthlyCost: 20, overlapsWith: ["Netlify"] },
  { name: "Netlify", category: "Development", typicalMonthlyCost: 19, overlapsWith: ["Vercel"] },
  {
    name: "HubSpot",
    category: "Marketing",
    typicalMonthlyCost: 45,
    overlapsWith: ["Mailchimp", "ActiveCampaign", "Pipedrive", "Salesforce"],
    alternatives: [createAlternative(45, "HubSpot CRM (free)", 0, "Useful if advanced automation features are not being used.", "Good downgrade path when you mainly need pipeline visibility and basic contact management.")],
  },
  {
    name: "HubSpot CRM",
    category: "Sales",
    typicalMonthlyCost: 45,
    overlapsWith: ["Salesforce", "Pipedrive"],
    alternatives: [createAlternative(45, "HubSpot CRM (free)", 0, "Useful if advanced paid HubSpot features are not being used.", "Straightforward if you only need core CRM capability.")],
  },
  { name: "Mailchimp", category: "Marketing", typicalMonthlyCost: 13, overlapsWith: ["HubSpot", "ActiveCampaign", "SendGrid"], alternatives: [createAlternative(13, "HubSpot CRM (free)", 0, "Worth considering if email volume and segmentation needs are modest.", "Best when email is simple and CRM unification matters more than advanced automations."), createAlternative(13, "MailerLite", 10, "Lower-cost email marketing for SMBs with straightforward newsletters and automations.", "Good if you can live with a lighter feature set to cut spend.")] },
  { name: "ActiveCampaign", category: "Marketing", typicalMonthlyCost: 29, overlapsWith: ["HubSpot", "Mailchimp"], alternatives: [createAlternative(29, "Mailchimp", 13, "Cheaper option when advanced automation is underused.", "Best if your lifecycle campaigns are relatively simple."), createAlternative(29, "MailerLite", 10, "Materially lower cost for newsletter-first SMB marketing teams.", "Useful when CRM depth and advanced automations are not core requirements.")] },
  {
    name: "Pipedrive",
    category: "Sales",
    typicalMonthlyCost: 14.9,
    overlapsWith: ["HubSpot CRM", "Salesforce"],
  },
  {
    name: "Salesforce",
    category: "Sales",
    typicalMonthlyCost: 25,
    overlapsWith: ["HubSpot CRM", "Pipedrive"],
    alternatives: [
      createAlternative(25, "HubSpot CRM (free)", 0, "Far simpler to administer for SMBs and removes per-seat CRM cost in many cases.", "Best for lean sales teams that do not need Salesforce-grade customization."),
      createAlternative(25, "Pipedrive", 14.9, "Pipeline-first CRM with faster adoption and less admin burden for smaller sales teams.", "Useful when you want structured sales workflows without Salesforce complexity."),
    ],
  },
  {
    name: "Intercom",
    category: "Customer Support",
    typicalMonthlyCost: 74,
    overlapsWith: ["Zendesk", "Freshdesk", "HelpScout", "Crisp"],
    alternatives: [
      createAlternative(74, "Freshdesk", 15, "Large potential savings if live chat automation is limited.", "Best when ticketing is the core need and advanced automation is not heavily used."),
      createAlternative(74, "HelpScout", 55, "Customer-friendly shared inbox support with lower admin complexity.", "A good fit for SMB support teams prioritising email support and simplicity."),
      createAlternative(74, "Crisp", 25, "Shared inbox and chat coverage at a much lower cost for lean support teams.", "Useful when you need chat plus support inbox without Intercom-scale automation complexity."),
    ],
  },
  {
    name: "Zendesk",
    category: "Customer Support",
    typicalMonthlyCost: 55,
    overlapsWith: ["Intercom", "Freshdesk", "HelpScout"],
    alternatives: [
      createAlternative(55, "Intercom", 39, "Can work better for SMBs that want support and customer messaging in one tool.", "Only worth it if proactive chat and lifecycle messaging matter."),
      createAlternative(55, "Freshdesk", 15, "Much lower cost helpdesk with enough functionality for many SMB support teams.", "Strong option when you mainly need ticketing, SLAs, and reporting."),
      createAlternative(55, "HelpScout", 55, "Simpler support UX and lighter administration than enterprise-style helpdesks.", "Good if you value ease of use over heavy workflow customization."),
    ],
  },
  { name: "Freshdesk", category: "Customer Support", typicalMonthlyCost: 15, overlapsWith: ["Intercom", "Zendesk", "HelpScout"] },
  { name: "HelpScout", category: "Customer Support", typicalMonthlyCost: 55, overlapsWith: ["Zendesk", "Intercom", "Freshdesk"], aliases: ["Help Scout"] },
  { name: "Datadog", category: "Analytics", typicalMonthlyCost: 15, overlapsWith: ["New Relic", "Grafana"], alternatives: [createAlternative(15, "Grafana", 0, "Can materially cut cost if hosted observability is not required.", "Best for teams comfortable with a leaner observability stack.")] },
  { name: "New Relic", category: "Analytics", typicalMonthlyCost: 0, overlapsWith: ["Datadog", "Grafana"] },
  { name: "Grafana", category: "Analytics", typicalMonthlyCost: 0, overlapsWith: ["Datadog", "New Relic"] },
  { name: "1Password", category: "Security", typicalMonthlyCost: 7.99, overlapsWith: ["LastPass", "Bitwarden"], alternatives: [createAlternative(7.99, "Bitwarden", 3, "Lower-cost password manager with strong business features.", "Low-friction migration for most SMB password vault setups.")] },
  { name: "LastPass", category: "Security", typicalMonthlyCost: 4, overlapsWith: ["1Password", "Bitwarden"], alternatives: [createAlternative(4, "Bitwarden", 3, "Often the best value replacement.", "Useful if cost reduction matters more than sticking with incumbent tooling.")] },
  { name: "Bitwarden", category: "Security", typicalMonthlyCost: 3, overlapsWith: ["1Password", "LastPass"] },
  { name: "AWS", category: "Cloud Infrastructure", typicalMonthlyCost: 0, overlapsWith: ["Google Cloud", "Azure"], alternatives: [createAlternative(120, "DigitalOcean", 48, "Simpler infrastructure and more predictable pricing for many SMB workloads.", "Best when managed databases, app hosting, and small virtual machines cover the majority of needs."), createAlternative(120, "Render", 65, "Can reduce DevOps overhead by moving toward managed app and worker hosting.", "Useful for startups standardising on a simpler PaaS-style deployment model.")] },
  { name: "Google Cloud", category: "Cloud Infrastructure", typicalMonthlyCost: 0, overlapsWith: ["AWS", "Azure"], alternatives: [createAlternative(120, "DigitalOcean", 48, "Predictable lower-cost infrastructure for common SMB workloads.", "Best when the team does not need the breadth of Google Cloud managed services."), createAlternative(120, "Render", 65, "Managed hosting can trim both infra cost and operational overhead.", "Useful when app hosting simplicity matters more than deep cloud flexibility.")] },
  { name: "Azure", category: "Cloud Infrastructure", typicalMonthlyCost: 0, overlapsWith: ["AWS", "Google Cloud"] },
  {
    name: "QuickBooks",
    category: "Finance",
    typicalMonthlyCost: 30,
    aliases: ["Quickbooks"],
    overlapsWith: ["Xero", "FreshBooks", "Wave"],
    alternatives: [
      createAlternative(30, "Xero", 15, "Popular SMB accounting platform with strong bookkeeping and advisor ecosystem support.", "Best for growing businesses that still want robust accounting workflows."),
      createAlternative(30, "Wave (free)", 0, "Zero software cost for very small businesses with simple accounting needs.", "Good for early-stage SMBs before finance complexity increases."),
    ],
  },
  { name: "Xero", category: "Finance", typicalMonthlyCost: 15, overlapsWith: ["QuickBooks", "FreshBooks", "Wave"] },
  { name: "Wave", category: "Finance", typicalMonthlyCost: 0, overlapsWith: ["QuickBooks", "Xero", "FreshBooks"], aliases: ["Wave (free)"] },
  { name: "FreshBooks", category: "Finance", typicalMonthlyCost: 17, overlapsWith: ["QuickBooks", "Xero"] },
  { name: "BambooHR", category: "HR", typicalMonthlyCost: 8, overlapsWith: ["Gusto", "Rippling"] },
  { name: "Gusto", category: "HR", typicalMonthlyCost: 6, overlapsWith: ["BambooHR", "Rippling"] },
  { name: "Rippling", category: "HR", typicalMonthlyCost: 8, overlapsWith: ["BambooHR", "Gusto"] },
  {
    name: "Microsoft 365",
    category: "Communication",
    typicalMonthlyCost: 12.5,
    overlapsWith: ["Slack", "Zoom", "Google Workspace", "Notion", "Dropbox", "OneDrive", "Google Drive", "Microsoft Teams"],
    alternatives: [
      createAlternative(12.5, "Google Workspace", 7.2, "Lower-cost suite for many SMBs with email, docs, storage, chat, and meetings in one place.", "Best if your team is comfortable moving from Office-first workflows to Google-native collaboration."),
    ],
  },
  {
    name: "Google Workspace",
    category: "Communication",
    typicalMonthlyCost: 7.2,
    overlapsWith: ["Microsoft 365", "Slack", "Zoom", "Google Docs", "Google Drive", "Google Meet", "Google Chat"],
  },
  {
    name: "Dropbox",
    category: "Communication",
    typicalMonthlyCost: 18,
    overlapsWith: ["Google Drive", "OneDrive", "Microsoft 365", "Google Workspace"],
    alternatives: [
      createAlternative(18, "Google Drive", 0, "Included in many Google Workspace setups and reduces duplicate file-storage spend.", "Best when the org already collaborates in Docs, Sheets, and Meet."),
      createAlternative(18, "OneDrive", 0, "Often bundled with Microsoft 365 and easier to govern for Office-centric teams.", "Strong option if you already pay for Microsoft 365 licenses."),
    ],
  },
  { name: "Google Drive", category: "Communication", typicalMonthlyCost: 0, overlapsWith: ["Dropbox", "OneDrive", "Google Workspace"] },
  { name: "OneDrive", category: "Communication", typicalMonthlyCost: 0, overlapsWith: ["Dropbox", "Google Drive", "Microsoft 365"] },
  {
    name: "DocuSign",
    category: "Sales",
    typicalMonthlyCost: 25,
    overlapsWith: ["PandaDoc", "HelloSign"],
    alternatives: [
      createAlternative(25, "PandaDoc", 19, "Combines e-signature with proposals and quote workflows for SMB revenue teams.", "Useful if sales docs and signatures should live in one process."),
      createAlternative(25, "HelloSign", 15, "Lower-cost e-signature for SMBs that just need simple agreements signed quickly.", "Best for straightforward contract workflows without enterprise complexity."),
    ],
  },
  { name: "PandaDoc", category: "Sales", typicalMonthlyCost: 19, overlapsWith: ["DocuSign", "HelloSign"] },
  { name: "HelloSign", category: "Sales", typicalMonthlyCost: 15, overlapsWith: ["DocuSign", "PandaDoc"], aliases: ["Dropbox Sign"] },
  { name: "Calendly", category: "Sales", typicalMonthlyCost: 12, overlapsWith: ["HubSpot", "Google Workspace", "Microsoft 365"], alternatives: [createAlternative(12, "Cal.com", 0, "Open scheduling option that can materially cut cost for simple booking workflows.", "Best when you mainly need booking links, routing, and calendar sync."), createAlternative(12, "HubSpot CRM (free)", 0, "Can absorb simple meeting scheduling inside an existing CRM.", "Useful when sales already runs inside HubSpot and dedicated scheduling is overkill.")] },
  { name: "Typeform", category: "Marketing", typicalMonthlyCost: 29, overlapsWith: ["Google Forms", "Jotform", "HubSpot"], alternatives: [createAlternative(29, "Google Forms", 0, "Very low-cost path for straightforward lead capture and internal forms.", "Best when branded conversational forms are not essential."), createAlternative(29, "Jotform", 19, "Cheaper flexible forms and workflows for SMBs.", "Good fit when you still need richer logic and integrations than Google Forms offers.")] },
  { name: "Loom", category: "Communication", typicalMonthlyCost: 12.5, overlapsWith: ["Zoom", "Vimeo", "Microsoft Teams"], alternatives: [createAlternative(12.5, "Zoom Clips", 0, "Async video can often be handled inside an existing meetings stack.", "Best if your team already pays for Zoom and just needs lightweight screen recordings."), createAlternative(12.5, "Vimeo", 9, "Can cover simple async video sharing with lower incremental cost.", "Useful when video hosting matters more than Loom-specific workflow features.")] },
  { name: "Miro", category: "Design", typicalMonthlyCost: 8, overlapsWith: ["FigJam", "Figma", "Notion"], alternatives: [createAlternative(8, "FigJam", 5, "Lower-cost workshop and whiteboard option for teams already in the Figma ecosystem.", "Best when collaborative ideation matters more than Miro's broader facilitation tooling."), createAlternative(8, "Notion", 0, "If whiteboarding usage is light, docs plus simple planning may be enough.", "Useful when Miro is mainly storing lightweight brainstorms rather than active workshops.")] },
  {
    name: "Expensify",
    category: "Finance",
    typicalMonthlyCost: 18,
    overlapsWith: ["Ramp", "Brex"],
    alternatives: [
      createAlternative(18, "Ramp", 0, "Expense management is bundled with corporate card workflows, often removing standalone spend.", "Best if the company is open to card-led spend controls."),
      createAlternative(18, "Brex", 0, "Can combine cards, reimbursements, and controls into one platform for SMB finance teams.", "Useful for fast-growing startups that want finance ops in one system."),
    ],
  },
  { name: "Ramp", category: "Finance", typicalMonthlyCost: 0, overlapsWith: ["Expensify", "Brex"] },
  { name: "Brex", category: "Finance", typicalMonthlyCost: 0, overlapsWith: ["Expensify", "Ramp"] },
  { name: "Stripe", category: "Finance", typicalMonthlyCost: 49, overlapsWith: ["Braintree", "PayPal", "Square"], alternatives: [createAlternative(49, "Square", 29, "Can reduce software overhead for SMBs with simpler payment and invoicing needs.", "Best if you do not rely heavily on Stripe's developer-first billing and custom integrations."), createAlternative(49, "PayPal", 35, "Useful if the business mainly needs straightforward online payments and invoicing.", "Best when checkout simplicity matters more than advanced subscription tooling.")] },
  { name: "Twilio", category: "Communication", typicalMonthlyCost: 35, overlapsWith: ["MessageBird", "Vonage", "Intercom"], alternatives: [createAlternative(35, "Vonage", 25, "Can cut messaging cost for SMB communication workflows.", "Best when you mainly need SMS/voice APIs without Twilio's broader platform footprint."), createAlternative(35, "MessageBird", 22, "Lower-cost omnichannel messaging for simpler notification and support workflows.", "Useful when core SMS and chat coverage matter more than developer ecosystem depth.")] },
];

const toolMap = new Map<string, ToolInfo>();

for (const tool of tools) {
  toolMap.set(normalizeKey(tool.name), tool);
  for (const alias of tool.aliases || []) {
    toolMap.set(normalizeKey(alias), tool);
  }
}

export const alternativeBundles: AlternativeBundle[] = [
  { name: "Microsoft 365", category: "Communication", monthlyCost: 12.5, consolidates: ["Slack", "Zoom", "Microsoft Teams", "Dropbox"], note: "Can consolidate chat, meetings, and file collaboration into one bundled suite." },
  { name: "Google Workspace", category: "Communication", monthlyCost: 7.2, consolidates: ["Slack", "Zoom", "Google Meet", "Notion", "Google Docs", "Dropbox"], note: "Useful for teams that can standardise on Meet, Drive, Chat, and Docs." },
  { name: "ClickUp", category: "Project Management", monthlyCost: 7, consolidates: ["Jira", "Asana", "Trello", "Monday.com"], note: "Single PM platform that can replace multiple workflow tools." },
  { name: "Notion", category: "Documentation", monthlyCost: 8, consolidates: ["Confluence", "Trello", "Google Docs"], note: "Can combine docs, knowledge base, and lightweight project tracking." },
  { name: "HubSpot CRM (free)", category: "Sales", monthlyCost: 0, consolidates: ["Mailchimp", "Pipedrive", "HubSpot", "Salesforce"], note: "May cover basic CRM and outbound needs for smaller teams." },
  { name: "Freshdesk", category: "Customer Support", monthlyCost: 15, consolidates: ["Intercom", "Zendesk", "HelpScout"], note: "Cheaper shared helpdesk option if advanced support automation is not essential." },
  { name: "Bitwarden", category: "Security", monthlyCost: 3, consolidates: ["1Password", "LastPass"], note: "Low-cost password management consolidation option." },
];

export function lookupTool(name: string): ToolInfo | undefined {
  return toolMap.get(normalizeKey(name));
}

export function normalizeToolName(name: string): string {
  return normalizeKey(name);
}

export function getBestAlternative(name: string) {
  const tool = lookupTool(name);
  if (!tool?.alternatives?.length) return undefined;

  return [...tool.alternatives].sort((a, b) => {
    if (b.savingsEstimate !== a.savingsEstimate) return b.savingsEstimate - a.savingsEstimate;
    return a.monthlyCost - b.monthlyCost;
  })[0];
}

export function getFallbackSuggestion(toolName: string, category?: string, budgetCeiling?: number): FallbackAlternativeSuggestion {
  const effectiveCategory = category || lookupTool(toolName)?.category || "software";
  const budgetText = typeof budgetCeiling === "number" && budgetCeiling > 0 ? ` under $${budgetCeiling.toFixed(2)}/month` : "";

  return {
    action: `Search for ${effectiveCategory} alternatives`,
    description: `Search G2 or Capterra for ${effectiveCategory.toLowerCase()} alternatives to ${toolName}${budgetText}. Prioritise products with simpler SMB pricing, low migration effort, and fewer overlapping features.`,
  };
}
