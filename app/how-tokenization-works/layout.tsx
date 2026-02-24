export const metadata = {
  title: 'How Tokenization Works | Instant Settlement, DeFi Trading & More | Toto Finance',
  description:
    'Learn how Toto Finance tokenizes real-world commodities. Instant stablecoin settlement, DeFi yield and collateral loans, 24/7 global trading, and institutional-grade compliance — all on-chain.',
  keywords:
    'how tokenization works, commodity tokenization process, instant settlement stablecoins, DeFi commodity trading, tokenized asset collateral, USDC gold settlement, USDT commodity trading, on-chain yield, programmable compliance, real world asset DeFi',
  openGraph: {
    title: 'How Tokenization Works | Toto Finance',
    description:
      'Instant stablecoin settlement, DeFi secondary markets, collateral loans, and 24/7 global trading for tokenized commodities — all on-chain.',
    url: 'https://totofinance.co/how-tokenization-works',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'How Tokenization Works - Toto Finance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Tokenization Works | Toto Finance',
    description:
      'Instant stablecoin settlement, DeFi secondary markets, collateral loans, and 24/7 global trading — all on-chain.',
  },
  alternates: {
    canonical: 'https://totofinance.co/how-tokenization-works',
  },
};

export default function HowTokenizationWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
