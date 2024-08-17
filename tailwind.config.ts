import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#8BC53E",
      darkPrimary: "#527A00",
      secondary: "#EBEBEB",
      darkSecondary: "#999999",
      footer: "#686868",
      white: "#FFFFFF",
      black: "#000000",
      link: "#0872B3",
      text: "#222222",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
