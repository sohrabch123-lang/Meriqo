import { flowerData } from '@/data/flowers';
import { notFound } from 'next/navigation';
import FlowerDetailClient from './FlowerDetailClient';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION } from '@/lib/constants';

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
    /**
     * 2025 Performance Tip:
     * We apply the ANIMATION.THEME_SYNC here even on the server wrapper.
     * This ensures that if a user deep-links directly to a flower detail page,
     * the background color doesn't "jump" during hydration.
     */
    <div className={`min-h-screen ${ANIMATION.THEME_SYNC}`}>
      <FlowerDetailClient 
        flower={flower} 
        prevSlug={prevFlower.slug} 
        nextSlug={nextFlower.slug} 
      />
    </div>
  );
}