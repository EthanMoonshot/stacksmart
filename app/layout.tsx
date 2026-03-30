import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StackSmart — AI-Powered SaaS Stack Optimizer",
  description: "StackSmart analyzes your SaaS spending and tells you exactly what to cut, consolidate, or renegotiate — saving the average SMB $8,000/year.",
  keywords: ["SaaS optimization", "software spending", "SaaS audit", "reduce software costs", "SMB SaaS"],
  openGraph: {
    title: "StackSmart — AI-Powered SaaS Stack Optimizer",
    description: "Your SaaS stack is bleeding money. We'll find it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-dark-950 text-dark-50 antialiased">
        {children}
      </body>
    </html>
  );
}
