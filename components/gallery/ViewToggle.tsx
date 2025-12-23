'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
// 1. Import the type from framer-motion
import type { BezierDefinition } from 'framer-motion';

interface ViewToggleProps {
  currentMode: 'exhibition' | 'archive';
  onViewChange: (mode: 'exhibition' | 'archive') => void;
}

export default function ViewToggle({ currentMode, onViewChange }: ViewToggleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = useCallback((mode: 'exhibition' | 'archive') => {
    if (mode === currentMode || isAnimating) return;

    setIsAnimating(true);
    onViewChange(mode);

    setTimeout(() => setIsAnimating(false), 350);
  }, [currentMode, isAnimating, onViewChange]);

  // 2. Add the type here to satisfy the compiler
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];

  return (
    <div className="flex items-center gap-12">
      {(['exhibition', 'archive'] as const).map((id) => {
        const isActive = currentMode === id;
        return (
       // 1. Remove "transition-all" and "duration-500" from the button className.
// 2. Use Framer Motion for the text color as well.

<button
  key={id}
  onClick={() => handleToggle(id)}
  disabled={isAnimating}
  className={`relative py-2 text-[10px] uppercase outline-none font-medium ${
    isAnimating ? 'cursor-wait' : 'cursor-pointer'
  }`}
>
  <motion.span 
    // This replaces the CSS transition. 
    // Framer handles the theme color shift MUCH cleaner than CSS 'transition-colors'.
    animate={{ 
      color: isActive ? 'rgb(var(--brand-charcoal))' : 'rgba(var(--brand-charcoal), 0.3)',
      letterSpacing: isActive ? '0.6em' : '0.4em'
    }}
    transition={{ duration: 0.5, ease: boutiqueEase }}
    className="block"
  >
    {id === 'exhibition' ? 'The Exhibition' : 'The Archive'}
  </motion.span>

  {isActive && (
    <motion.div
      layoutId="activeTab"
      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brand-accent"
      transition={{ duration: 0.6, ease: boutiqueEase }}
    />
  )}
</button>
        );
      })}
    </div>
  );
}