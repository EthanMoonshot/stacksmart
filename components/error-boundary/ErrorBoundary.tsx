"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import Link from "next/link";
import { captureException } from "@/lib/sentry";

export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    captureException(error, { componentStack: errorInfo.componentStack });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-left">
            <h2 className="text-lg font-semibold text-white">Something went wrong</h2>
            <p className="mt-2 text-sm text-dark-300">
              We logged the issue and you can safely retry the action or head back to the dashboard.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary text-sm" onClick={() => window.location.reload()}>
                Reload page
              </button>
              <Link href="/dashboard" className="btn-secondary text-sm">
                Go to dashboard
              </Link>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
