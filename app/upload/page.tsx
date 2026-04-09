"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";
import { SaaSTool, CATEGORIES, BILLING_FREQUENCIES } from "@/lib/types";
import { parseCSV, ParseError } from "@/lib/csv-parser";
import { trackEvent } from "@/lib/analytics";

type Tab = "csv" | "manual" | "email";

const emptyTool = (): SaaSTool => ({
  id: `manual_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
  toolName: "",
  cost: 0,
  billingFrequency: "monthly",
  category: "Other",
});

export default function UploadPage() {
  const [tab, setTab] = useState<Tab>("csv");
  const [isDragging, setIsDragging] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [parseErrors, setParseErrors] = useState<ParseError[]>([]);
  const [previewTools, setPreviewTools] = useState<SaaSTool[]>([]);
  const [manualTools, setManualTools] = useState<SaaSTool[]>([emptyTool()]);
  const [saving, setSaving] = useState(false);
  const [emailParsingStatus, setEmailParsingStatus] = useState<"idle" | "waiting" | "processing">("idle");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const router = useRouter();

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // --- CSV handling ---
  const processCSV = useCallback(async (file: File) => {
    setCsvFile(file);
    setParseErrors([]);
    setPreviewTools([]);

    const text = await file.text();
    const result = parseCSV(text);

    if (result.errors.length > 0) {
      setParseErrors(result.errors);
    }
    if (result.tools.length > 0) {
      setPreviewTools(result.tools);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && file.name.endsWith(".csv")) {
        processCSV(file);
      } else {
        showToast("Please upload a .csv file.", "error");
      }
    },
    [processCSV]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (!file.name.endsWith(".csv")) {
        showToast("Please upload a .csv file.", "error");
        e.target.value = "";
        return;
      }
      processCSV(file);
    },
    [processCSV]
  );

  // --- Save tools ---
  const saveTools = async (tools: SaaSTool[], source: "csv" | "manual") => {
    const cleanedTools = tools
      .map((tool) => ({
        ...tool,
        toolName: tool.toolName.trim(),
        category: tool.category?.trim() || "Other",
        cost: Number(tool.cost),
      }))
      .filter((tool) => tool.toolName && Number.isFinite(tool.cost) && tool.cost >= 0);

    if (cleanedTools.length === 0) {
      showToast("Add at least one valid tool before saving.", "error");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/tools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tools: cleanedTools, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.message || "Failed to save.", "error");
        return;
      }
      const analyzeRes = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stackId: data.stack.id }),
      });

      if (!analyzeRes.ok) {
        const analyzeData = await analyzeRes.json().catch(() => ({}));
        showToast(analyzeData.message || "Saved tools, but analysis failed.", "error");
        return;
      }

      trackEvent("report_generated", { source, toolCount: cleanedTools.length });
      showToast(`Saved ${cleanedTools.length} tools successfully!`);
      // Navigate to analysis after brief delay so toast is visible
      setTimeout(() => router.push(`/analysis?stack=${data.stack.id}`), 1200);
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  const clearCsvState = () => {
    setCsvFile(null);
    setPreviewTools([]);
    setParseErrors([]);
  };

  // --- Manual entry helpers ---
  const updateManualTool = (index: number, field: keyof SaaSTool, value: string | number) => {
    setManualTools((prev) =>
      prev.map((t, i) => (i === index ? { ...t, [field]: value } : t))
    );
  };

  const addManualRow = () => {
    setManualTools((prev) => [...prev, emptyTool()]);
  };

  const removeManualRow = (index: number) => {
    setManualTools((prev) => (prev.length === 1 ? prev : prev.filter((_, i) => i !== index)));
  };

  const validManualTools = manualTools.filter((t) => t.toolName.trim() && t.cost >= 0);

  const tabs = [
    {
      id: "csv" as Tab,
      title: "Upload CSV",
      description: "Export from your bank, credit card, or expense tool",
      badge: "Fastest",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      id: "manual" as Tab,
      title: "Manual Entry",
      description: "Enter your tools and costs manually",
      badge: null,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      id: "email" as Tab,
      title: "Forward Invoices",
      description: "Forward billing emails to your@stacksmart.app",
      badge: null,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-lg shadow-xl text-sm flex items-center gap-2 animate-fade-in border ${
            toast.type === "success"
              ? "bg-green-900/80 border-green-500/30 text-green-200"
              : "bg-red-900/80 border-red-500/30 text-red-200"
          }`}
        >
          {toast.type === "success" ? (
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {toast.message}
        </div>
      )}

      <AppHeader
        title="Upload Billing Data"
        subtitle="Choose how you want to share your SaaS spend data"
      />

      {/* Tab selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative text-left p-5 rounded-xl border transition-all duration-200 ${
              tab === t.id
                ? "bg-brand-500/10 border-brand-500/50 text-brand-300"
                : "bg-dark-900 border-dark-800 text-dark-300 hover:border-dark-700 hover:text-white"
            }`}
          >
            {t.badge && (
              <span className="absolute top-3 right-3 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                {t.badge}
              </span>
            )}
            <div className={`mb-3 ${tab === t.id ? "text-brand-400" : "text-dark-400"}`}>
              {t.icon}
            </div>
            <div className="font-semibold text-white text-sm mb-1">{t.title}</div>
            <div className="text-dark-400 text-xs">{t.description}</div>
          </button>
        ))}
      </div>

      {/* ============= CSV TAB ============= */}
      {tab === "csv" && (
        <div className="space-y-6">
          {/* Drop zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-16 text-center transition-all duration-200 ${
              isDragging
                ? "border-brand-500 bg-brand-500/5"
                : csvFile
                ? "border-green-500 bg-green-500/5"
                : "border-dark-700 hover:border-dark-600 bg-dark-900"
            }`}
          >
            {csvFile ? (
              <>
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold">{csvFile.name}</p>
                <p className="text-dark-400 text-sm mt-1">
                  {previewTools.length} tools detected
                </p>
                <button
                  onClick={clearCsvState}
                  className="text-dark-500 hover:text-dark-300 text-xs mt-3 underline"
                >
                  Remove file
                </button>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-2xl bg-dark-800 border border-dark-700 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-1">Drop your CSV file here</p>
                <p className="text-dark-400 text-sm mb-1">or click to browse</p>
                <p className="text-dark-600 text-xs mb-4">
                  Required columns: tool name, cost, billing frequency, category
                </p>
                <label className="btn-secondary text-sm cursor-pointer inline-block px-4 py-2">
                  Choose File
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </label>
              </>
            )}
          </div>

          {/* Parse errors */}
          {parseErrors.length > 0 && (
            <div className="rounded-lg border border-red-500/30 bg-red-900/20 p-4 space-y-2">
              <p className="text-red-400 font-semibold text-sm">
                {parseErrors.length} error{parseErrors.length > 1 ? "s" : ""} found:
              </p>
              {parseErrors.map((err, i) => (
                <p key={i} className="text-red-300 text-xs">
                  Row {err.row}: {err.message}
                </p>
              ))}
            </div>
          )}

          {/* Preview table */}
          {previewTools.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">
                  Preview: {previewTools.length} tools detected
                </h3>
                <p className="text-dark-400 text-sm">
                  Total: $
                  {previewTools
                    .reduce((s, t) => s + t.cost, 0)
                    .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  /mo
                </p>
              </div>
              <div className="card overflow-x-auto p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-800 text-dark-500 text-xs uppercase tracking-wider">
                      <th className="text-left p-4">Tool</th>
                      <th className="text-left p-4">Category</th>
                      <th className="text-right p-4">Cost</th>
                      <th className="text-left p-4">Billing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewTools.map((tool) => (
                      <tr key={tool.id} className="border-b border-dark-800/50 hover:bg-dark-800/30">
                        <td className="p-4 text-white font-medium">{tool.toolName}</td>
                        <td className="p-4 text-dark-400">{tool.category}</td>
                        <td className="p-4 text-white text-right">${tool.cost.toFixed(2)}</td>
                        <td className="p-4 text-dark-400 capitalize">{tool.billingFrequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => saveTools(previewTools, "csv")}
                disabled={saving}
                className="btn-primary w-full text-center"
              >
                {saving ? "Saving..." : `Confirm & Save ${previewTools.length} Tools`}
              </button>
            </div>
          )}

          {previewTools.length === 0 && (
            <>
              <div className="rounded-xl border border-dark-700 bg-dark-900/80 p-5">
                <div className="flex flex-col gap-2">
                  <p className="text-white font-semibold text-sm">No uploaded data yet.</p>
                  <p className="text-dark-400 text-sm">
                    Upload a billing CSV to generate your first analysis. We no longer preload dummy report data into the workspace.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-dark-900 border border-dark-800">
                <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Bank-level security</p>
                  <p className="text-dark-400 text-xs mt-0.5">
                    Your data is encrypted in transit and at rest. We extract only SaaS tool names and amounts — never personal transaction data. SOC2 compliance in progress.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ============= MANUAL ENTRY TAB ============= */}
      {tab === "manual" && (
        <div className="space-y-6">
          <div className="card overflow-x-auto p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-800 text-dark-500 text-xs uppercase tracking-wider">
                  <th className="text-left p-4">Tool Name</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-right p-4">Cost ($)</th>
                  <th className="text-left p-4">Billing</th>
                  <th className="p-4 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {manualTools.map((tool, index) => (
                  <tr key={tool.id} className="border-b border-dark-800/50">
                    <td className="p-3">
                      <input
                        type="text"
                        value={tool.toolName}
                        onChange={(e) => updateManualTool(index, "toolName", e.target.value)}
                        placeholder="e.g. Slack"
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-white text-sm placeholder-dark-600 focus:border-brand-500 focus:outline-none"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={tool.category}
                        onChange={(e) => updateManualTool(index, "category", e.target.value)}
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-white text-sm focus:border-brand-500 focus:outline-none"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={tool.cost || ""}
                        onChange={(e) => updateManualTool(index, "cost", parseFloat(e.target.value) || 0)}
                        placeholder="0.00"
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-white text-sm text-right placeholder-dark-600 focus:border-brand-500 focus:outline-none"
                      />
                    </td>
                    <td className="p-3">
                      <select
                        value={tool.billingFrequency}
                        onChange={(e) => updateManualTool(index, "billingFrequency", e.target.value)}
                        className="w-full bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 text-white text-sm focus:border-brand-500 focus:outline-none"
                      >
                        {BILLING_FREQUENCIES.map((freq) => (
                          <option key={freq} value={freq}>
                            {freq.charAt(0).toUpperCase() + freq.slice(1)}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => removeManualRow(index)}
                        className="text-dark-600 hover:text-red-400 transition-colors"
                        title="Remove row"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={addManualRow} className="btn-secondary text-sm px-4 py-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Row
            </button>
            <span className="text-dark-500 text-sm">
              {validManualTools.length} valid tool{validManualTools.length !== 1 ? "s" : ""}
            </span>
          </div>

          <button
            onClick={() => saveTools(validManualTools, "manual")}
            disabled={saving || validManualTools.length === 0}
            className={`btn-primary w-full text-center ${validManualTools.length === 0 ? "opacity-60 pointer-events-none" : ""}`}
          >
            {saving ? "Saving..." : `Save ${validManualTools.length} Tool${validManualTools.length !== 1 ? "s" : ""}`}
          </button>

          <div className="rounded-xl border border-dark-700 bg-dark-900/70 px-4 py-3 text-sm text-dark-400">
            Manual entry starts empty by default so the first saved report always reflects real uploaded or entered data.
          </div>
        </div>
      )}

      {/* ============= EMAIL TAB ============= */}
      {tab === "email" && (
        <div className="space-y-6">
          <div className="card space-y-4">
            <h3 className="text-white font-semibold">Email Forwarding Setup</h3>
            <p className="text-dark-400 text-sm">
              Forward any SaaS billing or invoice emails to your unique StackSmart address. We&apos;ll automatically extract the tool name and cost.
            </p>

            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 flex items-center gap-3">
              <code className="text-brand-400 font-mono text-sm flex-1">
                invoices+acmecorp@stacksmart.app
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("invoices+acmecorp@stacksmart.app");
                  showToast("Email address copied!");
                }}
                className="btn-secondary text-xs px-3 py-1.5"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="card space-y-4">
            <h3 className="text-white font-semibold">How it works</h3>
            <ol className="space-y-3 text-sm text-dark-400">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span>Search your email for invoices from SaaS tools (Slack, Zoom, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span>Forward each invoice email to the address above</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span>We&apos;ll parse the invoices and build your tool list automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span>You&apos;ll get an email when your analysis is ready (usually within 24 hours)</span>
              </li>
            </ol>
          </div>

          {/* Parsing status */}
          <div className="card space-y-3">
            <h3 className="text-white font-semibold text-sm">Parsing Status</h3>
            <div className="flex items-center gap-3">
              {emailParsingStatus === "idle" && (
                <>
                  <div className="w-3 h-3 rounded-full bg-dark-600" />
                  <span className="text-dark-400 text-sm">No emails received yet</span>
                </>
              )}
              {emailParsingStatus === "waiting" && (
                <>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-yellow-300 text-sm">Waiting for emails...</span>
                </>
              )}
              {emailParsingStatus === "processing" && (
                <>
                  <div className="w-3 h-3 rounded-full bg-brand-400 animate-pulse" />
                  <span className="text-brand-300 text-sm">Processing invoices...</span>
                </>
              )}
            </div>
            <button
              onClick={() => {
                setEmailParsingStatus("waiting");
                showToast("Monitoring for forwarded emails...");
                setTimeout(() => setEmailParsingStatus("idle"), 5000);
              }}
              className="btn-secondary text-xs px-3 py-1.5"
            >
              Check for emails
            </button>
          </div>

          <div className="card bg-yellow-900/10 border-yellow-500/20">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <p className="text-yellow-300 text-sm font-medium">Coming soon</p>
                <p className="text-dark-400 text-xs mt-0.5">
                  Email parsing is under active development. For now, use CSV upload or manual entry for immediate results.
                </p>
              </div>
            </div>
          </div>

          <Link href="/upload" onClick={() => setTab("csv")} className="btn-secondary text-sm inline-block">
            Switch to CSV Upload →
          </Link>
        </div>
      )}
    </div>
  );
}
