'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroImage = '/images/HeroBG.png';

  return (
    /* FIXED: Using the exact dark color (#0A0B09) for the section background */
    <section className="relative h-[600px] md:h-[90vh] overflow-hidden bg-heritage dark:bg-[#0A0B09] transition-colors duration-1000 ease-in-out z-0">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 scale-105 z-[-10]">
        <Image
          src={heroImage}
          alt="Saldana Florals Hero"
          fill
          className="object-cover opacity-95 dark:opacity-40 transition-opacity duration-1000 ease-in-out"
          priority
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-[1] bg-black/5 dark:bg-black/60 pointer-events-none transition-colors duration-1000 ease-in-out" />
      
      {/* FIXED GRADIENTS: 
          To remove the "hard line," the gradient MUST end on the exact same color 
          as the section below it (#0A0B09).
      */}
      
      {/* 1. Light Mode Gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-heritage/20 to-heritage opacity-100 dark:opacity-0 pointer-events-none transition-opacity duration-1000 ease-in-out" />
      
      {/* 2. Dark Mode Gradient - FIXED to match your screenshot background */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-[#0A0B09]/40 to-[#0A0B09] opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-1000 ease-in-out" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-[20]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-10 md:p-20 bg-card/30 dark:bg-card/20 backdrop-blur-md rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.8)] max-w-3xl border border-white/40 dark:border-white/10 relative overflow-hidden transition-all duration-1000 ease-in-out"
        >
          <span className="text-[11px] tracking-[0.5em] uppercase text-accent-hover font-bold mb-8 block transition-colors duration-1000 ease-in-out">
            Boutique Floral Design
          </span>

          <h1 className="text-5xl md:text-8xl font-serif text-charcoal tracking-tight mb-8 leading-[1.1] transition-colors duration-1000 ease-in-out drop-shadow-sm">
            Saldana Florals
          </h1>

          <p className="text-lg md:text-2xl text-muted italic mb-12 font-serif leading-relaxed transition-colors duration-1000 ease-in-out">
            Elegance in Bloom. Calm, Crafted, and Beautiful Arrangements.
          </p>
          
          <div className="flex flex-col items-center gap-10 relative z-[100]">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#featured-flowers"
              className="relative py-6 px-16 bg-btn-base text-btn-content text-[11px] font-bold tracking-[0.3em] uppercase rounded-full shadow-xl transition-all duration-1000 ease-in-out hover:bg-btn-accent"
            >
              Explore the Collection
            </motion.a>

            <Link href="/gallery" className="group relative block py-2 px-8 cursor-pointer">
              <span className="relative z-10 text-[15px] tracking-[0.4em] uppercase text-charcoal/60 transition-colors duration-1000 ease-in-out group-hover:text-accent-hover font-medium">
                View Full Gallery
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] bg-accent-hover w-0 group-hover:w-full transition-all duration-1000 ease-in-out" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}