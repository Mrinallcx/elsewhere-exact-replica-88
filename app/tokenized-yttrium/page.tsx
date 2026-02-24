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
const YttriumTickerBar = dynamicImport(
  () => import('../components/client/YttriumTickerBar').then((mod) => ({ default: mod.YttriumTickerBar }))
);
const YttriumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized yttrium?',
    answer:
      'Tokenized yttrium is a blockchain-based digital asset backed 1:1 by refined yttrium oxide (Y\u2082O\u2083) stored in insured, audited vaults. High-purity yttrium oxide (99.999%+ Y\u2082O\u2083), ready for YAG laser crystal growth, LED phosphor manufacturing, and thermal barrier coatings. Each token is always redeemable for physical yttrium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Yttrium by Toto Finance?',
    answer:
      'In-Ground Yttrium is a tokenized future delivery contract for physical yttrium still in the ground at certified rare earth mining operations. Short-term delivery (1-12 months) is tied to active mines, and long-term delivery (1-6 years) is backed by proven reserves at earlier-stage operations. Designed for industrial manufacturers, sovereign wealth funds, and investors positioning for the structural yttrium deficit.',
  },
  {
    question: 'Where does Toto Finance source its yttrium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and processing facilities across China and Southeast Asia (primary production centers), North America (USA and Canada), Australia, and Brazil/Madagascar. Sourcing covers developed mines in active production and new fields in preparation and exploration. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized yttrium?',
    answer:
      'Three categories: (1) Industrial clients needing physical yttrium \u2014 industrial laser manufacturers (YAG crystals), LED lighting and phosphor producers, aerospace and defense contractors (thermal coatings), ceramic manufacturers (YSZ), medical imaging equipment manufacturers (superconductors), power generation companies, automotive manufacturers, electronics producers, glass and optics manufacturers, and welding equipment producers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium rare earth deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      "Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether's US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects yttrium producers with buyers on-chain.",
  },
  {
    question: 'Can I trade tokenized yttrium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use yttrium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized yttrium represent a new programmable financial model.',
  },
  {
    question: 'Why is yttrium critical across five industries?',
    answer:
      'Yttrium is irreplaceable in: (1) YAG industrial lasers for cutting and welding metals, (2) LED white phosphors for lighting, (3) thermal barrier coatings protecting jet engines at 1,200\u00B0C+, (4) high-temperature superconductors for MRI machines and fusion reactors, and (5) yttria-stabilized zirconia ceramics for aerospace and power generation. No substitute material provides equivalent performance across these applications.',
  },
  {
    question: 'What is the yttrium price forecast for 2026?',
    answer:
      'Roskill forecasts $21,500/mt in 2026. Adamas Intelligence projects prices exceeding $24,000/mt by 2027 as industrial demand accelerates. The structural deficit is expected to persist and widen through 2030 as manufacturing automation, LED adoption, and aerospace production scales globally.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, industrial manufacturers, and commercial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedYttriumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Yttrium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized yttrium by Toto Finance. 1:1 asset-backed rare earth metal tokens, always redeemable. In-Ground Yttrium future delivery contracts."
        url="https://totofinance.co/tokenized-yttrium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Yttrium', item: 'https://totofinance.co/tokenized-yttrium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-stone-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-stone-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Yttrium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The rare earth element powering industrial lasers, LED phosphors, and superconductors is facing structural supply constraints. Toto Finance is building the infrastructure to tokenize yttrium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Yttrium Oxide (Y&#x2082;O&#x2083;) / Global Spot Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-light text-white">$18,400/mt</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +41% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$2.9B+</p>
                  <p className="text-xs text-gray-500">Global</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">3,600 t</p>
                  <p className="text-xs text-gray-500">Tonnes</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$21,500/mt</p>
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
      <YttriumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Yttrium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Yttrium Is Critical Across Five Industries</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of yttrium. Industrial laser manufacturers, LED phosphor producers, ceramic manufacturers, medical device companies, and superconductor developers are creating unprecedented demand while global supply enters a structural deficit. This is not a cycle. It is an industrial materials crisis.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">3,600 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts a 3,600-tonne yttrium deficit in 2025, with the gap widening through 2030. China controls 95% of yttrium production and processing, creating supply chain vulnerability for Western manufacturing.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">70%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Phosphor &amp; Ceramics Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Yttrium is essential for LED phosphors (white light production), yttria-stabilized zirconia ceramics (thermal barrier coatings), and yttrium aluminum garnet (YAG) laser crystals. 70% of global demand comes from these irreplaceable applications.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">12,000 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global yttrium demand is projected to reach 38,500 tonnes per year by 2030, while supply from existing and planned mines will deliver only 26,500 tonnes. The 12,000-tonne gap represents a 31% shortfall, according to Adamas Intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: INDUSTRIAL APPLICATIONS DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Industrial Applications</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Five Industries Competing for Yttrium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every industrial laser cutting metal, every LED producing white light, every jet engine with thermal coatings, every medical imaging device, and every superconductor requires yttrium. The element&apos;s unique physical and chemical properties make it irreplaceable across multiple critical industries.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">YAG Industrial Lasers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Yttrium aluminum garnet (YAG) crystals power industrial cutting, welding, and marking lasers. The global industrial laser market consumes 8,500 tonnes of yttrium annually, with demand growing at 12% CAGR as manufacturing automation accelerates.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">LED White Phosphors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Yttrium oxide (Y&#x2082;O&#x2083;) doped with europium creates the red phosphor component essential for white LED light production. With global LED penetration reaching 75% by 2030, phosphor applications consume 14,000 tonnes of yttrium annually.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Thermal Barrier Coatings</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Yttria-stabilized zirconia (YSZ) thermal barrier coatings protect jet engine turbine blades from 1,200&deg;C+ temperatures. Aerospace and power generation sectors consume 6,200 tonnes annually, with demand accelerating as engine efficiency requirements increase.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Superconductors &amp; Medical Imaging</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Yttrium barium copper oxide (YBCO) high-temperature superconductors enable MRI machines, particle accelerators, and fusion reactor magnets. Medical imaging and quantum computing applications consume 2,800 tonnes annually, growing at 18% CAGR.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Yttrium Demand Projection (Thousand Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '22.3 kt', note: 'Current' },
                { year: '2028', val: '29.8 kt', note: 'Projected' },
                { year: '2030', val: '38.5 kt', note: 'Adamas' },
                { year: '2035', val: '52.0 kt', note: 'Adamas' },
                { year: "Supply '30", val: '~26.5 kt', note: 'Gap: 12k+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-stone-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-stone-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Adamas Intelligence, Roskill, USGS, Industrial Laser Association.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Yttrium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and processing facilities, securing yttrium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China & Southeast Asia', desc: 'China produces 95% of global yttrium from ionic clay deposits in southern provinces and processing facilities in Inner Mongolia. Southeast Asian separation plants in Malaysia process yttrium to 99.999%+ purity grades.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations, including Mountain Pass (California), Bear Lodge (Wyoming), Bokan Mountain (Alaska), and Nechalacho (Northwest Territories). Critical mineral designation prioritizes domestic yttrium supply.' },
              { region: 'Australia', desc: "Australia's rare earth deposits in Western Australia and Northern Territory contain significant yttrium concentrations. Key source for Western supply chain diversification and allied industrial manufacturing." },
              { region: 'Brazil & Madagascar', desc: 'Brazil and Madagascar host yttrium-rich monazite and xenotime deposits. Emerging rare earth projects offering alternative sources outside Chinese-dominated supply chains.' },
              { region: 'Developed Mines', desc: 'Established rare earth mines in active production, delivering consistent yttrium output with proven separation technology and full purification infrastructure to industrial-grade specifications.' },
              { region: 'Exploration & Preparation', desc: 'New rare earth fields in preparation and exploration phases, offering In-Ground Yttrium positions at pre-production economics before reserves reach market.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with rare earth mining companies and processing facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Yttrium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Yttrium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized yttrium, In-Ground Yttrium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <YttriumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Yttrium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 38,500 tonnes of yttrium by 2030. Supply will fall short by over 12,000 tonnes. Toto Finance is building the platform to tokenize yttrium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
