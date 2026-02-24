import { ReactNode } from 'react';

export const metadata = {
  title: 'War Ready Package — Tokenized Gold Investment | Toto Finance',
  description: 'War Ready Package: Own LBMA-grade tokenized gold on-chain. Secure digital gold investment starting at $1,200. Fully redeemable physical gold bars.',
  keywords: 'war ready package, tokenized gold package, LBMA gold, digital gold investment, gold tokenization package, RWA gold package, physical gold tokens, gold investment package, blockchain gold investment',
  authors: [{ name: 'Toto Finance', url: 'https://totofinance.co' }],
  applicationName: 'Toto Finance',
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
    title: 'War Ready Package — Tokenized Gold Investment | Toto Finance',
    description: 'War Ready Package: Own LBMA-grade tokenized gold on-chain. Secure, compliant digital gold investment starting at $1,200. Fully redeemable physical gold bars.',
    url: 'https://totofinance.co/war-ready-package',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'War Ready Package — Toto Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'War Ready Package — Tokenized Gold Investment | Toto Finance',
    description: 'War Ready Package: Own LBMA-grade tokenized gold on-chain. Secure, compliant digital gold investment starting at $1,200. Fully redeemable physical gold bars.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'War Ready Package | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/war-ready-package',
  },
};

export default function WarReadyPackageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

