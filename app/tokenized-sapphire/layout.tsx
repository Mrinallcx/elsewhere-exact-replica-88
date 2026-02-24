import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Sapphire | Certified Natural Sapphires on Blockchain | Toto Finance',
  description: 'Own certified natural sapphires digitally through blockchain tokenization. Transparent pricing, verified authenticity, secure custody, and direct ownership via Toto Finance.',
  keywords: 'tokenized sapphire, digital sapphire ownership, blockchain sapphire, certified natural sapphire, gemstone tokenization, blue sapphire, gemstone custody, sapphire certification, luxury assets blockchain, digital gemstones',
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
    title: 'Tokenized Sapphire | Certified Natural Sapphires on Blockchain | Toto Finance',
    description: 'Own certified natural sapphires digitally through blockchain tokenization. Transparent pricing, verified authenticity, secure custody, and direct ownership via Toto Finance.',
    url: 'https://totofinance.co/tokenized-sapphire',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Sapphire | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Sapphire | Certified Natural Sapphires on Blockchain | Toto Finance',
    description: 'Own certified natural sapphires digitally through blockchain tokenization. Transparent pricing, verified authenticity, secure custody, and direct ownership via Toto Finance.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-sapphire',
  },
};

export default function TokenizedSapphireLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
