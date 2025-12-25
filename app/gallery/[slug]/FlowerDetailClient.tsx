'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT } from '@/lib/constants';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [flower.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={flower.id} 
        initial={{ opacity: 0, y: 8 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
        className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} bg-transparent ${ANIMATION.THEME_SYNC}`}
      >
        
        {/* SECONDARY NAV: 
            Now mathematically anchored below the Global Nav using LAYOUT.NAV_HEIGHT 
        */}
        <div 
          className={`sticky z-30 py-6 backdrop-blur-md border-b border-brand-charcoal/10 mb-8 ${ANIMATION.THEME_SYNC}`}
          style={{ 
            top: LAYOUT.NAV_HEIGHT,
            backgroundColor: 'rgb(var(--bg-main) / 0.85)',
            isolation: 'isolate' 
          }}
        >
          <div className="flex justify-between items-center">
            <Link href="/gallery" scroll={false} className="group flex items-center gap-3">
              <span className={`text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/60 group-hover:text-brand-accent group-hover:tracking-[0.5em] font-medium ${ANIMATION.THEME_SYNC}`}>
                &larr; Archive
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link href={`/gallery/${prevSlug}`} scroll={false} className="group">
                <span className={`text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal ${ANIMATION.THEME_SYNC}`}>
                  Prev
                </span>
              </Link>
              <div className={`h-4 w-[1px] bg-brand-charcoal/10 ${ANIMATION.THEME_SYNC}`}></div>
              <Link href={`/gallery/${nextSlug}`} scroll={false} className="group">
                <span className={`text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal ${ANIMATION.THEME_SYNC}`}>
                  Next
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pb-32 pt-4">
          
          {/* LEFT: IMAGE */}
          <div className="w-full lg:w-[60%]">
            <Reveal duration={ANIMATION.DURATION} y={15} instant delay={0.05}>
              <div className={`relative aspect-[4/5] overflow-hidden bg-card border border-brand-charcoal/5 group shadow-gallery dark:shadow-gallery-dark rounded-sm ${ANIMATION.THEME_SYNC}`}>
                <Image 
                  src={flower.image} 
                  alt={flower.alt} 
                  fill 
                  className="object-cover transition-transform duration-[3s] ease-[var(--ease-boutique)] group-hover:scale-105" 
                  priority
                />
                <div className={`absolute inset-0 bg-brand-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity ${ANIMATION.THEME_SYNC}`} />
              </div>
            </Reveal>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-40 space-y-10">
            <header>
              <Reveal delay={0.15} y={8} instant duration={ANIMATION.DURATION}>
                <span className={`text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block ${ANIMATION.THEME_SYNC}`}>
                  {flower.category}
                </span>
              </Reveal>
              <Reveal delay={0.2} duration={ANIMATION.DURATION} y={10} instant>
                <h1 className={`text-5xl md:text-7xl font-serif text-brand-charcoal leading-[0.9] mb-6 italic ${ANIMATION.THEME_SYNC}`}>
                  {flower.title}
                </h1>
              </Reveal>
            </header>
            
            <Reveal delay={0.3} y={8} instant duration={ANIMATION.DURATION}>
              <div className={`grid grid-cols-2 gap-y-6 pt-10 border-t border-brand-charcoal/10 ${ANIMATION.THEME_SYNC}`}>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1 ${ANIMATION.THEME_SYNC}`}>Medium</p>
                  <p className={`text-xs text-brand-charcoal font-medium italic ${ANIMATION.THEME_SYNC}`}>Archival Pigment Print</p>
                </div>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1 ${ANIMATION.THEME_SYNC}`}>Dimensions</p>
                  <p className={`text-xs text-brand-charcoal font-medium ${ANIMATION.THEME_SYNC}`}>24 x 36 in.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.45} duration={ANIMATION.DURATION} y={5} instant>
              <button className={`group relative w-full py-6 bg-brand-charcoal text-[rgb(var(--bg-main))] overflow-hidden ${ANIMATION.THEME_SYNC}`}>
                <span className="relative z-10 text-[11px] font-bold tracking-[0.5em] uppercase">
                  Acquire Work
                </span>
                <div className="absolute inset-0 bg-brand-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[var(--ease-boutique)]" />
              </button>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}