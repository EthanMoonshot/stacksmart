import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { sendProductEmail } from "@/lib/email";

// TODO: Add durable rate limiting before launch (e.g. Upstash Redis / Vercel KV).
const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };
const shortCacheHeaders = { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" };

interface WaitlistEntry {
  id: string;
  email: string;
  companyName: string;
  companySize: string;
  createdAt: string;
  source: string;
}

const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json");

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(WAITLIST_FILE), { recursive: true });
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, companySize, companyName } = body;

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400, headers: noStoreHeaders });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address" }, { status: 400, headers: noStoreHeaders });
    }

    const waitlist = await readWaitlist();
    const existing = waitlist.find((entry) => entry.email.toLowerCase() === email.toLowerCase());

    if (existing) {
      return NextResponse.json({ message: "You're already on the waitlist!", alreadyExists: true }, { status: 200, headers: noStoreHeaders });
    }

    const newEntry: WaitlistEntry = {
      id: `wl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: email.toLowerCase().trim(),
      companyName: companyName?.trim() || "",
      companySize,
      createdAt: new Date().toISOString(),
      source: "landing-page",
    };

    waitlist.push(newEntry);
    await writeWaitlist(waitlist);

    try {
      await sendProductEmail({
        to: newEntry.email,
        subject: "Welcome to StackSmart",
        heading: "Welcome to StackSmart",
        body: "Thanks for signing up. Your next step is simple: upload your billing data, review the analysis, and turn the findings into a savings report.",
        ctaLabel: "Open welcome page",
        ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/welcome`,
      });
    } catch (emailError) {
      // Email sending is non-blocking — signup still succeeds without it
      console.warn("[Waitlist] Email send failed (non-fatal):", emailError);
    }

    return NextResponse.json({ message: "Successfully joined the waitlist!", position: waitlist.length }, { status: 201, headers: noStoreHeaders });
  } catch (error) {
    console.error("[Waitlist] Error:", error);
    return NextResponse.json({ message: "An unexpected error occurred. Please try again." }, { status: 500, headers: noStoreHeaders });
  }
}

export async function GET() {
  try {
    const waitlist = await readWaitlist();
    return NextResponse.json({ count: waitlist.length }, { headers: shortCacheHeaders });
  } catch {
    return NextResponse.json({ count: 0 }, { headers: shortCacheHeaders });
  }
}
