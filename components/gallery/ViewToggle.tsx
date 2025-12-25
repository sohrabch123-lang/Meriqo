'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { ANIMATION } from '@/lib/constants';

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

    // Sync the wait time to the DURATION_MS constant (700ms)
    setTimeout(() => setIsAnimating(false), ANIMATION.DURATION_MS);
  }, [currentMode, isAnimating, onViewChange]);

  return (
    <div className="flex items-center gap-12">
      {(['exhibition', 'archive'] as const).map((id) => {
        const isActive = currentMode === id;
        return (
          <button
            key={id}
            onClick={() => handleToggle(id)}
            disabled={isAnimating}
            className={`relative py-2 text-[10px] uppercase outline-none font-medium ${
              isAnimating ? 'cursor-wait' : 'cursor-pointer'
            } ${ANIMATION.THEME_SYNC}`} 
          >
            <motion.span 
              animate={{ 
                // Using CSS variables directly in Framer for perfect theme sync
                color: isActive 
                  ? 'rgb(var(--brand-charcoal))' 
                  : 'rgba(var(--brand-charcoal), 0.3)',
                letterSpacing: isActive ? '0.6em' : '0.4em'
              }}
              transition={{ 
                duration: ANIMATION.DURATION, 
                ease: ANIMATION.EASE 
              }}
              className="block"
            >
              {id === 'exhibition' ? 'The Exhibition' : 'The Archive'}
            </motion.span>

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[rgb(var(--brand-accent))]"
                transition={{ 
                  duration: ANIMATION.DURATION, 
                  ease: ANIMATION.EASE 
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}