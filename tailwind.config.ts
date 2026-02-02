import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0F5132",
          dark: "#0A3D26",
          light: "#1A7A4A",
        },
        secondary: {
          DEFAULT: "#DAA520",
          dark: "#B8860B",
          light: "#E6C44A",
        },
        background: "#F5F5F5",
        surface: "#FFFFFF",
        text: {
          primary: "#1A1A1A",
          secondary: "#6B7280",
        },
      },
      screens: {
        narrow: "600px",
        medium: "900px",
        wide: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
