import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

// Set a clean, elegant font
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Meriqo Floral Portfolio | Elegant Flowers',
  description: 'A beautiful and calm portfolio showcasing luxury floral arrangements.',
};

// Define the type for the children prop
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* Set the soft background color on the body tag */}
      <body className={`${inter.className} bg-stone-50 text-stone-800 antialiased`}>
        {/* Navbar sits on top of all content */}
        <Navbar />
        {/* The main content of the page */}
        <main>{children}</main>
        {/* You could add a Footer here later */}
      </body>
    </html>
  );
}
