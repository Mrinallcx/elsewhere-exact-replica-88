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
const YtterbiumTickerBar = dynamicImport(
  () => import('../components/client/YtterbiumTickerBar').then((mod) => ({ default: mod.YtterbiumTickerBar }))
);
const YtterbiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized ytterbium?',
    answer:
      'Tokenized ytterbium is a blockchain-based digital asset backed 1:1 by refined ytterbium oxide (Yb\u2082O\u2083) stored in insured, audited vaults. High-purity ytterbium oxide (99.9%+ Yb\u2082O\u2083), ready for fiber laser crystal production and quantum computing applications. Each token is always redeemable for physical ytterbium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Ytterbium by Toto Finance?',
    answer:
      'In-Ground Ytterbium is a tokenized future delivery contract for physical ytterbium still in the ground at certified rare earth mining operations with heavy rare earth content. Short-term delivery (1-12 months) is tied to active operations, and long-term delivery (1-6 years) is backed by proven ytterbium content in heavy rare earth reserves. Designed for laser manufacturers, quantum computing developers, sovereign wealth funds, and investors positioning for the structural ytterbium deficit.',
  },
  {
    question: 'Where does Toto Finance source its ytterbium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities across China (87% of production from ionic clay deposits), North America (USA and Canada developing heavy REE separation for defense and advanced manufacturing), Australia (Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay and processing facilities), and Brazil/Madagascar (heavy rare earth projects). Sourcing covers developed operations in active production and new heavy rare earth projects in preparation. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized ytterbium?',
    answer:
      'Three categories: (1) Industrial clients needing physical ytterbium \u2014 industrial fiber laser manufacturers, metal cutting and welding equipment manufacturers, additive manufacturing and 3D printing companies, automotive and aerospace manufacturers, precision timing and atomic clock developers, quantum computing hardware developers, laser crystal and optical component manufacturers, semiconductor manufacturing equipment producers, stainless steel alloy manufacturers, and scientific research institutions. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium ytterbium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      "Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether's US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects ytterbium producers with buyers on-chain.",
  },
  {
    question: 'Can I trade tokenized ytterbium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use ytterbium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized ytterbium represent a new programmable financial model.',
  },
  {
    question: 'Why have ytterbium fiber lasers replaced CO\u2082 lasers in manufacturing?',
    answer:
      'Ytterbium fiber lasers operating at 1.06 \u03BCm deliver 10x higher electrical-to-optical efficiency than CO\u2082 lasers, require no maintenance (no gas refills or alignment), and provide superior beam quality for precision cutting. With 45,000 fiber laser systems shipped annually and automotive/aerospace manufacturers converting entire production lines, ytterbium fiber lasers have captured 65% of the metal cutting and welding market. 75% of ytterbium demand comes from industrial lasers, with additive manufacturing driving additional growth at 28% CAGR.',
  },
  {
    question: 'What is the ytterbium price forecast for 2026?',
    answer:
      'Roskill forecasts $44,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $50,000/mt by 2027 as industrial laser manufacturing, metal 3D printing, and quantum computing accelerate while heavy rare earth production remains constrained. The structural deficit is expected to intensify through 2030 as automated manufacturing adoption and quantum technology commercialization scales globally.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, laser manufacturers, additive manufacturing companies, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedYtterbiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Ytterbium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized ytterbium by Toto Finance. 1:1 asset-backed ytterbium oxide tokens, always redeemable. In-Ground Ytterbium future delivery contracts."
        url="https://totofinance.co/tokenized-ytterbium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Ytterbium', item: 'https://totofinance.co/tokenized-ytterbium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-orange-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-orange-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Ytterbium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The rare earth element powering industrial fiber lasers, atomic clocks, and quantum computing is facing critical supply constraints. Toto Finance is building the infrastructure to tokenize ytterbium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300">
                  Explore the Vision
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ytterbium Oxide (Yb&#x2082;O&#x2083;) / 99.9% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-light text-white">$38,500/mt</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +52% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$185M+</p>
                  <p className="text-xs text-gray-500">Global</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">125 t</p>
                  <p className="text-xs text-gray-500">Tonnes</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$44,000/mt</p>
                  <p className="text-xs text-gray-500">Per Metric Tonne</p>
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
      <YtterbiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Ytterbium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Ytterbium Is Critical to Advanced Manufacturing</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of ytterbium. Industrial laser manufacturers, quantum computing developers, and precision timing systems are creating unprecedented demand while global supply remains critically constrained. This is not a cycle. It is an advanced technology materials crisis.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">125 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts a 125-tonne ytterbium deficit in 2025, with the gap widening through 2030. Global ytterbium production is only 635 tonnes annually from heavy rare earth separation. All production comes as a byproduct, making supply fundamentally constrained as industrial laser manufacturing scales globally.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">1.06 &mu;m</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimal Industrial Laser Wavelength</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ytterbium-doped fiber lasers operating at 1.06 micrometers deliver the highest efficiency and power output for metal cutting, welding, and additive manufacturing. 75% of global ytterbium demand comes from industrial fiber lasers that have replaced CO&#x2082; lasers across automotive, aerospace, and precision manufacturing. There is no substitute.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">480 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global ytterbium demand is projected to reach 1,425 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 945 tonnes. The 480-tonne gap represents a 34% shortfall, according to Critical Minerals Institute projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: FIBER LASER & QUANTUM DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Industrial Lasers &amp; Quantum Technology</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Manufacturing Revolution Is Consuming Ytterbium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every industrial fiber laser cutting metal, every 3D printer building aerospace parts, every atomic clock synchronizing GPS satellites, every quantum computer requires ytterbium. The element&apos;s unique optical and quantum properties make it irreplaceable across advanced manufacturing, precision timing, and quantum computing applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Ytterbium Fiber Lasers (75% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Industrial ytterbium fiber lasers have captured 65% of the metal cutting and welding market, replacing CO&#x2082; laser systems with 10x higher efficiency and lower maintenance. With 45,000 fiber laser systems shipped annually and automotive/aerospace manufacturers converting entire production lines, fiber lasers consume 475 tonnes of ytterbium per year, growing at 18% CAGR.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Metal Additive Manufacturing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ytterbium fiber lasers power selective laser melting (SLM) and direct metal laser sintering (DMLS) systems for aerospace and medical device manufacturing. The metal 3D printing sector consumes 85 tonnes annually, with demand accelerating at 28% CAGR as additive manufacturing scales from prototyping to production.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Atomic Clocks &amp; Precision Timing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ytterbium atomic clocks provide the most stable time reference available, essential for GPS satellites, telecommunications synchronization, and scientific research. Each GPS satellite requires ytterbium atomic clock technology. The precision timing sector consumes 18 tonnes annually, with quantum sensing applications driving 35% growth.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Quantum Computing Qubits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ytterbium ions serve as stable qubits in trapped-ion quantum computers developed by IonQ, Honeywell, and research institutions worldwide. The quantum computing sector consumes 12 tonnes annually, with demand projected to reach 65 tonnes by 2030 as quantum systems scale from research to commercial applications.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Ytterbium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '760 t', note: 'Current' },
                { year: '2028', val: '1,080 t', note: 'Projected' },
                { year: '2030', val: '1,425 t', note: 'Roskill' },
                { year: '2035', val: '2,100 t', note: 'Roskill' },
                { year: "Supply '30", val: '~945 t', note: 'Gap: 480+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-orange-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-orange-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, Laser Institute of America.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Ytterbium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities, securing ytterbium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 87% of global ytterbium from ionic clay deposits in southern provinces, particularly Jiangxi, Guangdong, and Yunnan. Chinese heavy rare earth separation facilities produce ytterbium oxide for domestic laser manufacturing and quantum research, though export quotas are constraining international supply.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations developing heavy rare earth separation capabilities, including Texas, Alaska, and British Columbia projects. Critical mineral designation has prioritized domestic ytterbium supply for defense and advanced manufacturing applications.' },
              { region: 'Australia', desc: "Australia's heavy rare earth deposits in Northern Territory and Western Australia contain ytterbium concentrations. New separation technologies enable economic ytterbium recovery from xenotime and ionic clay sources for fiber laser applications." },
              { region: 'Southeast Asia & Vietnam', desc: "Vietnam's ionic clay deposits and emerging Southeast Asian heavy rare earth processing facilities produce ytterbium oxide from regional mining operations. Alternative supply channels outside Chinese-dominated production for laser and quantum technology supply chains." },
              { region: 'Brazil & Madagascar', desc: "Brazil's monazite deposits and Madagascar's heavy rare earth projects contain ytterbium concentrations. New separation facilities are being developed to extract ytterbium for regional laser manufacturing and research institutions." },
              { region: 'Exploration & Preparation', desc: 'New heavy rare earth fields in preparation and exploration phases across Africa, Scandinavia, and Greenland, offering In-Ground Ytterbium positions at pre-production economics before reserves reach market.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with rare earth mining companies and heavy rare earth separation facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Ytterbium Works
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

      {/* ===================== FOLD 7: FAQ ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Ytterbium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized ytterbium, In-Ground Ytterbium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <YtterbiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Ytterbium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 1,425 tonnes of ytterbium by 2030. Supply will fall short by over 480 tonnes. Toto Finance is building the platform to tokenize ytterbium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
