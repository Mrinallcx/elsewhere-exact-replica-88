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
const GadoliniumTickerBar = dynamicImport(
  () => import('../components/client/GadoliniumTickerBar').then((mod) => ({ default: mod.GadoliniumTickerBar }))
);
const GadoliniumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized gadolinium?',
    answer:
      'Tokenized gadolinium is a blockchain-based digital asset backed 1:1 by refined gadolinium oxide (Gd₂O₃) stored in insured, audited vaults. High-purity gadolinium oxide (99.9%+ Gd₂O₃), ready for pharmaceutical contrast agent production and nuclear applications. Each token is always redeemable for physical gadolinium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Gadolinium by Toto Finance?',
    answer:
      'In-Ground Gadolinium is a tokenized future delivery contract for physical gadolinium still in the ground at certified rare earth mining operations. Short-term delivery (1-12 months) is tied to active mines, and long-term delivery (1-6 years) is backed by proven reserves at earlier-stage operations. Designed for pharmaceutical manufacturers, medical imaging providers, sovereign wealth funds, and investors positioning for the structural gadolinium deficit.',
  },
  {
    question: 'Where does Toto Finance source its gadolinium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and separation facilities across China (85% of production from ionic clay and bastnäsite), North America (USA and Canada critical mineral operations), Australia (Lynas operations), Southeast Asia and Vietnam (ionic clay and processing facilities), and Brazil/India (monazite and heavy mineral sands). Sourcing covers developed mines in active production and new fields in preparation and exploration. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized gadolinium?',
    answer:
      'Three categories: (1) Industrial clients needing physical gadolinium — pharmaceutical and MRI contrast agent manufacturers, medical imaging equipment manufacturers, hospital radiology departments and imaging centers, nuclear reactor operators and fuel manufacturers, magnetic refrigeration system manufacturers, data storage and memory manufacturers, optical fiber and laser manufacturers, garnet crystal manufacturers, phosphor producers, and specialized alloy manufacturers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium gadolinium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects gadolinium producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized gadolinium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use gadolinium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized gadolinium represent a new programmable financial model.',
  },
  {
    question: 'Why is gadolinium essential for MRI imaging?',
    answer:
      'Gadolinium has unique paramagnetic properties that alter the magnetic relaxation times of nearby water protons, creating enhanced contrast in MRI images. Gadolinium-based contrast agents enable visualization of tumors, blood vessel abnormalities, inflammation, and tissue damage invisible in standard MRI scans. With 100 million MRI scans performed annually and 40-50% requiring contrast enhancement, gadolinium is irreplaceable for modern medical diagnostics. 95% of global gadolinium demand comes from healthcare applications.',
  },
  {
    question: 'What is the gadolinium price forecast for 2026?',
    answer:
      'Roskill forecasts $78,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $85,000/mt by 2027 as medical imaging demand accelerates while rare earth production remains constrained. The structural deficit is expected to intensify through 2030 as aging populations drive MRI procedure volume growth and nuclear reactor construction accelerates for carbon-neutral energy.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, pharmaceutical manufacturers, medical imaging providers, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedGadoliniumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Gadolinium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized gadolinium by Toto Finance. 1:1 asset-backed gadolinium oxide tokens, always redeemable. In-Ground Gadolinium future delivery contracts."
        url="https://totofinance.co/tokenized-gadolinium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Gadolinium', item: 'https://totofinance.co/tokenized-gadolinium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-teal-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-teal-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Gadolinium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The rare earth element essential to MRI imaging, nuclear reactors, and magnetic refrigeration is facing critical supply constraints. Toto Finance is building the infrastructure to tokenize gadolinium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Gadolinium Oxide (Gd&#8322;O&#8323;) / 99.9% Oxide Price</p>
                  <p className="text-sm text-gray-400">Global Rare Earth Market</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl md:text-4xl font-light text-white">$68,500</p>
                  <p className="text-sm text-green-400 font-medium">&uarr; +43% YTD</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$420M+</p>
                  <p className="text-xs text-gray-500">2025</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Deficit</p>
                  <p className="text-lg font-semibold text-white">280 t</p>
                  <p className="text-xs text-gray-500">Roskill</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">$78,000/mt</p>
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
      <GadoliniumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Gadolinium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Gadolinium Is Critical to Modern Healthcare</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of gadolinium. Medical imaging providers, nuclear reactor operators, and data storage manufacturers are creating unprecedented demand while global supply remains concentrated and constrained. This is not a cycle. It is a healthcare materials crisis.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">280 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Roskill forecasts a 280-tonne gadolinium deficit in 2025, with the gap widening through 2030. Over 95% of gadolinium demand comes from MRI contrast agents essential for cancer detection, neurological imaging, and cardiovascular diagnostics. Supply shortages directly impact patient access to life-saving medical imaging.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">100M</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Annual MRI Scans</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Over 100 million MRI scans are performed globally each year, with 40&ndash;50% requiring gadolinium-based contrast agents (GBCAs) for enhanced imaging. Each MRI scan uses 15&ndash;30 mL of GBCA containing 0.1&ndash;0.3 mmol/mL of gadolinium. Medical demand consumes 380 tonnes annually, representing 95% of total gadolinium use.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">950 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global gadolinium demand is projected to reach 1,450 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 500 tonnes. The 950-tonne gap represents a 66% shortfall, according to Critical Minerals Intelligence projections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: MEDICAL & NUCLEAR DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Medical Imaging &amp; Nuclear Energy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Healthcare Boom Is Exhausting Gadolinium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every cancer screening, every brain MRI, every cardiac imaging procedure requires gadolinium. The element&apos;s unique paramagnetic properties make it irreplaceable for contrast-enhanced magnetic resonance imaging while simultaneously serving critical roles in nuclear reactor control and data storage.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">MRI Contrast Agents (95% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Gadolinium-based contrast agents (GBCAs) enable visualization of tumors, blood vessels, inflammation, and tissue abnormalities invisible in standard MRI scans. Global aging populations and rising cancer incidence are driving 8% annual growth in contrast-enhanced MRI procedures. The medical sector consumes 380 tonnes annually.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Cancer Detection &amp; Screening</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Gadolinium-enhanced MRI is the gold standard for detecting brain tumors, liver lesions, breast cancer, and metastatic disease. With global cancer cases projected to reach 30 million annually by 2030, contrast-enhanced MRI demand will grow proportionally. Each oncology patient undergoes 3&ndash;5 contrast MRI scans during treatment.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nuclear Reactor Control Rods</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Gadolinium has the highest thermal neutron capture cross-section of any element, making it essential for nuclear reactor control rods and emergency shutdown systems. The nuclear energy sector consumes 45 tonnes annually, with demand accelerating as countries build new reactors to meet carbon-neutral energy targets.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Magnetic Refrigeration Technology</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Gadolinium alloys enable magnetic refrigeration systems operating near room temperature, offering energy-efficient cooling without harmful refrigerants. Emerging applications in data centers, automotive climate control, and consumer appliances are creating new demand vectors consuming 15 tonnes annually with 25% CAGR.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Gadolinium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '480 t', note: 'Current' },
                { year: '2028', val: '890 t', note: 'Projected' },
                { year: '2030', val: '1,450 t', note: 'Projected' },
                { year: '2035', val: '2,200 t', note: 'Roskill' },
                { year: 'Supply \'30', val: '~500 t', note: 'Gap: 950+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-teal-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-teal-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, International Society for Magnetic Resonance in Medicine.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Gadolinium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with rare earth mining companies and separation facilities, securing gadolinium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 85% of global gadolinium from ionic clay deposits in southern provinces and bastnäsite ores in Bayan Obo, Inner Mongolia. Chinese gadolinium oxide production serves both domestic pharmaceutical manufacturing and export markets, though supply is increasingly constrained.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations, including Mountain Pass (California), Bear Lodge (Wyoming), and Nechalacho (Northwest Territories), contain significant gadolinium concentrations. Critical mineral designation has prioritized domestic rare earth separation infrastructure for medical supply chain security.' },
              { region: 'Australia', desc: 'Australia\'s rare earth deposits in Western Australia and Northern Territory contain gadolinium as a heavy rare earth byproduct. Lynas Rare Earths operations produce gadolinium oxide for pharmaceutical and industrial applications.' },
              { region: 'Southeast Asia & Vietnam', desc: 'Vietnam\'s ionic clay deposits and Malaysia\'s rare earth processing facilities produce gadolinium oxide from imported concentrates. Southeast Asian operations provide alternative supply channels outside Chinese-dominated production.' },
              { region: 'Brazil & India', desc: 'Brazil\'s monazite deposits and India\'s coastal heavy mineral sands contain gadolinium. New separation facilities are being developed to extract gadolinium for regional pharmaceutical manufacturing.' },
              { region: 'Exploration & Preparation', desc: 'New rare earth fields in preparation and exploration phases across Africa, Scandinavia, and Greenland, offering In-Ground Gadolinium positions at pre-production economics before reserves reach market.' },
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

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Gadolinium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Gadolinium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized gadolinium, In-Ground Gadolinium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <GadoliniumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Gadolinium Deficit Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 1,450 tonnes of gadolinium by 2030. Supply will fall short by over 950 tonnes. Toto Finance is building the platform to tokenize gadolinium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
