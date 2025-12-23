'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.23, 1, 0.32, 1] 
      }}
      className="bg-transparent theme-sync"
    >
      {children}
    </motion.div>
  );
}