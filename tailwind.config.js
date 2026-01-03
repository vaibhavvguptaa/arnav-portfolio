/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Deep Slate (Light Mode Text)
          dark: "#f8fafc",    // White (Dark Mode Text)
        },
        secondary: {
          DEFAULT: "#334155", // Slate
          dark: "#94a3b8",    // Light Slate
        },
        accent: {
          DEFAULT: "#0d9488", // Teal
          hover: "#0f766e",
        },
        background: {
          DEFAULT: "#f8fafc", // Light BG
          dark: "#020617",    // Dark BG
        },
        surface: {
          DEFAULT: "#ffffff", // Light Card
          dark: "#1e293b",    // Dark Card
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
