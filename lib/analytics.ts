export type AnalyticsEventName =
  | "waitlist_signup"
  | "checkout_started"
  | "report_generated"
  | "demo_loaded"
  | "demo_cta_clicked"
  | "demo_buyer_path_clicked"
  | "homepage_cta_clicked"
  | "pricing_viewed"
  | "login_code_requested"
  | "login_verified"
  | "upload_started"
  | "upload_completed"
  | "report_viewed";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function trackEvent(eventName: AnalyticsEventName, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.plausible?.(eventName, props ? { props } : undefined);
}
