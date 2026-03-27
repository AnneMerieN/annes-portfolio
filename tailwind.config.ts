import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-arimo)", "sans-serif"],
      },
      colors: {
        sidebar: "#212121",
        accent: "#E8833A",
        pink: {
          500: "#f9a8d4",
        },
        zinc: {
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        muted: "#99A1AF",
        "muted-dark": "#6A7282",
      },
      borderRadius: {
        card: "28px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-12deg)" },
          "75%": { transform: "rotate(12deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
