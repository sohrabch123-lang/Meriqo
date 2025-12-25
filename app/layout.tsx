import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Providers } from './providers';

// --- BOUTIQUE IMPORTS ---
import { ANIMATION, BRAND } from '@/lib/constants';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  display: 'swap' 
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif', 
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${BRAND.FULL_NAME} | Fine Art Gallery`,
    template: `%s | ${BRAND.NAME}`
  },
  description: 'A curated portfolio showcasing visual stories through light and texture.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} ${playfair.variable} font-sans
          bg-[rgb(var(--bg-main))] text-[rgb(var(--brand-charcoal))]
          antialiased min-h-screen flex flex-col 
          selection:bg-brand-accent/20 selection:text-brand-charcoal
          ${ANIMATION.THEME_SYNC}
        `}
      >
        <Providers>
          {/* 1. FIXED: Closing </Providers> added at the bottom */}
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>

          {/* 2. Visual Texture Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" 
            aria-hidden="true"
          />
        </Providers>
      </body>
    </html>
  );
}