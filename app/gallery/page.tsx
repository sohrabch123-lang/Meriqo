import { flowerData } from '@/data/flowers';
import GalleryClient from './GalleryClient';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION } from '@/lib/constants';

export default function GalleryPage() {
  return (
    /* By adding THEME_SYNC here, we ensure that as the user navigates 
       to this page, the background color transition is smooth and 
       coordinated with the Navbar. 
    */
    <div className={`min-h-screen bg-[rgb(var(--bg-main))] ${ANIMATION.THEME_SYNC}`}>
      {/* Pass the data from Server to Client */}
      <GalleryClient items={flowerData} />
    </div>
  );
}