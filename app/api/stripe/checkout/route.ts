import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getPlanById } from "@/lib/pricing";
import { DEFAULT_CUSTOMER_ID, upsertSubscription } from "@/lib/subscriptions";

// TODO: Add durable rate limiting before launch (e.g. Upstash Redis / Vercel KV).
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
    const body = await req.json();
    const planId = body?.planId as string | undefined;
    const customerEmail = typeof body?.email === "string" ? body.email.trim() : "";

    if (!planId) {
      return NextResponse.json({ message: "planId is required." }, { status: 400, headers: noStoreHeaders });
    }

    if (!customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      return NextResponse.json({ message: "A valid work email is required to continue to checkout." }, { status: 400, headers: noStoreHeaders });
    }

    const plan = getPlanById(planId);
    if (!plan) {
      return NextResponse.json({ message: "Unknown pricing plan." }, { status: 404, headers: noStoreHeaders });
    }

    const stripe = getStripe();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.app";
    const auditPriceId = process.env.STRIPE_PRICE_AUDIT;

    const session = await stripe.checkout.sessions.create({
      mode: plan.mode,
      payment_method_types: ["card"],
      customer_email: customerEmail,
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel?plan=${plan.id}`,
      line_items: [
        auditPriceId
          ? {
              quantity: 1,
              price: auditPriceId,
            }
          : {
              quantity: 1,
              price_data: {
                currency: "usd",
                unit_amount: plan.price * 100,
                product_data: {
                  name: `StackSmart ${plan.name}`,
                  description: plan.description,
                },
              },
            },
      ],
      metadata: {
        customerId: DEFAULT_CUSTOMER_ID,
        customerEmail,
        planId: plan.id,
        planName: plan.name,
        billingInterval: plan.interval,
        stripePriceKey: auditPriceId ? "STRIPE_PRICE_AUDIT" : "inline_price_data",
      },
      allow_promotion_codes: true,
    });

    await upsertSubscription({
      customerId: DEFAULT_CUSTOMER_ID,
      email: customerEmail,
      status: "pending",
      planId: plan.id,
      planName: plan.name,
      billingInterval: plan.interval,
      mode: plan.mode,
      amount: plan.price,
      currency: "usd",
      stripeSessionId: session.id,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({ url: session.url, sessionId: session.id }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[Stripe Checkout]", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to create checkout session." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}
