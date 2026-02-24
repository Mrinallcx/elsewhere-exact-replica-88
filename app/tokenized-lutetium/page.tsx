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
const LutetiumTickerBar = dynamicImport(
  () => import('../components/client/LutetiumTickerBar').then((mod) => ({ default: mod.LutetiumTickerBar }))
);
const LutetiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized lutetium?',
    answer:
      'Tokenized lutetium is a blockchain-based digital asset backed 1:1 by refined lutetium oxide (Lu₂O₃) stored in insured, audited vaults. Ultra-high-purity lutetium oxide (99.99%+ Lu₂O₃), ready for PET scintillator crystal production and radiopharmaceutical applications. Each token is always redeemable for physical lutetium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Lutetium by Toto Finance?',
    answer:
      'In-Ground Lutetium is a tokenized future delivery contract for physical lutetium still in the ground at certified rare earth mining operations with heavy rare earth content. Short-term delivery (1-12 months) is tied to active operations, and long-term delivery (1-6 years) is backed by proven lutetium content in heavy rare earth reserves. Designed for medical device manufacturers, radiopharmaceutical companies, sovereign wealth funds, and investors positioning for the structural lutetium deficit.',
  },
  {
    question: 'Where does Toto Finance source its lutetium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and specialized heavy rare earth separation facilities across China (92% of production from ionic clay deposits), North America (USA and Canada developing specialized extraction for medical supply chains), Australia (Northern Territory heavy rare earth deposits), Southeast Asia and Vietnam (highest lutetium concentration deposits globally), and Greenland/Scandinavia (strategic European supply). Sourcing covers developed operations in active production and new specialized lutetium extraction projects. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized lutetium?',
    answer:
      'Three categories: (1) Industrial clients needing physical lutetium — medical imaging equipment manufacturers (PET scanners), scintillator crystal manufacturers (LSO and LYSO), radiopharmaceutical companies (Lu-177 therapies), nuclear medicine centers and hospitals, particle physics laboratories and research institutions, high-energy physics detector manufacturers, precision optics and lens manufacturers, semiconductor lithography equipment producers, advanced laser system manufacturers, and scientific research institutions. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium lutetium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects lutetium producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized lutetium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use lutetium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized lutetium represent a new programmable financial model.',
  },
  {
    question: 'Why is lutetium the most expensive rare earth element?',
    answer:
      'Lutetium is the rarest rare earth at just 0.5 parts per million in the Earth\'s crust, and it\'s the final element in heavy rare earth separation cascades, making extraction extremely challenging and expensive. Global production is only 6.5 tonnes annually — less than a luxury sedan\'s weight. With 90% of demand from medical PET imaging (8 million scans annually, 15-25 kg per scanner) and Lu-177 radiopharmaceuticals growing 45% annually, supply cannot meet accelerating healthcare demand. At $2.85 million per tonne, lutetium trades at 1,460x the price of cerium.',
  },
  {
    question: 'What is the lutetium price forecast for 2026?',
    answer:
      'Roskill forecasts $3,200,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $3,500,000/mt by 2027 as PET scanner installations accelerate globally and Lu-177 cancer therapies gain FDA approvals. The structural deficit is expected to intensify through 2030 as medical imaging demand grows 12% annually and targeted radionuclide therapy adoption scales worldwide.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, medical device manufacturers, radiopharmaceutical companies, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedLutetiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized lutetium by Toto Finance. 1:1 asset-backed lutetium oxide tokens, always redeemable. In-Ground Lutetium future delivery contracts."
        url="https://totofinance.co/tokenized-lutetium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Lutetium', item: 'https://totofinance.co/tokenized-lutetium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-fuchsia-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-fuchsia-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Lutetium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The rarest and most expensive rare earth element powering cancer detection, high-energy physics, and precision optics is facing extreme supply constraints. Toto Finance is building the infrastructure to tokenize lutetium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lutetium Oxide (Lu&#8322;O&#8323;) / 99.99% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-light text-white">$2,850,000</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +118% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$48M+</p>
                  <p className="text-xs text-gray-500">2025</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">2.8 t</p>
                  <p className="text-xs text-gray-500">Roskill</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$3.2M/mt</p>
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
      <LutetiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Lutetium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Lutetium Is the Rarest Rare Earth on Earth</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of lutetium. Medical imaging providers, particle physics laboratories, and precision optics manufacturers are creating unprecedented demand while global supply remains virtually non-existent. This is not a cycle. It is a critical scarcity of the rarest commercial element.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.8 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts a 2.8-tonne lutetium deficit in 2025, with the gap widening through 2030. Global lutetium production is only 6.5 tonnes annually &mdash; less than the weight of a luxury sedan. Lutetium is the rarest and most expensive rare earth element, existing at just 0.5 parts per million in the Earth&apos;s crust.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">90%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical PET Imaging Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Lutetium-177 radioisotopes and lutetium oxyorthosilicate (LSO) crystals power positron emission tomography (PET) scanners for cancer detection and monitoring. 90% of global lutetium demand comes from medical imaging applications where lutetium&apos;s high density and stopping power make it irreplaceable for detecting gamma radiation.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">12 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global lutetium demand is projected to reach 28 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 16 tonnes. The 12-tonne gap represents a 43% shortfall, according to Critical Minerals Institute projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: MEDICAL & SCIENTIFIC DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Medical Imaging &amp; Particle Physics</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Cancer Detection Revolution Is Exhausting Lutetium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every PET scan, every particle detector, every high-refractive lens, every radiation therapy dose requires lutetium. The element&apos;s unique nuclear and optical properties make it irreplaceable for cancer diagnostics, high-energy physics research, and precision optical systems.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-fuchsia-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">PET Imaging Scintillator Crystals (90% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Lutetium oxyorthosilicate (LSO) and lutetium yttrium oxyorthosilicate (LYSO) crystals are the gold standard for PET scanner detectors, offering superior timing resolution and detection efficiency. With 8 million PET scans performed annually worldwide and each scanner requiring 15&ndash;25 kg of lutetium crystals, medical imaging consumes 5.8 tonnes per year, growing at 12% CAGR.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Lutetium-177 Radiopharmaceuticals</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Lutetium-177 enables targeted radionuclide therapy (TRT) for neuroendocrine tumors and prostate cancer, delivering radiation directly to cancer cells while sparing healthy tissue. FDA approval of Lu-177 therapies has driven 45% annual growth, with demand reaching 0.8 tonnes annually as treatment protocols expand globally.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Particle Physics Detectors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">High-energy physics experiments at CERN, Fermilab, and other particle accelerators use lutetium-based scintillators for detecting subatomic particles. The Large Hadron Collider upgrade and next-generation collider projects consume 0.4 tonnes annually, with demand accelerating as detector technology advances.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">High-Refractive Index Optics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Lutetium oxide enables ultra-high-refractive-index glass for advanced optics, laser systems, and semiconductor lithography. The precision optics sector consumes 0.3 tonnes annually, with demand growing at 25% CAGR as extreme ultraviolet (EUV) lithography scales for next-generation semiconductor manufacturing.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Lutetium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '9.3 t', note: 'Current' },
                { year: '2028', val: '18.0 t', note: 'Projected' },
                { year: '2030', val: '28.0 t', note: 'Projected' },
                { year: '2035', val: '45.0 t', note: 'Roskill' },
                { year: 'Supply \'30', val: '~16.0 t', note: 'Gap: 12+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-fuchsia-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-fuchsia-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, Society of Nuclear Medicine.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Lutetium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities, securing lutetium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 92% of global lutetium from ionic clay deposits in southern provinces, particularly Jiangxi and Guangdong. Lutetium is the final element extracted in heavy rare earth separation cascades, making production extremely challenging and expensive. Chinese facilities produce ultra-high-purity lutetium oxide for medical and scientific applications.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations developing heavy rare earth separation capabilities, including specialized extraction for lutetium. Critical mineral designation has prioritized domestic lutetium supply for medical imaging and scientific research infrastructure security.' },
              { region: 'Australia', desc: 'Australia\'s heavy rare earth deposits in Northern Territory contain trace lutetium concentrations. Advanced separation technologies are being developed to economically extract lutetium from xenotime and ionic clay sources for medical applications.' },
              { region: 'Southeast Asia & Vietnam', desc: 'Vietnam\'s ionic clay deposits contain the highest lutetium concentrations of any rare earth deposit globally. Emerging Southeast Asian heavy rare earth processing facilities are developing specialized lutetium extraction capabilities.' },
              { region: 'Greenland & Scandinavia', desc: 'Greenland\'s heavy rare earth projects and Scandinavian deposits contain lutetium. Strategic importance for European and NATO medical imaging and scientific research supply chains.' },
              { region: 'Exploration & Preparation', desc: 'New heavy rare earth fields in preparation and exploration phases across Africa and Central Asia, offering In-Ground Lutetium positions at pre-production economics before reserves reach market.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with rare earth mining companies and specialized heavy rare earth separation facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Lutetium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Lutetium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized lutetium, In-Ground Lutetium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <LutetiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Lutetium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 28 tonnes of lutetium by 2030. Supply will fall short by over 12 tonnes. Toto Finance is building the platform to tokenize lutetium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
