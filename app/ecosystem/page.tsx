// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import { ArrowRight } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { AnimatedStats } from '../components/client/AnimatedStats';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function EcosystemPage() {

  const statsData = {
    projectSize: 2.2,
    tokenizedTranche: 450,
    expectedYield: 8,
    term: 25
  };

  const partners = [
    {
      logo: '/ecosystem logo/Cardano.svg',
      title: 'Cardano',
      description: 'A research-driven blockchain providing secure, sustainable infrastructure for regulated, long-term digital asset issuance and settlement.',
      url: 'https://cardano.org/'
    },
    {
      logo: '/ecosystem logo/ETH.svg',
      title: 'Ethereum',
      description: 'The leading programmable settlement layer supporting smart contracts, decentralized applications, and deep global liquidity for tokenized real-world assets.',
      url: 'https://ethereum.org/'
    },
    {
      logo: '/ecosystem logo/Polygon.svg',
      title: 'Polygon',
      description: 'A scalable execution layer extending Ethereum\'s settlement capabilities with lower fees and higher throughput for efficient on-chain commodity settlement.',
      url: 'https://polygon.technology/'
    },
    {
      logo: '/ecosystem logo/Solana.svg',
      title: 'Solana',
      description: 'A high-performance blockchain enabling fast execution and scalable transaction processing for real-time digital commodity markets.',
      url: 'https://solana.com/'
    },
    {
      logo: '/ecosystem logo/XRP.svg',
      title: 'XRP Ledger / XRP.cafe',
      description: 'Settlement infrastructure enabling fast, low-cost value transfer and digital asset trading within the XRP ecosystem.',
      url: 'https://xrp.cafe/collection/tiamonds-rwa'
    }
  ];

  const validationPartners = [
    {
      logo: '/ecosystem logo/LCX.svg',
      title: 'LCX - Physical Validator',
      description: 'A globally recognized Physical Validator under the Liechtenstein Blockchain Act, enabling legally enforceable linkage between physical assets and on-chain tokens through regulated validation frameworks.',
      url: 'https://exchange.lcx.com/'
    },
    {
      logo: '/ecosystem logo/GIA.svg',
      title: 'GIA - Diamond Certification',
      description: 'The world\'s leading authority on diamond grading and certification, providing standardized, verifiable provenance and quality assurance for tokenized diamonds.',
      url: 'https://www.gia.edu/'
    },
    {
      logo: '/ecosystem logo/Hacken.svg',
      title: 'Hacken - Security & Audits',
      description: 'A leading cybersecurity firm delivering smart contract audits, infrastructure security assessments, and continuous risk monitoring across blockchain systems.',
      url: 'https://hacken.io/audits/tiamonds/'
    }
  ];

  const tokenizationPartners = [
    {
      logo: '/ecosystem logo/NMKR.svg',
      title: 'NMKR',
      description: 'Institutional tokenization infrastructure on Cardano supporting compliant issuance, asset lifecycle management, and programmable ownership for regulated digital assets.',
      url: 'https://www.nmkr.io/drops/tiamonds-2023'
    },
    {
      logo: '/ecosystem logo/Uniswap.svg',
      title: 'Uniswap',
      description: 'A decentralized liquidity protocol enabling secondary market access, price discovery, and on-chain settlement for supported tokenized assets.',
      url: 'https://app.uniswap.org/explore/pools/ethereum/0x2f65b1737a4cc3c7cc8ddbf969b9427c0f2be9ab19a5b117dcc7c07d2c008498'
    }
  ];


  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Ecosystem — Partners & Integrations | Toto Finance"
        description="Explore Toto Finance partners like Cardano, Ethereum, Polygon, Solana, LCX, and GIA driving the future of tokenized assets."
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
            A globally integrated network of enterprises, infrastructure partners, blockchains, custodians, and data providers powering compliant, asset-backed tokenization of real-world commodities.
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
            Standards-based token issuance and liquidity access across primary and secondary markets.
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
            Orchestrating Trust Across Physical and Digital Markets
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            By integrating blockchains, physical validators, auditors, data providers, and liquidity protocols, Toto Finance delivers a unified infrastructure where real-world assets can be tokenized, traded, settled, and redeemed with transparency, regulatory integrity, and legal certainty.
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