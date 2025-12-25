import { BezierDefinition } from 'framer-motion';

// 1. Define the tuple explicitly to satisfy the 4-element requirement
const BOUTIQUE_BEZIER: [number, number, number, number] = [0.23, 1, 0.32, 1];

export const ANIMATION = {
  DURATION: 0.7,
  DURATION_MS: 700,
  
  // Method A: Using the explicit tuple (Cleanest)
  EASE: BOUTIQUE_BEZIER as BezierDefinition,
  
  // Method B: The "Unknown" escape hatch (If you prefer inline)
  // EASE: [0.23, 1, 0.32, 1] as unknown as BezierDefinition,

  EASE_ARRAY: BOUTIQUE_BEZIER,
  THEME_SYNC: "transition-all duration-700 ease-[var(--ease-boutique)] theme-sync",
};

export const LAYOUT = {
  NAV_HEIGHT: "80px", 
  SUB_NAV_HEIGHT: "80px", 
  MAX_WIDTH: "1400px", 
  SAFE_PADDING: "px-6 lg:px-12",
  GUTTER: "gap-y-24 md:gap-y-40",
  NAV_SPACER: "pt-[80px]", 
};

export const BRAND = {
  NAME: "Saldana",
  FULL_NAME: "Saldana Studio",
  YEAR_RANGE: "2020 — 2025",
  ESTABLISHED: "2025",
  LOCATIONS: ["London", "Paris", "Milan"],
};