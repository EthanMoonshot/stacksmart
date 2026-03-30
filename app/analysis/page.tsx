import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";

const detectedTools = [
  { name: "Slack", category: "Communication", cost: 87.50, status: "active", overlap: ["Microsoft Teams"] },
  { name: "Microsoft Teams", category: "Communication", cost: 0, status: "included", overlap: ["Slack"] },
  { name: "Zoom", category: "Video Conferencing", cost: 149.90, status: "redundant", overlap: ["Microsoft Teams"] },
  { name: "Notion", category: "Documentation", cost: 96.00, status: "active", overlap: ["Confluence"] },
  { name: "Confluence", category: "Documentation", cost: 210.00, status: "underused", overlap: ["Notion"] },
  { name: "Jira", category: "Project Management", cost: 190.00, status: "active", overlap: [] },
  { name: "Asana", category: "Project Management", cost: 119.99, status: "underused", overlap: ["Jira"] },
  { name: "HubSpot CRM", category: "CRM", cost: 450.00, status: "active", overlap: [] },
  { name: "Mailchimp", category: "Email Marketing", cost: 99.00, status: "active", overlap: ["HubSpot"] },
  { name: "Loom", category: "Video Recording", cost: 12.50, status: "active", overlap: [] },
  { name: "Figma", category: "Design", cost: 45.00, status: "active", overlap: [] },
  { name: "GitHub", category: "Dev Tools", cost: 84.00, status: "active", overlap: [] },
  { name: "Vercel", category: "Hosting", cost: 20.00, status: "active", overlap: [] },
  { name: "Intercom", category: "Customer Support", cost: 399.00, status: "active", overlap: [] },
];

const categories = [...new Set(detectedTools.map((t) => t.category))];

const statusColors: Record<string, string> = {
  active: "text-green-400 bg-green-500/10 border-green-500/20",
  redundant: "text-red-400 bg-red-500/10 border-red-500/20",
  underused: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  included: "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

const totalMonthly = detectedTools.reduce((sum, t) => sum + t.cost, 0);
const redundantSavings = detectedTools
  .filter((t) => t.status === "redundant" || t.status === "underused")
  .reduce((sum, t) => sum + t.cost, 0);

export default function AnalysisPage() {
  return (
    <div>
      <AppHeader
        title="Analysis Results"
        subtitle="Uploaded: sample-billing-may-2026.csv · Analyzed just now"
        action={
          <Link href="/report" className="btn-primary text-sm py-2 px-4">
            View Full Report →
          </Link>
        }
      />

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Tools Detected", value: detectedTools.length.toString(), color: "text-white" },
          { label: "Monthly Spend", value: `$${totalMonthly.toLocaleString("en", { maximumFractionDigits: 0 })}`, color: "text-white" },
          { label: "Redundant / Underused", value: `${detectedTools.filter(t => t.status === "redundant" || t.status === "underused").length}`, color: "text-red-400" },
          { label: "Potential Savings", value: `$${(redundantSavings * 12).toLocaleString("en", { maximumFractionDigits: 0 })}/yr`, color: "text-green-400" },
        ].map((stat) => (
          <div key={stat.label} className="card">
            <p className="text-dark-500 text-xs font-medium uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Category breakdown */}
      <div className="card mb-6">
        <h3 className="text-white font-semibold mb-4">Spend by Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => {
            const tools = detectedTools.filter((t) => t.category === cat);
            const total = tools.reduce((s, t) => s + t.cost, 0);
            const pct = (total / totalMonthly) * 100;
            return (
              <div key={cat}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-dark-200">{cat}</span>
                  <span className="text-dark-400">${total.toFixed(0)}/mo</span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-brand-500 to-cyan-500 h-2 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools table */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">All Detected Tools</h3>
          <span className="text-dark-500 text-xs">{detectedTools.length} tools</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-800">
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Tool</th>
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Category</th>
                <th className="text-right text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Cost/mo</th>
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3 pl-4">Status</th>
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-900">
              {detectedTools.map((tool) => (
                <tr key={tool.name} className="group hover:bg-dark-900/50">
                  <td className="py-3 text-white font-medium">{tool.name}</td>
                  <td className="py-3 text-dark-400">{tool.category}</td>
                  <td className="py-3 text-right text-dark-200">
                    {tool.cost > 0 ? `$${tool.cost.toFixed(2)}` : "Included"}
                  </td>
                  <td className="py-3 pl-4">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${statusColors[tool.status]}`}>
                      {tool.status}
                    </span>
                  </td>
                  <td className="py-3">
                    {tool.overlap.length > 0 ? (
                      <span className="text-red-400 text-xs">Overlaps: {tool.overlap.join(", ")}</span>
                    ) : (
                      <span className="text-dark-700 text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-brand-900/50 to-dark-900 border border-brand-500/20">
        <div>
          <p className="text-white font-semibold">Ready to see your savings plan?</p>
          <p className="text-dark-400 text-sm mt-0.5">We've identified {detectedTools.filter(t => t.status !== "active").length} optimization opportunities totalling <span className="text-green-400">${(redundantSavings * 12).toLocaleString()}/yr</span></p>
        </div>
        <Link href="/report" className="btn-primary text-sm flex-shrink-0 ml-4">
          View Report →
        </Link>
      </div>
    </div>
  );
}
