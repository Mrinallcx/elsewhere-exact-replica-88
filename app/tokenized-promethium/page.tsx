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
const PromethiumTickerBar = dynamicImport(
  () => import('../components/client/PromethiumTickerBar').then((mod) => ({ default: mod.PromethiumTickerBar }))
);
const PromethiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized promethium?',
    answer:
      'Tokenized promethium is a blockchain-based digital asset backed 1:1 by refined promethium-147 isotopes stored in secured, specialized nuclear material facilities. High-purity promethium-147, ready for nuclear battery production and space power applications. Each token is always redeemable for physical promethium on demand subject to appropriate handling protocols. Toto Finance is building the infrastructure to bring this to market with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Promethium by Toto Finance?',
    answer:
      'In-Ground Promethium is a tokenized future delivery contract for physical promethium from nuclear fuel reprocessing facilities where promethium-147 is recovered as a fission product byproduct. Short-term delivery (1-12 months) is tied to active facilities, and long-term delivery (1-6 years) is backed by proven recovery capacity. Designed for space agencies, nuclear battery manufacturers, defense contractors, sovereign wealth funds, and investors positioning for promethium supply growth.',
  },
  {
    question: 'Where does Toto Finance source its promethium?',
    answer:
      'Toto Finance works directly with nuclear fuel reprocessing facilities and isotope production centers across the United States (Oak Ridge and specialized facilities), Russia (isotope production reactors), Europe (France and UK reprocessing facilities), China (expanding fuel cycle infrastructure), and Japan/South Korea (nuclear research facilities). Sourcing covers active production facilities and future capacity expansion. No middlemen. Direct from source.',
  },
  {
    question: 'Who buys tokenized promethium?',
    answer:
      'Three categories: (1) Industrial clients needing physical promethium — space agencies and aerospace contractors (NASA, ESA, SpaceX, Blue Origin), nuclear battery manufacturers, betavoltaic device developers, deep-space mission equipment manufacturers, satellite power system producers, autonomous sensor manufacturers, defense contractors, nuclear research institutions, medical device developers (implantable power), and specialized luminescence manufacturers. (2) Investors and commodity brokers seeking exposure to the rarest nuclear material. (3) Crypto-native participants including funds, protocol treasuries, blockchain foundations, and DAOs seeking unique real-world asset diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'Toto Finance enables T+0 instant settlement using stablecoins: USDC (Circle), USDT (Tether), and USAT (Tether\'s US coin under the GENIUS Act). This streamlines the traditional nuclear material procurement process that can take 30-90 days, while maintaining full regulatory compliance and secured storage protocols.',
  },
  {
    question: 'Can I trade tokenized promethium on DeFi platforms?',
    answer:
      'Yes. Once purchased, secondary trading happens on DeFi platforms globally. Holders can buy, sell, hedge, earn yield through smart contract lending, or use promethium as collateral for on-chain loans. Investors can expose assets to short sellers or long traders who borrow and pay interest, all managed at the protocol level. Collateral loans backed by tokenized promethium represent a new programmable financial model for nuclear materials.',
  },
  {
    question: 'Why is promethium the only radioactive rare earth element?',
    answer:
      'Promethium is unique among the 17 rare earth elements as the only one with no stable isotopes — all promethium isotopes are radioactive. Promethium does not occur naturally on Earth in significant quantities and must be produced through nuclear fission or neutron activation in reactors. With a 2.6-year half-life, promethium-147 emits low-energy beta radiation ideal for nuclear batteries, providing continuous power for decades. This unique property makes promethium irreplaceable for long-duration power in space missions, deep-sea sensors, and remote monitoring where battery replacement is impossible.',
  },
  {
    question: 'What is the promethium supply forecast for 2030?',
    answer:
      'Global promethium-147 production is estimated at less than 100 grams annually from nuclear fuel reprocessing. As space missions accelerate, commercial space stations develop, lunar bases are established, and deep-space exploration expands, demand is projected to reach 280 grams annually by 2030. Supply will only reach approximately 120 grams even with expanded production capacity, creating a 160-gram gap. This represents the most extreme supply constraint of any material in the tokenized commodities market.',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to explore the platform and stay updated on launch announcements. Institutional investors, space agencies, nuclear battery manufacturers, defense contractors, and qualified buyers can reach out directly for partnership inquiries and early allocation discussions.',
  },
];

export default function TokenizedPromethiumPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Promethium | Digital Rare Earth Backed by Physical Assets | Toto Finance"
        description="Tokenized promethium by Toto Finance. 1:1 asset-backed promethium isotope tokens, always redeemable. In-Ground Promethium future delivery contracts."
        url="https://totofinance.co/tokenized-promethium"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Promethium', item: 'https://totofinance.co/tokenized-promethium' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div>
              <span className="inline-block bg-white/10 text-amber-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-amber-400/30">
                The Future of Rare Earth Ownership
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Promethium
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The only radioactive rare earth element powering nuclear batteries, space missions, and specialized luminescence applications is facing extreme supply constraints. Toto Finance is building the infrastructure to tokenize promethium &mdash; from 1:1 redeemable refined isotopes to In-Ground future delivery contracts &mdash; with instant stablecoin settlement and DeFi secondary markets.
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
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Promethium-147 (Pm-147) / Isotope Price</p>
                  <p className="text-sm text-gray-400">Global Nuclear Materials Market</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-light text-white">Price on Application</p>
                  <p className="text-sm text-amber-400 font-medium">Supply Constrained</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Market Size</p>
                  <p className="text-lg font-semibold text-white">$8M+</p>
                  <p className="text-xs text-gray-500">Estimated</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2025 Production</p>
                  <p className="text-lg font-semibold text-white">&lt;100 g</p>
                  <p className="text-xs text-gray-500">Globally</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">2026 Forecast</p>
                  <p className="text-lg font-semibold text-white">Critical</p>
                  <p className="text-xs text-gray-500">Scarcity</p>
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
      <PromethiumTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Promethium Crisis</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Why Promethium Is the Rarest Nuclear Material</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">The world is running out of promethium. Space agencies, nuclear battery developers, and specialized luminescence manufacturers are creating unprecedented demand while global supply remains virtually non-existent. This is not a cycle. It is extreme materials scarcity of the only radioactive rare earth element.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">&lt;100 g</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Annual Global Production</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Global promethium-147 production is estimated at less than 100 grams annually from nuclear reactor byproducts. Promethium is the only rare earth element with no stable isotopes &mdash; all isotopes are radioactive. Promethium does not occur naturally on Earth and must be produced through nuclear fission or neutron activation.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">Only 1</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Only Radioactive Rare Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium is unique among the 17 rare earth elements as the only one with exclusively radioactive isotopes. Promethium-147 emits low-energy beta radiation ideal for nuclear batteries, producing steady power for decades without recharging. This unique property makes promethium irreplaceable for long-duration power applications in space and remote environments.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.6 yr</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Promethium-147 Half-Life</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-147&apos;s 2.6-year half-life provides optimal long-term power generation for nuclear batteries while remaining manageable for handling and storage. This half-life is ideal for spacecraft, satellites, and remote sensors requiring 5&ndash;15 year operational lifetimes. Supply is fundamentally constrained by nuclear reactor production capacity and isotope separation complexity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: NUCLEAR BATTERY & SPACE DEMAND ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Nuclear Batteries &amp; Space Power</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">The Space Economy Is Exhausting Promethium Supply</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Every nuclear battery powering deep-space missions, every autonomous sensor in remote locations, every specialized phosphorescent coating requires promethium. The element&apos;s unique radioactive properties make it irreplaceable for long-duration power generation and specialized luminescence applications.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nuclear Batteries for Space Missions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-147 nuclear batteries provide continuous power for spacecraft, satellites, and deep-space probes operating beyond solar panel range. NASA, ESA, and commercial space companies require promethium for lunar bases, Mars missions, and outer solar system exploration. Each deep-space probe requires 5&ndash;20 grams of promethium-147, with demand accelerating as space missions scale.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Autonomous Sensors &amp; Remote Monitoring</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-powered nuclear batteries enable autonomous sensors in remote locations where battery replacement is impossible &mdash; ocean depths, arctic installations, underground infrastructure, and geophysical monitoring stations. The sensor power sector consumes estimated 30&ndash;40 grams annually, with demand growing as IoT remote monitoring expands.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Specialized Luminescent Coatings</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Promethium-147 activates phosphorescent compounds for self-luminous watch dials, instrument panels, and emergency signage requiring no external power. While tritium has largely replaced promethium for this application due to availability, specialized aerospace and defense applications still require promethium&apos;s unique properties.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Betavoltaic Battery Research</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Next-generation betavoltaic batteries using promethium-147 promise 20+ year operational lifetimes for medical implants, remote sensors, and microelectronics. Research institutions and battery developers consume 10&ndash;15 grams annually, with demand projected to accelerate as betavoltaic technology commercializes for cardiac pacemakers and neural implants.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Promethium Demand Projection (Grams/Year)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '65 g', note: 'Estimated' },
                { year: '2028', val: '150 g', note: 'Projected' },
                { year: '2030', val: '280 g', note: 'Projected' },
                { year: '2035', val: '500 g', note: 'Projected' },
                { year: 'Supply \'30', val: '~120 g', note: 'Gap: 160g+' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50' : i >= 3 ? 'bg-amber-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-700 font-medium' : i >= 3 ? 'text-amber-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Estimated from nuclear reactor production capacity, space mission requirements, and specialized application demand.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: RESOURCES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Where the Promethium Comes From</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">Toto Finance works directly with nuclear fuel reprocessing facilities and specialized isotope production centers, securing promethium assets at the producer level. No middlemen. No intermediary traders. Direct from source.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'United States', desc: 'United States nuclear facilities recover promethium-147 from spent nuclear fuel reprocessing and target irradiation programs. Oak Ridge National Laboratory and specialized isotope production facilities supply promethium for space missions and research applications. Domestic production is classified and limited.' },
              { region: 'Russia', desc: 'Russia operates specialized isotope production reactors and fuel reprocessing facilities recovering promethium-147 from nuclear fuel cycles. Russian facilities have historically supplied promethium for Soviet and international space programs. Export restrictions and geopolitical tensions constrain international availability.' },
              { region: 'Europe (France & UK)', desc: 'France\'s nuclear fuel reprocessing facilities and UK\'s specialized isotope production capabilities recover small quantities of promethium-147. European Space Agency requirements and research institutions create domestic demand that limits export availability.' },
              { region: 'China', desc: 'China\'s expanding nuclear fuel cycle infrastructure includes promethium recovery capabilities for domestic space program and nuclear battery development. Chinese production is directed toward national space missions and strategic applications with minimal international trade.' },
              { region: 'Japan & South Korea', desc: 'Japan and South Korea\'s nuclear research facilities produce limited quantities of promethium-147 for specialized applications. Production is primarily for domestic research and development programs.' },
              { region: 'Future Production Capacity', desc: 'Expansion of nuclear fuel reprocessing facilities and dedicated isotope production reactors could increase global promethium supply, offering future production capacity positions as nuclear energy and space exploration accelerate.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed"><strong>Secured at source.</strong> Toto Finance eliminates commodity brokers and trading intermediaries by working directly with nuclear fuel reprocessing facilities and isotope production centers. Better pricing, verified provenance, and a transparent chain of custody from production to token.</p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Promethium Works
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Everything About Tokenized Promethium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">Common questions about tokenized promethium, In-Ground Promethium, instant settlement, and DeFi secondary markets on Toto Finance.</p>
          <FAQStructuredData faqs={faqData} />
          <PromethiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Be First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">The Promethium Scarcity Is Here</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">The world needs 280 grams of promethium by 2030. Supply will deliver only 120 grams. Toto Finance is building the platform to tokenize promethium &mdash; from 1:1 redeemable refined isotopes to In-Ground future delivery &mdash; with instant stablecoin settlement and DeFi secondary markets.</p>
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
