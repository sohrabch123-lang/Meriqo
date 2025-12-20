import { flowerData } from '@/data/flowers';
import { notFound } from 'next/navigation';
import FlowerDetailClient from './FlowerDetailClient';

export default async function FlowerDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  const currentIndex = flowerData.findIndex((f) => f.slug === slug);
  const flower = flowerData[currentIndex];

  if (!flower) notFound();

  const prevFlower = flowerData[currentIndex - 1] || flowerData[flowerData.length - 1];
  const nextFlower = flowerData[currentIndex + 1] || flowerData[0];

  return (
    /* MATCHED: duration-1000 and ease-in-out for the detail page wrapper */
    <main className="min-h-screen bg-heritage transition-colors duration-1000 ease-in-out">
      <FlowerDetailClient 
        flower={flower} 
        prevSlug={prevFlower.slug} 
        nextSlug={nextFlower.slug} 
      />
    </main>
  );
}