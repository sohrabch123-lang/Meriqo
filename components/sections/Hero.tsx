'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const heroImage = '/images/Kathrinflowers5.jpg';

  return (
    <section className="relative h-[600px] md:h-[90vh] overflow-hidden">
      
      {/* Background Image - Slow Zoom effect on load */}
      <div className="absolute inset-0 scale-105 animate-slow-zoom">
        <Image
          src={heroImage}
          alt="A serene arrangement of beautiful flowers"
          fill
          className="object-cover"
          priority={true}
          sizes="100vw"
        />
      </div>

      {/* 1. PROFESSIONAL OVERLAYS */}
      {/* Soft tint to normalize the image */}
      <div className="absolute inset-0 bg-charcoal/10"></div>
      {/* Gradient to ground the content card */}
      <div className="absolute inset-0 bg-gradient-to-t from-heritage/60 via-transparent to-transparent"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        
        {/* 2. THE FLOATING CARD
            - Using Heritage background with a high-end Glassmorphism effect.
            - Shadow set to a soft 'Deep Bloom' style.
        */}
        <div className="text-center p-10 md:p-20 bg-heritage/80 backdrop-blur-xl rounded-[2rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] max-w-3xl border border-white/40 relative overflow-hidden">
          
          <span className="text-[11px] tracking-[0.4em] uppercase text-brand-rose font-bold mb-6 block">
            Boutique Floral Design
          </span>

          <h1 className="text-5xl md:text-8xl font-serif text-charcoal tracking-tight mb-6 leading-[1.1]">
            Saldana Florals
          </h1>

          <p className="text-lg md:text-2xl text-muted italic mb-10 font-serif leading-relaxed">
            Elegance in Bloom. Calm, Crafted, and Beautiful Arrangements.
          </p>
          
          {/* 3. THE CALL TO ACTION
              - Swapped hardcoded rose for global CSS button variables.
              - Added the signature tracking-boutique.
          */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="#featured-flowers"
              className="inline-block py-5 px-12 bg-btn-base text-btn-content text-xs font-bold tracking-boutique uppercase rounded-full hover:bg-btn-accent transition-all duration-700 shadow-xl active:scale-95 will-change-transform"
            >
              Explore the Collection
            </a>

            {/* Subtle Eyecandy link for extra interaction */}
            <Link 
              href="/gallery" 
              className="group relative pb-1 text-[11px] tracking-boutique uppercase text-charcoal/60 hover:text-accent-hover transition-colors duration-500"
            >
              View Full Gallery
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}