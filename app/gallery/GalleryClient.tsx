'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT } from '@/lib/constants';

import GalleryGrid from '@/components/gallery/GalleryGrid';
import ViewToggle from '@/components/gallery/ViewToggle'; 
import AmbientQuotes from '@/components/ui/AmbientQuotes'; 

interface GalleryClientProps {
  items: any[]; 
}

type ViewMode = 'exhibition' | 'archive';

export default function GalleryClient({ items }: GalleryClientProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('exhibition');

  return (
    <div className={`min-h-screen bg-[rgb(var(--bg-main))] ${ANIMATION.THEME_SYNC}`}>
      
      {/* 2025 ALIGNMENT STRATEGY:
          1. top-[var(--nav-height)]: Automatically stays below global nav.
          2. z-40: Sits above content but below global nav (z-50).
          3. h-[var(--sub-nav-height)]: Fixed height prevents 'layout jump'.
      */}
      <nav 
        className={`sticky z-40 w-full flex items-center border-b border-brand-charcoal/10 backdrop-blur-md bg-[rgb(var(--bg-main)/0.85)] ${ANIMATION.THEME_SYNC}`}
        style={{ 
          top: LAYOUT.NAV_HEIGHT, 
          height: LAYOUT.SUB_NAV_HEIGHT 
        }}
      >
        <div className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} w-full flex justify-between items-center`}>
          <ViewToggle currentMode={viewMode} onViewChange={setViewMode} />
          
          <div className="hidden md:block">
            <AmbientQuotes />
          </div>
        </div>
      </nav>

      <main className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} pt-12 pb-40 w-full relative z-10`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            /* Transition synced to the Master Boutique Clock */
            transition={{ 
              duration: ANIMATION.DURATION, 
              ease: ANIMATION.EASE 
            }}
          >
            <GalleryGrid items={items} viewMode={viewMode} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}