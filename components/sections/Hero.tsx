'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const heroImage = '/images/HeroBG.png';

  // Explicit Type Definitions for Framer Motion to avoid errors
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delicate timing between text lines
        delayChildren: 0.4,   // Allows the global Page Template to fade in first
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] // Custom Expo Out curve for luxury feel
      } 
    }
  };

  return (
    <section className="relative h-[600px] md:h-[90vh] overflow-hidden bg-heritage z-0">
      
      {/* 1. BACKGROUND IMAGE - Subtle scale-down effect */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-[-10]"
      >
        <Image
          src={heroImage}
          alt="Saldana Florals Hero"
          fill
          className="object-cover opacity-95 dark:opacity-40"
          priority
        />
      </motion.div>

      {/* 2. OVERLAYS & GRADIENTS - Transitions handled by globals.css */}
      <div className="absolute inset-0 z-[1] bg-black/5 dark:bg-black/60 pointer-events-none" />
      
      <div className="absolute inset-0 z-[2] pointer-events-none 
        bg-gradient-to-b from-transparent via-heritage/20 to-heritage 
        dark:via-black/40 dark:to-black" 
      />

      {/* 3. HERO CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-[20]">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center p-10 md:p-20 bg-card/30 dark:bg-card/20 backdrop-blur-md rounded-[2.5rem] 
            shadow-xl dark:shadow-2xl max-w-3xl border border-white/40 dark:border-white/10 relative overflow-hidden"
        >
          <motion.span 
            variants={item} 
            className="text-[11px] tracking-logo uppercase text-accent-hover font-bold mb-8 block"
          >
            Boutique Floral Design
          </motion.span>

          <motion.h1 
            variants={item} 
            className="text-5xl md:text-8xl font-serif text-charcoal tracking-tight mb-8 leading-[1.1] drop-shadow-sm"
          >
            Saldana Florals
          </motion.h1>

          <motion.p 
            variants={item} 
            className="text-lg md:text-2xl text-muted italic mb-12 font-serif leading-relaxed"
          >
            Elegance in Bloom. Calm, Crafted, and Beautiful Arrangements.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col items-center gap-10 relative z-[100]">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#featured-flowers"
              className="relative py-6 px-16 bg-btn-base text-btn-content text-[11px] font-bold tracking-boutique uppercase rounded-full shadow-xl hover:bg-btn-accent transition-colors"
            >
              Explore the Collection
            </motion.a>

            <Link href="/gallery" className="group relative block py-2 px-8">
              <span className="relative z-10 text-[15px] tracking-boutique uppercase text-charcoal/60 group-hover:text-accent-hover font-medium transition-colors">
                View Full Gallery
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-boutique" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}