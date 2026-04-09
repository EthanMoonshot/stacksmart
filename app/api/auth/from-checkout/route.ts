import { NextRequest, NextResponse } from "next/server";
import { createSession, setSessionCookie } from "@/lib/auth";
import { getSubscriptionBySessionId, upsertSubscription } from "@/lib/subscriptions";

const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const sessionId = typeof body?.sessionId === "string" ? body.sessionId : "";

    if (!sessionId) {
      return NextResponse.json({ message: "sessionId is required." }, { status: 400, headers: noStoreHeaders });
    }

    const subscription = await getSubscriptionBySessionId(sessionId);
    if (!subscription?.email) {
      return NextResponse.json({ message: "No purchase found for that checkout session yet." }, { status: 404, headers: noStoreHeaders });
    }

    if (subscription.status !== "active") {
      await upsertSubscription({
        ...subscription,
        status: "active",
        activatedAt: subscription.activatedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    const authSession = await createSession(subscription.email);
    await setSessionCookie(authSession.token, authSession.expiresAt);

    return NextResponse.json({ ok: true, email: subscription.email }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[Auth From Checkout]", error);
    return NextResponse.json({ message: "Unable to finish sign-in after checkout." }, { status: 500, headers: noStoreHeaders });
  }
}
