"use client";

import { useEffect } from "react";
import { initSentry } from "@/lib/sentry";
import { ErrorBoundary } from "@/components/error-boundary/ErrorBoundary";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initSentry();
  }, []);

  return <ErrorBoundary>{children}</ErrorBoundary>;
}
