import { ReactNode } from 'react';

export const metadata = {
  title: 'Vision 2030 - Digital Commodities | Toto Finance',
  description: "Toto Finance's Vision 2030 outlines the transformation of global commodity markets through asset-backed tokenization, on-chain settlement, and compliant digital infrastructure.",
  keywords: 'Vision 2030, digital commodity infrastructure, tokenized commodities future, global commodity digitization, asset-backed tokenization, RWA infrastructure, on-chain commodity settlement, institutional tokenization roadmap, future of commodity markets, digital ownership infrastructure, global trade digitization, Toto Finance vision',
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
    title: 'Vision 2030 - Digital Commodities | Toto Finance',
    description: "Toto Finance's Vision 2030 outlines the transformation of global commodity markets through asset-backed tokenization, on-chain settlement, and compliant digital infrastructure.",
    url: 'https://totofinance.co/vision-2030',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Vision 2030 - Digital Commodities | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision 2030 - Digital Commodities | Toto Finance',
    description: "Toto Finance's Vision 2030 outlines the transformation of global commodity markets through asset-backed tokenization, on-chain settlement, and compliant digital infrastructure.",
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/vision-2030',
  },
};

export default function Vision2030Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

