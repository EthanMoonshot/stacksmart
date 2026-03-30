# StackSmart Memory

## Current Phase
- Phase 4 reporting build completed on 2026-03-30, including live report rendering, PDF export, and shareable report snapshots.
- Phase 4 QA fixes completed on 2026-03-30 for conservative savings math, richer recommendation coverage, and Confluence-specific alternative lookup.
- Phase 5 MVP build completed on 2026-03-30 with Stripe test-mode checkout/webhook routes, local subscription tracking, a dedicated pricing page, onboarding flow, Resend email hooks, and UI polish/loading-state upgrades.

## Architecture Decisions
- Data intake is implemented inside `app/upload/page.tsx` as a tabbed single-screen flow for CSV upload, manual entry, and email-forwarding setup to keep onboarding friction low.
- Payments use Stripe Checkout in test mode with local JSON persistence (`data/subscriptions.json`) instead of a database so pricing and plan-state flows can be validated before introducing auth/account storage.
- Subscription state is read server-side via `lib/subscriptions.ts`, allowing dashboard/navigation/pricing surfaces to show a current plan without adding client-side billing state management.
- Transactional email is abstracted behind `lib/email.ts` so welcome and report-ready notifications can use Resend when configured and fail safely when API keys are absent.
- Onboarding is implemented as a lightweight client component (`components/onboarding/OnboardingFlow.tsx`) instead of a full workflow engine to keep MVP scope tight while still giving new users a guided setup path.
- CSV parsing is handled client-side via `lib/csv-parser.ts` using a lightweight custom parser and header normalization instead of adding a CSV dependency.
- Persistence is handled through `app/api/tools/route.ts` with a local JSON store at `data/tools.json`.
- Supabase was not configured in the repo, so local JSON fallback was used as the working default for this phase.
- Shared SaaS tool types and enumerations live in `lib/types.ts`.
- Sample data is centralized in `lib/sample-data.ts` so the demo path and future seeded experiences can reuse one source of truth.
- Reporting view models and shareable snapshots are handled in `lib/report.ts`, with snapshots stored under `data/reports/*.json`.
- PDF export uses `html2canvas` + `jspdf` client-side to keep implementation lightweight and avoid server-side PDF infrastructure.
- Recommendations are now driven by tool-specific alternative records in `lib/recommendations-db.ts`, with alias-aware tool matching for overlap detection and switch recommendations.
- Savings projections are intentionally conservative: overlapping recommendations are deduped at the stack level, individual recommendation savings are capped relative to current spend, and total projected savings cannot exceed 70% of monthly spend.

## Patterns / Notes
- All intake sources save through the same `/api/tools` endpoint.
- CSV flow validates required columns (`tool name`, `cost`, `billing frequency`, `category`) and surfaces row-level errors before save.
- Manual entry uses the same `SaaSTool` shape as CSV and sample imports.
- Report UI is rendered from `data/analysis.json` via `readLatestAnalysis()` and `buildReportViewModel()` rather than static demo content.
- Shared report URLs are immutable snapshots so follow-up analyses do not mutate already-shared reports.

## Known Follow-ups
- If Supabase is added later, swap the API route persistence layer behind the same route contract rather than changing the upload UI.
- Billing is still single-workspace/demo-user scoped; real account-level subscriptions will need auth-aware customer IDs and webhook reconciliation.
- Stripe checkout is ready for test mode, but live deployment still requires valid Stripe/Resend credentials and an externally reachable webhook endpoint.
