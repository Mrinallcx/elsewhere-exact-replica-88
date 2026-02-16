import { ReactNode } from 'react';

export const metadata = {
  title: 'Achievements & Milestones | Industry Firsts in RWA Tokenization | Toto Finance',
  description: 'Toto Finance achievements: First RWA on Cardano, XRP Ledger & Solana. World\'s largest tokenized diamond marketplace. 30,000+ tokenized assets. MiCA-compliant. GIA-certified. Lloyd\'s insured.',
  keywords: 'Toto Finance achievements, RWA tokenization firsts, tokenized diamonds, first RWA Cardano, first RWA XRPL, tokenized assets milestones, Tiamonds, MiCA compliant tokenization',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Achievements & Milestones | Industry Firsts in RWA Tokenization | Toto Finance',
    description: 'First RWA on Cardano, XRP Ledger & Solana. World\'s largest tokenized diamond marketplace. 30,000+ tokenized assets issued. MiCA-compliant.',
    url: 'https://totofinance.co/achievements',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Toto Finance Achievements & Milestones',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements & Milestones | Toto Finance',
    description: 'First RWA on Cardano, XRP Ledger & Solana. 30,000+ tokenized assets. World\'s largest tokenized diamond marketplace. MiCA-compliant.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/achievements',
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
