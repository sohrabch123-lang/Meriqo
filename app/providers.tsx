'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

// --- BOUTIQUE IMPORTS ---
// We import this just to ensure the constant is loaded 
// and available for the global CSS environment.
import { ANIMATION } from '@/lib/constants';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // 2025 Hydration Strategy: 
  // Ensures the client-side theme matches the server-side expectation
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // We wrap the unmounted state in a div that matches our site's 
    // background to prevent a "white flash" during hydration.
    return <div className="bg-[rgb(var(--bg-main))] min-h-screen">{children}</div>;
  }

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      /* CRITICAL: This must be FALSE. 
         When false, it allows our 700ms CSS transitions to run 
         whenever the 'dark' or 'light' class is toggled on the <html> tag.
      */
      disableTransitionOnChange={false} 
    >
      {children}
    </ThemeProvider>
  );
}