# StackSmart Database Schema

**Database:** Supabase (PostgreSQL)  
**Last Updated:** 2026-03-30

---

## Overview

```
Users ──────┐
            │
Companies ──┼──── Subscriptions
            │
            ├──── Analyses ──── SaaSTools (detected)
            │                   └── Recommendations
            └──── (via auth)
```

---

## Tables

### `users`

Managed primarily by Supabase Auth. Extended with profile data.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK, default `gen_random_uuid()` | User ID (matches Supabase Auth UID) |
| `email` | `text` | UNIQUE, NOT NULL | User email |
| `full_name` | `text` | | Display name |
| `company_id` | `uuid` | FK → `companies.id` | User's company |
| `role` | `text` | DEFAULT `'member'` | `owner`, `admin`, `member` |
| `avatar_url` | `text` | | Profile picture URL |
| `created_at` | `timestamptz` | DEFAULT `now()` | Account creation time |
| `updated_at` | `timestamptz` | DEFAULT `now()` | Last update |

---

### `companies`

The primary organizational unit. One company can have many users.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK, default `gen_random_uuid()` | Company ID |
| `name` | `text` | NOT NULL | Company name |
| `size` | `text` | | `1-10`, `11-25`, `26-50`, `51-100`, `100+` |
| `industry` | `text` | | e.g. `SaaS`, `Agency`, `Finance` |
| `website` | `text` | | Company website URL |
| `country` | `text` | DEFAULT `'AU'` | ISO country code |
| `monthly_saas_budget` | `numeric(10,2)` | | Self-reported SaaS spend |
| `subscription_tier` | `text` | DEFAULT `'none'` | `none`, `one-time`, `starter`, `growth`, `scale` |
| `stripe_customer_id` | `text` | UNIQUE | Stripe customer reference |
| `created_at` | `timestamptz` | DEFAULT `now()` | |
| `updated_at` | `timestamptz` | DEFAULT `now()` | |

---

### `subscriptions`

Tracks billing status and plan details per company.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK | Subscription ID |
| `company_id` | `uuid` | FK → `companies.id`, NOT NULL | Owning company |
| `stripe_subscription_id` | `text` | UNIQUE | Stripe subscription ID |
| `plan` | `text` | NOT NULL | `one-time`, `starter`, `growth`, `scale` |
| `status` | `text` | DEFAULT `'trialing'` | `trialing`, `active`, `past_due`, `canceled`, `paused` |
| `current_period_start` | `timestamptz` | | Billing period start |
| `current_period_end` | `timestamptz` | | Billing period end / renewal date |
| `cancel_at_period_end` | `boolean` | DEFAULT `false` | Scheduled for cancellation |
| `amount_cents` | `integer` | | Monthly amount in cents |
| `currency` | `text` | DEFAULT `'aud'` | ISO currency code |
| `billing_interval` | `text` | DEFAULT `'month'` | `month`, `year` |
| `trial_end` | `timestamptz` | | Trial expiry (nullable) |
| `created_at` | `timestamptz` | DEFAULT `now()` | |
| `updated_at` | `timestamptz` | DEFAULT `now()` | |

---

### `analyses`

Each time a user submits billing data for AI analysis.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK | Analysis ID |
| `company_id` | `uuid` | FK → `companies.id`, NOT NULL | Owning company |
| `created_by` | `uuid` | FK → `users.id` | User who triggered analysis |
| `status` | `text` | DEFAULT `'pending'` | `pending`, `processing`, `complete`, `failed` |
| `input_type` | `text` | NOT NULL | `csv`, `email`, `manual` |
| `input_file_url` | `text` | | Encrypted S3/Supabase storage URL |
| `input_period_start` | `date` | | Data date range start |
| `input_period_end` | `date` | | Data date range end |
| `tools_count` | `integer` | | Number of tools detected |
| `total_monthly_spend` | `numeric(10,2)` | | Total detected monthly SaaS spend |
| `potential_monthly_savings` | `numeric(10,2)` | | Sum of all recommendation savings |
| `ai_model_used` | `text` | | e.g. `claude-3-5-sonnet-20241022` |
| `processing_time_ms` | `integer` | | AI analysis duration |
| `report_url` | `text` | | URL to generated PDF report |
| `error_message` | `text` | | Failure reason if status=failed |
| `created_at` | `timestamptz` | DEFAULT `now()` | |
| `completed_at` | `timestamptz` | | When analysis finished |

---

### `saas_tools`

Individual SaaS tools detected within an analysis.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK | Tool detection ID |
| `analysis_id` | `uuid` | FK → `analyses.id`, NOT NULL | Parent analysis |
| `company_id` | `uuid` | FK → `companies.id` | Denormalized for query efficiency |
| `tool_name` | `text` | NOT NULL | e.g. `Slack`, `Notion` |
| `tool_slug` | `text` | | Normalized: `slack`, `notion` |
| `category` | `text` | | `Communication`, `Project Management`, `CRM`, etc. |
| `vendor` | `text` | | Vendor/company name |
| `monthly_cost` | `numeric(10,2)` | | Detected monthly cost |
| `annual_cost` | `numeric(10,2)` | | Detected or projected annual cost |
| `billing_frequency` | `text` | | `monthly`, `annual`, `one-time` |
| `status` | `text` | | `active`, `redundant`, `underused`, `included` |
| `usage_score` | `integer` | | 0-100 estimated usage score |
| `last_detected_at` | `date` | | Last billing date seen |
| `overlap_with` | `text[]` | | Array of overlapping tool slugs |
| `raw_transaction_desc` | `text` | | Original billing description |
| `created_at` | `timestamptz` | DEFAULT `now()` | |

**Index:** `(analysis_id)`, `(company_id, tool_slug)`

---

### `recommendations`

AI-generated optimization recommendations per analysis.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK | Recommendation ID |
| `analysis_id` | `uuid` | FK → `analyses.id`, NOT NULL | Parent analysis |
| `company_id` | `uuid` | FK → `companies.id` | Denormalized |
| `type` | `text` | NOT NULL | `cancel`, `consolidate`, `downgrade`, `negotiate`, `switch` |
| `priority` | `text` | NOT NULL | `high`, `medium`, `low` |
| `title` | `text` | NOT NULL | Short action title |
| `description` | `text` | | Detailed AI explanation |
| `current_tool_id` | `uuid` | FK → `saas_tools.id` | Tool being replaced/cancelled |
| `current_tool_name` | `text` | | Denormalized tool name |
| `current_monthly_cost` | `numeric(10,2)` | | Current cost |
| `alternative_tool_name` | `text` | | Recommended alternative |
| `alternative_monthly_cost` | `numeric(10,2)` | | Alternative cost |
| `monthly_savings` | `numeric(10,2)` | NOT NULL | Projected monthly savings |
| `annual_savings` | `numeric(10,2)` | GENERATED | `monthly_savings * 12` |
| `effort_level` | `text` | | `low`, `medium`, `high` |
| `implementation_steps` | `jsonb` | | Array of step instructions |
| `estimated_days` | `integer` | | Estimated days to implement |
| `is_dismissed` | `boolean` | DEFAULT `false` | User dismissed this rec |
| `is_implemented` | `boolean` | DEFAULT `false` | User marked as done |
| `implemented_at` | `timestamptz` | | When user marked complete |
| `created_at` | `timestamptz` | DEFAULT `now()` | |

**Index:** `(analysis_id)`, `(company_id, is_dismissed, is_implemented)`, `(priority)`

---

### `waitlist`

Pre-launch email collection (temporary, migrates to `users`/`companies` at launch).

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `uuid` | PK | Entry ID |
| `email` | `text` | UNIQUE, NOT NULL | Email address |
| `company_name` | `text` | | Optional company name |
| `company_size` | `text` | | Size bucket |
| `source` | `text` | DEFAULT `'landing-page'` | Signup source |
| `converted_at` | `timestamptz` | | When converted to full user |
| `created_at` | `timestamptz` | DEFAULT `now()` | |

---

## Key Relationships

```sql
-- A company has many users
companies 1 ── * users

-- A company has one active subscription
companies 1 ── 1 subscriptions

-- A company has many analyses over time
companies 1 ── * analyses

-- Each analysis contains many detected tools
analyses 1 ── * saas_tools

-- Each analysis generates recommendations
analyses 1 ── * recommendations

-- Recommendations reference detected tools
saas_tools 1 ── * recommendations (via current_tool_id)
```

---

## Row-Level Security (RLS) Policies

All tables protected by Supabase RLS:

```sql
-- Users can only see their company's data
CREATE POLICY "company_isolation" ON analyses
  USING (company_id = (SELECT company_id FROM users WHERE id = auth.uid()));

-- Applied to: analyses, saas_tools, recommendations, subscriptions
```

---

## Phase 2 Additions (planned)

- `integrations` — Connected API sources (QuickBooks, Ramp, Brex)
- `price_alerts` — Vendor price change monitoring
- `benchmarks` — Industry pricing reference data
- `renewal_calendar` — Subscription renewal tracking

---

*Schema version: 1.0.0 | StackSmart Phase 1*
