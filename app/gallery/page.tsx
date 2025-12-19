import Link from 'next/link';
import Image from 'next/image';
import { flowerData } from '@/data/flowers';

export default function GalleryPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {flowerData.map((flower) => (
        <Link key={flower.id} href={`/gallery/${flower.slug}`} className="group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200">
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-serif text-stone-800">{flower.name}</h3>
            <p className="text-rose-400 font-medium mt-1">${flower.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}