import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f1419",
        charcoal: "#f7faf8",
        graphite: "#eef3f0",
        navy: "#e8f3ee",
        gold: "#003829",
        bronze: "#004d38",
        safety: "#1a6b52",
        muted: "#5c6b66",
        brand: "#003829",
        "brand-light": "#004d38",
        "brand-dark": "#002a22",
        "brand-tint": "#e8f3ee",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 56, 41, 0.2)",
        card: "0 18px 55px rgba(0, 56, 41, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
