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
const CeriumTickerBar = dynamicImport(
  () => import('../components/client/CeriumTickerBar').then((mod) => ({ default: mod.CeriumTickerBar }))
);
const CeriumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized cerium?',
    answer:
      'Tokenized cerium is a blockchain-based digital asset backed 1:1 by refined cerium oxide (CeO₂) stored in insured, audited vaults. High-purity cerium oxide (99.5%+ CeO₂), ready for automotive catalyst production, glass polishing applications, and industrial use. Each token is always redeemable for physical cerium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Cerium by Toto Finance?',
    answer:
      'In-Ground Cerium is a tokenized future delivery contract for physical cerium still in the ground at certified rare earth mining operations. Short-term delivery (1-12 months) is tied to active mines, and long-term delivery (1-6 years) is backed by proven reserves at earlier-stage operations. Designed for automotive manufacturers, glass manufacturers, sovereign wealth funds, and investors positioning for the structural cerium deficit.',
  },
  {
    question: 'Where does Toto Finance source its cerium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and processing facilities across China (88% of production from Bayan Obo and ionic clay deposits), North America (USA and Canada critical mineral operations with highest cerium concentrations globally), Australia (Lynas Rare Earths operations), Southeast Asia and Vietnam (ionic clay and processing facilities), and Brazil/India (monazite and heavy mineral sands). Sourcing covers developed mines in active production and new fields in preparation and exploration. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized cerium?',
    answer:
      'Three categories: (1) Industrial clients needing physical cerium — automotive manufacturers and catalytic converter producers, glass polishing compound manufacturers, smartphone and display manufacturers, optical glass and lens manufacturers, diesel fuel additive producers, ceramic and advanced materials manufacturers, self-cleaning oven manufacturers, solar panel manufacturers, precision optics manufacturers, and mirror and window glass manufacturers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium cerium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects cerium producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized cerium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use cerium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized cerium represent a new programmable financial model.',
  },
  {
    question: 'Why is cerium essential for catalytic converters and glass polishing?',
    answer:
      'Cerium oxide has unique oxygen storage capacity, enabling catalytic converters to maintain efficiency across varying exhaust conditions. With 85 million vehicles produced annually and Euro 7/China VI standards requiring 15-20% more cerium per vehicle, automotive demand is accelerating despite EV growth. For glass polishing, cerium oxide is the only material achieving optical-grade surface finishes on precision glass, consuming 32,000 tonnes annually for smartphone screens, camera lenses, and LCD panels. No substitute matches cerium\'s performance in either application.',
  },
  {
    question: 'What is the cerium price forecast for 2026?',
    answer:
      'Roskill forecasts $2,500/mt in 2026. Critical Minerals Institute projects prices exceeding $2,800/mt by 2027 as automotive, glass, and industrial demand accelerates while Chinese export restrictions tighten. The structural deficit is expected to intensify through 2030 as emission regulations increase cerium loading per vehicle and smartphone/display production scales globally.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, automotive manufacturers, glass manufacturers, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedCeriumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Cerium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized cerium by Toto Finance. 1:1 asset-backed cerium oxide tokens, always redeemable. In-Ground Cerium future delivery contracts."
        url="https://totofinance.co/tokenized-cerium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Cerium', item: 'https://totofinance.co/tokenized-cerium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-orange-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-orange-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Cerium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The most abundant rare earth element powering automotive catalysts, precision glass polishing, and clean diesel technology is facing structural supply deficits. Toto Finance is building the infrastructure to tokenize cerium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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

      {/* ===================== FOLD 2: TICKER + THE CERIUM CRISIS ===================== */}
      <CeriumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Cerium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Cerium Is Critical to Clean Air and Precision Manufacturing
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            The world is running out of cerium. Automotive manufacturers, glass polishing operations, and diesel engine producers are creating unprecedented demand while global supply remains concentrated and constrained. This is not a cycle. It is an industrial materials crisis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Crisis Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">18,500 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts an 18,500-tonne cerium deficit in 2025, with the gap widening through 2030. Despite being the most abundant rare earth element (50% of all rare earth content), cerium supply is concentrated in China (88% of production) and constrained by rare earth mining economics and export restrictions.
              </p>
            </div>
            {/* Crisis Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">45%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automotive Catalyst Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium oxide is essential for catalytic converters in gasoline and diesel vehicles, improving combustion efficiency, reducing emissions, and enabling oxygen storage. 45% of global cerium demand comes from automotive applications, with each catalytic converter containing 20&ndash;50 grams of cerium oxide.
              </p>
            </div>
            {/* Crisis Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">65,000 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global cerium demand is projected to reach 175,000 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 110,000 tonnes. The 65,000-tonne gap represents a 37% shortfall, according to Critical Minerals Institute projections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: AUTOMOTIVE & INDUSTRIAL DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Automotive &amp; Glass Manufacturing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Clean Emissions Revolution Is Consuming Cerium Supply
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Every catalytic converter manufactured, every precision lens polished, every diesel fuel refined, every self-cleaning oven produced requires cerium. The element&apos;s unique catalytic and abrasive properties make it irreplaceable across automotive emissions control, precision optics, and industrial applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Demand Fact 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Catalytic Converters (45% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Automotive catalytic converters consume 78,000 tonnes of cerium oxide annually. Cerium enables oxygen storage and release, improving catalyst efficiency and durability. With 85 million vehicles produced annually and tightening emissions standards (Euro 7, China VI), cerium loading per vehicle is increasing by 15&ndash;20% despite EV growth.
              </p>
            </div>
            {/* Demand Fact 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Glass Polishing Compounds</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium oxide is the only material capable of achieving optical-grade surface finishes on glass and precision optics. The glass polishing sector consumes 32,000 tonnes annually for smartphone screens, camera lenses, LCD panels, solar panels, mirrors, and precision optical components. No substitute matches cerium&apos;s polishing efficiency and surface quality.
              </p>
            </div>
            {/* Demand Fact 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Diesel Fuel Additives</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium-based fuel additives reduce particulate matter emissions from diesel engines by 30&ndash;50%, enabling compliance with stringent emissions regulations. The transportation and heavy equipment sectors consume 15,000 tonnes annually, with demand growing as diesel emission standards tighten globally.
              </p>
            </div>
            {/* Demand Fact 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Self-Cleaning Ovens &amp; Ceramics</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cerium oxide catalyzes the breakdown of organic compounds at elevated temperatures, enabling self-cleaning oven technology and ceramic coatings. Industrial and consumer applications consume 18,000 tonnes annually, with demand accelerating in advanced ceramics and industrial cleaning systems.
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Cerium Demand Projection (Thousand Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '125.0 kt', note: 'Current' },
                { year: '2028', val: '148.0 kt', note: 'Projected' },
                { year: '2030', val: '175.0 kt', note: 'Projected' },
                { year: '2035', val: '220.0 kt', note: 'Roskill' },
                { year: 'Supply \'30', val: '~110.0 kt', note: 'Gap: 65k+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-orange-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-orange-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Cerium Comes From
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance works directly with rare earth mining companies and processing facilities, securing cerium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 88% of global cerium from bastnäsite deposits in Bayan Obo (Inner Mongolia) and ionic clay deposits in southern provinces. Despite cerium representing 50% of rare earth ore content, Chinese supply is constrained by domestic demand, production quotas, and export restrictions.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations, including Mountain Pass (California), Bear Lodge (Wyoming), and Nechalacho (Northwest Territories), contain the highest cerium concentrations of any rare earth deposit globally. Critical mineral designation has prioritized domestic cerium processing for automotive supply chains.' },
              { region: 'Australia', desc: 'Australia\'s rare earth deposits in Western Australia and Northern Territory produce cerium-rich concentrates. Lynas Rare Earths operates separation facilities producing cerium oxide for automotive and glass manufacturing applications.' },
              { region: 'Southeast Asia & Vietnam', desc: 'Vietnam\'s ionic clay deposits and Malaysia\'s Lynas processing facilities produce cerium oxide from regional and imported concentrates. Southeast Asian operations provide alternative supply channels outside Chinese-dominated production.' },
              { region: 'Brazil & India', desc: 'Brazil\'s monazite deposits and India\'s coastal heavy mineral sands contain high cerium concentrations. New separation facilities are being developed to extract cerium for regional automotive and glass manufacturing.' },
              { region: 'Exploration & Preparation', desc: 'New rare earth fields in preparation and exploration phases across Africa, Scandinavia, and Greenland, offering In-Ground Cerium positions at pre-production economics before reserves reach market.' },
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
            How Tokenized Cerium Works
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
            Everything About Tokenized Cerium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized cerium, In-Ground Cerium, instant settlement, and DeFi secondary markets on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <CeriumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            The Cerium Deficit Is Here
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            The world needs 175,000 tonnes of cerium by 2030. Supply will fall short by over 65,000 tonnes. Toto Finance is building the platform to tokenize cerium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
