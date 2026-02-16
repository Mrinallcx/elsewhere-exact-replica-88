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
const LanthanumTickerBar = dynamicImport(
  () => import('../components/client/LanthanumTickerBar').then((mod) => ({ default: mod.LanthanumTickerBar }))
);
const LanthanumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized lanthanum?',
    answer:
      'Tokenized lanthanum is a blockchain-based digital asset backed 1:1 by refined lanthanum oxide (La₂O₃) stored in insured, audited vaults. High-purity lanthanum oxide (99.9%+ La₂O₃), ready for FCC catalyst production, optical glass manufacturing, and battery applications. Each token is always redeemable for physical lanthanum on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Lanthanum by Toto Finance?',
    answer:
      'In-Ground Lanthanum is a tokenized future delivery contract for physical lanthanum still in the ground at certified rare earth mining operations. Short-term delivery (1-12 months) is tied to active mines, and long-term delivery (1-6 years) is backed by proven reserves at earlier-stage operations. Designed for petroleum refiners, optical manufacturers, automotive companies, sovereign wealth funds, and investors positioning for the structural lanthanum deficit.',
  },
  {
    question: 'Where does Toto Finance source its lanthanum?',
    answer:
      'Toto Finance works directly with rare earth mining companies and processing facilities across China (85% of production from Bayan Obo and ionic clay deposits), North America (USA and Canada critical mineral operations), Australia (Lynas Rare Earths operations), Southeast Asia and Vietnam (ionic clay and processing facilities), and Brazil/India (monazite and heavy mineral sands). Sourcing covers developed mines in active production and new fields in preparation and exploration. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized lanthanum?',
    answer:
      'Three categories: (1) Industrial clients needing physical lanthanum — petroleum refineries and FCC catalyst manufacturers, optical glass and lens manufacturers, hybrid vehicle and battery manufacturers, LED lighting and phosphor producers, camera and imaging equipment manufacturers, microscope and scientific instrument manufacturers, carbon arc lighting manufacturers, hydrogen storage alloy producers, glass polishing compound manufacturers, and ceramics producers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium lanthanum deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects lanthanum producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized lanthanum on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use lanthanum as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized lanthanum represent a new programmable financial model.',
  },
  {
    question: 'Why is lanthanum essential for petroleum refining?',
    answer:
      'Lanthanum is critical for fluid catalytic cracking (FCC) catalysts that convert heavy crude oil into gasoline and diesel. Lanthanum improves catalyst resistance to metal poisoning from vanadium and nickel impurities in crude oil, increases gasoline yield by 2-4%, and extends catalyst lifespan by 30-50%. Global refining capacity of 100 million barrels per day depends on lanthanum-containing zeolite catalysts. Each barrel of gasoline refined passes through these catalysts, making lanthanum indispensable to global fuel production.',
  },
  {
    question: 'What is the lanthanum price forecast for 2026?',
    answer:
      'Roskill forecasts $2,200/mt in 2026. Critical Minerals Institute projects prices exceeding $2,500/mt by 2027 as petroleum refining, optical glass, and battery demand accelerates while Chinese export restrictions tighten. The structural deficit is expected to intensify through 2030 as hybrid vehicle production scales and LED lighting reaches full market penetration.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, petroleum refiners, optical manufacturers, automotive companies, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedLanthanumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Lanthanum | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized lanthanum by Toto Finance. 1:1 asset-backed lanthanum oxide tokens, always redeemable. In-Ground Lanthanum future delivery contracts."
        url="https://totofinance.co/tokenized-lanthanum"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Lanthanum', item: 'https://totofinance.co/tokenized-lanthanum' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Tokenized Lanthanum', item: 'https://totofinance.co/tokenized-lanthanum' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-cyan-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-cyan-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Lanthanum
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The most abundant rare earth element powering petroleum refining, optical glass, and battery technology is facing structural supply deficits. Toto Finance is building the infrastructure to tokenize lanthanum &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lanthanum Oxide (La&#8322;O&#8323;) / 99.9% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-light text-white">$1,950</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +28% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$1.8B+</p>
                  <p className="text-xs text-gray-500">2025</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">12,500 t</p>
                  <p className="text-xs text-gray-500">Roskill</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$2,200/mt</p>
                  <p className="text-xs text-gray-500">Roskill</p>
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
      <LanthanumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Lanthanum Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Lanthanum Is Critical to Energy and Optics</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of lanthanum. Petroleum refineries, optical glass manufacturers, and battery producers are creating unprecedented demand while global supply remains concentrated and constrained. This is not a cycle. It is an industrial materials crisis.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">12,500 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts a 12,500-tonne lanthanum deficit in 2025, with the gap widening through 2030. Despite being the most abundant rare earth element, lanthanum supply is concentrated in China (85% of production) and constrained by rare earth mining economics. Export restrictions and domestic consumption are limiting global availability.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">40%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Petroleum Catalyst Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Fluid catalytic cracking (FCC) catalysts containing lanthanum are essential for converting heavy crude oil into gasoline and diesel. 40% of global lanthanum demand comes from petroleum refining, where it improves catalyst stability, selectivity, and lifespan. Each barrel of gasoline refined passes through lanthanum-containing catalysts.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">48,000 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global lanthanum demand is projected to reach 128,000 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 80,000 tonnes. The 48,000-tonne gap represents a 38% shortfall, according to Critical Minerals Institute projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: CATALYST & OPTICAL DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Catalysts &amp; Optical Systems</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Energy Transition Is Consuming Lanthanum Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every gallon of gasoline refined, every camera lens manufactured, every hybrid vehicle battery, every LED phosphor requires lanthanum. The element&apos;s unique catalytic and optical properties make it irreplaceable across petroleum refining, advanced optics, and energy storage applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">FCC Petroleum Catalysts (40% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Fluid catalytic cracking units consume 50,000 tonnes of lanthanum annually as zeolite catalyst stabilizers. Lanthanum improves catalyst resistance to metal poisoning from crude oil impurities, increases gasoline yield, and extends catalyst lifespan. Global refining capacity of 100 million barrels per day depends on lanthanum-containing catalysts.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Optical Glass &amp; Camera Lenses</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Lanthanum oxide is essential for high-refractive-index optical glass used in camera lenses, microscopes, telescopes, and precision optical instruments. Lanthanum glass enables lens designs with superior color correction, reduced chromatic aberration, and compact form factors. The optical sector consumes 18,000 tonnes annually.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nickel-Metal Hydride (NiMH) Batteries</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hybrid vehicle batteries use lanthanum-nickel alloy anodes for energy storage. Each Toyota Prius hybrid contains 10&ndash;15 kg of lanthanum in its NiMH battery pack. Despite lithium-ion growth, NiMH batteries remain standard for hybrids due to safety, durability, and temperature performance. Battery demand consumes 22,000 tonnes annually.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">LED &amp; Display Phosphors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Lanthanum-doped phosphors enable blue LED light conversion to white light in solid-state lighting and display backlights. The lighting and display sectors consume 12,000 tonnes annually, with demand growing as LED adoption reaches 85% global penetration by 2028.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Lanthanum Demand Projection (Thousand Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '92.0 kt', note: 'Current' },
                { year: '2028', val: '108.0 kt', note: 'Projected' },
                { year: '2030', val: '128.0 kt', note: 'Projected' },
                { year: '2035', val: '165.0 kt', note: 'Roskill' },
                { year: 'Supply \'30', val: '~80.0 kt', note: 'Gap: 48k+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-cyan-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-cyan-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Institute, USGS, International Rare Earth Association.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Lanthanum Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and processing facilities, securing lanthanum assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 85% of global lanthanum from bastnäsite deposits in Bayan Obo (Inner Mongolia) and ionic clay deposits in southern provinces. China\'s Sichuan province hosts the world\'s largest light rare earth separation facilities processing lanthanum to industrial-grade oxides.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations, including Mountain Pass (California), Bear Lodge (Wyoming), and Nechalacho (Northwest Territories), contain significant lanthanum concentrations as the most abundant rare earth. Critical mineral designation has prioritized domestic rare earth processing.' },
              { region: 'Australia', desc: 'Australia\'s rare earth deposits in Western Australia and Northern Territory produce lanthanum-rich concentrates. Lynas Rare Earths operates the world\'s largest rare earth processing facility outside China, producing lanthanum oxide for global industrial customers.' },
              { region: 'Southeast Asia & Vietnam', desc: 'Vietnam\'s ionic clay deposits and Malaysia\'s Lynas processing facilities produce lanthanum oxide from regional and imported concentrates. Southeast Asian operations provide alternative supply channels outside Chinese-dominated production.' },
              { region: 'Brazil & India', desc: 'Brazil\'s monazite deposits and India\'s coastal heavy mineral sands contain lanthanum as a primary rare earth component. New separation facilities are being developed to extract lanthanum for regional catalyst and optical manufacturing.' },
              { region: 'Exploration & Preparation', desc: 'New rare earth fields in preparation and exploration phases across Africa, Scandinavia, and Greenland, offering In-Ground Lanthanum positions at pre-production economics before reserves reach market.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with rare earth mining companies and separation facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 5B: INVESTORS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Investors</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Who Buys Tokenized Lanthanum</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance serves three distinct categories of buyers, each with different motivations for accessing tokenized lanthanum and In-Ground Lanthanum contracts.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 1</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Clients</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Companies that need physical lanthanum directly for manufacturing and operations. They purchase tokenized lanthanum for guaranteed supply, streamlined procurement, and physical redemption.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Petroleum refineries and FCC catalyst manufacturers, optical glass and lens manufacturers, hybrid vehicle and battery manufacturers, LED lighting and phosphor producers, camera and imaging equipment manufacturers, microscope and scientific instrument manufacturers, carbon arc lighting manufacturers, hydrogen storage alloy producers, glass polishing compound manufacturers, ceramics and specialty glass producers.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 2</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors &amp; Commodity Brokers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Mid-size and smaller investment firms, commodity brokers, family offices, and individual investors who typically cannot access premium lanthanum deals at the pricing and scale that major institutions command.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Toto Finance democratizes access to institutional-grade lanthanum positions. Fractional ownership, no minimum tonnage requirements, no warehouse logistics, and no counterparty risk through intermediaries. The same lanthanum, at competitive pricing, accessible to everyone.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 3</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Crypto-Native Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Blockchain-native organizations and investors seeking real-world asset diversification, on-chain yield, and commodity-backed collateral for DeFi strategies.</p>
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
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Traditional rare earth trading involves a chain of middlemen, brokers, banks, clearing houses, and custodians that delay settlement by days or weeks and extract fees at every step. Toto Finance removes them all.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Traditional Rare Earth Trade</h3>
              <p className="text-sm text-gray-500 mb-6">7+ Intermediaries, Days to Settle</p>
              <div className="space-y-3">
                {['Mining Company / Producer', 'Processing Facility / Separation Plant', 'Commodity Broker / Trader', 'Clearing House', 'Custodian Bank', 'Correspondent Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-500">{i + 1}</div><span className="text-sm text-gray-700">{step}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100"><p className="text-sm text-red-600 font-medium">Settlement: T+2 to T+5 (or longer)</p></div>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">Toto Finance</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer &harr; Seller, Direct Match</p>
              <div className="space-y-3">
                {['Mining Company / Producer', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3"><div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">{i + 1}</div><span className="text-sm">{step}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10"><p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p></div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">Similar to how Amazon and eBay match buyers and sellers directly for physical goods, Toto Finance uses blockchain technology to connect lanthanum producers with buyers, eliminating banks, clearing houses, and settlement agents entirely.</p>
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
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Once tokenized lanthanum is purchased on Toto Finance, secondary trading happens on DeFi platforms globally. Hold, trade, hedge, earn yield, or borrow against your lanthanum. All on-chain. All programmable.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Global Secondary Trading', desc: 'Tokenized lanthanum trades 24/7 on decentralized exchanges and DeFi platforms worldwide. Buy, sell, and transfer lanthanum tokens across chains without gatekeepers, brokers, or trading hour restrictions. True global liquidity.' },
              { title: 'On-Chain Yield', desc: 'Earn yield by exposing lanthanum assets to smart contract yield contracts. Lend tokenized lanthanum to short sellers or leveraged long traders who borrow assets and pay interest. Passive income backed by physical rare earth metals.' },
              { title: 'Collateral Loans', desc: 'Use tokenized lanthanum as collateral for on-chain loans. Borrow stablecoins against lanthanum holdings without selling the underlying asset. All managed at the protocol level — no bank approval, no credit checks, no delays.' },
              { title: 'Programmable Finance', desc: 'Collateral loans backed by tokenized lanthanum represent a new programmable financial model. Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical rare earth value meets decentralized infrastructure.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"><h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p></div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Lanthanum Token</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {['Minted on Toto Finance', 'Purchased with Stablecoins', 'Held, Traded or Transferred', 'Yield, Loans or Hedging', 'Redeemed for Physical Lanthanum Oxide'].map((step, i) => (
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Lanthanum vs. Traditional Rare Earth Investment</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">See how tokenized lanthanum on Toto Finance compares to traditional rare earth ETFs, futures contracts, and physical ownership.</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead><tr className="bg-gray-900 text-white"><th className="px-4 md:px-6 py-4 font-medium">Feature</th><th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th><th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th><th className="px-4 md:px-6 py-4 font-medium">Physical Lanthanum</th><th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th></tr></thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / Dealer', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic / Basket', '1:1 Lanthanum Oxide', 'Direct ownership', 'No (equity)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$10,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'None'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td><td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-cyan-50/50">{row[2]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td></tr>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Institutional-Grade Lanthanum Tokenization</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Transparency, compliance, and programmable infrastructure embedded into every transaction.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Redeemable Assets', desc: 'All tokenized lanthanum is linked to insured vaults and custody facilities. Redeem tokens for physical lanthanum oxide delivery on demand. High-purity grade (99.9%+ La₂O₃), ready for industrial use.' },
              { title: 'Transparent Reserves', desc: 'On-chain proof-of-reserves, real-time oracle feeds, and third-party audits ensure continuous 1:1 asset backing. Every token is verifiable on the blockchain at any time.' },
              { title: 'Instant Settlement', desc: 'T+0 settlement with USDC, USDT, and USAT eliminates counterparty risk and delays. No banks, no clearing houses, no intermediaries.' },
              { title: 'Programmable Compliance', desc: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on.' },
              { title: 'DeFi Yield & Loans', desc: 'Earn yield through lending protocols, use lanthanum as collateral for on-chain loans, or hedge positions through smart contracts. Programmable finance for physical assets.' },
              { title: 'Multi-Chain Access', desc: 'Tokenized lanthanum is accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that works best for your strategy.' },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Lanthanum</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized lanthanum, In-Ground Lanthanum, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <LanthanumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Lanthanum Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 128,000 tonnes of lanthanum by 2030. Supply will fall short by over 48,000 tonnes. Toto Finance is building the platform to tokenize lanthanum &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
