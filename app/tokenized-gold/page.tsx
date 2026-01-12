// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { Navigation } from '../components/Navigation';
import { GoldProductCards } from '../components/client/GoldProductCards';
import { CashCardsSection } from '../components/client/CashCardsSection';
import { TabSwitcher } from '../components/client/TabSwitcher';
import { GoldBlogMarquee } from '../components/client/GoldBlogMarquee';

// Dynamic imports for heavy components (lazy load below-fold components)
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const RippleGrid = dynamicImport(() => import('../../src/components/RippleGrid'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function TokenizedGoldPage() {
  const cashCards = [
      {
        title: 'Regulated & Audited',
      subtitle: 'Built under MiCA and Liechtenstein TVTG with LCX as Physical Validator.',
        variant: 'cash-card-blue',
      },
      {
        title: 'Redeemable Assets',
      subtitle: 'Assets are stored in accredited, high-security vaults in Liechtenstein',
        variant: 'cash-card-green',
      },
      {
        title: 'Transparent Reserves',
      subtitle: 'Live proof-of-reserves dashboards and quarterly independent audits.',
        variant: 'cash-card-purple',
      },
      {
        title: 'Simple Fees',
      subtitle: 'Clear, upfront minting, trading, redemption, and no storage costs.',
        variant: 'cash-card-rose',
    }
  ];

  return (
    <div className="min-h-screen w-full relative">
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Gold', item: 'https://totofinance.co/tokenized-gold' },
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

      {/* Main Content */}
      <main className="relative flex flex-col items-start sm:items-center justify-center min-h-[60vh] md:min-h-[70vh] text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-white">
        {/* RippleGrid Background */}
        <div className="absolute inset-0 z-0">
          <RippleGrid
            gridColor="#fbbf24"
            rippleIntensity={0.02}
            gridSize={12.0}
            gridThickness={8.0}
            fadeDistance={1.5}
            vignetteStrength={2.0}
            glowIntensity={0.08}
            opacity={0.06}
            mouseInteraction={true}
            mouseInteractionRadius={0.6}
          />
        </div>
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          
          
          {/* Hero Headings */}
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2">
              <span 
                className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent"
                style={{
                  animation: 'pulse 6s ease-in-out infinite'
                }}
              >
                Gold Content
              </span>
            </h1>
          
          <h2 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <span 
              className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent"
              style={{
                animation: 'pulse 6s ease-in-out infinite',
                animationDelay: '1.5s'
              }}
            >
              Digital Gold Investment
            </span>
          </h2>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-2 text-left sm:text-center">
              Own LBMA-grade gold on-chain
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <a 
              href="https://buy.stripe.com/test_4gM3cu7eK7p29fX5wLeZ200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 flex items-center space-x-2 group"
            >
              <span>Invest in Gold</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
        </div>
      </main>
      
      {/* Gold Product Cards Section */}
      <section className="categories-section px-6 md:px-8 lg:px-12 pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Top row: 4 smaller cards */}
          <div className="categories-grid-4">
            <GoldProductCards count={4} price={1200} />
          </div>
          
          <div className="text-center mt-12">
            <button className="categories-cta">
              Explore All Products
              <svg className="categories-cta-icon" viewBox="0 0 17 17" fill="none">
                <path d="M14.446 2.083L4.779 2.083C4.365 2.083 4.029 2.419 4.029 2.833C4.029 3.247 4.365 3.583 4.779 3.583L12.635 3.583L2.582 13.636C2.289 13.929 2.289 14.404 2.582 14.697C2.875 14.99 3.35 14.99 3.643 14.697L13.696 4.644L13.696 12.5C13.696 12.914 14.031 13.25 14.446 13.25C14.86 13.25 15.196 12.914 15.196 12.5L15.196 2.833C15.196 2.419 14.86 2.083 14.446 2.083Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      

      {/* Cash Management Section */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            {/* Left copy */}
            <div className="cash-left">
              <h2 className="cash-heading">Institutional-Grade Gold Tokenization</h2>
              <p className="cash-description">
                Ensuring Transparency, Security, and Accountability in Every Gold Transaction.
              </p>
              <div className="mt-6">
                <button className="cash-cta">Explore Gold Tokens</button>
              </div>
            </div>

            {/* Right cards */}
            <div className="cash-right">
              <CashCardsSection cards={cashCards} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-header">
                <p className="mission-label">Why Tokenized Gold</p>
              </div>
              
              <div className="mission-text">
                <h2 className="mission-heading">
                  Secure Your Future with Digital Gold Investment
                </h2>
                
                <p className="mission-description">
                  Own, trade, and redeem LBMA-grade gold tokens, backed by real-world assets in secure custody. Seamless access and liquidity with full redemption rights, anytime.
                </p>
                
                <button className="mission-cta">
                  Learn more
                </button>
              </div>
            </div>
            
             <div className="mission-image group relative">
               <Image 
                 src="/assets/images/gold-market-analysis.png" 
                 alt="Tokenized Gold Investment"
                 fill
                 className="mission-img transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section px-6 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="experience-grid">
            <div className="experience-image group">
              <img 
                src="/assets/images/gold-market-analysis.png" 
                alt="Gold Investment Process"
                className="experience-img transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <p className="experience-label">How it works</p>
              </div>
              
              <div className="experience-text">
                <h2 className="experience-heading">
                  We Make Your Gold Investment Smart
                </h2>
                
                <p className="experience-description">
                  Seamlessly invest in gold with our advanced platform that provides instant liquidity, transparent pricing, and secure custody.
                </p>
                
                <button className="experience-cta">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="resources-heading">
              Resources
            </h2>
            <p className="resources-subtitle">
              See the Latest from Toto Finance
            </p>
          </div>
          
          <TabSwitcher
            tabs={[
              {
                id: 'news',
                label: 'Gold News',
                content: <GoldBlogMarquee />
              },
              {
                id: 'updates',
                label: 'Market Updates',
                content: <GoldBlogMarquee />
              }
            ]}
            defaultTab="news"
          />
          
          <div className="text-center mt-12">
            <button className="resources-cta">
              Explore Insights
            </button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />

    </div>
  );
}

