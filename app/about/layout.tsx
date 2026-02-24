import { ReactNode } from 'react';

export const metadata = {
  title: 'About Us - Building Infrastructure for Global Digital Commodities | Toto Finance',
  description: 'Toto Finance is building institutional-grade infrastructure that enables compliant tokenization, settlement, and global trading of real-world commodities. Learn about our mission, vision, and technology.',
  keywords: 'Toto Finance about, commodity tokenization infrastructure, RWA tokenization platform, digital commodities, asset tokenization, institutional tokenization, commodity markets, tokenized assets infrastructure',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'About Us - Building Infrastructure for Global Digital Commodities | Toto Finance',
    description: 'Toto Finance is building institutional-grade infrastructure that enables compliant tokenization, settlement, and global trading of real-world commodities.',
    url: 'https://totofinance.co/about',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'About Toto Finance - Infrastructure for Global Digital Commodities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Toto Finance',
    description: 'Building institutional-grade infrastructure for compliant tokenization and global trading of real-world commodities.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

