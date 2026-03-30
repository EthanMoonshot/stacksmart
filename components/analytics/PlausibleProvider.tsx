"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site";

export default function PlausibleProvider() {
  return (
    <Script
      defer
      data-domain={siteConfig.domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
