# StackSmart — Pre-Launch Checklist

## Status: READY TO LAUNCH pending Stripe keys

Visual QA: 8/10 ✅
Build: Clean ✅
Customer Sim: 72% READY ✅

---

## 🔴 BLOCKING — Must complete before launch

### 1. Stripe Configuration (~10 mins)
See `STRIPE-SETUP.md` for full instructions.

- [ ] Create Stripe account at stripe.com
- [ ] Create product: "StackSmart SaaS Audit" — $49 one-time
- [ ] Copy Price ID → `STRIPE_PRICE_AUDIT` in .env.local
- [ ] Copy publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] Copy secret key → `STRIPE_SECRET_KEY`
- [ ] Set up webhook → copy signing secret → `STRIPE_WEBHOOK_SECRET`
- [ ] Test checkout with card `4242 4242 4242 4242`
- [ ] Confirm `/success` page loads after payment

---

## 🟡 IMPORTANT — Complete before or shortly after launch

### 2. Domain & Hosting
- [ ] Register domain (stacksmart.app or spendlens.com — naming TBD)
- [ ] Deploy to Vercel (free tier): `vercel deploy`
- [ ] Update `NEXT_PUBLIC_APP_URL` to real domain
- [ ] Update Stripe webhook endpoint URL to real domain
- [ ] Test end-to-end on live domain

### 3. Email (Resend)
- [ ] Create account at resend.com
- [ ] Add and verify sending domain
- [ ] Replace `RESEND_API_KEY=re_placeholder` with real key
- [ ] Test confirmation email sends after waitlist signup

### 4. Final name decision
Current options (from Marketing agent): SpendLens (#1), StackAudit, SaaSCut
- [ ] Justin confirms final product name
- [ ] Update metadata in layout.tsx if name changes

---

## ✅ DONE — No action needed

- [x] Full landing page built and QA'd (8/10)
- [x] SaaS audit analysis engine (CSV upload → AI report)
- [x] Demo report page (/report?id=demo)
- [x] About page
- [x] Pricing page
- [x] Privacy + Terms pages
- [x] Sitemap + robots.txt
- [x] OG image for social sharing
- [x] Stripe checkout + webhook fully coded
- [x] Customer simulation: 72% READY
- [x] Build clean, zero errors

---

## 🚀 Launch Day Sequence (once Stripe is live)

1. Swap placeholder keys → real Stripe keys in .env.local
2. `npm run build` — confirm clean
3. `vercel deploy --prod`
4. Update webhook URL in Stripe dashboard
5. Test one real payment (use own card, refund after)
6. Post waitlist announcement (LinkedIn + any other channels)
7. Monitor: Stripe dashboard + server logs

---

## Post-Launch Sprint 2 (after first revenue)

- Free trial option (6 hard NOs in customer sim)
- SOC 2 pending messaging → build trust (7 hard NOs)
- More social proof — real customer testimonials
- SEO content: 'saas spend audit', 'reduce software costs', 'cledara alternative'
