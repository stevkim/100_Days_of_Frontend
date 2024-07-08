/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#008CFF",
        "secondary-blue": "#0066FF",
        muted: "#cdcdca",
      },
      height: {
        page: "calc(100vh - 50px)",
      },
    },
  },
  plugins: [],
};
