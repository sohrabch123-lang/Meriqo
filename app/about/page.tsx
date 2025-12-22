'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    /* Root wrapper uses bg-transparent to allow the RootLayout background to show through.
       The 'theme-sync' utility ensures background transitions match your globals.css. */
    <div className="min-h-screen bg-transparent selection:bg-brand-accent/20 theme-sync">
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-32">
        
        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand-accent font-bold mb-6 block">
              The Visionary
            </span>
            
            {/* Using text-brand-charcoal because it auto-flips to cream in dark mode via CSS variables */}
            <h1 className="text-6xl md:text-8xl font-serif text-brand-charcoal leading-[0.9] mb-10 italic theme-sync">
              Behind the <br /> Perspective.
            </h1>
            
            <p className="text-lg md:text-xl text-brand-charcoal/60 font-serif leading-relaxed max-w-lg mb-8 theme-sync">
              Saldana is a study of permanence in a world of fleeting moments. We capture the dialogue between natural light and raw texture.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-accent" />
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 theme-sync">Est. 2025</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sage dark:bg-white/5 shadow-2xl theme-sync"
          >
            <Image 
              src="/images/about-artist.png"
              alt="Saldana Photographer"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </section>

        {/* 2. PHILOSOPHY SECTION */}
        <section className="border-t border-brand-charcoal/5 dark:border-white/10 pt-32 theme-sync">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">The Medium</h3>
              <p className="text-brand-charcoal/80 font-serif leading-relaxed theme-sync">
                Utilizing both analog depth and digital precision to curate a visual language that feels tactile and timeless.
              </p>
            </div>
            <div>
              <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">The Intent</h3>
              <p className="text-brand-charcoal/80 font-serif leading-relaxed theme-sync">
                Every frame is a composition of silence. We aim to strip away the noise until only the essential beauty remains.
              </p>
            </div>
            <div>
              <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">The Legacy</h3>
              <p className="text-brand-charcoal/80 font-serif leading-relaxed theme-sync">
                Visual stories that don't just sit on a screen, but feel like they belong on the walls of a well-lived home.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}