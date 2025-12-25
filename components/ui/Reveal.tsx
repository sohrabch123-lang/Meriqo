'use client';

import { motion } from 'framer-motion';
// --- BOUTIQUE IMPORTS ---
import { ANIMATION } from '@/lib/constants';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  instant?: boolean;
}

export default function Reveal({ 
  children, 
  delay = 0, 
  // We default to our Master Clock duration (0.7)
  duration = ANIMATION.DURATION, 
  y = 15, 
  instant = false 
}: RevealProps) {
  
  return (
    <motion.div
      initial={instant ? false : { opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        // Using the central ease for consistent 'heavy paper' motion
        ease: ANIMATION.EASE,
        // CRITICAL: This prevents the 'transition-all' from globals.css 
        // from trying to animate the motion properties.
        layout: { duration: 0 } 
      }}
      /* 2025 Performance Tip: 
         willChange tells the browser's GPU to keep this layer ready,
         preventing stuttering during complex scrolls.
      */
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}