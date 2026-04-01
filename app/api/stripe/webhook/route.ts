import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SubscriptionRecord, upsertSubscription } from "@/lib/subscriptions";

// TODO: Protect webhook route with Stripe signature checks + upstream rate limiting at the edge.
const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, { apiVersion: "2026-03-25.dahlia" });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      return NextResponse.json({ message: "Missing Stripe webhook configuration." }, { status: 400, headers: noStoreHeaders });
    }

    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const record: SubscriptionRecord = {
        customerId: String(session.metadata?.customerId || "demo-user"),
        email: session.customer_details?.email || session.customer_email || "unknown@customer.local",
        status: "active",
        planId: String(session.metadata?.planId || "audit"),
        planName: String(session.metadata?.planName || "SaaS Audit"),
        billingInterval: (session.metadata?.billingInterval || "one_time") as "month" | "year" | "one_time",
        mode: "payment",
        amount: (session.amount_total || 0) / 100,
        currency: session.currency || "usd",
        stripeSessionId: session.id,
        stripeCustomerId: typeof session.customer === "string" ? session.customer : undefined,
        stripeSubscriptionId: typeof session.subscription === "string" ? session.subscription : undefined,
        activatedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await upsertSubscription(record);
    }

    return NextResponse.json({ received: true }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[Stripe Webhook]", error);
    return NextResponse.json({ message: "Webhook handling failed." }, { status: 400, headers: noStoreHeaders });
  }
}
