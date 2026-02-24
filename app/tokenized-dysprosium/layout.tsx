import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Dysprosium | Critical Rare Earth for EV & Defense Magnets | Toto Finance',
  description: 'Tokenized dysprosium by Toto Finance. Digitally represented dysprosium supply critical for EV motors, defense systems, and high-temperature magnets powering AI and electrification.',
  keywords: 'tokenized dysprosium, dysprosium tokenization, rare earth magnets, EV motor magnets, defense magnets, high-temperature magnets, strategic rare earths, digital dysprosium, rare earth blockchain, EV supply chain metals, advanced magnet materials, AI hardware materials',
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
    title: 'Tokenized Dysprosium | Critical Rare Earth for EV & Defense Magnets | Toto Finance',
    description: 'Tokenized dysprosium by Toto Finance. Digitally represented dysprosium supply critical for EV motors, defense systems, and high-temperature magnets.',
    url: 'https://totofinance.co/tokenized-dysprosium',
    siteName: 'Toto Finance',
    images: [
      {
        url: 'https://totofinance.co/assets/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Tokenized Dysprosium | Toto Finance',
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
    title: 'Tokenized Dysprosium | Critical Rare Earth for EV & Defense Magnets | Toto Finance',
    description: 'Tokenized dysprosium by Toto Finance. Digitally represented dysprosium supply critical for EV motors, defense systems, and high-temperature magnets.',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Dysprosium | Toto Finance' }],
  },
  alternates: {
    canonical: 'https://totofinance.co/tokenized-dysprosium',
  },
};

export default function TokenizedDysprosiumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
