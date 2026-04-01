import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1D3461",
        },
        dark: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B",
          500: "#4B5563",
          600: "#334155",
          700: "#1E2D45",
          800: "#1A2235",
          900: "#111827",
          950: "#0A0F1E",
        },
        success: {
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          900: "#14532D",
        },
        warning: {
          400: "#FBB040",
          500: "#F59E0B",
          900: "#451A03",
        },
        teal: {
          400: "#2DD4BF",
          500: "#14B8A6",
          900: "#0D4F4A",
        },
      },
      fontFamily: {
        // Body fonts
        sans: ["General Sans", "system-ui", "sans-serif"],
        // Display/heading fonts
        display: ["Satoshi", "system-ui", "sans-serif"],

        // === PREMIUM FONT OPTIONS ===

        // Vercel/Linear style (installed via npm)
        geist: ["var(--font-geist-sans)", "Geist", "system-ui", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "Geist Mono", "monospace"],

        // Google Fonts premium alternatives
        outfit: ["Outfit", "system-ui", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "system-ui", "sans-serif"],

        // Fontshare premium
        satoshi: ["Satoshi", "system-ui", "sans-serif"],
        "general-sans": ["General Sans", "system-ui", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "system-ui", "sans-serif"],

        // Impact headlines
        clash: ["Clash Display", "system-ui", "sans-serif"],

        // Code
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
