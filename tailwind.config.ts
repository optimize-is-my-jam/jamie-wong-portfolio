import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0b1326",
        "surface-dim": "#0b1326",
        "surface-container-lowest": "#060e20",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "surface-variant": "#2d3449",
        "surface-bright": "#31394d",
        background: "#0b1326",
        "on-background": "#dae2fd",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#c1c6d7",
        primary: "#a7c8ff",
        "primary-container": "#3291ff",
        "on-primary": "#003061",
        "on-primary-container": "#002a55",
        "primary-fixed": "#d5e3ff",
        "primary-fixed-dim": "#a7c8ff",
        secondary: "#b9c8de",
        "on-secondary": "#233143",
        outline: "#8b90a0",
        "outline-variant": "#414755",
        error: "#ffb4ab",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["var(--font-manrope)", "Manrope", "sans-serif"],
        body: ["var(--font-manrope)", "Manrope", "sans-serif"],
        label: ["var(--font-manrope)", "Manrope", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        ambient: "0 16px 32px rgba(218, 226, 253, 0.06)",
        "primary-glow": "0 0 20px rgba(50, 145, 255, 0.4)",
        "primary-glow-sm": "0 0 15px rgba(50, 145, 255, 0.4)",
        "primary-button-hover": "0 0 4px rgba(50, 145, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
