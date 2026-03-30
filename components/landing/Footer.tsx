import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-white font-bold">StackSmart</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-dark-500 text-sm">
            <Link href="/privacy" className="hover:text-dark-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-dark-300 transition-colors">Terms of Service</Link>
            <a href="mailto:hello@stacksmart.io" className="hover:text-dark-300 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-dark-600 text-sm">
            © {new Date().getFullYear()} StackSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
