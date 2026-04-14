import { Pool, type PoolClient, type QueryResultRow } from "pg";

function cleanEnvValue(value?: string) {
  if (!value) return value;
  const normalized = value.replace(/\\n/g, "").replace(/\\r/g, "").trim();
  if (
    (normalized.startsWith('"') && normalized.endsWith('"')) ||
    (normalized.startsWith("'") && normalized.endsWith("'"))
  ) {
    return normalized.slice(1, -1).replace(/\\n/g, "").replace(/\\r/g, "").trim();
  }
  return normalized;
}

const DATABASE_URL = cleanEnvValue(process.env.DATABASE_URL);

declare global {
  // eslint-disable-next-line no-var
  var __stacksmartPgPool: Pool | undefined;
}

function getSslConfig() {
  const sslMode = cleanEnvValue(process.env.PGSSLMODE);
  if (sslMode === "disable") return false;
  if (sslMode === "require" || sslMode === "no-verify") {
    return { rejectUnauthorized: false };
  }
  if (
    DATABASE_URL?.includes("supabase.com") ||
    DATABASE_URL?.includes("supabase.co") ||
    DATABASE_URL?.includes("pooler.supabase.com") ||
    DATABASE_URL?.includes("pooler.supabase.co")
  ) {
    return { rejectUnauthorized: false };
  }
  return undefined;
}

function createPool() {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured. Set it to your Supabase Postgres connection string.");
  }

  const sslConfig = getSslConfig();
  const shouldBypassTlsValidation =
    cleanEnvValue(process.env.PGSSLMODE) === "no-verify" ||
    (typeof sslConfig === "object" && sslConfig?.rejectUnauthorized === false);

  if (shouldBypassTlsValidation) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  return new Pool({
    connectionString: DATABASE_URL,
    ssl: sslConfig,
  });
}

function getPool() {
  if (!global.__stacksmartPgPool) {
    global.__stacksmartPgPool = createPool();
  }

  return global.__stacksmartPgPool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(text: string, values?: unknown[]) {
  return getPool().query<T>(text, values);
}

export async function withTransaction<T>(callback: (client: PoolClient) => Promise<T>) {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
