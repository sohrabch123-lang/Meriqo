import { flowerData } from '@/data/flowers';
import { notFound } from 'next/navigation';
import FlowerDetailClient from './FlowerDetailClient';

export default async function FlowerDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // 1. Find current flower index
  const currentIndex = flowerData.findIndex((f) => f.slug === slug);
  const flower = flowerData[currentIndex];

  if (!flower) notFound();

  // 2. Calculate Next and Previous flowers
  const prevFlower = flowerData[currentIndex - 1] || flowerData[flowerData.length - 1];
  const nextFlower = flowerData[currentIndex + 1] || flowerData[0];

  // 3. Pass data to the Client Component for the "Beautiful" parts
  return (
    <FlowerDetailClient 
      flower={flower} 
      prevSlug={prevFlower.slug} 
      nextSlug={nextFlower.slug} 
    />
  );
}