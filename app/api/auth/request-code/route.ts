import { NextRequest, NextResponse } from "next/server";
import { createLoginCode } from "@/lib/auth";

const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400, headers: noStoreHeaders });
    }

    const result = await createLoginCode(email);
    return NextResponse.json(
      {
        ok: true,
        delivered: result.delivered,
        message: result.delivered
          ? "Check your email for a one-time sign-in code."
          : "Email delivery is not configured here, so use the development code below.",
        devCode: process.env.NODE_ENV === "production" ? undefined : result.code,
      },
      { headers: noStoreHeaders },
    );
  } catch (error) {
    console.error("[Auth Request Code]", error);
    return NextResponse.json({ message: "Unable to send sign-in code." }, { status: 500, headers: noStoreHeaders });
  }
}
