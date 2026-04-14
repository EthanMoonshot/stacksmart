import { query } from "@/lib/db";

export interface SubscriptionRecord {
  customerId: string;
  email: string;
  status: "inactive" | "pending" | "active" | "canceled" | "past_due";
  planId: string;
  planName: string;
  billingInterval: "month" | "year" | "one_time";
  mode: "payment" | "subscription";
  amount: number;
  currency: string;
  stripeSessionId?: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  activatedAt?: string;
  updatedAt: string;
}

const DEFAULT_CUSTOMER_ID = "demo-user";

type SubscriptionRow = {
  customer_id: string;
  email: string;
  status: SubscriptionRecord["status"];
  plan_id: string;
  plan_name: string;
  billing_interval: SubscriptionRecord["billingInterval"];
  mode: SubscriptionRecord["mode"];
  amount: number | string;
  currency: string;
  stripe_session_id: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  activated_at: Date | string | null;
  updated_at: Date | string;
};

function mapSubscription(row: SubscriptionRow): SubscriptionRecord {
  return {
    customerId: row.customer_id,
    email: row.email,
    status: row.status,
    planId: row.plan_id,
    planName: row.plan_name,
    billingInterval: row.billing_interval,
    mode: row.mode,
    amount: Number(row.amount),
    currency: row.currency,
    stripeSessionId: row.stripe_session_id ?? undefined,
    stripeCustomerId: row.stripe_customer_id ?? undefined,
    stripeSubscriptionId: row.stripe_subscription_id ?? undefined,
    activatedAt: row.activated_at ? new Date(row.activated_at).toISOString() : undefined,
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

export async function readSubscriptions(): Promise<SubscriptionRecord[]> {
  const result = await query<SubscriptionRow>(`SELECT * FROM subscriptions ORDER BY updated_at DESC`);
  return result.rows.map(mapSubscription);
}

export async function getSubscriptionForCustomer(customerId: string) {
  const result = await query<SubscriptionRow>(
    `SELECT * FROM subscriptions WHERE customer_id = $1 ORDER BY updated_at DESC LIMIT 1`,
    [customerId],
  );
  return result.rows[0] ? mapSubscription(result.rows[0]) : null;
}

export async function getSubscriptionBySessionId(stripeSessionId: string) {
  const result = await query<SubscriptionRow>(
    `SELECT * FROM subscriptions WHERE stripe_session_id = $1 ORDER BY updated_at DESC LIMIT 1`,
    [stripeSessionId],
  );
  return result.rows[0] ? mapSubscription(result.rows[0]) : null;
}

export async function getCurrentSubscription(customerId = DEFAULT_CUSTOMER_ID) {
  return getSubscriptionForCustomer(customerId);
}

export async function upsertSubscription(nextRecord: SubscriptionRecord) {
  await query(
    `INSERT INTO subscriptions (
      customer_id,
      email,
      status,
      plan_id,
      plan_name,
      billing_interval,
      mode,
      amount,
      currency,
      stripe_session_id,
      stripe_customer_id,
      stripe_subscription_id,
      activated_at,
      updated_at
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
    )
    ON CONFLICT (customer_id)
    DO UPDATE SET
      email = EXCLUDED.email,
      status = EXCLUDED.status,
      plan_id = EXCLUDED.plan_id,
      plan_name = EXCLUDED.plan_name,
      billing_interval = EXCLUDED.billing_interval,
      mode = EXCLUDED.mode,
      amount = EXCLUDED.amount,
      currency = EXCLUDED.currency,
      stripe_session_id = EXCLUDED.stripe_session_id,
      stripe_customer_id = EXCLUDED.stripe_customer_id,
      stripe_subscription_id = EXCLUDED.stripe_subscription_id,
      activated_at = EXCLUDED.activated_at,
      updated_at = EXCLUDED.updated_at`,
    [
      nextRecord.customerId,
      nextRecord.email,
      nextRecord.status,
      nextRecord.planId,
      nextRecord.planName,
      nextRecord.billingInterval,
      nextRecord.mode,
      nextRecord.amount,
      nextRecord.currency,
      nextRecord.stripeSessionId ?? null,
      nextRecord.stripeCustomerId ?? null,
      nextRecord.stripeSubscriptionId ?? null,
      nextRecord.activatedAt ?? null,
      nextRecord.updatedAt,
    ],
  );

  return nextRecord;
}

export { DEFAULT_CUSTOMER_ID };
