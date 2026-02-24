import { ReactNode } from 'react';

export const metadata = {
  title: 'War Ready Package — Tokenized Gold Investment | Toto Finance',
  description: 'War Ready Package: Own LBMA-grade tokenized gold on-chain. Secure digital gold investment starting at $1,200. Fully redeemable physical gold bars.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: 'https://totofinance.co/products',
  },
};

export default function WarReadyPackageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
