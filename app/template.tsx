'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      /* FIX: Added bg-transparent so it never blocks the RootLayout color.
         Added theme-sync to ensure background transitions happen inside the motion container.
      */
      className="bg-transparent theme-sync"
    >
      {children}
    </motion.div>
  );
}