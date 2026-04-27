create table if not exists subscriptions (
  customer_id text primary key,
  email text not null,
  status text not null check (status in ('inactive', 'pending', 'active', 'canceled', 'past_due')),
  plan_id text not null,
  plan_name text not null,
  billing_interval text not null check (billing_interval in ('month', 'year', 'one_time')),
  mode text not null check (mode in ('payment', 'subscription')),
  amount numeric(12,2) not null default 0,
  currency text not null default 'usd',
  stripe_session_id text,
  stripe_customer_id text,
  stripe_subscription_id text,
  activated_at timestamptz,
  updated_at timestamptz not null default now()
);

create index if not exists subscriptions_updated_at_idx on subscriptions (updated_at desc);
create unique index if not exists subscriptions_stripe_session_id_idx on subscriptions (stripe_session_id) where stripe_session_id is not null;
create unique index if not exists subscriptions_stripe_subscription_id_idx on subscriptions (stripe_subscription_id) where stripe_subscription_id is not null;

create table if not exists auth_sessions (
  token text primary key,
  customer_id text not null,
  email text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

create index if not exists auth_sessions_customer_id_idx on auth_sessions (customer_id);
create index if not exists auth_sessions_expires_at_idx on auth_sessions (expires_at);

create table if not exists login_codes (
  email text primary key,
  customer_id text not null,
  code_hash text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

create index if not exists login_codes_expires_at_idx on login_codes (expires_at);

create table if not exists tool_stacks (
  id text primary key,
  customer_id text not null,
  email text,
  tools jsonb not null,
  created_at timestamptz not null default now(),
  source text not null check (source in ('csv', 'manual', 'sample'))
);

create index if not exists tool_stacks_customer_id_idx on tool_stacks (customer_id, created_at desc);

create table if not exists analysis_results (
  id text primary key,
  stack_id text not null,
  customer_id text not null,
  analyzed_at timestamptz not null default now(),
  source text not null check (source in ('csv', 'manual', 'sample')),
  tool_count integer not null,
  monthly_spend numeric(12,2) not null,
  annual_spend numeric(12,2) not null,
  potential_monthly_savings numeric(12,2) not null,
  potential_annual_savings numeric(12,2) not null,
  analysis jsonb not null
);

create index if not exists analysis_results_customer_id_idx on analysis_results (customer_id, analyzed_at desc);

create table if not exists waitlist_entries (
  id text primary key,
  email text not null unique,
  company_name text,
  company_size text,
  created_at timestamptz not null default now(),
  source text not null default 'landing-page'
);

create index if not exists waitlist_entries_created_at_idx on waitlist_entries (created_at desc);

create table if not exists shared_reports (
  id text primary key,
  created_at timestamptz not null default now(),
  analysis jsonb not null
);

create index if not exists shared_reports_created_at_idx on shared_reports (created_at desc);

alter table subscriptions enable row level security;
alter table subscriptions force row level security;
revoke all privileges on table subscriptions from anon, authenticated;

alter table auth_sessions enable row level security;
alter table auth_sessions force row level security;
revoke all privileges on table auth_sessions from anon, authenticated;

alter table login_codes enable row level security;
alter table login_codes force row level security;
revoke all privileges on table login_codes from anon, authenticated;

alter table tool_stacks enable row level security;
alter table tool_stacks force row level security;
revoke all privileges on table tool_stacks from anon, authenticated;

alter table analysis_results enable row level security;
alter table analysis_results force row level security;
revoke all privileges on table analysis_results from anon, authenticated;

alter table waitlist_entries enable row level security;
alter table waitlist_entries force row level security;
revoke all privileges on table waitlist_entries from anon, authenticated;

alter table shared_reports enable row level security;
alter table shared_reports force row level security;
revoke all privileges on table shared_reports from anon, authenticated;
