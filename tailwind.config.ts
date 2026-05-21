import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11110f",
        charcoal: "#1b1a17",
        cedar: "#233d2d",
        moss: "#38523b",
        mesquite: "#7a4a25",
        sand: "#d8c39f",
        dust: "#f4ead8",
        rust: "#c56b2d",
        steel: "#4d5650",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-oswald)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        rugged: "0 24px 80px rgba(17, 17, 15, 0.22)",
        card: "0 18px 45px rgba(35, 61, 45, 0.12)",
      },
      backgroundImage: {
        grit: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.13) 1px, transparent 0)",
        field:
          "linear-gradient(135deg, rgba(35,61,45,.94), rgba(17,17,15,.96))",
      },
    },
  },
  plugins: [],
};

export default config;
