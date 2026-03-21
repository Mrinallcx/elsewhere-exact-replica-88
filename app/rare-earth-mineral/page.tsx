// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

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

const rareEarthElements = [
  {
    href: '/tokenized-cerium',
    label: 'Tokenized Cerium',
    description: 'Catalytic converters, glass polishing, and automotive emission control systems.',
  },
  {
    href: '/tokenized-dysprosium',
    label: 'Tokenized Dysprosium',
    description: 'High-performance permanent magnets for electric vehicle motors and wind turbines.',
  },
  {
    href: '/tokenized-erbium',
    label: 'Tokenized Erbium',
    description: 'Fiber optic amplifiers, laser technology, and telecommunication infrastructure.',
  },
  {
    href: '/tokenized-europium',
    label: 'Tokenized Europium',
    description: 'LED phosphors, display technology, and anti-counterfeiting for banknotes.',
  },
  {
    href: '/tokenized-gadolinium',
    label: 'Tokenized Gadolinium',
    description: 'MRI contrast agents, nuclear reactor shielding, and magnetic refrigeration.',
  },
  {
    href: '/tokenized-holmium',
    label: 'Tokenized Holmium',
    description: 'Medical lasers, magnetic flux concentrators, and nuclear control rods.',
  },
  {
    href: '/tokenized-lanthanum',
    label: 'Tokenized Lanthanum',
    description: 'Hybrid vehicle batteries, petroleum refining catalysts, and optical lenses.',
  },
  {
    href: '/tokenized-lutetium',
    label: 'Tokenized Lutetium',
    description: 'PET scan detectors, high-density alloys, and geologic precision dating.',
  },
  {
    href: '/tokenized-neodymium',
    label: 'Tokenized Neodymium',
    description: 'Permanent magnets for electric vehicles, wind turbines, headphones, and hard drives.',
  },
  {
    href: '/tokenized-praseodymium',
    label: 'Tokenized Praseodymium',
    description: 'Aircraft engines, welder goggles, and high-strength magnet alloys.',
  },
  {
    href: '/tokenized-promethium',
    label: 'Tokenized Promethium',
    description: 'Nuclear batteries, luminous paint, and portable X-ray equipment.',
  },
  {
    href: '/tokenized-samarium',
    label: 'Tokenized Samarium',
    description: 'Samarium-cobalt magnets for aerospace, military, and high-temperature applications.',
  },
  {
    href: '/tokenized-scandium',
    label: 'Tokenized Scandium',
    description: 'Aerospace aluminum alloys, solid oxide fuel cells, and sports equipment.',
  },
  {
    href: '/tokenized-terbium',
    label: 'Tokenized Terbium',
    description: 'Green phosphors for displays, solid-state devices, and naval sonar systems.',
  },
  {
    href: '/tokenized-thulium',
    label: 'Tokenized Thulium',
    description: 'Portable X-ray devices, surgical lasers, and high-temperature superconductors.',
  },
  {
    href: '/tokenized-ytterbium',
    label: 'Tokenized Ytterbium',
    description: 'Fiber lasers, atomic clocks, and stainless steel strengthening additives.',
  },
  {
    href: '/tokenized-yttrium',
    label: 'Tokenized Yttrium',
    description: 'LED lighting, jet engine coatings, and microwave communication filters.',
  },
] as const;

export default function RareEarthMineralPage() {
  const cashCards = [
    {
      title: 'Institutional-Grade Structure',
      subtitle:
        'Legal structures with audited custody, notifiable reserve information, and asset support for in-ground mineral reserves.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Collateralized Liquidity',
      subtitle:
        'Financing, liquidity, and transferability of notifiable mineral reserves without the wait for extraction and production cycles.',
      variant: 'cash-card-green',
    },
    {
      title: 'Programmable Compliance',
      subtitle:
        'KYC, AML, and transfer rules for jurisdictions enforced programmatically at the protocol level.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Transparent Supply Chains',
      subtitle:
        'Immutable on-chain records of reserves from geological verification to custody, financing, and delivery.',
      variant: 'cash-card-rose',
    },
  ];

  const reversedCashCards = [
    {
      title: 'Asset Coverage',
      subtitle:
        'Tokenization of proven in-ground reserves, above-ground inventories, or offtake rights categorized by asset type, stage of development, and geographical location.',
      variant: 'cash-card-blue',
    },
    {
      title: 'Traceability',
      subtitle:
        'Chain linking of geological assessments (NI 43-101, JORC Code), assay data, provenance, and audited custody information from source to market.',
      variant: 'cash-card-green',
    },
    {
      title: 'Liquidity Mechanisms',
      subtitle:
        'Controlled primary market issuance with limited secondary market trading between qualified counterparties, as governed by regulatory requirements.',
      variant: 'cash-card-purple',
    },
    {
      title: 'Data Layer',
      subtitle:
        'On-chain proof-of-reserves, validation statements, and regular independent audit reports immutably fixed on-chain.',
      variant: 'cash-card-rose',
    },
  ];



  return (
    <div className="min-h-screen w-full relative">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Rare Earth Minerals Tokenization — Toto Finance"
        description="Institutional-grade access to critical minerals driving AI, energy transition, and global infrastructure tokenized directly from verified in-ground reserves with compliant ownership, audited custody, and on-chain settlement."
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
              Institutional-grade access to critical minerals driving AI, energy transition, and global infrastructure
              tokenized directly from verified in-ground reserves with compliant ownership, audited custody, and
              on-chain settlement.
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
              <h2 className="cash-heading">Connecting In-Ground Minerals and Institutional Capital Markets</h2>
              <p className="cash-description">
                Toto Finance facilitates the tokenization of notifiable in-ground critical mineral reserves via legal
                structures, custody models, and on-chain settlement systems specifically designed for institutional
                investors, mining companies, and strategic supply chains.
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
              <h2 className="cash-heading">Built for Strategic Mineral Resources</h2>
              <p className="cash-description">
                Toto Finance tokenizes strategic minerals end-to-end from proven reserves and inventories to offtake
                rights for traceable, asset-backed digital ownership from mine to market.
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
              Specific guidelines for the validation, structuring, settlement, and access of critical mineral assets
              within the digital commodity infrastructure of Toto Finance.
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
                Lithium, copper, nickel, and strategic mineral concentrates for energy transition, AI infrastructure,
                and industrial supply chains.
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
                Reserve-backed, inventory-based, or cash flow-linked token models, depending on the stage and commercial
                characteristics of the assets.
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
                Primarily B2B (institutional and industrial), with restricted access for qualified investors, where and
                when permitted by jurisdiction.
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
                Atomic, on-chain settlement with stablecoins, wallet whitelisting, permissioned transfers, and
                programmable compliance enforcement.
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
                Third-party custody for above-ground inventories through warehouse warrants, with insured, audited
                storage and legally enforceable asset backing.
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
                On-chain proof-of-reserves, validation statements, and regular independent audit reports immutably
                anchored.
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
              Digitizing Critical Minerals Across the Entire Value Chain
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From reserves to market access, every step of the mineral value chain is protected through
              compliance-first structuring, audited asset holding, and programmable on-chain settlement.
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
                Partnered counterparties offering access to verified mineral reserves, holdings, or offtake agreements,
                verified by geological surveys, assay analysis, and independent validation.
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
                Economic interests tokenized under compliant legal systems, with eligibility for jurisdictions and
                enforceable ownership rules.
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
                Assets tokenized with transfer restrictions, compliance rules, and life cycle rules enforced at the
                protocol level.
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
                Tokens transferable between verified parties with immediate collateralization, atomic settlement, and
                programmable delivery versus payment.
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
              Toto Finance provides a regulated, production-level infrastructure for tokenized commodities. Since 2023,
              the service has provided real-world, asset-backed tokenization for precious metals, Gemstones, combining
              compliance, audited custody, and on-chain settlement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Regulated Infrastructure */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Regulated Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                LCX as Physical Validator to provide a legal connection between verified assets and on-chain tokens.
              </p>
            </div>

            {/* Card 2 - Operational & Proven */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Operational & Proven</h3>
              <p className="text-gray-600 leading-relaxed">
                In operation since 2023 with institutional-level custody and over 30,000 asset tokens in commodities and
                real-world assets.
              </p>
            </div>

            {/* Card 3 - Verified Reserves & Custody */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Verified Reserves & Custody</h3>
              <p className="text-gray-600 leading-relaxed">
                Each token is collateralized by audited physical assets held in secure, insured third-party storage
                facilities, with independent verification and reporting.
              </p>
            </div>

            {/* Card 4 - Multichain Deployment */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Multichain Deployment</h3>
              <p className="text-gray-600 leading-relaxed">
                Operational on Ethereum, Cardano, and other blockchain platforms to enable global settlement,
                interoperability, and institutional participation.
              </p>
            </div>

            {/* Card 5 - Transparent & Auditable */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Transparent & Auditable</h3>
              <p className="text-gray-600 leading-relaxed">
                On-chain proof-of-reserves displays, compliant life cycle management, and ongoing third-party audits
                provide complete transparency.
              </p>
            </div>

            {/* Card 6 - Enterprise-Ready Infrastructure */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Enterprise-Ready Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Built for institutional integration, reporting, compliance, and scalability on a global commodity market.
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

      {/* Investigate individual rare earth elements */}
      <section className="trading-solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Investigate Individual Rare Earth Elements
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each element has a dedicated tokenized asset page covering primary industrial applications and how
              compliant, audited on-chain exposure maps to real reserves and custody.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-14">
            {rareEarthElements.map(({ href, label, description }) => (
              <div key={href} className="text-left">
                <Link
                  href={href}
                  className="text-base font-medium text-gray-900 underline-offset-2 hover:underline hover:text-[#00375e]"
                >
                  {label}
                </Link>
                <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/how-tokenization-works"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
            >
              Find Out How Tokenization Works
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}