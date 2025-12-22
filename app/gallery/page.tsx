'use client';

import { useState } from 'react';
import { flowerData } from '@/data/flowers';
import GalleryGrid from '@/components/gallery/GalleryGrid';

type ViewMode = 'exhibition' | 'archive';

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('exhibition');

  return (
    <div className="flex flex-col min-h-screen">
      {/* BOUTIQUE NAV - Using your --bg-main variable */}
      <nav 
        className="sticky top-[96px] z-30 w-full py-10 border-b border-brand-charcoal/5 backdrop-blur-md theme-sync"
        style={{ backgroundColor: 'rgb(var(--bg-main) / 0.8)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-start items-center gap-12">
          {[
            { id: 'exhibition', label: 'The Exhibition' },
            { id: 'archive', label: 'The Archive' }
          ].map((mode) => {
            const active = viewMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as ViewMode)}
                className={`group relative py-1 text-[10px] uppercase transition-all duration-700 ease-boutique outline-none
                  ${active 
                    ? 'text-brand-charcoal font-bold tracking-[0.6em]' 
                    : 'text-brand-charcoal/40 hover:text-brand-charcoal tracking-[0.4em] hover:tracking-[0.6em]'
                  }`}
              >
                {mode.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* GALLERY SECTION */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-40 w-full">
        <div className="mb-24">
           {/* Boutique Tagline using your --brand-rose */}
           <span className="text-[10px] tracking-[0.4em] uppercase text-brand-accent font-bold mb-4 block transition-colors duration-700">
  Saldana Photography
</span>
           
           {/* Title using your --brand-charcoal (Auto-swaps in dark mode via CSS) */}
           <h2 className="text-5xl md:text-6xl font-serif text-brand-charcoal italic tracking-tight theme-sync">
             {viewMode === 'exhibition' ? 'Curated Series' : 'The Archive'}
           </h2>

           {/* The Clean Replacement Line using your charcoal at 10% opacity */}
           <div className="mt-8 w-20 h-[1px] bg-brand-charcoal/10" />
        </div>

        <GalleryGrid items={flowerData} viewMode={viewMode} />
      </main>
    </div>
  );
}