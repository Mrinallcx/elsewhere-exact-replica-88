// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';
import { CashCardsSection } from '../components/client/CashCardsSection';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function RareEarthMineralPage() {
  

  const cashCards = [
    {
      title: 'Institutional-Grade Structure',
      subtitle:
        'Compliant legal frameworks with audited custody, verified provenance, and enforceable asset backing.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Collateralized Liquidity',
      subtitle:
        'Enable transfers, financing, and structured liquidity against verified mineral inventories using on-chain rails.',
      variant: 'cash-card-green',
    },
    {
      title: 'Programmable Compliance',
      subtitle:
        'KYC, AML, and jurisdiction-based transfer rules enforced programmatically at the protocol level.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Transparent Supply Chain',
      subtitle:
        'Immutable on-chain records tracking assets across sourcing, custody, and distribution.',
      variant: 'cash-card-rose',
    },
  ];

  const reversedCashCards = [
    {
      title: 'Asset Scope',
      subtitle:
        'Tokenization of verified reserves, inventories, or offtake rights, depending on asset structure and jurisdiction.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Traceability',
      subtitle:
        'Verified origin, assay documentation, and audited storage records linked on-chain.',
      variant: 'cash-card-green',
    },
    {
      title: 'Liquidity Options',
      subtitle:
        'Primary issuance and controlled secondary transfers between eligible counterparties.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Data Layer',
      subtitle:
        'On-chain proof-of-reserves, validation attestations, and periodic independent reports by third-party auditors.',
      variant: 'cash-card-rose',
    },
  ];



  return (
    <div className="min-h-screen w-full relative">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Rare Earth Minerals Tokenization — Toto Finance"
        description="Securely tokenize lithium, copper, and nickel with 24/7 digital ownership on institutional infrastructure under Liechtenstein law."
        url="https://totofinance.co/rare-earth-mineral"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
        ]}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
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
      <main className="relative flex flex-col items-start sm:items-center justify-center min-h-[90vh] md:min-h-screen text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        <VideoBackground
          videoSrc="/videos/rare-mineral-hero-bg.mp4"
          fallbackImage="/hero-background/rare-mineral-hero-bg.webp"
          fallbackAlt="Hero background"
          className="hero-fallback" 
          videoClassName="hero-video"
          overlayClassName="hero-overlay"
        />
        <div className="hero-overlay" style={{ background: 'hsl(var(--travel-black) / 0.7)' }}></div>
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          
          {/* Hero Headings */}
          <h1 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Critical Minerals Tokenization
          </h1>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white mb-2 text-left sm:text-center">
              Institutional-grade tokenization of verified critical minerals - including lithium, copper, and nickel - with compliant ownership, audited custody, and on-chain settlement.
            </p>
          </div>
          
          {/* Call-to-Action */}
          <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
            <a
              href="mailto:hello@totofinance.co"
              className="cta-primary px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium"
            >
              Contact Us
            </a>
          </div>

        </div>
      </main>

      {/* Cash Management Section */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            {/* Left copy */}
            <div className="cash-left">
              <h2 className="cash-heading">Bridging Physical Minerals and Institutional Digital Markets</h2>
              <p className="cash-description">
                Toto Finance enables the tokenization of critical mineral inventories and reserves through audited custody, legally structured frameworks, and compliant on-chain settlement - purpose-built for institutional and industrial markets.
              </p>
              <div className="mt-6">
                <a
                  href="https://app.totofinance.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cash-cta"
                >
                  Explore Infrastructure
                </a>
              </div>
            </div>

            {/* Right cards */}
            <CashCardsSection cards={cashCards} />
          </div>
        </div>
      </section>

      {/* Reversed Cash Management Section - Boxes on Left, Text on Right */}
      <section className="cash-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="cash-grid">
            {/* Left cards */}
            <div className="lg:order-1">
              <CashCardsSection cards={reversedCashCards} />
            </div>

            {/* Right copy */}
            <div className="cash-left lg:order-2">
              <h2 className="cash-heading">Designed for Strategic Mineral Assets</h2>
              <p className="cash-description">
                Toto Finance tokenizes critical minerals across the value chain - from reserves and inventories to offtake structures - enabling traceable, asset-backed digital ownership from mine to market.
              </p>
              <div className="mt-6">
                <a
                  href="https://app.totofinance.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cash-cta"
                >
                  Tokenization Models
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading & Technology Solutions Section */}
      <section className="trading-solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Institutional-Grade Asset Specifications
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Clear standards defining how mineral assets are validated, stored, settled, and accessed across Toto Finance's digital commodity infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Assets Covered */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Assets Covered</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lithium, copper, nickel, and related concentrates and mineral products.
              </p>
            </div>

            {/* Participation Models */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Participation Models</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Reserve-backed, inventory-based, or cash-flow-linked structures, depending on asset profile.
              </p>
            </div>

            {/* Access Models */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Access Models</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Primarily B2B (institutional & industrial), with B2C access where jurisdictionally permitted.
              </p>
            </div>

            {/* Settlement */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Settlement</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Instant atomic settlement with wallet whitelisting and permissioned transfers.
              </p>
            </div>

            {/* Custody */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Custody</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Vaulted, insured, and independently audited third-party storage.
              </p>
            </div>

            {/* Reporting */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900">Reporting</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                On-chain proof-of-reserves, validation attestations, and periodic independent reports.
              </p>
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

      {/* New Section with 4 Cards in Single Row */}
      <section className="trading-solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Digitizing Critical Minerals Across the Full Value Chain
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From verified sourcing to controlled market access, each stage of the mineral lifecycle is secured through compliance, custody, and programmable settlement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 - Sourcing & Verification */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Sourcing & Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Licensed partners providing verified mineral rights, inventories, or offtake attestations.
              </p>
            </div>

            {/* Card 2 - Legal Structuring */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Legal Structuring</h3>
              <p className="text-gray-600 leading-relaxed">
                Rights mapped to digital tokens under compliant legal frameworks with eligibility controls.
              </p>
            </div>

            {/* Card 3 - Tokenization & Controls */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Tokenization & Controls</h3>
              <p className="text-gray-600 leading-relaxed">
                Assets issued as digital tokens with embedded transfer, compliance, and lifecycle rules.
              </p>
            </div>

            {/* Card 4 - Market Access & Settlement */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Market Access & Settlement</h3>
              <p className="text-gray-600 leading-relaxed">
                Tokens tradable between verified participants with instant collateralization and settlement.
              </p>
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

      {/* Institutional Infrastructure & Proven Track Record Section */}
      <section className="trading-solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Institutional Infrastructure & Proven Track Record
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Toto Finance operates a regulated, production-grade infrastructure for tokenized commodities. Since 2023, the platform has delivered live, asset-backed tokenization across precious metals, energy assets, and critical minerals - combining compliance, custody, and on-chain settlement at institutional scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Regulated Infrastructure */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Regulated Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Built under Liechtenstein's Blockchain Act (TVTG), with LCX acting as Physical Validator to legally link physical mineral assets to on-chain tokens.
              </p>
            </div>

            {/* Card 2 - Operational & Proven */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Operational & Proven</h3>
              <p className="text-gray-600 leading-relaxed">
                Live since 2023 with institutional-grade custody and over 30,000 tokenized assets across commodities and real-world assets.
              </p>
            </div>

            {/* Card 3 - Verified Reserves & Custody */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Verified Reserves & Custody</h3>
              <p className="text-gray-600 leading-relaxed">
                Every token is backed by audited physical assets stored in secure, insured, third-party facilities, with independent validation and reporting.
              </p>
            </div>

            {/* Card 4 - Multichain Deployment */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Multichain Deployment</h3>
              <p className="text-gray-600 leading-relaxed">
                Deployed across Ethereum, Cardano, and additional blockchain networks to support global settlement and interoperability.
              </p>
            </div>

            {/* Card 5 - Transparent & Auditable */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Transparent & Auditable</h3>
              <p className="text-gray-600 leading-relaxed">
                On-chain proof-of-reserves dashboards, compliant lifecycle management, and continuous third-party audits ensure full transparency.
              </p>
            </div>

            {/* Card 6 - Enterprise-Ready Infrastructure */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Enterprise-Ready Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Designed for institutional integration, reporting, compliance, and scalability across global commodity markets.
              </p>
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

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}