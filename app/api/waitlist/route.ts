import { NextRequest, NextResponse } from "next/server";
import { sendProductEmail } from "@/lib/email";
import { query } from "@/lib/db";

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

type WaitlistRow = {
  id: string;
  email: string;
  company_name: string | null;
  company_size: string | null;
  created_at: Date | string;
  source: string | null;
};

function mapWaitlistRow(row: WaitlistRow): WaitlistEntry {
  return {
    id: row.id,
    email: row.email,
    companyName: row.company_name ?? "",
    companySize: row.company_size ?? "",
    createdAt: new Date(row.created_at).toISOString(),
    source: row.source ?? "landing-page",
  };
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  const result = await query<WaitlistRow>(
    `SELECT id, email, company_name, company_size, created_at, source
     FROM waitlist_entries
     ORDER BY created_at ASC`,
  );
  return result.rows.map(mapWaitlistRow);
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

    const normalizedEmail = email.toLowerCase().trim();
    const existingResult = await query<WaitlistRow>(
      `SELECT id, email, company_name, company_size, created_at, source
       FROM waitlist_entries
       WHERE email = $1
       LIMIT 1`,
      [normalizedEmail],
    );

    if (existingResult.rows[0]) {
      return NextResponse.json({ message: "You're already on the waitlist!", alreadyExists: true }, { status: 200, headers: noStoreHeaders });
    }

    const newEntry: WaitlistEntry = {
      id: `wl_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
      email: normalizedEmail,
      companyName: companyName?.trim() || "",
      companySize: companySize || "",
      createdAt: new Date().toISOString(),
      source: "landing-page",
    };

    await query(
      `INSERT INTO waitlist_entries (id, email, company_name, company_size, created_at, source)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [newEntry.id, newEntry.email, newEntry.companyName, newEntry.companySize, newEntry.createdAt, newEntry.source],
    );

    const countResult = await query<{ count: string }>(`SELECT COUNT(*)::text AS count FROM waitlist_entries`);
    const position = Number(countResult.rows[0]?.count ?? 0);

    try {
      await sendProductEmail({
        to: newEntry.email,
        subject: "Welcome to StackSmart",
        heading: "Welcome to StackSmart",
        body: "Thanks for signing up. Your next step is simple: upload your billing data, review the analysis, and turn the findings into a savings report.",
        ctaLabel: "Open welcome page",
        ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.app"}/welcome`,
      });
    } catch (emailError) {
      console.warn("[Waitlist] Email send failed (non-fatal):", emailError);
    }

    return NextResponse.json({ message: "Successfully joined the waitlist!", position }, { status: 201, headers: noStoreHeaders });
  } catch (error) {
    console.error("[Waitlist] Error:", error);
    return NextResponse.json({ message: "An unexpected error occurred. Please try again." }, { status: 500, headers: noStoreHeaders });
  }
}

export async function GET() {
  try {
    const countResult = await query<{ count: string }>(`SELECT COUNT(*)::text AS count FROM waitlist_entries`);
    return NextResponse.json({ count: Number(countResult.rows[0]?.count ?? 0) }, { headers: shortCacheHeaders });
  } catch {
    return NextResponse.json({ count: 0 }, { headers: shortCacheHeaders });
  }
}
