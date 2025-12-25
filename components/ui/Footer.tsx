'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, BRAND, LAYOUT } from '@/lib/constants';

export default function Footer() {
  return (
    /* h-screen ensures the footer becomes its own full-page experience 
       at the end of the scroll, matching the "About" hero logic. */
    <footer className={`relative h-screen min-h-[700px] w-full overflow-hidden bg-brand-charcoal ${ANIMATION.THEME_SYNC}`}>
      
      {/* 1. THE CANVAS: Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/footer-bg.jpg" 
          alt="The Archive Entrance" 
          fill 
          className="object-cover opacity-30 grayscale transition-transform duration-[20s] ease-linear hover:scale-110"
        />
        {/* Deep vignetting to focus the eye on the center text */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-transparent to-brand-charcoal" />
      </div>

      {/* 2. THE EDITORIAL CORE */}
      <div className={`relative z-10 flex h-full flex-col items-center justify-center text-center ${LAYOUT.SAFE_PADDING}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className={`mb-6 block text-[10px] font-bold uppercase tracking-[1em] text-brand-accent ${ANIMATION.THEME_SYNC}`}>
            Deep Dive
          </span>
          
          <Link href="/gallery" className="group relative inline-block">
            {/* Massive 9xl text for that high-fashion editorial conclusion */}
            <h2 className={`font-serif text-6xl md:text-8xl lg:text-[10rem] italic tracking-tighter text-heritage leading-none group-hover:text-brand-accent transition-colors duration-700`}>
              The Archive
            </h2>
            {/* Animated Underline */}
            <div className={`mt-8 h-[1px] w-0 bg-brand-accent group-hover:w-full transition-all duration-700 ease-[var(--ease-boutique)] mx-auto`} />
          </Link>
          
          <p className={`mt-16 max-w-sm text-[10px] md:text-[12px] leading-loose tracking-[0.3em] uppercase text-heritage/30 ${ANIMATION.THEME_SYNC}`}>
            A curated selection of works from {BRAND.YEAR_RANGE}. <br /> 
            {BRAND.LOCATIONS.join(' / ')}.
          </p>
        </motion.div>

        {/* 3. LEGAL & UTILITY 
            FIXED: Corrected string template for max-width alignment.
        */}
        <div className="absolute bottom-12 w-full px-6 md:px-12">
          <div className={`max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t border-heritage/10 pt-12 ${ANIMATION.THEME_SYNC}`}>
            <p className="text-[9px] tracking-[0.4em] text-heritage/20 uppercase font-medium">
              &copy; {new Date().getFullYear()} {BRAND.FULL_NAME}
            </p>
            
            <div className="flex gap-12 text-[9px] tracking-[0.4em] text-heritage/40 uppercase font-bold">
              <Link href="/legal" className="hover:text-brand-accent transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy</Link>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="italic font-serif capitalize hover:text-brand-accent transition-colors cursor-pointer"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}