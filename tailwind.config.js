/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        1280: "1280px",
        1200: "1200px",
        1000: "1000px",
        768: "768px",
        600: "600px",
      },
    },
  },
  important: true,
  plugins: [],
};
