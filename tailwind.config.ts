import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        translima: {
          green: "#19A99A",
          dark: "#08766E",
          graphite: "#2B2F33",
          light: "#F3F5F6",
          black: "#111827"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(17, 24, 39, 0.10)"
      }
    }
  },
  plugins: [forms]
};

export default config;
