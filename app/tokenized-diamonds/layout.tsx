import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Diamonds | Physical GIA-Certified Diamonds | Toto Finance',
  description: 'Own certified natural diamonds digitally through blockchain tokenization. GIA-certified stones, transparent ownership, secure custody, and direct access via Toto Finance.',
  keywords: 'tokenized diamonds, digital diamond ownership, blockchain diamond tokens, GIA certified diamonds, physical diamond tokenization, certified diamonds blockchain, digital diamond custody, transparent diamond ownership',
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
    title: 'Tokenized Diamonds | Physical GIA-Certified Diamonds | Toto Finance',
    description: 'Own certified natural diamonds digitally through blockchain tokenization. GIA-certified stones, transparent ownership, secure custody, and direct access via Toto Finance.',
    url: 'https://totofinance.co/tokenized-diamonds',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Diamonds | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Diamonds | Physical GIA-Certified Diamonds | Toto Finance',
    description: 'Own certified natural diamonds digitally through blockchain tokenization. GIA-certified stones, transparent ownership, secure custody, and direct access via Toto Finance.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-diamonds',
  },
};

export default function TokenizedDiamondsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
