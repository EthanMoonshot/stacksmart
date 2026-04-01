import type { Metadata } from "next";
import "./globals.css";
import PlausibleProvider from "@/components/analytics/PlausibleProvider";
import AppProviders from "@/components/analytics/AppProviders";
import { buildMetadata, siteConfig } from "@/lib/site";
import { JetBrains_Mono } from "next/font/google";
import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";

// Satoshi and General Sans are loaded via Fontshare CSS in globals.css
// JetBrains Mono for code blocks
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(),
  keywords: [
    "SaaS optimization",
    "software spending",
    "SaaS audit",
    "reduce software costs",
    "SMB SaaS",
  ],
  applicationName: siteConfig.name,
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        jetbrainsMono.variable,
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="min-h-screen bg-dark-950 text-dark-50 antialiased">
        <PlausibleProvider />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
