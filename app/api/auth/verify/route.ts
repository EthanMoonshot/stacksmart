import { NextRequest, NextResponse } from "next/server";
import { consumeLoginCode, setSessionCookie } from "@/lib/auth";

const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const code = typeof body?.code === "string" ? body.code.trim() : "";

    if (!email || !code) {
      return NextResponse.json({ message: "Email and code are required." }, { status: 400, headers: noStoreHeaders });
    }

    const session = await consumeLoginCode(email, code);
    if (!session) {
      return NextResponse.json({ message: "Invalid or expired sign-in code." }, { status: 401, headers: noStoreHeaders });
    }

    await setSessionCookie(session.token, session.expiresAt);

    return NextResponse.json({ ok: true, customerId: session.customerId }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[Auth Verify]", error);
    return NextResponse.json({ message: "Unable to verify sign-in code." }, { status: 500, headers: noStoreHeaders });
  }
}
