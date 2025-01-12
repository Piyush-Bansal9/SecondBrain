/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#f9fbfc",
          500: "#81868c"
        },
        purple: {
          100: "#e0e6ff",
          500: "#6763c2",
          600: "#5046e4"
        }
      }
    },
  },
  plugins: [],
}

