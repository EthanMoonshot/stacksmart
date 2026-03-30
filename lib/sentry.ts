const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || "https://examplePublicKey@o0.ingest.sentry.io/0";

export function initSentry() {
  if (typeof window === "undefined") return;
  if ((window as Window & { __stacksmartSentryInit?: boolean }).__stacksmartSentryInit) return;

  (window as Window & { __stacksmartSentryInit?: boolean }).__stacksmartSentryInit = true;

  window.addEventListener("error", (event) => {
    captureException(event.error ?? new Error(event.message), { source: "window.error" });
  });

  window.addEventListener("unhandledrejection", (event) => {
    captureException(event.reason instanceof Error ? event.reason : new Error(String(event.reason)), {
      source: "window.unhandledrejection",
    });
  });
}

export function captureException(error: unknown, context?: Record<string, unknown>) {
  const payload = {
    dsn: SENTRY_DSN,
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    context,
    capturedAt: new Date().toISOString(),
  };

  console.error("[Sentry placeholder]", payload);
}
