import type { Metadata } from "next";
import "./globals.css";
import PlausibleProvider from "@/components/analytics/PlausibleProvider";
import AppProviders from "@/components/analytics/AppProviders";
import { buildMetadata, siteConfig } from "@/lib/site";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  ...buildMetadata(),
  keywords: ["SaaS optimization", "software spending", "SaaS audit", "reduce software costs", "SMB SaaS"],
  applicationName: siteConfig.name,
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className="min-h-screen bg-dark-950 text-dark-50 antialiased">
        <PlausibleProvider />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
