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
const EuropiumTickerBar = dynamicImport(
  () => import('../components/client/EuropiumTickerBar').then((mod) => ({ default: mod.EuropiumTickerBar }))
);
const EuropiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized europium?',
    answer:
      'Tokenized europium is a blockchain-based digital asset backed 1:1 by refined europium oxide (Eu₂O₃) stored in insured, audited vaults. High-purity europium oxide (99.99%+ Eu₂O₃), ready for phosphor manufacturing and display applications. Each token is always redeemable for physical europium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Europium by Toto Finance?',
    answer:
      'In-Ground Europium is a tokenized future delivery contract for physical europium still in the ground at certified rare earth mining operations. Short-term delivery (1-12 months) is tied to active mines, and long-term delivery (1-6 years) is backed by proven reserves at earlier-stage operations. Designed for technology manufacturers, sovereign wealth funds, and investors positioning for the structural europium deficit.',
  },
  {
    question: 'Where does Toto Finance source its europium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and separation facilities across China and Southeast Asia (primary production centers), North America (USA and Canada), Australia, and Brazil. Sourcing covers developed mines in active production and new fields in preparation and exploration. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized europium?',
    answer:
      'Three categories: (1) Industrial clients needing physical europium — display panel manufacturers (OLED, LCD, quantum dot), LED lighting producers, phosphor suppliers, consumer electronics manufacturers, security printing companies, government mints, medical imaging equipment manufacturers, laser and optical manufacturers, nuclear applications, and glass/ceramic producers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium rare earth deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects europium producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized europium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use europium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized europium represent a new programmable financial model.',
  },
  {
    question: 'Why is europium the rarest commercial rare earth element?',
    answer:
      'Europium represents only 0.05% of rare earth deposits, making it the rarest commercially viable rare earth element. 95% of demand comes from phosphor applications where no substitute matches its red light emission properties. China produces 85% of global supply, and separation to 99.99%+ purity requires specialized facilities that exist in only a handful of locations worldwide.',
  },
  {
    question: 'What is the europium price forecast for 2026?',
    answer:
      'Roskill forecasts $950,000/mt in 2026. Adamas Intelligence projects prices exceeding $1,000,000/mt by 2027 as display manufacturing accelerates. The structural deficit is expected to persist and intensify through 2030 as OLED, MicroLED, and quantum dot display production scales globally.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, display manufacturers, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedEuropiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Europium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized europium by Toto Finance. 1:1 asset-backed rare earth tokens, always redeemable. In-Ground Europium future delivery contracts."
        url="https://totofinance.co/tokenized-europium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Europium', item: 'https://totofinance.co/tokenized-europium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-violet-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-violet-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Europium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The rare earth element powering display technology and energy-efficient lighting is facing unprecedented demand. Toto Finance is building the infrastructure to tokenize europium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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

              </div>
          </div>
          </div>
      </section>

      {/* ===================== FOLD 2: TICKER + THE EUROPIUM CRISIS ===================== */}
      <EuropiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Europium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Europium Is the Rarest Commercial Rare Earth
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            The world is running out of europium. Display manufacturers, LED lighting producers, and security applications are creating unprecedented demand while global supply remains the most constrained of all rare earth elements. This is not a cycle. It is a materials bottleneck.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">180 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adamas Intelligence forecasts a 180-tonne europium deficit in 2025, with the gap widening through 2030. Europium is the rarest commercially viable rare earth element, representing just 0.05% of rare earth deposits globally.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">95%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Display &amp; Lighting Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Europium is irreplaceable as the red phosphor in LED displays, television screens, fluorescent lighting, and energy-efficient bulbs. 95% of global europium demand comes from phosphor applications where no substitute provides equivalent color purity and efficiency.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">650 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global europium demand is projected to reach 1,250 tonnes per year by 2030, while supply from existing and planned mines will deliver only 600 tonnes. The 650-tonne gap represents a 52% shortfall, according to Roskill projections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: DISPLAY & LIGHTING DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Display Technology &amp; Lighting</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Display Revolution Is Consuming Europium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Every LED screen manufactured, every energy-efficient light installed, every security feature printed requires europium. The element&apos;s unique luminescent properties at specific wavelengths make it irreplaceable in modern display and lighting technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">OLED &amp; Quantum Dot Displays</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Next-generation OLED and quantum dot displays require europium-doped phosphors for red color reproduction. The premium display market is growing at 18% CAGR, with each square meter of display consuming 2&ndash;4 grams of europium oxide.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">LED Lighting Transition</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The global transition from incandescent to LED lighting is driving massive europium demand. LED bulbs use europium-activated yttrium oxide (Y&#8322;O&#8323;:Eu&#179;&#8314;) red phosphor. With 8 billion LED bulbs sold annually, lighting consumes 420 tonnes of europium per year.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">MicroLED &amp; AR/VR Displays</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MicroLED technology for AR/VR headsets and ultra-high-resolution displays requires europium for pixel-level red light emission. Apple, Meta, and Samsung&apos;s combined display investments exceed $30 billion, all dependent on europium phosphors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Anti-Counterfeiting &amp; Security</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Europium compounds are embedded in currency, passports, secure documents, and pharmaceutical packaging for UV authentication. The security printing market consumes 85 tonnes annually, with governments stockpiling supply due to sovereignty concerns.
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Europium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '640 t', note: 'Current' },
                { year: '2028', val: '890 t', note: 'Projected' },
                { year: '2030', val: '1,250 t', note: 'Projected' },
                { year: '2035', val: '1,850 t', note: 'Roskill' },
                { year: 'Supply \'30', val: '~600 t', note: 'Gap: 650+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-violet-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-violet-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Adamas Intelligence, USGS, MarketsandMarkets.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Europium Comes From
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance works directly with rare earth mining companies and separation facilities, securing europium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China & Southeast Asia', desc: 'China produces 85% of global europium from ionic clay deposits in Jiangxi and Guangdong provinces. Southeast Asian processing facilities in Malaysia and Vietnam handle separation and purification to 99.99%+ grades.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations, including Mountain Pass (California), Bear Lodge (Wyoming), and Quebec projects. Critical mineral designation has prioritized europium for domestic technology supply chains.' },
              { region: 'Australia', desc: 'Australia\'s heavy rare earth deposits in Western Australia and Northern Territory contain europium-rich monazite. Key source for allied technology manufacturing and Western supply chain diversification.' },
              { region: 'Brazil & South America', desc: 'Brazil hosts significant europium reserves in monazite deposits. South American rare earth projects are emerging as alternative sources outside Chinese supply chains.' },
              { region: 'Developed Mines', desc: 'Established rare earth mines in active production, delivering consistent europium output with proven separation technology and full purification infrastructure.' },
              { region: 'Exploration & Preparation', desc: 'New rare earth fields in preparation and exploration phases, offering In-Ground Europium positions at pre-production economics before reserves reach market.' },
            ].map((source, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with rare earth mining companies and separation facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Europium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Everything About Tokenized Europium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized europium, In-Ground Europium, instant settlement, and DeFi secondary markets on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <EuropiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            The Europium Deficit Is Here
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            The world needs 1,250 tonnes of europium by 2030. Supply will fall short by over 650 tonnes. Toto Finance is building the platform to tokenize europium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
