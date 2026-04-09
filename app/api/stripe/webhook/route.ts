import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { DEFAULT_CUSTOMER_ID, getCurrentSubscription, SubscriptionRecord, upsertSubscription } from "@/lib/subscriptions";
import { sendProductEmail } from "@/lib/email";

// Force Node.js runtime so raw body is preserved for Stripe signature verification
export const runtime = "nodejs";

// TODO: Protect webhook route with Stripe signature checks + upstream rate limiting at the edge.
const noStoreHeaders = { "Cache-Control": "no-store, max-age=0" };

async function updateStoredSubscription(partial: Partial<SubscriptionRecord> & { email?: string }) {
  const current = await getCurrentSubscription(DEFAULT_CUSTOMER_ID);

  await upsertSubscription({
    customerId: DEFAULT_CUSTOMER_ID,
    email: partial.email || current?.email || "unknown@customer.local",
    status: partial.status || current?.status || "inactive",
    planId: partial.planId || current?.planId || "audit",
    planName: partial.planName || current?.planName || "SaaS Audit",
    billingInterval: partial.billingInterval || current?.billingInterval || "one_time",
    mode: partial.mode || current?.mode || "payment",
    amount: partial.amount ?? current?.amount ?? 0,
    currency: partial.currency || current?.currency || "usd",
    stripeSessionId: partial.stripeSessionId || current?.stripeSessionId,
    stripeCustomerId: partial.stripeCustomerId || current?.stripeCustomerId,
    stripeSubscriptionId: partial.stripeSubscriptionId || current?.stripeSubscriptionId,
    activatedAt: partial.activatedAt || current?.activatedAt,
    updatedAt: new Date().toISOString(),
  });
}

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, { apiVersion: "2026-03-25.dahlia" });
}

/* ------------------------------------------------------------------ */
/*  Helpers — resolve customer email from various Stripe objects       */
/* ------------------------------------------------------------------ */

async function resolveCustomerEmail(
  stripe: Stripe,
  customerIdOrObj: string | Stripe.Customer | Stripe.DeletedCustomer | null | undefined,
): Promise<string | null> {
  if (!customerIdOrObj) return null;
  if (typeof customerIdOrObj !== "string") {
    return "email" in customerIdOrObj ? customerIdOrObj.email ?? null : null;
  }
  try {
    const customer = await stripe.customers.retrieve(customerIdOrObj);
    if (customer.deleted) return null;
    return customer.email ?? null;
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Email senders                                                      */
/* ------------------------------------------------------------------ */

async function sendWelcomeEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Welcome to StackSmart 👋",
      heading: "Let's start saving you money.",
      body: "Welcome aboard! With your StackSmart subscription, you get ongoing monthly SaaS audits that keep your stack lean and your spend in check. Upload your tools and we'll generate your first savings report right away.",
      ctaLabel: "Upload My SaaS Stack",
      ctaHref: "https://www.stacksmart.app/upload",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Welcome email failed:", err);
  }
}

async function sendPurchaseConfirmationEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Your StackSmart purchase is confirmed ✓",
      heading: "You're in. Let's find your savings.",
      body: "Your SaaS audit is ready to go! Upload your SaaS list and we'll generate your full savings report immediately — no waiting, no back-and-forth. Just clear, actionable insights on where you're overspending.",
      ctaLabel: "Upload My SaaS Stack",
      ctaHref: "https://www.stacksmart.app/upload",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Purchase confirmation email failed:", err);
  }
}

async function sendPaymentFailedEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Action required: Payment failed",
      heading: "We couldn't process your payment.",
      body: "Your most recent payment didn't go through, which means your StackSmart subscription is at risk. Please update your payment method to keep uninterrupted access to your monthly SaaS audits and savings reports.",
      ctaLabel: "Update Payment Method",
      ctaHref: "https://www.stacksmart.app/billing",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Payment failed email failed:", err);
  }
}

async function sendRefundEmail(email: string, amount: string, currency: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Your refund has been processed ✓",
      heading: "Refund on its way.",
      body: `Your refund of ${amount} ${currency.toUpperCase()} has been processed. It typically takes 5-10 business days to appear on your statement depending on your bank. If you have any questions, reply to this email.`,
    });
  } catch (err) {
    console.error("[Stripe Webhook] Refund email failed:", err);
  }
}

async function sendRenewalSuccessEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "StackSmart subscription renewed ✓",
      heading: "Another month of savings ahead.",
      body: "Your subscription has been renewed successfully. Keep auditing your SaaS stack to find new savings opportunities.",
      ctaLabel: "Run My Audit",
      ctaHref: "https://www.stacksmart.app/upload",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Renewal success email failed:", err);
  }
}

async function sendUpcomingRenewalEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Your StackSmart subscription renews soon",
      heading: "Renewal reminder.",
      body: "Your subscription will renew in 7 days. No action needed — we'll automatically charge your card on file.",
      ctaLabel: "Manage My Account",
      ctaHref: "https://www.stacksmart.app/billing",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Upcoming renewal email failed:", err);
  }
}

async function sendSubscriptionUpdatedEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Your StackSmart plan has been updated",
      heading: "Plan updated.",
      body: "Your subscription has been updated. Your new plan is now active.",
      ctaLabel: "View My Account",
      ctaHref: "https://www.stacksmart.app/billing",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Subscription updated email failed:", err);
  }
}

// TODO: Re-engagement email — needs a cron job to fire after 30 days of user inactivity.
// Subject: TBD, Body: TBD. Not a Stripe webhook event — requires scheduled logic.

async function sendCancellationEmail(email: string) {
  try {
    await sendProductEmail({
      to: email,
      subject: "Your StackSmart subscription has been cancelled",
      heading: "You've been cancelled. But you can come back.",
      body: "We're sorry to see you go. You'll lose access to ongoing monthly audits, savings tracking, and priority recommendations at the end of your current billing period. If you change your mind, the door is always open.",
      ctaLabel: "Reactivate My Account",
      ctaHref: "https://www.stacksmart.app/pricing",
    });
  } catch (err) {
    console.error("[Stripe Webhook] Cancellation email failed:", err);
  }
}

/* ------------------------------------------------------------------ */
/*  Webhook handler                                                    */
/* ------------------------------------------------------------------ */

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const signature = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      return NextResponse.json({ message: "Missing Stripe webhook configuration." }, { status: 400, headers: noStoreHeaders });
    }

    const body = await req.text();
    let event: ReturnType<typeof stripe.webhooks.constructEvent>;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (sigErr) {
      console.error("[Stripe Webhook] Signature verification failed:", sigErr);
      return NextResponse.json({ message: "Webhook signature verification failed." }, { status: 400, headers: noStoreHeaders });
    }

    /* ---- checkout.session.completed ---- */
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const record: SubscriptionRecord = {
        customerId: String(session.metadata?.customerId || "demo-user"),
        email: session.customer_details?.email || session.customer_email || "unknown@customer.local",
        status: "active",
        planId: String(session.metadata?.planId || "audit"),
        planName: String(session.metadata?.planName || "SaaS Audit"),
        billingInterval: (session.metadata?.billingInterval || "one_time") as "month" | "year" | "one_time",
        mode: session.mode === "subscription" ? "subscription" : "payment",
        amount: (session.amount_total || 0) / 100,
        currency: session.currency || "usd",
        stripeSessionId: session.id,
        stripeCustomerId: typeof session.customer === "string" ? session.customer : undefined,
        stripeSubscriptionId: typeof session.subscription === "string" ? session.subscription : undefined,
        activatedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await upsertSubscription(record);

      const customerEmail = session.customer_details?.email || session.customer_email;
      if (customerEmail) {
        const isSubscription = session.mode === "subscription";
        if (isSubscription) {
          await sendWelcomeEmail(customerEmail);
        } else {
          await sendPurchaseConfirmationEmail(customerEmail);
        }
      }
    }

    /* ---- invoice.payment_failed ---- */
    if (event.type === "invoice.payment_failed") {
      const invoice = event.data.object as Stripe.Invoice;
      const email = invoice.customer_email ?? await resolveCustomerEmail(stripe, invoice.customer);
      if (email) {
        await updateStoredSubscription({
          email,
          status: "past_due",
          amount: (invoice.amount_due || 0) / 100,
          currency: invoice.currency || "usd",
          stripeCustomerId: typeof invoice.customer === "string" ? invoice.customer : undefined,
          mode: "subscription",
        });
        await sendPaymentFailedEmail(email);
      }
    }

    /* ---- charge.refunded ---- */
    if (event.type === "charge.refunded") {
      const chargePartial = event.data.object as Stripe.Charge;
      // Fetch the full charge object — Stripe sends a partial diff in this event
      let charge: Stripe.Charge;
      try {
        charge = await stripe.charges.retrieve(chargePartial.id, { expand: ["billing_details"] });
      } catch {
        charge = chargePartial;
      }
      const amount = ((charge.amount_refunded ?? 0) / 100).toFixed(2);
      const currency = charge.currency ?? "aud";
      const email =
        charge.billing_details?.email ??
        charge.receipt_email ??
        await resolveCustomerEmail(stripe, charge.customer);
      if (email) {
        await sendRefundEmail(email, amount, currency);
      }
    }

    /* ---- invoice.paid (subscription renewal only) ---- */
    if (event.type === "invoice.paid") {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.billing_reason === "subscription_cycle") {
        const email = invoice.customer_email ?? await resolveCustomerEmail(stripe, invoice.customer);
        if (email) {
          await sendRenewalSuccessEmail(email);
        }
      }
    }

    /* ---- invoice.upcoming ---- */
    if (event.type === "invoice.upcoming") {
      const invoice = event.data.object as Stripe.Invoice;
      const email = invoice.customer_email ?? await resolveCustomerEmail(stripe, invoice.customer);
      if (email) {
        await sendUpcomingRenewalEmail(email);
      }
    }

    /* ---- customer.subscription.updated ---- */
    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object as Stripe.Subscription;
      const email = await resolveCustomerEmail(stripe, subscription.customer);
      if (email) {
        await updateStoredSubscription({
          email,
          status: subscription.status === "active" ? "active" : subscription.status === "past_due" ? "past_due" : "pending",
          billingInterval: subscription.items.data[0]?.price.recurring?.interval === "year" ? "year" : "month",
          mode: "subscription",
          amount: ((subscription.items.data[0]?.price.unit_amount || 0) / 100) || undefined,
          currency: subscription.currency || "usd",
          stripeCustomerId: typeof subscription.customer === "string" ? subscription.customer : undefined,
          stripeSubscriptionId: subscription.id,
        });
        await sendSubscriptionUpdatedEmail(email);
      }
    }

    /* ---- customer.subscription.deleted ---- */
    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;
      const email = await resolveCustomerEmail(stripe, subscription.customer);
      if (email) {
        await updateStoredSubscription({
          email,
          status: "canceled",
          billingInterval: subscription.items.data[0]?.price.recurring?.interval === "year" ? "year" : "month",
          mode: "subscription",
          currency: subscription.currency || "usd",
          stripeCustomerId: typeof subscription.customer === "string" ? subscription.customer : undefined,
          stripeSubscriptionId: subscription.id,
        });
        await sendCancellationEmail(email);
      }
    }

    return NextResponse.json({ received: true }, { headers: noStoreHeaders });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const errStack = error instanceof Error ? error.stack : undefined;
    console.error("[Stripe Webhook] FATAL ERROR:", errMsg);
    console.error("[Stripe Webhook] STACK:", errStack);
    return NextResponse.json({ message: "Webhook handling failed.", error: errMsg }, { status: 400, headers: noStoreHeaders });
  }
}
