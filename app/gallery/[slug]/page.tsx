import { flowerData } from '@/data/flowers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Next.js 15 requires 'params' to be a Promise
export default async function FlowerDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // 1. We UNWRAP the params here to get the slug
  const { slug } = await params;

  // 2. We find the flower using the unwrapped slug
  const flower = flowerData.find((f) => f.slug === slug);

  // 3. If no flower is found, show 404
  if (!flower) notFound();

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start animate-in fade-in duration-700">
      
      {/* Left: Big Image using your new 'alt' field */}
      <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-stone-100">
        <Image 
          src={flower.image} 
          alt={flower.alt} // Updated to use your new alt field
          fill 
          className="object-cover" 
          priority
        />
      </div>

      {/* Right: Content using your new 'title' and 'subtitle' */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
        <Link href="/gallery" className="text-sm text-stone-400 hover:text-rose-400 transition-colors mb-8 inline-flex items-center gap-2">
          &larr; Back to Gallery
        </Link>
        
        <span className="text-rose-400 font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
          {flower.category}
        </span>

        {/* Using your new 'title' here */}
        <h2 className="text-5xl font-serif text-stone-800 leading-tight mb-2">
          {flower.title}
        </h2>

        {/* Using your new 'subtitle' here */}
        <p className="text-stone-400 italic mb-6">
          {flower.subtitle}
        </p>
        
        <p className="text-2xl text-stone-700 font-light mb-8">${flower.price}.00</p>
        
        <div className="h-px bg-stone-200 w-full mb-8"></div>
        
        <p className="text-stone-600 text-lg leading-relaxed mb-10">
          {flower.description}
        </p>

        <button className="w-full py-4 bg-stone-800 text-white rounded-full hover:bg-rose-500 transition-all duration-300 tracking-widest uppercase text-xs font-semibold shadow-lg">
          Inquire for Arrangement
        </button>
      </div>
    </div>
  );
}