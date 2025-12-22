'use client';

import { useState } from 'react';
import { flowerData } from '@/data/flowers';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { motion, AnimatePresence } from 'framer-motion';

type ViewMode = 'exhibition' | 'archive';

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('exhibition');

  return (
    <div className="flex flex-col min-h-screen">
      {/* BOUTIQUE NAV - Tabs */}
      <nav 
        className="sticky top-[96px] z-30 w-full py-10 border-b border-brand-charcoal/5 backdrop-blur-md theme-sync"
        style={{ backgroundColor: 'rgb(var(--bg-main) / 0.8)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-start items-center gap-12">
          {['exhibition', 'archive'].map((id) => (
            <button
              key={id}
              onClick={() => setViewMode(id as ViewMode)}
              className={`text-[10px] uppercase transition-all duration-500 ease-out outline-none
                ${viewMode === id 
                  ? 'text-brand-charcoal font-bold tracking-[0.6em]' 
                  : 'text-brand-charcoal/40 hover:text-brand-charcoal tracking-[0.4em] hover:tracking-[0.6em]'
                }`}
            >
              {id === 'exhibition' ? 'The Exhibition' : 'The Archive'}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-40 w-full">
        <div className="mb-24">
           <span className="text-[10px] tracking-[0.4em] uppercase text-brand-accent font-bold mb-4 block">
              Saldana Photography
           </span>
           <h2 className="text-5xl md:text-6xl font-serif text-brand-charcoal italic tracking-tight">
             {viewMode === 'exhibition' ? 'Curated Series' : 'The Archive'}
           </h2>
           <div className="mt-8 w-20 h-[1px] bg-brand-charcoal/10" />
        </div>

        {/* LOCAL TRANSITION: This handles the images sliding 
            smoothly when you click the tabs above.
        */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode} // This is the secret—it forces a fresh animation per tab
            initial={{ opacity: 0, x: viewMode === 'exhibition' ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: viewMode === 'exhibition' ? 10 : -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <GalleryGrid items={flowerData} viewMode={viewMode} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}