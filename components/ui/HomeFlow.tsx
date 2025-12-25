'use client';

import { motion, BezierDefinition } from 'framer-motion';
import Image from 'next/image';

export default function HomeFlow() {
  // 1. SYNCED CONSTANTS: Matching the 700ms Master Clock
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];
  const themeSync = "transition-colors duration-700 ease-[var(--ease-boutique)]";

  return (
    <div className={`bg-[rgb(var(--bg-main))] ${themeSync} min-h-screen`}>
      
      {/* SECTION 01: THE MANIFESTO */}
      <section className="py-40 md:py-64 flex flex-col items-center px-8">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 120 }}
          viewport={{ once: true, amount: 0.5 }}
          /* Transition updated to 0.7 to match the theme fade */
          transition={{ duration: 0.7, ease: boutiqueEase }}
          className="w-[1px] bg-brand-accent mb-16 hidden md:block"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: boutiqueEase }}
          className="max-w-3xl text-center"
        >
          <h2 className={`text-3xl md:text-5xl font-serif italic text-brand-charcoal leading-[1.3] tracking-tight ${themeSync}`}>
            "We do not merely document subjects; we curate the interplay between shadow, grain, and stillness."
          </h2>
          <p className={`mt-12 text-[10px] tracking-[0.4em] uppercase text-brand-charcoal/40 font-bold ${themeSync}`}>
            The Saldana Philosophy
          </p>
        </motion.div>
      </section>

      {/* SECTION 02: THE ASYMMETRIC FRAGMENTS */}
      <section className="pb-64 px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative">
          
          {/* Fragment 01 */}
          <div className="flex justify-start mb-48">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              /* Duration set to 0.7 for entrance, ease synced to CSS variable */
              transition={{ duration: 0.7, ease: boutiqueEase }}
              className={`relative w-full md:w-3/5 aspect-[16/9] bg-brand-charcoal/5 group shadow-2xl ${themeSync}`}
            >
              <Image 
                src="/images/fragment-1.jpg" 
                alt="Atmospheric Study" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-out"
              />
              <span className={`absolute -bottom-10 left-0 text-[9px] tracking-[0.5em] uppercase text-brand-charcoal/30 ${themeSync}`}>
                Archive // Study 001
              </span>
            </motion.div>
          </div>

          {/* Fragment 02 */}
          <div className="flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              /* Added 0.7 duration and matched ease */
              transition={{ duration: 0.7, delay: 0.2, ease: boutiqueEase }}
              className={`relative w-full md:w-1/3 aspect-[3/4] bg-brand-charcoal/5 z-10 md:-mt-32 shadow-2xl ${themeSync}`}
            >
              <Image 
                src="/images/fragment-2.jpg" 
                alt="Detail Study" 
                fill 
                className="object-cover transition-all duration-700 ease-in-out"
              />
              <span className={`absolute -bottom-10 right-0 text-[9px] tracking-[0.5em] uppercase text-brand-charcoal/30 ${themeSync}`}>
                Detail // Perspective 04
              </span>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}