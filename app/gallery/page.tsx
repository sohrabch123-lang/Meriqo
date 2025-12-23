'use client';

import { useState } from 'react';
import { flowerData } from '@/data/flowers';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import AmbientQuotes from '@/components/ui/AmbientQuotes';
import ViewToggle from '@/components/gallery/ViewToggle'; 
import { motion, AnimatePresence, BezierDefinition } from 'framer-motion';

type ViewMode = 'exhibition' | 'archive';

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('exhibition');
  
  const themeSync = "transition-[background-color,border-color,color] duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)]";
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];

  return (
    <div className={`flex flex-col min-h-screen bg-[rgb(var(--bg-main))] ${themeSync}`}>
      
      {/* BOUTIQUE NAV - Secondary */}
      <nav 
        /* FIX 1: changed top-0 to top-24 (96px) to sit perfectly under the main navbar 
           FIX 2: increased z-index to 40 
        */
        className={`sticky top-24 z-40 w-full py-6 border-b border-brand-charcoal/10 backdrop-blur-md ${themeSync}`}
        style={{ 
          backgroundColor: 'rgb(var(--bg-main) / 0.85)',
          isolation: 'isolate' 
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <ViewToggle currentMode={viewMode} onViewChange={setViewMode} />
          
          <div className="hidden md:block">
            <AmbientQuotes />
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-40 w-full">
        {/* ... rest of the content remains the same ... */}
        <div className="mb-16">
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className={`text-[10px] tracking-[0.4em] uppercase text-brand-accent font-bold mb-4 block ${themeSync}`}
           >
             Saldana Photography
           </motion.span>
           
           <motion.h2 
             key={viewMode}
             initial={{ opacity: 0, x: -5 }}
             animate={{ opacity: 1, x: 0 }}
             className={`text-5xl md:text-6xl font-serif text-brand-charcoal italic tracking-tight ${themeSync}`}
           >
             {viewMode === 'exhibition' ? 'Curated Series' : 'The Archive'}
           </motion.h2>
           
           <div className={`mt-8 w-20 h-[1px] bg-brand-charcoal/10 ${themeSync}`} />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: boutiqueEase }}
            className="will-change-[opacity,transform]"
          >
            <GalleryGrid items={flowerData} viewMode={viewMode} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}