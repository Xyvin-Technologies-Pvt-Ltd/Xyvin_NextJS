import type { Config } from "tailwindcss";

// Design tokens. Brand navy comes from the logo (#031331); one warm accent; warm neutrals.
// Accent rule: use it as a fill (buttons, markers) with navy text, never as text on white.
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f2f4f8",
          100: "#e1e6ef",
          200: "#c3cddd",
          300: "#97a6c0",
          400: "#64779a",
          500: "#44587d",
          600: "#2f4266",
          700: "#1f3052",
          800: "#11213f",
          900: "#031331",
          950: "#020b20",
        },
        paper: "#f7f6f2",
        line: "#e7e4dc",
        muted: "#5b6170",
        accent: {
          DEFAULT: "#f2a93b",
          hover: "#e4972a",
          soft: "#fdf1dd",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 4.2vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
