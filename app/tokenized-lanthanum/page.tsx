// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const LanthanumTickerBar = dynamicImport(
  () => import('../components/client/LanthanumTickerBar').then((mod) => ({ default: mod.LanthanumTickerBar }))
);
const LanthanumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-lanthanum';
const PAGE_TITLE = 'Tokenized Lanthanum | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every barrel of gasoline refined passes through lanthanum. Toto Finance brings this industrial rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element that refines the world\'s fuel, sharpens its lenses, and powers its hybrid vehicles. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Lanthanum', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized lanthanum?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined lanthanum oxide (La₂O₃) in insured, audited vaults. High-purity grade (99.9%+ La₂O₃), ready for FCC catalyst production, optical glass manufacturing, NiMH battery fabrication, and phosphor applications. Redeemable for physical lanthanum on demand. Toto Finance is building the infrastructure to bring lanthanum on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Lanthanum?',
    answer:
      'A tokenized future delivery contract for lanthanum still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active processing capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for petroleum refiners, optical manufacturers, automotive companies, sovereign funds, and institutional investors positioning for the structural lanthanum deficit.',
  },
  {
    question: 'Where does the lanthanum come from?',
    answer:
      'Directly from rare earth mining companies and processing facilities across China (85% of production from Bayan Obo and ionic clay deposits), North America (USA and Canada developing domestic rare earth processing for industrial supply security), Australia (Lynas Rare Earths operations), Southeast Asia and Vietnam (ionic clay and Kuantan processing), and Brazil and India (monazite and heavy mineral sand deposits). No middlemen. No intermediary traders. More on partnerships and sourcing: https://totofinance.co/about.',
  },
  {
    question: 'Who buys tokenized lanthanum?',
    answer:
      'Three groups: (1) Industrial consumers, including petroleum refineries and FCC catalyst manufacturers, optical glass and lens producers, hybrid vehicle and NiMH battery manufacturers, LED lighting and phosphor producers, camera and scientific instrument companies, hydrogen storage alloy producers. (2) Industrial supply chain investors, including funds and allocators seeking direct exposure to the physical material underpinning petroleum refining, optics, and hybrid vehicles simultaneously, without company-specific operational risk. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral with multi-sector demand diversification.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional lanthanum procurement involves industrial traders, processing scheduling, ocean freight logistics, customs clearance, and banking settlement measured in weeks. Toto Finance connects lanthanum processors with buyers directly on-chain, eliminating every intermediary and settling transactions instantly.',
  },
  {
    question: 'Can I trade tokenized lanthanum on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use lanthanum tokens as collateral for stablecoin loans. Lanthanum has never had secondary market infrastructure of any kind despite being consumed at over 90,000 tonnes per year. Tokenization creates it for the first time.',
  },
  {
    question: 'Why is lanthanum essential for petroleum refining?',
    answer:
      'Lanthanum stabilizes zeolite catalyst structures inside fluid catalytic cracking units at the extreme temperatures required to convert heavy crude oil into gasoline and diesel. Lanthanum improves catalyst resistance to metal poisoning from vanadium and nickel impurities, increases gasoline yield by 2% to 4%, and extends catalyst lifespan by 30% to 50%. Global refining capacity of 100 million barrels per day depends on these catalysts. Every barrel of gasoline refined anywhere on earth passes through lanthanum-containing catalysts, making this element indispensable to global fuel production.',
  },
  {
    question: 'What is the lanthanum price outlook?',
    answer:
      'Roskill forecasts $2,200/mt in 2026. Critical Minerals Institute projects exceeding $2,500/mt by 2027 as petroleum refining, optical manufacturing, and hybrid vehicle battery demand accelerate while Chinese export restrictions tighten international availability. The deficit is expected to intensify through 2030 as new refinery capacity comes online across Asia and the Middle East, hybrid vehicle production scales globally, and LED lighting reaches full market saturation.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Petroleum refiners, optical manufacturers, automotive companies, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
  },
];

const orgAndProductsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://totofinance.co#org',
      name: 'Toto Finance',
      url: 'https://totofinance.co',
      logo: 'https://totofinance.co/assets/images/og-preview.png',
      description:
        'Tokenized commodity platform offering 1:1 asset-backed lanthanum oxide tokens and In-Ground Lanthanum future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Lanthanum Oxide Token',
      description:
        'Digital asset backed 1:1 by refined lanthanum oxide (La₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Lanthanum',
      description:
        'Tokenized future delivery contract for lanthanum in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedLanthanumPage() {
  return (
    <div className="min-h-screen w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgAndProductsJsonLd) }}
      />
      <PageStructuredData
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        pageType="WebPage"
        datePublished="2026-02-01"
        dateModified="2026-03-21"
        breadcrumbItems={breadcrumbItems}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqData} />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* FOLD 1: Hero */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-cyan-200/90 mb-4">
            Tokenized Lanthanum by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every Barrel of Gasoline Refined Passes Through Lanthanum. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            Right now, every petroleum refinery on earth is running fluid catalytic cracking units loaded with lanthanum-based catalysts. Every
            high-end camera lens, every precision microscope, every hybrid vehicle battery depends on lanthanum compounds. It is the most
            abundant rare earth element, yet 85% of global production is controlled by China, and the gap between what the world consumes and
            what it can produce is widening at industrial scale. Lanthanum demand reaches across petroleum refining, advanced optics, hybrid
            vehicle manufacturing, and LED lighting, yet access to lanthanum as an investable asset has never existed outside specialized rare
            earth procurement channels.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-cyan-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element that fuels, focuses, and powers modern industry on-chain for the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              See How We&apos;re Doing It
            </Link>
            <a
              href="#crisis"
              className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Why Lanthanum Matters
            </a>
          </div>
        </div>
      </section>

      <LanthanumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The World Refines Its Fuel Through Lanthanum. And Supply Cannot Keep Pace.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose lanthanum because it represents the most underestimated dependency in global industry. Not underestimated because it is
              obscure. Underestimated because it touches so many sectors simultaneously that no single industry recognizes how much it depends on
              the same constrained supply.
            </p>
            <p>
              Every petroleum refinery in the world uses fluid catalytic cracking catalysts stabilized with lanthanum. Every precision camera
              lens and scientific microscope relies on lanthanum glass for color accuracy. Every Toyota Prius on the road carries 10 to 15
              kilograms of lanthanum in its battery. Every LED bulb converting blue light to white uses lanthanum-doped phosphors. Lanthanum is
              the most abundant rare earth element, comprising up to 25% of monazite ore, yet 85% of global production originates in China,
              and the combined demand from petroleum, optics, batteries, and lighting is growing faster than any single nation&apos;s processing
              capacity can serve. The paradox of lanthanum is abundance in the ground and scarcity in the market.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">12,500 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Abundant in the Earth. Scarce in the Market.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 12,500-tonne lanthanum deficit in 2025, with the gap widening through 2030. Despite being the most abundant
                rare earth element, lanthanum supply is concentrated in Chinese processing facilities at Bayan Obo and southern provincial ionic
                clay operations. Export restrictions and domestic industrial consumption are reducing international availability faster than new
                processing capacity can be developed elsewhere.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">40%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Every Refinery on Earth Depends on This Element</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fluid catalytic cracking catalysts containing lanthanum are essential for converting heavy crude oil into gasoline and diesel.
                40% of global lanthanum demand comes from petroleum refining, where lanthanum improves catalyst stability, increases gasoline
                yield, and extends catalyst lifespan. Global refining capacity of 100 million barrels per day runs through lanthanum-containing
                zeolite catalysts every hour of every day.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">48,000 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap Measured in Refineries, Lenses, and Batteries</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global lanthanum demand is projected to reach 128,000 tonnes per year by 2030, while supply from existing and planned rare earth
                mines will deliver only 80,000 tonnes. The 48,000-tonne gap represents a 38% shortfall. Every new refinery, every hybrid vehicle
                production line, every optical manufacturing expansion widens it further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 3: THE ELEMENT */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">THE ELEMENT</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            Understanding Why Lanthanum Demand Outpaces Its Abundance
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The most abundant rare earth element on earth. Essential for the catalysts that refine fuel, the glass that creates sharp images,
            and the batteries that power hybrid vehicles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-cyan-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Lanthanum element card showing La symbol, atomic number 57, density, melting point, and industrial catalyst classification"
              >
                <p className="text-3xl font-light mb-1">La</p>
                <ul className="space-y-1 text-cyan-100/90">
                  <li>Atomic Number: 57</li>
                  <li>Density: 6,146 kg/m³</li>
                  <li>Melting Point: 920°C</li>
                  <li>Ore Concentration: 25% of monazite</li>
                  <li>Classification: Industrial Catalyst and Optical Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-teal-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining operation at bastnäsite and monazite deposits extracting lanthanum in China, USA, and Australia"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from bastnäsite, monazite, and ionic clay minerals in China, USA, Australia, and Brazil. The most abundant rare earth
                element, comprising up to 25% of monazite ore. Despite this natural abundance, 85% of refined lanthanum oxide production is
                concentrated in Chinese processing facilities, creating a supply chain bottleneck that belies the element&apos;s geological
                prevalence.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore → Chemical Separation → Ion Exchange → Purification → 99.9% Pure Lanthanum Oxide
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-sky-800/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Lanthanum catalytic and optical properties showing FCC catalyst zeolite structure and high-refractive-index glass lens"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Chemistry That Makes It Indispensable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stabilizes zeolite catalyst structures at the extreme temperatures inside fluid catalytic cracking units, enabling petroleum
                refineries to convert heavy crude into usable fuel. Produces optical glass with exceptionally high refractive index and low
                dispersion, enabling lens designs with superior color correction and compact form factors. Also forms the anode alloy in
                nickel-metal hydride batteries, storing hydrogen for hybrid vehicle energy systems. Few elements serve so many unrelated
                industries simultaneously.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of lanthanum including petroleum refinery FCC catalysts, camera lenses, hybrid vehicle NiMH batteries, and LED phosphors"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Fluid catalytic cracking catalysts (petroleum refining), high-refractive-index optical glass (cameras, microscopes, telescopes),
                nickel-metal hydride battery anodes (hybrid vehicles), LED and display phosphors, hydrogen storage alloys, glass polishing
                compounds, ceramics, carbon arc lighting.
              </p>
              <p className="text-sm font-semibold text-cyan-800 bg-cyan-50 rounded-lg px-3 py-2">
                $1.8B+ global market (25% of monazite ore content)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 4: THE CATALYST */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE CATALYST</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Refineries Are Running. Lenses Are Shipping. Batteries Are Charging. Lanthanum Supply Is Falling Behind All of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a direct physical link between global fuel production, optical manufacturing, hybrid vehicle assembly, and the consumption
            of lanthanum. Every barrel of crude refined through an FCC unit consumes catalyst containing lanthanum. Every precision lens ground
            for a camera body uses lanthanum glass. Every hybrid vehicle rolling off an assembly line carries kilograms of lanthanum in its
            battery. These industries share nothing in common except a dependency on the same constrained element, processed overwhelmingly in
            the same country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">FCC Petroleum Catalysts: 40% of All Lanthanum Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fluid catalytic cracking units consume 50,000 tonnes of lanthanum annually as zeolite catalyst stabilizers. Lanthanum improves
                catalyst resistance to metal poisoning from vanadium and nickel impurities in crude oil, increases gasoline yield by 2% to 4%,
                and extends catalyst lifespan by 30% to 50%. Global refining capacity of 100 million barrels per day depends on these catalysts,
                and every new refinery commissioned in Asia, the Middle East, and Africa adds permanent lanthanum demand to a supply chain
                already in deficit.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Optical Glass and Precision Lenses: Clarity at Every Focal Length</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lanthanum oxide is the essential ingredient in high-refractive-index optical glass used in camera lenses, microscopes,
                telescopes, and precision scientific instruments. Lanthanum glass enables lens designs with superior color correction, minimal
                chromatic aberration, and compact form factors that would be physically impossible without this element&apos;s optical properties.
                The optical sector consumes 18,000 tonnes annually, growing with smartphone camera advancement and scientific instrument demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nickel-Metal Hydride Batteries: The Hybrid Vehicle Standard</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hybrid vehicle batteries use lanthanum-nickel alloy anodes for hydrogen storage and energy delivery. Each Toyota Prius hybrid
                contains 10 to 15 kilograms of lanthanum in its NiMH battery pack. Despite lithium-ion growth in full EVs, NiMH batteries remain
                the standard for hybrids due to superior safety, thermal stability, and cycle durability. Battery applications consume 22,000
                tonnes of lanthanum annually, and hybrid production continues scaling across every major automaker.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">LED Phosphors and Display Backlights: Light Conversion at Scale</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lanthanum-doped phosphors convert blue LED emission into warm white light for solid-state lighting and display backlighting
                systems. The lighting and display sectors consume 12,000 tonnes of lanthanum per year, with demand accelerating as LED adoption
                reaches 85% global market penetration by 2028 and display manufacturing scales for automotive, commercial, and consumer
                applications.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Spans Refineries, Factories, and Assembly Lines</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global lanthanum demand rising from 92,000 tonnes in 2025 to 128,000 tonnes by 2030, with supply reaching
              approximately 80,000 tonnes, creating a 48,000 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '92.0', note: 'Demand (kt)' },
                { year: '2028', val: '108.0', note: 'Demand (kt)' },
                { year: '2030', val: '128.0', note: 'Demand (kt)' },
                { year: '2035', val: '165.0', note: 'Roskill' },
                { year: '2030 Supply', val: '~80.0', note: 'Gap: 48k+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-cyan-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} kt</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Roskill, Critical Minerals Institute, USGS, International Rare Earth Association.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Lanthanum
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to critical industrial materials comes to life in two products. One for lanthanum that is
            already refined and vaulted. One for lanthanum still in rare earth deposits awaiting processing. Both backed by physical assets.
            Both settleable in stablecoins. Both built to give the refineries, optical manufacturers, battery producers, and investors
            confronting a 48,000-tonne supply gap a way to secure the element that keeps industry running.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-cyan-700 underline-offset-2 hover:underline">
                  1:1 Lanthanum Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical lanthanum. Every token is backed 1:1 by refined lanthanum oxide (La₂O₃) in insured, audited vaults.
                High-purity grade (99.9%+ La₂O₃), ready for FCC catalyst manufacturing, optical glass production, NiMH battery anode fabrication,
                and phosphor applications. Redeemable for physical lanthanum on demand. Not a derivative. Not a tracker. The actual material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined lanthanum oxide (99.9%+ purity grade)</li>
                <li>Always redeemable for physical lanthanum delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: FCC catalysts, optical glass, NiMH batteries, LED phosphors, hydrogen storage</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-cyan-700 underline-offset-2 hover:underline">
                  In-Ground Lanthanum
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in lanthanum that has not been processed yet. Tokenized future delivery contracts backed by proven lanthanum
                content in rare earth deposits at certified mining operations. For organizations that understand that 85% production
                concentration in a single country serving a 128,000-tonne demand curve by 2030 creates a supply security imperative that rewards
                early positioning.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven lanthanum content in rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting processing concentration risk and geopolitical supply constraints</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for petroleum refiners, automotive manufacturers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cyan-900/10 border border-cyan-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-cyan-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term lanthanum delivery contracts tied to active rare earth operations with processing capacity. For petroleum refiners
                managing quarterly catalyst replenishment, optical manufacturers scheduling lens production runs, and commodity specialists trading
                near-term lanthanum supply dynamics in a market shaped by Chinese export policy decisions.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year lanthanum positions backed by proven rare earth reserves at earlier-stage operations. Built for sovereign strategic
                reserves, petroleum companies planning decade-scale refinery operations, automotive manufacturers securing hybrid vehicle battery
                supply, and institutional allocators who recognize that 85% production concentration in a single geopolitical jurisdiction is not
                a risk to monitor but a constraint to hedge against.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 6: SOURCING */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">SOURCING</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Securing the Element That Refines the World&apos;s Fuel. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Lanthanum is the most abundant rare earth element, yet its refined supply is controlled by a remarkably concentrated processing
            infrastructure. China&apos;s Bayan Obo complex and southern provincial ionic clay operations produce 85% of the world&apos;s
            lanthanum oxide. Toto Finance works directly with{' '}
            <Link href="/about" className="text-cyan-800 font-medium underline underline-offset-2 hover:text-cyan-600">
              rare earth mining companies and processing facilities
            </Link>{' '}
            to secure lanthanum at the production level, bypassing the trader networks and broker chains that add cost and opacity to a supply
            chain that refineries, optical manufacturers, and battery producers cannot afford to see disrupted.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 85% of global lanthanum from bastnäsite deposits at Bayan Obo in Inner Mongolia and ionic clay deposits in southern provinces including Jiangxi, Guangdong, and Fujian. Sichuan province hosts the world\'s largest light rare earth separation facilities processing lanthanum to industrial-grade oxides. Export restrictions and domestic consumption priorities for catalysts and batteries are progressively reducing international availability.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'US and Canadian rare earth projects include Mountain Pass (California), Bear Lodge (Wyoming), and Nechalacho (Northwest Territories), all containing significant lanthanum concentrations as the most abundant rare earth in their deposit mineralogy. Critical mineral designation has prioritized domestic lanthanum processing to ensure petroleum refining and battery manufacturing maintain supply security independent of Chinese exports.',
              },
              {
                title: 'Australia',
                text: 'Lynas Rare Earths operates the world\'s largest rare earth processing facility outside China, producing lanthanum oxide from Western Australian deposits for global industrial customers. Northern Territory projects and new processing investments are expanding Australian lanthanum capacity as a cornerstone of allied-nation supply chain diversification.',
              },
              {
                title: 'Southeast Asia and Vietnam',
                text: 'Vietnamese ionic clay deposits and Malaysian processing facilities (including Lynas\'s Kuantan operation) produce lanthanum oxide from regional and imported concentrates. These Southeast Asian operations provide critical alternative supply routes for petroleum refiners and optical manufacturers seeking procurement channels outside Chinese export controls.',
              },
              {
                title: 'Brazil and India',
                text: 'Brazilian monazite deposits and Indian coastal heavy mineral sands contain lanthanum as a primary rare earth component, often comprising 20% to 25% of ore content. New separation facilities under development in both countries will extract lanthanum for regional catalyst manufacturing, optical production, and battery supply chains.',
              },
              {
                title: 'Exploration and Development',
                text: 'New rare earth projects across Africa, Scandinavia, and Greenland are in exploration and feasibility stages. These represent the next generation of lanthanum supply, and In-Ground Lanthanum positions offer access at pre-production economics before processing output reaches the market.',
              },
            ].map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at the processing stage.</strong> Lanthanum&apos;s bottleneck is not in the ground. It is in the processing facility.
              Toto Finance works at this critical production point, eliminating the broker and trader layers that sit between processing output
              and end-user delivery. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-cyan-200">
                mine to token
              </Link>
              . Access at the point where lanthanum actually enters the market, not three intermediaries downstream.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Lanthanum
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Lanthanum has always been traded through industrial rare earth channels, in bulk quantities, at prices negotiated between processors
            and large-scale consumers with no public benchmark. The petroleum refineries, optical manufacturers, and battery producers that
            consume tens of thousands of tonnes annually have had no transparent market to procure through and no mechanism to hedge future
            supply. Toto Finance opens that mechanism for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-cyan-800">INDUSTRIAL CONSUMERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies That Keep Industry Running</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on lanthanum prices. They consume lanthanum in the catalysts that refine fuel, in the glass that
                creates sharp images, in the battery anodes that power hybrid vehicles, in the phosphors that convert light. Tokenized lanthanum
                gives them{' '}
                <Link href="/products" className="text-cyan-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability without the lead times and geopolitical exposure of traditional rare
                earth procurement channels dominated by a single supplier nation.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Petroleum refineries and FCC catalyst manufacturers, optical glass and precision lens producers, hybrid vehicle and NiMH battery
                manufacturers, LED lighting and phosphor producers, camera and imaging equipment companies, microscope and scientific instrument
                manufacturers, hydrogen storage alloy producers, glass polishing compound manufacturers, ceramics and specialty glass producers,
                carbon arc lighting and industrial chemical manufacturers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">INDUSTRIAL SUPPLY CHAIN INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in the Element That Touches Every Industry</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors allocate billions to oil and gas stocks, automotive manufacturers, and optical technology companies, yet the physical
                element that enables petroleum refining, hybrid vehicles, and precision optics simultaneously has been entirely uninvestable.
                Until now. Tokenized lanthanum offers direct exposure to a material with demand diversified across four major industrial sectors,
                fractional access from $1, and zero dependence on any single company&apos;s operational performance. The thesis spans industries:
                as long as the world refines fuel, manufactures lenses, produces hybrid vehicles, and installs LED lighting, lanthanum demand
                compounds from every direction.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Assets with the Material That Powers Physical Industry</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lanthanum is the rare earth element with the broadest industrial footprint, touching petroleum, optics, transportation, and
                lighting simultaneously. Tokenized lanthanum offers on-chain participants collateral backed by a material with demand
                diversification that most single-commodity assets cannot match: four independent industrial sectors, each growing on its own
                trajectory, all drawing from the same constrained supply. For protocols, treasuries, and funds seeking real-world assets with
                multi-sector demand resilience.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking industrial-commodity diversified exposure, protocol treasuries diversifying into the physical layer of global
                manufacturing, DeFi protocols building collateral pools with multi-sector demand resilience, blockchain foundations investing in
                materials with cross-industry essentiality, DAOs with industrial infrastructure and energy transition investment mandates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 8: Settlement */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">GLOBAL TRADE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement for Tokenized Lanthanum. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Lanthanum trades in higher volumes than most rare earths, yet it shares the same opaque procurement infrastructure. No public
            exchange. No standardized contract. No transparent price benchmark. Every transaction moves through industrial rare earth traders who
            control pricing information, manage logistics across geopolitically sensitive supply chains, and extract margin at every step. For
            refineries and manufacturers that need lanthanum by the tonne to keep production lines running, the procurement process operates with
            the transparency of a private negotiation and the speed of international freight. We built something that treats industrial-scale
            procurement with the efficiency it demands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Rare Earth Processing Facility',
                  'Industrial Rare Earth Trader',
                  'Logistics and Freight Coordinator',
                  'Clearing Agent',
                  'Custodian Bank',
                  'Correspondent Bank',
                  'Buyer',
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-600">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-red-600 font-medium mt-6 pt-4 border-t border-gray-200">
                Settlement: T+5 to T+30 (standard for rare earth transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / Processing Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-cyan-200">
                          Toto Finance Platform
                        </Link>
                      ) : (
                        step
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-green-400 font-medium mt-6 pt-4 border-t border-white/10">Settlement: T+0 (Instant)</p>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                The lanthanum market operates through industrial rare earth trading channels that have functioned the same way for decades.
                Processors in China negotiate with international traders, who negotiate with end-users, who receive material weeks or months
                after initiating procurement. Toto Finance uses blockchain to build what industrial supply chains have never had: a transparent,
                instant-settlement platform connecting lanthanum processors with the refineries, manufacturers, and investors that consume it,
                compressing a multi-week procurement cycle into a single transaction.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of Industrial Demand</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and cross-chain integration that petroleum refiners, automotive procurement operations, and industrial-scale lanthanum buyers require for auditable digital transactions.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing the settlement depth that industrial-volume lanthanum transactions require. When procurement operates in tonnes rather than grams, USDT delivers the liquidity infrastructure to execute at scale without counterparty delay.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for industrial procurement transactions where domestic compliance infrastructure, supply chain audit requirements, and US jurisdictional mandates govern purchasing operations at refinery and manufacturing scale.',
              },
            ].map((coin) => (
              <div key={coin.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="font-semibold text-gray-900">{coin.name}</p>
                <p className="text-xs text-gray-500 mb-3">{coin.issuer}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{coin.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLD 9: DeFi */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">SECONDARY MARKETS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            DeFi Infrastructure for Tokenized Lanthanum
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Lanthanum is consumed at tens of thousands of tonnes per year across four major industrial sectors, yet it has had zero financial
            infrastructure for its entire commercial history. No exchange listing. No ETF. No futures contract. No lending facility. No
            collateral framework. Tokenization does not merely digitize lanthanum. It builds financial architecture around an industrial material
            that has been procured through phone calls and purchase orders since the rare earth industry began.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Open Lanthanum Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, a refinery needing lanthanum catalyst material sent a purchase order to an industrial rare earth trader and
                waited for a quote. There was no market to compare against. No competing bids. No price transparency. Tokenized lanthanum creates
                a continuous, open market on decentralized exchanges where industrial buyers, commodity traders, and individual investors can all
                participate in price discovery, execute transfers instantly, and access liquidity across chains. This is not a trading
                improvement. This is the conversion of a procurement process into an actual market.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Generated by Industrial Consumption</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend lanthanum tokens to counterparties seeking leveraged exposure to rare earth pricing or hedged positions in industrial
                materials. Interest rates reflect real-world demand for lanthanum exposure, tied to petroleum refining throughput, hybrid vehicle
                production schedules, and optical manufacturing capacity expansion. Yield generated by the continuous industrial consumption
                of 92,000 tonnes per year, not by token emission mechanics or governance subsidy programs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Access Without Disrupting Procurement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Petroleum refineries and automotive manufacturers holding lanthanum reserves have historically had one option for converting those
                holdings to capital: sell into the industrial market at whatever price a trader offered. Tokenized lanthanum eliminates that
                constraint.{' '}
                <Link href="/products" className="text-cyan-800 font-medium underline underline-offset-2">
                  Borrow against lanthanum
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For industrial buyers managing cash flow against multi-year
                procurement contracts, this unlocks working capital without disrupting the supply positions that keep refinery FCC units and
                battery production lines running.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Architecture for a Geopolitically Sensitive Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lanthanum&apos;s supply chain is concentrated in a single country that has demonstrated willingness to use export controls as
                geopolitical leverage. A policy announcement from Beijing can shift global lanthanum availability and pricing within days.
                Traditional risk management through long-term supply agreements and inventory stockpiling is capital-intensive and inflexible.
                Smart contract infrastructure automates collateral monitoring, margin management, and position adjustment in real time, providing
                programmable risk controls for a market where the primary supply risk is political rather than geological.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Processing Facility to Global Digital Market: The Lanthanum Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Processed: Lanthanum oxide verified at processing facility, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time industrial and commodity demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement systems',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for geopolitical supply risk hedging',
                'Delivered: Redeemed for physical lanthanum oxide (La₂O₃) for catalyst manufacturing, optical production, battery fabrication, or industrial use',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0 w-full md:w-auto">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">
                      {i + 1}
                    </div>
                    <p className="text-xs text-gray-700 max-w-[168px] leading-tight">{step}</p>
                  </div>
                  {i < 4 && (
                    <svg className="w-5 h-5 text-gray-300 hidden md:block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 10: Comparison */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">WHY TOKENIZED</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tokenized Lanthanum vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a clean way to invest in lanthanum. Rare earth ETFs dilute exposure across dozens of elements. Mining stocks
            carry operational risk unrelated to lanthanum pricing. Physical procurement requires industrial-scale relationships with rare earth
            processors and minimum orders measured in metric tonnes. Toto Finance built what industrial commodity markets have been missing.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized lanthanum on Toto Finance versus rare earth ETFs, physical lanthanum procurement, and mining stocks across 10 features including lanthanum-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Lanthanum</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Lanthanum-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$10,000+ (tonne scale)', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Private negotiation', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Industrial traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-cyan-50/50">{row[2]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOLD 11: Platform */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">PLATFORM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Building Financial Infrastructure for the Most Consumed Rare Earth on Earth
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Lanthanum has been procured through industrial rare earth trading channels since petroleum refining first adopted FCC catalysts in
            the mid-20th century. No standardized contracts. No public pricing benchmarks. No settlement infrastructure. No collateral
            frameworks. Every feature of the Toto Finance platform for lanthanum was built from the ground up because the largest-volume rare
            earth element on the periodic table has operated without financial infrastructure for its entire commercial history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Industrial-Scale Delivery',
                b: 'Every lanthanum token connects to verified lanthanum oxide (La₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for FCC catalyst production, optical glass manufacturing, battery anode fabrication, or phosphor applications. In a market where procurement verification has always depended on trader relationships and supply chain reputation, on-chain proof-of-reserves replaces intermediary trust with transparent, immutable verification.',
              },
              {
                t: 'Price Discovery for a Market That Trades in the Dark',
                b: "Lanthanum has never had a public price benchmark despite being consumed at over 90,000 tonnes per year. Pricing is negotiated privately between processors and industrial traders, with information asymmetry favoring the supply side. Toto Finance's oracle feeds and on-chain trading activity create the first transparent lanthanum pricing mechanism: real-time, independently verifiable, and accessible to every participant from petroleum refineries to individual investors.",
              },
              {
                t: 'Instant Settlement for a Supply Chain That Moves by Ship',
                b: 'Traditional lanthanum procurement operates on freight timelines: purchase orders, processing scheduling, container loading, ocean shipping, customs clearance, and banking settlement that spans weeks to months depending on origin and destination. Token settlement is T+0 with stablecoins. For refineries managing catalyst inventory against crude processing schedules, instant execution converts procurement from a logistics planning exercise into a responsive, on-demand capability.',
              },
              {
                t: 'Compliance for Cross-Border Industrial Rare Earth Trade',
                b: 'Lanthanum trade crosses jurisdictions with rare earth export controls, strategic material designations, and industrial end-use verification requirements that vary by country and change with geopolitical conditions. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transaction automatically satisfies applicable regulatory requirements without the documentation burden that slows industrial procurement across borders.',
              },
              {
                t: 'Financial Infrastructure for a 90,000-Tonne Market',
                b: 'Lending, borrowing, hedging, and collateral management for lanthanum: functions that industrial procurement teams and commodity investors have never been able to access for this material. Smart contract protocols enable yield generation from lanthanum positions, stablecoin borrowing against holdings, and programmable hedging strategies against geopolitical supply disruption. An entire financial stack, purpose-built for the most consumed rare earth element that has somehow never had a financial market of its own.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized lanthanum is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, industrial procurement platforms, and individual holders can interact with lanthanum tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
              },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{x.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLD 12: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Lanthanum FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized lanthanum, In-Ground Lanthanum, catalyst and industrial demand, and how Toto Finance provides access to
            the most consumed rare earth element on the periodic table.
          </p>
          <LanthanumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-cyan-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            The World Refines 100 Million Barrels a Day Through Lanthanum. Supply Is Falling 48,000 Tonnes Short.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every barrel of gasoline depends on lanthanum catalysts. Every precision lens, every hybrid battery, every LED bulb. The world needs
            128,000 tonnes by 2030. Supply will deliver 80,000. The 48,000-tonne gap compounds with every refinery commissioned, every hybrid
            vehicle assembled, every camera lens manufactured, every LED installed. Toto Finance is building the infrastructure to bring this
            essential industrial material to an open, transparent, instant-settlement market for the first time in its history.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Early Access
          </Link>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
