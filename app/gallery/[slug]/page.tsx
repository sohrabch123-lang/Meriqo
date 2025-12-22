import { flowerData } from '@/data/flowers';
import { notFound } from 'next/navigation';
import FlowerDetailClient from './FlowerDetailClient';

// This is a Server Component, keep it lean!
export default async function FlowerDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  const currentIndex = flowerData.findIndex((f) => f.slug === slug);
  const flower = flowerData[currentIndex];

  if (!flower) notFound();

  // Infinite Loop Logic: If at the start, go to end. If at end, go to start.
  const prevFlower = flowerData[currentIndex - 1] || flowerData[flowerData.length - 1];
  const nextFlower = flowerData[currentIndex + 1] || flowerData[0];

  return (
    /* Removed the extra <main> and background classes. 
       The Layout and Template already provide the background and padding.
       This prevents "Double Scrolling" or "Double Background" bugs.
    */
    <FlowerDetailClient 
      flower={flower} 
      prevSlug={prevFlower.slug} 
      nextSlug={nextFlower.slug} 
    />
  );
}