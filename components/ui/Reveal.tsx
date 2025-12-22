'use client';

import { motion } from 'framer-motion';

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
  y = 20,         
  instant = false 
}: RevealProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      // If it's instant, we want it to move to 1 immediately
      // If it's not, we wait until it's in view
      whileInView={!instant ? { opacity: 1, y: 0 } : undefined}
      animate={instant ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}