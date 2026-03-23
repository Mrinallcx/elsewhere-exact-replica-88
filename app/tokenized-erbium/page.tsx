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
const ErbiumTickerBar = dynamicImport(
  () => import('../components/client/ErbiumTickerBar').then((mod) => ({ default: mod.ErbiumTickerBar }))
);
const ErbiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-erbium';
const PAGE_TITLE = 'Tokenized Erbium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  "Every internet signal traveling through fiber depends on erbium. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element the global internet physically cannot function without. Instant stablecoin settlement. DeFi secondary markets.";

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Erbium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized erbium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined erbium oxide (Er₂O₃) in insured, audited vaults. High-purity grade (99.9%+), ready for fiber optic amplifier production, medical laser applications, and industrial processing. Redeemable for physical erbium on demand. Toto Finance is building the infrastructure to bring erbium on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Erbium?',
    answer:
      'A tokenized future delivery contract for erbium still contained in heavy rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for telecommunications companies, data center operators, sovereign funds, and institutional investors positioning for the structural erbium deficit.',
  },
  {
    question: 'Where does the erbium come from?',
    answer:
      'Directly from rare earth mining companies and heavy rare earth separation facilities across China (88% of production from ionic clay deposits), North America (USA and Canada developing domestic heavy REE separation for telecom security), Australia (Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay processing), and Brazil and Madagascar (heavy rare earth projects). No middlemen. No intermediary traders.',
  },
  {
    question: 'Who buys tokenized erbium?',
    answer:
      'Three groups: (1) Infrastructure builders, including telecom operators, data center developers, fiber amplifier manufacturers, undersea cable companies, 5G equipment makers, medical laser producers, optical component manufacturers. (2) Digital infrastructure investors, including funds and allocators seeking direct exposure to the physical material driving internet traffic growth, without company-specific operational risk. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral linked directly to digital infrastructure expansion.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional erbium procurement involves specialized traders, separation scheduling, logistics coordination, and banking settlement measured in weeks. Toto Finance connects erbium sources with buyers directly on-chain, eliminating every intermediary and settling transactions instantly.',
  },
  {
    question: 'Can I trade tokenized erbium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use erbium tokens as collateral for stablecoin loans. Erbium has never had secondary market infrastructure of any kind. Tokenization creates it for the first time.',
  },
  {
    question: 'Why is the 1.55 μm wavelength so critical?',
    answer:
      '1.55 micrometers is the wavelength with lowest signal attenuation in silica optical fiber, meaning signals lose the least energy traveling through glass at this frequency. Erbium is the only element that amplifies light at this exact wavelength without electrical conversion, enabling signals to travel hundreds of kilometers through fiber optic cables. Every long-haul internet connection, data center interconnect, and undersea cable depends on this physical property. 70% of all erbium consumed globally goes to fiber optic amplifiers for this reason.',
  },
  {
    question: "What's the erbium price outlook?",
    answer:
      'Roskill forecasts $145,000/mt in 2026. Critical Minerals Intelligence projects exceeding $160,000/mt by 2027 as telecommunications buildout, 5G deployment, and data center expansion accelerate while heavy rare earth production remains structurally constrained. The deficit is expected to intensify through 2030 as AI computing and edge data centers drive exponential fiber network growth.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Telecommunications companies, data center operators, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed erbium oxide tokens and In-Ground Erbium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Erbium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined erbium oxide (Er₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Erbium',
      description:
        'Tokenized future delivery contract for erbium in heavy rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedErbiumPage() {
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
      <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-rose-200/90 mb-4">
            Tokenized Erbium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every Signal Traveling Through Fiber Depends on Erbium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            Right now, a signal carrying this webpage traveled through erbium-doped fiber amplifiers to reach you. Every streaming
            service, every cloud application, every financial transaction crossing fiber optic networks depends on a rare earth element
            that only 385 tonnes of is produced annually, all as a byproduct of other mining. Supply is in structural deficit. Yet
            access to erbium as an asset has never existed outside specialized rare earth procurement.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-rose-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element powering global internet infrastructure on-chain for the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
              Why Erbium Matters
            </a>
          </div>
        </div>
      </section>

      <ErbiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Internet Runs on Erbium. And Almost Nobody Knows It.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose erbium because it represents the most invisible dependency in modern infrastructure. Not invisible because
              it&apos;s unimportant, but invisible because the system works so well that nobody asks what makes it possible.
            </p>
            <p>
              The answer is erbium. Specifically, erbium-doped fiber amplifiers that boost optical signals at 1.55 micrometers, the exact
              wavelength where silica fiber has minimum signal loss. Every long-distance internet connection, every data center
              interconnect, every undersea cable linking continents relies on erbium amplification. There is no alternative element.
              There is no synthetic substitute. And total global production is just 385 tonnes per year, all produced as a byproduct of
              other rare earth mining, making supply fundamentally unable to respond to demand growth. The companies building the
              internet&apos;s physical backbone, telecom operators, data center developers, cable system installers, face a supply
              constraint they cannot solve with money alone.
            </p>
            <p className="font-medium text-gray-900">That&apos;s why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">95 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Has Already Started</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 95-tonne erbium deficit in 2025, with the gap widening through 2030. Global erbium production is only
                385 tonnes annually from heavy rare earth separation. All production is byproduct output, making supply structurally
                constrained while global internet traffic grows at 28% per year.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">1.55 μm</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Wavelength the Internet Depends On</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Erbium-doped fiber amplifiers (EDFAs) amplify optical signals at 1.55 micrometers, the exact wavelength with lowest signal
                loss in silica fiber. 70% of global erbium demand comes from these amplifiers, which power every internet connection,
                streaming service, cloud application, and data transfer worldwide. No other element amplifies light at this wavelength.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">350 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap Growing at the Speed of Data</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global erbium demand is projected to reach 985 tonnes per year by 2030, while supply from existing and planned rare earth
                mines will deliver only 635 tonnes. The 350-tonne gap represents a 36% shortfall. Every new data center, every 5G tower,
                every undersea cable widens it further.
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
            Understanding Why Erbium Has No Substitute
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rare earth element powering the global internet. Essential for fiber optic amplifiers enabling every high-speed data
            transmission on earth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-rose-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Erbium element card showing Er symbol, atomic number 68, density, 1550nm emission wavelength, and fiber optic amplifier classification"
              >
                <p className="text-3xl font-light mb-1">Er</p>
                <ul className="space-y-1 text-rose-100/90">
                  <li>Atomic Number: 68</li>
                  <li>Density: 9,066 kg/m³</li>
                  <li>Emission Wavelength: 1550nm</li>
                  <li>Ion Color: Pink (Er³⁺)</li>
                  <li>Classification: Fiber Optic Amplifier Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-fuchsia-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Heavy rare earth mining operation extracting xenotime and monazite minerals containing erbium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from xenotime, monazite, bastnäsite, and gadolinite minerals in China, Sweden, USA, and Australia. Produced
                exclusively as a byproduct during heavy rare earth separation, never mined independently.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">Ore → Acid Leaching → Solvent Extraction → Reduction → 99.9% Pure Erbium</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-cyan-800/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Erbium-doped fiber optic amplifier component used in telecommunications to boost optical signals at 1550nm wavelength"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Physics That Makes It Irreplaceable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Emits light at precisely 1550nm, the exact frequency where fiber optic cables experience minimum signal loss. This
                physical property enables optical signal amplification without converting to electrical signals, maintaining speed and
                reducing equipment cost across global fiber networks. No other element has this emission characteristic.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of erbium including fiber optic amplifiers in telecommunications, medical lasers, and nuclear control rod components"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Fiber optic amplifiers (EDFAs), 5G backhaul networks, undersea cable systems, data center interconnects, medical lasers
                (dermatology and dental), nuclear reactor control rods, specialty glass coloring.
              </p>
              <p className="text-sm font-semibold text-rose-800 bg-rose-50 rounded-lg px-3 py-2">
                $278M global market by 2029 (from $162M in 2024)
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
            The Global Internet Is Expanding. Erbium Supply Is Not.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a direct physical link between the growth of global data traffic and the consumption of erbium. Every kilometer of
            long-haul fiber needs amplification. Every data center interconnect needs EDFAs. Every undersea cable needs repeaters spaced
            every 50 to 100 kilometers. Internet traffic is growing at 28% annually. Erbium production, locked in byproduct economics, is
            barely growing at all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Erbium-Doped Fiber Amplifiers: 70% of All Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                EDFAs are the backbone of long-haul fiber optic networks, amplifying optical signals without converting them to electrical
                form. With global internet traffic growing at 28% annually and data center interconnect capacity doubling every 18 months,
                EDFA deployment consumes 270 tonnes of erbium annually. Each major hyperscale data center requires thousands of individual
                amplifier units.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">5G Network Backhaul: The Hidden Fiber Buildout</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every 5G base station connects back to the core network through fiber optic links requiring erbium amplification. China
                alone deployed 3.6 million 5G base stations through 2025, each requiring fiber backhaul. The global 5G infrastructure
                buildout consumes 85 tonnes of erbium annually, and deployment is still in early phases across most of the world.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Undersea Cable Systems: Amplification Every 50 to 100 km</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Undersea fiber optic cables linking continents use erbium-doped amplifiers spaced every 50 to 100 kilometers to maintain
                signal integrity across ocean floors. With 1.4 million kilometers of submarine cables deployed and over 30,000 km added
                annually, undersea systems consume 45 tonnes of erbium per year, and new transoceanic routes are accelerating to meet AI
                data transfer demand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Medical Erbium:YAG Lasers: Precision Surgery at 2.94 μm</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Erbium:YAG lasers operating at 2.94 micrometers enable precision skin resurfacing, dental hard tissue ablation, and
                minimally invasive soft tissue surgery. The medical laser sector consumes 38 tonnes annually, growing at 22% CAGR as
                laser-based dermatology and dental procedures replace conventional surgical methods worldwide.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit That Grows with Every Byte of Data</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global erbium demand rising from 480 tonnes in 2025 to 985 tonnes by 2030, with supply reaching
              approximately 635 tonnes, creating a 350 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '480', note: 'Demand (t)' },
                { year: '2028', val: '720', note: 'Demand (t)' },
                { year: '2030', val: '985', note: 'Demand (t)' },
                { year: '2035', val: '1,450', note: 'Roskill' },
                { year: '2030 Supply', val: '~635', note: 'Gap: 350+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-rose-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} t</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, Fiber Broadband Association.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Erbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to critical infrastructure materials comes to life in two products. One for erbium
            that&apos;s already refined and vaulted. One for erbium still locked in heavy rare earth deposits. Both backed by physical
            assets. Both settable in stablecoins. Both built to give the companies and investors building the internet&apos;s future a way
            to secure the element it physically depends on.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-rose-700 underline-offset-2 hover:underline">
                  1:1 Erbium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical erbium. Every token is backed 1:1 by refined erbium oxide (Er₂O₃) in insured, audited
                vaults. High-purity grade (99.9%+ Er₂O₃), ready for fiber optic amplifier production, medical laser crystal fabrication,
                and industrial processing. Redeemable for physical erbium on demand. Not a derivative. Not a tracker. The actual material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined erbium oxide (99.9%+ purity grade)</li>
                <li>Always redeemable for physical erbium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: fiber optic amplifiers, medical lasers, nuclear applications, glass additives</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-rose-700 underline-offset-2 hover:underline">
                  In-Ground Erbium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in erbium that hasn&apos;t been separated yet. Tokenized future delivery contracts backed by proven
                erbium content in heavy rare earth deposits at certified mining operations. For organizations that understand that 385
                tonnes of annual production serving a 985-tonne demand curve by 2030 creates a pricing trajectory that favors early
                positioning.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven erbium content in heavy rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting byproduct scarcity and separation constraints</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for telecom infrastructure developers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-900/10 border border-rose-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term erbium delivery contracts tied to active rare earth operations with heavy rare earth separation capacity. For
                telecommunications companies managing quarterly amplifier procurement, data center operators scaling interconnect
                infrastructure, and commodity specialists trading near-term erbium supply dynamics.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year erbium positions backed by proven heavy rare earth reserves at earlier-stage operations. Built for sovereign
                strategic reserves, telecommunications infrastructure developers planning decade-scale network buildouts, and institutional
                allocators who recognize that byproduct supply cannot scale to meet exponential data traffic growth.
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
            Securing the Element the Internet Depends On. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Erbium doesn&apos;t have a dedicated mine anywhere on earth. It emerges as a small fraction of heavy rare earth separation, a
            process controlled by a handful of facilities, predominantly in China. Toto Finance works directly with{' '}
            <Link href="/about" className="text-rose-800 font-medium underline underline-offset-2 hover:text-rose-600">
              rare earth mining companies and heavy rare earth separation facilities
            </Link>{' '}
            to secure erbium at the processing level, bypassing the trader networks and broker chains that add cost and opacity to an
            already constrained supply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 88% of global erbium from ionic clay deposits in Jiangxi, Guangdong, and Fujian provinces. Chinese heavy rare earth separation facilities supply erbium oxide for domestic fiber optic manufacturing and telecommunications infrastructure. Export restrictions and domestic consumption priorities are tightening international availability.',
              },
              {
                title: 'North America (USA & Canada)',
                text: 'US and Canadian rare earth projects are developing heavy rare earth separation capabilities, including operations in Texas, Alaska, and Saskatchewan. Critical mineral designation has prioritized domestic erbium supply chains to ensure telecommunications infrastructure and data center security are not dependent on single-source imports.',
              },
              {
                title: 'Australia',
                text: 'Northern Territory and Western Australian deposits contain erbium-bearing heavy rare earth minerals. New ionic adsorption clay processing and xenotime separation technologies are enabling economic erbium recovery for fiber optic and telecommunications applications outside Chinese processing dominance.',
              },
              {
                title: 'Southeast Asia & Vietnam',
                text: "Vietnam's ionic clay deposits and emerging Southeast Asian heavy rare earth processing facilities produce erbium oxide from regional mining operations. These facilities provide alternative supply routes for telecommunications companies seeking supply chain diversification.",
              },
              {
                title: 'Brazil & Madagascar',
                text: 'Brazilian monazite deposits and Madagascar\'s heavy rare earth projects contain meaningful erbium concentrations. New separation facilities under development will extract erbium for regional telecommunications and medical device manufacturing supply chains.',
              },
              {
                title: 'Exploration & Development',
                text: 'New heavy rare earth projects across Africa, Scandinavia, and Greenland are in exploration and feasibility stages. These represent the next generation of erbium supply, and In-Ground Erbium positions offer access at pre-production economics before separation output reaches the market.',
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
              <strong>Secured at the separation stage.</strong> Erbium doesn&apos;t come from a mine. It comes from a separation facility.
              Toto Finance works at this critical processing point, eliminating the broker and trader layers that sit between separation
              output and end-user delivery. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-rose-200">
                mine to token
              </Link>
              . Access at the point where erbium actually becomes available, not three intermediaries downstream.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Erbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Erbium has always been traded in quantities measured in kilograms, through specialized rare earth traders, at prices negotiated
            behind closed doors. The companies that need it most, telecom operators, data center builders, medical device manufacturers,
            have had no transparent market to access it through. Toto Finance opens that access for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-rose-800">INFRASTRUCTURE BUILDERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies Wiring the World</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers don&apos;t speculate on erbium prices. They consume erbium in amplifiers that make fiber networks function, in
                lasers that enable medical procedures, in components that make nuclear systems safe. Tokenized erbium gives them{' '}
                <Link href="/products" className="text-rose-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability without the lead times and pricing opacity of traditional rare
                earth broker channels.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Telecommunications infrastructure and fiber optic network operators, data center operators and cloud service providers,
                fiber optic amplifier and EDFA manufacturers, undersea cable system developers and operators, 5G network equipment
                manufacturers, medical laser manufacturers (dermatology, dental, surgical), optical fiber and component manufacturers,
                laser crystal fabricators, glass and optical coating producers, nuclear reactor component suppliers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">DIGITAL INFRASTRUCTURE INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in What the Internet Is Physically Made Of</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors pour billions into data center REITs, telecom stocks, and cloud computing companies, yet the physical element that
                makes fiber optic networks function has been entirely uninvestable. Until now. Tokenized erbium offers direct exposure to a
                material with 28% annual demand growth driven by internet traffic expansion, fractional access from $1, and zero
                dependence on any company&apos;s operational execution. The thesis isn&apos;t complicated: the internet is growing, erbium
                supply isn&apos;t, and the gap compounds every year.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Infrastructure with the Material That Enables It</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                There&apos;s an irony in blockchain infrastructure existing on networks that physically depend on erbium-doped fiber
                amplifiers. Tokenized erbium closes that loop: on-chain assets backed by the physical material that makes on-chain
                activity possible. For protocols, treasuries, and funds seeking real-world collateral with a direct link to digital
                infrastructure growth.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking infrastructure-correlated commodity exposure, protocol treasuries diversifying into the physical layer
                of the internet, DeFi protocols building collateral pools with direct data economy linkage, blockchain foundations investing
                in the materials their networks depend on, DAOs with digital infrastructure investment mandates.
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
            Instant Settlement for Tokenized Erbium. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Erbium has never been traded on an exchange. There is no spot market, no futures contract, no public price ticker. Every
            transaction happens through private negotiation with rare earth traders who set terms, control information, and extract margin at
            every step. For the material that enables real-time global data transmission, the trading infrastructure is stuck in the
            1990s. We built something that matches the speed of the signals erbium amplifies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Heavy Rare Earth Separation Facility',
                  'Specialized Rare Earth Trader',
                  'Logistics & Customs Coordinator',
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
                {['Mining / Separation Operation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-rose-200">
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
                The erbium market has operated as a closed network of specialized traders for decades. No public pricing. No standardized
                contracts. No settlement infrastructure. Toto Finance uses blockchain to create what never existed: a transparent,
                instant-settlement market connecting erbium sources with buyers, bypassing every intermediary that traditionally sits
                between separation facility output and end-user delivery.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of Light Transmission</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Institutional-grade dollar stablecoin with full reserve attestation. Broad DeFi integration and regulatory acceptance across major jurisdictions.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  '$140+ billion in circulation. The deepest stablecoin liquidity in global digital asset markets. Enables settlement at any scale, any time, anywhere.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Built for transactions where domestic compliance infrastructure and US-regulated settlement rails are required.',
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
            DeFi Infrastructure for Tokenized Erbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Erbium has had zero financial infrastructure since its discovery in 1842. No exchange listing. No ETF. No futures market. No
            lending facility. No collateral framework. Tokenization doesn&apos;t just digitize erbium. It constructs an entire financial
            ecosystem around a material that has existed in procurement isolation for its entire history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Erbium Secondary Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, selling an erbium position meant finding a rare earth trader willing to negotiate. There was no market,
                only relationships. Tokenized erbium creates a 24/7 secondary market on decentralized exchanges, enabling price discovery,
                instant transfers, and cross-chain liquidity for a material that has never had any of these mechanisms. This is market
                creation, not market access.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from Internet Infrastructure Growth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend erbium tokens to counterparties seeking leveraged exposure to rare earth pricing or hedged positions in
                telecommunications materials. Interest rates reflect real-world demand for erbium exposure, tied to fiber buildout rates,
                data center expansion, and 5G deployment velocity. Yield backed by the physical layer of the internet, not by algorithmic
                token emissions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Liquidity Without Liquidation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Telecom companies and institutional investors holding erbium positions have historically had one option for accessing
                capital: sell the position entirely. Tokenized erbium changes this.{' '}
                <Link href="/products" className="text-rose-800 font-medium underline underline-offset-2">
                  Borrow against erbium
                </Link>{' '}
                tokens to receive stablecoins while retaining full exposure. For infrastructure builders managing cash flow against
                multi-year network deployments, this unlocks capital without unwinding strategic supply positions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Autonomous Risk Architecture for Niche Markets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Erbium&apos;s market is small, concentrated, and subject to supply shocks that can move pricing dramatically with minimal
                warning. Traditional risk management through phone calls to brokers and manual position adjustments cannot respond quickly
                enough. Smart contract infrastructure automates margin management, collateral rebalancing, and liquidation execution in
                real time, providing institutional-grade risk controls for a market that has never had any risk infrastructure at all.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Separation Facility to Global Digital Market: The Erbium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Sourced: Erbium oxide verified at separation facility, vaulted, and linked to on-chain token',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains',
                'Activated: Deployed into yield protocols, used as loan collateral, or hedged against supply disruption',
                'Delivered: Redeemed for physical erbium oxide (Er₂O₃) for amplifier production or industrial use',
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
            Tokenized Erbium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a clean way to invest in erbium. Rare earth ETFs dilute exposure across dozens of elements. Mining stocks
            carry operational risk unrelated to erbium pricing. Physical procurement requires separation facility relationships and
            kilogram-scale purchase minimums. Toto Finance built what the market was missing.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized erbium on Toto Finance versus rare earth ETFs, physical erbium procurement, and mining stocks across 10 features including erbium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Erbium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Erbium-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$50,000+ (kg scale)', '1 share (~$5+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Private negotiation', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-rose-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for a Material That Never Had Any
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Erbium has been traded through private channels since it became commercially relevant in the 1990s with the fiber optic
            revolution. No standardized contracts. No public pricing benchmarks. No settlement infrastructure. No collateral frameworks.
            Every feature of the Toto Finance platform for erbium was built from first principles because nothing existed to build on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Industrial Delivery',
                b: "Every erbium token connects to verified erbium oxide (Er₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for EDFA manufacturing, medical laser crystal fabrication, or industrial processing. In a market where verifying what you're buying has always required personal relationships with traders, on-chain proof-of-reserves replaces trust with verification.",
              },
              {
                t: 'Price Discovery Where None Existed',
                b: "Erbium has never had a public price. Transactions are negotiated privately, with pricing information treated as proprietary by traders. Toto Finance's oracle feeds and on-chain trading activity create the first transparent erbium pricing mechanism: real-time, verifiable, and accessible to anyone, not just established rare earth trading desks.",
              },
              {
                t: 'Instant Settlement for a Market That Measures in Weeks',
                b: "Traditional erbium procurement involves purchase orders, separation scheduling, logistics coordination, customs clearance, and banking settlement that can stretch across weeks or months. Token settlement is T+0 with stablecoins. For a market where timing often determines whether you get supply at all, instant execution is not a feature. It's a competitive advantage.",
              },
              {
                t: 'Compliance for Cross-Border Rare Earth Trade',
                b: 'Erbium trade crosses jurisdictions with varying export controls, strategic material designations, and end-use verification requirements. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transfer automatically satisfies applicable regulatory requirements without manual processing.',
              },
              {
                t: 'Financial Infrastructure from Scratch',
                b: 'Lending, borrowing, hedging, and collateral management for erbium: functions that have never existed in any form for this material. Smart contract protocols enable yield generation from erbium positions, stablecoin borrowing against holdings, and programmable hedging strategies. An entire financial stack, purpose-built for a 385-tonne-per-year niche market.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized erbium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, and individual holders can interact with erbium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Erbium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized erbium, In-Ground Erbium, fiber optic infrastructure demand, and how Toto Finance provides
            access to the element powering global internet connectivity.
          </p>
          <ErbiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-rose-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            The Internet Is Growing at 28% Per Year. Erbium Supply Isn&apos;t Growing at All.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every signal crossing fiber depends on erbium. Every data center interconnect, every undersea cable, every 5G backhaul link.
            The world needs 985 tonnes by 2030. Supply will deliver 635. The 350-tonne gap compounds with every byte of data the world
            generates. Toto Finance is building the infrastructure to bring this invisible but essential material to an open,
            transparent, instant-settlement market for the first time in its history.
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
