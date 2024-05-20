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
      colors: {
primary:{
  50: "#e9f5e9" /* Very light green */,
  100: "#d1ecd1" /* Light green */,
  200: "#a4d8a4" /* Pale green */,
  300: "#72c072" /* Soft green */,
  400: "#4a9d4a" /* Medium green */,
  500: "#328232" /* Standard green */,
  600: "#2b6d2b" /* Slightly darker green */,
  700: "#255825" /* Dark green */,
  800: "#1f451f" /* Very dark green */,
  900: "#1a381a" /* Deeper dark green */,
  950: "#0d1d0d" /* Almost black green */,
}
      },
    },
  },
  plugins: [],
};
export default config;
