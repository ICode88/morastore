import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MoraStore - Top Up Game Termurah, Tercepat, dan Terpercaya',
  description: 'MoraStore menyediakan layanan top up game online dengan harga termurah, proses tercepat, dan pelayanan terpercaya 24/7.',
  keywords: 'top up game, diamond, voucher game, mobile legends, free fire, PUBG, MoraStore, game online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}