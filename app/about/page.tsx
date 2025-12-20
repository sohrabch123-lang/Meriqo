'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    /* MATCHED: 1000ms ease-in-out for the main background */
    <div className="min-h-screen bg-heritage transition-colors duration-1000 ease-in-out flex flex-col items-center justify-center px-6 py-24">
      
      {/* The Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        /* UPDATED: Changed duration-500 to 1000 to match border/shadow transitions */
        className="relative w-full max-w-xl aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border border-sage/10 transition-all duration-1000 ease-in-out"
      >
        <Image 
          src="/images/kathrin-portrait.png" 
          alt="Charlotte - The Heart Behind the Blooms"
          fill
          priority
          className="object-cover grayscale-[15%] hover:scale-105 transition-transform duration-[2000ms] ease-out"
        />
        {/* Subtle dark mode image dimming - MATCHED: duration-1000 */}
        <div className="absolute inset-0 bg-black/0 dark:bg-black/20 transition-colors duration-1000 ease-in-out" />
      </motion.div>

      {/* The Story Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-xl text-center mt-16"
      >
        {/* Heading - MATCHED: duration-1000 */}
        <h1 className="text-4xl md:text-6xl font-serif text-charcoal tracking-tight mb-8 transition-colors duration-1000 ease-in-out">
          My Love, The Heart Behind the Blooms
        </h1>
        
        {/* Quote - MATCHED: duration-1000 */}
        <p className="text-lg md:text-xl text-muted font-serif italic leading-relaxed mb-10 transition-colors duration-1000 ease-in-out">
          "Flowers are more than just decoration; they are a silent language of kindness and creation."
        </p>

        {/* Story details - MATCHED: duration-1000 */}
        <div className="space-y-8 text-muted/90 text-sm md:text-base leading-loose tracking-[0.1em] font-sans transition-colors duration-1000 ease-in-out">
          <p className="max-w-md mx-auto">
            Charlotte spent her life believing that hands were meant for making. 
            Every petal arranged in this gallery is a reflection of a life dedicated 
            to beauty, silence, and the glory of God's timing.
          </p>
          
          {/* THE BOUTIQUE DIVIDER */}
          <div className="flex flex-col items-center pt-12">
            <div className="relative flex items-center justify-center w-32 mb-8">
              {/* UPDATED: duration-1000 for the divider line color shift */}
              <div className="w-full h-[1px] bg-sage/30 transition-colors duration-1000 ease-in-out"></div>
              {/* UPDATED: duration-1000 for the accent diamond color shift */}
              <div className="absolute w-1.5 h-1.5 rotate-45 bg-accent-hover shadow-[0_0_8px_rgba(var(--brand-accent),0.4)] transition-colors duration-1000 ease-in-out"></div>
            </div>

            {/* UPDATED: Label duration-1000 */}
            <p className="text-accent-hover font-bold tracking-[0.4em] uppercase text-[10px] mb-2 transition-colors duration-1000 ease-in-out">
              Connect With Us
            </p>
            <a 
              href="mailto:hello@saldanaflorals.com" 
              className="text-charcoal hover:text-accent-hover transition-colors duration-300 border-b border-transparent hover:border-accent-hover text-sm pb-1"
            >
              hello@saldanaflorals.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}