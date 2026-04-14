import { NextRequest, NextResponse } from "next/server";
import { createLoginCode } from "@/lib/auth";

const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const requestLog = new Map<string, number[]>();
const IS_LOCAL_QA = process.env.NODE_ENV !== "production" || process.env.STACKSMART_FORCE_DEV_LOGIN === "1";

function getRateLimitKeys(req: NextRequest, email: string) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  return [`email:${email.toLowerCase()}`, `ip:${ip}`];
}

function isRateLimited(keys: string[]) {
  const now = Date.now();

  for (const key of keys) {
    const recent = (requestLog.get(key) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
    requestLog.set(key, recent);
    if (recent.length >= RATE_LIMIT_MAX_ATTEMPTS) {
      return true;
    }
  }

  for (const key of keys) {
    const recent = requestLog.get(key) || [];
    recent.push(now);
    requestLog.set(key, recent);
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400, headers: noStoreHeaders });
    }

    if (!IS_LOCAL_QA && isRateLimited(getRateLimitKeys(req, email))) {
      return NextResponse.json(
        { message: "Too many sign-in code requests. Please wait a few minutes and try again." },
        { status: 429, headers: noStoreHeaders },
      );
    }

    const result = await createLoginCode(email);
    return NextResponse.json(
      {
        ok: true,
        delivered: result.delivered,
        message: result.delivered
          ? "Check your email for a one-time sign-in code."
          : "Email delivery is not configured here, so use the development code below.",
        devCode: result.exposeDevCode ? result.code : undefined,
      },
      { headers: noStoreHeaders },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    console.error("[Auth Request Code]", error);
    return NextResponse.json(
      {
        message: "Unable to send sign-in code.",
        debug: process.env.NODE_ENV !== "production" ? message : undefined,
      },
      { status: 500, headers: noStoreHeaders },
    );
  }
}
