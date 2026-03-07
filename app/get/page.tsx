// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import { Globe } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { AnimatedStats } from '../components/client/AnimatedStats';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function GetPage() {
  const stats = {
    projectSize: 2200,
    tokenizedTranche: 450,
    expectedYield: 8,
    term: 25
  };

  return (
    <div className="min-h-screen w-full relative bg-white">
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
      <main className="relative flex flex-col items-start sm:items-center justify-center min-h-[100vh] text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <VideoBackground
          videoSrc="/videos/footer.mp4"
          fallbackImage=""
          fallbackAlt="Hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          overlayClassName="absolute inset-0 bg-black bg-opacity-50 z-1"
          videoClassName="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
           
           
           {/* Hero Headings */}
           <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 text-white">
             Bridging Institutional Finance with Renewable Growth
           </h1>
           
           {/* Description Section */}
           <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
             <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-2 text-left sm:text-center">
             Institutional-grade access to renewable energy returns — bridging real-world assets, verified carbon credits, and long-term ESG value.
             </p>
           </div>
           
           {/* Call-to-Action */}
           <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
             <a 
               href="https://buy.stripe.com/test_4gM3cu7eK7p29fX5wLeZ200"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white text-black px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
             >
               <span>Join Waitlist</span>
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
            <p className="stats-intro-text">
            Toto Finance is building the foundation for the future of global trade.
            </p>
          </div>
          
          <AnimatedStats stats={stats} />
        </div>
      </section>
      
      {/* Feature Boxes Section */}
      <section className="feature-boxes-section px-6 md:px-8 lg:px-12 pt-0 pb-20 md:pt-0 md:pb-32 bg-white -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carbon Credits */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Carbon Credits</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Verified offsets from solar generation.
              </p>
            </div>

            {/* Jurisdiction */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Jurisdiction</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fully regulated entity.
              </p>
            </div>

            {/* Investor Access */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Investor Access</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                KYC-verified institutional investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Structural Overview Section */}
      <section id="regulatory-overview" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              <span className="block">Regulatory & Structural</span>
              <span className="block">Overview</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Fully regulated entity ensuring compliant, secure, and transparent access to renewable energy investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Luxembourg SPV */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Legal Protection</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fully audited, compliant, and investor-protected structure.
              </p>
            </div>

            {/* Verified Partners */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Verified Partners</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Backed by international financial institutions and local government guarantees.
              </p>
            </div>

            {/* Audited Transparency */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l-2.5 3.5M6 7l2.5 3.5m6-13.5l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-2.5 3.5M18 7l2.5 3.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Audited Transparency</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Regular yield reporting and asset verification.
              </p>
            </div>

            {/* Integration */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Integration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Built into the Toto Finance ecosystem for custody and liquidity.
              </p>
            </div>

          </div>
          
          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Compliance
            </button>
          </div>
        </div>
      </section>

      {/* Digital Assets Section */}
      <section id="digital-assets" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              <span className="block">ESG & Sustainability</span>
              <span className="block">Impact</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              GET empowers investors to participate in real, measurable sustainability initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Precious Metals */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Impact</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Transition from fossil fuels to renewable energy.
              </p>
            </div>

            {/* Energy Commodities */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Sustainability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Support of government-backed solar expansion in India.
              </p>
            </div>

            {/* Agricultural Products */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Responsibility</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Contribution to UN Sustainable Development Goals (SDGs).
              </p>
            </div>

          </div>
          
          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Portfolio
            </button>
          </div>
        </div>
      </section>


      {/* Carbon Credits Section */}
      <section id="carbon-credits" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              <span className="block">Carbon Credits</span>
              <span className="block">Trading</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              GET leverages verified carbon credits from solar operations, which can be tokenized, retired, or traded within the Toto ecosystem with fully auditable reporting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Verified Credits */}
            <div className="bg-green-100 rounded-xl p-8 shadow-sm border border-green-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Secure Returns</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Backed by tangible renewable energy infrastructure.
              </p>
            </div>

            {/* Global Impact */}
            <div className="bg-green-100 rounded-xl p-8 shadow-sm border border-green-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Instant Settlement</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Enabled through Toto's technology layer.
              </p>
            </div>

            {/* ESG Compliance */}
            <div className="bg-green-100 rounded-xl p-8 shadow-sm border border-green-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Compliant Access</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Designed for professional, KYC-verified investors.
              </p>
            </div>

            {/* Blockchain Transparency */}
            <div className="bg-green-100 rounded-xl p-8 shadow-sm border border-green-200">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Diversified Yield</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Long-term stability with ESG-aligned growth potential.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Trade Carbon Credits
            </button>
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
             className="newsletter-video-container"
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
