'use client';

import Image from 'next/image';
import Link from 'next/link';
// --- BOUTIQUE IMPORTS ---
import { ANIMATION } from '@/lib/constants';

export default function FlowerCard({ flower }: { flower: any }) {
  return (
    <Link href={`/gallery/${flower.slug}`} className="group block outline-none">
      {/* 1. THE FRAME: Using the Master Clock for the border and background fade */}
      <div className={`relative aspect-[4/5] overflow-hidden bg-card border border-brand-charcoal/5 rounded-sm ${ANIMATION.THEME_SYNC}`}>
        <Image 
          src={flower.image} 
          alt={flower.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        
        {/* THE "LEICA" HOVER: 
            A very subtle tint that matches the 700ms Boutique duration. 
            isolation-isolate ensures the tint doesn't bleed into the border.
        */}
        <div 
          className={`absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-colors ${ANIMATION.THEME_SYNC}`} 
          style={{ isolation: 'isolate' }}
        />
      </div>

      {/* 2. THE CAPTION: Explicitly syncing text colors to the theme engine */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-baseline">
          <h3 className={`text-xl font-serif text-brand-charcoal group-hover:text-brand-accent transition-colors ${ANIMATION.THEME_SYNC}`}>
            {flower.title}
          </h3>
          <span className={`text-[10px] tracking-widest text-brand-charcoal/40 font-sans ${ANIMATION.THEME_SYNC}`}>
            ${flower.price}
          </span>
        </div>
        
        {/* Category Label: Using the accent color for that 'high-fashion' editorial look */}
        <p className={`text-[9px] tracking-[0.3em] uppercase text-brand-accent font-bold ${ANIMATION.THEME_SYNC}`}>
          {flower.category}
        </p>
      </div>
    </Link>
  );
}