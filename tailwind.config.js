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
        /* Primary Theme Surfaces - The "Gallery Wall" */
        'heritage': 'rgb(var(--bg-main) / <alpha-value>)',
        'card': 'rgb(var(--bg-card) / <alpha-value>)',
        'sage': 'rgb(var(--accent-soft) / <alpha-value>)',
        
        /* Brand Identity & Typography - The "Ochre & Ink" */
        'brand-accent': 'rgb(var(--brand-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--brand-accent) / <alpha-value>)',
        
        'brand-charcoal': 'rgb(var(--brand-charcoal) / <alpha-value>)',
        'charcoal': 'rgb(var(--brand-charcoal) / <alpha-value>)',
        
        'muted': 'rgb(var(--text-muted) / <alpha-value>)',
      },
      
      transitionDuration: {
        '700': '700ms',
        '800': '800ms',
        '1000': '1000ms',
        '2000': '2000ms', // For cinematic slow-fade photography
      },

      transitionTimingFunction: {
        'boutique': 'var(--ease-boutique)', // Your custom ease-out curve
      },

      /* Photography-Specific Letter Spacing */
      letterSpacing: {
        'tightest': '-0.05em',
        'boutique': '0.3em',
        'logo': '0.5em',
        'editorial': '0.6em',
        'gallery': '0.8em', // Wide tracking for "The Archive" headers
      },

      /* Added: Image Scale for "Soft Zoom" Hover Effects */
      scale: {
        '102': '1.02', // Subtle lift for photo thumbnails
      },

      /* Added: Professional Gallery Shadows */
      boxShadow: {
        'gallery': '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
        'gallery-dark': '0 30px 60px -12px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}