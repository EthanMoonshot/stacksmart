import { NextRequest, NextResponse } from "next/server";
import { sendProductEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body?.type as "welcome" | "report-ready" | undefined;
    const email = body?.email as string | undefined;

    if (!type || !email) {
      return NextResponse.json({ message: "type and email are required." }, { status: 400 });
    }

    if (type === "welcome") {
      const result = await sendProductEmail({
        to: email,
        subject: "Welcome to StackSmart",
        heading: "Welcome to StackSmart",
        body: "You’re in. Upload your billing data, run your first analysis, and we’ll surface where your SaaS stack is leaking money.",
        ctaLabel: "Start onboarding",
        ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/welcome`,
      });

      return NextResponse.json({ sent: true, result });
    }

    const result = await sendProductEmail({
      to: email,
      subject: "Your StackSmart report is ready",
      heading: "Your savings report is ready",
      body: "Your latest StackSmart analysis has finished processing. Open your dashboard to review overlaps, savings recommendations, and your downloadable report.",
      ctaLabel: "View report",
      ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/report`,
    });

    return NextResponse.json({ sent: true, result });
  } catch (error) {
    console.error("[Email API]", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}
