// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const CopperTickerBar = dynamicImport(
  () => import('../components/client/CopperTickerBar').then((mod) => ({ default: mod.CopperTickerBar }))
);
const CopperFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized copper?',
    answer:
      'Tokenized copper is a blockchain-based digital asset backed 1:1 by refined copper cathodes stored in insured, audited vaults. Grade A, LME deliverable quality, ready for industrial use. Each token is always redeemable for physical copper on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Copper by Toto Finance?',
    answer:
      'In-Ground Copper is a tokenized future delivery contract for physical copper still in the ground at certified mining operations. Short-term delivery (1\u201312 months) is tied to active mines, and long-term delivery (1\u20136 years) is backed by proven reserves at earlier-stage operations. Designed for institutions, sovereign wealth funds, and investors positioning for the structural copper deficit.',
  },
  {
    question: 'Where does Toto Finance source its copper?',
    answer:
      'Toto Finance works directly with some of the largest publicly listed mining companies in the world, securing copper at the producer and refinery level. Sourcing spans Africa, the MENA region, Saudi Arabia, the United States, Canada, and Asia, covering developed mines in active production and new fields in preparation and exploration. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized copper?',
    answer:
      'Three categories: (1) Industrial clients needing physical copper \u2014 AI data centers, energy producers, EV manufacturers, construction, electronics, defense, telecom, renewable energy, HVAC, and shipbuilding. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\u2019s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects copper producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized copper on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use copper as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized copper represent a new programmable financial model.',
  },
  {
    question: 'Why is copper called the "new oil" of the AI era?',
    answer:
      'Copper is the backbone of AI infrastructure. A single Nvidia GB200 AI server rack uses over 5,000 copper cables. Goldman Sachs projects 165% data center power growth by 2030. Global supply enters a 6 million tonne deficit by 2035. New mines take 17 years from discovery to production. Copper is as critical to the AI era as oil was to the industrial age.',
  },
  {
    question: 'What is the copper price forecast for 2026?',
    answer:
      'J.P. Morgan forecasts $12,500/mt in Q2 2026. UBS projects $13,000/mt. Bloomberg NEF forecasts $13,500/mt peak by 2028. The structural deficit is expected to persist and widen through 2026 and beyond.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedCopperPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Copper | Digital Copper Backed by Physical Assets | Toto Finance"
        description="Tokenized copper by Toto Finance. 1:1 asset-backed copper cathode tokens, always redeemable. In-Ground Copper future delivery contracts."
        url="https://totofinance.co/tokenized-copper"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Copper', item: 'https://totofinance.co/tokenized-copper' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Copper', item: 'https://totofinance.co/tokenized-copper' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-block bg-white/10 text-orange-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-orange-400/30">
                The Future of Commodity Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Copper
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The metal powering the AI revolution is entering a structural deficit. Toto Finance is building the infrastructure to tokenize copper &mdash; from 1:1 redeemable refined cathodes to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Explore the Vision
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Two Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Market Data Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Copper (Cu) / LME Spot Price</p>
                  <p className="text-sm text-gray-400">Global Copper Market</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-light text-white">$11,705</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +32% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$350B+</p>
                  <p className="text-xs text-gray-500">Global copper market</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">304,000 t</p>
                  <p className="text-xs text-gray-500">Refined copper</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$12,500/mt</p>
                  <p className="text-xs text-gray-500">J.P. Morgan</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Settlement</p>
                  <p className="text-lg font-semibold text-white">T+0</p>
                  <p className="text-xs text-gray-500">Instant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 2: TICKER + THE COPPER CRISIS ===================== */}
      <CopperTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Copper Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Copper Is the New Oil of the AI Era
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            The world is running out of copper. AI data centers, electric vehicles, and clean energy are creating unprecedented demand while global supply enters a structural decline. This is not a cycle. It is a generational shift.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Crisis Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">304K tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wood Mackenzie forecasts a 304,000-tonne refined copper deficit in 2025, with an even wider gap expected in 2026. The International Copper Study Group has reversed its surplus forecast to a shortfall of 150,000+ tonnes.
              </p>
            </div>
            {/* Crisis Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">5,000+ cables</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Copper in Every AI Chip</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A single Nvidia GB200 NVL72 AI server rack contains over 5,000 copper cables spanning 3.2 kilometers. Data centers bring hundreds of these units together, consuming massive volumes of copper for power, cooling, and connectivity.
              </p>
            </div>
            {/* Crisis Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">6M tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2035 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global copper demand is projected to reach 42.7 million tonnes per year by 2035, while supply peaks around 2030 and declines. By 2035, existing and planned mines will meet only 70% of projected demand, according to the IEA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: AI INFRASTRUCTURE DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">AI Infrastructure</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The AI Boom Is Devouring Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Every AI model trained, every query processed, every autonomous vehicle built requires copper. The metal&apos;s unmatched electrical conductivity and thermal properties make it irreplaceable in the AI supply chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Demand Fact 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">165% Power Surge by 2030</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Goldman Sachs projects AI will drive a 165% increase in data center power demand by 2030, requiring massive copper buildout for transmission, distribution, and cooling.
              </p>
            </div>
            {/* Demand Fact 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">1.1 Million Tonnes Annually</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Data centers will consume 1.1 million tonnes of copper annually by 2030, representing nearly 3% of total global demand, according to Sprott research estimates.
              </p>
            </div>
            {/* Demand Fact 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Liquid Cooling Revolution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The liquid-cooled data center market is growing at 33% CAGR, reaching $21 billion by 2032. Copper cooling plates on every AI chip are driving additional demand.
              </p>
            </div>
            {/* Demand Fact 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Price-Insensitive Buyers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Copper represents less than 0.5% of data center project costs. Hyperscale developers are outbidding grid suppliers, pushing prices up without reducing demand.
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Copper Demand Projection (Million Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', value: '26.3 Mt', highlight: false },
                { year: '2028', value: '29.8 Mt', highlight: false },
                { year: '2030', value: '32.2 Mt', highlight: false },
                { year: '2035', value: '42.7 Mt', highlight: true },
                { year: 'Supply \'35', value: '~29 Mt', highlight: true },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${d.highlight ? 'bg-orange-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${d.highlight ? 'text-orange-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.value}</p>
                  {i === 4 && <p className="text-xs text-red-500 mt-1">Gap: 6M+</p>}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Wood Mackenzie, IEA, Mordor Intelligence.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: TWO PRODUCTS ===================== */}
      <section id="products" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Two Products</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Two Ways to Own Copper Digitally
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance is building two distinct tokenized copper products: a 1:1 asset-backed token for refined copper cathodes always redeemable for physical delivery, and In-Ground Copper future delivery contracts for pre-production exposure.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Product 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Asset-Backed Token
              </span>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">1:1 Copper Cathode Token</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every token is backed 1:1 by refined copper cathodes stored in insured, audited vault facilities. Grade A copper, LME deliverable quality, ready for industrial use. Always redeemable for physical copper on demand.
              </p>
              <ul className="space-y-3">
                {[
                  'Backed 1:1 by refined copper cathodes (Grade A, LME quality)',
                  'Always redeemable for physical copper delivery on demand',
                  'Stored in insured, independently audited vault and warehouse facilities',
                  'On-chain proof-of-reserves with real-time oracle feeds',
                  'Fractional ownership, 24/7 tradeable, instant stablecoin settlement',
                  'Ready for industrial end-use: data centers, energy, construction, electronics',
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

            {/* Product 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Future Delivery Contract
              </span>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">In-Ground Copper</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tokenized future delivery contracts for physical copper still in the ground at certified mining operations. Access copper at pre-production economics, with delivery windows from months to years.
              </p>
              <ul className="space-y-3">
                {[
                  'Backed by proven and probable reserves at partner mining sites',
                  'Pre-production pricing with built-in supply scarcity premium',
                  'On-chain reserve tracking with geological data transparency',
                  'Physical delivery or settlement at maturity',
                  'Verified reserves with third-party geological audits',
                  'Designed for institutional, sovereign, and long-duration strategies',
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
          </div>

          {/* Delivery Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-2xl p-6 md:p-8 border border-orange-100">
              <span className="inline-block text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">Short-Term Delivery</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">1 &ndash; 12 Months</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term copper delivery contracts tied to active mining operations approaching production. Ideal for industrial hedging, near-term portfolio allocation, and buyers seeking defined delivery timelines with transparent reserve verification.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100">
              <span className="inline-block text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">Long-Term Delivery</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">1 &ndash; 6 Years</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategic copper positions backed by proven reserves at earlier-stage mining operations. Built for sovereign wealth funds, institutional allocators, and forward-looking investors positioning for the multi-year copper supply deficit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Copper Comes From
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance works directly with some of the largest publicly listed mining companies in the world, securing copper assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'Africa', desc: 'Direct partnerships with mining operations across the copper belt, including major DRC and Zambian producers. Active production sites and new exploration fields.' },
              { region: 'MENA & Saudi Arabia', desc: 'Strategic sourcing partnerships in the Middle East and North Africa, aligned with sovereign diversification programs and industrial development initiatives.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canada copper operations, including established producers and new mining fields benefiting from critical mineral designations and domestic supply policies.' },
              { region: 'Asia', desc: 'Sourcing from major Asian copper producing and refining regions, connecting directly with smelters and refineries processing a significant share of global copper output.' },
              { region: 'Developed Mines', desc: 'Publicly listed mining companies with multiple mines in active production, delivering consistent copper output at scale with proven operational track records.' },
              { region: 'Exploration & Preparation', desc: 'New mining fields in preparation and exploration phases, offering In-Ground Copper positions at pre-production economics before reserves reach market.' },
            ].map((source, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with mining companies and refineries. Better pricing, verified provenance, and a transparent chain of custody from mine to token.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5B: INVESTORS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Investors</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Who Buys Tokenized Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance serves three distinct categories of buyers, each with different motivations for accessing tokenized copper and In-Ground Copper contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 1</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Clients</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Companies that need physical copper directly for manufacturing and operations. They purchase tokenized copper for guaranteed supply, streamlined procurement, and physical redemption.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                AI data center operators, energy production &amp; grid infrastructure, electric vehicle manufacturers, construction &amp; real estate developers, electronics &amp; semiconductor manufacturers, telecommunications &amp; 5G infrastructure, defense &amp; aerospace, renewable energy, plumbing &amp; HVAC systems, shipbuilding &amp; marine engineering.
              </p>
            </div>
            {/* Category 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 2</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors &amp; Commodity Brokers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Mid-size and smaller investment firms, commodity brokers, family offices, and individual investors who typically cannot access premium commodity deals at the pricing and scale that major institutions command.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Toto Finance democratizes access to institutional-grade copper positions. Fractional ownership, no minimum tonnage requirements, no warehouse logistics, and no counterparty risk through intermediaries. The same copper, at competitive pricing, accessible to everyone.
              </p>
            </div>
            {/* Category 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 3</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Crypto-Native Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Blockchain-native organizations and investors seeking real-world asset diversification, on-chain yield, and commodity-backed collateral for DeFi strategies.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto hedge funds and digital asset funds, blockchain infrastructure foundations and protocol treasuries, DeFi protocols seeking real-world collateral, crypto-native investors diversifying into commodity-backed tokens, DAOs and decentralized investment vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5C: INSTANT SETTLEMENT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Global Trade</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement, No Banks
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Traditional commodity trading involves a chain of middlemen, brokers, banks, clearing houses, and custodians that delay settlement by days or weeks and extract fees at every step. Toto Finance removes them all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Traditional */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Traditional Commodity Trade</h3>
              <p className="text-sm text-gray-500 mb-6">7+ Intermediaries, Days to Settle</p>
              <div className="space-y-3">
                {['Mining Company / Producer', 'Commodity Broker / Trader', 'Clearing House', 'Custodian Bank', 'Correspondent Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
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
                Similar to how Amazon and eBay match buyers and sellers directly for physical goods, Toto Finance uses blockchain technology to connect copper producers with buyers, eliminating banks, clearing houses, and settlement agents entirely.
              </p>
            </div>
          </div>

          {/* Stablecoins */}
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Instant Settlement with Stablecoins</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'USDC', issuer: 'Circle', desc: 'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration across all major chains.' },
              { name: 'USDT', issuer: 'Tether', desc: 'The highest-liquidity stablecoin in the world with over $140 billion in circulation. The default settlement currency for global crypto trading and commodity markets.' },
              { name: 'USAT', issuer: 'Tether (US Regulated)', desc: 'Tether\u2019s US-regulated stablecoin under the GENIUS Act framework. Designed for compliant domestic transactions, bridging traditional finance with digital asset infrastructure.' },
            ].map((coin, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
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

      {/* ===================== FOLD 6: DeFi ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Secondary Markets</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            DeFi Trading, Yield &amp; Collateral Loans
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Once tokenized copper is purchased on Toto Finance, secondary trading happens on DeFi platforms globally. Hold, trade, hedge, earn yield, or borrow against your copper. All on-chain. All programmable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Global Secondary Trading', desc: 'Tokenized copper trades 24/7 on decentralized exchanges and DeFi platforms worldwide. Buy, sell, and transfer copper tokens across chains without gatekeepers, brokers, or trading hour restrictions. True global liquidity.' },
              { title: 'On-Chain Yield', desc: 'Earn yield by exposing copper assets to smart contract yield contracts. Lend tokenized copper to short sellers or leveraged long traders who borrow assets and pay interest. Passive income backed by physical commodities.' },
              { title: 'Collateral Loans', desc: 'Use tokenized copper as collateral for on-chain loans. Borrow stablecoins against copper holdings without selling the underlying asset. All managed at the protocol level \u2014 no bank approval, no credit checks, no delays.' },
              { title: 'Programmable Finance', desc: 'Collateral loans backed by tokenized copper represent a new programmable financial model. Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical commodity value meets decentralized infrastructure.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Token Lifecycle */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Copper Token</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {[
                'Minted on Toto Finance',
                'Purchased with Stablecoins',
                'Held, Traded or Transferred',
                'Yield, Loans or Hedging',
                'Redeemed for Physical Copper',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">{i + 1}</div>
                    <p className="text-xs md:text-sm text-gray-700 max-w-[120px] leading-tight">{step}</p>
                  </div>
                  {i < 4 && (
                    <svg className="w-5 h-5 text-gray-300 hidden md:block mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6B: COMPARISON TABLE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Why Tokenized</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tokenized Copper vs. Traditional Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            See how tokenized copper on Toto Finance compares to traditional copper ETFs, futures contracts, and physical ownership.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Copper ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Copper</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Copper Futures</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / Dealer', 'Exchange hours'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+1'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic / Futures', '1:1 Copper Cathodes', 'Direct ownership', 'No (cash settled)'],
                  ['Min. Investment', '1 share (~$30+)', 'Fractional (from $1)', '$10,000+', '$25,000+ margin'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'Roll costs'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker + Exchange'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-orange-50/50">{row[2]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 6C: PLATFORM FEATURES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Institutional-Grade Copper Tokenization
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Transparency, compliance, and programmable infrastructure embedded into every transaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Redeemable Assets', desc: 'All tokenized copper is linked to insured vaults and custody facilities. Redeem tokens for physical copper cathode delivery on demand. Grade A, LME quality, ready for industrial use.' },
              { title: 'Transparent Reserves', desc: 'On-chain proof-of-reserves, real-time oracle feeds, and third-party audits ensure continuous 1:1 asset backing. Every token is verifiable on the blockchain at any time.' },
              { title: 'Instant Settlement', desc: 'T+0 settlement with USDC, USDT, and USAT eliminates counterparty risk and delays. No banks, no clearing houses, no intermediaries.' },
              { title: 'Programmable Compliance', desc: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on.' },
              { title: 'DeFi Yield & Loans', desc: 'Earn yield through lending protocols, use copper as collateral for on-chain loans, or hedge positions through smart contracts. Programmable finance for physical assets.' },
              { title: 'Multi-Chain Access', desc: 'Tokenized copper is accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that works best for your strategy.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 7: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Everything About Tokenized Copper
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized copper, In-Ground Copper, instant settlement, and DeFi secondary markets on Toto Finance.
          </p>
          <CopperFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            The Copper Deficit Is Here
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            The world needs 42.7 million tonnes of copper by 2035. Supply will fall short by over 6 million tonnes. Toto Finance is building the platform to tokenize copper &mdash; from 1:1 redeemable cathodes to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
