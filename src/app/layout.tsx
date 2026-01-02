import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Nexus Verium',
    default: 'Nexus Verium | AI + Environmental Engineering',
  },
  description: 'Research-driven AI and environmental engineering for wetland restoration, watershed analytics, and sustainable infrastructure.',
  keywords: ['Environmental Engineering', 'AI', 'Wetlands', 'Restoration', 'Nexus Verium'],
  authors: [{ name: 'Nexus Verium' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, outfit.variable, "scroll-smooth")}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
