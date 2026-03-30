import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";

export default function DashboardPage() {
  return (
    <div>
      <AppHeader
        title="Dashboard"
        subtitle="Your SaaS stack overview"
        action={
          <Link href="/upload" className="btn-primary text-sm py-2 px-4">
            + New Analysis
          </Link>
        }
      />

      {/* Empty state */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Monthly Spend", value: "—", sub: "No data yet", color: "text-white" },
          { label: "Potential Savings", value: "—", sub: "Upload data to calculate", color: "text-green-400" },
          { label: "Tools Detected", value: "—", sub: "No analyses run", color: "text-white" },
        ].map((stat) => (
          <div key={stat.label} className="card">
            <p className="text-dark-500 text-xs font-medium uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
            <p className="text-dark-600 text-xs">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Empty state main */}
      <div className="card text-center py-20 border-dashed border-dark-700">
        <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">No analyses yet</h2>
        <p className="text-dark-400 text-sm max-w-md mx-auto mb-8">
          Upload your billing data to get started. We'll analyze your SaaS stack and identify savings opportunities in under 60 seconds.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/upload" className="btn-primary">
            Upload Billing Data
          </Link>
          <button className="btn-secondary text-sm">
            See a sample report
          </button>
        </div>
      </div>

      {/* Recent analyses (empty) */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Analyses</h2>
        <div className="card border-dashed border-dark-700 py-8 text-center">
          <p className="text-dark-500 text-sm">Your analyses will appear here once you upload data.</p>
        </div>
      </div>
    </div>
  );
}
