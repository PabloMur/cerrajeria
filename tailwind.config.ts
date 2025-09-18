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
        primary: "#FFFFFF", // Blanco
        secondary: "#FFE600", // Amarillo
        accent: "#333333", // Negro
        text: "#666666", // Gris medio para el texto
        purple: "#7A3FFF" //Morado
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      boxSizing: ["box-border"],
    },
  },
};
export default config;
