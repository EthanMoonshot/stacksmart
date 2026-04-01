import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-800/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500/30 to-teal-500/20 border border-brand-500/30">
              <span className="text-xs font-bold text-white">S</span>
            </div>
            <span className="text-white font-semibold">StackSmart</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <Link href="/pricing" className="text-dark-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-dark-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-dark-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-dark-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Moonshot Inc
          </p>
        </div>
      </div>
    </footer>
  );
}
