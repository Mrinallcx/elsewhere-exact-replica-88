import { ReactNode } from 'react';

const PAGE_TITLE = 'Tokenized Samarium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'When neodymium magnets fail from heat, samarium-cobalt magnets keep working. Toto Finance brings the extreme-temperature rare earth on-chain from 1:1 redeemable metal tokens to In-Ground future delivery contracts. The magnet inside every fighter jet, missile, and satellite. Instant stablecoin settlement. DeFi secondary markets.';
const KEYWORDS =
  'tokenized samarium, samarium tokenization, buy tokenized samarium, digital samarium, samarium-backed tokens, RWA samarium, real world asset samarium, in-ground samarium, samarium future delivery, samarium metal token, samarium instant settlement, DeFi samarium, samarium yield, samarium collateral loans, SmCo magnets, samarium cobalt aerospace, defense rare earth samarium';

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
    url: 'https://totofinance.co/tokenized-samarium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Samarium | Toto Finance',
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
    canonical: 'https://totofinance.co/tokenized-samarium',
  },
};

export default function TokenizedSamariumLayout({ children }: { children: ReactNode }) {
  return children;
}
