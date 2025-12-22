'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function FlowerDetailClient({ flower, prevSlug, nextSlug }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
      
      {/* 1. TOP NAVIGATION */}
      <Reveal duration={0.6} y={0} instant>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 md:mb-16">
          <Link 
            href="/gallery" 
            className="group flex items-center bg-sage/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-sage/20 transition-all duration-500 hover:border-accent-hover/40"
          >
            <span className="text-[11px] md:text-xs tracking-boutique uppercase text-charcoal font-bold group-hover:text-accent-hover transition-colors">
              &larr; Collection
            </span>
          </Link>
          
          <div className="flex items-center bg-sage/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-sage/20">
            <Link href={`/gallery/${prevSlug}`} className="group px-6 py-2">
              <span className="text-[10px] md:text-xs tracking-boutique uppercase text-charcoal/80 group-hover:text-accent-hover transition-colors">
                Prev
              </span>
            </Link>
            <div className="h-4 w-[1px] bg-charcoal/10 dark:bg-white/20"></div>
            <Link href={`/gallery/${nextSlug}`} className="group px-6 py-2">
              <span className="text-[10px] md:text-xs tracking-boutique uppercase text-charcoal/80 group-hover:text-accent-hover transition-colors">
                Next
              </span>
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* LEFT: IMAGE SECTION */}
        <div className="w-full lg:w-1/2">
          <Reveal duration={0.8} y={15} instant delay={0.1}>
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-card border border-sage/5">
              <Image 
                src={flower.image} 
                alt={flower.alt} 
                fill 
                className="object-cover transition-transform duration-[2s] hover:scale-105" 
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* RIGHT: CONTENT SECTION */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 space-y-8">
          <div>
            <Reveal delay={0.2} y={10} instant>
              <span className="text-accent-hover font-bold tracking-logo uppercase text-[10px] md:text-[11px] mb-4 block">
                {flower.category}
              </span>
            </Reveal>

            <Reveal delay={0.25} duration={0.9} y={15} instant>
              <h1 className="text-5xl md:text-7xl font-serif text-charcoal leading-tight mb-4">
                {flower.title}
              </h1>
            </Reveal>

            <Reveal delay={0.3} duration={0.9} y={10} instant>
              <p className="text-muted italic text-xl md:text-2xl font-serif">
                {flower.subtitle}
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.35} duration={0.8} y={10} instant>
            <p className="text-3xl md:text-4xl text-charcoal font-light">
              ${flower.price}.00
            </p>
          </Reveal>
          
          <Reveal delay={0.4} y={0} instant>
            <div className="h-px bg-sage/20 w-full"></div>
          </Reveal>
          
          <Reveal delay={0.45} duration={1} y={10} instant>
            <p className="text-charcoal/80 text-lg md:text-xl leading-relaxed font-serif italic max-w-prose">
              {flower.description}
            </p>
          </Reveal>

          <Reveal delay={0.55} duration={0.6} y={5} instant>
            <button className="w-full py-6 bg-btn-base text-btn-content rounded-full hover:bg-btn-accent transition-all duration-500 tracking-boutique uppercase text-[12px] font-bold shadow-xl active:scale-[0.98]">
              Inquire for Arrangement
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}