const { Client } = require('pg');

function clean(value) {
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

async function main() {
  const connectionString = clean(process.env.DATABASE_URL);
  const sslMode = clean(process.env.PGSSLMODE);

  if (!connectionString) {
    throw new Error('DATABASE_URL missing');
  }

  const client = new Client({
    connectionString,
    ssl: sslMode === 'require' ? { rejectUnauthorized: false } : undefined,
  });

  await client.connect();
  const result = await client.query('select now() as now');
  console.log(result.rows[0]);
  await client.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
