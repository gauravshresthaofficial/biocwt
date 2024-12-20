/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fonts: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/imag.svg')",
        hero1: "url('/src/assets/image-1.svg')",
      },
    },
  },
  plugins: [],
};
