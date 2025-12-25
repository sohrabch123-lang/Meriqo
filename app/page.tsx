'use client';

import Hero from '@/components/temp_sections/Hero';
import HomeFlow from '@/components/ui/HomeFlow';
import HomeGallery from '@/components/ui/HomeGallery'; 
import Reveal from '@/components/ui/Reveal';
import Footer from '@/components/ui/Footer';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, LAYOUT, BRAND } from '@/lib/constants';

export default function HomePage() {
  return (
    <div id="top" className={`overflow-hidden bg-[rgb(var(--bg-main))] min-h-screen ${ANIMATION.THEME_SYNC}`}>
      
      {/* 1. IMPACT ENTRANCE */}
      <section className="relative z-0">
        <Hero />
      </section>

      {/* 2. NARRATIVE FLOW (Manifesto) */}
      <div className={`relative z-10 bg-[rgb(var(--bg-main))] ${ANIMATION.THEME_SYNC}`}>
        <HomeFlow />
      </div>

      {/* 3. VISUAL INSTALLATION */}
      <div className={`relative z-20 bg-[rgb(var(--bg-main))] ${ANIMATION.THEME_SYNC}`}>
        <HomeGallery /> 
      </div>

      {/* 4. PHILOSOPHY TEXT 
          Explicitly syncing text colors and background to the 700ms Master Clock
      */}
      <section className={`relative z-30 bg-[rgb(var(--bg-main))] py-24 md:py-32 text-center ${ANIMATION.THEME_SYNC}`}>
        <div className={`max-w-[${LAYOUT.MAX_WIDTH}] mx-auto ${LAYOUT.SAFE_PADDING}`}>
          
          {/* Using ANIMATION.DURATION (0.7) for a high-end, deliberate reveal */}
          <Reveal y={10} duration={ANIMATION.DURATION}>
            <span className={`text-brand-accent tracking-[0.6em] uppercase text-[10px] font-bold mb-6 block ${ANIMATION.THEME_SYNC}`}>
              {BRAND.NAME} Vision
            </span>
            <h3 className={`text-4xl md:text-6xl font-serif text-[rgb(var(--brand-charcoal))] italic leading-tight ${ANIMATION.THEME_SYNC}`}>
              Capturing the Stillness
            </h3>
            <p className={`mt-8 text-[rgb(var(--brand-charcoal))]/60 italic font-serif text-lg md:text-xl max-w-2xl mx-auto px-6 leading-relaxed ${ANIMATION.THEME_SYNC}`}>
              "Every frame is a choice between what is shown and what is felt."
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. GRAND FINALE */}
      <footer className={`relative z-30 bg-[rgb(var(--bg-main))] ${ANIMATION.THEME_SYNC}`}>
        <Footer />
      </footer>
      
    </div>
  );
}