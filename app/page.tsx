import Hero from '@/components/temp_sections/Hero';
import HomeFlow from '@/components/ui/HomeFlow';
import HomeGallery from '@/components/ui/HomeGallery'; 
import Reveal from '@/components/ui/Reveal';
import Footer from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <div id="top" className="overflow-hidden bg-heritage">
      {/* 1. IMPACT ENTRANCE */}
      <Hero />

      {/* 2. NARRATIVE FLOW (Manifesto) 
          Note: We keep this spacing slightly larger to separate the Hero from the content.
      */}
      <HomeFlow />

      {/* 3. VISUAL INSTALLATION 
          This section should lead directly into the text below.
      */}
      <div className="relative z-10">
        <HomeGallery /> 
      </div>

      {/* 4. TIGHTENED PHILOSOPHY TEXT 
          Changed py-40 to py-24 to pull the footer up into view.
      */}
      <section className="py-24 md:py-32 text-center bg-heritage relative z-10">
        <Reveal y={10}>
          <span className="text-brand-accent tracking-[0.6em] uppercase text-[10px] font-bold mb-6 block">
            The Vision
          </span>
          <h3 className="text-4xl md:text-6xl font-serif text-brand-charcoal italic leading-tight">
            Capturing the Stillness
          </h3>
          <p className="mt-8 text-brand-charcoal/60 italic font-serif text-lg md:text-xl max-w-2xl mx-auto px-6 leading-relaxed">
            "Every frame is a choice between what is shown and what is felt."
          </p>
        </Reveal>
      </section>

      {/* 5. GRAND FINALE 
          The Footer will now appear much sooner, completing the story.
      */}
      <Footer />
    </div>
  );
}