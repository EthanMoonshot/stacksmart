import type { Metadata } from "next";
import AppHeader from "@/components/dashboard/AppHeader";
import ReportActions from "@/components/report/ReportActions";
import ReportView from "@/components/report/ReportView";
import { readLatestAnalysis } from "@/lib/analyzer";
import { buildReportViewModel } from "@/lib/report";
import Link from "next/link";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Savings Report",
  description: "Review Distill savings recommendations, export a PDF, and share your report.",
  path: "/report",
});

export default async function ReportPage({
  searchParams,
}: {
  searchParams?: Promise<{ shareId?: string }>;
}) {
  const analysis = await readLatestAnalysis();
  const params = (await searchParams) || {};

  if (!analysis) {
    return (
      <div>
        <AppHeader title="Savings Report" subtitle="No saved analysis yet" />
        <div className="card text-center py-16 border-dashed border-dark-700">
          <h2 className="text-xl font-bold text-white mb-2">No report available yet</h2>
          <p className="text-dark-400 text-sm max-w-md mx-auto mb-6">
            Run an analysis first, then Distill will generate a savings report from your uploaded billing data.
          </p>
          <Link href="/upload" className="btn-primary">
            Upload Billing Data
          </Link>
        </div>
      </div>
    );
  }

  const model = buildReportViewModel(analysis);

  return (
    <div>
      <AppHeader
        title="Savings Report"
        subtitle={`Generated ${new Date(analysis.analyzedAt).toLocaleString()} · Based on ${analysis.toolCount} tools and ${model.recommendationCount} recommendations`}
        action={<ReportActions reportTitle="Distill Savings Report" shareId={params.shareId} />}
      />

      <ReportView model={model} />
    </div>
  );
}
