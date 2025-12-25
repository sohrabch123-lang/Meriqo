/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'heritage': 'rgb(var(--bg-main) / <alpha-value>)',
        'card': 'rgb(var(--bg-card) / <alpha-value>)',
        'sage': 'rgb(var(--accent-soft) / <alpha-value>)',
        'brand-accent': 'rgb(var(--brand-accent) / <alpha-value>)',
        'brand-charcoal': 'rgb(var(--brand-charcoal) / <alpha-value>)',
        'muted': 'rgb(var(--text-muted) / <alpha-value>)',
      },
      
      // NEW: Explicit Font Weights to combat "fat" dark mode text
      fontWeight: {
        'light-sharp': '300',
        'book-sharp': '400',
        'medium-sharp': '500',
      },

      transitionProperty: {
        'boutique': 'color, background-color, border-color, opacity, transform',
      },

      transitionTimingFunction: {
        'boutique': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },

      letterSpacing: {
        'boutique': '0.3em',
        'gallery': '0.6em', // Reduced from 0.8em to sharpen readability
      },

      boxShadow: {
        'gallery': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'gallery-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.3)', // Reduced opacity from 0.5
      }
    },
  },
  plugins: [],
}