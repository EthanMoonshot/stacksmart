import AppNav from "@/components/dashboard/AppNav";
import { requirePaidUser } from "@/lib/auth";

export default async function ReportLayout({ children }: { children: React.ReactNode }) {
  await requirePaidUser({ next: "/report" });
  return (
    <div className="flex min-h-screen bg-dark-950">
      <AppNav />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
