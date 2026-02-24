import { ReactNode } from 'react';

export const metadata = {
  title: 'Enterprise Tokenization Solutions | Toto Finance',
  description: 'Enterprise-grade tokenization solutions for real-world assets. Comprehensive infrastructure with compliance, security, and trading capabilities.',
  keywords: 'enterprise tokenization solutions, institutional RWA infrastructure, asset tokenization services, compliance & security tokenization, trading infrastructure, proof-of-reserve, institutional blockchain solutions, enterprise digital assets, RWA tokenization platform, multi-jurisdictional compliance',
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
    title: 'Enterprise Tokenization Solutions | Toto Finance',
    description: 'Enterprise-grade tokenization solutions for real-world assets. Comprehensive digital asset infrastructure with compliance, security, and trading capabilities built for institutional success.',
    url: 'https://totofinance.co/solutions',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Solutions — Toto Finance',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@totofinance',
    creator: '@totofinance',
    title: 'Enterprise Tokenization Solutions | Toto Finance',
    description: 'Enterprise-grade tokenization solutions for real-world assets. Comprehensive digital asset infrastructure with compliance, security, and trading capabilities built for institutional success.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Solutions | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

