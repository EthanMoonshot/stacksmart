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
const SUPPORTED_DELIMITERS = [",", ";", "\t"] as const;

function normalizeHeader(header: string): string {
  return header.replace(/^\uFEFF/, "").trim().toLowerCase().replace(/[_-]/g, " ");
}

function normalizeLooseValue(value: string) {
  return value.trim().toLowerCase().replace(/[_-]/g, " ").replace(/\s+/g, " ");
}

function matchFrequency(value: string): SaaSTool["billingFrequency"] | null {
  const v = normalizeLooseValue(value);
  if (!v) return "monthly";

  const monthlyMatchers = ["month", "monthly", "mo", "mth", "per month"];
  if (monthlyMatchers.some((matcher) => v === matcher || v.includes(matcher))) return "monthly";

  const quarterlyMatchers = ["quarter", "quarterly", "qtr", "q1", "q2", "q3", "q4", "every 3 months"];
  if (quarterlyMatchers.some((matcher) => v === matcher || v.includes(matcher))) return "quarterly";

  const annualMatchers = ["annual", "annually", "year", "yearly", "yr", "per year", "12 months"];
  if (annualMatchers.some((matcher) => v === matcher || v.includes(matcher))) return "annually";

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
  const normalized = trimmed
    .replace(/^\((.*)\)$/, "-$1")
    .replace(/\b(?:usd|aud|cad|eur|gbp|nzd)\b/gi, "")
    .replace(/[^0-9.-]/g, "");
  const value = Number.parseFloat(normalized);

  if (Number.isNaN(value)) return null;
  if (isNegativeByParens || value < 0) return null;
  return value;
}

export function parseCSV(csvText: string): ParseResult {
  const errors: ParseError[] = [];
  const tools: SaaSTool[] = [];

  const lines = csvText.replace(/^\uFEFF/, "").split(/\r?\n/);
  if (lines.every((line) => line.trim() === "")) {
    errors.push({ row: 0, message: "CSV file is empty." });
    return { tools, errors };
  }

  const nonEmptyLines = lines.filter((line) => line.trim() !== "");
  if (nonEmptyLines.length < 2) {
    errors.push({ row: 0, message: "CSV must have a header row and at least one data row." });
    return { tools, errors };
  }

  const headerLine = nonEmptyLines[0];
  const delimiter = detectDelimiter(headerLine, nonEmptyLines[1]);
  const parsedHeader = parseCSVLine(headerLine, delimiter);
  if (parsedHeader.malformed) {
    errors.push({ row: 1, message: "Header row contains mismatched quotes." });
    return { tools, errors };
  }

  const headers = parsedHeader.values.map(normalizeHeader);
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

  for (let i = 1; i < nonEmptyLines.length; i++) {
    const parsedRow = parseCSVLine(nonEmptyLines[i], delimiter);
    const rowNum = i + 1;

    if (parsedRow.malformed) {
      errors.push({ row: rowNum, message: "Row contains mismatched quotes." });
      continue;
    }

    const values = parsedRow.values;
    const expectedColumnCount = headers.length;
    if (values.length !== expectedColumnCount) {
      errors.push({ row: rowNum, message: `Expected ${expectedColumnCount} columns, found ${values.length}.` });
      continue;
    }

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

function detectDelimiter(...sampleLines: Array<string | undefined>): string {
  let bestDelimiter = ",";
  let bestScore = -1;

  for (const delimiter of SUPPORTED_DELIMITERS) {
    const score = sampleLines.reduce((sum, line) => sum + countDelimiter(line || "", delimiter), 0);
    if (score > bestScore) {
      bestDelimiter = delimiter;
      bestScore = score;
    }
  }

  return bestDelimiter;
}

function countDelimiter(line: string, delimiter: string) {
  let count = 0;
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      count += 1;
    }
  }

  return count;
}

function parseCSVLine(line: string, delimiter = ","): { values: string[]; malformed: boolean } {
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
    } else if (char === delimiter && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return { values: result, malformed: inQuotes };
}
