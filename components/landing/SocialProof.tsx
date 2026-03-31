const tools = [
  "Slack",
  "HubSpot", 
  "Notion",
  "Asana",
  "Zoom",
  "Figma",
  "Intercom",
  "Jira",
  "Monday",
  "Salesforce",
  "Zendesk",
  "Dropbox",
];

export default function SocialProof() {
  return (
    <section className="relative py-10 border-y border-dark-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <p className="text-sm text-dark-400 whitespace-nowrap">
            Analyzes <span className="text-white font-medium">200+</span> SaaS tools
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {tools.map((tool) => (
              <span 
                key={tool} 
                className="text-dark-500 text-sm font-medium tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
