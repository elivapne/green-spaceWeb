import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Theme tokens (driven by CSS variables; enables light/dark mode).
        "gs-black": "rgb(var(--gs-bg) / <alpha-value>)",
        "gs-deep": "rgb(var(--gs-panel) / <alpha-value>)",
        "gs-text": "rgb(var(--gs-text) / <alpha-value>)",
        "gs-border": "rgb(var(--gs-border) / <alpha-value>)",
        "gs-green": "#2AD67C",
        "gs-emerald": "#1F9D6E",
        "gs-lime": "#6BFF9E",
        "gs-muted": "rgb(var(--gs-muted) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Assistant", "system-ui", "sans-serif"],
        en: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(42, 214, 124, 0.25)",
        card: "0 24px 60px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 20% 20%, rgba(42, 214, 124, 0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(31, 157, 110, 0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(107, 255, 158, 0.15), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
