import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        claw: {
          50: "#fef3e2",
          100: "#fde4c0",
          200: "#fcd49a",
          300: "#f9b85e",
          400: "#f5942e",
          500: "#eb7312",
          600: "#d1560b",
          700: "#ad400e",
          800: "#8a3414",
          900: "#712d14",
          950: "#3f1406",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
