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
const HolmiumTickerBar = dynamicImport(
  () => import('../components/client/HolmiumTickerBar').then((mod) => ({ default: mod.HolmiumTickerBar }))
);
const HolmiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized holmium?',
    answer:
      'Tokenized holmium is a blockchain-based digital asset backed 1:1 by refined holmium oxide (Ho₂O₃) stored in insured, audited vaults. High-purity holmium oxide (99.9%+ Ho₂O₃), ready for medical laser crystal production and nuclear applications. Each token is always redeemable for physical holmium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Holmium by Toto Finance?',
    answer:
      'In-Ground Holmium is a tokenized future delivery contract for physical holmium still in the ground at certified rare earth mining operations with heavy rare earth content. Short-term delivery (1-12 months) is tied to active operations, and long-term delivery (1-6 years) is backed by proven holmium content in heavy rare earth reserves. Designed for medical device manufacturers, nuclear energy developers, sovereign wealth funds, and investors positioning for the structural holmium deficit.',
  },
  {
    question: 'Where does Toto Finance source its holmium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities across China (90% of production from ionic clay deposits), North America (USA and Canada developing heavy REE separation), Australia (Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay and processing facilities), and Greenland/Scandinavia (strategic European supply). Sourcing covers developed operations in active production and new heavy rare earth projects in preparation. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized holmium?',
    answer:
      'Three categories: (1) Industrial clients needing physical holmium — medical laser manufacturers and surgical equipment companies, urology and minimally invasive surgery device manufacturers, hospital surgical centers and laser surgery providers, nuclear reactor operators and fuel manufacturers, permanent magnet manufacturers, laser crystal and optical component manufacturers, quantum computing hardware developers, MRI and medical imaging equipment manufacturers, particle accelerator facilities, and specialized alloy manufacturers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium holmium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects holmium producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized holmium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use holmium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized holmium represent a new programmable financial model.',
  },
  {
    question: 'Why is the 2.1 μm wavelength so critical for medical lasers?',
    answer:
      'The 2.1 micrometer wavelength produced by holmium:YAG lasers is optimally absorbed by water in soft tissue, providing precise cutting and vaporization with minimal thermal damage to surrounding tissue. This wavelength is the gold standard for urology (1.2 million kidney stone treatments annually), prostate surgery (200,000+ HoLEP procedures), and arthroscopic surgery. With 85% of holmium demand coming from medical lasers and aging populations driving 18-25% annual procedure growth, supply shortages directly threaten surgical capacity worldwide.',
  },
  {
    question: 'What is the holmium price forecast for 2026?',
    answer:
      'Roskill forecasts $550,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $600,000/mt by 2027 as medical laser demand accelerates while heavy rare earth production remains constrained. The structural deficit is expected to intensify through 2030 as minimally invasive surgery adoption scales globally and quantum computing applications commercialize.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, medical device manufacturers, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedHolmiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Holmium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized holmium by Toto Finance. 1:1 asset-backed holmium oxide tokens, always redeemable. In-Ground Holmium future delivery contracts."
        url="https://totofinance.co/tokenized-holmium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Holmium', item: 'https://totofinance.co/tokenized-holmium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-emerald-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Holmium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The ultra-rare element powering medical laser surgery, nuclear reactor control, and high-strength magnets is facing critical supply constraints. Toto Finance is building the infrastructure to tokenize holmium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Holmium Oxide (Ho&#8322;O&#8323;) / 99.9% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-light text-white">$485,000</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +67% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$95M+</p>
                  <p className="text-xs text-gray-500">2025</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">8.5 t</p>
                  <p className="text-xs text-gray-500">Roskill</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$550,000/mt</p>
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
      <HolmiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Holmium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Holmium Is Critical to Medical Technology</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of holmium. Medical laser manufacturers, nuclear reactor operators, and magnet producers are creating unprecedented demand while global supply remains nearly non-existent. This is not a cycle. It is a medical technology materials crisis.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">8.5 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts an 8.5-tonne holmium deficit in 2025, with the gap widening through 2030. Global holmium production is only 18 tonnes annually &mdash; barely enough to supply one major medical laser manufacturer. All production comes as a heavy rare earth byproduct, making supply fundamentally constrained.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.1 &mu;m</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect Medical Wavelength</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Holmium:YAG lasers emit at 2.1 micrometers, the optimal wavelength for soft tissue surgery with maximum water absorption and minimal thermal damage. 85% of global holmium demand comes from medical laser applications including urology, orthopedics, and minimally invasive surgery. There is no substitute for holmium in these precision medical lasers.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">32 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global holmium demand is projected to reach 65 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 33 tonnes. The 32-tonne gap represents a 49% shortfall, according to Critical Minerals Institute projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: MEDICAL & NUCLEAR DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Medical Lasers &amp; Nuclear Energy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Medical Laser Revolution Is Exhausting Holmium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every laser kidney stone treatment, every prostate surgery, every arthroscopic procedure requires holmium. The element&apos;s unique 2.1 &mu;m wavelength makes it irreplaceable for soft tissue surgery while simultaneously serving critical roles in nuclear reactor control and high-field magnets.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Holmium:YAG Medical Lasers (85% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Holmium:YAG lasers are the gold standard for urological procedures, with over 1.2 million laser kidney stone treatments performed annually worldwide. Each laser system contains 50&ndash;150 grams of holmium-doped YAG crystal. The medical laser sector consumes 15 tonnes annually, growing at 18% CAGR as minimally invasive surgery adoption accelerates globally.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Prostate &amp; Soft Tissue Surgery</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Holmium laser enucleation of the prostate (HoLEP) is replacing traditional surgery for benign prostatic hyperplasia, with 200,000+ procedures annually. The 2.1 &mu;m wavelength provides precise tissue vaporization with minimal bleeding. Aging populations are driving 25% annual growth in holmium laser prostate procedures.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nuclear Reactor Control Rods</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Holmium has the highest thermal neutron absorption cross-section among stable elements after gadolinium, making it essential for nuclear reactor control rod alloys and emergency shutdown systems. The nuclear energy sector consumes 2 tonnes annually, with demand accelerating as new reactor construction ramps for carbon-neutral energy.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">High-Field Permanent Magnets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Holmium additions to iron and dysprosium magnets increase magnetic strength at cryogenic temperatures for MRI systems, particle accelerators, and quantum computing applications. The magnetic materials sector consumes 1 tonne annually, with demand growing at 35% CAGR as quantum technology commercializes.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Holmium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '19.5 t', note: 'Current' },
                { year: '2028', val: '38.0 t', note: 'Projected' },
                { year: '2030', val: '65.0 t', note: 'Projected' },
                { year: '2035', val: '105.0 t', note: 'Roskill' },
                { year: 'Supply \'30', val: '~33.0 t', note: 'Gap: 32+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-emerald-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-emerald-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Holmium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities, securing holmium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 90% of global holmium from ionic clay deposits in southern provinces, particularly Jiangxi and Guangdong. Chinese heavy rare earth separation facilities produce holmium oxide for domestic medical device manufacturing and export markets, though supply is increasingly constrained.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations developing heavy rare earth separation capabilities, including Texas, Alaska, and Saskatchewan projects. Critical mineral designation has prioritized domestic holmium supply for medical technology supply chain security.' },
              { region: 'Australia', desc: 'Australia\'s heavy rare earth deposits in Northern Territory and Western Australia contain holmium concentrations. New separation technologies enable economic holmium recovery from xenotime and ionic clay sources.' },
              { region: 'Southeast Asia & Vietnam', desc: 'Vietnam\'s ionic clay deposits and emerging Southeast Asian heavy rare earth processing facilities produce holmium oxide from regional mining operations. Alternative supply channels outside Chinese-dominated production.' },
              { region: 'Greenland & Scandinavia', desc: 'Greenland\'s Kvanefjeld project and Scandinavian rare earth deposits contain heavy rare earth concentrations including holmium. Strategic importance for European and NATO medical device supply chains.' },
              { region: 'Exploration & Preparation', desc: 'New heavy rare earth fields in preparation and exploration phases across Africa, South America, and Central Asia, offering In-Ground Holmium positions at pre-production economics before reserves reach market.' },
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
            How Tokenized Holmium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Holmium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized holmium, In-Ground Holmium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <HolmiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Holmium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 65 tonnes of holmium by 2030. Supply will fall short by over 32 tonnes. Toto Finance is building the platform to tokenize holmium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
