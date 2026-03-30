"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

export default function EventTracker({
  event,
  props,
}: {
  event: AnalyticsEventName;
  props?: Record<string, unknown>;
}) {
  useEffect(() => {
    trackEvent(event, props);
  }, [event, props]);

  return null;
}
