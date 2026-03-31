import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import ProblemSolution from "@/components/landing/ProblemSolution";
import TrustSection from "@/components/landing/TrustSection";
import Pricing from "@/components/landing/Pricing";
import WaitlistForm from "@/components/landing/WaitlistForm";
import Footer from "@/components/landing/Footer";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  description:
    "Find the money hiding in your SaaS stack. Upload a billing CSV, get a savings report in minutes. Cut, consolidate, and renegotiate with confidence.",
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
      description: "Free audit to find SaaS savings.",
    },
  };

  return (
    <main className="min-h-screen bg-dark-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <ProblemSolution />
      <TrustSection />
      <Pricing />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
