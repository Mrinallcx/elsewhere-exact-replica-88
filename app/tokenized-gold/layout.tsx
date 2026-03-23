import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Gold | Buy Blockchain Backed Gold | Toto Finance';
const PAGE_DESCRIPTION =
  'Invest in tokenized gold backed by real, vault stored physical gold. Trade 24/7, redeem anytime, and enjoy full on chain transparency with Toto Finance.';
const KEYWORDS =
  'tokenized gold, buy tokenized gold, gold backed tokens, gold tokenization, invest in gold blockchain, digital gold ownership, gold backed crypto, physical gold tokens';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: KEYWORDS,
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://totofinance.co/tokenized-gold',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Gold | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-gold',
  },
};

export default function TokenizedGoldLayout({ children }: { children: ReactNode }) {
  return children;
}
