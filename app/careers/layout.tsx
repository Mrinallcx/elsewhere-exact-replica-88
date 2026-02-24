import { ReactNode } from 'react';

export const metadata = {
  title: 'Careers at Toto Finance - Build the Infrastructure for Tokenized Commodities',
  description: "Join Toto Finance and help build the global infrastructure for asset-backed tokenization. We're hiring across engineering, product, operations, and business to transform commodity markets.",
  keywords: 'Toto Finance careers, jobs in asset tokenization, tokenization infrastructure jobs, blockchain infrastructure careers, real-world asset technology jobs, commodity technology careers, fintech infrastructure jobs, Web3 infrastructure careers, digital asset engineering jobs, institutional blockchain careers, global fintech jobs, Liechtenstein fintech careers',
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
    title: 'Careers at Toto Finance - Build the Infrastructure for Tokenized Commodities',
    description: "Join Toto Finance and help build the global infrastructure for asset-backed tokenization. We're hiring across engineering, product, operations, and business to transform commodity markets.",
    url: 'https://totofinance.co/careers',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Careers at Toto Finance - Build the Infrastructure for Tokenized Commodities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Toto Finance - Build the Infrastructure for Tokenized Commodities',
    description: "Join Toto Finance and help build the global infrastructure for asset-backed tokenization. We're hiring across engineering, product, operations, and business to transform commodity markets.",
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

