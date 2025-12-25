'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ANIMATION, LAYOUT, BRAND } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-transparent ${ANIMATION.THEME_SYNC}`}>
      
      <main className={`${LAYOUT.NAV_SPACER} ${LAYOUT.SAFE_PADDING} max-w-[${LAYOUT.MAX_WIDTH}] mx-auto`}>
        
        {/* HERO SECTION: Locked to Viewport Height */}
        <section className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-[calc(100vh-120px)] min-h-[600px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION.DURATION, ease: ANIMATION.EASE }}
            className="order-2 lg:order-1"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand-accent font-bold mb-6 block">
              The Visionary
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-charcoal leading-[0.9] mb-10 italic">
              Behind the <br /> Perspective.
            </h1>
            
            <p className="text-lg text-brand-charcoal/60 font-serif leading-relaxed max-w-lg mb-8">
              {BRAND.NAME} is a study of permanence in a world of fleeting moments. We capture the dialogue between natural light and raw texture.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-accent" />
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40">
                Est. {BRAND.ESTABLISHED}
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: ANIMATION.EASE }}
            /* The image height is now responsive to the screen height (vh).
               This prevents it from ever being taller than the window.
            */
            className="relative w-full h-[60vh] lg:h-[75vh] max-h-[700px] overflow-hidden rounded-[2rem] bg-brand-charcoal/5 shadow-2xl order-1 lg:order-2"
          >
            <Image 
              src="/images/about-artist.png"
              alt="Saldana"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </motion.div>
        </section>

        {/* 2. PHILOSOPHY SECTION (Pushed below the fold) */}
        <section className="border-t border-brand-charcoal/5 pt-32 mt-20 pb-40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "The Medium", text: "Utilizing analog depth and digital precision for a visual language." },
              { title: "The Intent", text: "Every frame is a composition of silence. We strip away the noise." },
              { title: "The Legacy", text: "Visual stories that belong on the walls of a well-lived home." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-brand-accent font-bold tracking-widest uppercase text-[10px] mb-6">{item.title}</h3>
                <p className="text-brand-charcoal/70 font-serif leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}