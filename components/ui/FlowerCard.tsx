'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Flower } from '@/data/flowers';

interface FlowerCardProps {
  flower: Flower;
}

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <Link href={`/gallery/${flower.slug}`} className="block group">
      {/* 1. Card Container: bg-card flips from Pearl to Midnight Grey */}
      <div className="bg-card shadow-sm hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl overflow-hidden border border-sage/20 will-change-transform hover:-translate-y-2">
        
        {/* Flower Image - Slow-burn zoom effect */}
        <div className="w-full aspect-[4/5] relative overflow-hidden bg-heritage/30">
          <Image
            src={flower.image}
            alt={flower.alt}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle dark mode dimming overlay */}
          <div className="absolute inset-0 bg-black/0 dark:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Text Details */}
        <div className="p-8 text-center">
          {/* FIXED: text-brand-rose removed for accent-hover (Red/Gold) */}
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent-hover font-bold mb-3 block transition-colors duration-500">
            {flower.category}
          </span>
          
          <h3 className="text-2xl font-serif text-charcoal tracking-tight mb-1 transition-colors duration-500">
            {flower.title}
          </h3>
          
          <p className="text-sm text-muted italic mb-6 font-serif transition-colors duration-500">
            {flower.subtitle}
          </p>
          
          {/* 2. THE EYECANDY BUTTON */}
          <div className="relative inline-block pb-1 text-[11px] tracking-boutique uppercase text-charcoal/60 group-hover:text-accent-hover transition-colors duration-500">
            Discover Bloom
            
            {/* The Elegant Line - Grows from center in Rose or Gold */}
            <span 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-hover w-0 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}