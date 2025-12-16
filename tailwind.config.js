// tailwind.config.js or tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',       // Looks for classes in the App Router folder
    './pages/**/*.{js,ts,jsx,tsx,mdx}',     // For compatibility with Pages Router (if used)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // For classes in your reusable components folder
  ],
  theme: {
    extend: {
      // ... (your custom theme settings)
    },
  },
  plugins: [],
}