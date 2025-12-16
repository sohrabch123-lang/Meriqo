import Image from 'next/image';
import Link from 'next/link';
// Import the Flower interface for type safety
import { Flower } from '@/data/flowers';

// Define the props the component accepts
interface FlowerCardProps {
  flower: Flower;
}

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    // Link to the detailed page (e.g., /flowers/1)
    <Link href={`/flowers/${flower.id}`} className="block group">
      <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-stone-100">
        
        {/* Flower Image */}
        <div className="w-full aspect-square relative overflow-hidden">
          <Image
            src={flower.image}
            alt={flower.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false} // Only Hero image needs priority
          />
        </div>

        {/* Text Details */}
        <div className="p-5 text-center">
          <h3 className="text-xl font-serif text-stone-800 tracking-wide mb-1">
            {flower.title}
          </h3>
          <p className="text-sm text-stone-500 italic">
            {flower.subtitle}
          </p>
          <button className="mt-4 text-xs tracking-wider uppercase border border-rose-400 text-rose-400 py-1 px-3 rounded-full hover:bg-rose-50 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}