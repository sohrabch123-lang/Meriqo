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
          <button
            key={id}
            onClick={() => handleToggle(id)}
            disabled={isAnimating}
            className={`relative py-2 text-[10px] uppercase outline-none transition-colors duration-500 font-medium
              ${isActive ? 'text-brand-charcoal' : 'text-brand-charcoal/30 hover:text-brand-charcoal/60'}
              ${isAnimating ? 'cursor-wait' : 'cursor-pointer'}
            `}
          >
            <span className={`transition-all duration-500 ${isActive ? 'tracking-[0.6em]' : 'tracking-[0.4em]'}`}>
              {id === 'exhibition' ? 'The Exhibition' : 'The Archive'}
            </span>

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brand-accent"
                // 3. Now this will be perfectly happy
                transition={{ duration: 0.6, ease: boutiqueEase }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}