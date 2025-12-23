'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { motion, BezierDefinition, AnimatePresence } from 'framer-motion';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  const themeSync = "transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] theme-sync";
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];

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
        transition={{ duration: 0.5, ease: boutiqueEase }}
        className={`max-w-[1400px] mx-auto px-6 bg-transparent ${themeSync}`}
      >
        
        {/* STICKY NAV SECTION 
            FIX: Changed 'top-0' to 'top-24' to sit under the main Navbar (96px).
            FIX: Adjusted padding (py-6) for vertical balance.
        */}
        <div 
          className={`sticky top-24 z-30 py-6 backdrop-blur-md border-b border-brand-charcoal/10 mb-8 ${themeSync}`}
          style={{ 
            backgroundColor: 'rgb(var(--bg-main) / 0.85)',
            isolation: 'isolate' 
          }}
        >
          <div className="flex justify-between items-center">
            <Link href="/gallery" scroll={false} className={`group flex items-center gap-3 ${themeSync}`}>
              <span className={`text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/60 group-hover:text-brand-accent group-hover:tracking-[0.5em] font-medium transition-all ${themeSync}`}>
                &larr; Archive
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link href={`/gallery/${prevSlug}`} scroll={false} className="group">
                <span className={`text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors ${themeSync}`}>
                  Prev
                </span>
              </Link>
              <div className={`h-4 w-[1px] bg-brand-charcoal/10 ${themeSync}`}></div>
              <Link href={`/gallery/${nextSlug}`} scroll={false} className="group">
                <span className={`text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors ${themeSync}`}>
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
            <Reveal duration={0.8} y={15} instant delay={0.05}>
              <div className={`relative aspect-[4/5] overflow-hidden bg-card border border-brand-charcoal/5 group shadow-gallery dark:shadow-gallery-dark rounded-sm ${themeSync}`}>
                <Image 
                  src={flower.image} 
                  alt={flower.alt} 
                  fill 
                  className="object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105" 
                  priority
                />
                <div className={`absolute inset-0 bg-brand-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ${themeSync}`} />
              </div>
            </Reveal>
          </div>

          {/* RIGHT: CONTENT 
              NOTE: top-32 here is for the sidebar stickiness itself 
          */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-40 space-y-10">
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
            
            {/* Metadata Section */}
            <Reveal delay={0.3} y={8} instant>
              <div className={`grid grid-cols-2 gap-y-6 pt-10 border-t border-brand-charcoal/10 ${themeSync}`}>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1 ${themeSync}`}>Medium</p>
                  <p className={`text-xs text-brand-charcoal font-medium italic ${themeSync}`}>Archival Pigment Print</p>
                </div>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1 ${themeSync}`}>Dimensions</p>
                  <p className={`text-xs text-brand-charcoal font-medium ${themeSync}`}>24 x 36 in.</p>
                </div>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1 ${themeSync}`}>Edition</p>
                  <p className={`text-xs text-brand-charcoal font-medium ${themeSync}`}>Limited // 1 of 12</p>
                </div>
                <div>
                  <p className={`text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1 ${themeSync}`}>Location</p>
                  <p className={`text-xs text-brand-charcoal font-medium italic ${themeSync}`}>Saldana Studio</p>
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
                <div className="absolute inset-0 bg-brand-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </button>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}