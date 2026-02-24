// Server Component (NO "use client")
// Static Generation with ISR - equivalent to getStaticProps with revalidate: 60
export const revalidate = 60;

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const LutetiumTickerBar = dynamicImport(
  () => import('../components/client/LutetiumTickerBar').then((mod) => ({ default: mod.LutetiumTickerBar }))
);
const LutetiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
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

// Equivalent to getStaticProps - fetch data here
export default async function TokenizedLutetiumPage() {
  // Example: Fetch lutetium data from API if available
  // const lutetiumData = await fetch('https://api.example.com/tokenized-lutetium', {
  //   next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  // }).then(res => res.json());
  
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Lutetium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized lutetium by Toto Finance. 1:1 asset-backed lutetium oxide tokens, always redeemable. In-Ground Lutetium future delivery contracts."
        url="https://totofinance.co/tokenized-lutetium"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Lutetium', item: 'https://totofinance.co/tokenized-lutetium' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
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

      {/* ===================== FOLD 5B: INVESTORS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Investors</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Who Buys Tokenized Lutetium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance serves three distinct categories of buyers, each with different motivations for accessing tokenized lutetium and In-Ground Lutetium contracts.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-fuchsia-100 text-fuchsia-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 1</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Clients</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Companies that need physical lutetium directly for manufacturing and operations. They purchase tokenized lutetium for guaranteed supply, streamlined procurement, and physical redemption.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Medical imaging equipment manufacturers (PET scanners), scintillator crystal manufacturers (LSO and LYSO), radiopharmaceutical companies (Lu-177 therapies), nuclear medicine centers and hospitals, particle physics laboratories and research institutions, high-energy physics detector manufacturers, precision optics and lens manufacturers, semiconductor lithography equipment producers, advanced laser system manufacturers, scientific research institutions.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 2</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors &amp; Commodity Brokers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">Mid-size and smaller investment firms, commodity brokers, family offices, and individual investors who typically cannot access premium lutetium deals at the pricing and scale that major institutions command.</p>
              <p className="text-xs text-gray-500 leading-relaxed">Toto Finance democratizes access to institutional-grade lutetium positions. Fractional ownership, no minimum gram requirements, no warehouse logistics, and no counterparty risk through intermediaries. The same lutetium, at competitive pricing, accessible to everyone.</p>
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
                {['Mining Company / Producer', 'Processing Facility / Heavy REE Separation', 'Commodity Broker / Trader', 'Clearing House', 'Custodian Bank', 'Correspondent Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
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
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">Similar to how Amazon and eBay match buyers and sellers directly for physical goods, Toto Finance uses blockchain technology to connect lutetium producers with buyers, eliminating banks, clearing houses, and settlement agents entirely.</p>
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
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Once tokenized lutetium is purchased on Toto Finance, secondary trading happens on DeFi platforms globally. Hold, trade, hedge, earn yield, or borrow against your lutetium. All on-chain. All programmable.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Global Secondary Trading', desc: 'Tokenized lutetium trades 24/7 on decentralized exchanges and DeFi platforms worldwide. Buy, sell, and transfer lutetium tokens across chains without gatekeepers, brokers, or trading hour restrictions. True global liquidity.' },
              { title: 'On-Chain Yield', desc: 'Earn yield by exposing lutetium assets to smart contract yield contracts. Lend tokenized lutetium to short sellers or leveraged long traders who borrow assets and pay interest. Passive income backed by physical rare earth metals.' },
              { title: 'Collateral Loans', desc: 'Use tokenized lutetium as collateral for on-chain loans. Borrow stablecoins against lutetium holdings without selling the underlying asset. All managed at the protocol level — no bank approval, no credit checks, no delays.' },
              { title: 'Programmable Finance', desc: 'Collateral loans backed by tokenized lutetium represent a new programmable financial model. Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical rare earth value meets decentralized infrastructure.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"><h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3><p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p></div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Lutetium Token</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {['Minted on Toto Finance', 'Purchased with Stablecoins', 'Held, Traded or Transferred', 'Yield, Loans or Hedging', 'Redeemed for Physical Lutetium Oxide'].map((step, i) => (
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Lutetium vs. Traditional Rare Earth Investment</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">See how tokenized lutetium on Toto Finance compares to traditional rare earth ETFs, futures contracts, and physical ownership.</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead><tr className="bg-gray-900 text-white"><th className="px-4 md:px-6 py-4 font-medium">Feature</th><th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th><th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th><th className="px-4 md:px-6 py-4 font-medium">Physical Lutetium</th><th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th></tr></thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / Dealer', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic / Basket', '1:1 Lutetium Oxide', 'Direct ownership', 'No (equity)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$250,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None', 'Vault fees', 'None'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td><td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-fuchsia-50/50">{row[2]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td><td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td></tr>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Institutional-Grade Lutetium Tokenization</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Transparency, compliance, and programmable infrastructure embedded into every transaction.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Redeemable Assets', desc: 'All tokenized lutetium is linked to insured vaults and custody facilities. Redeem tokens for physical lutetium oxide delivery on demand. Ultra-high-purity grade (99.99%+ Lu₂O₃), ready for industrial use.' },
              { title: 'Transparent Reserves', desc: 'On-chain proof-of-reserves, real-time oracle feeds, and third-party audits ensure continuous 1:1 asset backing. Every token is verifiable on the blockchain at any time.' },
              { title: 'Instant Settlement', desc: 'T+0 settlement with USDC, USDT, and USAT eliminates counterparty risk and delays. No banks, no clearing houses, no intermediaries.' },
              { title: 'Programmable Compliance', desc: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on.' },
              { title: 'DeFi Yield & Loans', desc: 'Earn yield through lending protocols, use lutetium as collateral for on-chain loans, or hedge positions through smart contracts. Programmable finance for physical assets.' },
              { title: 'Multi-Chain Access', desc: 'Tokenized lutetium is accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that works best for your strategy.' },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Lutetium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized lutetium, In-Ground Lutetium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
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
