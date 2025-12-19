import Image from 'next/image';
import Link from 'next/link';
import { Flower } from '@/data/flowers';

interface FlowerCardProps {
  flower: Flower;
}

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    /* FIX 1: Path changed to /gallery/ and uses flower.slug instead of id */
    <Link href={`/gallery/${flower.slug}`} className="block group">
      <div className="bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden border border-stone-100">
        
        {/* Flower Image */}
        <div className="w-full aspect-[4/5] relative overflow-hidden bg-stone-50">
          <Image
            src={flower.image}
            alt={flower.alt} /* Matches your new blueprint alt */
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Text Details */}
        <div className="p-6 text-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-rose-400 font-semibold mb-2 block">
            {flower.category}
          </span>
          
          <h3 className="text-xl font-serif text-stone-800 tracking-tight mb-1">
            {flower.title} {/* Matches your new blueprint title */}
          </h3>
          
          <p className="text-sm text-stone-500 italic mb-4">
            {flower.subtitle} {/* Matches your new blueprint subtitle */}
          </p>
          
          <div className="inline-block text-[10px] tracking-widest uppercase border-b border-stone-200 pb-1 text-stone-400 group-hover:text-rose-400 group-hover:border-rose-400 transition-all duration-300">
            Discover Bloom
          </div>
        </div>
      </div>
    </Link>
  );
}