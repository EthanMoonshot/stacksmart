# StackSmart Memory

## Current Phase
- Phase 2 data intake implementation started on 2026-03-30.
- Phase 1 QA fixes completed first and committed separately.

## Architecture Decisions
- Data intake is implemented inside `app/upload/page.tsx` as a tabbed single-screen flow for CSV upload, manual entry, and email-forwarding setup to keep onboarding friction low.
- CSV parsing is handled client-side via `lib/csv-parser.ts` using a lightweight custom parser and header normalization instead of adding a CSV dependency.
- Persistence is handled through `app/api/tools/route.ts` with a local JSON store at `data/tools.json`.
- Supabase was not configured in the repo, so local JSON fallback was used as the working default for this phase.
- Shared SaaS tool types and enumerations live in `lib/types.ts`.
- Sample data is centralized in `lib/sample-data.ts` so the demo path and future seeded experiences can reuse one source of truth.

## Patterns / Notes
- All intake sources save through the same `/api/tools` endpoint.
- CSV flow validates required columns (`tool name`, `cost`, `billing frequency`, `category`) and surfaces row-level errors before save.
- Manual entry uses the same `SaaSTool` shape as CSV and sample imports.
- Report page uses lightweight client-side toast state for "coming soon" actions.

## Known Follow-ups
- If Supabase is added later, swap the API route persistence layer behind the same route contract rather than changing the upload UI.
- Dashboard and analysis pages still use mostly static/sample presentation data; next step is wiring saved intake data into downstream analysis/reporting.
