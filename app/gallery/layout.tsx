'use client'; 
import Reveal from '@/components/ui/Reveal';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen theme-sync bg-heritage">
      
      <main className="flex-grow w-full max-w-[1400px] mx-auto pt-40 px-6 lg:px-12">
        
        <section className="mb-20 text-left">
          {/* Photography Label */}
          <Reveal delay={0.1} y={15}>
            <span className="font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block text-brand-accent">
              Saldana Photography
            </span>
          </Reveal>

          {/* Main Title */}
          <Reveal delay={0.2} duration={1.4} y={30}>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight mb-8 transition-colors duration-700 text-brand-charcoal italic">
              The Gallery
            </h1>
          </Reveal>

          {/* Minimal Divider */}
          <Reveal delay={0.4} duration={1.8} y={0}>
            <div className="h-[1px] w-24 bg-brand-charcoal/20 transition-all duration-700" />
          </Reveal>
        </section>

        {/* PAGE CONTENT */}
        <div className="w-full pb-40">
          {children}
        </div>
      </main>

      {/* FOOTER - Updated branding from 'Boutique' to 'Studio' */}
      <footer className="py-20 border-t border-brand-charcoal/5 text-center bg-heritage/50 backdrop-blur-sm">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-medium">
          © 2025 Saldana Studio — Captured Light
        </span>
      </footer>
    </div>
  );
}