'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { motion, BezierDefinition, AnimatePresence } from 'framer-motion';
import { ANIMATION, LAYOUT } from '@/lib/constants';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  const boutiqueEase: BezierDefinition = ANIMATION.EASE;
  const themeSync = ANIMATION.THEME_SYNC;

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
        transition={{ duration: ANIMATION.DURATION, ease: boutiqueEase }}
        className={`max-w-[1400px] mx-auto px-6 bg-transparent ${themeSync}`}
      >
        
        {/* SECONDARY NAV: Adjusted to stay visible below the main 80px Nav */}
        <div 
          className={`sticky top-[80px] z-30 py-6 backdrop-blur-md border-b border-brand-charcoal/10 ${themeSync}`}
          style={{ 
            backgroundColor: 'rgb(var(--bg-main) / 0.85)',
            isolation: 'isolate' 
          }}
        >
          <div className="flex justify-between items-center">
            <Link href="/gallery" scroll={false} className="group flex items-center gap-3">
              <span className={`text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/60 group-hover:text-brand-accent group-hover:tracking-[0.5em] font-medium transition-all duration-700`}>
                &larr; Archive
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link href={`/gallery/${prevSlug}`} scroll={false} className="group">
                <span className={`text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal ${themeSync}`}>Prev</span>
              </Link>
              <div className={`h-4 w-[1px] bg-brand-charcoal/10 ${themeSync}`}></div>
              <Link href={`/gallery/${nextSlug}`} scroll={false} className="group">
                <span className={`text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal ${themeSync}`}>Next</span>
              </Link>
            </div>
          </div>
        </div>

        {/* CONTENT AREA: 
            Changed to 'flex-row' with 'min-h' to ensure visibility 
        */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start py-12 min-h-[calc(100vh-140px)]">
          
          {/* LEFT: IMAGE CONTAINER 
              Giving this an explicit height (h-[70vh]) ensures the image appears.
          */}
          <div className="w-full lg:w-[60%]">
            <Reveal duration={0.8} y={15} instant delay={0.05}>
              <div className={`relative w-full h-[60vh] lg:h-[75vh] max-h-[750px] overflow-hidden bg-card border border-brand-charcoal/5 group shadow-gallery dark:shadow-gallery-dark rounded-sm ${themeSync}`}>
                <Image 
                  src={flower.image} 
                  alt={flower.alt} 
                  fill 
                  className="object-cover transition-transform duration-[3s] ease-[var(--ease-boutique)] group-hover:scale-105" 
                  priority
                />
                <div className={`absolute inset-0 bg-brand-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${themeSync}`} />
              </div>
            </Reveal>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-[40%] space-y-10 lg:sticky lg:top-40">
            <header>
              <Reveal delay={0.15} y={8} instant>
                <span className={`text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block ${themeSync}`}>
                  {flower.category}
                </span>
              </Reveal>
              <Reveal delay={0.2} duration={0.4} y={10} instant>
                <h1 className={`text-5xl md:text-7xl font-serif text-brand-charcoal leading-[0.9] mb-6 italic ${themeSync}`}>
                  {flower.title}
                </h1>
              </Reveal>
              <Reveal delay={0.25} duration={0.4} y={8} instant>
                <p className={`text-brand-charcoal/60 text-lg font-serif tracking-tight leading-relaxed ${themeSync}`}>
                  {flower.subtitle}
                </p>
              </Reveal>
            </header>
            
            <Reveal delay={0.3} y={8} instant>
              <div className={`grid grid-cols-2 gap-y-6 pt-10 border-t border-brand-charcoal/10 ${themeSync}`}>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1">Medium</p>
                  <p className="text-xs text-brand-charcoal font-medium italic">Archival Pigment Print</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1">Dimensions</p>
                  <p className="text-xs text-brand-charcoal font-medium">24 x 36 in.</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.35} duration={0.4} y={8} instant>
              <p className={`text-brand-charcoal/70 text-base md:text-lg leading-relaxed font-serif italic max-w-prose ${themeSync}`}>
                &ldquo;{flower.description}&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.45} duration={0.4} y={5} instant>
              <button className={`group relative w-full py-6 bg-brand-charcoal text-[rgb(var(--bg-main))] overflow-hidden ${themeSync}`}>
                <span className="relative z-10 text-[11px] font-bold tracking-[0.5em] uppercase">
                  Acquire Work
                </span>
                <div className="absolute inset-0 bg-brand-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[var(--ease-boutique)]" />
              </button>
            </Reveal>
          </div>
        </div>

        {/* This pushes the rest of the page down to allow scrolling */}
        <div className="pb-32" />

      </motion.div>
    </AnimatePresence>
  );
}