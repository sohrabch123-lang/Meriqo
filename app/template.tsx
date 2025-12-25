'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION } from '@/lib/constants';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // 1. Check if we are on a detail page (e.g., /gallery/rose)
    // If we are, we DON'T scroll here. We let FlowerDetailClient handle it.
    const isDetailPage = pathname.split('/').length > 2 && pathname.includes('/gallery/');

    if (!isDetailPage) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <motion.div
      key={pathname} // Ensures the animation triggers on every route change
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      /* SYNCED: Using ANIMATION.DURATION (0.7) and ANIMATION.EASE.
         This creates a 'Heavy Paper' feel as pages slide in.
      */
      transition={{ 
        duration: ANIMATION.DURATION, 
        ease: ANIMATION.EASE 
      }}
      className={`bg-transparent ${ANIMATION.THEME_SYNC}`}
    >
      {children}
    </motion.div>
  );
}