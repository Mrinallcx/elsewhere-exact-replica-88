// Server Component (NO "use client")
export const revalidate = 3600; // ISR: regenerate every hour

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const DysprosiumTickerBar = dynamicImport(
  () => import('../components/client/DysprosiumTickerBar').then((mod) => ({ default: mod.DysprosiumTickerBar }))
);
const DysprosiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized dysprosium?',
    answer:
      'Tokenized dysprosium represents digital exposure to dysprosium supply using blockchain-based infrastructure for efficient access and transfer. Toto Finance is building the platform to provide global, frictionless access to this critical heavy rare earth element.',
  },
  {
    question: 'Why is dysprosium important for EVs?',
    answer:
      'Dysprosium allows permanent magnets to retain strength at high temperatures, which is essential for EV motors operating under heavy loads. Without dysprosium, EV traction motors would degrade under real-world driving conditions, reducing performance and lifespan.',
  },
  {
    question: 'Is dysprosium supply limited?',
    answer:
      'Yes. Dysprosium is geologically scarce and primarily produced as a byproduct of other rare earth mining operations, making supply slow to scale. Limited global deposits and heavy reliance on a small number of producing regions create structural supply constraints.',
  },
  {
    question: 'How does tokenization help access dysprosium?',
    answer:
      'Tokenization enables fractional access, instant settlement, and global participation without traditional commodity market constraints. Buyers can gain exposure to dysprosium supply without minimum shipment requirements, warehouse logistics, or intermediary brokers.',
  },
  {
    question: 'Who should consider tokenized dysprosium?',
    answer:
      'Industrial users (EV manufacturers, defense contractors, wind turbine developers), institutional investors seeking exposure to critical magnet materials, and digital asset participants looking for real-world asset diversification tied to physical technology constraints.',
  },
];

export default function TokenizedDysprosiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Dysprosium | Critical Rare Earth for EV & Defense Magnets | Toto Finance"
        description="Tokenized dysprosium by Toto Finance. Digitally represented dysprosium supply critical for EV motors, defense systems, and high-temperature magnets."
        url="https://totofinance.co/tokenized-dysprosium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Dysprosium', item: 'https://totofinance.co/tokenized-dysprosium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-indigo-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-indigo-400/30">
                High-Temperature Magnet Material
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Dysprosium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Dysprosium enables permanent magnets to operate under extreme heat and stress &mdash; making it indispensable for electric vehicles, defense systems, wind turbines, and advanced AI-driven hardware. Toto Finance is building the infrastructure to digitize dysprosium supply with global access and instant settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Explore Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="#why-dysprosium"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Why Dysprosium Matters
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* ===================== FOLD 2: TICKER + WHY DYSPROSIUM MATTERS ===================== */}
      <DysprosiumTickerBar />

      <section id="why-dysprosium" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Strategic Importance</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Dysprosium Is Critical for High-Performance Magnets
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-5">
            Dysprosium is a heavy rare earth element added to neodymium-based permanent magnets to maintain magnetic strength at high temperatures. Without dysprosium, many advanced electric motors and defense systems would fail under real-world operating conditions.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            As electrification accelerates and AI-driven systems scale, demand for high-performance, heat-resistant magnets is rising rapidly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Demand Driver 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Electric Vehicles</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dysprosium allows EV traction motors to maintain performance at high operating temperatures. Every electric vehicle with a permanent magnet motor depends on dysprosium to ensure reliability under heavy acceleration, sustained highway driving, and extreme ambient conditions.
              </p>
            </div>
            {/* Demand Driver 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Defense &amp; Aerospace</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Precision-guided systems, radar, and military hardware rely on dysprosium-enhanced magnets for reliability in extreme environments. Defense applications demand magnets that perform consistently across wide temperature ranges and under high mechanical stress.
              </p>
            </div>
            {/* Demand Driver 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Wind Energy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Large-scale wind turbines require permanent magnets that perform under continuous thermal stress and mechanical vibration. Dysprosium-enhanced magnets ensure consistent power generation across decades of operation, reducing maintenance cycles and improving energy output.
              </p>
            </div>
            {/* Demand Driver 4 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI &amp; Advanced Robotics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-speed motors and actuators in AI-driven robotics and automation systems depend on dysprosium for stability and durability. As AI hardware scales to data centers, autonomous vehicles, and precision manufacturing, demand for heat-resistant magnets is accelerating.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base text-indigo-900 leading-relaxed font-medium">
              Dysprosium is a force multiplier &mdash; small quantities unlock performance that cannot be achieved otherwise. It is the hidden enabler behind the world&apos;s most advanced electrification and defense technologies.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: SUPPLY CONSTRAINT & STRATEGIC PRESSURE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Market Dynamics</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Scarce Supply Meets Rising Technological Demand
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-5">
            Dysprosium supply is far more constrained than light rare earths. It is geologically scarce, difficult to extract, and primarily produced as a byproduct of other rare earth mining operations.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            At the same time, dysprosium demand is rising as industries push magnets to higher temperatures and performance thresholds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: 'Limited Global Deposits',
                desc: 'Dysprosium occurs in low concentrations within rare earth ore bodies. Unlike light rare earths, it cannot be mined independently — it is always extracted alongside other elements, constraining production scaling.',
                icon: (
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                ),
                bg: 'bg-amber-50',
              },
              {
                title: 'Concentrated Production',
                desc: 'Heavy reliance on a small number of producing regions creates geopolitical supply risk. Export restrictions, production quotas, and trade policies can disrupt global dysprosium availability with little warning.',
                icon: (
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                bg: 'bg-red-50',
              },
              {
                title: 'Complex Processing',
                desc: 'Separation and processing of dysprosium from rare earth concentrates requires specialized hydrometallurgical facilities. Few operations globally can produce high-purity dysprosium oxide, creating a processing bottleneck.',
                icon: (
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                bg: 'bg-blue-50',
              },
              {
                title: 'Rising Intensity per Unit',
                desc: 'As EV motors become more powerful and defense systems more advanced, the amount of dysprosium required per unit is increasing. Higher performance demands greater thermal resistance, which means more dysprosium per magnet.',
                icon: (
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                bg: 'bg-indigo-50',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
                <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Dysprosium is one of the most strategically sensitive materials in the electrification supply chain.</strong> Its scarcity, concentrated production, and irreplaceable role in high-temperature magnets make it a critical bottleneck for the industries defining the next decade of technological progress.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: TOKENIZED DYSPROSIUM ON TOTO FINANCE ===================== */}
      <section id="products" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Digital Access</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            How Tokenized Dysprosium Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-5">
            Tokenized dysprosium on Toto Finance provides digital access to dysprosium supply through blockchain-based infrastructure designed for efficiency, transparency, and global participation.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Tokenization enables exposure to strategic materials without traditional market friction.
          </p>

          {/* Core Characteristics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Core Characteristics
              </span>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Digital Dysprosium Infrastructure</h3>
              <ul className="space-y-3">
                {[
                  'Digitally represented dysprosium supply linked to verified sourcing',
                  'Fractional access without minimum shipment constraints',
                  '24/7 availability across global markets',
                  'Instant settlement using stablecoins (USDC, USDT, USAT)',
                  'Designed for secondary trading and strategic allocation',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Use Cases
              </span>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Who Benefits from Tokenization</h3>
              <ul className="space-y-3">
                {[
                  'EV manufacturers securing exposure to heat-resistant magnet inputs',
                  'Defense contractors managing material risk across supply chains',
                  'Investors positioning for rare earth supply constraints',
                  'Digital portfolios diversifying into critical infrastructure materials',
                  'Wind energy companies hedging magnet material costs',
                ].map((useCase, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Settlement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Traditional */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Traditional Rare Earth Trade</h3>
              <p className="text-sm text-gray-500 mb-6">Multiple Intermediaries, Days to Settle</p>
              <div className="space-y-3">
                {['Mining Company / Producer', 'Processing Facility', 'Commodity Broker / Trader', 'Clearing House', 'Custodian Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-500">{i + 1}</div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-red-600 font-medium">Settlement: T+2 to T+5 (or longer)</p>
              </div>
            </div>
            {/* Toto Finance */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">Toto Finance</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer &harr; Seller, Direct Match</p>
              <div className="space-y-3">
                {['Mining Company / Producer', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">{i + 1}</div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Toto Finance uses blockchain technology to connect dysprosium producers with buyers directly, eliminating banks, clearing houses, and settlement agents entirely. Instant stablecoin settlement with USDC, USDT, and USAT.
              </p>
            </div>
          </div>

          {/* Stablecoins */}
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Instant Settlement with Stablecoins</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'USDC', issuer: 'Circle', desc: 'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration across all major chains.' },
              { name: 'USDT', issuer: 'Tether', desc: 'The highest-liquidity stablecoin in the world with over $140 billion in circulation. The default settlement currency for global crypto trading and commodity markets.' },
              { name: 'USAT', issuer: 'Tether (US Framework)', desc: 'Tether\'s US stablecoin under the GENIUS Act framework. Designed for compliant domestic transactions, bridging traditional finance with digital asset infrastructure.' },
            ].map((coin, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">{coin.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{coin.name}</p>
                    <p className="text-xs text-gray-500">{coin.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{coin.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: WHO USES TOKENIZED DYSPROSIUM ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Participants</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Who Tokenized Dysprosium Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Industrial &amp; Strategic</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial &amp; Strategic Buyers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                EV manufacturers, defense suppliers, wind turbine developers, and advanced manufacturing firms dependent on high-performance magnets. These buyers need reliable access to dysprosium supply to maintain production schedules and strategic inventory.
              </p>
            </div>
            {/* Category 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Institutional</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Institutional &amp; Professional Investors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Funds and asset managers seeking exposure to strategic supply bottlenecks driven by electrification and AI infrastructure. Dysprosium offers portfolio diversification into a material with structurally constrained supply and accelerating demand.
              </p>
            </div>
            {/* Category 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Digital Asset</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Digital Asset Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Crypto-native funds and on-chain treasuries seeking real-world asset exposure tied to physical technology constraints. Tokenized dysprosium provides DeFi-compatible access to a critical material with tangible industrial demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Dysprosium Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Instant stablecoin settlement, DeFi secondary markets, collateral loans, and 24/7 global trading — all on-chain with institutional-grade compliance.
          </p>
          <Link
            href="/how-tokenization-works"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Learn How Tokenization Works
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== FOLD 6: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Everything About Tokenized Dysprosium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized dysprosium, supply constraints, EV and defense applications, and digital access on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <DysprosiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Early Access</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Dysprosium Is a Hidden Bottleneck of Electrification
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            As EVs, AI hardware, and defense systems scale, dysprosium becomes increasingly critical &mdash; and increasingly scarce. Toto Finance is building the digital rails to access dysprosium globally with instant stablecoin settlement and DeFi secondary markets.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Early Access
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== NEWSLETTER + FOOTER ===================== */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}
