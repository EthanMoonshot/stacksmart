export type AnalyticsEventName = "waitlist_signup" | "checkout_started" | "report_generated";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.plausible?.(eventName, props ? { props } : undefined);
}
