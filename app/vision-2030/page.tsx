// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { CashCardsSection } from '../components/client/CashCardsSection';
import { HeroImagePreload } from '../components/client/HeroImagePreload';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function Vision2030Page() {
  
  const partnerLogos = [
    'Cardano.svg',
    'Coingecko.svg',
    'Coinmarketcap.svg',
    'Ethereum.svg',
    'Gia.svg',
    'LCX (1).svg',
    'Nmkr.svg',
    'Polygon.svg',
    'Solana (1).svg',
    'Uniswap.svg',
    'Xrp.svg',
  ];

  // How it works descriptions
  const howItWorksDescriptions = [
    "To make real-world assets fast, liquid, and programmable, unlocking new opportunities for investors and institutions worldwide",
    "Tokenize with Toto Rails: Commodity lots stored in vaults, warehouses, or tanks are minted into 1:1 backed digital tokens with full compliance and proof-of-reserve.",
    "Trade with Toto Markets: Instant secondary trading, peer-to-peer or via integrated exchanges and brokers, with programmable contracts for forwards, futures, and collateralization.",
    "Settle & Deliver with Toto Clear: Atomic delivery-vs-payment in stablecoins. Choose to hold, redeem, or re-trade your tokens — with logistics and compliance automated by oracles."
  ];

  const cashCards = [
    {
      title: 'Instant Settlement',
      subtitle:
        'Enable atomic, delivery-versus-payment settlement for commodities, eliminating delays and counterparty risk.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Regulatory Compliance',
      subtitle:
        'Embed compliance, permissions, and transfer rules directly into smart contracts across jurisdictions.',
      variant: 'cash-card-green',
    },
    {
      title: 'Market Accessibility',
      subtitle:
        'Enable participation by institutions and market participants through standardized, digital rails.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Infrastructure Standard',
      subtitle:
        'Establish Toto Finance as the institutional-grade reference infrastructure for digital commodity markets.',
      variant: 'cash-card-rose',
    },
  ];

    const boldTerms = ['Tokenize with Toto Rails', 'Trade with Toto Markets', 'Settle & Deliver with Toto Clear'];

  return (
    <div className="min-h-screen w-full relative">
      {/* Preload hero image for LCP optimization */}
      <HeroImagePreload imagePath="/hero-background/vision-2030.webp" />
      
      {/* Page Structured Data */}
      <PageStructuredData
        title="Vision 2030 — The World's Leading Digital Commodity Infrastructure | Toto Finance"
        description="Transforming global trade with blockchain tokenization of commodities, metals, energy, and RWAs by 2030."
        url="https://totofinance.co/vision-2030"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Vision 2030', item: 'https://totofinance.co/vision-2030' },
        ]}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Vision 2030', item: 'https://totofinance.co/vision-2030' },
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
      <Navigation />

      {/* Hero Section Only */}
      <main className="relative flex flex-col justify-end h-screen text-center px-4 sm:px-6 md:px-8 lg:px-12 pb-20 md:pb-32 overflow-hidden">
        <VideoBackground
          videoSrc="/videos/vision-2030.mp4"
          fallbackImage="/hero-background/vision-2030.webp"
          fallbackAlt="Hero background fallback"
          className="hero-video-container"
          overlayClassName="hero-overlay"
          videoClassName="hero-video"
          priority={true}
        />
        <div className="relative z-10 max-w-5xl w-full mx-auto">
          
          {/* Hero Headings */}
          <h1 className="hero-subheading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 text-travel-white font-light leading-tight">
            Vision 2030: The Infrastructure<br />Layer for Digital Commodities
          </h1>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-auto mb-6 sm:mb-8 md:mb-10">
            <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl text-travel-white leading-relaxed">
              By 2030, Toto Finance will operate the global infrastructure enabling asset-backed tokenization, instant settlement, and compliant trade of commodities, metals, energy, and real-world assets.
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-8 py-3 rounded-full text-lg font-medium bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Explore Commodity Market
            </a>
          </div>

        </div>
      </main>

      {/* Mission Section */}
      <section className="mission-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-header">
                <p className="mission-label">Our Vision</p>
              </div>
              
              <div className="mission-text">
                <h2 className="mission-heading">
                  A Trusted Global Infrastructure for Digital Commodity Markets
                </h2>
                
                <p className="mission-description">
                  To establish the world's most trusted infrastructure for digital commodities - enabling secure ownership, transparent reserves, compliant settlement, and global interoperability across real-world asset markets.
                </p>
                
                <a 
                  href="https://totofinance.co/blog/post/why-liechtenstein-is-leading-the-tokenization-revolution-inside-the-tvtg-framework/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mission-cta"
                >
                  Learn about Liechtenstein framework
                </a>
              </div>
            </div>
            
            <div className="mission-image">
              <Image 
                src="/assets/images/vision.webp" 
                alt="Our Vision"
                className="mission-img"
                width={800}
                height={600}
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="experience-grid">
            <div className="experience-image">
              <Image 
                src="/assets/images/mission.webp" 
                alt="Our Mission"
                className="experience-img"
                width={800}
                height={600}
                loading="lazy"
                quality={85}
              />
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <p className="experience-label">Our Mission</p>
              </div>
              
              <div className="experience-text">
                <h2 className="experience-heading">
                  Making Real-World Assets Fast & Liquid
                </h2>
                
                <div className="experience-description-container">
                  <p className="experience-description">
                    To transform physical commodities and real-world assets into programmable digital instruments - reducing friction, unlocking liquidity, and enabling real-time global settlement for institutions and markets worldwide.
                  </p>
                </div>
                
                <a 
                  href="https://totofinance.co/blog/post/tokenized-diamond-democratizing-access-to-luxury-jewelry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-cta"
                >
                  Learn about tokenized diamonds
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Management Section */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            {/* Left copy */}
            <div className="cash-left">
              <h2 className="cash-heading">Bridging Physical Assets and Digital Infrastructure</h2>
              <p className="cash-description">
                Toto Finance focuses on solving the structural inefficiencies of global commodity markets through compliant blockchain infrastructure - connecting physical assets to digital settlement, custody, and liquidity.
              </p>
              <div className="mt-6">
                <a
                  href="https://app.totofinance.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cash-cta"
                >
                  Explore Marketplace
                </a>
              </div>
            </div>

            {/* Right cards */}
            <CashCardsSection cards={cashCards} />
          </div>
        </div>
      </section>

      {/* Product Solutions Section */}
      <section className="product-solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40" style={{backgroundColor: '#F3F4F6'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Roadmap to Global Commodity Tokenization
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A multi-year roadmap building the infrastructure, interoperability, and liquidity required for global digital commodity markets.
            </p>
          </div>
          
          {/* Vertical Timeline Roadmap */}
          <div className="max-w-4xl mx-auto mb-12 px-4 sm:px-6">
            <div className="relative">
              {/* Timeline Line - Desktop */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden sm:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8 sm:space-y-12">
                {/* 2025 - Foundation & Global Expansion */}
                <div className="relative flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center z-10 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <span className="text-sm sm:text-lg font-light text-black">2025</span>
                  </div>
                  <div className="sm:ml-6 md:ml-8 flex-1 w-full">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Foundation & Global Expansion</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Deploy scalable tokenization infrastructure, expand commodity coverage, and establish regulated frameworks for global operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2026 - Metals & In-Ground Resource Integration */}
                <div className="relative flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center z-10 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <span className="text-sm sm:text-lg font-light text-black">2026</span>
                  </div>
                  <div className="sm:ml-6 md:ml-8 flex-1 w-full">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Metals & In-Ground Resource Integration</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Advance tokenization of metals and in-ground resources, preparing institutional-grade access to strategic commodities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2027 - Expansion Resource Layer */}
                <div className="relative flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center z-10 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <span className="text-sm sm:text-lg font-light text-black">2027</span>
                  </div>
                  <div className="sm:ml-6 md:ml-8 flex-1 w-full">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Resource Layer Expansion</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Introduce advanced token models, liquidity mechanisms, and cross-asset interoperability across commodity classes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2028 - Market Infrastructure & Tokenized Finance Convergence */}
                <div className="relative flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center z-10 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <span className="text-sm sm:text-lg font-light text-black">2028</span>
                  </div>
                  <div className="sm:ml-6 md:ml-8 flex-1 w-full">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Market Infrastructure Convergence</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Align digital commodities with broader financial infrastructure - settlement, custody, and institutional trading systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2029 - Interoperability & Global Access */}
                <div className="relative flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center z-10 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <span className="text-sm sm:text-lg font-light text-black">2029</span>
                  </div>
                  <div className="sm:ml-6 md:ml-8 flex-1 w-full">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Interoperability & Global Access</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Deploy cross-border value transfer rails and deepen partnerships to enable regulated global liquidity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2030 - Global Liquidity Network */}
                <div className="relative flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center z-10 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <span className="text-sm sm:text-lg font-light text-black">2030</span>
                  </div>
                  <div className="sm:ml-6 md:ml-8 flex-1 w-full">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                      <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3">Global Liquidity Network</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Operate a fully connected ecosystem where commodities, in-ground assets, and real-world value move seamlessly and transparently worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
            >
              Explore Marketplace
            </a>
          </div>
        </div>
      </section>

      {/* Trading & Technology Solutions Section */}
      <section className="trading-solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              A Borderless Commodity Market, Operating in Real Time
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              By 2030, Toto Finance will support a global, always-on commodity market - where ownership, settlement, and delivery operate digitally, transparently, and without friction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Instant Settlement */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Instant Settlement</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Real-time settlement with no intermediaries, powered by automated delivery-versus-payment.
              </p>
            </div>

            {/* Regulatory Integrity */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Regulatory Integrity</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Built on enforceable, jurisdiction-aware frameworks supporting institutional participation.
              </p>
            </div>

            {/* Programmable Infrastructure */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Programmable Infrastructure</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Smart contracts automate ownership, settlement, and compliance across asset lifecycles.
              </p>
            </div>

            {/* Universal Market Access */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Universal Market Access</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A unified infrastructure enabling participation across regions and market participants.
              </p>
            </div>

            {/* Sustainability as a Layer */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Sustainability as a Layer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Optional integration of sustainability metrics and environmental attributes where relevant - without compromising market neutrality.
              </p>
            </div>

            {/* Borderless Trading */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Borderless Trading</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A 24/7 global marketplace independent of geography, time zones, or legacy constraints.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://exchange.lcx.com/en/trade/Toto-EUR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
            >
              Start Trading
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section pt-12 pb-0 md:pt-24 md:pb-0">
        <div className="newsletter-bg">
          <VideoBackground
            videoSrc="/videos/footer.mp4"
            fallbackImage="/hero-background/footer-backup.webp"
            fallbackAlt="Newsletter background fallback"
            className="newsletter-fallback"
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