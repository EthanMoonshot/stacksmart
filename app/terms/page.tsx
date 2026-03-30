import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-dark-500 hover:text-dark-300 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <div className="prose prose-invert text-dark-300 space-y-4 text-sm leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> March 30, 2026
          </p>
          <p>
            By using StackSmart, you agree to these Terms of Service. Please read them carefully.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Use of Service</h2>
          <p>
            StackSmart provides SaaS stack analysis and optimization recommendations. You may use the service for lawful business purposes. You are responsible for the accuracy of data you upload.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Data Ownership</h2>
          <p>
            You retain full ownership of all data you upload. We process your data solely to provide our analysis service and do not claim any rights to your content.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Limitation of Liability</h2>
          <p>
            Our recommendations are advisory only. StackSmart is not liable for business decisions made based on our analysis. Savings estimates are projections and not guaranteed.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the service constitutes acceptance of updated terms.
          </p>
          <h2 className="text-lg font-semibold text-white pt-4">Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a href="mailto:hello@stacksmart.io" className="text-brand-400 hover:text-brand-300">hello@stacksmart.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
