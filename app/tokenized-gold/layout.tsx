import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Gold — Digital Gold Ownership | Toto Finance',
  description: 'Own verified physical gold bars through blockchain tokens. Secure, compliant, and fully redeemable tokenized gold backed by real assets stored in insured vaults in Liechtenstein.',
  keywords: 'tokenized gold, digital gold, gold tokenization, blockchain gold, RWA gold, physical gold tokens, gold NFT, gold investment, digital asset gold',
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
    title: 'Tokenized Gold — Digital Gold Ownership | Toto Finance',
    description: 'Own verified physical gold bars through blockchain tokens. Secure, compliant, and fully redeemable tokenized gold backed by real assets.',
    url: 'https://totofinance.co/tokenized-gold',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Gold — Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Gold — Digital Gold Ownership | Toto Finance',
    description: 'Own verified physical gold bars through blockchain tokens. Secure, compliant, and fully redeemable tokenized gold backed by real assets.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-gold',
  },
};

export default function TokenizedGoldLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

