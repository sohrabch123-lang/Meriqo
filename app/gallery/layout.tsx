'use client'; 

import Reveal from '@/components/ui/Reveal';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen theme-sync bg-[rgb(var(--bg-main))] transition-colors duration-500">
      
      <main className="flex-grow w-full max-w-[1400px] mx-auto pt-40 px-6 lg:px-12">
        
        {/* HEADER SECTION: Pure Branding & Title */}
        <section className="mb-20">
          <div className="flex flex-col gap-6">
            
            <div className="flex-1">
              <Reveal delay={0.1} y={15}>
                <span className="font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block text-brand-accent transition-colors duration-500">
                  Saldana Photography
                </span>
              </Reveal>

              <Reveal delay={0.15} duration={0.6} y={30}>
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight theme-sync text-brand-charcoal italic leading-none">
                  The Gallery
                </h1>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.3} duration={0.8} y={0}>
            <div className="mt-12 h-[1px] w-full bg-brand-charcoal/5 theme-sync" />
          </Reveal>
        </section>

        {/* PAGE CONTENT: This is where the Page.tsx (with the new Quotes Nav) will inject */}
        <div className="w-full pb-40">
          {children}
        </div>
      </main>

      <footer className="py-20 border-t border-brand-charcoal/5 text-center bg-[rgb(var(--bg-main)/0.5)] backdrop-blur-sm theme-sync">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-medium">
          © 2025 Saldana Studio — Captured Light
        </span>
      </footer>
    </div>
  );
}