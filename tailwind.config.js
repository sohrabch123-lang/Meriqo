/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
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
      
      // NEW: Targeted transition for high performance
      transitionProperty: {
        'boutique': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity',
      },

      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },

      transitionTimingFunction: {
        'boutique': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },

      letterSpacing: {
        'tightest': '-0.05em',
        'boutique': '0.3em',
        'logo': '0.5em',
        'editorial': '0.6em',
        'gallery': '0.8em',
      },

      boxShadow: {
        'gallery': '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
        'gallery-dark': '0 30px 60px -12px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}