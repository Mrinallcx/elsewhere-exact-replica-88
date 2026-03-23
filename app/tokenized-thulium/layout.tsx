import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Thulium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every thulium fiber laser replacing a scalpel in a surgical suite depends on an element the world produces at 4.2 tonnes per year. Toto Finance brings the surgeon\'s rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element powering minimally invasive surgery and portable diagnostics. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized thulium, thulium tokenization, buy tokenized thulium, digital thulium, thulium-backed tokens, RWA thulium, real world asset thulium, in-ground thulium, thulium future delivery, thulium oxide token, thulium instant settlement, DeFi thulium, thulium yield, thulium collateral loans, thulium fiber lasers, Tm:YAG laser, portable X-ray thulium, thulium-170 radioisotope, medical rare earth thulium';

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
    url: 'https://totofinance.co/tokenized-thulium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Thulium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-thulium',
  },
};

export default function TokenizedThuliumLayout({ children }: { children: ReactNode }) {
  return children;
}
