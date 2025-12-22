'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // useLayoutEffect runs BEFORE the paint, making the scroll jump invisible
  useLayoutEffect(() => {
    // 1. Immediate jump to top
    window.scrollTo(0, 0);
    
    // 2. Secondary "Double-Check" for browsers with heavy scroll-restoration
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 5 }} // Slight lift for a premium feel
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.23, 1, 0.32, 1] // Boutique cubic-bezier easing
      }}
      /* bg-transparent ensures the RootLayout background is visible.
         theme-sync matches the 0.4s transition in your globals.css. */
      className="bg-transparent theme-sync"
    >
      {children}
    </motion.div>
  );
}