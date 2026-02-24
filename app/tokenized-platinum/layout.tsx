import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Platinum | Physical Platinum on Blockchain | Toto Finance',
  description: 'Own tokenized platinum backed by physical metal. Rarer than gold, essential for industry, with transparent custody and digital ownership via Toto Finance.',
  keywords: 'tokenized platinum, digital platinum ownership, blockchain platinum tokens, physical platinum tokenization, platinum metal token, industrial platinum demand, platinum scarcity, precious metals blockchain',
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
    title: 'Tokenized Platinum | Physical Platinum on Blockchain | Toto Finance',
    description: 'Own tokenized platinum backed by physical metal. Rarer than gold, essential for industry, with transparent custody and digital ownership via Toto Finance.',
    url: 'https://totofinance.co/tokenized-platinum',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Platinum | Toto Finance',
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
    title: 'Tokenized Platinum | Physical Platinum on Blockchain | Toto Finance',
    description: 'Own tokenized platinum backed by physical metal. Rarer than gold, essential for industry, with transparent custody and digital ownership via Toto Finance.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Platinum | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-platinum',
  },
};

export default function TokenizedPlatinumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
