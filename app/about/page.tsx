import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "StackSmart is built by Moonshot Inc, a Melbourne-based team on a mission to help small businesses stop overpaying for software.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950 font-sans">
      {/* Nav back */}
      <div className="mx-auto max-w-3xl px-6 pt-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-300 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 pb-24">

        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400"></span>
            Melbourne, Australia
          </div>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl leading-tight mb-6">
            We&apos;re on a mission to stop<br />
            <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
              SaaS waste
            </span>
          </h1>
          <p className="text-lg text-dark-300 leading-relaxed max-w-2xl">
            StackSmart is built by Moonshot Inc — a small team of builders obsessed with helping 
            small businesses get the most out of every dollar they spend on software.
          </p>
        </div>

        {/* Story section */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-white mb-5">Why we built this</h2>
          <div className="space-y-4 text-dark-300 leading-relaxed">
            <p>
              The average SMB runs 15–25 SaaS tools. Half of them have duplicate functionality. 
              A third have barely been touched in months. But the invoices keep coming — quietly 
              draining $15k, $30k, sometimes $80k+ a year.
            </p>
            <p>
              We&apos;ve seen this up close. Working with small businesses, it kept coming up: 
              owners didn&apos;t know what they were paying for, couldn&apos;t easily see which tools 
              overlapped, and had no leverage when renewals came around.
            </p>
            <p>
              The tools that existed were either enterprise-grade (expensive, overkill) or completely 
              manual. So we built StackSmart — upload your billing data, get a clear picture in minutes, 
              and know exactly where to cut.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-14 rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/5 to-teal-500/5 p-8">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10">
              <svg className="h-5 w-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Our mission</h2>
              <p className="text-dark-200 leading-relaxed text-lg">
                Help every small business get clarity on their software spend — and stop paying 
                for tools they don&apos;t use, don&apos;t need, or could replace for a fraction of the cost.
              </p>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Built to be trusted</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-dark-800 bg-dark-900/50 p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/20">
                <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Melbourne based</h3>
              <p className="text-dark-400 text-xs leading-relaxed">We&apos;re a local team. You can reach us, and we&apos;re invested in businesses like yours.</p>
            </div>

            <div className="rounded-xl border border-dark-800 bg-dark-900/50 p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/20">
                <svg className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Data security first</h3>
              <p className="text-dark-400 text-xs leading-relaxed">Your billing data is encrypted in transit and at rest. We never sell or share your data.</p>
            </div>

            <div className="rounded-xl border border-dark-800 bg-dark-900/50 p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
                <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">SOC 2 in progress</h3>
              <p className="text-dark-400 text-xs leading-relaxed">We&apos;re working through SOC 2 Type II certification — because we take your trust seriously.</p>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-white mb-5">About Moonshot Inc</h2>
          <div className="space-y-4 text-dark-300 leading-relaxed">
            <p>
              Moonshot Inc is an AI product studio based in Melbourne, Australia. We build focused, 
              useful tools that solve real problems for small and medium-sized businesses — without 
              the enterprise bloat or price tags.
            </p>
            <p>
              StackSmart is our flagship product. We&apos;re a small team, which means we move fast, 
              stay close to our customers, and genuinely care about building something that works.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-dark-800 bg-dark-900/40 p-8">
          <h2 className="font-display text-xl font-bold text-white mb-3">Get in touch</h2>
          <p className="text-dark-300 mb-5 leading-relaxed">
            Questions, feedback, or just want to talk shop? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hello@stacksmart.com"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-500/30 bg-brand-500/10 px-5 py-3 text-sm font-medium text-brand-300 transition-all hover:bg-brand-500/20 hover:text-brand-200"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@stacksmart.com
          </a>
        </section>

      </div>
    </div>
  );
}
