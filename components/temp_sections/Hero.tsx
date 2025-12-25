'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, BRAND, LAYOUT } from '@/lib/constants';

export default function Hero() {
  const heroImage = '/images/HeroBG.png';

  // 1. STAGGERED ENTRANCE: Using ANIMATION.EASE for the child items
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.6 // Slightly longer delay for the 'Projection' feel
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: ANIMATION.EASE 
      } 
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. THE CANVAS (Background) */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroImage}
          alt={BRAND.FULL_NAME}
          fill
          className={`object-cover opacity-60 dark:opacity-40 grayscale mix-blend-luminosity ${ANIMATION.THEME_SYNC}`}
          priority
        />

        {/* GALLERY FINISH: Using the global theme sync for any color leakage */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent" />
      </motion.div>

      {/* 2. THE EDITORIAL CONTENT */}
      <div className={`absolute inset-0 flex items-end justify-start ${LAYOUT.SAFE_PADDING} pb-20 md:pb-32 z-10`}>
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className={`max-w-[${LAYOUT.MAX_WIDTH}] w-full`}
        >
          {/* Series Label */}
          <motion.div variants={item} className="flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-brand-accent" />
             <span className="text-[10px] tracking-[0.6em] uppercase text-brand-accent font-bold">
               {BRAND.NAME} Studio // Archive 2025
             </span>
          </motion.div>

          {/* Massive Editorial Title */}
          <motion.h1 
            variants={item} 
            className="text-8xl md:text-[14rem] font-serif text-white tracking-tighter leading-[0.8] mb-10 italic"
          >
            {BRAND.NAME}
          </motion.h1>

          {/* Subtext and Action */}
          <div className="flex flex-col md:flex-row items-baseline gap-12 md:gap-24">
            <motion.p 
              variants={item} 
              className="text-lg md:text-xl text-white/50 font-serif leading-relaxed max-w-md italic tracking-tight"
            >
              Capturing the dialogue between light, texture, and the passing moment.
            </motion.p>
            
            <motion.div variants={item}>
              <Link href="/gallery" className="group flex items-center gap-8">
                <span className={`text-[11px] tracking-[0.5em] uppercase text-white font-bold group-hover:text-brand-accent transition-colors ${ANIMATION.THEME_SYNC}`}>
                  Enter Gallery
                </span>
                {/* Architectural Line Animation: Synced to 700ms Master Clock */}
                <div className="relative h-[1px] w-24 bg-white/20 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-brand-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: ANIMATION.DURATION }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <p className="text-[9px] tracking-[0.5em] uppercase text-white/20 rotate-90 origin-right font-medium">
          Scroll
        </p>
      </motion.div>
      
    </section>
  );
}