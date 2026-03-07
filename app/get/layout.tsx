import { ReactNode } from 'react';

export const metadata = {
  title: 'Renewable Energy Tokenization | Toto Finance',
  description: 'Institutional-grade renewable energy tokenization. Bridge real-world assets, verified carbon credits, and ESG value with blockchain.',
  keywords: 'renewable energy tokenization, ESG tokenization, carbon credits, renewable energy investment, institutional finance, energy tokenization, sustainable finance, green energy blockchain, renewable energy RWA, carbon credit tokens, ESG assets, clean energy investment',
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
    title: 'Renewable Energy Tokenization | Toto Finance',
    description: 'Institutional-grade access to renewable energy returns through tokenized assets. Bridge real-world renewable energy assets, verified carbon credits, and long-term ESG value.',
    url: 'https://totofinance.co/get',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Renewable Energy Tokenization — Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewable Energy Tokenization | Toto Finance',
    description: 'Institutional-grade access to renewable energy returns through tokenized assets. Bridge real-world renewable energy assets, verified carbon credits, and long-term ESG value.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/get',
  },
};

export default function GetLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

