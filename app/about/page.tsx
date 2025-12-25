'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT, BRAND } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-transparent selection:bg-brand-accent/20 ${ANIMATION.THEME_SYNC}`}>
      
      {/* TIGHTER TOP ALIGNMENT: Reduced pt-40 to pt-12 to respect the clean header space */}
      <main className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING} pt-12 pb-32`}>
        
        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -15, y: 5 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: ANIMATION.EASE }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand-accent font-bold mb-6 block">
              The Visionary
            </span>
            
            <h1 className={`text-6xl md:text-8xl font-serif text-brand-charcoal leading-[0.9] mb-10 italic ${ANIMATION.THEME_SYNC}`}>
              Behind the <br /> Perspective.
            </h1>
            
            <p className={`text-lg md:text-xl text-brand-charcoal/60 font-serif leading-relaxed max-w-lg mb-8 ${ANIMATION.THEME_SYNC}`}>
              {BRAND.NAME} is a study of permanence in a world of fleeting moments. We capture the dialogue between natural light and raw texture.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-accent" />
              <span className={`text-[10px] uppercase tracking-widest text-brand-charcoal/40 ${ANIMATION.THEME_SYNC}`}>
                Est. {BRAND.ESTABLISHED}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            /* Cinematic entrance for the artist portrait */
            transition={{ duration: 1.2, ease: ANIMATION.EASE }}
            className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sage dark:bg-white/5 shadow-2xl ${ANIMATION.THEME_SYNC}`}
          >
            <Image 
              src="/images/about-artist.png"
              alt={`${BRAND.NAME} Photographer`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </motion.div>
        </section>

        {/* 2. PHILOSOPHY SECTION */}
        <section className={`border-t border-brand-charcoal/5 dark:border-white/10 pt-32 ${ANIMATION.THEME_SYNC}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION.DURATION, delay: 0.1, ease: ANIMATION.EASE }}
            >
              <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">The Medium</h3>
              <p className={`text-brand-charcoal/80 font-serif leading-relaxed ${ANIMATION.THEME_SYNC}`}>
                Utilizing both analog depth and digital precision to curate a visual language that feels tactile and timeless.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION.DURATION, delay: 0.2, ease: ANIMATION.EASE }}
            >
              <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">The Intent</h3>
              <p className={`text-brand-charcoal/80 font-serif leading-relaxed ${ANIMATION.THEME_SYNC}`}>
                Every frame is a composition of silence. We aim to strip away the noise until only the essential beauty remains.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION.DURATION, delay: 0.3, ease: ANIMATION.EASE }}
            >
              <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">The Legacy</h3>
              <p className={`text-brand-charcoal/80 font-serif leading-relaxed ${ANIMATION.THEME_SYNC}`}>
                Visual stories that don't just sit on a screen, but feel like they belong on the walls of a well-lived home.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}