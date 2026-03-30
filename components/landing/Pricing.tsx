"use client";

import { useState } from "react";

const plans = [
  {
    name: "One-Time Audit",
    price: "$299",
    period: "one time",
    description: "Perfect for skeptics who want to see real savings before committing.",
    features: [
      "Full stack analysis (one audit)",
      "AI-generated savings report",
      "PDF + web report",
      "30-day access to results",
      "Email support",
    ],
    cta: "Get My Audit",
    highlighted: false,
    badge: null,
  },
  {
    name: "Starter",
    price: "$99",
    period: "/ month",
    annualPrice: "$79",
    description: "For small teams starting to get serious about SaaS costs.",
    features: [
      "Monthly stack analysis",
      "Basic dashboard",
      "Up to 5 users",
      "Email alerts",
      "Standard support",
      "Up to $40K SaaS spend",
    ],
    cta: "Start Free Trial",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/ month",
    annualPrice: "$119",
    description: "The sweet spot for growing teams who want ongoing optimization.",
    features: [
      "Everything in Starter",
      "Price increase alerts",
      "Renewal calendar",
      "Priority support",
      "Up to 15 users",
      "Up to $80K SaaS spend",
      "Negotiation guidance",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "$249",
    period: "/ month",
    annualPrice: "$199",
    description: "For larger SMBs that need the full picture and team access.",
    features: [
      "Everything in Growth",
      "API integrations (20+ tools)",
      "Benchmark data",
      "Unlimited users",
      "SSO & SAML",
      "Dedicated account manager",
      "Custom reporting",
      "$80K+ SaaS spend",
    ],
    cta: "Start Free Trial",
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            PRICING
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Obvious ROI from day one
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-8">
            The average customer saves $8,000/year. At $149/month, that's a 4.5x return. Every month.
          </p>

          {/* Annual toggle */}
          <div className="inline-flex items-center gap-3 bg-dark-900 border border-dark-700 rounded-full px-4 py-2">
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-dark-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${annual ? "bg-brand-500" : "bg-dark-700"}`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${annual ? "translate-x-7" : "translate-x-1"}`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-dark-500"}`}>
              Annual
            </span>
            <span className="text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-brand-900/50 to-dark-900 border-brand-500/50 shadow-xl shadow-brand-500/10"
                  : "bg-dark-900 border-dark-800 hover:border-dark-700"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-brand-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-dark-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">
                    {annual && plan.annualPrice ? plan.annualPrice : plan.price}
                  </span>
                  <span className="text-dark-400 text-sm mb-1">{plan.period}</span>
                </div>
                {annual && plan.annualPrice && (
                  <p className="text-green-400 text-xs mt-1">Billed annually (save 20%)</p>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center font-semibold text-sm py-3 px-4 rounded-lg transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25"
                    : "bg-dark-800 hover:bg-dark-700 text-dark-100 border border-dark-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* ROI callout */}
        <div className="mt-12 glass rounded-xl p-6 text-center">
          <p className="text-dark-300 text-sm">
            💡 <strong className="text-white">ROI Guarantee:</strong> If StackSmart doesn't identify at least{" "}
            <strong className="text-brand-400">2x your subscription cost</strong> in potential savings within 30 days,
            we'll refund your first month. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
