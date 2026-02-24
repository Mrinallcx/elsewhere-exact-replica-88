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
const ScandiumTickerBar = dynamicImport(
  () => import('../components/client/ScandiumTickerBar').then((mod) => ({ default: mod.ScandiumTickerBar }))
);
const ScandiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized scandium?',
    answer:
      'Tokenized scandium is a blockchain-based digital asset backed 1:1 by refined scandium oxide (Sc\u2082O\u2083) stored in insured, audited vaults. High-purity scandium oxide (99.9%+ Sc\u2082O\u2083), ready for aluminum-scandium master alloy production and solid oxide fuel cell manufacturing. Each token is always redeemable for physical scandium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Scandium by Toto Finance?',
    answer:
      'In-Ground Scandium is a tokenized future delivery contract for physical scandium still in the ground at certified rare earth and nickel mining operations where scandium is recovered as a byproduct. Short-term delivery (1-12 months) is tied to active operations, and long-term delivery (1-6 years) is backed by proven scandium content in ore reserves. Designed for aerospace manufacturers, aluminum producers, sovereign wealth funds, and investors positioning for the structural scandium deficit.',
  },
  {
    question: 'Where does Toto Finance source its scandium?',
    answer:
      'Toto Finance works directly with mining companies and scandium recovery facilities across China (60% of production from ionic clay and TiO\u2082 waste streams), Russia and Kazakhstan (uranium tailings and apatite byproduct), Australia (nickel laterite deposits), North America (USA and Canada rare earth and uranium tailings), and Philippines/Southeast Asia (nickel laterite operations). Sourcing covers developed operations in active production and new scandium recovery projects in preparation. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized scandium?',
    answer:
      'Three categories: (1) Industrial clients needing physical scandium \u2014 aerospace manufacturers and aircraft component producers, aluminum alloy producers and master alloy manufacturers, electric vehicle manufacturers, solid oxide fuel cell developers, 3D printing and additive manufacturing companies, sporting goods manufacturers, defense contractors, marine and shipbuilding companies, high-performance automotive manufacturers, and electronics equipment producers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium scandium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      "Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether's US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects scandium producers with buyers on-chain.",
  },
  {
    question: 'Can I trade tokenized scandium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use scandium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized scandium represent a new programmable financial model.',
  },
  {
    question: 'Why is scandium called the "magic ingredient" for aluminum alloys?',
    answer:
      'Adding just 0.1-0.15% scandium to aluminum increases tensile strength by 300%, reduces weight by 20%, improves corrosion resistance, and maintains excellent weldability \u2014 properties impossible to achieve with any other alloying element. A Boeing 787 using scandium alloys throughout could save 15,000 kg of weight, reducing fuel costs by $2 million annually. This transformative performance explains why scandium prices reached $4,800/kg despite chronic supply shortages preventing widespread adoption.',
  },
  {
    question: 'What is the scandium price forecast for 2026?',
    answer:
      'Roskill forecasts $5,500/kg in 2026. Critical Minerals Institute projects prices exceeding $6,000/kg by 2027 as aerospace and fuel cell demand accelerates while supply remains constrained. The structural deficit is expected to intensify through 2030 as new mining operations struggle to ramp scandium recovery infrastructure at scale.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, aerospace manufacturers, aluminum producers, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedScandiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Scandium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized scandium by Toto Finance. 1:1 asset-backed scandium oxide tokens, always redeemable. In-Ground Scandium future delivery contracts."
        url="https://totofinance.co/tokenized-scandium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Scandium', item: 'https://totofinance.co/tokenized-scandium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-zinc-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-zinc-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Scandium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The ultra-rare element revolutionizing aerospace aluminum alloys and solid oxide fuel cells is facing critical supply shortages. Toto Finance is building the infrastructure to tokenize scandium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Scandium Oxide (Sc&#x2082;O&#x2083;) / 99.9% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Scandium Market</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-light text-white">$4,800/kg</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +127% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$180M+</p>
                  <p className="text-xs text-gray-500">Global</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">18 t</p>
                  <p className="text-xs text-gray-500">Tonnes</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$5,500/kg</p>
                  <p className="text-xs text-gray-500">Per Kilogram</p>
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
      <ScandiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Scandium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Scandium Is the Most Transformative Metal for Aerospace</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of scandium. Aerospace manufacturers, electric vehicle producers, and fuel cell developers are creating unprecedented demand while global supply remains nearly non-existent. This is not a cycle. It is a materials revolution waiting for supply infrastructure.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">18 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts an 18-tonne scandium deficit in 2025, with the gap widening through 2030. Global primary scandium production is only 25 tonnes annually &mdash; less than the weight of a single commercial aircraft. No dedicated scandium mines exist; all production comes as a byproduct of other mining.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">0.15%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trace Addition, Massive Impact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Adding just 0.1&ndash;0.15% scandium to aluminum alloys increases strength by 300%, reduces weight by 20%, and improves corrosion resistance while maintaining weldability. This game-changing property makes scandium aluminum alloys the holy grail for aerospace weight reduction, yet supply constraints prevent widespread adoption.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">45 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global scandium demand is projected to reach 95 tonnes per year by 2030, while supply from existing and planned operations will deliver only 50 tonnes. The 45-tonne gap represents a 47% shortfall, according to Critical Minerals Institute projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: AEROSPACE & FUEL CELL DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Aerospace &amp; Energy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Lightweight Revolution Is Exhausting Scandium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every pound of weight removed from an aircraft saves millions of dollars in fuel over its lifetime. Every solid oxide fuel cell requires scandium-stabilized zirconia electrolytes. The element&apos;s unique properties make it irreplaceable for next-generation aerospace and clean energy applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-zinc-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Aerospace Weight Reduction</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Aluminum-scandium alloys enable 20% weight reduction in aircraft structures while increasing strength 3x. A single Boeing 787 could save 15,000 kg using scandium alloys throughout, reducing fuel consumption by $2 million annually. Airbus has tested scandium alloys extensively but cannot secure supply at scale.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Solid Oxide Fuel Cells (SOFCs)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Scandium-stabilized zirconia (ScSZ) electrolytes enable solid oxide fuel cells to operate at lower temperatures (650&deg;C vs 800&deg;C), dramatically improving efficiency and durability. SOFCs for distributed power generation and industrial applications consume 12 tonnes of scandium annually, with demand growing at 35% CAGR.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Electric Vehicle Lightweighting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Electric vehicles require extreme lightweighting to offset heavy battery packs. Scandium aluminum alloys in structural components can reduce vehicle weight by 100&ndash;150 kg, extending range by 15&ndash;20%. Tesla, Rivian, and Chinese EV makers are testing scandium alloys but face supply scarcity preventing mass adoption.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">3D Printing Revolution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Aluminum-scandium alloy powders for additive manufacturing enable complex aerospace and automotive components impossible with traditional alloys. The 3D printing sector consumes 8 tonnes annually, with demand accelerating at 28% CAGR as metal additive manufacturing scales for production applications.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Scandium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '38 t', note: 'Current' },
                { year: '2028', val: '62 t', note: 'Projected' },
                { year: '2030', val: '95 t', note: 'Roskill' },
                { year: '2035', val: '160 t', note: 'Roskill' },
                { year: "Supply '30", val: '~50 t', note: 'Gap: 45+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-zinc-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-zinc-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Institute, USGS, Scandium International Mining Corp.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Scandium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth and nickel mining companies with scandium recovery capabilities, securing scandium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 60% of global scandium from ionic clay deposits and titanium dioxide production waste streams in Sichuan and Guangdong provinces. Chinese scandium is primarily consumed domestically for aluminum alloys and fuel cell applications.' },
              { region: 'Russia & Kazakhstan', desc: 'Russia and Kazakhstan produce scandium as a byproduct of uranium mining tailings and apatite processing. Russian scandium operations have ramped production to capture premium pricing but face export restrictions similar to other strategic materials.' },
              { region: 'Australia', desc: 'Australia hosts scandium-bearing laterite nickel deposits in New South Wales and Queensland. Clean TeQ and Scandium International Mining are developing dedicated scandium recovery operations targeting aerospace-grade oxide production.' },
              { region: 'North America (USA & Canada)', desc: "United States operations in Alaska, Idaho, and Nevada are developing scandium recovery from rare earth and uranium tailings. Canada's Quebec rare earth projects include scandium recovery infrastructure as byproduct revenue streams." },
              { region: 'Philippines & Southeast Asia', desc: 'Philippines nickel laterite operations contain significant scandium concentrations. New extraction technologies enable economic scandium recovery from nickel processing waste streams, with several operations under development.' },
              { region: 'Exploration & Preparation', desc: 'New mining fields in preparation and exploration phases across Africa, South America, and Scandinavia, offering In-Ground Scandium positions at pre-production economics before reserves reach market.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with mining companies and scandium recovery facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Scandium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Scandium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized scandium, In-Ground Scandium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <ScandiumFAQ faqs={faqData} />
        </div>
      </section>


      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Scandium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 95 tonnes of scandium by 2030. Supply will fall short by over 45 tonnes. Toto Finance is building the platform to tokenize scandium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
