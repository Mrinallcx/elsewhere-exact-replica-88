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
const DysprosiumTickerBar = dynamicImport(
  () => import('../components/client/DysprosiumTickerBar').then((mod) => ({ default: mod.DysprosiumTickerBar }))
);
const DysprosiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-dysprosium';
const PAGE_TITLE = 'Tokenized Dysprosium | Critical Rare Earth for EV & Defense Magnets | Toto Finance';
const PAGE_DESCRIPTION =
  'The hidden bottleneck of electrification. Toto Finance brings dysprosium ownership on-chain from 1:1 redeemable rare earth tokens to In-Ground future delivery contracts. The magnet metal that EVs, defense systems, and wind turbines cannot function without. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Dysprosium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized dysprosium?',
    answer:
      "A blockchain-based digital asset linked to verified physical dysprosium supply in insured custody. High-purity grade (99.9%+ Dy), redeemable for physical delivery on demand. Toto Finance is building the infrastructure to bring dysprosium on-chain with instant stablecoin settlement and DeFi secondary markets creating financial access to a material that has never had it.",
  },
  {
    question: 'What is In-Ground Dysprosium?',
    answer:
      'A tokenized future delivery contract for dysprosium still at certified rare earth mining operations. Short-term (1–12 months) for active operations with separation capacity, long-term (1–6 years) for earlier-stage deposits. Built for defense contractors, EV manufacturers, sovereign funds, and institutional allocators positioning for structural scarcity.',
  },
  {
    question: 'Where does Toto Finance source dysprosium?',
    answer:
      'From rare earth mining operations and separation facilities across multiple jurisdictions China, Myanmar, Australia, North America, Vietnam, and exploration-stage projects in Greenland, Scandinavia, Brazil, and East Africa. Diversified sourcing is core to our model because dysprosium\'s concentration risk is the primary vulnerability we\'re designed to address.',
  },
  {
    question: 'Who accesses tokenized dysprosium?',
    answer:
      'Three groups: (1) Strategic industrial buyers, EV manufacturers, defense contractors, wind turbine OEMs, robotics firms, nuclear component suppliers, medical device makers. (2) Institutional and professional investors funds, family offices, and commodity specialists positioning for rare earth supply bottlenecks. (3) On-chain participants crypto funds, protocol treasuries, DeFi protocols, and DAOs seeking the rarest real-world asset class available in digital markets.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional rare earth transactions involve brokers, processors, logistics coordinators, banks, and clearing houses that can delay settlement by weeks. Toto Finance connects sources with buyers directly on-chain, eliminating every intermediary in the chain.',
  },
  {
    question: 'Can I trade tokenized dysprosium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use dysprosium tokens as collateral for stablecoin loans. Dysprosium has never had secondary market infrastructure; tokenization creates it from scratch.',
  },
  {
    question: "Why can't dysprosium supply just increase to meet demand?",
    answer:
      "Because of byproduct economics. Dysprosium exists as 1-2% of total rare earth ore. Increasing supply means mining and processing vastly more total rare earth material most of which the market doesn't need. Additionally, separation of heavy rare earths is technically complex and capacity is concentrated in China. New separation facilities take 5-10 years to build and commission.",
  },
  {
    question: 'Why is dysprosium critical for EV motors and defense systems?',
    answer:
      'Neodymium magnets used in EV traction motors and defense guidance systems lose magnetic strength at operating temperatures above 80°C. Adding dysprosium raises this threshold to 140°C+, enabling reliable performance under sustained high-temperature operation. Without dysprosium, EV motors would overheat during highway driving and defense systems would degrade in field conditions.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Defense contractors, EV manufacturers, wind energy companies, institutional investors, and strategic buyers can reach out directly for partnership discussions and early allocation.',
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
        'Tokenized commodity platform offering digitally represented dysprosium supply and In-Ground Dysprosium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Dysprosium Token',
      description:
        'Digital asset linked to verified high-purity dysprosium supply in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Dysprosium',
      description:
        'Tokenized future delivery contract for dysprosium at certified rare earth mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedDysprosiumPage() {
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
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-indigo-200/90 mb-4">
            Tokenized Dysprosium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            The Metal That Makes Every EV Motor and Defense Magnet Work Under Pressure. Now Accessible to Everyone.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto text-left md:text-center">
            Without dysprosium, permanent magnets fail under heat. EV motors lose power. Defense guidance systems degrade. Wind turbines
            underperform. Yet this critical heavy rare earth is geologically scarce, produced as a byproduct, and controlled by a handful
            of nations. Access to dysprosium as an asset has never existed outside industrial procurement contracts and state-backed
            supply chains.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-indigo-200">
              Toto Finance
            </Link>{' '}
            is changing that, bringing dysprosium ownership on-chain with instant stablecoin settlement and DeFi secondary markets.
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
              Why Dysprosium Matters
            </a>
          </div>
        </div>
      </section>

      <DysprosiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Dysprosium Is the Hidden Bottleneck of the Electrification Era. And Almost No One Is Paying Attention.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We didn&apos;t choose dysprosium because it&apos;s well known. We chose it because it&apos;s the opposite — a material so
              critical and so scarce that entire industries depend on it, yet almost no one outside industrial procurement has ever had a
              way to access it.
            </p>
            <p>
              Dysprosium is a heavy rare earth element added to neodymium magnets to prevent them from losing strength under heat.
              Without it, EV traction motors overheat, defense guidance systems degrade, and wind turbine generators underperform. It is
              geologically scarce, produced almost entirely as a byproduct of other rare earth mining, and concentrated in a supply
              chain that runs through just two countries. There is no substitute. There is no easy way to scale production. And demand is
              accelerating faster than any new mine can respond to.
            </p>
            <p className="font-medium text-gray-900">That&apos;s why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">98%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Most Concentrated Supply Chain on Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                China and Myanmar together produce approximately 98% of the world&apos;s heavy rare earths, including dysprosium.
                Myanmar&apos;s Wa State — responsible for the majority of the country&apos;s output — banned mining in August 2023,
                removing significant tonnage from the market. China&apos;s export controls and production quotas add further constraint.
                No other material has this level of supply concentration.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">10%+</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Demand Growing Faster Than Any Mine Can Deliver</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global dysprosium demand is growing at over 10% annually, driven by EV motor production, wind turbine scaling, and
                defense system modernization. Each EV traction motor requires 100-200 grams of dysprosium to maintain magnetic
                performance under operating heat. With 85 million vehicles produced annually and EV penetration accelerating, the math
                is unforgiving.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">Byproduct</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">You Can&apos;t Just Mine More Dysprosium</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unlike copper or tin, dysprosium cannot be mined independently. It exists as a small fraction of total rare earth ore —
                typically 1-2% of deposit content. Increasing dysprosium supply means mining and processing vastly more total rare earth
                material, most of which the market may not need. This byproduct economics trap makes supply structurally unable to
                respond to demand signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 3: THE METAL */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">THE METAL</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            Understanding Why Dysprosium Cannot Be Replaced
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The critical heavy rare earth that enables electric vehicles and wind turbines to operate at temperatures where ordinary
            magnets fail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-indigo-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Dysprosium element card showing Dy symbol, atomic number 66, density, magnetic properties, and high-temperature resistance"
              >
                <p className="text-3xl font-light mb-1">Dy</p>
                <ul className="space-y-1 text-indigo-100/90">
                  <li>Atomic Number: 66</li>
                  <li>Density: 8,540 kg/m³</li>
                  <li>Property: Most Magnetic Element</li>
                  <li>Property: High-Temperature Resistant</li>
                  <li>Classification: Heavy REE, Critical for EVs</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-violet-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining operation extracting xenotime and monazite minerals containing dysprosium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from xenotime, monazite, and bastnäsite minerals in China, Myanmar, Australia, and Vietnam. Dysprosium
                constitutes only 1-2% of total rare earth ore content, making it one of the most difficult elements to source at scale.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">Ore → Acid Leaching → Separation → Reduction → 99.9% Pure Dysprosium</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-indigo-700/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="High-performance neodymium magnet enhanced with dysprosium for heat resistance in EV motors"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Makes It Irreplaceable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The strongest ferromagnetic element — retains magnetism at temperatures up to 140°C where standard neodymium magnets would
                demagnetize. High neutron absorption cross-section makes it essential for nuclear reactor control rods. No other element
                provides this combination of magnetic strength and thermal stability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Industrial applications of dysprosium including EV motor magnets, wind turbine generators, and defense system components"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                EV traction motors, wind turbine generators, defense guidance systems, hard disk drives, nuclear reactor control rods,
                laser materials, dosimeters, magnetostrictive alloys, and high-performance actuators.
              </p>
              <p className="text-sm font-semibold text-indigo-800 bg-indigo-50 rounded-lg px-3 py-2">
                10%+ annual demand growth driven by EVs and wind power
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
            EVs, Defense, and Wind Power All Compete for the Same Scarce Metal
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Most supply chain bottlenecks have workarounds. Dysprosium doesn&apos;t. Every EV motor that needs to survive sustained
            highway driving temperatures, every missile guidance system that must function in extreme conditions, every offshore wind
            turbine generator exposed to continuous thermal cycling they all require the same element that constitutes 1-2% of rare earth
            ore. Three industries. One scarce material. No substitute.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Electric Vehicles 100-200 Grams Per Motor</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every EV traction motor uses dysprosium-enhanced NdFeB permanent magnets to maintain power output at operating
                temperatures exceeding 150°C. With global EV production scaling past 20 million units annually by 2026 and heading toward
                40 million by 2030, dysprosium demand from automotive alone is growing faster than total current supply can accommodate.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Defense &amp; Aerospace No Performance Compromise Allowed</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Precision-guided munitions, radar systems, satellite actuators, and jet engine components use dysprosium-enhanced
                magnets because failure under thermal stress is not an option. Defense procurement operates on multi-year contracts,
                locking in dysprosium supply years ahead and reducing availability for commercial buyers. Multiple NATO nations now
                classify dysprosium as a strategic material.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Wind Energy Turbines That Run for Decades</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Direct-drive wind turbines use permanent magnets containing 100-200 kg of NdFeB alloy per unit, with dysprosium comprising a
                critical fraction to ensure magnetic stability across decades of continuous thermal cycling. Offshore wind installations
                are growing at 25%+ annually globally, and each new installation locks away dysprosium for 25+ years of operational life.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI and Advanced Robotics The Emerging Demand Layer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                High-speed servo motors in robotic systems, actuators in autonomous vehicles, and cooling systems in AI hardware all use
                dysprosium-enhanced magnets for precision and thermal endurance. This demand layer barely existed five years ago. It is now
                the fastest-growing segment of dysprosium consumption, layering on top of already-strained EV and defense demand.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base text-indigo-900 leading-relaxed font-medium">
              Dysprosium is a force multiplier small quantities unlock performance levels that cannot be achieved by any other element or
              engineering workaround. When magnets fail under heat, systems fail. Dysprosium prevents that failure.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Access Tokenized Dysprosium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about breaking open concentrated supply chains comes to life in two products. One for dysprosium
            that&apos;s already processed and vaulted. One for dysprosium still in the ground at certified rare earth operations. Both
            digitally represented. Both are settable in stablecoins. Both built for a market that has never had open access before.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-indigo-700 underline-offset-2 hover:underline">
                  1:1 Dysprosium Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital access to physical dysprosium. Every token is linked to verified dysprosium supply stored in insured, audited
                facilities. High-purity grade (99.9%+ Dy), ready for magnet manufacturing, defense procurement, and industrial
                processing. Redeemable for physical delivery on demand. No synthetic exposure. No paper derivatives. Actual dysprosium.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Linked 1:1 to verified high-purity dysprosium supply (99.9%+ grade)</li>
                <li>Redeemable for physical dysprosium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional access, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: EV motors, defense magnets, wind turbines, robotics</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-indigo-700 underline-offset-2 hover:underline">
                  In-Ground Dysprosium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Strategic positions in dysprosium that hasn&apos;t reached the market yet. Tokenized future delivery contracts backed by
                proven reserves at certified rare earth mining operations. For organizations and investors who understand that
                dysprosium&apos;s scarcity isn&apos;t a headline — it&apos;s a geological fact that won&apos;t change in their investment
                horizon.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven and probable reserves at partner rare earth mining sites</li>
                <li>Pre-production pricing reflecting geological scarcity and byproduct constraints</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for defense contractors, EV OEMs, sovereign funds, and long-duration allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-900/10 border border-indigo-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1–12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term dysprosium delivery contracts tied to active rare earth operations with separation capacity. For EV
                manufacturers managing quarterly magnet supply, defense contractors filling procurement gaps, and traders positioning
                around supply disruption events.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1–6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year dysprosium positions backed by proven reserves at earlier-stage rare earth projects. Built for sovereign
                strategic reserves, automotive OEMs securing decade-long supply agreements, and institutional allocators who recognize
                that byproduct economics make dysprosium supply permanently constrained.
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
            Sourcing the World&apos;s Scarcest Magnet Metal. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Dysprosium supply chains are the most concentrated of any industrial metal. Most of the world&apos;s output flows through
            Chinese separation facilities, regardless of where the ore originates. Toto Finance works to establish direct relationships
            with{' '}
            <Link href="/about" className="text-indigo-800 font-medium underline underline-offset-2 hover:text-indigo-600">
              rare earth mining operations
            </Link>{' '}
            and separation plants that can deliver dysprosium outside traditional monopoly channels because we believe strategic materials
            deserve diversified access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China controls approximately 60% of rare earth mining and over 90% of rare earth processing, including dysprosium separation. Bayan Obo (Inner Mongolia) and ionic clay deposits in Jiangxi and Guangdong provinces are the primary sources. Domestic consumption, production quotas, and export controls increasingly constrain availability for international buyers.',
              },
              {
                title: 'Myanmar',
                text: "Myanmar's Kachin State and Wa State deposits have been the world's fastest-growing source of heavy rare earths including dysprosium. The Wa State mining ban in August 2023 removed significant supply. Political instability and conflict make Myanmar supply inherently unpredictable — reinforcing the need for diversified sourcing.",
              },
              {
                title: 'Australia',
                text: "Australia's Northern Territory and Western Australian deposits contain dysprosium-bearing minerals. Lynas Rare Earths and emerging producers are developing separation capacity to produce dysprosium outside Chinese processing dominance. Australian supply represents the most politically stable heavy rare earth source globally.",
              },
              {
                title: 'North America (USA & Canada)',
                text: 'US and Canadian rare earth projects including Bear Lodge (Wyoming), Round Top (Texas), and Nechalacho (Northwest Territories) contain dysprosium-bearing deposits. Critical mineral designations have accelerated permitting and investment for domestic heavy rare earth separation capacity.',
              },
              {
                title: 'Vietnam & Southeast Asia',
                text: "Vietnam's rare earth reserves are among the world's largest, with ionic clay deposits containing meaningful dysprosium content. Processing partnerships and joint ventures are expanding Southeast Asian separation capacity as an alternative to Chinese-dominated refining.",
              },
              {
                title: 'Exploration & Development',
                text: 'New heavy rare earth projects across Greenland, Scandinavia, Brazil, and East Africa are in exploration and feasibility stages. These represent the next generation of dysprosium supply — and In-Ground Dysprosium positions offer access at pre-production economics before reserves enter production.',
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
              <strong>Diversified at source.</strong> The dysprosium market is defined by concentration risk. Toto Finance actively
              sources across multiple jurisdictions and producers to build a supply base that doesn&apos;t depend on any single country,
              any single processor, or any single political decision. A transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-indigo-200">
                mine to token
              </Link>
              , designed to reduce the very concentration that makes dysprosium supply fragile.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Accesses Tokenized Dysprosium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Dysprosium has never been a retail commodity. It has always been traded through closed procurement channels between miners,
            processors, and industrial end-users. Toto Finance opens those channels — not just to manufacturers, but to investors and
            on-chain participants who recognize that a material this scarce and this essential should not be accessible only to those with
            existing supply agreements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-indigo-800">STRATEGIC BUYERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Industries Where Magnet Failure Is Not an Option</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These are not speculative buyers. They are manufacturers whose products physically cannot function without
                dysprosium-enhanced magnets. Tokenized access gives them{' '}
                <Link href="/products" className="text-indigo-800 font-medium underline underline-offset-2">
                  strategic supply positioning
                </Link>
                , procurement flexibility, and physical redemption capability without the lead times and opacity of traditional rare earth
                broker networks.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                EV motor and drivetrain manufacturers, defense and aerospace contractors (guidance systems, radar, satellite), wind turbine
                OEMs and operators, hard disk drive manufacturers, nuclear reactor component suppliers, robotics and industrial automation
                firms, medical device manufacturers (MRI components), advanced laser and photonics producers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">STRATEGIC ALLOCATORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Positioning for the Scarcity That Can&apos;t Be Engineered Away</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dysprosium is not like other commodities where high prices trigger new supply. Byproduct economics, geological scarcity,
                and processing concentration mean that supply responds slowly if at all to demand signals. For fund managers, family
                offices, and commodity specialists, tokenized dysprosium offers exposure to a structural bottleneck with no easy
                resolution. Fractional access from $1. No minimum tonnage. No separation plant relationships required. No intermediary
                counterparty risk.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN PARTICIPANTS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Rarest Real-World Asset in DeFi</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Gold-backed tokens are common. Oil-linked tokens exist. But a token backed by one of the scarcest heavy rare earths on
                earth, a material that fewer than five countries can produce and process, represents a genuinely novel asset class for
                on-chain portfolios. Tokenized dysprosium offers DeFi participants exposure to a supply constraint that is geological, not
                market-driven.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto hedge funds building commodity-diversified portfolios, protocol treasuries seeking non-correlated real-world
                reserves, DeFi protocols designing exotic collateral pools, blockchain foundations with strategic material mandates, DAOs
                focused on critical infrastructure asset acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 8: Instant settlement */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">GLOBAL TRADE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement for Tokenized Dysprosium. No Brokers. No Borders.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Dysprosium has never had a liquid, transparent market. Prices are negotiated privately between processors and buyers.
            Settlement runs through layers of brokers, banks, and logistics coordinators that add weeks of delay and thousands in fees.
            For a material where a single disruption event can move prices 30% overnight, that latency is a vulnerability. We eliminated
            it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Separation / Processing Facility',
                  'Rare Earth Trader / Broker',
                  'Logistics Coordinator',
                  'Clearing House',
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
                Settlement: T+5 to T+30 (or longer for rare earths)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer ↔ Seller. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / Processing Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-indigo-200">
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
                Rare earth trading has operated as a closed network for decades. Toto Finance uses blockchain infrastructure to connect
                dysprosium sources with buyers directly bypassing the broker networks, banking intermediaries, and opaque pricing
                mechanisms that have defined this market since its inception.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settle in Stablecoins. Instantly.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Dollar-backed stablecoin with full reserve transparency and institutional-grade compliance. The standard for regulated digital asset settlement.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in circulation. The deepest liquidity pool in digital asset markets. Enables immediate settlement at any scale, any time, anywhere.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Built for domestic compliance requirements where US-regulated settlement infrastructure is mandatory.',
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
            DeFi Infrastructure for Tokenized Dysprosium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Dysprosium has never had secondary market infrastructure of any kind. No exchange listing. No ETF. No futures contract. No
            liquid OTC market. Tokenization doesn&apos;t just digitize dysprosium; it creates an entire financial layer around a material
            that has existed in procurement darkness since the day it was discovered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Secondary Market Creation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For the first time, dysprosium has a secondary market. Token holders can trade positions 24/7 on decentralized exchanges
                across multiple chains, creating price discovery and liquidity for a material that has never had either. This isn&apos;t
                just trading access, it&apos;s the creation of a market that didn&apos;t exist before.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield from Strategic Scarcity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend dysprosium tokens to counterparties who need leveraged or hedged exposure to rare earth pricing. Borrowers pay
                interest determined by market demand for dysprosium exposure. The scarcer the material, the more valuable the lending
                position. Yield generation is tied directly to physical supply constraints, not algorithmic emission schedules.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Borrowing Against the Bottleneck</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hold dysprosium exposure and need liquidity?{' '}
                <Link href="/products" className="text-indigo-800 font-medium underline underline-offset-2">
                  Borrow against dysprosium
                </Link>{' '}
                tokens to receive stablecoins without selling the position. For defense contractors managing cash flow against long-term
                magnet supply needs, or investors who want liquidity without exiting a rare earth thesis, collateral lending unlocks
                capital that was previously frozen in illiquid rare earth holdings.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programmable Risk for an Unpredictable Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dysprosium pricing can move 30% on a single policy announcement from Beijing or a mining ban in Myanmar. Smart contract
                infrastructure automates margin management, liquidation thresholds, and interest rate adjustments in real time handling
                volatility that manual risk systems cannot keep pace with. When the next supply disruption hits, positions manage
                themselves.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Rare Earth Deposit to On-Chain Asset: The Dysprosium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Verified: Dysprosium supply confirmed, vaulted, and linked to on-chain token',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent market pricing',
                'Positioned: Held in wallet, traded on DEXs, or bridged to preferred chain',
                'Leveraged: Deployed for yield generation, collateral lending, or hedged exposure',
                'Delivered: Redeemed for physical dysprosium for magnet manufacturing or industrial use',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0 w-full md:w-auto">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">
                      {i + 1}
                    </div>
                    <p className="text-xs text-gray-700 max-w-[160px] leading-tight">{step}</p>
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
            Tokenized Dysprosium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Until now, there was no clean way to gain dysprosium exposure. Rare earth ETFs give you basket exposure diluted across dozens
            of elements. Mining stocks give you equity risk, not commodity exposure. Physical procurement requires processor relationships
            and tonnage commitments. Toto Finance built what didn&apos;t exist.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized dysprosium on Toto Finance versus rare earth ETFs, physical dysprosium procurement, and mining stocks across 10 features including dysprosium-specific exposure, settlement speed, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Dysprosium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Dysprosium-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', 'Tonnage minimums', '1 share (~$5+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Supply Concentration Risk', 'Diluted across elements', 'Diversified sourcing', 'Single-processor dependent', 'Operational risk'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-indigo-50/50">{row[2]}</td>
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
            Infrastructure Built for the Most Concentrated Supply Chain on Earth
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Dysprosium isn&apos;t gold. It doesn&apos;t have centuries of established trading infrastructure, liquid markets, or
            transparent pricing. Building a tokenization platform for dysprosium means building everything from scratch verification,
            custody, compliance, and market infrastructure for a material that has never had any of it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Verified Physical Backing',
                b: "Every dysprosium token is connected to verified supply in insured custody. Physical delivery capability is not theoretical, it's operational. Request delivery and receive high-purity dysprosium (99.9%+) ready for magnet manufacturing. In a market where counterparty verification barely exists, on-chain backing provides certainty that no broker relationship can match.",
              },
              {
                t: 'Supply Chain Transparency',
                b: "Rare earth supply chains are notoriously opaque pricing, origin, and purity are often unverifiable until material arrives at the factory. Toto Finance's on-chain proof-of-reserves, independent audits, and real-time oracle feeds bring transparency to a market that has operated in informational darkness for decades.",
              },
              {
                t: 'Instant Settlement',
                b: "Traditional rare earth transactions can take weeks to settle through broker-bank-logistics chains. Dysprosium tokens settle T+0 with stablecoins. In a market where supply disruptions move prices overnight, settlement speed isn't a convenience, it's a risk management tool.",
              },
              {
                t: 'Export Control & Compliance Architecture',
                b: 'Rare earth trade involves sanctions screening, export controls, end-use declarations, and jurisdiction-specific regulations that vary by destination country. Smart contracts embed compliance logic KYC/AML, transfer restrictions, sanctioned-entity screening directly into token transfers. Compliance executes automatically, not as a separate manual process.',
              },
              {
                t: 'DeFi Financial Infrastructure',
                b: 'Dysprosium has never had lending markets, collateral frameworks, or hedging instruments. Toto Finance creates all three through smart contract protocols enabling yield generation, stablecoin borrowing against dysprosium positions, and programmable risk management for a material that previously had zero financial infrastructure.',
              },
              {
                t: 'Multi-Chain Deployment',
                b: 'Tokenized dysprosium operates across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Whether institutional custody requires EVM compatibility or a strategic allocation sits on an alternative L1, dysprosium tokens integrate with existing on-chain infrastructure without migration friction.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Dysprosium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized dysprosium, In-Ground Dysprosium, supply constraints, and how Toto Finance provides access to
            the world&apos;s most concentrated critical material.
          </p>
          <DysprosiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-indigo-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            The Bottleneck Is Geological. The Access Problem Is Solvable.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Dysprosium is geologically scarce, produced as a byproduct, controlled by two countries, and demanded by every EV motor,
            every defense magnet, and every wind turbine on earth. The supply constraint can&apos;t be engineered away. But the access
            constraint can. Toto Finance is building the infrastructure to bring the world&apos;s most concentrated critical material to
            an open, global, instant-settlement market for the first time.
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
