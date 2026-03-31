"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-dark-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-500/30 bg-gradient-to-br from-brand-500/30 to-teal-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span className="font-display text-lg font-semibold text-white">StackSmart</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#value" className="nav-link">Benefits</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <a 
              href="#waitlist" 
              className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Audit My Stack
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-lg border border-dark-700 p-2 text-dark-300 transition hover:border-dark-600 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-dark-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="space-y-1">
            <a href="#how-it-works" className="block rounded-lg px-4 py-3 text-sm text-dark-200 hover:bg-dark-800" onClick={() => setMobileOpen(false)}>How it works</a>
            <a href="#value" className="block rounded-lg px-4 py-3 text-sm text-dark-200 hover:bg-dark-800" onClick={() => setMobileOpen(false)}>Benefits</a>
            <a href="#pricing" className="block rounded-lg px-4 py-3 text-sm text-dark-200 hover:bg-dark-800" onClick={() => setMobileOpen(false)}>Pricing</a>
            <Link href="/dashboard" className="block rounded-lg px-4 py-3 text-sm text-dark-200 hover:bg-dark-800" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <div className="pt-2">
              <a href="#waitlist" className="block w-full rounded-lg bg-brand-500 py-3 text-center text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
                Audit My Stack
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
