// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import { ArrowRight } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function EcosystemPage() {
  const partners = [
    {
      logo: '/ecosystem logo/Cardano.svg',
      title: 'Cardano',
      description:
        'A research-oriented blockchain offering secure and sustainable infrastructure for regulated, long-term digital asset issuance and settlement.',
      url: 'https://cardano.org/',
    },
    {
      logo: '/ecosystem logo/ETH.svg',
      title: 'Ethereum',
      description:
        'The world’s most popular programmable settlement infrastructure for smart contracts, decentralized apps, and extensive global liquidity for tokenized real-world assets.',
      url: 'https://ethereum.org/',
    },
    {
      logo: '/ecosystem logo/Polygon.svg',
      title: 'Polygon',
      description:
        'A scalable execution layer complementing Ethereum’s settlement infrastructure with lower costs and greater throughput for efficient on-chain commodity settlement.',
      url: 'https://polygon.technology/',
    },
    {
      logo: '/ecosystem logo/Solana.svg',
      title: 'Solana',
      description:
        'A high-performance blockchain enabling fast execution and scalable transaction processing for real-time digital commodity markets.',
      url: 'https://solana.com/',
    },
    {
      logo: '/ecosystem logo/XRP.svg',
      title: 'XRP Ledger / XRP.cafe',
      description:
        'Settlement infrastructure for fast, low-cost value transfer and digital asset trading in the XRP ecosystem.',
      url: 'https://xrp.cafe/collection/tiamonds-rwa',
    },
  ];

  const validationPartners = [
    {
      logo: '/ecosystem logo/LCX.svg',
      title: 'LCX - Physical Validator',
      description:
        'Internationally respected Physical Validator according to the Liechtenstein Blockchain Act, allowing for a legally binding connection between physical assets and blockchain tokens via certified validation processes.',
      url: 'https://exchange.lcx.com/',
    },
    {
      logo: '/ecosystem logo/GIA.svg',
      title: 'GIA - Diamond Certification',
      description:
        'World’s most trusted diamond grading and certification authority, ensuring standardized and verifiable origin and quality for tokenized diamonds.',
      url: 'https://www.gia.edu/',
    },
    {
      logo: '/ecosystem logo/Hacken.svg',
      title: 'Hacken - Security & Audits',
      description:
        'Specialized cybersecurity service provider for smart contract audits, infrastructure security analysis, and ongoing risk monitoring on blockchain networks.',
      url: 'https://hacken.io/audits/toto-finance/',
    },
  ];

  const tokenizationPartners = [
    {
      logo: '/ecosystem logo/NMKR.svg',
      title: 'NMKR',
      description:
        'Compliant institutional tokenization infrastructure on the Cardano blockchain, supporting regulated digital assets with lifecycle management and programmable ownership.',
      url: 'https://www.nmkr.io/drops/tiamonds-2023',
    },
    {
      logo: '/ecosystem logo/Uniswap.svg',
      title: 'Uniswap',
      description:
        'Decentralized liquidity protocol providing secondary market access, price discovery, and on-chain settlement for supported tokenized assets.',
      url: 'https://app.uniswap.org/explore/pools/ethereum/0x2f65b1737a4cc3c7cc8ddbf969b9427c0f2be9ab19a5b117dcc7c07d2c008498',
    },
  ];


  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Ecosystem — Partners & Integrations | Toto Finance"
        description="An integrated worldwide network of companies, infrastructure providers, blockchains, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real-world commodities."
        url="https://totofinance.co/ecosystem"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Ecosystem', item: 'https://totofinance.co/ecosystem' },
        ]}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Ecosystem', item: 'https://totofinance.co/ecosystem' },
        ]}
      />
      
      {/* Gradual Blur Effect */}
      <GradualBlur 
        preset="page-footer" 
        strength={2} 
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />
      
      {/* Navigation */}
      <Navigation pastHero={true} />

      {/* Hero Section */}
      <section className="hero-section px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight mb-6">
            Toto Finance Ecosystem
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            An integrated worldwide network of companies, infrastructure providers, blockchains, custodians, and data
            suppliers facilitating compliant, asset-backed tokenization of real-world commodities.
          </p>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="feature-boxes-section px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Blockchain & Settlement Layers
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer block"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gray-50 p-3">
                    <img 
                      src={partner.logo} 
                      alt={partner.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{partner.title}</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Validation, Certification & Compliance Section */}
      <section className="feature-boxes-section px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Validation, Certification & Compliance
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {validationPartners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer block"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gray-50 p-3">
                    <img 
                      src={partner.logo} 
                      alt={partner.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{partner.title}</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenization & Market Access Section */}
      <section className="feature-boxes-section px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Tokenization & Market Access
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl">
            Compliant token issuance and secondary market access based on industry standards.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokenizationPartners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer block"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gray-50 p-3">
                    <img 
                      src={partner.logo} 
                      alt={partner.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{partner.title}</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Framing Block */}
      <section className="closing-framing-section px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            Trust Weaving in Physical and Online Markets
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Toto Finance brings together blockchains, physical validators, auditors, data providers, and liquidity
            protocols to provide a comprehensive framework where real-world assets can be tokenized, traded, settled,
            and redeemed in a transparent, regulatory, and legal manner.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section pt-12 pb-0 md:pt-24 md:pb-0">
        <div className="newsletter-bg">
          <VideoBackground
            videoSrc="/videos/footer.mp4"
            fallbackImage="/hero-background/footer-backup.webp"
            fallbackAlt="Newsletter background fallback"
            className="newsletter-video"
            overlayClassName="newsletter-overlay"
            videoClassName="newsletter-video"
          />
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}