'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function FlowerCard({ flower }: { flower: any }) {
  return (
    <Link href={`/gallery/${flower.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-card border border-sage/5 transition-all duration-700">
        <Image 
          src={flower.image} 
          alt={flower.title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        {/* The "Leica" Hover: A very subtle dark tint that reveals on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-baseline">
          <h3 className="text-xl font-serif text-charcoal group-hover:text-accent-hover transition-colors">
            {flower.title}
          </h3>
          <span className="text-[10px] tracking-widest text-muted/60 font-sans">
            ${flower.price}
          </span>
        </div>
        <p className="text-[9px] tracking-[0.3em] uppercase text-accent-hover font-bold">
          {flower.category}
        </p>
      </div>
    </Link>
  );
}