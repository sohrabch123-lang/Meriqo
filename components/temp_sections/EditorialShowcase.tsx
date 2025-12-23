'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { Flower } from '@/data/flowers';
import { BezierDefinition } from 'framer-motion';

export default function EditorialShowcase({ flowers }: { flowers: Flower[] }) {
  const [first, second] = flowers;

  // Master Sync Utilities
  const themeSync = "transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] theme-sync";
  const boutiqueEase: BezierDefinition = [0.23, 1, 0.32, 1];

  return (
    <section className={`py-32 px-4 md:px-8 max-w-[1400px] mx-auto bg-transparent ${themeSync}`}>
      
      {/* 1. THE FEATURED PIECE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-40">
        <div className="lg:col-span-7">
          <Reveal duration={1.2} y={30}>
            <div className={`relative aspect-[16/10] overflow-hidden rounded-sm shadow-2xl border border-brand-charcoal/5 group ${themeSync}`}>
              <Image 
                src={first.image} 
                alt={first.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-brand-charcoal/5 dark:bg-black/20 pointer-events-none" />
            </div>
          </Reveal>
        </div>
        
        <div className="lg:col-span-5">
          <Reveal delay={0.3}>
            {/* Updated to use brand-accent variable */}
            <span className={`text-brand-accent tracking-[0.5em] uppercase text-[10px] font-bold ${themeSync}`}>
              Featured Selection
            </span>
            <h2 className={`text-5xl md:text-7xl font-serif text-brand-charcoal mt-6 mb-8 leading-tight italic ${themeSync}`}>
              {first.title}
            </h2>
            <p className={`text-brand-charcoal/60 italic text-xl font-serif mb-10 max-w-md ${themeSync}`}>
              "{first.subtitle}"
            </p>
            <Link 
              href={`/gallery/${first.slug}`}
              className={`group inline-flex items-center text-brand-charcoal text-[11px] font-bold tracking-widest uppercase pb-2 border-b border-brand-charcoal/20 hover:border-brand-accent transition-all duration-500 ${themeSync}`}
            >
              View Details 
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* 2. THE DIALOGUE */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        <div className="md:col-span-5 lg:col-span-4 md:pt-24">
          <Reveal delay={0.2} y={20}>
            <div className={`relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl mb-8 border border-brand-charcoal/5 ${themeSync}`}>
              <Image src={second.image} alt={second.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <h3 className={`text-3xl font-serif text-brand-charcoal italic ${themeSync}`}>{second.title}</h3>
            <p className={`text-brand-accent tracking-widest text-[10px] uppercase mt-3 ${themeSync}`}>{second.category}</p>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 lg:col-start-8 self-center">
          <Reveal delay={0.4}>
            <div className="border-l border-brand-charcoal/10 pl-12 py-8">
              <h3 className={`text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-snug italic ${themeSync}`}>
                Every stem <br/> tells a story.
              </h3>
              <p className={`text-brand-charcoal/60 text-lg font-serif italic mb-10 max-w-sm ${themeSync}`}>
                Explore our full digital garden of bespoke arrangements and seasonal creations.
              </p>
              <Link 
                href="/gallery" 
                className={`inline-block px-10 py-5 bg-brand-charcoal text-[rgb(var(--bg-main))] rounded-full hover:bg-brand-accent transition-colors duration-500 tracking-widest uppercase text-[11px] font-bold shadow-lg ${themeSync}`}
              >
                Enter the Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}