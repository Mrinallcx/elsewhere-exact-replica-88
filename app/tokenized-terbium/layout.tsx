import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Terbium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Without terbium, the magnets inside every EV motor and wind turbine demagnetize at operating temperature. Toto Finance brings the magnet stabilizer on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The heavy rare earth that prevents permanent magnets from failing under heat. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized terbium, terbium tokenization, buy tokenized terbium, digital terbium, terbium-backed tokens, RWA terbium, real world asset terbium, in-ground terbium, terbium future delivery, terbium oxide token, terbium instant settlement, DeFi terbium, terbium yield, terbium collateral loans, magnet stabilization terbium, Terfenol-D, green phosphor terbium, defense electronics terbium, NdFeB magnet terbium';

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
    url: 'https://totofinance.co/tokenized-terbium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Terbium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-terbium',
  },
};

export default function TokenizedTerbiumLayout({ children }: { children: ReactNode }) {
  return children;
}
