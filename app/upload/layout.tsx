import type { Metadata } from "next";
import AppNav from "@/components/dashboard/AppNav";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Upload Billing Data",
  description: "Upload your SaaS billing data via CSV, manual entry, or email forwarding to start your stack analysis.",
  path: "/upload",
});

export default function UploadLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-dark-950">
      <AppNav />
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
