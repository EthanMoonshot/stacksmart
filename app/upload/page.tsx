"use client";

import { useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";

const uploadMethods = [
  {
    id: "csv",
    title: "Upload CSV",
    description: "Export from your bank, credit card, or expense tool",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    badge: "Fastest",
  },
  {
    id: "email",
    title: "Forward Invoices",
    description: "Forward billing emails to your@stacksmart.io",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: null,
  },
  {
    id: "manual",
    title: "Manual Entry",
    description: "Enter your tools and costs manually",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    badge: null,
  },
];

const supportedSources = [
  "Chase Business", "American Express", "Capital One", "Bank of America",
  "Ramp", "Brex", "Expensify", "QuickBooks", "Xero", "FreshBooks",
];

export default function UploadPage() {
  const [selectedMethod, setSelectedMethod] = useState("csv");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith(".csv")) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div>
      <AppHeader
        title="Upload Billing Data"
        subtitle="Choose how you want to share your SaaS spend data"
      />

      {/* Upload method selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {uploadMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`relative text-left p-5 rounded-xl border transition-all duration-200 ${
              selectedMethod === method.id
                ? "bg-brand-500/10 border-brand-500/50 text-brand-300"
                : "bg-dark-900 border-dark-800 text-dark-300 hover:border-dark-700 hover:text-white"
            }`}
          >
            {method.badge && (
              <span className="absolute top-3 right-3 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                {method.badge}
              </span>
            )}
            <div className={`mb-3 ${selectedMethod === method.id ? "text-brand-400" : "text-dark-400"}`}>
              {method.icon}
            </div>
            <div className="font-semibold text-white text-sm mb-1">{method.title}</div>
            <div className="text-dark-400 text-xs">{method.description}</div>
          </button>
        ))}
      </div>

      {/* CSV Upload area */}
      {selectedMethod === "csv" && (
        <div className="space-y-6">
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-16 text-center transition-all duration-200 ${
              isDragging
                ? "border-brand-500 bg-brand-500/5"
                : uploadedFile
                ? "border-green-500 bg-green-500/5"
                : "border-dark-700 hover:border-dark-600 bg-dark-900"
            }`}
          >
            {uploadedFile ? (
              <>
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold">{uploadedFile}</p>
                <p className="text-dark-400 text-sm mt-1">File ready to analyze</p>
                <button onClick={() => setUploadedFile(null)} className="text-dark-500 hover:text-dark-300 text-xs mt-3 underline">
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
                <p className="text-dark-400 text-sm mb-4">or click to browse</p>
                <label className="btn-secondary text-sm cursor-pointer inline-block px-4 py-2">
                  Choose File
                  <input type="file" accept=".csv" className="hidden" onChange={(e) => {
                    if (e.target.files?.[0]) setUploadedFile(e.target.files[0].name);
                  }} />
                </label>
              </>
            )}
          </div>

          {/* Supported sources */}
          <div>
            <p className="text-dark-500 text-xs font-medium uppercase tracking-wider mb-3">Supported Sources</p>
            <div className="flex flex-wrap gap-2">
              {supportedSources.map((src) => (
                <span key={src} className="px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-dark-400 text-xs">
                  {src}
                </span>
              ))}
            </div>
          </div>

          {/* Security note */}
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

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="/analysis" className={`btn-primary flex-1 text-center ${!uploadedFile ? "opacity-60 pointer-events-none" : ""}`}>
              Analyze My Stack →
            </Link>
            {/* Demo mode */}
            <Link href="/analysis" className="btn-secondary text-sm px-4 py-3">
              Try with Sample Data
            </Link>
          </div>
        </div>
      )}

      {/* Email method */}
      {selectedMethod === "email" && (
        <div className="card space-y-4">
          <h3 className="text-white font-semibold">Forward your invoices</h3>
          <p className="text-dark-400 text-sm">Forward any billing or invoice emails to your unique StackSmart address. We'll automatically extract the tool and amount.</p>
          
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 flex items-center gap-3">
            <code className="text-brand-400 font-mono text-sm flex-1">invoices+acmecorp@stacksmart.io</code>
            <button className="btn-secondary text-xs px-3 py-1.5">Copy</button>
          </div>
          
          <p className="text-dark-500 text-xs">Takes 24 hours to process. You'll get an email when your analysis is ready.</p>
        </div>
      )}

      {/* Manual method */}
      {selectedMethod === "manual" && (
        <div className="card text-center py-12">
          <p className="text-dark-400 text-sm mb-4">Manual entry coming soon. Use CSV upload for now.</p>
          <button onClick={() => setSelectedMethod("csv")} className="btn-secondary text-sm">
            Switch to CSV Upload
          </button>
        </div>
      )}
    </div>
  );
}
