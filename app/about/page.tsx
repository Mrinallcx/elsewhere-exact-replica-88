// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { PersonStructuredData, type TeamMember } from '../components/PersonStructuredData';
import { LeadershipAvatar } from '../components/client/LeadershipAvatar';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

// Leadership team — images from public/images
const teamMembers: TeamMember[] = [
  {
    name: 'Monty Metzger',
    jobTitle: 'Founder',
    description:
      'Serial entrepreneur since 1998 - first internet company founded at age 18. Multiple successful exits across digital, tech, and venture capital. Founded Digital Leaders Ventures (Tech VC) - invested in technology companies globally. Portfolio Companies with Exit to Twitter and IPO. Found and grew LCX to $500M+ market cap; leading european regulated crypto exchange and tokenization infrastructure. LCX named New Champion at the World Economic Forum and Blockchain Pioneer by Blockchain Research Institute.',
    sameAs: ['https://www.linkedin.com/in/montymetzger/'],
    image: '/images/monty.png',
  },
  {
    name: 'Steven Gaertner',
    jobTitle: 'President',
    description: 'Running day-to-day operations at Toto Finance. 20+ years leading business development across Asia and Europe. Built Fischler Diamonds\' Asian operations (Hong Kong, Shanghai) with $10M+ annual sales. Deep crypto-native experience: eToro, Exotic Markets, Jenny Metaverse DAO. Track record of 100%+ monthly user growth and consistent outperformance on KPIs. Multilingual operator fluent in English, French, Dutch, Hebrew.',
    sameAs: ['https://www.linkedin.com/in/steven-gaertner/'],
    image: '/images/steaven.png',
  },
  {
    name: 'Priyanshu Rajput',
    jobTitle: 'CTO',
    description: 'Blockchain engineer specializing in smart contract development and blockchain architecture. Architect of scalable Web3 infrastructure. Driving real-world asset tokenization and the convergence of traditional finance and blockchain.',
    sameAs: ['https://www.linkedin.com/in/priyanshu-rajput-037899189/'],
    image: '/images/priyansu.jpg',
  },
  {
    name: 'Danil Kerimi',
    jobTitle: 'Non-Executive Board Member',
    description: 'Former Head of Technology Industries and Managing Director at the World Economic Forum. Spent a decade shaping global technology policy at the intersection of governments, Fortune 500s, and emerging tech. Board Member at SealSQ (Nasdaq) and World Smart Sustainable Cities Organization (WeGO). Advises sovereigns and multinationals on digital transformation.',
    sameAs: ['https://www.linkedin.com/in/danil-kerimi/'],
    image: '/images/danil.png',
  },
];

// Trusted By logos — same as homepage
const partnerLogos = [
  'Cardano.svg',
  'Coingecko.svg',
  'Coinmarketcap.svg',
  'Ethereum.svg',
  'Gia.svg',
  'LCX (1).svg',
  'Polygon.svg',
  'Solana (1).svg',
  'Uniswap.svg',
  'Xrp.svg',
];

// Featured In — URLs per About Page.docx.md
const featuredInLinks = [
  {
    label: 'Cardano Foundation Case Study, Toto Finance',
    url: 'https://cardanofoundation.org/case-studies/toto-finance',
  },
  {
    label: 'Yahoo Finance, Tiamonds Landmark Launch',
    url: 'https://finance.yahoo.com/news/tiamonds-landmark-launch-unmissable-1-010000749.html',
  },
  {
    label: 'GlobeNewsWire, Tiamonds 10 Carat D Flawless Diamond Launch',
    url: 'https://www.globenewswire.com/news-release/2023/10/06/2755872/0/en/Tiamonds-Landmark-Launch-The-Unmissable-1-2M-10-Carat-D-Flawless-Diamond.html',
  },
  {
    label: 'EMURGO, Cardano NFT Case Study: NMKR & Tiamonds',
    url: 'https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/',
  },
  {
    label: 'BlockchainWire, Toto Finance Debuts New Brand',
    url: 'https://blockchainwire.io/press-release/toto-finance-debuts-new-brand-and-platform-for-tokenization-of-commodities-and-real-world-assets',
  },
  {
    label: 'BitCourier, Toto Finance New Brand & RWA Platform',
    url: 'https://bitcourier.co.uk/news/toto-finance-new-brand-and-rwa-platform',
  },
  {
    label: 'Blockchain Reporter, Toto Finance Brings RWAs On-Chain',
    url: 'https://blockchainreporter.net/toto-finance-brings-real-world-assets-on-chain-with-rwa-tokenization/',
  },
  {
    label: 'CryptoRank, Cardano Pushes Forward in RWA Tokenization',
    url: 'https://cryptorank.io/news/feed/d31af-cardano-pushes-forward-in-rwa-tokenization-genius',
  },
  {
    label: 'Altcoin Observer, Toto Finance Launches RWA Platform',
    url: 'https://altcoin.observer/toto-finance-launches-new-brand-and-platform-for-tokenization-of-commodities-and-real-world-assets/',
  },
  {
    label: 'BitCourier, Tiamonds Review',
    url: 'https://bitcourier.co.uk/blog/tiamonds-review',
  },
  {
    label: 'Messari, Understanding XRP Cafe',
    url: 'https://messari.io/copilot/share/understanding-xrp-cafe-8eeb408d-98ac-4c50-9dd1-c55f6e62bafe',
  },
  {
    label: 'Gate.com, Toto Finance',
    url: 'https://www.gate.com/tr/news/detail/17259427',
  },
  {
    label: 'MEXC, Toto Finance',
    url: 'https://www.mexc.co/en-IN/news/365939',
  },
  {
    label: 'CoinMarketCap, TIA Token',
    url: 'https://coinmarketcap.com/currencies/tia/',
  },
  {
    label: 'NMKR, Tiamonds Drop 2023',
    url: 'https://www.nmkr.io/drops/tiamonds-2023',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="About Us - Building Infrastructure for Global Digital Commodities | Toto Finance"
        description="Toto Finance is building institutional-grade infrastructure that enables compliant tokenization, settlement, and global trading of real-world commodities."
        url="https://totofinance.co/about"
        pageType="AboutPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'About', item: 'https://totofinance.co/about' },
        ]}
      />
      <PersonStructuredData members={teamMembers} />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'About', item: 'https://totofinance.co/about' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-36 pb-16 md:pb-24 overflow-hidden min-h-[70vh] flex items-center mt-16">

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Building Infrastructure for<br className="hidden md:block" /> Global Digital Commodities
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Toto Finance is building institutional-grade infrastructure that enables compliant tokenization, settlement, and global trading of real-world commodities. We bridge physical assets to digital markets securely, transparently, and at scale.
          </p>
          <Link
            href="/ecosystem"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Ecosystem
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== WHO WE ARE SECTION ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">
            Who We Are
          </h2>
          <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
            <p>
              Toto Finance is a technology company specializing in real-world asset markets.
            </p>
            <p>
              <strong className="text-gray-900">We are not just a marketplace.</strong>
            </p>
            <p>
              We build the infrastructure, compliance layer, and settlement infrastructure that makes commodity tokenization feasible in the real world.
            </p>
            <p>
              Our scope of interest includes commodities, metals, strategic minerals, and energy assets where real value, supply chains, and capital flows meet.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== WHAT WE BUILD SECTION ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            What We Build
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16 text-center">
            A single platform for tokenized commodities, supporting the entire asset life cycle:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Tokenization Infrastructure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Issuance of asset-backed digital commodities with integrated compliance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Global Commodity Markets
              </h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 trading for tokenized assets with instant settlement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Compliance &amp; Custody Layer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Structured custody, audits, and proof-of-reserves connecting tokens to physical assets.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Institutional Asset Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Infrastructure for producers, investors, and financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION & VISION SECTION ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  To make real-world assets liquid, accessible, and programmable.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-10 border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-purple-100/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  To be the global infrastructure standard for tokenized commodities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEADERSHIP SECTION ===================== */}
      <section id="leadership" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-6">
                  <LeadershipAvatar
                    name={member.name}
                    src={member.image}
                    grayscale={member.name === 'Priyanshu Rajput'}
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm font-medium text-[#00375e] mt-1">{member.jobTitle}</p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{member.description}</p>
                    {(Array.isArray(member.sameAs) ? member.sameAs[0] : member.sameAs) ? (
                      <a href={Array.isArray(member.sameAs) ? member.sameAs[0] : member.sameAs} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#00375e] hover:underline">
                        LinkedIn <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REGULATORY & LEGAL STANDING ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Regulatory &amp; Legal Standing
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
            Toto Finance operates through legally registered entities in the United States and Liechtenstein, ensuring structural transparency, verifiable corporate identity, and regulatory clarity.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
            We maintain a compliance-first approach and provide publicly verifiable registration details to support institutional confidence and long-term operational integrity.
          </p>

          <div className="space-y-10">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operating Entity (United States)</h3>
              <p className="font-semibold text-gray-900 mb-2">Toto Finance Inc.</p>
              <p className="text-gray-600 mb-4">A corporation incorporated in the United States of America.</p>
              <p className="text-gray-900 font-medium">Company Registration Number: 10480139</p>
              <p className="text-gray-600 mt-2">Principal Business Address:</p>
              <p className="text-gray-700">447 Broadway, 2nd Floor, Suite 3342<br />New York, NY 10013<br />United States</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holding Entity (Liechtenstein)</h3>
              <p className="font-semibold text-gray-900 mb-2">TotoHolding AG</p>
              <p className="text-gray-600 mb-4">Incorporated in Liechtenstein</p>
              <p className="text-gray-900 font-medium">Legal Entity Identifier (LEI): 5299005UXAQFO3US5C38</p>
              <p className="text-gray-600 mt-2">
                The LEI can be independently verified via the Global Legal Entity Identifier Foundation (
                <a
                  href="https://search.gleif.org/#/search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00375e] font-medium hover:underline"
                >
                  GLEIF
                </a>
                ).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECURITY & AUDITS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Security &amp; Audits
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Toto Finance is subject to independent third-party security audits to ensure the integrity of its smart contracts and platform infrastructure.
          </p>
          <p className="text-base md:text-lg text-gray-900 font-medium">
            Audit Providers:{' '}
            <a
              href="https://hacken.io/audits/toto-finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00375e] hover:underline"
            >
              Hacken
            </a>
            ,{' '}
            <a
              href="https://skynet.certik.com/projects/tiamonds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00375e] hover:underline"
            >
              CertiK
            </a>
          </p>
        </div>
      </section>

      {/* ===================== INSTITUTIONAL CREDIBILITY (moved after Security & Audits) ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">
            Institutional Credibility
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Compliance-first infrastructure that is consistent with established legal frameworks
          </p>
          <ul className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Independent physical validation and proof-of-reserves</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Third-party custody and audit processes</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Security audits performed by Hacken and CertiK</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Registered legal entities in Liechtenstein and the United States</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===================== TRUSTED BY & PARTNERS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4 text-center">
            Trusted By &amp; Partners
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
            Take it from the{' '}
            <a
              href="https://totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium underline underline-offset-2 hover:text-gray-200"
            >
              homepage
            </a>
            .
          </p>
          {/* Same carousel as homepage TRUSTED BY — dark bg so logos are visible */}
          <div className="trusted-by-dark w-full max-w-6xl mx-auto mb-10">
            <p className="social-proof-text mb-8">TRUSTED BY</p>
            <div className="w-full overflow-hidden">
              <div className="social-proof-logos">
                {[...partnerLogos, ...partnerLogos].map((name, idx) => (
                  <div className="logo-item" key={`pl-${idx}-${name}`}>
                    <img
                      src={`/logo/${name}`}
                      alt={name.replace(/\.[^/.]+$/, '')}
                      width={120}
                      height={40}
                      loading="lazy"
                      className={`${
                        ['Solana (1).svg', 'Xrp.svg'].includes(name)
                          ? 'h-4 sm:h-5'
                          : ['Uniswap.svg', 'Coingecko.svg'].includes(name)
                            ? 'h-6 sm:h-8'
                            : 'h-5 sm:h-6'
                      } opacity-80 hover:opacity-100 transition`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/ecosystem" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Ecosystem
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED IN ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 text-center">
            Featured In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredInLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-4 border border-gray-200 hover:border-[#00375e] hover:shadow-md transition-all duration-200 text-left"
              >
                <span className="text-sm font-medium text-gray-900 line-clamp-2">{item.label}</span>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#00375e]">
                  Read more <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL IMPACT / MARKET OPPORTUNITY SECTION ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-8">
                Global Impact / Market Opportunity
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">$30+ Trillion</div>
                  <p className="text-gray-600">Commodity Market Size</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">$16+Trillion</div>
                  <p className="text-gray-600">Tokenization Market (by 2030)</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">$46+ Trillion</div>
                  <p className="text-gray-600">Combined Market Size</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
              
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-center items-center">
                {/* Digital Assets Grid */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 w-full max-w-md">
                  {/* Tokenization Asset */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-base font-bold text-white">$16+T</div>
                      <div className="text-[10px] md:text-xs text-gray-300">Tokenization</div>
                    </div>
                  </div>
                  
                  {/* Commodities Asset */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-base font-bold text-white">$30T+</div>
                      <div className="text-[10px] md:text-xs text-gray-300">Commodities</div>
                    </div>
                  </div>
                  
                  {/* Global Markets Asset */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-base font-bold text-white">Global</div>
                      <div className="text-[10px] md:text-xs text-gray-300">Markets</div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Digital Assets Row */}
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl">₿</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl">Ξ</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl">●</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl">◆</span>
                  </div>
                </div>
                
                {/* Market Value Display */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/20 w-full max-w-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-gray-300">Market Value</span>
                    <div className="flex items-center gap-1 text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-xs font-semibold">+24.5%</span>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white">$46+ Trillion</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">Combined Market Size</div>
                </div>
              </div>
              
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Join the Future of Global Commodity Markets
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
            Tokenization is reshaping how commodities are owned, traded, and financed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Explore Marketplace
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="mailto:hello@totofinance.co"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Partnerships
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER + FOOTER ===================== */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}

