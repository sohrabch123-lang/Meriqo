import { Inter, Playfair_Display } from 'next/font/google'; // Add Playfair here
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', // Create a variable to use in CSS
  display: 'swap' 
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif', // This will be our "Logo" font
  display: 'swap',
});

export const metadata = {
  title: 'Saldana Floral Portfolio | Elegant Flowers',
  description: 'A beautiful and calm portfolio showcasing luxury floral arrangements.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} ${playfair.variable} font-sans
          bg-heritage text-charcoal 
          antialiased min-h-screen flex flex-col 
          transition-colors duration-1000 ease-in-out
          selection:bg-accent-hover/30
        `}
      >
        <Navbar />
        <main className="flex-grow relative">
          {children}
        </main>
      </body>
    </html>
  );
}