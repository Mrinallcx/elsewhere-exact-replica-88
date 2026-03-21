import { ReactNode } from 'react';

export const metadata = {
  title: 'Ecosystem - Infrastructure Partners & Integrations | Toto Finance',
  description:
    'An integrated worldwide network of companies, infrastructure providers, blockchains, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real-world commodities.',
  keywords: 'Toto Finance ecosystem, tokenization ecosystem, blockchain integrations, asset tokenization partners, RWA infrastructure ecosystem, tokenization infrastructure partners, on-chain settlement ecosystem, blockchain validation partners, LCX validation, GIA certification, Cardano integration, Ethereum integration, Polygon integration, Solana integration, Multi-chain tokenization platform, Digital asset infrastructure partners, Institutional tokenization ecosystem',
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
    title: 'Ecosystem - Infrastructure Partners & Integrations | Toto Finance',
    description:
    'An integrated worldwide network of companies, infrastructure providers, blockchains, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real-world commodities.',
    url: 'https://totofinance.co/ecosystem',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Ecosystem - Infrastructure Partners & Integrations | Toto Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecosystem - Infrastructure Partners & Integrations | Toto Finance',
    description:
    'An integrated worldwide network of companies, infrastructure providers, blockchains, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real-world commodities.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/ecosystem',
  },
};

export default function EcosystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

