import { ReactNode } from 'react';

export const metadata = {
  title: 'Terms of Service | Toto Finance AG',
  description: 'Terms of service for Toto Finance AG. Terms and conditions governing use of our website and services.',
  keywords: 'Toto Finance terms of service, terms and conditions, user agreement, Toto Finance AG legal',
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
    title: 'Terms of Service | Toto Finance AG',
    description: 'Terms of service for Toto Finance AG. Terms and conditions governing use of our website and services.',
    url: 'https://totofinance.co/terms-of-service',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Service | Toto Finance AG',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Toto Finance AG',
    description: 'Terms of service for Toto Finance AG. Terms and conditions governing use of our website and services.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: {
    canonical: 'https://totofinance.co/terms-of-service',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
