import { NextRequest, NextResponse } from "next/server";
import { analyzeStack, readStacks, writeAnalysis } from "@/lib/analyzer";
import { sendProductEmail } from "@/lib/email";

// TODO: Add durable rate limiting before launch (e.g. Upstash Redis / Vercel KV).
const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const requestedStackId = body?.stackId as string | undefined;
    const notifyEmail = body?.notifyEmail as string | undefined;
    const stacks = await readStacks();

    if (stacks.length === 0) {
      return NextResponse.json({ message: "No saved tools found to analyze." }, { status: 404, headers: noStoreHeaders });
    }

    const stack = requestedStackId ? stacks.find((item) => item.id === requestedStackId) : stacks[stacks.length - 1];

    if (!stack) {
      return NextResponse.json({ message: "Requested stack not found." }, { status: 404, headers: noStoreHeaders });
    }

    const analysis = analyzeStack(stack);
    await writeAnalysis(analysis);

    if (notifyEmail) {
      const hasSavings = analysis.potentialAnnualSavings >= 1;
      await sendProductEmail({
        to: notifyEmail,
        subject: hasSavings
          ? "Your StackSmart report is ready"
          : "Your SaaS audit is complete — review your full stack analysis",
        heading: "Your report is ready",
        body: hasSavings
          ? `We’ve finished analysing your stack. ${analysis.recommendations.length} recommendations are ready for review, with up to $${analysis.potentialAnnualSavings.toLocaleString()} in annual savings identified.`
          : `We’ve finished analysing your stack. ${analysis.recommendations.length} recommendations are ready for review. Open your report to see the full breakdown.`,
        ctaLabel: "Open your report",
        ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.app"}/report`,
      });
    }

    return NextResponse.json({ analysis }, { status: 201, headers: noStoreHeaders });
  } catch (error) {
    console.error("[Analyze] Error", error);
    return NextResponse.json({ message: "Failed to analyze tool stack." }, { status: 500, headers: noStoreHeaders });
  }
}
