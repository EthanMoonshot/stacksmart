# StackSmart — Stripe Setup Guide

The integration is fully coded. You just need to configure 4 values.
Estimated time: 10-15 minutes.

---

## Step 1: Create a Stripe Account
If you don't have one: https://dashboard.stripe.com/register
Use your Moonshot/business email.

---

## Step 2: Create the Product & Price in Stripe

1. Go to: https://dashboard.stripe.com/products
2. Click **+ Add product**
3. Fill in:
   - **Name:** StackSmart SaaS Audit
   - **Description:** Full SaaS stack analysis with AI-powered savings report
4. Under **Pricing**, click **+ Add price**:
   - Pricing model: **One-time**
   - Price: **$49.00 AUD** (or USD — your choice, set currency)
   - Click **Save product**
5. Copy the **Price ID** — looks like: `price_1AbCdEfGhIjKlMnO`
   → This is your `STRIPE_PRICE_AUDIT` value

---

## Step 3: Get your API Keys

1. Go to: https://dashboard.stripe.com/apikeys
2. Copy:
   - **Publishable key** (starts with `pk_live_...`) → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** (starts with `sk_live_...`) → `STRIPE_SECRET_KEY`

> **Test mode first?** Use `pk_test_` and `sk_test_` keys to verify everything works before going live. Toggle between Test/Live at top-left of Stripe dashboard.

---

## Step 4: Set up Webhook

1. Go to: https://dashboard.stripe.com/webhooks
2. Click **+ Add endpoint**
3. Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   (For local testing use Stripe CLI — see below)
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_...`) → `STRIPE_WEBHOOK_SECRET`

---

## Step 5: Update .env.local

Edit `/home/justin/projects/stacksmart/.env.local`:

```
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_live_YOUR_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_HERE
STRIPE_PRICE_AUDIT=price_YOUR_PRICE_ID_HERE
```

---

## Step 6: Test it

1. Start the server: `npm run dev`
2. Go to http://localhost:3001/pricing
3. Click "Get Your Audit — $49"
4. Use Stripe test card: `4242 4242 4242 4242`, any future expiry, any CVC
5. Should redirect to `/success` page

---

## Step 7: Go live

1. Swap test keys → live keys in `.env.local`
2. Update `NEXT_PUBLIC_APP_URL` to your real domain
3. Update webhook endpoint URL in Stripe to your real domain
4. Deploy

---

## Current pricing plan (from lib/pricing.ts)
- **Plan:** SaaS Audit
- **Price:** $49 one-time
- **Mode:** `payment` (not subscription)
- **Plan ID:** `audit`

---

## Local webhook testing (optional)
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward to local server
stripe listen --forward-to localhost:3001/api/stripe/webhook
# Copy the webhook secret it gives you → STRIPE_WEBHOOK_SECRET
```
