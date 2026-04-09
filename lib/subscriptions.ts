import { promises as fs } from "fs";
import path from "path";

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

const SUBSCRIPTIONS_FILE = path.join(process.cwd(), "data", "subscriptions.json");
const DEFAULT_CUSTOMER_ID = "demo-user";
const IS_VERCEL = process.env.VERCEL === "1";

async function ensureFile() {
  if (IS_VERCEL) return;
  await fs.mkdir(path.dirname(SUBSCRIPTIONS_FILE), { recursive: true });
  try {
    await fs.access(SUBSCRIPTIONS_FILE);
  } catch {
    await fs.writeFile(SUBSCRIPTIONS_FILE, "[]");
  }
}

export async function readSubscriptions(): Promise<SubscriptionRecord[]> {
  if (IS_VERCEL) return [];
  await ensureFile();
  try {
    const raw = await fs.readFile(SUBSCRIPTIONS_FILE, "utf8");
    return JSON.parse(raw) as SubscriptionRecord[];
  } catch {
    return [];
  }
}

export async function writeSubscriptions(records: SubscriptionRecord[]) {
  if (IS_VERCEL) return;
  await ensureFile();
  await fs.writeFile(SUBSCRIPTIONS_FILE, JSON.stringify(records, null, 2));
}

export async function getCurrentSubscription(customerId = DEFAULT_CUSTOMER_ID) {
  const records = await readSubscriptions();
  const matching = records
    .filter((record) => record.customerId === customerId)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return matching[0] ?? null;
}

export async function upsertSubscription(nextRecord: SubscriptionRecord) {
  const records = await readSubscriptions();
  const index = records.findIndex((record) => record.customerId === nextRecord.customerId);

  if (index >= 0) {
    records[index] = nextRecord;
  } else {
    records.push(nextRecord);
  }

  await writeSubscriptions(records);
  return nextRecord;
}

export { DEFAULT_CUSTOMER_ID };
