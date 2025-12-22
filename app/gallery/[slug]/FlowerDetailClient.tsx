'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  return (
    /* Outer wrapper is transparent to ensure the RootLayout background is the source of truth */
    <div className="max-w-[1400px] mx-auto px-6 bg-transparent">
      
      {/* 1. THE STICKY NAV FIX:
          - We use 'bg-heritage/80' to follow the CSS variable --bg-main.
          - 'theme-sync' ensures it fades at the same speed (0.8s) as your globals.css.
          - Backdrop-blur-md creates the luxury glass effect.
      */}
      <div className="sticky top-0 z-30 pt-32 pb-6 bg-heritage/80 backdrop-blur-md border-b border-brand-charcoal/10 mb-12 theme-sync">
        <Reveal duration={0.6} y={0} instant>
          <div className="flex justify-between items-center">
            <Link 
              href="/gallery" 
              className="group flex items-center gap-3 transition-all duration-700"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/60 group-hover:text-brand-accent group-hover:tracking-[0.5em] transition-all font-medium">
                &larr; Archive
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link href={`/gallery/${prevSlug}`} className="group">
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors">
                  Prev
                </span>
              </Link>
              
              {/* Divider line uses the variable that flips from dark to light */}
              <div className="h-6 w-[1px] bg-brand-charcoal/10 transition-colors"></div>
              
              <Link href={`/gallery/${nextSlug}`} className="group">
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-charcoal/40 group-hover:text-brand-charcoal transition-colors">
                  Next
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start pb-32">
        
        {/* LEFT: THE PHOTOGRAPH */}
        <div className="w-full lg:w-[60%]">
          <Reveal duration={1.2} y={20} instant delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden bg-card border border-brand-charcoal/5 group shadow-gallery dark:shadow-gallery-dark rounded-sm theme-sync">
              <Image 
                src={flower.image} 
                alt={flower.alt} 
                fill 
                className="object-cover transition-transform duration-[3s] ease-boutique group-hover:scale-105" 
                priority
              />
              <div className="absolute inset-0 bg-brand-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </Reveal>
        </div>

        {/* RIGHT: THE NARRATIVE */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-48 space-y-12">
          <header>
            <Reveal delay={0.2} y={10} instant>
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
                {flower.category} // Technical Study
              </span>
            </Reveal>

            <Reveal delay={0.25} duration={0.9} y={15} instant>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal leading-[0.9] mb-6 italic theme-sync">
                {flower.title}
              </h1>
            </Reveal>

            <Reveal delay={0.3} duration={0.9} y={10} instant>
              <p className="text-brand-charcoal/60 text-lg font-serif tracking-tight leading-relaxed theme-sync">
                {flower.subtitle}
              </p>
            </Reveal>
          </header>
          
          <Reveal delay={0.4} y={10} instant>
            <div className="grid grid-cols-2 gap-y-6 pt-10 border-t border-brand-charcoal/10 theme-sync">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1">Medium</p>
                <p className="text-xs text-brand-charcoal font-medium italic">Archival Pigment Print</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1">Dimensions</p>
                <p className="text-xs text-brand-charcoal font-medium">24 x 36 in.</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1">Edition</p>
                <p className="text-xs text-brand-charcoal font-medium">Limited // 1 of 12</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-brand-charcoal/40 mb-1">Location</p>
                <p className="text-xs text-brand-charcoal font-medium italic">Saldana Studio</p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.45} duration={1} y={10} instant>
            <p className="text-brand-charcoal/70 text-base md:text-lg leading-relaxed font-serif italic max-w-prose theme-sync">
              &ldquo;{flower.description}&rdquo;
            </p>
          </Reveal>

          {/* ACQUISITION BUTTON */}
          <Reveal delay={0.55} duration={0.6} y={5} instant>
            <button className="group relative w-full py-6 bg-brand-charcoal text-heritage overflow-hidden theme-sync">
              <span className="relative z-10 text-[11px] font-bold tracking-[0.5em] uppercase">
                Acquire Work
              </span>
              <div className="absolute inset-0 bg-brand-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}