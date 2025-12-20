'use React';
import Sidebar from '@/components/layout/Gallerysidebar';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-heritage">
      
      {/* 1. MINI-HERO SECTION */}
      <section className="relative h-[30vh] w-full flex flex-col items-center justify-center bg-heritage/50">
        <div className="relative text-center z-10 px-4">
          {/* Change: Updated brand-rose to accent-hover */}
          <span className="text-accent-hover font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
            Saldana Florals
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-8">
            Our Full Collection
          </h1>

          {/* 2. THE BOUTIQUE DIVIDER 
              A delicate 1px line with a central decorative element 
          */}
          <div className="relative flex items-center justify-center w-64 mx-auto">
            <div className="w-full h-[1px] bg-stone-200/60"></div>
            <div className="absolute w-1.5 h-1.5 rotate-45 bg-accent-hover shadow-[0_0_8px_rgba(var(--accent-rgb),0.4)]"></div>
          </div>
        </div>
      </section>

      {/* 3. THE MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row flex-grow w-full max-w-[1600px] mx-auto">
        
        {/* SIDEBAR SLOT */}
        <aside className="lg:w-72 border-r border-stone-200/20 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
          <Sidebar />
        </aside>

        {/* CONTENT SLOT */}
        <main className="flex-grow p-6 lg:p-12">
          {children}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="py-12 border-t border-stone-200/30 text-center text-[10px] text-muted uppercase tracking-[0.2em]">
        © 2025 Saldana Boutique
      </footer>
    </div>
  );
}