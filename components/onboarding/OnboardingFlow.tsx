"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const steps = [
  {
    title: "Upload your data",
    description: "Bring in your billing CSV, enter tools manually, or start with the sample stack.",
    ctaHref: "/upload",
    ctaLabel: "Go to upload",
  },
  {
    title: "See your analysis",
    description: "Distill detects overlaps, categories, and where the fastest savings live.",
    ctaHref: "/analysis",
    ctaLabel: "Open analysis",
  },
  {
    title: "Get your report",
    description: "Review the executive summary, share the report, and export a PDF for action.",
    ctaHref: "/report",
    ctaLabel: "View report",
  },
];

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  return (
    <div className="space-y-8 rounded-2xl border border-dark-800 bg-dark-900 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-400">Getting started</p>
          <h2 className="mt-2 text-2xl font-bold text-white">3 steps to your first savings report</h2>
        </div>
        <Link href="/dashboard" className="text-sm text-dark-400 hover:text-white">
          Skip for now →
        </Link>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between text-xs text-dark-500">
          <span>Progress</span>
          <span>{step + 1} / {steps.length}</span>
        </div>
        <div className="h-2 rounded-full bg-dark-800">
          <div className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {steps.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setStep(index)}
            className={`rounded-xl border p-4 text-left transition ${index === step ? "border-brand-500/40 bg-brand-500/10" : "border-dark-800 bg-dark-950 hover:border-dark-700"}`}
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-dark-700 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-xs text-dark-400">{item.description}</p>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-dark-800 bg-dark-950 p-6">
        <h3 className="text-2xl font-bold text-white">{steps[step].title}</h3>
        <p className="mt-3 max-w-2xl text-dark-400">{steps[step].description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={steps[step].ctaHref} className="btn-primary text-sm">
            {steps[step].ctaLabel}
          </Link>
          {step < steps.length - 1 ? (
            <button onClick={() => setStep((prev) => prev + 1)} className="btn-secondary text-sm">
              Next step
            </button>
          ) : (
            <Link href="/dashboard" className="btn-secondary text-sm">
              Finish onboarding
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
