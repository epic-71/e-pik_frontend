/** @type {import('tailwindcss').Config} */
const tailwindConfif = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_bg: "#EFF7FA",
      },
    },
  },
  plugins: [],
};
export default tailwindConfif;
