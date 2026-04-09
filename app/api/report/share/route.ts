import { NextResponse } from "next/server";
import { readLatestAnalysis } from "@/lib/analyzer";
import { createSharedReport } from "@/lib/report";
import { getCurrentSession } from "@/lib/auth";
import { getSubscriptionForCustomer } from "@/lib/subscriptions";

export async function POST() {
  try {
    const session = await getCurrentSession();
    const subscription = session ? await getSubscriptionForCustomer(session.customerId) : null;
    if (!session || subscription?.status !== "active") {
      return NextResponse.json({ message: "Paid access required." }, { status: 401 });
    }
    const analysis = await readLatestAnalysis(session.customerId);

    if (!analysis) {
      return NextResponse.json({ message: "No report available to share." }, { status: 404 });
    }

    const snapshot = await createSharedReport(analysis);
    return NextResponse.json({ id: snapshot.id, createdAt: snapshot.createdAt }, { status: 201 });
  } catch (error) {
    console.error("[Report Share] Error", error);
    return NextResponse.json({ message: "Failed to create shareable report." }, { status: 500 });
  }
}
