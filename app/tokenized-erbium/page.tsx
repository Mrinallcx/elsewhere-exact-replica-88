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
const ErbiumTickerBar = dynamicImport(
  () => import('../components/client/ErbiumTickerBar').then((mod) => ({ default: mod.ErbiumTickerBar }))
);
const ErbiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized erbium?',
    answer:
      'Tokenized erbium is a blockchain-based digital asset backed 1:1 by refined erbium oxide (Er₂O₃) stored in insured, audited vaults. High-purity erbium oxide (99.9%+ Er₂O₃), ready for fiber optic amplifier production and medical laser applications. Each token is always redeemable for physical erbium on demand. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Erbium by Toto Finance?',
    answer:
      'In-Ground Erbium is a tokenized future delivery contract for physical erbium still in the ground at certified rare earth mining operations with heavy rare earth content. Short-term delivery (1-12 months) is tied to active operations, and long-term delivery (1-6 years) is backed by proven erbium content in heavy rare earth reserves. Designed for telecommunications companies, data center operators, sovereign wealth funds, and investors positioning for the structural erbium deficit.',
  },
  {
    question: 'Where does Toto Finance source its erbium?',
    answer:
      'Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities across China (88% of production from ionic clay deposits), North America (USA and Canada developing heavy REE separation for telecom security), Australia (Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay and processing facilities), and Brazil/Madagascar (heavy rare earth projects). Sourcing covers developed operations in active production and new heavy rare earth projects in preparation. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized erbium?',
    answer:
      'Three categories: (1) Industrial clients needing physical erbium — telecommunications infrastructure and fiber optic network operators, data center operators and cloud service providers, fiber optic amplifier manufacturers, undersea cable system developers, 5G network equipment manufacturers, medical laser manufacturers, optical fiber manufacturers, and nuclear reactor manufacturers. (2) Investors and commodity brokers, especially mid-size firms who cannot typically access premium erbium deals. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This eliminates brokers, banks, clearing houses, custodians, and settlement agents. Like Amazon matching buyers and sellers directly, Toto Finance connects erbium producers with buyers on-chain.',
  },
  {
    question: 'Can I trade tokenized erbium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use erbium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized erbium represent a new programmable financial model.',
  },
  {
    question: 'Why is the 1.55 μm wavelength so critical for fiber optic networks?',
    answer:
      'The 1.55 micrometer wavelength has the lowest signal attenuation (loss) in silica optical fiber, allowing signals to travel hundreds of kilometers without degradation. Erbium-doped fiber amplifiers amplify signals at this wavelength without electrical conversion, enabling long-haul telecommunications, data center interconnects, and undersea cable systems. With global internet traffic growing 28% annually and data center capacity doubling every 18 months, erbium amplification is essential to every streaming service, cloud application, and digital communication worldwide. 70% of erbium demand comes from telecommunications infrastructure.',
  },
  {
    question: 'What is the erbium price forecast for 2026?',
    answer:
      'Roskill forecasts $145,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $160,000/mt by 2027 as telecommunications infrastructure buildout, 5G deployment, and data center expansion accelerate while heavy rare earth production remains constrained. The structural deficit is expected to intensify through 2030 as AI computing and edge data centers drive exponential fiber optic network growth.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, mining partners, telecommunications companies, data center operators, and industrial buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedErbiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Erbium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized erbium by Toto Finance. 1:1 asset-backed erbium oxide tokens, always redeemable. In-Ground Erbium future delivery contracts."
        url="https://totofinance.co/tokenized-erbium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Erbium', item: 'https://totofinance.co/tokenized-erbium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-rose-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-rose-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Erbium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The rare earth element powering global fiber optic networks, medical lasers, and telecommunications infrastructure is facing critical supply constraints. Toto Finance is building the infrastructure to tokenize erbium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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

      {/* ===================== FOLD 2: TICKER + THE ERBIUM CRISIS ===================== */}
      <ErbiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Erbium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Erbium Is Critical to Global Internet Infrastructure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            The world is running out of erbium. Telecommunications companies, data center operators, and medical laser manufacturers are creating unprecedented demand while global supply remains critically constrained. This is not a cycle. It is a digital infrastructure materials crisis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">95 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 95-tonne erbium deficit in 2025, with the gap widening through 2030. Global erbium production is only 385 tonnes annually from heavy rare earth separation. All production comes as a byproduct, making supply fundamentally constrained as global internet traffic grows exponentially.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">1.55 &mu;m</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect Telecom Wavelength</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Erbium-doped fiber amplifiers (EDFAs) amplify optical signals at 1.55 micrometers, the wavelength with lowest signal loss in silica fiber. 70% of global erbium demand comes from fiber optic amplifiers that power every internet connection, streaming service, cloud application, and data transfer worldwide. There is no substitute for erbium in long-haul telecommunications.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">350 t</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2030 Supply Gap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global erbium demand is projected to reach 985 tonnes per year by 2030, while supply from existing and planned rare earth mines will deliver only 635 tonnes. The 350-tonne gap represents a 36% shortfall, according to Critical Minerals Institute projections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: FIBER OPTIC & TELECOM DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Fiber Optics &amp; Telecommunications</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Data Center Boom Is Consuming Erbium Supply
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Every fiber optic network, every data center interconnect, every long-haul telecommunications link, every undersea cable requires erbium. The element&apos;s unique 1.55 &mu;m amplification wavelength makes it irreplaceable for global internet infrastructure while serving critical roles in medical lasers and nuclear applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Erbium-Doped Fiber Amplifiers (70% of Demand)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                EDFAs are essential for long-haul fiber optic networks, amplifying optical signals without electrical conversion. With global internet traffic growing at 28% annually and data center interconnect capacity doubling every 18 months, EDFA demand consumes 270 tonnes of erbium annually. Each major data center deployment requires thousands of EDFAs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">5G &amp; Network Infrastructure Buildout</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                5G network rollout requires dense fiber optic backhaul infrastructure connecting cell towers to core networks. China deployed 3.6 million 5G base stations through 2025, each requiring fiber amplification. Global 5G infrastructure buildout consumes 85 tonnes of erbium annually, with demand accelerating as deployment reaches rural areas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Undersea Cable Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Undersea fiber optic cables connecting continents use erbium-doped fiber amplifiers every 50&ndash;100 km to maintain signal strength across oceans. With 1.4 million kilometers of undersea cables deployed and 30,000+ km added annually, submarine cable systems consume 45 tonnes of erbium per year.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Medical Erbium:YAG Lasers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Erbium:YAG lasers operating at 2.94 &mu;m wavelength enable precision skin resurfacing, dental procedures, and soft tissue surgery. The medical laser sector consumes 38 tonnes annually, growing at 22% CAGR as minimally invasive dermatology and dental laser adoption accelerates globally.
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Erbium Demand Projection (Tonnes/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '480 t', note: 'Current' },
                { year: '2028', val: '720 t', note: 'Projected' },
                { year: '2030', val: '985 t', note: 'Projected' },
                { year: '2035', val: '1,450 t', note: 'Roskill' },
                { year: 'Supply \'30', val: '~635 t', note: 'Gap: 350+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-rose-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-rose-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, Fiber Broadband Association.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Erbium Comes From
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance works directly with rare earth mining companies and heavy rare earth separation facilities, securing erbium assets at the producer and refinery level. No middlemen. No intermediary traders. Direct from source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'China', desc: 'China produces 88% of global erbium from ionic clay deposits in southern provinces, particularly Jiangxi, Guangdong, and Fujian. Chinese heavy rare earth separation facilities produce erbium oxide for domestic fiber optic manufacturing and telecommunications infrastructure, though export restrictions are tightening supply.' },
              { region: 'North America (USA & Canada)', desc: 'United States and Canadian rare earth operations developing heavy rare earth separation capabilities, including Texas, Alaska, and Saskatchewan projects. Critical mineral designation has prioritized domestic erbium supply for telecommunications and data center infrastructure security.' },
              { region: 'Australia', desc: 'Australia\'s heavy rare earth deposits in Northern Territory and Western Australia contain erbium concentrations. New separation technologies enable economic erbium recovery from xenotime and ionic clay sources for fiber optic applications.' },
              { region: 'Southeast Asia & Vietnam', desc: 'Vietnam\'s ionic clay deposits and emerging Southeast Asian heavy rare earth processing facilities produce erbium oxide from regional mining operations. Alternative supply channels outside Chinese-dominated production for telecommunications supply chains.' },
              { region: 'Brazil & Madagascar', desc: 'Brazil\'s monazite deposits and Madagascar\'s heavy rare earth projects contain erbium concentrations. New separation facilities are being developed to extract erbium for regional telecommunications and medical device manufacturing.' },
              { region: 'Exploration & Preparation', desc: 'New heavy rare earth fields in preparation and exploration phases across Africa, Scandinavia, and Greenland, offering In-Ground Erbium positions at pre-production economics before reserves reach market.' },
            ].map((source, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{source.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with rare earth mining companies and heavy rare earth separation facilities. Better pricing, verified provenance, and a transparent chain of custody from mine to token.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Erbium Works
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
            Everything About Tokenized Erbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized erbium, In-Ground Erbium, instant settlement, and DeFi secondary markets on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <ErbiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            The Erbium Deficit Is Here
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            The world needs 985 tonnes of erbium by 2030. Supply will fall short by over 350 tonnes. Toto Finance is building the platform to tokenize erbium &mdash; from 1:1 redeemable refined oxide to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
