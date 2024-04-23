/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      heading: "52px",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#76ABAE",
        },
        secondary: {
          DEFAULT: "#31363F",
        },
        dark: "#222831",
        light: "#EEEEEE",
      },
      spacing: {
        section: "4rem",
      },
    },
  },
  plugins: [],
};
