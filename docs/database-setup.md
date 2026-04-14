# Database setup for StackSmart

StackSmart now expects durable Postgres storage for launch-critical data instead of local `data/*.json` files.

## Recommended production setup

Use Supabase Postgres on the free tier.

1. Create a Supabase project.
2. In Supabase SQL Editor, run `db/schema.sql`.
3. Copy the transaction pooler connection string into `DATABASE_URL`.
4. Add `DATABASE_URL` to Vercel project environment variables.
5. Redeploy.

## Required environment variables

```bash
DATABASE_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres?sslmode=require
NEXT_PUBLIC_APP_URL=https://www.stacksmart.app
```

Notes:
- For Supabase, use the pooled connection string when possible.
- `SUPABASE_SERVICE_ROLE_KEY` is not required by the app runtime for this migration.
- If your connection string does not already include SSL settings, set `PGSSLMODE=require`.

## What moved into Postgres

- `data/subscriptions.json` -> `subscriptions`
- `data/sessions.json` -> `auth_sessions`
- `data/login-codes.json` -> `login_codes`
- `data/tools.json` -> `tool_stacks`
- `data/analysis.json` -> `analysis_results`
- `data/waitlist.json` -> `waitlist_entries`
- `data/reports/*.json` -> `shared_reports`

## Optional one-time import from local JSON

If you have existing local demo data, import it manually before cutting over. The app does not auto-read the old JSON files anymore.

A quick approach is to inspect the files in `data/` and insert the records with SQL or a small Node script once.

## Operational note

Expired auth sessions and login codes are cleaned up opportunistically during normal requests. If you want stricter cleanup later, add a scheduled SQL job in Supabase.
