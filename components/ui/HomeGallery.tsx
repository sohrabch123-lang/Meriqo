'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT } from '@/lib/constants';

export default function HomeGallery() {
  const onceConfig = { once: true, amount: 0.2 };

  return (
    <section className={`bg-[rgb(var(--bg-main))] pb-32 ${ANIMATION.THEME_SYNC}`}>
      
      {/* 1. THE CINEMATIC BLEED
          FIX: We use h-[calc(100vh-80px)] to ensure this image fits 
          perfectly in the viewport on load without bleeding off the bottom.
      */}
      <div className="relative h-[calc(100vh-80px)] w-full mb-24 md:mb-40 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={onceConfig} 
          transition={{ duration: 1.5, ease: ANIMATION.EASE }}
          className="relative h-full w-full"
        >
          <Image 
            src="/images/image4.jpg" 
            alt="Cinematic Scale" 
            fill 
            priority 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-[var(--ease-boutique)]"
          />
        </motion.div>
        
        {/* Decorative Gradient to ensure the label is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent pointer-events-none" />

        <div className={`absolute bottom-12 left-12 text-[rgb(var(--bg-main))] uppercase text-[9px] tracking-[0.6em] z-10 ${ANIMATION.THEME_SYNC}`}>
          Scale // 001 — Full Bleed
        </div>
      </div>

      {/* 2. THE OFFSET DUET 
          Uses LAYOUT constants to keep the "Zoomed Out" boutique framing.
      */}
      <div className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} flex flex-col md:flex-row items-center mb-40`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={onceConfig} 
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          /* max-h-[60vh] ensures this image doesn't get too tall on ultra-wide screens */
          className={`w-full md:w-1/2 aspect-[4/5] max-h-[600px] relative bg-brand-charcoal/5 overflow-hidden rounded-sm shadow-xl ${ANIMATION.THEME_SYNC}`}
        >
          <Image 
            src="/images/image22.jpeg" 
            alt="Portrait Study" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
        
        <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pl-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={onceConfig}
            transition={{ delay: 0.2, duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          >
            <p className={`text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold mb-6 ${ANIMATION.THEME_SYNC}`}>
                Observation 042
            </p>
            <p className={`font-serif italic text-2xl md:text-3xl text-brand-charcoal/70 max-w-sm leading-[1.4] ${ANIMATION.THEME_SYNC}`}>
              &ldquo;The beauty of the fragment is that it suggests the whole without revealing it.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. THE FOCUS POINT */}
      <div className="flex flex-col items-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={onceConfig} 
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          /* aspect-square keeps the focus tight and gallery-like */
          className={`w-full max-w-md aspect-square relative shadow-2xl mb-12 overflow-hidden rounded-sm ${ANIMATION.THEME_SYNC}`}
        >
          <Image 
            src="/images/image16.jpeg" 
            alt="Intimate Detail" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
        
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          viewport={onceConfig}
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          className={`w-[1px] bg-brand-accent/40 ${ANIMATION.THEME_SYNC}`} 
        />
      </div>

    </section>
  );
}