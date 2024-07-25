/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "280px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        inter: ["Inter"],
        sen: ["Sen"],
      },
      backgroundImage: {
        "hero-bg": "url(./assets/hero.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
