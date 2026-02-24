// Server Component (NO "use client")
export const revalidate = 3600; // ISR: regenerate every hour

import Image from 'next/image';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { Navigation } from '../components/Navigation';
import { CashCardsSection } from '../components/client/CashCardsSection';
import { WarPackageCards } from '../components/client/WarPackageCards';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const RippleGrid = dynamicImport(() => import('../../src/components/RippleGrid'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function WarReadyPackagePage() {
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
    },
  ];

  return (
    <div className="min-h-screen w-full relative">
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
              Tokenized Gold
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
      <section className="categories-section px-6 md:px-8 lg:px-12 pt-4 pb-32 md:pt-6 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <WarPackageCards />
        </div>
      </section>
      





      <Footer />
    </div>
  );
}
