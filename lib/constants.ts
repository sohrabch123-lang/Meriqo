import { BezierDefinition } from 'framer-motion';

/**
 * ANIMATION SYSTEM
 * Defines the 'Boutique Clock' (700ms) and the high-end easing.
 */
export const ANIMATION = {
  // Duration in seconds for Framer Motion
  DURATION: 0.7,
  // Duration in milliseconds for CSS/Tailwind
  DURATION_MS: 700,
  // The 'Boutique Ease' Bezier curve
  EASE: [0.23, 1, 0.32, 1] as BezierDefinition,
  // The Master Tailwind string for theme transitions
  THEME_SYNC: "transition-all duration-700 ease-[var(--ease-boutique)] theme-sync",
};

/**
 * LAYOUT & POSITIONING
 * Solves the "buttons under navbar" issue by coordinating offsets.
 */
export const LAYOUT = {
  // This must match the height of your Global Navbar
  NAV_HEIGHT: "64px", 
  // The fixed height for the Gallery Sub-nav to prevent layout jumps
  SUB_NAV_HEIGHT: "88px", 
  // Combined offset for internal calculations if needed
  SUB_NAV_OFFSET: "64px", 
  MAX_WIDTH: "1400px",
  SAFE_PADDING: "px-6 lg:px-12",
  // Helper for layout wrappers to push content below the fixed header
  NAV_SPACER: "pt-[64px]", 
};

/**
 * BRAND & DATA
 */
export const BRAND = {
  NAME: "Saldana",
  FULL_NAME: "Saldana Studio",
  YEAR_RANGE: "2020 — 2025",
  LOCATIONS: ["London", "Paris", "Milan"],
  // Resolved the property missing error
  ESTABLISHED: "2025",
};

/**
 * CSS VARIABLE BRIDGE
 * Use these in your main layouts to ensure global CSS can access JS constants.
 */
export const VARS = {
  easeBoutique: `cubic-bezier(${ANIMATION.EASE.join(',')})`,
};