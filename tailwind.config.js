/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: "center",
        padding: {
          DEFAULT: "0.8rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [],
};
