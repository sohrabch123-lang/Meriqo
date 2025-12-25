import { flowerData } from '@/data/flowers';
import GalleryClient from './GalleryClient';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--bg-main))]">
      {/* Pass the data from Server to Client */}
      <GalleryClient items={flowerData} />
    </div>
  );
}