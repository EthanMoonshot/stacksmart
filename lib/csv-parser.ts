import { SaaSTool, BILLING_FREQUENCIES, CATEGORIES } from "./types";

export interface ParseError {
  row: number;
  message: string;
}

export interface ParseResult {
  tools: SaaSTool[];
  errors: ParseError[];
}

const REQUIRED_HEADERS = ["tool name", "cost", "billing frequency", "category"];

function normalizeHeader(header: string): string {
  return header.replace(/^\uFEFF/, "").trim().toLowerCase().replace(/[_-]/g, " ");
}

function matchFrequency(value: string): SaaSTool["billingFrequency"] | null {
  const v = value.trim().toLowerCase();
  if (!v) return "monthly";
  if (v.includes("month")) return "monthly";
  if (v.includes("quarter") || v === "qtr") return "quarterly";
  if (v.includes("annual") || v.includes("year")) return "annually";

  for (const freq of BILLING_FREQUENCIES) {
    if (v === freq || v.startsWith(freq.slice(0, 5))) return freq;
  }

  return null;
}

function matchCategory(value: string): string | null {
  const v = value.trim().toLowerCase();
  for (const cat of CATEGORIES) {
    if (cat.toLowerCase() === v) return cat;
  }
  for (const cat of CATEGORIES) {
    if (cat.toLowerCase().includes(v) || v.includes(cat.toLowerCase())) return cat;
  }
  return null;
}

function parseCost(rawValue: string | undefined): number | null {
  if (!rawValue) return null;
  const trimmed = rawValue.trim();
  if (!trimmed) return null;

  const isNegativeByParens = /^\(.*\)$/.test(trimmed);
  const normalized = trimmed.replace(/[,$\s]/g, "").replace(/^\((.*)\)$/, "-$1");
  const value = Number.parseFloat(normalized);

  if (Number.isNaN(value)) return null;
  if (isNegativeByParens || value < 0) return null;
  return value;
}

export function parseCSV(csvText: string): ParseResult {
  const errors: ParseError[] = [];
  const tools: SaaSTool[] = [];

  const lines = csvText.replace(/^\uFEFF/, "").split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length < 2) {
    errors.push({ row: 0, message: "CSV must have a header row and at least one data row." });
    return { tools, errors };
  }

  const headers = parseCSVLine(lines[0]).map(normalizeHeader);
  const headerMap: Record<string, number> = {};

  for (const required of REQUIRED_HEADERS) {
    const idx = headers.findIndex((h) => h.includes(required.replace("tool ", "")) || h === required);
    if (idx === -1) {
      const flexIdx = headers.findIndex((h) => {
        if (required === "tool name") return h.includes("tool") || h.includes("name") || h.includes("software") || h.includes("service") || h.includes("vendor");
        if (required === "cost") return h.includes("cost") || h.includes("price") || h.includes("amount") || h.includes("spend") || h.includes("total");
        if (required === "billing frequency") return h.includes("billing") || h.includes("frequency") || h.includes("cycle") || h.includes("period") || h.includes("cadence");
        if (required === "category") return h.includes("category") || h.includes("type") || h.includes("department");
        return false;
      });
      if (flexIdx === -1) {
        errors.push({ row: 1, message: `Missing required column: "${required}". Found columns: ${headers.join(", ")}` });
      } else {
        headerMap[required] = flexIdx;
      }
    } else {
      headerMap[required] = idx;
    }
  }

  if (errors.length > 0) return { tools, errors };

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const rowNum = i + 1;

    const toolName = values[headerMap["tool name"]]?.trim();
    if (!toolName) {
      errors.push({ row: rowNum, message: "Tool name is empty." });
      continue;
    }

    const cost = parseCost(values[headerMap["cost"]]);
    if (cost === null) {
      errors.push({ row: rowNum, message: `Invalid cost "${values[headerMap["cost"]]}" for "${toolName}".` });
      continue;
    }

    const freqRaw = values[headerMap["billing frequency"]]?.trim() || "monthly";
    const billingFrequency = matchFrequency(freqRaw);
    if (!billingFrequency) {
      errors.push({ row: rowNum, message: `Invalid billing frequency "${freqRaw}" for "${toolName}". Use: monthly, quarterly, or annually.` });
      continue;
    }

    const catRaw = values[headerMap["category"]]?.trim() || "Other";
    const category = matchCategory(catRaw) || "Other";

    tools.push({
      id: `csv_${Date.now()}_${i}`,
      toolName,
      cost,
      billingFrequency,
      category,
    });
  }

  return { tools, errors };
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}
