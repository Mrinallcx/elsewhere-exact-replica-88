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
const TerbiumTickerBar = dynamicImport(
  () => import('../components/client/TerbiumTickerBar').then((mod) => ({ default: mod.TerbiumTickerBar }))
);
const TerbiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-terbium';
const PAGE_TITLE = 'Tokenized Terbium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Without terbium, the magnets inside every EV motor and wind turbine demagnetize at operating temperature. Toto Finance brings the magnet stabilizer on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The heavy rare earth that prevents permanent magnets from failing under heat. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Terbium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized terbium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined terbium oxide (Tb₄O₇) in insured, audited vaults. High-purity grade (99.9%+ Tb₄O₇), ready for NdFeB magnet grain boundary diffusion processing, green phosphor synthesis, Terfenol-D alloy production, and specialized industrial applications. Redeemable for physical terbium on demand. Toto Finance is building the infrastructure to bring terbium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Terbium?',
    answer:
      'A tokenized future delivery contract for terbium still contained in heavy rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active heavy rare earth separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for magnet manufacturers, defense contractors, lighting companies, sovereign funds, and institutional investors positioning for the structural terbium deficit that new mine development cannot resolve within the timeline the magnet industry requires.',
  },
  {
    question: 'Where does the terbium come from?',
    answer:
      'Directly from heavy rare earth mining companies and separation facilities across China (90%+ of production from ion-adsorption clays in Jiangxi, Fujian, Guangdong), Myanmar (Kachin State heavy rare earth clays), Australia (xenotime and clay deposits), North America (emerging US and Canadian heavy rare earth processing), and Africa (Burundi, Tanzania, Madagascar heavy rare earth projects). No middlemen. No intermediary traders. Secured at the point of heavy rare earth separation. More on partnerships: https://totofinance.co/about',
  },
  {
    question: 'Who buys tokenized terbium?',
    answer:
      "Three groups: (1) Magnet and defense manufacturers, including NdFeB magnet companies, EV motor producers, wind turbine generator manufacturers, Terfenol-D alloy producers, defense guidance system manufacturers, naval sonar companies, green phosphor and LED lighting producers, X-ray screen manufacturers, and SOFC electrolyte producers. (2) Heavy rare earth investors, including funds and allocators seeking direct exposure to the element ten times scarcer than neodymium in every ore body, with a geological ratio that prevents independent supply scaling. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by the element that determines whether electrification's magnets perform at temperature.",
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional terbium procurement operates through Chinese export traders with settlement measured in weeks, layered with export licensing, banking intermediaries, and pricing determined by Chinese domestic policy. Toto Finance creates a direct settlement mechanism connecting heavy rare earth sources with global buyers on-chain, eliminating the Chinese export channel intermediaries that control the current terbium market.',
  },
  {
    question: 'Can I trade tokenized terbium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking heavy rare earth exposure, or use terbium tokens as collateral for stablecoin loans. Terbium has never existed as an independently tradeable financial asset. It has been permanently bundled with other heavy rare earths in mixed quotations. Tokenization unbundles it for the first time, creating both the standalone asset class and its market simultaneously.',
  },
  {
    question: 'Why is terbium critical for permanent magnets?',
    answer:
      'Terbium atoms substitute into the Nd₂Fe₁₄B crystal lattice at grain boundaries, dramatically increasing coercivity, the resistance to demagnetization under heat and opposing magnetic fields. Without terbium (or dysprosium), NdFeB magnets progressively lose magnetic force at the 150°C to 200°C operating temperatures generated inside EV traction motors, wind turbine generators, and defense systems. Every high-performance NdFeB magnet specification for motors, generators, and guidance systems includes 2 to 10% heavy rare earth content. Terbium is the element that makes permanent magnets permanent at operating temperature.',
  },
  {
    question: 'What is the terbium price outlook?',
    answer:
      'Terbium oxide prices exceed $1,500/kg, reflecting extreme scarcity as a heavy rare earth element constituting less than 1% of typical rare earth ores. Prices are projected to increase through 2030 as the 120-tonne supply deficit intensifies alongside EV production scaling to 40 million units annually, offshore wind deployment accelerating to 380 GW, and defense magnet specifications tightening across allied military programs, while new heavy rare earth mine development remains 10 to 15 years from meaningful production.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Magnet manufacturers, defense contractors, lighting companies, automakers, wind developers, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed terbium oxide tokens and In-Ground Terbium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Terbium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined terbium oxide (Tb₄O₇) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Terbium',
      description:
        'Tokenized future delivery contract for terbium in heavy rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedTerbiumPage() {
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-slate-200/90 mb-4">
            Tokenized Terbium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Without Terbium, the World&apos;s Most Powerful Magnets Fail at the Temperatures They Were Designed to Operate At. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            There is a reason every high-performance NdFeB permanent magnet contains a small but non-negotiable percentage of terbium. Without it, the
            magnets inside EV traction motors, wind turbine generators, and defense guidance systems lose their magnetic force at exactly the operating
            temperatures those systems generate. Terbium substitutes into the crystal lattice of neodymium-iron-boron magnets and raises the coercivity
            threshold, the temperature at which the magnet resists demagnetization, by hundreds of degrees. Remove terbium from the equation and every
            NdFeB magnet designed for high-temperature service reverts to a component that self-destructs under normal operation. Terbium also produces
            the green phosphor in every LED, every flat panel display, and every energy-efficient lamp on Earth. Annual global production sits below 400
            tonnes. China controls over 90% of it. The 120-tonne supply deficit projected for 2030 has no resolution outside new heavy rare earth
            production that takes a decade to develop.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-slate-200">
              Toto Finance
            </Link>{' '}
            is building the infrastructure to bring the magnet stabilizer on-chain for the first time, from 1:1 redeemable refined oxide to In-Ground
            future delivery contracts, settled instantly in stablecoins with full DeFi secondary market access.
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
              Why Terbium Matters
            </a>
          </div>
        </div>
      </section>

      <TerbiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Every High-Performance Magnet Contains Terbium. The Element That Prevents Them from Failing.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose terbium because it represents the most invisible yet indispensable dependency in the permanent magnet supply chain. The element
              that nobody outside metallurgy discusses but that every NdFeB magnet designed for real-world operation absolutely requires.
            </p>
            <p>
              The conversation about rare earth magnets focuses on neodymium and, increasingly, praseodymium. But the engineers who design the magnets
              know that an NdFeB magnet without terbium is a magnet that demagnetizes at the operating temperature of the motor it was built for.
              Terbium atoms substitute into the Nd₂Fe₁₄B crystal lattice at grain boundaries, dramatically raising coercivity, the resistance to
              demagnetization under heat and opposing magnetic fields. At the 150°C to 200°C operating range inside an EV traction motor, an NdFeB
              magnet without terbium (or its heavier cousin dysprosium) progressively loses its magnetic strength until the motor fails to deliver rated
              torque. With terbium, the same magnet maintains full performance. This is not an optional additive. It is the difference between a magnet
              that works at operating temperature and one that does not. And terbium&apos;s role extends beyond magnets: it produces the green component
              of white LED light, powers Terfenol-D magnetostrictive actuators in sonar and precision positioning, stabilizes solid oxide fuel cell
              electrolytes, and enables X-ray intensifying screens that reduce patient radiation exposure. China controls over 90% of global terbium
              production. Heavy rare earth deposits outside China are scarce, geologically complex, and a decade from production. The supply deficit is
              structural, geopolitical, and widening.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">90%+</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">One Nation Controls Nearly All Terbium on Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                China produces over 90% of global terbium, primarily from ion-adsorption clay deposits in Jiangxi, Fujian, and Guangdong provinces that
                are the world&apos;s only economically viable source of separated heavy rare earth oxides at scale. Chinese export controls, production
                quotas, and domestic consumption priority for EV and wind energy manufacturing are systematically reducing the terbium available to
                non-Chinese magnet producers, defense manufacturers, and technology companies at the exact moment their demand is accelerating.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">340 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Market Measured in Hundreds of Tonnes, Not Thousands</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global terbium demand reached approximately 340 tonnes in recent years and is projected to exceed 520 tonnes by 2030 as EV production
                scales, offshore wind deployment accelerates, and defense magnet specifications tighten. Total global production capacity sits below 400
                tonnes annually. Terbium is one of the least abundant rare earth elements, approximately ten times scarcer than neodymium in typical rare
                earth ore bodies, meaning its supply cannot scale proportionally with the lighter rare earths even when new mines open.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">120 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit That Cannot Be Closed Without New Heavy Rare Earth Mines</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Projected terbium demand of 520 tonnes by 2030 against expected supply of approximately 400 tonnes creates a 120-tonne annual deficit.
                Unlike light rare earth shortages that can be partially addressed by expanding existing operations, terbium&apos;s deficit requires
                entirely new heavy rare earth mines or ion-adsorption clay deposits outside China, projects that take 10 to 15 years from discovery to
                production. No amount of recycling, substitution, or demand management can close the gap within the timeline the magnet industry
                requires.
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
            Understanding Why Terbium Is the Invisible Ingredient That Makes Permanent Magnets Survive Real-World Conditions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The heavy rare earth element that raises the demagnetization threshold of every high-performance NdFeB magnet. Essential for EV motors, wind
            generators, defense systems, green phosphors, and magnetostrictive actuators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Terbium element card showing Tb symbol, atomic number 65, density, melting point, and classification as a heavy rare earth element critical for magnet stabilization"
              >
                <p className="text-3xl font-light mb-1">Tb</p>
                <ul className="space-y-1 text-slate-200/90">
                  <li>Atomic Number: 65</li>
                  <li>Density: 8,230 kg/m³</li>
                  <li>Melting Point: 1,356°C</li>
                  <li>Magnet Role: Coercivity Enhancement</li>
                  <li>Classification: Heavy Rare Earth Element</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Ion-adsorption clay mining in southern China and heavy rare earth separation facilities extracting terbium from xenotime and monazite deposits"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Terbium is extracted primarily from ion-adsorption clay deposits in southern China (Jiangxi, Fujian, Guangdong), which produce over 90% of
                global supply. Secondary sources include xenotime and monazite ores in Australia, bastnäsite concentrates in the USA, and emerging heavy
                rare earth projects in Myanmar and Africa. Terbium constitutes less than 1% of typical rare earth ore, making it approximately ten times
                scarcer than neodymium within the same deposits and permanently constrained by the production rate of lighter rare earths.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore / Clay → Leaching → Chemical Separation → Multi-Stage Ion Exchange → Precipitation → Calcination → 99.9% Pure Terbium Oxide (Tb₄O₇)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-emerald-950/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Terbium contribution to NdFeB permanent magnet coercivity enhancement and brilliant green phosphorescent emission under ultraviolet excitation"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Dual Identity: Magnet Stabilizer and Green Light Source</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Terbium serves two distinct critical roles. In permanent magnets, terbium atoms substitute into the Nd₂Fe₁₄B crystal lattice at grain
                boundaries, dramatically increasing coercivity (resistance to demagnetization under heat and opposing fields) and enabling NdFeB magnets
                to operate at 150°C to 200°C without performance loss. In phosphors, terbium produces the brilliant green emission (544 nm) that is the
                green component of white LED light and every trichromatic fluorescent lamp. Terbium also forms Terfenol-D (Tb₀.₃Dy₀.₇Fe₂), the most
                powerful magnetostrictive material known, used in sonar transducers, precision actuators, and vibration sensors.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of terbium including NdFeB magnet coercivity enhancement for EV motors, green LED phosphors, Terfenol-D sonar transducers, and X-ray intensifying screens"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                NdFeB permanent magnet coercivity enhancement (EV motors, wind generators, defense guidance systems), green phosphors for LED lighting
                and display technologies, Terfenol-D magnetostrictive alloys for naval sonar and precision actuators, solid oxide fuel cell electrolyte
                stabilization, X-ray intensifying screens for medical imaging, magneto-optical recording media, fluorescent security markers for currency
                and documents.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                $1.8B+ global terbium market (prices exceed $1,500/kg, reflecting extreme scarcity relative to magnet demand)
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
            EV Motors Need It. Wind Turbines Need It. Defense Systems Require It. Every LED on Earth Contains It. Supply Covers None of These Fully.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Terbium occupies a unique position among rare earth elements: critical across multiple unrelated industries simultaneously. The magnet
            industry consumes it to prevent demagnetization. The lighting industry requires it for green light. The defense industry depends on it for
            sonar and guidance. The fuel cell industry uses it for electrolyte performance. Each of these sectors is growing independently. Each draws from
            the same sub-400-tonne annual production pool. And terbium&apos;s position as a minor constituent in rare earth ores means its supply cannot
            scale independently of lighter rare earth production. When neodymium supply increases, terbium supply increases marginally. When terbium
            demand doubles, no mine expansion can target terbium specifically. The result is an element whose demand growth is driven by four separate
            industrial megatrends while its supply growth is locked to the production economics of elements it merely accompanies in the ground.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Permanent Magnet Stabilization: The Invisible Additive That Determines Whether Magnets Work at Temperature
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every high-performance NdFeB magnet designed for EV traction motors, wind turbine generators, and defense applications contains 2 to
                10% terbium (or dysprosium) to achieve the coercivity required for operation at 150°C to 200°C. Without this heavy rare earth addition,
                NdFeB magnets progressively demagnetize under the thermal loads generated by the very motors they power. The permanent magnet sector
                consumes over 200 tonnes of terbium annually, with demand growing in direct proportion to EV production volume (projected 40 million units
                by 2030), offshore wind deployment (380 GW by 2032), and defense magnet specification tightening across allied military programs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Defense Electronics and Sonar: Performance That Cannot Be Downgraded
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Terfenol-D (Tb₀.₃Dy₀.₇Fe₂) is the most powerful magnetostrictive material known, converting magnetic energy into mechanical motion with
                greater efficiency than any alternative. Naval sonar transducers, precision guidance actuators, active vibration damping systems, and
                acoustic sensing arrays in submarines and surface vessels depend on terbium. Defense procurement of terbium is classified by volume but
                is price-insensitive and growing as naval modernization programs across allied nations expand submarine fleets and upgrade electronic
                warfare capabilities. The US Department of Defense classifies terbium as a critical material for national security.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Green Phosphors and Solid-State Lighting: The Color Only Terbium Can Produce
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Terbium produces the 544 nm green emission that is the green component of white LED light, trichromatic fluorescent lamps, and display
                phosphors. No alternative material produces green light with equivalent spectral purity and efficiency at the wavelengths required for
                high-CRI (color rendering index) illumination. The global LED lighting market consumes approximately 50 tonnes of terbium annually for
                phosphor production, with demand growing as solid-state lighting penetration expands across commercial, industrial, and residential
                applications worldwide.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Medical Imaging and Fuel Cells: Quiet Consumption from Specialized Sectors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Terbium-activated gadolinium oxysulfide is the standard phosphor in X-ray intensifying screens that reduce patient radiation exposure while
                maintaining diagnostic image quality. Terbium-doped ceria stabilizes solid oxide fuel cell electrolytes, improving ionic conductivity at
                lower operating temperatures. Combined consumption from medical imaging, fuel cell, and specialty applications accounts for approximately
                40 tonnes annually, a figure that represents steady, non-cyclical demand from sectors where terbium&apos;s performance has no substitute.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Four Industries Drawing from One Scarce Supply</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global terbium demand rising from 340 tonnes in 2025 to 520 tonnes by 2030, with supply reaching approximately 400 tonnes,
              creating a 120-tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '340 t', note: 'Demand' },
                { year: '2028', val: '420 t', note: 'Demand' },
                { year: '2030', val: '520 t', note: 'Demand' },
                { year: '2035', val: '710 t', note: 'Projected from EV ramp, wind deployment, defense demand' },
                { year: '2030 Supply', val: '~400 t', note: 'Gap: 120+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-slate-100' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val}</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Adamas Intelligence, Roskill, USGS, Critical Minerals Institute, Allied Market Research.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Terbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the heavy rare earth element that prevents permanent magnets from failing at operating temperature
            comes to life in two products. One for terbium oxide that has already been separated, purified, and vaulted. One for terbium still locked in
            heavy rare earth deposits awaiting extraction. Both backed by physical material. Both settleable in stablecoins. Both built to give the
            magnet manufacturers, defense contractors, lighting companies, and investors who understand that an element ten times scarcer than neodymium in
            every ore body cannot scale supply fast enough to meet four simultaneous demand accelerations a way to secure the stabilizer the magnet
            industry cannot function without.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Terbium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical terbium. Every token is backed 1:1 by refined terbium oxide (Tb₄O₇) in insured, audited vault facilities.
                High-purity grade (99.9%+ Tb₄O₇), ready for NdFeB magnet grain boundary diffusion processing, green phosphor synthesis, Terfenol-D alloy
                production, and specialized industrial applications. Redeemable for physical terbium on demand. Not a derivative. Not a basket exposure. Not
                an equity proxy. The actual oxide.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined terbium oxide (99.9%+ Tb₄O₇ purity grade)</li>
                <li>Always redeemable for physical terbium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>
                  Ready for industrial end-use: NdFeB magnet coercivity enhancement, green LED phosphors, Terfenol-D magnetostrictive alloys, SOFC
                  electrolytes, X-ray screens
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Terbium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in terbium that has not been separated yet. Tokenized future delivery contracts backed by proven terbium content in heavy
                rare earth deposits at certified mining operations. For organizations that understand that terbium&apos;s scarcity is not temporary but
                geological: the element constitutes less than 1% of rare earth ores, cannot be targeted by mine expansion independently of lighter rare
                earths, and requires 10 to 15 years of mine development to bring new heavy rare earth capacity online. Early positioning is the only
                strategy that addresses a deficit this structurally embedded.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven terbium content in heavy rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting heavy rare earth separation complexity and geological scarcity</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for magnet manufacturers, defense contractors, sovereign funds, lighting companies, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/10 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term terbium delivery contracts tied to active rare earth operations with heavy rare earth separation capacity. For magnet
                manufacturers managing grain boundary diffusion processing schedules, defense contractors coordinating Terfenol-D production timelines, and
                commodity specialists positioning in a market where a single large magnet order can absorb months of available supply and Chinese export
                policy shifts can remove tonnage from the international market overnight.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year terbium positions backed by proven heavy rare earth reserves at earlier-stage operations. Built for sovereign strategic reserves
                securing magnet stabilizer supply against Chinese export disruption, automakers planning decade-scale EV production contingent on magnet
                material availability, wind developers securing permanent magnet generator supply chains, and institutional allocators who understand that
                terbium&apos;s geological scarcity within rare earth ores makes its deficit the hardest to resolve of any element in the magnet supply
                chain.
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
            Securing the Heavy Rare Earth That Prevents Every High-Performance Magnet from Demagnetizing. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Terbium is a heavy rare earth element, geologically concentrated in ion-adsorption clay deposits that are overwhelmingly located in southern
            China. Unlike light rare earths (neodymium, praseodymium, cerium) that are abundant in bastnäsite and monazite ores worldwide, heavy rare earths
            like terbium require specific geological formations that are rare outside the Jiangxi-Fujian-Guangdong clay belt. Toto Finance works directly
            with{' '}
            <Link href="/about" className="text-slate-800 font-medium underline underline-offset-2 hover:text-slate-600">
              heavy rare earth mining companies and separation facilities
            </Link>{' '}
            to secure terbium at the point of heavy rare earth separation, bypassing the trader networks that have historically controlled the thin supply
            connecting Chinese processing to global magnet manufacturing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces over 90% of global terbium from ion-adsorption clay deposits in Jiangxi, Fujian, and Guangdong provinces. These clays are unique geological formations where rare earth ions are adsorbed onto clay mineral surfaces and can be leached without conventional hard-rock mining. Chinese terbium production is subject to national production quotas, export controls, and increasing domestic consumption priority as China\'s EV and wind energy programs scale. Tightening export restrictions are systematically reducing international terbium availability at the exact moment non-Chinese demand is accelerating.',
              },
              {
                title: 'Myanmar',
                text: "Myanmar's Kachin State hosts ion-adsorption clay deposits geologically similar to southern China, producing heavy rare earth concentrates including terbium. Myanmar has become China's largest source of imported heavy rare earth feedstock. Political instability, conflict in mining regions, and Chinese processing dependency create supply reliability concerns, but Myanmar represents the only current-production heavy rare earth source at meaningful scale outside Chinese domestic operations.",
              },
              {
                title: 'Australia',
                text: 'Australia hosts heavy rare earth deposits in xenotime-bearing mineral sands and clay formations across Western Australia and Northern Territory. Lynas Rare Earths and emerging heavy rare earth developers are building separation capacity targeting terbium and dysprosium production. Australian operations are strategically important for allied defense and magnet supply chains seeking non-Chinese heavy rare earth sourcing.',
              },
              {
                title: 'North America (United States and Canada)',
                text: 'US heavy rare earth development includes Mountain Pass (limited heavy rare earth content), Round Top (Texas), Bear Lodge (Wyoming), and emerging projects targeting ion-adsorption clay analogs. Canadian projects in Quebec and Saskatchewan include heavy rare earth separation infrastructure. Defense Production Act funding and critical mineral designations are accelerating US heavy rare earth processing capacity development.',
              },
              {
                title: 'Africa',
                text: 'Emerging heavy rare earth projects in Burundi (Rainbow Rare Earths), Tanzania, Madagascar, and South Africa contain terbium-bearing deposits. African heavy rare earth development represents the most significant potential expansion of non-Chinese terbium supply, though projects remain 5 to 10 years from commercial production.',
              },
              {
                title: 'Exploration and Development',
                text: "New heavy rare earth projects across Scandinavia (Sweden's Norra Kärr), Greenland, Brazil, and India are in exploration and feasibility stages. These represent the next generation of terbium supply. In-Ground Terbium positions offer access at pre-production economics before separation output reaches the global magnet market.",
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
              <strong>Secured at the heavy rare earth separation stage.</strong> Terbium does not come from a dedicated terbium mine. It comes from the
              same heavy rare earth separation process that produces dysprosium, holmium, erbium, and other heavy lanthanides, where it constitutes a
              minor fraction of total output. Toto Finance works at this critical processing point, partnering directly with ion-adsorption clay operators
              and heavy rare earth separators to secure terbium at the moment it becomes an individual oxide rather than a component of mixed rare earth
              concentrate. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-slate-200">
                mine to token
              </Link>
              . Access to the element that determines whether permanent magnets survive their operating environment.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">Who Buys Tokenized Terbium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Terbium has never been individually accessible as an investment asset. It has been procured through industrial rare earth channels, embedded in
            combined heavy rare earth oxide pricing, and traded through the same Chinese-controlled networks that govern the broader rare earth market. The
            magnet manufacturers, defense contractors, and lighting companies that consume terbium have had no mechanism to secure forward supply
            independently, hedge terbium-specific price risk, or invest in the element as a standalone material. For an element that determines whether
            permanent magnets function at operating temperature, this absence of independent access represents a supply chain vulnerability that affects
            every electrified industry on Earth. Toto Finance creates that access for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-slate-800">MAGNET AND DEFENSE MANUFACTURERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies Whose Products Fail Without Terbium</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not treat terbium as optional. They treat it as the variable that determines whether the magnets inside their products
                maintain rated performance or degrade into components that cannot deliver specified torque at operating temperature. Tokenized terbium gives
                them{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  supply assurance
                </Link>
                , procurement visibility outside Chinese-controlled channels, and physical delivery capability for the heavy rare earth additive that every
                NdFeB magnet specification for high-temperature service absolutely requires.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                NdFeB permanent magnet manufacturers (grain boundary diffusion processors), EV motor and drivetrain producers, wind turbine direct-drive
                generator manufacturers, Terfenol-D magnetostrictive alloy producers (sonar, actuators), defense guidance and electronic warfare system
                manufacturers, naval sonar transducer companies, green phosphor and LED lighting manufacturers, X-ray intensifying screen producers, solid
                oxide fuel cell electrolyte manufacturers, magneto-optical recording and data storage companies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">HEAVY RARE EARTH INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                Investing in the Element Ten Times Scarcer Than Neodymium in Every Ore Body on Earth
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The neodymium supply conversation is incomplete without terbium. Every NdFeB magnet designed for high-temperature operation requires
                terbium, yet terbium occurs at roughly one-tenth the concentration of neodymium in typical rare earth deposits. This geological asymmetry
                means that for every ten tonnes of neodymium mined, approximately one tonne of terbium is produced, regardless of how much terbium the
                market demands. Investors who understand that this ratio is fixed by geology, not by market economics, recognize an element whose supply
                constraint is more permanent and less addressable than any light rare earth shortage.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                Collateral Backed by the Element That Determines Whether Electrification&apos;s Magnets Actually Work
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The electrification narrative is built on permanent magnets. The permanent magnet narrative is built on neodymium. But the engineering
                reality is that no NdFeB magnet designed for real-world high-temperature operation works without heavy rare earth stabilization, and
                terbium is the primary agent delivering that stabilization. Tokenized terbium offers on-chain participants collateral backed by the
                element whose absence would cause the magnets inside every EV motor and wind turbine to demagnetize at operating temperature, an engineering
                dependency that is absolute, geologically scarce, and geopolitically concentrated.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking exposure to the geological bottleneck behind electrification&apos;s magnet supply chain, protocol treasuries
                diversifying into heavy rare earth elements with fixed ore-body ratios that prevent independent supply scaling, DeFi protocols building
                collateral pools backed by the element whose 10:1 scarcity ratio to neodymium creates permanent supply asymmetry, blockchain foundations
                investing in the physical constraint that determines whether permanent magnets perform or fail, DAOs with critical mineral and electrification
                infrastructure investment mandates.
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
            Instant Settlement for Tokenized Terbium. No Rare Earth Traders. No Heavy Rare Earth Queues.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Terbium trades through the same opaque, Chinese-dominated channels that govern all heavy rare earth commerce. International buyers negotiate
            with a small number of Chinese export traders who control access to separation facility output, price bilaterally with no public benchmark,
            and settle through banking intermediaries with timelines measured in weeks. For an element that determines whether permanent magnets function at
            operating temperature, the procurement infrastructure offers no transparency, no price discovery, no forward commitment mechanism, and no
            alternative to Chinese-controlled supply channels. We built what the heavy rare earth market has never provided.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Chinese Export Channels. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Operation / Ion-Adsorption Clay Deposit',
                  'Heavy Rare Earth Separation Facility',
                  'Chinese Export Trader',
                  'International Rare Earth Distributor',
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
                Settlement: T+5 to T+30 (standard for heavy rare earth transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / Heavy Rare Earth Separation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-sm">
                      {i === 1 ? (
                        <Link href="/products" className="underline underline-offset-2 hover:text-slate-200">
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
                Terbium has been traded through Chinese export channels that control the flow of the world&apos;s only scaled heavy rare earth separation
                infrastructure. International magnet manufacturers, defense contractors, and lighting companies have no alternative but to negotiate with
                traders whose pricing, allocation, and export timing are determined by Chinese domestic policy rather than market fundamentals. Toto Finance
                uses blockchain to create what has never existed for terbium: a transparent, direct-settlement market where heavy rare earth producers
                connect with global buyers through infrastructure that publishes pricing in real time, settles transactions in seconds, and removes the
                intermediary layers that have historically given a single nation&apos;s export policy unilateral control over the magnet stabilizer supply of
                every electrified economy on Earth.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
            Settlement at the Speed Magnet Manufacturers Require
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that magnet manufacturers, defense procurement offices, and sovereign resource acquisition programs require for auditable digital transactions involving a strategically classified heavy rare earth element.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing the settlement depth that heavy rare earth transactions at industrial scale require. When magnet manufacturers procure terbium in multi-tonne quantities against EV production schedules and defense delivery timelines, USDT delivers execution infrastructure that eliminates the counterparty friction and banking delays of Chinese export trader settlement channels.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical mineral procurement where Defense Production Act compliance, Inflation Reduction Act domestic content requirements, and allied nation defense supply chain mandates govern the acquisition of heavy rare earth materials classified as essential to national security and electrification competitiveness.',
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
            DeFi Infrastructure for Tokenized Terbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Terbium has never existed as an independently tradeable financial asset. It has been embedded in combined heavy rare earth oxide pricing,
            bundled with dysprosium and other heavy lanthanides in mixed quotations, and procured through Chinese export channels with no standalone price
            benchmark visible to international markets. No ETF separates terbium from lighter rare earths. No futures contract references it independently.
            No financial instrument of any kind provides standalone terbium exposure. Tokenization does not merely digitize terbium. It unbundles it from
            mixed heavy rare earth pricing for the first time, creating an independent financial identity for the element that determines whether permanent
            magnets maintain their performance or degrade at operating temperature.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The First Independent Terbium Market, Unbundled from Mixed Heavy Rare Earth Pricing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, terbium did not have its own market. It had a price embedded in combined heavy rare earth quotations controlled by
                Chinese export traders. No buyer could acquire terbium exposure independently of dysprosium. No investor could take a standalone position in
                the magnet stabilizer without simultaneously accepting exposure to elements they did not seek. Tokenized terbium creates the first dedicated
                trading venue: a continuous secondary market on decentralized exchanges where price discovery for terbium happens independently,
                reflecting its specific role in magnet coercivity rather than its bundled value in mixed heavy rare earth shipments.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Yield Derived from the Element That Keeps Electrification&apos;s Magnets Operational
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend terbium tokens to counterparties seeking leveraged exposure to heavy rare earth pricing or hedged positions in magnet supply chain
                materials. Interest rates reflect real-world demand driven by EV production ramps, offshore wind commissioning schedules, defense magnet
                procurement cycles, and LED lighting market expansion. Yield generated by four independent industrial demand streams simultaneously
                drawing from one sub-400-tonne annual supply, applied to the element that no high-performance NdFeB magnet can function without.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Capital Without Surrendering Magnet Stabilizer Positions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Magnet manufacturers and institutional investors holding terbium positions have historically had no mechanism for accessing capital from
                those holdings independently, because terbium has never been independently held as a financial asset.{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  Borrow against terbium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For NdFeB magnet producers managing grain boundary diffusion processing
                inventory against automaker delivery schedules, this creates a liquidity mechanism that has never existed for the heavy rare earth element
                their entire production process depends on.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risk Management for an Element Whose Supply Is Geologically Fixed Relative to Lighter Rare Earths
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Terbium&apos;s supply risk is unique among rare earth elements: its concentration in ore bodies is fixed at approximately one-tenth the
                level of neodymium, meaning supply cannot scale independently regardless of price signals or investment in new capacity. When a mine
                expands neodymium production by 1,000 tonnes, terbium production increases by approximately 100 tonnes. This geological ratio cannot be
                engineered around. Smart contract infrastructure automates collateral monitoring calibrated to heavy-to-light rare earth production ratios,
                margin management reflecting Chinese export policy volatility, and position tracking for an asset whose supply ceiling is set by geology
                rather than economics.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Heavy Rare Earth Separation to Global Digital Market: The Terbium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Separated: Terbium oxide isolated from heavy rare earth concentrate through multi-stage ion exchange, purified to 99.9%+ grade, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time magnet coercivity demand and heavy rare earth separation output',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for heavy rare earth supply disruption hedging',
                'Delivered: Redeemed for physical terbium oxide (Tb₄O₇, 99.9%+) for NdFeB grain boundary diffusion, green phosphor synthesis, Terfenol-D production, or specialized industrial application',
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
            Tokenized Terbium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a way to invest in terbium independently. Rare earth ETFs dilute it across 17 elements. Mining stocks carry operational risk
            from light rare earths that dominate revenue. Physical procurement delivers mixed heavy rare earth oxide through Chinese export channels with
            opaque pricing and weeks-long settlement. Toto Finance built what the magnet supply chain has never offered: standalone, fractional, instant
            access to the element that determines whether permanent magnets survive their operating environment.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized terbium on Toto Finance versus rare earth ETFs, physical terbium procurement, and mining stocks across 10 features including terbium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Terbium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Terbium-Specific', 'No (basket)', 'Yes (1:1)', 'Mixed HRE bundle', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Chinese export hours', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$50,000+ (HRE bundle)', '1 share (~$5+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes (as mixed HRE)', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Opaque / bilateral', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Chinese traders + banks', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-slate-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for the Element That Makes or Breaks Every High-Temperature Magnet
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Terbium has never had its own financial infrastructure because it has never been separated from the combined heavy rare earth pricing structure
            that Chinese export traders control. Bundled with dysprosium in mixed quotations, invisible as a standalone material in procurement contracts that
            treat heavy rare earths as a single product category, and absent from every financial platform, exchange, and instrument that references rare
            earth markets. Every feature of the Toto Finance platform for terbium was built to create what the heavy rare earth market has never provided:
            independent access, transparent pricing, and financial tools for the element that magnet metallurgists know determines whether their products
            perform or fail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Magnet-Stabilizer-Grade Delivery Capability',
                b: 'Every terbium token connects to verified terbium oxide (Tb₄O₇, 99.9%+) in insured custody. Request physical delivery and receive material ready for NdFeB magnet grain boundary diffusion processing, green phosphor production, Terfenol-D alloy fabrication, or specialized industrial applications. In a market where terbium has always been delivered as part of mixed heavy rare earth oxide shipments, on-chain proof-of-reserves creates the first independent verification of standalone terbium holdings with guaranteed purity and delivery specification.',
              },
              {
                t: 'Independent Price Discovery for an Element Bundled into Mixed Quotations Since Its Commercial History Began',
                b: "Terbium has never had a standalone price visible to international markets. Chinese export traders quote combined heavy rare earth oxide pricing that embeds terbium value alongside dysprosium and other heavy lanthanides. Individual terbium pricing is negotiated bilaterally, varies by customer and volume, and changes with Chinese export policy rather than transparent market dynamics. Toto Finance's oracle feeds and on-chain trading activity create the first public, real-time terbium pricing mechanism: independently verifiable, reflective of magnet coercivity demand specifically, and accessible to every market participant.",
              },
              {
                t: 'Instant Settlement for a Material Controlled by Chinese Export Timelines',
                b: "Traditional terbium procurement operates through Chinese export traders with settlement timelines of weeks, layered with export licensing, banking intermediaries, and logistics chains optimized for Chinese domestic policy schedules rather than buyer urgency. Token settlement creates instant procurement capability, settling T+0 with stablecoins. For magnet manufacturers managing grain boundary diffusion processing schedules against automaker delivery commitments, instant settlement replaces a procurement process whose timeline is set by a foreign government's export policy.",
              },
              {
                t: 'Compliance for Critical Mineral and Defense Material Transactions',
                b: 'Terbium carries critical mineral designations from the United States, European Union, Japan, Australia, and allied nations. Its role in defense magnets and Terfenol-D sonar systems places it under defense material classification frameworks. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, ensuring every transaction satisfies the regulatory requirements governing a heavy rare earth element that multiple governments classify as essential to national security and electrification industrial strategy.',
              },
              {
                t: 'Financial Tools for the Heavy Rare Earth the Magnet Industry Cannot Function Without',
                b: "Lending, borrowing, hedging, and collateral management for terbium as a standalone asset: capabilities that have never existed because terbium has never been unbundled from mixed heavy rare earth pricing. Smart contract protocols enable yield generation from terbium positions, stablecoin borrowing against holdings, and programmable hedging strategies built specifically for an element whose 10:1 geological scarcity ratio to neodymium creates supply dynamics fundamentally different from any light rare earth instrument.",
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized terbium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Magnet manufacturers, defense procurement platforms, institutional custodians, DeFi protocols, and individual holders can interact with terbium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific constraints on the heavy rare earth element that determines permanent magnet performance.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Terbium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized terbium, In-Ground Terbium, magnet coercivity, Terfenol-D, green phosphors, and how Toto Finance provides the
            first standalone access to the heavy rare earth element that prevents permanent magnets from demagnetizing at operating temperature.
          </p>
          <TerbiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Every High-Performance Magnet Requires Terbium to Survive Its Operating Temperature. The World Does Not Produce Enough.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            The world needs 520 tonnes of terbium by 2030. Production will deliver approximately 400. The 120-tonne deficit cannot be closed by expanding
            existing mines, because terbium constitutes less than 1% of rare earth ores and its production is geologically locked to the output rate of
            lighter rare earths that outnumber it ten to one in every deposit. New heavy rare earth mines take 10 to 15 years to develop. Chinese export
            controls are tightening. And every EV motor, every wind turbine generator, every defense guidance system being designed today contains NdFeB
            magnets that will not function at operating temperature without the element the world is running out of. Toto Finance is building the
            infrastructure to bring the magnet stabilizer on-chain as an independent, transparent, instant-settlement asset for the first time.
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
