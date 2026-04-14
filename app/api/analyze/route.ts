import { NextRequest, NextResponse } from "next/server";
import { analyzeStack, readStacks, writeAnalysis } from "@/lib/analyzer";
import { sendProductEmail } from "@/lib/email";
import { getCurrentSession } from "@/lib/auth";
import { getSubscriptionForCustomer } from "@/lib/subscriptions";

const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

function cleanEnvValue(value?: string) {
  if (!value) return value;
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getCurrentSession();
    const subscription = session ? await getSubscriptionForCustomer(session.customerId) : null;
    if (!session || subscription?.status !== "active") {
      return NextResponse.json({ message: "Paid access required." }, { status: 401, headers: noStoreHeaders });
    }
    const body = await req.json().catch(() => ({}));
    const requestedStackId = body?.stackId as string | undefined;
    const notifyEmail = body?.notifyEmail as string | undefined;
    const stacks = await readStacks(session.customerId);

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
      try {
        await sendProductEmail({
          to: notifyEmail,
          subject: "Your StackSmart report is ready 📊",
          heading: "Here are your savings opportunities.",
          body: hasSavings
            ? `We've finished analysing your stack. ${analysis.recommendations.length} recommendations are ready for review, with up to $${analysis.potentialAnnualSavings.toLocaleString()} in annual savings identified.`
            : `We've finished analysing your stack. ${analysis.recommendations.length} recommendations are ready for review. Open your report to see the full breakdown.`,
          ctaLabel: "View My Report",
          ctaHref: `${cleanEnvValue(process.env.NEXT_PUBLIC_APP_URL) || "https://www.stacksmart.app"}/report`,
        });
      } catch (emailErr) {
        console.error("[Analyze] Report delivery email failed:", emailErr);
      }
    }

    return NextResponse.json({ analysis }, { status: 201, headers: noStoreHeaders });
  } catch (error) {
    console.error("[Analyze] Error", error);
    return NextResponse.json({ message: "Failed to analyze tool stack." }, { status: 500, headers: noStoreHeaders });
  }
}
