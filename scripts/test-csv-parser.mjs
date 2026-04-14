import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

async function transpileModuleToFile(sourcePath, targetPath) {
  const source = await fs.readFile(sourcePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
    },
    fileName: path.basename(sourcePath),
  });
  const rewritten = output.outputText.replace(/from \"\.\/types\"/g, 'from "./types.js"');
  await fs.writeFile(targetPath, rewritten, "utf8");
}

const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "stacksmart-csv-parser-"));
await transpileModuleToFile(path.resolve("lib/types.ts"), path.join(tempDir, "types.js"));
await transpileModuleToFile(
  path.resolve("lib/csv-parser.ts"),
  path.join(tempDir, "csv-parser.js"),
);

const { parseCSV } = await import(pathToFileURL(path.join(tempDir, "csv-parser.js")).href);

const valid = parseCSV(`Tool Name,Cost,Billing Frequency,Category\nSlack,$99.50,monthly,Communication`);
assert.equal(valid.errors.length, 0);
assert.equal(valid.tools.length, 1);
assert.equal(valid.tools[0].toolName, "Slack");
assert.equal(valid.tools[0].cost, 99.5);
assert.equal(valid.tools[0].billingFrequency, "monthly");

const malformed = parseCSV(`Tool Name,Cost,Billing Frequency,Category\n"Slack,100,monthly,Communication`);
assert.equal(malformed.tools.length, 0);
assert.match(malformed.errors[0]?.message || "", /mismatched quotes/i);

const missingColumns = parseCSV(`Tool Name,Cost,Category\nSlack,100,Communication`);
assert.match(missingColumns.errors[0]?.message || "", /missing required column/i);

const oddHeaders = parseCSV(`Vendor,Amount,Cadence,Department\nNotion,AUD 120,month,Documentation`);
assert.equal(oddHeaders.errors.length, 0);
assert.equal(oddHeaders.tools[0].toolName, "Notion");
assert.equal(oddHeaders.tools[0].cost, 120);
assert.equal(oddHeaders.tools[0].billingFrequency, "monthly");

const billingVariants = parseCSV(`Tool Name,Cost,Billing Frequency,Category\nZoom,300,qtr,Communication\nFigma,1200,yearly,Design\nLinear,50,mo,Development`);
assert.equal(billingVariants.errors.length, 0);
assert.deepEqual(
  billingVariants.tools.map((tool) => tool.billingFrequency),
  ["quarterly", "annually", "monthly"],
);

const empty = parseCSV("");
assert.match(empty.errors[0]?.message || "", /empty/i);

const invalidTypePayload = parseCSV(`this is not a csv file`);
assert.match(invalidTypePayload.errors[0]?.message || "", /header row and at least one data row/i);

const semicolonDelimited = parseCSV(`Tool Name;Cost;Billing Frequency;Category\nSlack;100;monthly;Communication`);
assert.equal(semicolonDelimited.errors.length, 0);
assert.equal(semicolonDelimited.tools[0].toolName, "Slack");

const tabDelimited = parseCSV(`Tool Name\tCost\tBilling Frequency\tCategory\nNotion\t24\tquarterly\tDocumentation`);
assert.equal(tabDelimited.errors.length, 0);
assert.equal(tabDelimited.tools[0].billingFrequency, "quarterly");

const unevenColumns = parseCSV(`Tool Name,Cost,Billing Frequency,Category\nSlack,100,monthly`);
assert.match(unevenColumns.errors[0]?.message || "", /expected 4 columns, found 3/i);

console.log("csv parser tests passed");
