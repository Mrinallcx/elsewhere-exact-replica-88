import { ReactNode } from 'react';

export const metadata = {
  title: 'FAQ - Tokenized Commodities, Ownership & Redemption | Toto Finance',
  description: 'Find answers about Toto Finance, asset-backed tokenization, digital ownership, custody, settlement, and real-world redemption of commodities and assets.',
  keywords: 'Toto Finance FAQ, tokenized commodities FAQ, asset-backed tokenization FAQ, real-world asset tokenization explained, digital ownership FAQ, tokenized asset custody, tokenized asset redemption, on-chain settlement explained, RWA tokenization questions, commodity tokenization FAQ, physical asset tokenization explained, digital twin asset FAQ, LCX validation FAQ, Liechtenstein tokenization FAQ',
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
    title: 'FAQ - Tokenized Commodities, Ownership & Redemption | Toto Finance',
    description: 'Find answers about Toto Finance, asset-backed tokenization, digital ownership, custody, settlement, and real-world redemption of commodities and assets.',
    url: 'https://totofinance.co/faq',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'FAQ - Tokenized Commodities, Ownership & Redemption | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Tokenized Commodities, Ownership & Redemption | Toto Finance',
    description: 'Find answers about Toto Finance, asset-backed tokenization, digital ownership, custody, settlement, and real-world redemption of commodities and assets.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

