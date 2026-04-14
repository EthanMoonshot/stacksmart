import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sendProductEmail } from "@/lib/email";
import { query, withTransaction } from "@/lib/db";
import { getSubscriptionForCustomer } from "@/lib/subscriptions";

const SESSION_COOKIE = "stacksmart_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 30;
const CODE_DURATION_MS = 1000 * 60 * 15;
const IS_PROD = process.env.NODE_ENV === "production";

function cleanEnvValue(value?: string) {
  if (!value) return value;
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

type SessionRecord = {
  token: string;
  customerId: string;
  email: string;
  createdAt: string;
  expiresAt: string;
};

type LoginCodeRecord = {
  email: string;
  customerId: string;
  codeHash: string;
  createdAt: string;
  expiresAt: string;
};

type SessionRow = {
  token: string;
  customer_id: string;
  email: string;
  created_at: Date | string;
  expires_at: Date | string;
};

type LoginCodeRow = {
  email: string;
  customer_id: string;
  code_hash: string;
  created_at: Date | string;
  expires_at: Date | string;
};

function mapSession(row: SessionRow): SessionRecord {
  return {
    token: row.token,
    customerId: row.customer_id,
    email: row.email,
    createdAt: new Date(row.created_at).toISOString(),
    expiresAt: new Date(row.expires_at).toISOString(),
  };
}

function mapLoginCode(row: LoginCodeRow): LoginCodeRecord {
  return {
    email: row.email,
    customerId: row.customer_id,
    codeHash: row.code_hash,
    createdAt: new Date(row.created_at).toISOString(),
    expiresAt: new Date(row.expires_at).toISOString(),
  };
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function buildCustomerId(email: string) {
  return normalizeEmail(email);
}

function hashCode(email: string, code: string) {
  return crypto.createHash("sha256").update(`${normalizeEmail(email)}:${code}`).digest("hex");
}

function generateNumericCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function createLoginCode(emailInput: string) {
  const email = normalizeEmail(emailInput);
  const customerId = buildCustomerId(email);
  const code = generateNumericCode();
  const now = Date.now();
  const createdAt = new Date(now).toISOString();
  const expiresAt = new Date(now + CODE_DURATION_MS).toISOString();

  await withTransaction(async (client) => {
    await client.query(`DELETE FROM login_codes WHERE email = $1 OR expires_at <= NOW()`, [email]);
    await client.query(
      `INSERT INTO login_codes (email, customer_id, code_hash, created_at, expires_at)
       VALUES ($1, $2, $3, $4, $5)`,
      [email, customerId, hashCode(email, code), createdAt, expiresAt],
    );
  });

  const appUrl = cleanEnvValue(process.env.NEXT_PUBLIC_APP_URL) || "http://localhost:3000";
  const loginUrl = `${appUrl}/login?email=${encodeURIComponent(email)}&code=${code}`;
  const allowDevCodeFallback = process.env.NODE_ENV !== "production" || process.env.STACKSMART_FORCE_DEV_LOGIN === "1";
  const sendResult = await sendProductEmail({
    to: email,
    subject: "Your StackSmart sign-in code",
    heading: "Use this code to access your StackSmart workspace.",
    body: `Your one-time sign-in code is ${code}. It expires in 15 minutes. If you prefer, you can use the secure sign-in link below.`,
    ctaLabel: "Sign in to StackSmart",
    ctaHref: loginUrl,
  }).catch((error) => ({ skipped: true, reason: error instanceof Error ? error.message : "email_send_failed" }));

  const emailSkipped = "skipped" in sendResult && sendResult.skipped;

  return {
    email,
    customerId,
    code,
    delivered: !emailSkipped,
    deliveryReason: emailSkipped ? sendResult.reason : null,
    exposeDevCode: allowDevCodeFallback,
  };
}

export async function createSession(emailInput: string) {
  const email = normalizeEmail(emailInput);
  const customerId = buildCustomerId(email);
  const token = crypto.randomBytes(32).toString("hex");
  const now = Date.now();
  const createdAt = new Date(now).toISOString();
  const expiresAt = new Date(now + SESSION_DURATION_MS).toISOString();

  await query(`DELETE FROM auth_sessions WHERE expires_at <= NOW()`);
  await query(
    `INSERT INTO auth_sessions (token, customer_id, email, created_at, expires_at)
     VALUES ($1, $2, $3, $4, $5)`,
    [token, customerId, email, createdAt, expiresAt],
  );

  return {
    token,
    customerId,
    email,
    expiresAt,
  };
}

export async function consumeLoginCode(emailInput: string, code: string) {
  const email = normalizeEmail(emailInput);
  const codeHash = hashCode(email, code);

  const matchingRecord = await withTransaction(async (client) => {
    await client.query(`DELETE FROM login_codes WHERE expires_at <= NOW()`);

    const result = await client.query<LoginCodeRow>(
      `DELETE FROM login_codes
       WHERE email = $1
         AND code_hash = $2
         AND expires_at > NOW()
       RETURNING email, customer_id, code_hash, created_at, expires_at`,
      [email, codeHash],
    );

    return result.rows[0] ? mapLoginCode(result.rows[0]) : null;
  });

  if (!matchingRecord) return null;

  return createSession(email);
}

export async function getCurrentSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const result = await query<SessionRow>(
    `SELECT token, customer_id, email, created_at, expires_at
     FROM auth_sessions
     WHERE token = $1 AND expires_at > NOW()
     LIMIT 1`,
    [token],
  );

  if (result.rows.length === 0) {
    await query(`DELETE FROM auth_sessions WHERE expires_at <= NOW() OR token = $1`, [token]);
    return null;
  }

  return mapSession(result.rows[0]);
}

export async function clearCurrentSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return;

  await query(`DELETE FROM auth_sessions WHERE token = $1`, [token]);
  cookieStore.delete(SESSION_COOKIE);
}

export async function setSessionCookie(token: string, expiresAt: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: IS_PROD,
    path: "/",
    expires: new Date(expiresAt),
  });
}

export async function requireUser(options?: { next?: string }) {
  const session = await getCurrentSession();
  if (!session) {
    const next = options?.next || "/dashboard";
    redirect(`/login?next=${encodeURIComponent(next)}`);
  }
  return session;
}

export async function requirePaidUser(options?: { next?: string }) {
  const session = await requireUser(options);
  const subscription = await getSubscriptionForCustomer(session.customerId);
  const isPaid = subscription?.status === "active";

  if (!isPaid) {
    const next = options?.next || "/pricing";
    redirect(`/pricing?next=${encodeURIComponent(next)}&gated=1`);
  }

  return { session, subscription };
}

export async function getViewerAccess() {
  const session = await getCurrentSession();
  if (!session) return { session: null, subscription: null, isPaid: false };
  const subscription = await getSubscriptionForCustomer(session.customerId);
  return {
    session,
    subscription,
    isPaid: subscription?.status === "active",
  };
}
