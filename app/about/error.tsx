'use client';

export default function AboutError({ reset }: { reset: () => void }) {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-40">
      <div className="border-l border-brand-charcoal/10 pl-12">
        <h2 className="font-serif text-3xl text-brand-charcoal mb-4">
          Documentation Unavailable
        </h2>
        <p className="text-sm text-brand-charcoal/60 mb-8 max-w-md">
          We encountered a connection issue while retrieving the studio profile.
        </p>
        <button 
          onClick={() => reset()}
          className="text-[10px] uppercase tracking-widest font-bold text-brand-accent hover:opacity-50 transition-opacity"
        >
          Try Again —
        </button>
      </div>
    </div>
  );
}