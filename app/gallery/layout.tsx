import React from 'react';
import Sidebar from '@/components/layout/Gallerysidebar'; // Import your new component

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: GalleryLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      
      {/* 1. MINI-HERO SECTION (Keeping your bridge) */}
      <section className="relative h-[25vh] w-full flex items-center justify-center bg-stone-100 border-b border-stone-200">
        <div className="relative text-center z-10 px-4">
          <span className="text-rose-400 font-medium tracking-[0.2em] uppercase text-xs mb-2 block">
            Saldana Florals
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800">
            Our Full Collection
          </h1>
        </div>
      </section>

      {/* 2. THE MAIN WRAPPER (This creates the Side-by-Side look) */}
      <div className="flex flex-col lg:flex-row flex-grow w-full max-w-[1600px] mx-auto">
        
        {/* SIDEBAR SLOT */}
        <aside className="lg:w-72 border-r border-stone-100 lg:sticky lg:top-0 lg:h-[75vh]">
          <Sidebar />
        </aside>

        {/* CONTENT SLOT (The Gallery or Slug) */}
        <main className="flex-grow p-6 lg:p-12">
          {children}
        </main>
      </div>

      <footer className="py-8 border-t border-stone-200 text-center text-[10px] text-stone-400 uppercase tracking-widest">
        © 2024 Saldana Boutique
      </footer>
    </div>
  );
}