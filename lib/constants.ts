import { BezierDefinition } from 'framer-motion';

export const ANIMATION = {
  DURATION: 0.7,
  DURATION_MS: 700,
  EASE: [0.23, 1, 0.32, 1] as BezierDefinition,
  THEME_SYNC: "transition-all duration-700 ease-[var(--ease-boutique)] theme-sync",
};

export const LAYOUT = {
  NAV_HEIGHT: "80px", 
  SUB_NAV_HEIGHT: "80px", 
  // Your preferred wide layout
  MAX_WIDTH: "1400px", 
  SAFE_PADDING: "px-6 lg:px-12",
  // Ensures content starts exactly after the Nav
  NAV_SPACER: "pt-[80px]", 
};

export const BRAND = {
  NAME: "Saldana",
  FULL_NAME: "Saldana Studio",
  YEAR_RANGE: "2020 — 2025",
  ESTABLISHED: "2025",
  LOCATIONS: ["London", "Paris", "Milan"],
};