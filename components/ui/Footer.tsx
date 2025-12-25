'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, BRAND, LAYOUT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className={`relative h-[80vh] w-full overflow-hidden bg-brand-charcoal ${ANIMATION.THEME_SYNC}`}>
      {/* 1. THE CANVAS: Background Image with Master Easing */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/footer-bg.jpg" 
          alt="The Archive Entrance" 
          fill 
          className={`object-cover opacity-40 grayscale transition-transform duration-[10s] hover:scale-110 ${ANIMATION.THEME_SYNC}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
      </div>

      {/* 2. THE EDITORIAL CORE */}
      <div className={`relative z-10 flex h-full flex-col items-center justify-center text-center ${LAYOUT.SAFE_PADDING}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          viewport={{ once: true }}
        >
          <span className={`mb-4 block text-[10px] font-bold uppercase tracking-[0.8em] text-brand-accent ${ANIMATION.THEME_SYNC}`}>
            Deep Dive
          </span>
          
          <Link href="/gallery" className="group relative inline-block">
            <h2 className={`font-serif text-6xl md:text-9xl italic tracking-tighter text-heritage group-hover:text-brand-accent transition-colors ${ANIMATION.THEME_SYNC}`}>
              The Archive
            </h2>
            {/* Animated Underline: Synced to 700ms Master Clock */}
            <div className={`mt-4 h-[1px] w-0 bg-brand-accent group-hover:w-full transition-all ${ANIMATION.THEME_SYNC}`} />
          </Link>
          
          <p className={`mt-12 max-w-xs text-[11px] leading-loose tracking-[0.2em] uppercase text-heritage/40 ${ANIMATION.THEME_SYNC}`}>
            A curated selection of works from {BRAND.YEAR_RANGE}. London / Paris / Milan.
          </p>
        </motion.div>

        {/* 3. LEGAL & UTILITY: Using LAYOUT.MAX_WIDTH for alignment */}
        <div className={`absolute bottom-12 w-full max-w-[${LAYOUT.MAX_WIDTH}] px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-heritage/5 pt-12 ${ANIMATION.THEME_SYNC}`}>
          <p className={`text-[9px] tracking-widest text-heritage/20 uppercase ${ANIMATION.THEME_SYNC}`}>
            &copy; {new Date().getFullYear()} {BRAND.FULL_NAME}. All rights reserved.
          </p>
          
          <div className="flex gap-12 text-[9px] tracking-widest text-heritage/40 uppercase font-bold">
            <Link href="/legal" className={`hover:text-brand-accent transition-colors ${ANIMATION.THEME_SYNC}`}>Terms</Link>
            <Link href="/privacy" className={`hover:text-brand-accent transition-colors ${ANIMATION.THEME_SYNC}`}>Privacy</Link>
            <Link href="#top" className={`italic font-serif capitalize hover:text-brand-accent transition-colors ${ANIMATION.THEME_SYNC}`}>Back to Top</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}