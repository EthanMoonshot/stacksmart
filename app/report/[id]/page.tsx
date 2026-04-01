import type { Metadata } from "next";
import AppHeader from "@/components/dashboard/AppHeader";
import ReportView from "@/components/report/ReportView";
import { buildReportViewModel, readSharedReport } from "@/lib/report";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Shared Savings Report",
  description: "Open a shared StackSmart savings report snapshot.",
  path: "/report",
});

export default async function SharedReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const snapshot = await readSharedReport(id);

  if (!snapshot) {
    notFound();
  }

  const model = buildReportViewModel(snapshot.analysis);

  return (
    <div>
      <AppHeader
        title="Shared Savings Report"
        subtitle={`Shared ${new Date(snapshot.createdAt).toLocaleString()} · Snapshot of ${snapshot.analysis.toolCount} tools`}
        action={
          <Link href="/report" className="btn-secondary text-sm py-2 px-4">
            Open live report
          </Link>
        }
      />

      <ReportView model={model} shared />
    </div>
  );
}
