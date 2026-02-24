import { ReactNode } from 'react';

export const metadata = {
  title: 'Tokenized Neodymium | Digital Rare Earth Supply for AI & EVs | Toto Finance',
  description: 'Tokenized neodymium by Toto Finance. Digitally represented neodymium supply powering AI hardware, EV motors, wind turbines, and advanced magnets. Instant settlement and global access.',
  keywords: 'tokenized neodymium, neodymium tokenization, rare earth tokenization, NdFeB magnets, AI hardware magnets, EV motors neodymium, wind turbine magnets, strategic rare earths, digital neodymium, rare earth blockchain, AI supply chain metals, advanced magnet materials, clean energy materials',
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
    title: 'Tokenized Neodymium | Digital Rare Earth Supply for AI & EVs | Toto Finance',
    description: 'Tokenized neodymium by Toto Finance. Digitally represented neodymium supply powering AI hardware, EV motors, wind turbines, and advanced magnets. Instant settlement and global access.',
    url: 'https://totofinance.co/tokenized-neodymium',
    siteName: 'Toto Finance',
    images: [{ url: 'https://totofinance.co/assets/images/og-preview.png', width: 1200, height: 630, alt: 'Tokenized Neodymium | Toto Finance' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenized Neodymium | Digital Rare Earth Supply for AI & EVs | Toto Finance',
    description: 'Tokenized neodymium by Toto Finance. Digitally represented neodymium supply powering AI hardware, EV motors, wind turbines, and advanced magnets. Instant settlement and global access.',
    images: ['https://totofinance.co/assets/images/og-preview.png'],
  },
  alternates: { canonical: 'https://totofinance.co/tokenized-neodymium' },
};

export default function TokenizedNeodymiumLayout({ children }: { children: ReactNode }) {
  return children;
}
