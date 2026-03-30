# StackSmart Memory

## Current Phase
- Phase 4 reporting build completed on 2026-03-30, including live report rendering, PDF export, and shareable report snapshots.
- Phase 4 QA fixes completed on 2026-03-30 for conservative savings math, richer recommendation coverage, and Confluence-specific alternative lookup.

## Architecture Decisions
- Data intake is implemented inside `app/upload/page.tsx` as a tabbed single-screen flow for CSV upload, manual entry, and email-forwarding setup to keep onboarding friction low.
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
- Dashboard and analysis pages still use mostly static/sample presentation data; next step is wiring saved intake data into downstream analysis/reporting.
