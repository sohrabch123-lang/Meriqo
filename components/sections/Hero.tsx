'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const heroImage = '/images/Kathrinflowers5.jpg';

  return (
    <section className="relative h-[600px] md:h-[90vh] overflow-hidden bg-[#0A0B09] z-0 transition-colors duration-700">
      
      {/* BACKGROUND IMAGE - Darkened the opacity for better contrast */}
      <div className="absolute inset-0 scale-105 animate-slow-zoom z-[-10]">
        <Image
          src={heroImage}
          alt="Saldana Florals Hero"
          fill
          className="object-cover opacity-80 dark:opacity-40 transition-opacity duration-700"
          priority
        />
      </div>

      {/* 1. LAYERED OVERLAYS - This is what stops the "Milky" look */}
      {/* A solid dark vignette to kill the white edges of the image */}
      <div className="absolute inset-0 z-[1] bg-black/20 dark:bg-black/60" />
      
      {/* Gradient that forces the card area to be dark */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-[#0F110D]/40 to-[#0F110D] dark:via-black/20 dark:to-black/80" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-[10]">
        
        {/* THE CARD
            FIX: Switched to a deeper charcoal (#121410) and lowered opacity to 40% 
            while keeping blur high. This creates a "smokey" glass look rather than "grey" glass.
        */}
        <div className="text-center p-10 md:p-20 
          bg-heritage/80 
          dark:bg-[#121410]/40 
          backdrop-blur-3xl 
          rounded-[2.5rem] 
          shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] 
          dark:shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] 
          max-w-3xl 
          border border-white/20 
          dark:border-white/[0.03] 
          relative overflow-hidden transition-all duration-700"
        >
          
          <span className="text-[11px] tracking-[0.5em] uppercase text-brand-accent font-bold mb-8 block opacity-90">
            Boutique Floral Design
          </span>

          <h1 className="text-5xl md:text-8xl font-serif text-charcoal transition-colors duration-500 tracking-tight mb-8 leading-[1.1]">
            Saldana Florals
          </h1>

          <p className="text-lg md:text-2xl text-muted italic mb-12 font-serif leading-relaxed max-w-xl mx-auto opacity-80">
            Elegance in Bloom. Calm, Crafted, and Beautiful Arrangements.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a
              href="#featured-flowers"
              className="inline-block py-5 px-14 bg-btn-base text-btn-content text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-btn-accent transition-all duration-700 shadow-2xl active:scale-95 hover:-translate-y-1"
            >
              Explore the Collection
            </a>

            <Link 
              href="/gallery" 
              className="group relative pb-1 text-[10px] tracking-[0.3em] uppercase text-charcoal/50 hover:text-brand-accent transition-colors duration-500"
            >
              View Full Gallery
              <span className="absolute bottom-0 left-0 h-[1px] bg-brand-accent w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}