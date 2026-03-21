import { ReactNode } from 'react';

const pageDescription =
  '$TOTO fuels the Toto Finance ecosystem for access, settlement, fees, and rewards. The universal utility token for digital commodity infrastructure.';

export const metadata = {
  title: 'TOTO Token — Utility & Supply | Toto Finance',
  description: pageDescription,
  keywords:
    'TOTO token, TIA token migration, utility token, LCX exchange, tokenized commodities, Toto Finance token, digital commodity infrastructure',
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
    title: 'TOTO Token — Utility & Supply | Toto Finance',
    description: pageDescription,
    url: 'https://totofinance.co/toto-token',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'TOTO Token — Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOTO Token — Utility & Supply | Toto Finance',
    description: pageDescription,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/toto-token',
  },
};

export default function TotoTokenLayout({ children }: { children: ReactNode }) {
  return children;
}
