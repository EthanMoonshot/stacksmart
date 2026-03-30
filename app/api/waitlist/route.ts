import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

    // Validation
    if (!email || !companySize) {
      return NextResponse.json(
        { message: "Email and company size are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const waitlist = await readWaitlist();

    // Check for duplicate
    const existing = waitlist.find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
      return NextResponse.json(
        { message: "You're already on the waitlist!", alreadyExists: true },
        { status: 200 }
      );
    }

    // Add new entry
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

    console.log(`[Waitlist] New signup: ${email} (${companySize}) — Total: ${waitlist.length}`);

    return NextResponse.json(
      {
        message: "Successfully joined the waitlist!",
        position: waitlist.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Waitlist] Error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple count endpoint (no sensitive data)
  try {
    const waitlist = await readWaitlist();
    return NextResponse.json({ count: waitlist.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
