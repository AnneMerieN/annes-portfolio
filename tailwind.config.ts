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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
