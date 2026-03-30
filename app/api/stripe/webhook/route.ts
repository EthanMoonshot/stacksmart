import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { SubscriptionRecord, upsertSubscription } from "@/lib/subscriptions";

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
      return NextResponse.json({ message: "Missing Stripe webhook configuration." }, { status: 400 });
    }

    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    if (
      event.type === "checkout.session.completed" ||
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      let record: SubscriptionRecord | undefined;

      if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;
        record = {
          customerId: String(session.metadata?.customerId || "demo-user"),
          email: session.customer_details?.email || session.customer_email || "demo@stacksmart.io",
          status: session.mode === "payment" ? "active" : "pending",
          planId: String(session.metadata?.planId || "audit"),
          planName: String(session.metadata?.planName || "One-Time Audit"),
          billingInterval: (session.metadata?.billingInterval || "one_time") as "month" | "year" | "one_time",
          mode: session.mode === "subscription" ? "subscription" as const : "payment" as const,
          amount: (session.amount_total || 0) / 100,
          currency: session.currency || "usd",
          stripeSessionId: session.id,
          stripeCustomerId: typeof session.customer === "string" ? session.customer : undefined,
          stripeSubscriptionId: typeof session.subscription === "string" ? session.subscription : undefined,
          activatedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
      }

      if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
        const subscription = event.data.object as Stripe.Subscription;
        record = {
          customerId: String(subscription.metadata?.customerId || "demo-user"),
          email: "demo@stacksmart.io",
          status: subscription.status === "active" ? "active" : subscription.status === "past_due" ? "past_due" : subscription.status === "canceled" ? "canceled" : "pending",
          planId: String(subscription.metadata?.planId || "starter-monthly"),
          planName: String(subscription.metadata?.planName || "Starter"),
          billingInterval: (subscription.items.data[0]?.price.recurring?.interval === "year" ? "year" : "month") as "month" | "year" | "one_time",
          mode: "subscription" as const,
          amount: ((subscription.items.data[0]?.price.unit_amount || 0) / 100),
          currency: subscription.currency || "usd",
          stripeCustomerId: typeof subscription.customer === "string" ? subscription.customer : undefined,
          stripeSubscriptionId: subscription.id,
          activatedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
      }

      if (record) {
        await upsertSubscription(record);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Stripe Webhook]", error);
    return NextResponse.json({ message: "Webhook handling failed." }, { status: 400 });
  }
}
