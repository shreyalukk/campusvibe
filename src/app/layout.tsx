import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import React, { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CampusVibe — Discover. Register. Participate.',
  description:
    'CampusVibe is the centralized college event management platform for discovering university hackathons, workshops, coding battles, and cultural fests with digital QR attendance passes.',
  keywords: [
    'campus events',
    'college event management',
    'hackathons',
    'workshops',
    'student registrations',
    'QR tickets',
  ],
  authors: [{ name: 'CampusVibe Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-[#191923] font-sans antialiased">
        <Suspense fallback={<div className="h-18 bg-white border-b border-gray-100" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
