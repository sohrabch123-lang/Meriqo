'use client';

import Hero from '@/components/temp_sections/Hero';
import HomeFlow from '@/components/ui/HomeFlow';
import HomeGallery from '@/components/ui/HomeGallery'; 
import Reveal from '@/components/ui/Reveal';
import Footer from '@/components/ui/Footer';

export default function HomePage() {
  // 1. MASTER SYNC: Updated to 700ms and using the CSS variable for the ease curve
  const syncClass = "transition-colors duration-700 ease-[var(--ease-boutique)] theme-sync";

  return (
    <div id="top" className={`overflow-hidden bg-[rgb(var(--bg-main))] min-h-screen ${syncClass}`}>
      
      {/* 1. IMPACT ENTRANCE */}
      <section className="relative z-0">
        <Hero />
      </section>

      {/* 2. NARRATIVE FLOW (Manifesto) */}
      <div className={`relative z-10 bg-[rgb(var(--bg-main))] ${syncClass}`}>
        {/* NOTE: If you still have path issues with HomeFlow, 
            ensure this import matches the actual file location in your sidebar */}
        <HomeFlow />
      </div>

      {/* 3. VISUAL INSTALLATION */}
      <div className={`relative z-20 bg-[rgb(var(--bg-main))] ${syncClass}`}>
        <HomeGallery /> 
      </div>

      {/* 4. PHILOSOPHY TEXT 
          Explicitly syncing text colors and background to the 700ms timer
      */}
      <section className={`relative z-30 bg-[rgb(var(--bg-main))] py-24 md:py-32 text-center ${syncClass}`}>
        <div className="max-w-[1400px] mx-auto px-6">
          {/* We use 0.7 duration here to match the theme fade speed */}
          <Reveal y={10} duration={0.7}>
            <span className={`text-brand-accent tracking-[0.6em] uppercase text-[10px] font-bold mb-6 block ${syncClass}`}>
              The Vision
            </span>
            <h3 className={`text-4xl md:text-6xl font-serif text-[rgb(var(--brand-charcoal))] italic leading-tight ${syncClass}`}>
              Capturing the Stillness
            </h3>
            <p className={`mt-8 text-[rgb(var(--brand-charcoal))]/60 italic font-serif text-lg md:text-xl max-w-2xl mx-auto px-6 leading-relaxed ${syncClass}`}>
              "Every frame is a choice between what is shown and what is felt."
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. GRAND FINALE */}
      <footer className={`relative z-30 bg-[rgb(var(--bg-main))] ${syncClass}`}>
        <Footer />
      </footer>
      
    </div>
  );
}