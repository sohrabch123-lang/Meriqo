import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Providers } from './providers'; // This is the file you just made

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
  title: 'Saldana Photography | Fine Art Gallery',
  description: 'A curated portfolio showcasing visual stories through light and texture.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} ${playfair.variable} font-sans
          bg-[rgb(var(--bg-main))] text-[rgb(var(--brand-charcoal))]
          antialiased min-h-screen flex flex-col theme-sync
          selection:bg-brand-accent/20 selection:text-brand-charcoal
        `}
      >
        {/* Wrap everything inside Providers so the theme works everywhere */}
        <Providers>
          <Navbar />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}