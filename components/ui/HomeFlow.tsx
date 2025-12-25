'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT, BRAND } from '@/lib/constants';

export default function HomeFlow() {
  return (
    <div className={`bg-[rgb(var(--bg-main))] ${ANIMATION.THEME_SYNC} min-h-screen overflow-x-hidden`}>
      
      {/* SECTION 01: THE MANIFESTO 
          This section acts as the 'breathing room' between the Hero and the Fragments.
      */}
      <section className="py-48 md:py-72 flex flex-col items-center px-8">
        {/* The Architectural Lead Line: Synced to the Master Clock */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 160, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: ANIMATION.EASE }}
          className="w-[1px] bg-brand-accent/40 mb-20 hidden md:block"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
          className="max-w-4xl text-center"
        >
          <h2 className={`text-2xl md:text-5xl font-serif italic text-brand-charcoal leading-[1.4] tracking-tight ${ANIMATION.THEME_SYNC}`}>
            &ldquo;We do not merely document subjects; we curate the interplay between shadow, grain, and stillness.&rdquo;
          </h2>
          <p className={`mt-16 text-[9px] tracking-[0.6em] uppercase text-brand-accent font-bold ${ANIMATION.THEME_SYNC}`}>
            The {BRAND.NAME} Philosophy
          </p>
        </motion.div>
      </section>

      {/* SECTION 02: THE ASYMMETRIC FRAGMENTS 
          Restrained by MAX_WIDTH to create a "boxed" gallery feel in the center of the screen.
      */}
      <section className={`pb-80 ${LAYOUT.SAFE_PADDING}`}>
        <div className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto relative`}>
          
          {/* Fragment 01: The Horizon Piece */}
          <div className="flex justify-start mb-64">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
              /* max-h-[50vh] prevents the wide image from pushing too far down */
              className={`relative w-full md:w-3/5 aspect-[16/9] max-h-[500px] bg-brand-charcoal/5 group shadow-3xl overflow-hidden rounded-sm ${ANIMATION.THEME_SYNC}`}
            >
              <Image 
                src="/images/fragment-1.jpg" 
                alt="Atmospheric Study" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-[var(--ease-boutique)]"
              />
              <span className={`absolute -bottom-12 left-0 text-[8px] tracking-[0.5em] uppercase text-brand-charcoal/30 ${ANIMATION.THEME_SYNC}`}>
                Archive // Study 001
              </span>
            </motion.div>
          </div>

          {/* Fragment 02: The Detail Piece 
              Offset vertically using negative margin to overlap the flow.
          */}
          <div className="flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: ANIMATION.DURATION, delay: 0.2, ease: ANIMATION.EASE }}
              className={`relative w-full md:w-[35%] aspect-[3/4] max-h-[600px] bg-brand-charcoal/5 z-10 md:-mt-48 shadow-3xl overflow-hidden rounded-sm ${ANIMATION.THEME_SYNC}`}
            >
              <Image 
                src="/images/fragment-2.jpg" 
                alt="Detail Study" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-[var(--ease-boutique)]"
              />
              <span className={`absolute -bottom-12 right-0 text-[8px] tracking-[0.5em] uppercase text-brand-charcoal/30 ${ANIMATION.THEME_SYNC}`}>
                Detail // Perspective 04
              </span>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}