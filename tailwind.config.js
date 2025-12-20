/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Theme Colors */
        'heritage': 'var(--bg-main)',       // The "Dusty Oat" background
        'card': 'var(--bg-card)',           // The white surface for cards
        
        /* Brand Identity */
        'brand-rose': 'var(--brand-rose)',   // Signature floral pink
        'charcoal': 'var(--brand-charcoal)', // High-end text color
        'muted': 'var(--text-muted)',       // Secondary/Subtle text
        
        /* Interactive Accents & Depth */
        'accent-hover': 'var(--brand-accent)', // Deep Velvet Rose
        
        /* 1. NEW BUTTON SYSTEM MAPPING 
           Connecting your Tailwind classes directly to your CSS variables.
        */
        'btn-base': 'var(--btn-bg)',         // Use: bg-btn-base
        'btn-content': 'var(--btn-text)',    // Use: text-btn-content
        'btn-accent': 'var(--btn-hover)',    // Use: hover:bg-btn-accent
        
        /* Accents & Borders */
        'sage': 'var(--accent-soft)',        
      },
      // Luxury timing and spacing for 2025
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