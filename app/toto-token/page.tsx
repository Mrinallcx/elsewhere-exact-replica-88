// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { TotoTokenStats } from '../components/client/TotoTokenStats';
import { TotoTokenFAQ } from '../components/client/TotoTokenFAQ';

// Dynamic imports for heavy components - Recharts is a large library (~600KB+)
const PieChartSection = dynamicImport(() => import('../components/client/PieChartSection').then(mod => ({ default: mod.PieChartSection })), {
  loading: () => <div className="pie-chart-loading" />,
});

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function TotoTokenPage() {

  const pieChartData = [
    { name: 'Own to earn (future)', value: 35, color: '#1F2937' }, // dark gray
    { name: 'Ecosystem', value: 32.5, color: '#4B5563' }, // medium gray
    { name: 'Own to earn (current)', value: 16, color: '#6B7280' }, // lighter gray
    { name: 'Community', value: 10.5, color: '#9CA3AF' }, // light gray
    { name: 'Growth', value: 6, color: '#D1D5DB' }, // very light gray
  ];

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="$TOTO Token — Universal Utility Token for Real-World Assets | Toto Finance"
        description="$TOTO Token powers real-world assets with universal utility, enabling open commodity ownership, staking, and tokenomics."
        url="https://totofinance.co/toto-token"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: '$TOTO Token', item: 'https://totofinance.co/toto-token' },
        ]}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Toto Token', item: 'https://totofinance.co/toto-token' },
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

      {/* Hero Section */}
      <main className="relative flex flex-col items-start justify-center min-h-[90vh] md:min-h-[100vh] text-left px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        {/* Background Video */}
        <VideoBackground
          videoSrc="/videos/toto-token-hero.mp4"
          fallbackImage="/hero-background/footer-backup.webp"
          fallbackAlt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        
         <div className="relative z-10 max-w-7xl w-full mx-auto">
           
           
           {/* Hero Headings */}
           <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 text-white text-left">
             The Universal Utility Token for Digital Commodity Infrastructure
           </h1>
           
           {/* Description Section */}
           <div className="max-w-3xl w-full mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left">
             <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-2 text-left">
             $TOTO powers access, settlement, fees, and incentives across the Toto Finance ecosystem.
             </p>
           </div>
           
           {/* Call-to-Action */}
           <div className="flex flex-col items-start space-y-6 mb-10 sm:mb-16">
             <a 
               href="https://exchange.lcx.com/en/trade/TOTO-EUR"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white text-black px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
             >
               <span>View on Exchange</span>
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

      {/* Statistics Section */}
      <section className="stats-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Token Supply & Market Information
            </h2>
            <p className="stats-intro-text">
              $TOTO is a fixed-supply utility token designed to support platform operations, ecosystem incentives, and long-term infrastructure growth.
            </p>
          </div>
          
          <TotoTokenStats />
        </div>
      </section>

      {/* Pie Chart Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Token Allocation & Distribution
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The $TOTO supply is allocated to support ecosystem usage, platform incentives, and long-term infrastructure development.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Pie Chart */}
            <PieChartSection data={pieChartData} />
          </div>
        </div>
      </section>
      
      {/* Digital Assets Section */}
      <section id="digital-assets" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Utility Across the Toto Finance Ecosystem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Platform Incentives */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Platform Incentives</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access participation incentives linked to verified platform activity and usage.
              </p>
            </div>

            {/* Asset Utility & Secondary Market Support */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Asset Utility & Secondary Market Support</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Enhance liquidity and usability of tokenized assets across primary and secondary markets.
              </p>
            </div>
            
            {/* Multichain Infrastructure */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Multichain Infrastructure</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Support cross-chain settlement and interoperability across supported blockchain networks.
              </p>
            </div>
            
            {/* Staking for Platform Access */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Staking for Platform Access</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Stake $TOTO to unlock reduced fees, higher limits, and access privileges.
              </p>
            </div>
            
            {/* Additional Utilities */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Additional Utilities</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Further utilities aligned with settlement, collateralization, and infrastructure services.
              </p>
            </div>
            
            {/* Ecosystem Expansion */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Ecosystem Expansion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Integration into additional asset classes and partner platforms.
              </p>
            </div>

          </div>
          
          {/* Utility Disclaimer */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              $TOTO also operates within its own dedicated token environment, focused exclusively on token utility and ecosystem integrations.{" "}
              Visit{" "}
              <a
                href="https://www.toto.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 underline hover:text-gray-900"
              >
                toto.xyz
              </a>{" "}
              - The $TOTO Utility Hub.
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="https://exchange.lcx.com/en/trade/TOTO-EUR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View on Exchange
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
                Get answers to your questions
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                No more confusion—gain clear insights into asset tokenization with direct, easy-to-understand answers. These insights help you navigate the world of tokenization.
              </p>
              
              {/* Community Links */}
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-6">
                  <a 
                    href="https://discord.gg/MMYGbBxZcs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-gray-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm mb-1">Join community</span>
                    <span className="text-gray-900 text-sm font-medium">Discord</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="flex flex-col">
              <TotoTokenFAQ />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}

