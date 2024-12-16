import { title } from "process";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purpleCustom: "#5E0D4F",
        grayWordCust: "#747474"
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        instrument: ["Instrument serif", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
