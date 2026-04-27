import { NextRequest, NextResponse } from "next/server";
import { sendProductEmail } from "@/lib/email";
import { captureInboundLead } from "@/lib/flarexGtm";

// TODO: Add durable rate limiting before launch (e.g. Upstash Redis / Vercel KV).
const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body?.type as "welcome" | "report-ready" | "activation-reminder" | undefined;
    const email = body?.email as string | undefined;
    const location = body?.location as string | undefined;
    const pageUrl = body?.pageUrl as string | undefined;
    const referrer = body?.referrer as string | undefined;

    if (!type || !email) {
      return NextResponse.json({ message: "type and email are required." }, { status: 400, headers: noStoreHeaders });
    }

    if (type === "welcome") {
      const leadCapture = await captureInboundLead({
        email,
        type,
        location,
        pageUrl,
        referrer,
        userAgent: req.headers.get("user-agent"),
      });

      const result = await sendProductEmail({
        to: email,
        subject: "Welcome to StackSmart",
        heading: "Welcome to StackSmart",
        body: "You’re in. Start with the sample report if you want to see the output first, or upload your billing data to generate a private savings report from your own stack.",
        ctaLabel: "View sample report",
        ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.app"}/demo`,
      });

      return NextResponse.json({ sent: true, result, leadCapture }, { headers: noStoreHeaders });
    }

    if (type === "activation-reminder") {
      const result = await sendProductEmail({
        to: email,
        subject: "Your StackSmart workspace is ready",
        heading: "Your workspace is ready for the first report",
        body: "Upload a billing CSV or invoice data and StackSmart will turn it into a savings report with clear cut, consolidate, and renegotiate actions.",
        ctaLabel: "Upload billing data",
        ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.app"}/upload`,
      });

      return NextResponse.json({ sent: true, result }, { headers: noStoreHeaders });
    }

    const result = await sendProductEmail({
      to: email,
      subject: "Your StackSmart report is ready",
      heading: "Your savings report is ready",
      body: "Your latest StackSmart analysis has finished processing. Open your dashboard to review overlaps, savings recommendations, and your downloadable report.",
      ctaLabel: "View report",
      ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.app"}/report`,
    });

    return NextResponse.json({ sent: true, result }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[Email API]", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500, headers: noStoreHeaders });
  }
}
