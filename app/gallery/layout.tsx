'use client'; 
import Sidebar from '@/components/layout/Gallerysidebar';
import Reveal from '@/components/ui/Reveal';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    /* Cleaned up: Transitions are now handled globally */
    <div className="flex flex-col min-h-screen bg-heritage">
      
      <div className="flex flex-col lg:flex-row flex-grow w-full max-w-[1600px] mx-auto pt-24">
        
        {/* SIDEBAR SLOT */}
        <aside className="lg:w-80 w-full lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] px-8">
          <Reveal delay={0.2} duration={1.5} y={0}>
             <Sidebar />
          </Reveal>
        </aside>

        {/* CONTENT COLUMN */}
        <main className="flex-grow p-6 lg:p-12 lg:border-l border-sage/10">
          
          <section className="mb-20 text-left">
            {/* Staggered Entrance for the Header info */}
            <Reveal delay={0.1} y={15}>
              <span className="text-accent-hover font-bold tracking-logo uppercase text-[10px] mb-4 block">
                Saldana Florals
              </span>
            </Reveal>

            <Reveal delay={0.2} duration={1.4} y={30}>
              <h1 className="text-5xl md:text-7xl font-serif text-charcoal tracking-tight mb-10">
                Our Full Collection
              </h1>
            </Reveal>

            {/* THE STYLISH SIGNATURE DIVIDER */}
            <Reveal delay={0.4} duration={1.8} y={0}>
              <div className="relative flex items-center w-full max-w-md group">
                {/* Line */}
                <div className="h-[1.5px] w-full bg-gradient-to-r from-accent-hover/80 via-accent-hover/30 to-transparent"></div>
                
                {/* Anchor: Pulsing Diamond */}
                <div className="absolute left-0 flex items-center justify-center">
                  <div className="absolute w-4 h-4 bg-accent-hover/30 rounded-full blur-md opacity-0 dark:opacity-100 animate-pulse"></div>
                  <div className="relative w-2.5 h-2.5 rotate-45 bg-accent-hover border border-white/20 shadow-[0_0_10px_rgba(var(--brand-accent),0.3)] transition-all duration-700 ease-boutique group-hover:rotate-[135deg]"></div>
                </div>

                <div className="ml-6 w-1 h-1 rounded-full bg-accent-hover/40"></div>
              </div>
            </Reveal>
          </section>

          {/* PAGE CONTENT (Gallery Grid) */}
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="py-12 border-t border-sage/10 text-center text-[10px] text-muted uppercase tracking-widest">
        © 2025 Saldana Boutique
      </footer>
    </div>
  );
}