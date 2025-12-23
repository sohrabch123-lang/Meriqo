'use client';

import { motion, BezierDefinition } from 'framer-motion';
import Image from 'next/image';

export default function HomeGallery() {
  const onceConfig = { once: true, amount: 0.2 };

  // FIX: Explicitly typed as BezierDefinition so TS knows it's exactly 4 numbers
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];

  // Utility for internal component syncing
  const themeTransition = "transition-colors duration-[0.4s] ease-[cubic-bezier(0.23,1,0.32,1)] theme-sync";

  return (
    <section className={`bg-[rgb(var(--bg-main))] pb-10 ${themeTransition}`}>
      
      {/* 1. THE CINEMATIC BLEED */}
      <div className="relative h-[70vh] w-full mb-24 md:mb-32 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={onceConfig} 
          transition={{ duration: 1.5, ease: boutiqueEase }}
          className="relative h-full w-full"
        >
          <Image 
            src="/images/image4.jpg" 
            alt="Cinematic Scale" 
            fill 
            priority 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        <div className={`absolute bottom-12 left-12 text-[rgb(var(--bg-main))] uppercase text-[9px] tracking-[0.6em] z-10 ${themeTransition}`}>
          Scale // 001 — Full Bleed
        </div>
      </div>

      {/* 2. THE OFFSET DUET */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={onceConfig} 
          transition={{ duration: 0.8, ease: boutiqueEase }}
          className="w-full md:w-1/2 aspect-[4/5] relative bg-brand-charcoal/5"
        >
          <Image 
            src="/images/image22.jpeg" 
            alt="Portrait Study" 
            fill 
            className="object-cover"
          />
        </motion.div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={onceConfig}
            transition={{ delay: 0.2, duration: 0.5, ease: boutiqueEase }}
          >
            <p className={`text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/30 font-bold mb-4 ${themeTransition}`}>
               Observation 042
            </p>
            <p className={`font-serif italic text-xl text-brand-charcoal/60 max-w-xs leading-relaxed ${themeTransition}`}>
              "The beauty of the fragment is that it suggests the whole without revealing it."
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. THE FOCUS POINT */}
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={onceConfig} 
          transition={{ duration: 0.8, ease: boutiqueEase }}
          className="w-full max-w-md aspect-square relative shadow-2xl mb-8"
        >
          <Image 
            src="/images/image16.jpeg" 
            alt="Intimate Detail" 
            fill 
            className="object-cover grayscale"
          />
        </motion.div>
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 64 }}
          viewport={onceConfig}
          className={`w-[1px] bg-brand-accent/30 ${themeTransition}`} 
        />
      </div>

    </section>
  );
}