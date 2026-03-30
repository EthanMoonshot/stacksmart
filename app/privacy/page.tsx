import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-dark-500 hover:text-dark-300 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="prose prose-invert text-dark-300 space-y-4 text-sm leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> March 30, 2026
          </p>
          <p>
            StackSmart (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your email address, company name, and billing data (CSV uploads). We extract only SaaS tool names and amounts from uploaded data — never personal transaction details.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">How We Use Your Information</h2>
          <p>
            Your data is used solely to analyze your SaaS stack and generate savings recommendations. We do not sell, rent, or share your data with third parties for marketing purposes.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Data Security</h2>
          <p>
            All data is encrypted in transit and at rest. We follow industry best practices and are pursuing SOC2 compliance.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href="mailto:hello@stacksmart.io" className="text-brand-400 hover:text-brand-300">hello@stacksmart.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
