'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { Flower } from '@/data/flowers';

export default function EditorialShowcase({ flowers }: { flowers: Flower[] }) {
  // We take the 2 featured flowers you selected
  const [first, second] = flowers;

  return (
    <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* 1. THE FEATURED PIECE (Leica Style: Large & Intentional) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-40">
        <div className="lg:col-span-7">
          <Reveal duration={1.2} y={30}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-2xl border border-sage/10 group">
              <Image 
                src={first.image} 
                alt={first.title}
                fill
                className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
            </div>
          </Reveal>
        </div>
        
        <div className="lg:col-span-5">
          <Reveal delay={0.3}>
            <span className="text-accent-hover tracking-[0.5em] uppercase text-[10px] font-bold">Featured Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal mt-6 mb-8 leading-tight">
              {first.title}
            </h2>
            <p className="text-muted italic text-xl font-serif mb-10 max-w-md">
              "{first.subtitle}"
            </p>
            <Link 
              href={`/gallery/${first.slug}`}
              className="group inline-flex items-center text-charcoal text-[11px] font-bold tracking-widest uppercase pb-2 border-b border-charcoal/20 hover:border-accent-hover transition-all"
            >
              View Details 
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* 2. THE DIALOGUE (Asymmetry & The "See All" Call to Action) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Second Image - Offset and Tall */}
        <div className="md:col-span-5 lg:col-span-4 md:pt-24">
          <Reveal delay={0.2} y={20}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl mb-8">
              <Image src={second.image} alt={second.title} fill className="object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-charcoal">{second.title}</h3>
            <p className="text-accent-hover tracking-widest text-[10px] uppercase mt-3">{second.category}</p>
          </Reveal>
        </div>

        {/* The "See All" - Becomes an Artistic Negative Space */}
        <div className="md:col-span-6 md:col-start-7 lg:col-start-8 self-center">
          <Reveal delay={0.4}>
            <div className="border-l border-sage/30 pl-12 py-8">
              <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-snug">
                Every stem <br/> tells a story.
              </h3>
              <p className="text-muted text-lg font-serif italic mb-10 max-w-sm">
                Explore our full digital garden of bespoke arrangements and seasonal creations.
              </p>
              <Link 
                href="/gallery" 
                className="inline-block px-10 py-5 bg-charcoal text-heritage rounded-full hover:bg-accent-hover transition-colors duration-500 tracking-boutique uppercase text-[11px] font-bold shadow-lg"
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