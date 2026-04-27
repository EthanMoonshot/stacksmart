import { spawn } from "node:child_process";

type ProspectInsertArgs = {
  source_tag: string;
  company_name: string;
  website?: string;
  source_url?: string;
  country?: string;
  classification?: string;
  icp_score?: number;
  status?: string;
  enrichment_json?: string;
  metadata_json?: string;
};

type ContactInsertArgs = {
  prospect_id: number;
  name?: string;
  title?: string;
  email?: string;
  linkedin_url?: string;
  phone?: string;
  is_primary?: boolean;
  metadata_json?: string;
};

type McpResponse<T> = {
  jsonrpc: "2.0";
  id: number;
  result?: { content?: Array<{ type: string; text?: string }> };
  error?: { code: number; message: string };
};

const LEADS_DB_SERVER_PATH =
  process.env.FLAREX_GTM_LEADS_DB_SERVER_PATH || "/home/justin/projects/flarex-gtm-engine/mcp/leads_db_server.py";

function deriveDomain(email: string) {
  const trimmed = email.trim().toLowerCase();
  const at = trimmed.lastIndexOf("@");
  if (at === -1) return null;
  const domain = trimmed.slice(at + 1).trim();
  return domain || null;
}

function domainToCompanyName(domain: string) {
  const base = domain.replace(/^www\./, "").split(".")[0] || domain;
  return (
    base
      .split(/[-_]/g)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ") || domain
  );
}

async function callTool<T = unknown>(name: string, args: Record<string, unknown>) {
  const request = JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: { name, arguments: args },
  });

  const raw = await new Promise<string>((resolve, reject) => {
    const child = spawn("python3", [LEADS_DB_SERVER_PATH], {
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);

    child.on("close", (code) => {
      if (code !== 0 && !stdout.trim()) {
        reject(new Error(`leads-db server exited ${code}: ${stderr.trim()}`));
        return;
      }
      resolve(stdout.trim());
    });

    child.stdin.write(`${request}\n`);
    child.stdin.end();
  });

  const line = raw
    .split(/\r?\n/)
    .map((value) => value.trim())
    .find((value) => value.startsWith("{"));

  if (!line) {
    throw new Error("leads-db server returned no JSON response");
  }

  const payload = JSON.parse(line) as McpResponse<T>;
  if (payload.error) {
    throw new Error(payload.error.message || `leads-db tool call failed for ${name}`);
  }

  const text = payload.result?.content?.[0]?.text;
  if (!text) return null as T;
  return JSON.parse(text) as T;
}

export async function captureInboundLead(args: {
  email: string;
  type: string;
  location?: string;
  pageUrl?: string;
  referrer?: string;
  utm?: Record<string, string | null | undefined>;
  userAgent?: string | null;
}) {
  const domain = deriveDomain(args.email);
  if (!domain) {
    throw new Error("Could not derive company domain from email.");
  }

  const companyName = domainToCompanyName(domain);
  const website = `https://${domain}/`;
  const capturedAt = new Date().toISOString();

  const prospectMetadata = {
    capture_type: args.type,
    capture_location: args.location || null,
    page_url: args.pageUrl || null,
    referrer: args.referrer || null,
    utm: args.utm || {},
    captured_at: capturedAt,
    user_agent: args.userAgent || null,
    source: "stacksmart_inline_lead_capture",
  };

  const contactMetadata = {
    capture_type: args.type,
    capture_location: args.location || null,
    page_url: args.pageUrl || null,
    captured_at: capturedAt,
    source: "stacksmart_inline_lead_capture",
  };

  const prospectResult = await callTool<{ prospect: { id: number } }>("prospect_upsert", {
    source_tag: "farm1_inbound_capture",
    company_name: companyName,
    website,
    status: "raw",
    metadata_json: JSON.stringify(prospectMetadata),
  } satisfies ProspectInsertArgs);

  const prospectId = prospectResult?.prospect?.id;
  if (!prospectId) {
    throw new Error("Prospect upsert did not return a prospect id.");
  }

  const existingContacts = await callTool<{ contacts: Array<{ id: number; email_normalized?: string | null }> }>(
    "contact_query",
    {
      prospect_id: prospectId,
      email_normalized: args.email,
      limit: 5,
    },
  );

  const existing = existingContacts?.contacts?.[0];
  if (existing?.id) {
    return {
      prospectId,
      contactId: existing.id,
      dedupedContact: true,
    };
  }

  const contactResult = await callTool<{ contact: { id: number } }>("contact_insert", {
    prospect_id: prospectId,
    email: args.email,
    is_primary: true,
    metadata_json: JSON.stringify(contactMetadata),
  } satisfies ContactInsertArgs);

  return {
    prospectId,
    contactId: contactResult?.contact?.id || null,
    dedupedContact: false,
  };
}
