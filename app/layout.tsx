import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Saldana Floral Portfolio | Elegant Flowers',
  description: 'A beautiful and calm portfolio showcasing luxury floral arrangements.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* FIX 1: Added 'transition-colors duration-500 ease-in-out' to the body.
        This ensures the entire canvas changes color at the exact same speed as the Navbar.
        FIX 2: Added 'selection:bg-accent-hover/30' for a boutique touch when highlighting text.
      */}
      <body 
        className={`
          ${inter.className} 
          bg-heritage text-charcoal 
          antialiased min-h-screen flex flex-col 
          transition-colors duration-500 ease-in-out
          selection:bg-accent-hover/30
        `}
      >
        
        {/* Navbar sits on top of the stack */}
        <Navbar />

        {/* FIX 3: Removed any potential overflow issues. 
          The flex-grow main container ensures the heritage background 
          is a solid foundation for all children components.
        */}
        <main className="flex-grow relative">
          {children}
        </main>

        {/* Global Footer can be added here */}
      </body>
    </html>
  );
}