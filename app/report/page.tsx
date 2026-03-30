"use client";

import { useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";

const recommendations = [
  {
    id: 1,
    priority: "high",
    action: "Cancel Zoom",
    detail: "Microsoft Teams (included in M365) covers all video conferencing needs. No feature gap.",
    currentTool: "Zoom",
    currentCost: 149.90,
    alternative: "Microsoft Teams (already paying)",
    alternativeCost: 0,
    monthlySavings: 149.90,
    effort: "Low",
    timeToImplement: "1 day",
  },
  {
    id: 2,
    priority: "high",
    action: "Consolidate Notion + Confluence → Notion",
    detail: "Both tools serve the same documentation purpose. Your team uses Notion 3x more. Cancel Confluence.",
    currentTool: "Confluence",
    currentCost: 210.00,
    alternative: "Notion (already paying)",
    alternativeCost: 0,
    monthlySavings: 210.00,
    effort: "Medium",
    timeToImplement: "1-2 weeks",
  },
  {
    id: 3,
    priority: "high",
    action: "Cancel Asana",
    detail: "Jira handles all project management. Asana is used by only 2 people and is underutilized.",
    currentTool: "Asana",
    currentCost: 119.99,
    alternative: "Jira (already paying)",
    alternativeCost: 0,
    monthlySavings: 119.99,
    effort: "Low",
    timeToImplement: "1 day",
  },
  {
    id: 4,
    priority: "medium",
    action: "Replace Mailchimp with HubSpot Email",
    detail: "HubSpot has email marketing built in. You're paying twice for the same capability.",
    currentTool: "Mailchimp",
    currentCost: 99.00,
    alternative: "HubSpot (already paying)",
    alternativeCost: 0,
    monthlySavings: 99.00,
    effort: "Medium",
    timeToImplement: "2-3 weeks",
  },
  {
    id: 5,
    priority: "medium",
    action: "Negotiate Intercom pricing",
    detail: "Your current plan includes features you're not using. Request a review — most customers save 20-30% on renewal.",
    currentTool: "Intercom",
    currentCost: 399.00,
    alternative: "Intercom (renegotiated)",
    alternativeCost: 279.00,
    monthlySavings: 120.00,
    effort: "Low",
    timeToImplement: "1 week",
  },
  {
    id: 6,
    priority: "low",
    action: "Downgrade Slack to Pro",
    detail: "You're on Business+ but using only 40% of advanced features. Pro plan covers your actual usage.",
    currentTool: "Slack Business+",
    currentCost: 87.50,
    alternative: "Slack Pro",
    alternativeCost: 52.50,
    monthlySavings: 35.00,
    effort: "Low",
    timeToImplement: "1 day",
  },
];

const priorityColors: Record<string, string> = {
  high: "text-red-400 bg-red-500/10 border-red-500/20",
  medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  low: "text-green-400 bg-green-500/10 border-green-500/20",
};

const totalMonthlySavings = recommendations.reduce((s, r) => s + r.monthlySavings, 0);

export default function ReportPage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-dark-800 border border-dark-700 text-white px-5 py-3 rounded-lg shadow-xl text-sm flex items-center gap-2 animate-fade-in">
          <svg className="w-4 h-4 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {toast}
        </div>
      )}

      <AppHeader
        title="Savings Report"
        subtitle="Generated: March 30, 2026 · Based on 14 tools, $1,962/mo spend"
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast("Download PDF — coming soon!")}
              className="btn-secondary text-sm py-2 px-4"
            >
              Download PDF
            </button>
            <button
              onClick={() => showToast("Share Report — coming soon!")}
              className="btn-primary text-sm py-2 px-4"
            >
              Share Report
            </button>
          </div>
        }
      />

      {/* Summary banner */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-dark-900" />
        <div className="absolute inset-0 border border-green-500/20 rounded-xl" />
        <div className="relative p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-dark-400 text-sm font-medium mb-1">Total potential savings identified</p>
            <p className="text-4xl font-bold text-white">
              ${(totalMonthlySavings * 12).toLocaleString()}/year
            </p>
            <p className="text-green-400 text-sm mt-1">
              ${totalMonthlySavings.toFixed(0)}/month · {recommendations.length} recommendations
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-dark-300">{recommendations.filter(r => r.priority === "high").length} high priority</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-dark-300">{recommendations.filter(r => r.priority === "medium").length} medium priority</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-dark-300">{recommendations.filter(r => r.priority === "low").length} low priority</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {recommendations.map((rec, idx) => (
          <div key={rec.id} className="card group hover:border-dark-700 transition-all">
            <div className="flex items-start gap-4">
              {/* Number */}
              <div className="w-8 h-8 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 font-bold text-sm flex-shrink-0 mt-0.5">
                {idx + 1}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-semibold">{rec.action}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${priorityColors[rec.priority]}`}>
                      {rec.priority}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-green-400 font-bold text-lg">+${rec.monthlySavings.toFixed(0)}/mo</p>
                    <p className="text-dark-500 text-xs">${(rec.monthlySavings * 12).toLocaleString()}/yr</p>
                  </div>
                </div>

                <p className="text-dark-400 text-sm mb-4">{rec.detail}</p>

                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-dark-600">FROM</span>
                    <span className="text-red-400 line-through">{rec.currentTool} (${rec.currentCost}/mo)</span>
                  </div>
                  <svg className="w-4 h-4 text-dark-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <span className="text-dark-600">TO</span>
                    <span className="text-green-400">{rec.alternative} (${rec.alternativeCost}/mo)</span>
                  </div>
                  <span className="ml-auto text-dark-500">
                    Effort: <span className="text-dark-300">{rec.effort}</span> · Time: <span className="text-dark-300">{rec.timeToImplement}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 p-4 rounded-lg bg-dark-900 border border-dark-800 text-center">
        <p className="text-dark-400 text-sm">
          Need help implementing these changes?{" "}
          <a href="mailto:hello@stacksmart.io" className="text-brand-400 hover:text-brand-300">
            Contact us →
          </a>
        </p>
      </div>

      <div className="mt-4 text-center">
        <Link href="/dashboard" className="text-dark-500 hover:text-dark-300 text-sm underline">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
