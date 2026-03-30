import { NextRequest, NextResponse } from "next/server";
import { analyzeStack, readStacks, writeAnalysis } from "@/lib/analyzer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const requestedStackId = body?.stackId as string | undefined;
    const stacks = await readStacks();

    if (stacks.length === 0) {
      return NextResponse.json({ message: "No saved tools found to analyze." }, { status: 404 });
    }

    const stack = requestedStackId
      ? stacks.find((item) => item.id === requestedStackId)
      : stacks[stacks.length - 1];

    if (!stack) {
      return NextResponse.json({ message: "Requested stack not found." }, { status: 404 });
    }

    const analysis = analyzeStack(stack);
    await writeAnalysis(analysis);

    return NextResponse.json({ analysis }, { status: 201 });
  } catch (error) {
    console.error("[Analyze] Error", error);
    return NextResponse.json({ message: "Failed to analyze tool stack." }, { status: 500 });
  }
}
