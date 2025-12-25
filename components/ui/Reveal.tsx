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
  duration = ANIMATION.DURATION, 
  y = 15, 
  instant = false 
}: RevealProps) {
  
  return (
    <motion.div
      // instant: Useful for detail pages where we want text ready immediately
      initial={instant ? false : { opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      // margin -10%: Ensures the element is slightly into the viewport 
      // before it 'wakes up', preventing the user from seeing half-loaded states.
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: ANIMATION.EASE,
        // layout: { duration: 0 } is great, but we also use 'type: tween' 
        // to prevent spring physics from eating CPU during theme toggles.
        type: "tween" 
      }}
      /* PERFORMANCE: will-change is excellent, but we add 
        transform-gpu logic here via style to ensure it stays on its own 
        compositor layer during the theme's 'colorSync' phase.
      */
      style={{ 
        willChange: "opacity, transform",
        transform: "translateZ(0)" 
      }}
    >
      {children}
    </motion.div>
  );
}