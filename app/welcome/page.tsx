import Link from "next/link";
import OnboardingFlow from "@/components/onboarding/OnboardingFlow";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-dark-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-dark-900 to-dark-950 p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-400">Welcome to StackSmart</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">You’re ready to find waste in your SaaS stack.</h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-300">
            Start with your billing data, let StackSmart analyse spend and overlap, then turn the findings into an executive-ready report.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/upload" className="btn-primary text-sm">Start with upload</Link>
            <Link href="/pricing" className="btn-secondary text-sm">See pricing</Link>
          </div>
        </div>

        <OnboardingFlow />
      </div>
    </main>
  );
}
