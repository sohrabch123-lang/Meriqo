'use client';

import { useState } from 'react';
import { motion, AnimatePresence, BezierDefinition } from 'framer-motion';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ViewToggle from '@/components/gallery/ViewToggle'; 
import AmbientQuotes from '@/components/ui/AmbientQuotes'; 
import { ANIMATION, LAYOUT } from '@/lib/constants';

export default function GalleryClient({ items }: { items: any[] }) {
  const [viewMode, setViewMode] = useState<'exhibition' | 'archive'>('exhibition');

  // Using the Master Boutique Ease
  const boutiqueEase: BezierDefinition = ANIMATION.EASE;
  const themeSync = ANIMATION.THEME_SYNC;

  return (
    <div className={`min-h-screen bg-[rgb(var(--bg-main))] ${themeSync}`}>
      
      {/* SUB-NAV RECALIBRATION: 
          1. top-[80px]: Perfectly aligns under your Global Nav.
          2. Backdrop-blur and border for that high-end "Glass" feel.
      */}
      <nav 
        className={`sticky top-[80px] z-40 w-full py-6 border-b border-brand-charcoal/10 backdrop-blur-md bg-[rgb(var(--bg-main)/0.85)] ${themeSync}`}
      >
        <div className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} flex justify-between items-center`}>
          <ViewToggle currentMode={viewMode} onViewChange={setViewMode} />
          <div className="hidden md:block">
            <AmbientQuotes />
          </div>
        </div>
      </nav>

      {/* MAIN GRID AREA: 
          1. pt-12 gives just enough room under the sub-nav.
          2. min-h-[calc(100vh-180px)] ensures the content area fills the screen.
      */}
      <main className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} pt-12 pb-40 w-full relative z-10 min-h-[calc(100vh-180px)]`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: ANIMATION.DURATION, ease: boutiqueEase }}
          >
            {/* The GalleryGrid will now sit exactly where the eye expects it, 
                filling the viewport without feeling "pushed down" too far.
            */}
            <GalleryGrid items={items} viewMode={viewMode} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}