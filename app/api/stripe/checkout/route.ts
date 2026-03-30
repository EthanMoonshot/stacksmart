import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getPlanById } from "@/lib/pricing";
import { DEFAULT_CUSTOMER_ID, upsertSubscription } from "@/lib/subscriptions";

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
    const customerEmail = (body?.email as string | undefined) || "demo@stacksmart.io";

    if (!planId) {
      return NextResponse.json({ message: "planId is required." }, { status: 400 });
    }

    const plan = getPlanById(planId);
    if (!plan) {
      return NextResponse.json({ message: "Unknown pricing plan." }, { status: 404 });
    }

    const stripe = getStripe();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: plan.mode,
      payment_method_types: ["card"],
      customer_email: customerEmail,
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel?plan=${plan.id}`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: plan.price * 100,
            recurring: plan.mode === "subscription" ? { interval: plan.interval === "year" ? "year" : "month" } : undefined,
            product_data: {
              name: `StackSmart ${plan.name}`,
              description: plan.description,
            },
          },
        },
      ],
      metadata: {
        customerId: DEFAULT_CUSTOMER_ID,
        planId: plan.id,
        planName: plan.name,
        billingInterval: plan.interval,
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

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error("[Stripe Checkout]", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
