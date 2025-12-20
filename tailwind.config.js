/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Enable the dark mode toggle via the 'dark' class
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
        'heritage': 'rgb(var(--bg-main))',
        'card': 'rgb(var(--bg-card))',
        
        /* Brand Identity */
        'brand-rose': 'rgb(var(--brand-rose))',
        'charcoal': 'rgb(var(--brand-charcoal))',
        'muted': 'rgb(var(--text-muted))',
        
        /* Interactive Accents & Depth */
        'accent-hover': 'rgb(var(--brand-accent))',
        
        /* Button System Mapping */
        'btn-base': 'rgb(var(--btn-bg))',
        'btn-content': 'rgb(var(--btn-text))',
        'btn-accent': 'rgb(var(--btn-hover))',
        
        /* Accents & Borders */
        'sage': 'rgb(var(--accent-soft))',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      letterSpacing: {
        'boutique': '0.3em',
      }
    },
  },
  plugins: [],
}