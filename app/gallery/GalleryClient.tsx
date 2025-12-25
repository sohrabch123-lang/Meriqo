'use client';

import { useState } from 'react';
import { motion, AnimatePresence, BezierDefinition } from 'framer-motion';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import ViewToggle from '@/components/gallery/ViewToggle'; 
import AmbientQuotes from '@/components/ui/AmbientQuotes'; 

const THEME_SYNC = "transition-all duration-700 ease-[var(--ease-boutique)] theme-sync";
const BOUTIQUE_EASE: BezierDefinition = [0.23, 1, 0.32, 1];

interface GalleryClientProps {
  items: any[]; 
}

type ViewMode = 'exhibition' | 'archive';

export default function GalleryClient({ items }: GalleryClientProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('exhibition');

  return (
    <div className={`min-h-screen bg-[rgb(var(--bg-main))] ${THEME_SYNC}`}>
      
      {/* 1. top-[64px]: This MUST match the height of your Global Navbar. 
             If your main nav is taller, use top-[80px] or top-20.
          2. z-40: Keep this just below your main Global Navbar (which should be z-50).
      */}
      <nav 
        className={`sticky top-[64px] z-40 w-full py-6 border-b border-brand-charcoal/10 backdrop-blur-md bg-[rgb(var(--bg-main)/0.85)] ${THEME_SYNC}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <ViewToggle currentMode={viewMode} onViewChange={setViewMode} />
          <div className="hidden md:block">
            <AmbientQuotes />
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-40 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: BOUTIQUE_EASE }}
          >
            <GalleryGrid items={items} viewMode={viewMode} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}