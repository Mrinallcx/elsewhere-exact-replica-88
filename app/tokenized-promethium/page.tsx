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
const PromethiumTickerBar = dynamicImport(
  () => import('../components/client/PromethiumTickerBar').then((mod) => ({ default: mod.PromethiumTickerBar }))
);
const PromethiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized promethium?',
    answer:
      'Tokenized promethium is a blockchain-based digital asset backed 1:1 by refined promethium-147 isotopes stored in secured, specialized nuclear material facilities. High-purity promethium-147, ready for nuclear battery production and space power applications. Each token is always redeemable for physical promethium on demand subject to appropriate handling protocols. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Promethium by Toto Finance?',
    answer:
      'In-Ground Promethium is a tokenized future delivery contract for physical promethium from nuclear fuel reprocessing facilities where promethium-147 is recovered as a fission product byproduct. Short-term delivery (1-12 months) is tied to active facilities, and long-term delivery (1-6 years) is backed by proven recovery capacity. Designed for space agencies, nuclear battery manufacturers, defense contractors, sovereign wealth funds, and investors positioning for promethium supply growth.',
  },
  {
    question: 'Where does Toto Finance source its promethium?',
    answer:
      'Toto Finance works directly with nuclear fuel reprocessing facilities and isotope production centers across the United States (Oak Ridge and specialized facilities), Russia (isotope production reactors), Europe (France and UK reprocessing facilities), China (expanding fuel cycle infrastructure), and Japan/South Korea (nuclear research facilities). Sourcing covers active production facilities and future capacity expansion. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized promethium?',
    answer:
      'Three categories: (1) Industrial clients needing physical promethium — space agencies and aerospace contractors (NASA, ESA, SpaceX, Blue Origin), nuclear battery manufacturers, betavoltaic device developers, deep-space mission equipment manufacturers, satellite power system producers, autonomous sensor manufacturers, defense contractors, nuclear research institutions, medical device developers (implantable power), and specialized luminescence manufacturers. (2) Investors and commodity brokers seeking exposure to the rarest nuclear material. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking unique real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This streamlines the traditional nuclear material procurement process that can take 30-90 days, while maintaining full regulatory compliance and secured storage protocols.',
  },
  {
    question: 'Can I trade tokenized promethium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use promethium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized promethium represent a new programmable financial model for nuclear materials.',
  },
  {
    question: 'Why is promethium the only radioactive rare earth element?',
    answer:
      'Promethium is unique among the 17 rare earth elements as the only one with no stable isotopes — all promethium isotopes are radioactive. Promethium does not occur naturally on Earth in significant quantities and must be produced through nuclear fission or neutron activation in reactors. With a 2.6-year half-life, promethium-147 emits low-energy beta radiation ideal for nuclear batteries, providing continuous power for decades. This unique property makes promethium irreplaceable for long-duration power in space missions, deep-sea sensors, and remote monitoring where battery replacement is impossible.',
  },
  {
    question: 'What is the promethium supply forecast for 2030?',
    answer:
      'Global promethium-147 production is estimated at less than 100 grams annually from nuclear fuel reprocessing. As space missions accelerate, commercial space stations develop, lunar bases are established, and deep-space exploration expands, demand is projected to reach 280 grams annually by 2030. Supply will only reach approximately 120 grams even with expanded production capacity, creating a 160-gram gap. This represents the most extreme supply constraint of any material in the tokenized commodities market.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, space agencies, nuclear battery manufacturers, defense contractors, and qualified buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedPromethiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Promethium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized promethium by Toto Finance. 1:1 asset-backed promethium isotope tokens, always redeemable. In-Ground Promethium future delivery contracts."
        url="https://totofinance.co/tokenized-promethium"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Promethium', item: 'https://totofinance.co/tokenized-promethium' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Promethium', item: 'https://totofinance.co/tokenized-promethium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block bg-white/10 text-amber-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-amber-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Promethium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The only radioactive rare earth element powering nuclear batteries, space missions, and specialized luminescence applications is facing extreme supply constraints. Toto Finance is building the infrastructure to tokenize promethium &mdash; from 1:1 redeemable refined isotopes to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300">
                  Explore the Vision
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="#products" className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300">
                  Two Products
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Promethium-147 (Pm-147) / Isotope Price</p>
                  <p className="text-sm text-gray-400">Global Nuclear Materials Market</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-light text-white">Price on Application</p>
                  <p className="text-sm text-amber-400 font-medium">Supply Constrained</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$8M+</p>
                  <p className="text-xs text-gray-500">Estimated</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Production</p>
                  <p className="text-lg font-semibold text-white">&lt;100 g</p>
                  <p className="text-xs text-gray-500">Globally</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">Critical</p>
                  <p className="text-xs text-gray-500">Scarcity</p>
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

      {/* ===================== FOLD 2: TICKER + CRISIS ===================== */}
      <PromethiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Promethium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Promethium Is the Rarest Nuclear Material</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of promethium. Space agencies, nuclear battery developers, and specialized luminescence manufacturers are creating unprecedented demand while global supply remains virtually non-existent. This is not a cycle. It is extreme materials scarcity of the only radioactive rare earth element.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">&lt;100 g</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Annual Global Production</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global promethium-147 production is estimated at less than 100 grams annually from nuclear reactor byproducts. Promethium is the only rare earth element with no stable isotopes &mdash; all isotopes are radioactive. Promethium does not occur naturally on Earth and must be produced through nuclear fission or neutron activation.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">Only 1</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Only Radioactive Rare Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium is unique among the 17 rare earth elements as the only one with exclusively radioactive isotopes. Promethium-147 emits low-energy beta radiation ideal for nuclear batteries, producing steady power for decades without recharging. This unique property makes promethium irreplaceable for long-duration power applications in space and remote environments.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.6 yr</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Promethium-147 Half-Life</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-147&apos;s 2.6-year half-life provides optimal long-term power generation for nuclear batteries while remaining manageable for handling and storage. This half-life is ideal for spacecraft, satellites, and remote sensors requiring 5&ndash;15 year operational lifetimes. Supply is fundamentally constrained by nuclear reactor production capacity and isotope separation complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: NUCLEAR BATTERY & SPACE DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Nuclear Batteries &amp; Space Power</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Space Economy Is Exhausting Promethium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every nuclear battery powering deep-space missions, every autonomous sensor in remote locations, every specialized phosphorescent coating requires promethium. The element&apos;s unique radioactive properties make it irreplaceable for long-duration power generation and specialized luminescence applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nuclear Batteries for Space Missions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-147 nuclear batteries provide continuous power for spacecraft, satellites, and deep-space probes operating beyond solar panel range. NASA, ESA, and commercial space companies require promethium for lunar bases, Mars missions, and outer solar system exploration. Each deep-space probe requires 5&ndash;20 grams of promethium-147, with demand accelerating as space missions scale.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Autonomous Sensors &amp; Remote Monitoring</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-powered nuclear batteries enable autonomous sensors in remote locations where battery replacement is impossible &mdash; ocean depths, arctic installations, underground infrastructure, and geophysical monitoring stations. The sensor power sector consumes estimated 30&ndash;40 grams annually, with demand growing as IoT remote monitoring expands.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Specialized Luminescent Coatings</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-147 activates phosphorescent compounds for self-luminous watch dials, instrument panels, and emergency signage requiring no external power. While tritium has largely replaced promethium for this application due to availability, specialized aerospace and defense applications still require promethium&apos;s unique properties.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Betavoltaic Battery Research</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Next-generation betavoltaic batteries using promethium-147 promise 20+ year operational lifetimes for medical implants, remote sensors, and microelectronics. Research institutions and battery developers consume 10&ndash;15 grams annually, with demand projected to accelerate as betavoltaic technology commercializes for cardiac pacemakers and neural implants.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Promethium Demand Projection (Grams/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '65 g', note: 'Estimated' },
                { year: '2028', val: '150 g', note: 'Projected' },
                { year: '2030', val: '280 g', note: 'Projected' },
                { year: '2035', val: '500 g', note: 'Projected' },
                { year: 'Supply \'30', val: '~120 g', note: 'Gap: 160g+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-amber-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-amber-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Estimated from nuclear reactor production capacity, space mission requirements, and specialized application demand.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 4: TWO PRODUCTS ===================== */}
      <section id="products" className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Two Products</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Two Ways to Own Promethium Digitally</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance is building two distinct tokenized promethium products: a 1:1 asset-backed token for refined promethium-147 isotopes always redeemable for physical delivery, and In-Ground Promethium future delivery contracts for pre-production exposure from nuclear fuel cycle operations.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Asset-Backed Token</span>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">1:1 Promethium-147 Isotope Token</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Every token is backed 1:1 by refined promethium-147 isotopes stored in secured, specialized nuclear material facilities. High-purity promethium-147, ready for nuclear battery production and specialized applications. Always redeemable for physical promethium on demand subject to appropriate handling and transport protocols.</p>
              <ul className="space-y-3">
                {['Backed 1:1 by refined promethium-147 isotopes (high-purity grade)', 'Always redeemable for physical promethium delivery on demand', 'Stored in secured, independently audited nuclear material facilities', 'On-chain proof-of-reserves with real-time tracking', 'Fractional ownership, 24/7 tradeable, instant stablecoin settlement', 'Ready for industrial end-use: nuclear batteries, space power, betavoltaic devices, specialized luminescence'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Future Delivery Contract</span>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">In-Ground Promethium</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Tokenized future delivery contracts for physical promethium from nuclear reactor fuel cycles where promethium is recovered as a fission product byproduct. Access promethium at pre-production economics, with delivery windows from months to years.</p>
              <ul className="space-y-3">
                {['Backed by proven promethium recovery from nuclear fuel reprocessing facilities', 'Pre-production pricing with built-in supply scarcity premium', 'On-chain reserve tracking with production facility transparency', 'Physical delivery or settlement at maturity', 'Verified production capacity with third-party facility audits', 'Designed for institutional, sovereign, and long-duration strategies'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100">
              <span className="inline-block text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">Short-Term Delivery</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">1 &ndash; 12 Months</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Near-term promethium delivery contracts tied to active nuclear fuel reprocessing operations with promethium recovery approaching production. Ideal for space agencies, nuclear battery manufacturers, near-term portfolio allocation, and buyers seeking defined delivery timelines with transparent production verification.</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 md:p-8 border border-orange-100">
              <span className="inline-block text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">Long-Term Delivery</span>
              <h3 className="text-xl font-medium text-gray-900 mb-2">1 &ndash; 6 Years</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Strategic promethium positions backed by proven recovery capacity at nuclear fuel cycle facilities. Built for sovereign wealth funds, space agencies, defense contractors, and forward-looking investors positioning for the multi-year promethium supply deficit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Promethium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with nuclear fuel reprocessing facilities and specialized isotope production centers, securing promethium assets at the producer level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'United States', desc: 'United States nuclear facilities recover promethium-147 from spent nuclear fuel reprocessing and target irradiation programs. Oak Ridge National Laboratory and specialized isotope production facilities supply promethium for space missions and research applications. Domestic production is classified and limited.' },
              { region: 'Russia', desc: 'Russia operates specialized isotope production reactors and fuel reprocessing facilities recovering promethium-147 from nuclear fuel cycles. Russian facilities have historically supplied promethium for Soviet and international space programs. Export restrictions and geopolitical tensions constrain international availability.' },
              { region: 'Europe (France & UK)', desc: 'France\'s nuclear fuel reprocessing facilities and UK\'s specialized isotope production capabilities recover small quantities of promethium-147. European Space Agency requirements and research institutions create domestic demand that limits export availability.' },
              { region: 'China', desc: 'China\'s expanding nuclear fuel cycle infrastructure includes promethium recovery capabilities for domestic space program and nuclear battery development. Chinese production is directed toward national space missions and strategic applications with minimal international trade.' },
              { region: 'Japan & South Korea', desc: 'Japan and South Korea\'s nuclear research facilities produce limited quantities of promethium-147 for specialized applications. Production is primarily for domestic research and development programs.' },
              { region: 'Future Production Capacity', desc: 'Expansion of nuclear fuel reprocessing facilities and dedicated isotope production reactors could increase global promethium supply, offering future production capacity positions as nuclear energy and space exploration accelerate.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with nuclear fuel reprocessing facilities and isotope production centers. Better pricing, verified provenance, and a transparent chain of custody from production to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5B: INVESTORS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Investors</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Who Buys Tokenized Promethium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance serves three distinct categories of buyers, each with different motivations for accessing tokenized promethium and In-Ground Promethium contracts.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 1</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Clients</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Organizations that need physical promethium directly for specialized applications. They purchase tokenized promethium for guaranteed supply, streamlined procurement, and physical redemption.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Space agencies and aerospace contractors (NASA, ESA, SpaceX, Blue Origin), nuclear battery manufacturers, betavoltaic device developers, deep-space mission equipment manufacturers, satellite power system producers, autonomous sensor manufacturers, defense contractors and military applications, nuclear research institutions, medical device developers (implantable power sources), specialized luminescence manufacturers.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 2</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors &amp; Commodity Brokers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Mid-size and smaller investment firms, commodity brokers, family offices, and individual investors who typically cannot access promethium at any scale due to extreme scarcity and production restrictions.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Toto Finance democratizes access to institutional-grade promethium positions. Fractional ownership, no minimum gram requirements, secured storage management, and no counterparty risk through intermediaries. Access to the rarest nuclear material through blockchain infrastructure.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 3</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Crypto-Native Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Blockchain-native organizations and investors seeking real-world asset diversification, on-chain yield, and unique commodity-backed collateral for DeFi strategies.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Crypto hedge funds and digital asset funds, blockchain infrastructure foundations and protocol treasuries, DeFi protocols seeking real-world collateral, crypto-native investors diversifying into commodity-backed tokens, DAOs and decentralized investment vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5C: INSTANT SETTLEMENT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Global Trade</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Instant Settlement, No Banks</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Traditional nuclear materials trading involves extensive regulatory approvals, multiple intermediaries, banks, clearing houses, and custodians that delay settlement by weeks or months. Toto Finance streamlines the process while maintaining full compliance.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Traditional Nuclear Material Trade</h3>
              <p className="text-sm text-gray-500 mb-6">Multiple Intermediaries, Weeks to Settle</p>
              <div className="space-y-3">
                {['Nuclear Facility / Producer', 'Isotope Supplier / Broker', 'Regulatory Approvals', 'Commodity Broker / Trader', 'Clearing House', 'Custodian Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-500">{i + 1}</div><span className="text-sm text-gray-700">{step}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100"><p className="text-sm text-red-600 font-medium">Settlement: T+5 to T+30 (or longer)</p></div>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">Toto Finance</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer &harr; Seller, Direct Match</p>
              <div className="space-y-3">
                {['Nuclear Facility / Producer', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">{i + 1}</div><span className="text-sm">{step}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10"><p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p></div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">Similar to how Amazon and eBay match buyers and sellers directly for physical goods, Toto Finance uses blockchain technology to connect promethium producers with buyers, eliminating intermediaries while maintaining full regulatory compliance and secured storage protocols.</p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6">Instant Settlement with Stablecoins</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'USDC', issuer: 'Circle', desc: 'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration across all major chains.' },
              { name: 'USDT', issuer: 'Tether', desc: 'The highest-liquidity stablecoin in the world with over $140 billion in circulation. The default settlement currency for global crypto trading and commodity markets.' },
              { name: 'USAT', issuer: 'Tether (US Framework)', desc: 'Tether\'s US stablecoin under the GENIUS Act framework. Designed for compliant domestic transactions, bridging traditional finance with digital asset infrastructure.' },
            ].map((coin, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">{coin.name.charAt(0)}</div><div><p className="font-semibold text-gray-900">{coin.name}</p><p className="text-xs text-gray-500">{coin.issuer}</p></div></div>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">DeFi Trading, Yield &amp; Collateral Loans</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Once tokenized promethium is purchased on Toto Finance, secondary trading happens on DeFi platforms globally. Hold, trade, hedge, earn yield, or borrow against your promethium. All on-chain. All programmable.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Global Secondary Trading', desc: 'Tokenized promethium trades 24/7 on decentralized exchanges and DeFi platforms worldwide. Buy, sell, and transfer promethium tokens across chains without gatekeepers, brokers, or trading hour restrictions. True global liquidity for the rarest nuclear material.' },
              { title: 'On-Chain Yield', desc: 'Earn yield by exposing promethium assets to smart contract yield contracts. Lend tokenized promethium to short sellers or leveraged long traders who borrow assets and pay interest. Passive income backed by physical nuclear materials.' },
              { title: 'Collateral Loans', desc: 'Use tokenized promethium as collateral for on-chain loans. Borrow stablecoins against promethium holdings without selling the underlying asset. All managed at the protocol level — no bank approval, no credit checks, no delays.' },
              { title: 'Programmable Finance', desc: 'Collateral loans backed by tokenized promethium represent a new programmable financial model. Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical nuclear material value meets decentralized infrastructure.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"><h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p></div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Promethium Token</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {['Minted on Toto Finance', 'Purchased with Stablecoins', 'Held, Traded or Transferred', 'Yield, Loans or Hedging', 'Redeemed for Physical Promethium-147'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0">
                  <div className="flex flex-col items-center text-center"><div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">{i + 1}</div><p className="text-xs md:text-sm text-gray-700 max-w-[120px] leading-tight">{step}</p></div>
                  {i < 4 && <svg className="w-5 h-5 text-gray-300 hidden md:block mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Promethium vs. Traditional Nuclear Material Access</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">See how tokenized promethium on Toto Finance compares to traditional nuclear material procurement and physical ownership.</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead><tr className="bg-gray-900 text-white"><th className="px-4 md:px-6 py-4 font-medium">Feature</th><th className="px-4 md:px-6 py-4 font-medium">Direct Procurement</th><th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th><th className="px-4 md:px-6 py-4 font-medium">Physical Promethium</th><th className="px-4 md:px-6 py-4 font-medium">Futures/Derivatives</th></tr></thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Business hours only', '24/7/365', 'Restricted Access', 'N/A (No market)'],
                  ['Settlement', 'T+30 to T+90', 'T+0 (Instant)', 'Weeks to months', 'N/A'],
                  ['Settlement Currency', 'Fiat (wire transfer)', 'USDC, USDT, USAT', 'Wire transfer', 'N/A'],
                  ['Physical Backing', 'Direct ownership', '1:1 Promethium-147', 'Direct ownership', 'N/A'],
                  ['Min. Investment', '$500,000+', 'Fractional (from $1)', '$500,000+', 'N/A'],
                  ['Physical Redemption', 'Yes (complex)', 'Yes', 'Yes', 'N/A'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'N/A'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'N/A'],
                  ['Storage Costs', 'Buyer manages', 'Included', 'Specialized facilities', 'N/A'],
                  ['Intermediaries', 'Multiple + Regulatory', 'Streamlined (P2P)', 'Multiple + Regulatory', 'N/A'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td><td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-amber-50/50">{row[2]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td></tr>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Institutional-Grade Promethium Tokenization</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Transparency, compliance, and programmable infrastructure embedded into every transaction.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Redeemable Assets', desc: 'All tokenized promethium is linked to secured nuclear material storage facilities. Redeem tokens for physical promethium-147 delivery on demand subject to appropriate regulatory protocols and handling requirements.' },
              { title: 'Transparent Reserves', desc: 'On-chain proof-of-reserves, real-time tracking, and third-party audits ensure continuous 1:1 asset backing. Every token is verifiable on the blockchain at any time with secured facility verification.' },
              { title: 'Instant Settlement', desc: 'T+0 settlement with USDC, USDT, and USAT eliminates counterparty risk and delays. Streamlined process while maintaining full regulatory compliance.' },
              { title: 'Programmable Compliance', desc: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on.' },
              { title: 'DeFi Yield & Loans', desc: 'Earn yield through lending protocols, use promethium as collateral for on-chain loans, or hedge positions through smart contracts. Programmable finance for nuclear materials.' },
              { title: 'Multi-Chain Access', desc: 'Tokenized promethium is accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that works best for your strategy.' },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100"><h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOLD 7: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Promethium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized promethium, In-Ground Promethium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <PromethiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Promethium Scarcity Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 280 grams of promethium by 2030. Supply will deliver only 120 grams. Toto Finance is building the platform to tokenize promethium &mdash; from 1:1 redeemable refined isotopes to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
          <Link href="/products" className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Early Access
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>

      {/* ===================== NEWSLETTER + FOOTER ===================== */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}
