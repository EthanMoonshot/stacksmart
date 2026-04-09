import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sendProductEmail } from "@/lib/email";
import { getSubscriptionForCustomer } from "@/lib/subscriptions";

const SESSIONS_FILE = path.join(process.cwd(), "data", "sessions.json");
const CODES_FILE = path.join(process.cwd(), "data", "login-codes.json");
const SESSION_COOKIE = "stacksmart_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 30;
const CODE_DURATION_MS = 1000 * 60 * 15;
const IS_PROD = process.env.NODE_ENV === "production";

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

async function readJsonFile<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJsonFile(filePath: string, value: unknown) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(value, null, 2));
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
  const records = (await readJsonFile<LoginCodeRecord[]>(CODES_FILE, [])).filter(
    (record) => record.email !== email && new Date(record.expiresAt).getTime() > now,
  );

  const nextRecord: LoginCodeRecord = {
    email,
    customerId,
    codeHash: hashCode(email, code),
    createdAt: new Date(now).toISOString(),
    expiresAt: new Date(now + CODE_DURATION_MS).toISOString(),
  };

  records.push(nextRecord);
  await writeJsonFile(CODES_FILE, records);

  const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/login?email=${encodeURIComponent(email)}&code=${code}`;
  const sendResult = await sendProductEmail({
    to: email,
    subject: "Your StackSmart sign-in code",
    heading: "Use this code to access your StackSmart workspace.",
    body: `Your one-time sign-in code is ${code}. It expires in 15 minutes. If you prefer, you can use the secure sign-in link below.`,
    ctaLabel: "Sign in to StackSmart",
    ctaHref: loginUrl,
  });

  return {
    email,
    customerId,
    code,
    delivered: !("skipped" in sendResult && sendResult.skipped),
    deliveryReason: "skipped" in sendResult && sendResult.skipped ? sendResult.reason : null,
  };
}

export async function createSession(emailInput: string) {
  const email = normalizeEmail(emailInput);
  const customerId = buildCustomerId(email);
  const token = crypto.randomBytes(32).toString("hex");
  const now = Date.now();
  const sessions = (await readJsonFile<SessionRecord[]>(SESSIONS_FILE, [])).filter(
    (record) => new Date(record.expiresAt).getTime() > now,
  );

  sessions.push({
    token,
    customerId,
    email,
    createdAt: new Date(now).toISOString(),
    expiresAt: new Date(now + SESSION_DURATION_MS).toISOString(),
  });

  await writeJsonFile(SESSIONS_FILE, sessions);

  return {
    token,
    customerId,
    email,
    expiresAt: new Date(now + SESSION_DURATION_MS).toISOString(),
  };
}

export async function consumeLoginCode(emailInput: string, code: string) {
  const email = normalizeEmail(emailInput);
  const now = Date.now();
  const records = await readJsonFile<LoginCodeRecord[]>(CODES_FILE, []);
  const validRecord = records.find(
    (record) =>
      record.email === email &&
      record.codeHash === hashCode(email, code) &&
      new Date(record.expiresAt).getTime() > now,
  );

  if (!validRecord) return null;

  const remaining = records.filter((record) => record !== validRecord && new Date(record.expiresAt).getTime() > now);
  await writeJsonFile(CODES_FILE, remaining);
  return createSession(email);
}

export async function getCurrentSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const now = Date.now();
  const sessions = await readJsonFile<SessionRecord[]>(SESSIONS_FILE, []);
  const activeSessions = sessions.filter((record) => new Date(record.expiresAt).getTime() > now);
  const session = activeSessions.find((record) => record.token === token) || null;

  if (activeSessions.length !== sessions.length) {
    await writeJsonFile(SESSIONS_FILE, activeSessions);
  }

  return session;
}

export async function clearCurrentSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return;

  const sessions = await readJsonFile<SessionRecord[]>(SESSIONS_FILE, []);
  await writeJsonFile(
    SESSIONS_FILE,
    sessions.filter((record) => record.token !== token),
  );
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
