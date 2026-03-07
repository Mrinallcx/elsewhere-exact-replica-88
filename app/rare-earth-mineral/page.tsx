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
        'Regulated legal frameworks with audited custody, verified reserve data, and enforceable asset backing for in-ground mineral reserves.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Collateralized Liquidity',
      subtitle:
        'Unlock financing, structured liquidity, and transferability against verified mineral reserve without waiting for extraction or production cycles.',
      variant: 'cash-card-green',
    },
    {
      title: 'Programmable Compliance',
      subtitle:
        'KYC, AML, and jurisdiction-specific transfer controls enforced programmatically at the protocol level.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Transparent Supply Chains',
      subtitle:
        'Immutable on-chain records tracking reserves from geological verification through custody, financing, and delivery.',
      variant: 'cash-card-rose',
    },
  ];

  const reversedCashCards = [
    {
      title: 'Asset Scope',
      subtitle:
        'Tokenization of verified in-ground reserves, above-ground inventories, or offtake rights structured by asset type, lifecycle stage, and jurisdiction.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Traceability',
      subtitle:
        'On-chain linkage of geological reports (NI 43-101, JORC Code), assay results, provenance records, and audited custody data from source to market.',
      variant: 'cash-card-green',
    },
    {
      title: 'Liquidity Options',
      subtitle:
        'Primary issuance with controlled secondary transfers between eligible institutional counterparties, subject to compliance rules.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Data Layer',
      subtitle:
        'On-chain proof-of-reserves, third-party validation attestations, and periodic independent audit reports anchored immutably on-chain.',
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
        <div className="hero-overlay" style={{ background: 'hsl(var(--travel-black) / 0.55)' }}></div>
        <div className="relative z-10 max-w-5xl w-full mx-0 sm:mx-auto">
          
          {/* Hero Headings */}
          <h1 className="hero-subheading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Tokenized Rare Earth Minerals
          </h1>
          
          {/* Description Section */}
          <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center ">
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-travel-white mb-2 text-left sm:text-center">
              Institutional-grade access to critical minerals powering AI, energy transition, and global infrastructure tokenized directly from verified in-ground reserves with compliant ownership, audited custody, and on-chain settlement.
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
              <h2 className="cash-heading">Bridging In-Ground Minerals and Institutional Capital Markets</h2>
              <p className="cash-description">
                Toto Finance enables the tokenization of verified in-ground critical mineral reserves through compliant legal structures, audited custody frameworks, and on-chain settlement purpose-built for institutional investors, mining operators, and strategic supply chains.
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
                Toto Finance tokenizes critical minerals across the full value chain from verified reserves and inventories to structured offtake rights enabling traceable, asset-backed digital ownership from mine to market.
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
              Clear standards defining how critical mineral assets are validated, structured, settled, and accessed across Toto Finance&apos;s digital commodity infrastructure.
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
                Lithium, copper, nickel, and strategic mineral concentrates supporting energy transition, AI infrastructure, and industrial supply chains.
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
                Reserve-backed, inventory-based, or cash-flow-linked token structures, depending on asset lifecycle stage and commercial profile.
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
                Primarily B2B (institutional and industrial participants), with controlled access for qualified investors where jurisdictionally permitted.
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
                Atomic, on-chain settlement using stablecoins, with wallet whitelisting, permissioned transfers, and programmable compliance enforcement.
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
                Third-party custody for above-ground inventories via warehouse warrants, with insured, audited storage and legally enforceable asset backing.
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
                On-chain proof-of-reserves, validation attestations, and recurring independent audit reports anchored immutably.
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
              From verified reserves to controlled market access, each stage of the mineral lifecycle is secured through compliance-first structuring, audited custody, and programmable on-chain settlement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 - Sourcing & Verification */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Sourcing & Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Licensed counterparties providing verified mineral reserves, inventories, or offtake rights, supported by geological reports, assay data, and third-party validation.
              </p>
            </div>

            {/* Card 2 - Legal Structuring */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Legal Structuring</h3>
              <p className="text-gray-600 leading-relaxed">
                Economic rights mapped to digital tokens under compliant legal frameworks, with jurisdictional eligibility controls and enforceable ownership structures.
              </p>
            </div>

            {/* Card 3 - Tokenization & Controls */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Tokenization & Controls</h3>
              <p className="text-gray-600 leading-relaxed">
                Assets issued as digital tokens with embedded transfer restrictions, compliance logic, and lifecycle rules enforced at the protocol level.
              </p>
            </div>

            {/* Card 4 - Market Access & Settlement */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Market Access & Settlement</h3>
              <p className="text-gray-600 leading-relaxed">
                Tokens tradable between verified participants with instant collateralization, atomic settlement, and programmable delivery-versus-payment.
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
              Toto Finance operates a regulated, production-grade infrastructure for tokenized commodities. Since 2023, the platform has delivered live, asset-backed tokenization across precious metals, Gemstones combining compliance, audited custody, and on-chain settlement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Regulated Infrastructure */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Regulated Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                LCX acting as Physical Validator to legally link verified assets to on-chain tokens.
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
                Deployed across Ethereum, Cardano, and additional blockchain networks to support global settlement, interoperability, and institutional access.
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