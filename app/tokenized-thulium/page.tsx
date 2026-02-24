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
const ThuliumTickerBar = dynamicImport(
  () => import('../components/client/ThuliumTickerBar').then((mod) => ({ default: mod.ThuliumTickerBar }))
);
const ThuliumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized thulium?',
    answer:
      'Tokenized thulium is a blockchain-based digital asset backed 1:1 by refined thulium oxide (Tm\u2082O\u2083) stored in insured, audited vaults. High-purity thulium oxide (99.9%+ Tm\u2082O\u2083), ready for medical laser fiber production and radioisotope applications. Each token is always redeemable for physical thulium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Thulium by Toto Finance?',
    answer:
      'In-Ground Thulium is a tokenized future delivery contract for physical thulium still in the ground at certified rare earth mining operations with heavy rare earth content. Short-term delivery (1-12 months) is tied to active operations, and long-term delivery (1-6 years) is backed by proven thulium content in heavy rare earth reserves. Designed for medical device manufacturers, radioisotope producers, sovereign wealth funds, and investors positioning for the structural thulium deficit.',
  },
  {
    question: 'Where does Toto Finance source its thulium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities across China (91% of production from ionic clay deposits), North America (USA and Canada developing specialized extraction for medical device security), Australia (Northern Territory and Western Australia heavy rare earth deposits), Southeast Asia and Vietnam (ionic clay with significant thulium concentrations), and Greenland/Scandinavia (strategic European supply). Sourcing covers developed operations in active production and new heavy rare earth projects in preparation. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized thulium?',
    answer:
      'Three categories: (1) Industrial clients needing physical thulium \u2014 medical laser manufacturers and surgical equipment companies, urology and minimally invasive surgery device manufacturers, portable X-ray and diagnostic imaging equipment producers, hospital surgical centers and laser surgery providers, industrial radiography and NDT equipment manufacturers, nuclear medicine and radioisotope producers, high-temperature superconductor developers, quantum computing hardware manufacturers, laser fiber and optical component manufacturers, and defense/aerospace radiation source producers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium thulium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      "Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether's US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects thulium producers with buyers on-chain.",
  },
  {
    question: 'Can I trade tokenized thulium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use thulium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized thulium represent a new programmable financial model.',
  },
  {
    question: 'Why are thulium fiber lasers replacing holmium lasers in surgery?',
    answer:
      "Thulium fiber lasers operating at 1.94-2.0 \u03BCm offer superior hemostasis, finer tissue ablation, and reduced bleeding compared to holmium lasers at 2.1 \u03BCm. With 450,000 thulium laser procedures performed annually (growing 32% CAGR) and each system containing 30-80g of thulium-doped fiber, urologists are rapidly adopting thulium for kidney stone treatment, prostate surgery, and bladder tumor resection. 85% of thulium demand comes from medical lasers, with supply constrained by global production of only 4.2 tonnes annually.",
  },
  {
    question: 'What is the thulium price forecast for 2026?',
    answer:
      'Roskill forecasts $1,850,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $2,000,000/mt by 2027 as medical laser adoption accelerates and portable X-ray systems scale globally. The structural deficit is expected to intensify through 2030 as minimally invasive surgery adoption grows 32% annually and point-of-care diagnostic imaging expands worldwide.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, medical device manufacturers, radioisotope producers, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedThuliumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Thulium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized thulium by Toto Finance. 1:1 asset-backed thulium oxide tokens, always redeemable. In-Ground Thulium future delivery contracts."
        url="https://totofinance.co/tokenized-thulium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Thulium', item: 'https://totofinance.co/tokenized-thulium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-pink-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-pink-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Thulium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The ultra-rare element powering medical fiber lasers, portable X-ray systems, and radiation sources is facing critical supply constraints. Toto Finance is building the infrastructure to tokenize thulium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Thulium Oxide (Tm&#x2082;O&#x2083;) / 99.9% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-light text-white">$1,650,000/mt</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +94% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$28M+</p>
                  <p className="text-xs text-gray-500">Global</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">1.8 t</p>
                  <p className="text-xs text-gray-500">Tonnes</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$1,850,000/mt</p>
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
      <ThuliumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Thulium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Thulium Is Critical to Minimally Invasive Surgery</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of thulium. Medical laser manufacturers, portable X-ray developers, and industrial radiation system producers are creating unprecedented demand while global supply remains virtually non-existent. This is not a cycle. It is a medical technology materials emergency.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">1.8 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts a 1.8-tonne thulium deficit in 2025, with the gap widening through 2030. Global thulium production is only 4.2 tonnes annually &mdash; barely enough to supply two major medical laser manufacturers. Thulium is the second-rarest stable rare earth element, making supply fundamentally constrained.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.0 &mu;m</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimal Soft Tissue Wavelength</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Thulium fiber lasers emitting at 1.94&ndash;2.0 micrometers provide the ideal wavelength for soft tissue surgery with superior hemostasis and minimal thermal damage. 85% of global thulium demand comes from medical laser applications including urology, dermatology, and minimally invasive surgery where thulium&apos;s wavelength offers advantages over holmium lasers.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">8.5 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global thulium demand is projected to reach 21 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 12.5 tonnes. The 8.5-tonne gap represents a 40% shortfall, according to Critical Minerals Institute projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: MEDICAL & RADIATION DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Medical Lasers &amp; Radiation Technology</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Surgical Laser Revolution Is Exhausting Thulium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every thulium fiber laser surgery, every portable X-ray scan, every radiation source requires thulium. The element&apos;s unique optical and nuclear properties make it irreplaceable for advanced medical lasers, portable diagnostic imaging, and industrial radiation applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Thulium Fiber Lasers (85% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Thulium fiber lasers are revolutionizing urology, offering superior stone fragmentation, prostate enucleation, and bladder tumor resection compared to holmium lasers. With 450,000 thulium laser procedures performed annually and each laser system containing 30&ndash;80 grams of thulium-doped fiber, medical lasers consume 3.5 tonnes annually, growing at 32% CAGR.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Portable X-Ray Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Thulium-170 isotopes enable compact, portable X-ray devices for field hospitals, emergency response, and remote medical facilities. Each portable X-ray unit requires 5&ndash;15 grams of thulium-170. The portable medical imaging sector consumes 0.4 tonnes annually, with demand accelerating at 28% CAGR as point-of-care diagnostics expand globally.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Radiation Sources</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Thulium-170 sources power industrial radiography for non-destructive testing of welds, castings, and structures in aerospace, oil &amp; gas, and construction. The industrial NDT sector consumes 0.2 tonnes annually, with demand growing as infrastructure inspection requirements intensify.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">High-Temperature Superconductors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Thulium-barium-copper-oxide (TBCO) compounds enable superconducting materials operating above liquid nitrogen temperatures. Quantum computing and MRI applications consume 0.1 tonnes annually, with demand projected to reach 1.5 tonnes by 2030 as quantum hardware commercializes.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Thulium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '6.0 t', note: 'Current' },
                { year: '2028', val: '12.5 t', note: 'Projected' },
                { year: '2030', val: '21.0 t', note: 'Roskill' },
                { year: '2035', val: '38.0 t', note: 'Roskill' },
                { year: "Supply '30", val: '~12.5 t', note: 'Gap: 8.5+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-pink-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-pink-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, American Urological Association.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Thulium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities, securing thulium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 91% of global thulium from ionic clay deposits in southern provinces, particularly Jiangxi, Guangdong, and Fujian. Chinese heavy rare earth separation facilities produce high-purity thulium oxide for medical laser and radioisotope applications, though export restrictions are tightening supply.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations developing heavy rare earth separation capabilities, including specialized extraction for thulium. Critical mineral designation has prioritized domestic thulium supply for medical device and defense radiation source applications.' },
              { region: 'Australia', desc: "Australia's heavy rare earth deposits in Northern Territory and Western Australia contain thulium concentrations. Advanced separation technologies enable economic thulium recovery from xenotime and ionic clay sources for medical applications." },
              { region: 'Southeast Asia & Vietnam', desc: "Vietnam's ionic clay deposits contain significant thulium concentrations. Emerging Southeast Asian heavy rare earth processing facilities are developing specialized thulium extraction capabilities for medical laser supply chains." },
              { region: 'Greenland & Scandinavia', desc: "Greenland's Kvanefjeld project and Scandinavian heavy rare earth deposits contain thulium. Strategic importance for European medical device and scientific research supply chains." },
              { region: 'Exploration & Preparation', desc: 'New heavy rare earth fields in preparation and exploration phases across Africa, South America, and Central Asia, offering In-Ground Thulium positions at pre-production economics before reserves reach market.' },
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
            How Tokenized Thulium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Thulium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized thulium, In-Ground Thulium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <ThuliumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Thulium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 21 tonnes of thulium by 2030. Supply will fall short by over 8.5 tonnes. Toto Finance is building the platform to tokenize thulium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
