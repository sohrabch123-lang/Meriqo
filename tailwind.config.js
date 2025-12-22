/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Keeps 'class' for manual toggle control
  darkMode: 'class',
  
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Theme Colors */
        'heritage': 'rgb(var(--bg-main) / <alpha-value>)',
        'card': 'rgb(var(--bg-card) / <alpha-value>)',
        
        /* Brand Identity */
        'brand-rose': 'rgb(var(--brand-rose) / <alpha-value>)',
        'charcoal': 'rgb(var(--brand-charcoal) / <alpha-value>)',
        'muted': 'rgb(var(--text-muted) / <alpha-value>)',
        
        /* Interactive Accents */
        'accent-hover': 'rgb(var(--brand-accent) / <alpha-value>)',
        
        /* Button System */
        'btn-base': 'rgb(var(--btn-bg) / <alpha-value>)',
        'btn-content': 'rgb(var(--btn-text) / <alpha-value>)',
        'btn-accent': 'rgb(var(--btn-hover) / <alpha-value>)',
        
        'sage': 'rgb(var(--accent-soft) / <alpha-value>)',
      },
      transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
      // Higher-end easing for that 'luxury' feel
      transitionTimingFunction: {
        'boutique': 'cubic-bezier(0.22, 1, 0.36, 1)', 
      },
      letterSpacing: {
        'boutique': '0.3em',
        'logo': '0.5em',
      }
    },
  },
  plugins: [],
}