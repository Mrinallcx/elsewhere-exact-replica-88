// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Package, Eye, Lock, Database, Globe } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { ProductCTAButton } from '../components/client/ProductCTAButton';
import { ProductNavigationCard } from '../components/client/ProductNavigationCard';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));
import { ScrollToButton } from '../components/client/ScrollToButton';

export default function ProductPage() {

  return (
    <div className="min-h-screen w-full relative">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Products — Tokenized Commodities & Assets | Toto Finance"
        description="Toto Finance offers secure, liquid digital commodities including gold, silver, diamonds, rare minerals, and energy assets."
        url="https://totofinance.co/products"
        pageType="CollectionPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
        ]}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
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
      <main className="relative flex flex-col items-start sm:items-center justify-center min-h-[90vh] md:min-h-[100vh] text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <VideoBackground
          videoSrc="/videos/product-hero.mp4"
          fallbackImage="/hero-background/product-hero-fallback.webp"
          fallbackAlt="Hero background fallback"
          className="absolute inset-0 w-full h-full"
          overlayClassName="absolute inset-0 bg-black/55 z-10"
          videoClassName="absolute inset-0 w-full h-full object-cover z-[1]"
        />
         
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black/60 z-10"></div>
         
         <div className="relative z-20 max-w-5xl w-full mx-0 sm:mx-auto">
           
           
           {/* Hero Headings */}
           <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 text-white">
             Tokenized Commodities, Built for Global Markets
           </h1>
           
           {/* Description Section */}
           <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
             <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-2 text-left sm:text-center">
             Toto Finance delivers asset-backed tokenized commodities across diamonds, precious metals, and institutional assets combining compliant ownership, instant on-chain settlement, and global market access through institutional-grade infrastructure.
             </p>
           </div>
           
           {/* Call-to-Action */}
           <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
             <ProductCTAButton
               href="https://app.totofinance.co/"
               className="bg-black text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
             >
               <span>Explore Products</span>
               <svg 
                 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
               </svg>
             </ProductCTAButton>
           </div>
           
        </div>
      </main>
      
      {/* Product Navigation Cards Section */}
      <section id="product-navigation" className="px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* 3 Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global Markets Card */}
            <ProductNavigationCard
              imageSrc="/assset image1.webp"
              imageAlt="Global Markets"
              title="Toto Global Markets"
              description="Trade, gift or redeem tokenized gold, silver, and gemstones using our marketplace."
              linkText="Explore Solutions"
              linkHref="https://app.totofinance.co/"
              scrollToId="institutional-section"
            />
            
            {/* Tokenized Assets Card */}
            <ProductNavigationCard
              imageSrc="/assset image2.webp"
              imageAlt="Tokenized Assets"
              title="Tokenized Assets"
              description="Institutional Investor Platform Offering Tokenized Commodities."
              linkText="Coming Soon"
              badge="Coming Soon"
            />
            
            {/* GET Green Energy Token Card */}
            <ProductNavigationCard
              imageSrc="/assset image3.webp"
              imageAlt="GET Green Energy Token"
              title="GET – Green Energy Token"
              description="Sustainable yield with institutional-grade compliance, backed by a $2.2B solar project."
              linkText="Start Trading"
              disabled={true}
              badge="Launching Soon"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
       <section id="institutional-section" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-100">
         <div className="max-w-7xl mx-auto">
           {/* Header Content */}
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
               Toto Global Markets
             </h2>
             <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
               The world&apos;s largest tokenized diamond marketplace, launched in 2023 with more than 30,000 assets. Trade 1:1 asset-backed, Swiss-grade commodities and certified gemstones each linked to audited physical custody and on-chain settlement.
             </p>
           </div>
           
           {/* 6 Boxes Grid - Movable Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Box 1 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <div className="mb-6">
                   <Shield className="w-6 h-6 text-blue-600 mb-4" />
                   <h3 className="text-xl font-medium text-gray-900">Assets</h3>
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   Access tokenized gold, silver and platinum, each 1:1 backed by verified physical asset held in audited vaults.
                 </p>
             </div>
             
             {/* Box 2 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <div className="mb-6">
                   <Package className="w-6 h-6 text-green-600 mb-4" />
                   <h3 className="text-xl font-medium text-gray-900">Speed</h3>
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   Instant settlement and 24/7 trading with atomic delivery-versus-payment, eliminating counterparty and settlement risk.
                 </p>
             </div>
             
             {/* Box 3 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <div className="mb-6">
                   <Eye className="w-6 h-6 text-purple-600 mb-4" />
                   <h3 className="text-xl font-medium text-gray-900">Utility Rewards</h3>
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   Reduced fees and enhanced market access through the TOTO utility token across trading, settlement, and platform services.
                 </p>
             </div>
             
             {/* Box 4 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <div className="mb-6">
                   <Lock className="w-6 h-6 text-pink-600 mb-4" />
                   <h3 className="text-xl font-medium text-gray-900">Global Access</h3>
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   Access global commodity markets through a unified digital marketplace with seamless cross-border participation and no operational barriers.
                 </p>
             </div>
             
             {/* Box 5 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <div className="mb-6">
                   <Database className="w-6 h-6 text-yellow-600 mb-4" />
                   <h3 className="text-xl font-medium text-gray-900">Security</h3>
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   Assets secured in insured, third-party vaults, supported by institutional-grade custody standards and independent audits.
                 </p>
             </div>
             
             {/* Box 6 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                 <div className="mb-6">
                   <Globe className="w-6 h-6 text-indigo-600 mb-4" />
                   <h3 className="text-xl font-medium text-gray-900">Transparency</h3>
                 </div>
                 <p className="text-gray-700 leading-relaxed">
                   On-chain verification, proof-of-reserves, and fully auditable transaction history for every listed asset.
                 </p>
             </div>
           </div>
           
          {/* CTA Button */}
          <div className="text-center mt-12">
            <ProductCTAButton
              href="https://app.totofinance.co/"
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Marketplace
            </ProductCTAButton>
            <div className="mt-4">
              <ScrollToButton
                targetId="product-navigation"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center mx-auto"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Back to Products
              </ScrollToButton>
            </div>
          </div>
         </div>
       </section>
       
       {/* War Readiness Package Section - Commented out for now */}
       {/* <section id="war-readiness-section" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
               <span className="block">War Readiness Package</span>
               <span className="block">(Hybrid)</span>
             </h2>
             <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
               Tiered wealth protection with insured gold & silver, on-chain liquidity, and global security.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Shield className="w-6 h-6 text-orange-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Assets</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Fully insured gold and silver packages for secure and diversified wealth protection.
               </p>
             </div>
             
             <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Package className="w-6 h-6 text-orange-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Liquidity</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Collateralized on-chain for instant access to funds whenever needed.
               </p>
             </div>
             
             <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Eye className="w-6 h-6 text-orange-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Distribution</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Assets stored across five global vaults for maximum security and coverage.
               </p>
             </div>
             
             <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Lock className="w-6 h-6 text-orange-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Hedge</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Designed to protect against economic and geopolitical uncertainty effectively.
               </p>
             </div>
             
             <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Database className="w-6 h-6 text-orange-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Stability</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Ideal for long-term wealth preservation and consistent portfolio growth.
               </p>
             </div>
             
             <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Globe className="w-6 h-6 text-orange-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Tiered</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Available in $10K, $20K, and $50K packages to match different investment goals.
               </p>
             </div>
           </div>
           
          <div className="text-center mt-12">
            <button 
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                window.open('https://app.totofinance.co/', '_blank');
              }}
            >
              Deploy Package
            </button>
            <div className="mt-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('product-navigation');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center mx-auto"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Back to Products
              </button>
            </div>
          </div>
         </div>
       </section> */}
       
       {/* GET – Green Energy Token Section - Commented out for now */}
       {/* <section id="green-energy-section" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-green-50">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
               <span className="block">GET – Green Energy Token</span>
               <span className="block">(B2B)</span>
             </h2>
             <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
               Sustainable energy solutions for businesses with transparent carbon credit trading and renewable energy certificates.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Shield className="w-6 h-6 text-green-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Yield</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Earn fixed annual returns +/- 8% from a sustainable energy project
               </p>
             </div>
             
             <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Package className="w-6 h-6 text-green-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Backing</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Supported by a $2.2B solar project in India for strong, tangible asset security.
               </p>
             </div>
             
             <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Eye className="w-6 h-6 text-green-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Compliance</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Operated under a fully regulated framework ensuring transparency and investor protection.
               </p>
             </div>
             
             <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Lock className="w-6 h-6 text-green-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Exclusivity</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Available to KYC-verified institutional investors worldwide.
               </p>
             </div>
             
             <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Database className="w-6 h-6 text-green-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Impact</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Supports global renewable energy expansion and sustainable development goals.
               </p>
             </div>
             
             <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
               <div className="mb-6">
                 <Globe className="w-6 h-6 text-green-600 mb-4" />
                 <h3 className="text-xl font-medium text-gray-900">Structured</h3>
               </div>
               <p className="text-gray-700 leading-relaxed">
                 Combines yield, compliance, and sustainability in a single structured product.
               </p>
             </div>
           </div>
           
          <div className="text-center mt-12">
            <button 
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                window.open('https://app.totofinance.co/', '_blank');
              }}
            >
              Discover more
            </button>
            <div className="mt-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('product-navigation');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center mx-auto"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Back to Products
              </button>
            </div>
          </div>
         </div>
       </section> */}

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