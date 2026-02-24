import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
  description: 'Tokenized lutetium by Toto Finance. 1:1 asset-backed lutetium oxide tokens, always redeemable. In-Ground Lutetium future delivery contracts (1-12 months and 1-6 years). Instant settlement with stablecoins. The rarest and most expensive rare earth for cancer imaging, high-refractive optics, and scintillators.',
  keywords: 'tokenized lutetium, lutetium tokenization, buy tokenized lutetium, digital lutetium, lutetium-backed tokens, RWA lutetium, real world asset lutetium, in-ground lutetium, lutetium future delivery, lutetium oxide token, lutetium instant settlement, DeFi lutetium, lutetium yield, lutetium collateral loans, PET imaging',
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
    title: 'Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized lutetium by Toto Finance. 1:1 asset-backed lutetium oxide tokens, always redeemable. In-Ground Lutetium future delivery contracts. Instant stablecoin settlement.',
    url: 'https://totofinance.co/tokenized-lutetium',
    siteName: 'Toto Finance',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Lutetium | Toto Finance' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance',
    description: 'Tokenized lutetium by Toto Finance. 1:1 asset-backed lutetium oxide tokens, always redeemable. In-Ground Lutetium future delivery contracts. Instant stablecoin settlement.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Lutetium | Toto Finance' }],
  },
  alternates: { canonical: 'https://totofinance.co/tokenized-lutetium' },
};

export default function TokenizedLutetiumLayout({ children }: { children: ReactNode }) {
  return children;
}
