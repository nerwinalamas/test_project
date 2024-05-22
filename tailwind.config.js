/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        customBlack: "#4b4334",
        customGray: "#7e7666",
        customOrange: "#cb6f56",
        customWhite: "#ffffff",
        customPeach: "#d88d78",
        customLightGray: "#aa9f89",
        customCream: "#fdf3e3",
        customOrangeVariant: "#e99077",
        customDarkerBlack: "#2c2820",
        customSoftOrange: "#ddba7c",
        customWhiteVariant: "#fffaf3",
        customCreamVariant: "#e0d3c2"

      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

