import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import WaitlistForm from "@/components/landing/WaitlistForm";
import Footer from "@/components/landing/Footer";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  description:
    "Cut wasted SaaS spend fast. StackSmart audits your software stack, finds overlaps, and surfaces savings opportunities in minutes.",
  path: "/",
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.ogImage),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Join the waitlist for early access.",
    },
  };

  return (
    <main className="min-h-screen bg-dark-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Pricing />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
