# StackSmart Deployment Guide

## 1. Prerequisites
- Vercel project connected to the repository
- Production domain ready (for example `stacksmart.io`)
- Stripe account with live products/prices
- Resend account with verified sending domain
- Plausible site created
- Sentry project created

## 2. Required environment variables
Set these in Vercel for Production and Preview as appropriate:

- `NEXT_PUBLIC_APP_URL` — production app URL, e.g. `https://stacksmart.io`
- `STRIPE_SECRET_KEY` — Stripe live secret key
- `STRIPE_WEBHOOK_SECRET` — webhook signing secret from Stripe
- `RESEND_API_KEY` — Resend API key
- `EMAIL_FROM` — sender, e.g. `StackSmart <hello@stacksmart.io>`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — Plausible domain, e.g. `stacksmart.io`
- `NEXT_PUBLIC_SENTRY_DSN` — Sentry browser DSN

## 3. Stripe setup
1. Create live products and pricing that mirror the plan IDs used in `lib/pricing.ts`.
2. Update any plan mapping if live pricing diverges from test mode assumptions.
3. In Stripe, create a webhook endpoint pointing to `https://your-domain.com/api/stripe/webhook`.
4. Subscribe to at least:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copy the live secret key and webhook secret into Vercel.
6. Run a live-mode smoke test with a low-risk plan.

## 4. Resend setup
1. Verify your sending domain in Resend.
2. Add the DNS records Resend provides.
3. Set `EMAIL_FROM` to a verified sender.
4. Add `RESEND_API_KEY` in Vercel.
5. Send a test welcome email and report-ready email from production.

## 5. Domain configuration
1. Add the production domain to the Vercel project.
2. Update DNS records at your registrar.
3. Confirm HTTPS is active.
4. Set `NEXT_PUBLIC_APP_URL` to the canonical production domain.
5. Create the same domain in Plausible and Sentry.

## 6. Vercel deployment
1. Connect the Git repo in Vercel.
2. Configure the environment variables above.
3. Confirm the project region and function settings in `vercel.json`.
4. Deploy to preview and run a smoke test.
5. Promote to production once the launch checklist is complete.

## 7. Post-deploy verification
- Landing page metadata renders correctly in page source
- `sitemap.xml` and `robots.txt` load
- Plausible script loads and events appear
- Error monitoring captures a test exception
- Waitlist signup works
- Upload → analysis → report flow works end-to-end
- Stripe checkout + webhook updates subscription state
- Resend emails send successfully
