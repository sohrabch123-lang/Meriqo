'use client';
import { motion, BezierDefinition } from 'framer-motion';

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
  duration = 0.9, 
  y = 15, 
  instant = false 
}: RevealProps) {
  
  // Leica smooth curve typed for TS safety
  const boutiqueEase: BezierDefinition = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={instant ? false : { opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: boutiqueEase,
        // CRITICAL: This prevents the 'transition-all' from globals.css 
        // from trying to animate the motion properties.
        layout: { duration: 0 } 
      }}
      // We force 'will-change' to ensure the theme-sync (colors) 
      // doesn't slow down the reveal (transform/opacity)
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}