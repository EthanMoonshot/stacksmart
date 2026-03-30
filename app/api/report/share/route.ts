import { NextResponse } from "next/server";
import { readLatestAnalysis } from "@/lib/analyzer";
import { createSharedReport } from "@/lib/report";

export async function POST() {
  try {
    const analysis = await readLatestAnalysis();

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
