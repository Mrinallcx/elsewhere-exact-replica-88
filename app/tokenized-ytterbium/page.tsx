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
const YtterbiumTickerBar = dynamicImport(
  () => import('../components/client/YtterbiumTickerBar').then((mod) => ({ default: mod.YtterbiumTickerBar }))
);
const YtterbiumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-ytterbium';
const PAGE_TITLE = 'Tokenized Ytterbium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every industrial fiber laser cutting metal in every factory on Earth runs on ytterbium. Toto Finance brings the manufacturing laser element on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element powering 65% of metal cutting, atomic clocks, and quantum computing qubits. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Ytterbium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized ytterbium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined ytterbium oxide (Yb₂O₃) in insured, audited vaults. High-purity grade (99.9%+ Yb₂O₃), ready for fiber laser preform doping, Yb:YAG disk laser crystal growth, atomic clock species preparation, Yb-171 quantum computing ion trap loading, stainless steel alloy manufacturing, and Yb-169 radiography source fabrication. Redeemable for physical ytterbium on demand. Toto Finance is building the infrastructure to bring ytterbium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Ytterbium?',
    answer:
      'A tokenized future delivery contract for ytterbium still contained in heavy rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active heavy rare earth fractionation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for fiber laser manufacturers, atomic clock developers, quantum computing companies, sovereign manufacturing reserves, and institutional investors positioning for the structural ytterbium deficit in a market where three independent technology adoptions are converging on a 635-tonne byproduct supply chain.',
  },
  {
    question: 'Where does the ytterbium come from?',
    answer:
      'Directly from rare earth mining companies and heavy rare earth separation facilities across China (87% of production from ion-adsorption clays in Jiangxi, Guangdong, Yunnan), North America (emerging US and Canadian heavy rare earth fractionation for manufacturing and defense supply security), Australia (xenotime and clay deposits in Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay with heavy rare earth concentrations), and Brazil/Madagascar (monazite and heavy rare earth projects). No middlemen. No bundled heavy rare earth export channels. Secured at the point of heavy rare earth fractionation. Partnerships: https://totofinance.co/about',
  },
  {
    question: 'Who buys tokenized ytterbium?',
    answer:
      'Three groups: (1) Laser, timing, and quantum manufacturers, including industrial fiber laser companies (IPG Photonics, TRUMPF, Coherent, nLIGHT), metal cutting and welding OEMs, additive manufacturing system producers, atomic clock and precision timing developers (NIST, PTB, GPS satellite contractors), quantum computing hardware companies (IonQ, Quantinuum), laser crystal and preform manufacturers, Yb:YAG disk laser producers, stainless steel alloy producers, and Yb-169 radiography source manufacturers. (2) Advanced manufacturing investors, including funds and allocators seeking direct exposure to the element at the intersection of a current manufacturing revolution and a future computing paradigm. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by multi-sector converging demand dynamics.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional ytterbium procurement operates through Chinese heavy rare earth export channels with settlement measured in one to three weeks, opaque bundled pricing, and allocation driven by magnet industry priorities. Toto Finance creates a direct settlement mechanism connecting heavy rare earth fractionation sources with fiber laser manufacturers, quantum computing companies, and investors on-chain, eliminating every intermediary in the heavy rare earth export supply chain.',
  },
  {
    question: 'Can I trade tokenized ytterbium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking advanced manufacturing material exposure, or use ytterbium tokens as collateral for stablecoin loans. Ytterbium has never existed as an independently tradeable financial asset. It has been buried inside combined heavy rare earth pricing for its entire commercial history. Tokenization creates both the standalone asset class and its market simultaneously.',
  },
  {
    question: 'Why is ytterbium irreplaceable in fiber lasers, atomic clocks, and quantum computing?',
    answer:
      "Ytterbium's near-closed-shell [Xe]4f¹⁴6s² electron configuration creates a unique combination of properties no other element replicates. In fiber lasers, it provides a simple two-level energy scheme delivering 40%+ wall-plug efficiency at multi-kilowatt power with minimal thermal loading, which is why it dominates 65% of industrial metal cutting. In atomic clocks, its two ultra-narrow optical transitions enable 10⁻¹⁸ fractional frequency uncertainty, the most precise timekeeping ever achieved. In quantum computing, Yb-171's nuclear spin-1/2 provides long coherence times and high-fidelity gate operations ideal for trapped-ion qubit architectures. Three physics advantages. Three industries. One element at 635 tonnes per year.",
  },
  {
    question: 'What is the ytterbium price outlook?',
    answer:
      'Roskill forecasts sustained price appreciation driven by a 480-tonne structural deficit by 2030. Fiber laser demand growing at 18% CAGR, atomic clock and precision timing demand at 35% CAGR, and additive manufacturing demand at 28% CAGR are converging on a supply base of approximately 635 tonnes annually that cannot scale independently of yttrium, dysprosium, and terbium production economics. Critical Minerals Intelligence projects ytterbium oxide prices will continue to rise as Chinese export controls tighten and non-Chinese laser and quantum technology sectors scale.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Fiber laser manufacturers, atomic clock developers, quantum computing companies, additive manufacturing producers, institutional investors, mining partners, sovereign manufacturing reserve managers, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed ytterbium oxide tokens and In-Ground Ytterbium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Ytterbium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined ytterbium oxide (Yb₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Ytterbium',
      description:
        'Tokenized future delivery contract for ytterbium in heavy rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

const traditionalSteps = [
  'Mining Operation / Ion-Adsorption Clay',
  'Heavy Rare Earth Separation Facility',
  'Chinese Export Trader',
  'International Heavy Rare Earth Distributor',
  'Clearing Agent',
  'Custodian Bank',
  'Correspondent Bank',
  'Buyer',
];

export default function TokenizedYtterbiumPage() {
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
        datePublished="2026-01-01"
        dateModified="2026-03-21"
        breadcrumbItems={breadcrumbItems}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqData} />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* FOLD 1: Hero */}
      <section className="relative bg-gradient-to-br from-orange-950 via-slate-900 to-gray-950 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-orange-100/90 mb-4">
            Tokenized Ytterbium by Toto Finance
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            65% of Every Metal Cut on Earth Is Made by an Ytterbium Laser. The World&apos;s Most Precise Clocks Run on It.
            Quantum Computers Use It as a Qubit. Now It Is On-Chain.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            Walk into any automotive factory, any aerospace manufacturing facility, any precision metal shop anywhere in the world, and the fiber laser
            cutting steel, welding aluminum, or sintering titanium powder into flight-critical components is almost certainly doped with ytterbium. In the past
            decade, ytterbium fiber lasers have replaced CO₂ laser systems across 65% of the global metal cutting and welding market because they deliver ten
            times higher electrical-to-optical efficiency, require zero gas refills, need no alignment maintenance, and produce beam quality that CO₂ systems
            cannot match. Simultaneously, ytterbium atomic clocks have become the most precise timekeeping devices ever created, achieving 17-digit accuracy
            that underpins GPS satellites, global telecommunications, and fundamental physics research. And ytterbium ions are serving as the stable qubits in
            trapped-ion quantum computers being built by IonQ, Quantinuum, and research institutions worldwide. Three technological revolutions, one element,
            and a global production of 635 tonnes per year from heavy rare earth separation where ytterbium is recovered as a byproduct. China controls 87%
            of output. The 480-tonne supply gap projected for 2030 is widening with every fiber laser shipped and every quantum processor scaled.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-orange-100">
              Toto Finance
            </Link>{' '}
            is building the infrastructure to bring the element that powers precision manufacturing, precision time, and precision computing on-chain for the
            first time.
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
              Why Ytterbium Matters
            </a>
          </div>
        </div>
      </section>

      <YtterbiumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Element That Replaced CO₂ Lasers Across Global Manufacturing. And the World Produces It as a Byproduct.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>We chose ytterbium because it represents the clearest case of an element whose industrial dominance has outpaced its supply infrastructure by a decade.</p>
            <p>
              Ytterbium fiber lasers did not gradually gain market share. They detonated it. In less than fifteen years, ytterbium-doped fiber and disk lasers
              have displaced CO₂ laser systems across 65% of the global metal cutting and welding market, a transition driven by physics that no competing
              technology can overcome: ten times higher wall-plug efficiency, maintenance-free solid-state operation, superior beam quality at multi-kilowatt
              power levels, and the ability to deliver laser light through fiber optics that CO₂ beams cannot traverse. Every Tesla body panel, every Airbus
              fuselage section, every medical implant manufactured by laser cutting or welding is made with ytterbium. And this is only the manufacturing
              application. Ytterbium optical lattice clocks measure time with 17-digit precision, accuracy so extreme that they would not lose a second in the
              age of the universe. GPS satellites, 5G network synchronization, and fundamental physics experiments depend on ytterbium timing. Ytterbium-171 ions
              serve as the primary qubit platform in trapped-ion quantum computers, chosen for their simple electronic structure, long coherence times, and
              high-fidelity gate operations. Three foundational technologies. One element. All of it produced as a byproduct of heavy rare earth separation at
              Chinese facilities whose primary products are yttrium, dysprosium, and terbium. Total global output: 635 tonnes per year. China controls 87%. The
              480-tonne deficit projected for 2030 reflects a manufacturing world that adopted ytterbium lasers faster than anyone built the supply chain to
              sustain them.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">125 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Manufacturing Supply Chain Already in Deficit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 125-tonne ytterbium deficit in 2025, a shortfall that is already forcing fiber laser manufacturers to compete for allocation
                from a limited number of Chinese heavy rare earth separation facilities. Global ytterbium production is approximately 635 tonnes annually, all
                recovered as a byproduct during heavy rare earth processing. No dedicated ytterbium mine exists. Supply is locked to the production economics
                of yttrium, dysprosium, and terbium, elements whose output levels are determined by their own demand, not ytterbium&apos;s.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">1.06 μm</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Wavelength That Conquered the Factory Floor</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium-doped fiber lasers emit at 1.06 micrometers, a wavelength that couples efficiently into metal surfaces, transmits through flexible
                fiber optics (unlike CO₂&apos;s 10.6 μm which requires rigid mirror delivery), and achieves wall-plug efficiency above 40% compared to CO₂&apos;s
                5 to 10%. This physics advantage is absolute and permanent. No other dopant element achieves ytterbium&apos;s combination of power, efficiency,
                and beam quality in fiber laser architecture. 75% of all ytterbium consumed globally goes into industrial fiber laser manufacturing, a sector
                shipping 45,000 systems annually and growing at 18% compound annual growth rate.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">480 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit Driven by Three Simultaneous Technology Adoptions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global ytterbium demand is projected to reach 1,425 tonnes per year by 2030, while supply from existing and planned heavy rare earth operations
                will deliver approximately 945 tonnes. The 480-tonne gap represents a 34% shortfall. This deficit is not driven by a single sector but by three
                simultaneous technology adoptions: industrial fiber lasers replacing CO₂ across global manufacturing, atomic clocks upgrading precision timing
                infrastructure worldwide, and quantum computers scaling trapped-ion qubit arrays from laboratory to commercial systems. Each adoption curve is
                independent. Each draws from the same 635-tonne byproduct supply.
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
            Understanding Why Ytterbium Dominates Three Separate Technological Frontiers Simultaneously
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rare earth with the closed-shell electron configuration that makes it the ideal laser dopant, the perfect atomic clock species, and the optimal
            trapped-ion qubit. Produced as a byproduct at 635 tonnes per year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-orange-950 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Ytterbium element card showing Yb symbol, atomic number 70, density, melting point, and classification as the dominant fiber laser dopant rare earth element"
              >
                <p className="text-3xl font-light mb-1">Yb</p>
                <ul className="space-y-1 text-orange-100/90">
                  <li>Atomic Number: 70</li>
                  <li>Density: 6,970 kg/m³</li>
                  <li>Melting Point: 824°C</li>
                  <li>Laser Efficiency: 40%+ Wall-Plug</li>
                  <li>Classification: Fiber Laser Dominant Dopant</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Heavy rare earth separation facility where ytterbium is recovered as a byproduct alongside yttrium, dysprosium, and terbium from ion-adsorption clay processing"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium is recovered as a byproduct during heavy rare earth separation, primarily from ion-adsorption clay deposits in southern China
                (Jiangxi, Guangdong, Yunnan) and secondarily from xenotime, monazite, and euxenite ores in Australia, Brazil, and the USA. China produces 87% of
                global output. Total annual production: 635 tonnes, entirely dependent on heavy rare earth processing decisions driven by demand for yttrium,
                dysprosium, and terbium rather than ytterbium itself.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono leading-snug">
                Ore / Clay → Leaching → Chemical Separation → Heavy Rare Earth Fractionation → Ion Exchange Purification → Precipitation → 99.9% Pure
                Ytterbium Oxide (Yb₂O₃)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-amber-900/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Ytterbium-doped fiber laser crystal emission at 1.06 μm and ytterbium optical lattice clock demonstrating the element's precision manufacturing and timing applications"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Electron Configuration That Makes It Irreplaceable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium&apos;s near-closed-shell [Xe]4f¹⁴6s² electron configuration gives it properties that no other rare earth element replicates. As a
                laser dopant, it provides a simple two-level energy scheme that enables high-efficiency, high-power output at 1.06 μm with minimal quantum defect
                heating, which is why it dominates fiber laser architecture. As a clock atom, its two ultra-narrow optical transitions enable timekeeping precise
                to 10⁻¹⁸ seconds, the most accurate measurement of any physical quantity. As a qubit, ytterbium-171&apos;s nuclear spin-1/2 provides long
                coherence times and high-fidelity quantum gate operations. Ytterbium also has the smallest liquid range of any metal (824°C to 1,196°C), the
                lowest density among lanthanides at 6,970 kg/m³, and a stable +2 oxidation state unusual among rare earths.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of ytterbium including industrial fiber lasers for metal cutting, optical atomic clocks for GPS timing, trapped-ion quantum computers, and stainless steel grain refinement"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Yb-doped fiber lasers for metal cutting, welding, and marking (65% of global metal processing laser market), selective laser melting and DMLS
                additive manufacturing systems, optical lattice atomic clocks for GPS, telecommunications, and scientific timekeeping, trapped-ion quantum
                computers (IonQ, Quantinuum) using Yb-171 qubits, stainless steel grain refinement and alloy strengthening, Yb-169 portable gamma-ray sources
                for industrial radiography, dental prosthetic lasers, and scientific research spectroscopy.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                $185M+ global ytterbium market (75% consumed by industrial fiber laser manufacturing, growing 18% annually)
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
            Manufacturing Adopted Ytterbium Lasers. Time Infrastructure Adopted Ytterbium Clocks. Quantum Computing Adopted Ytterbium Qubits. Supply Was Built
            for None of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Ytterbium&apos;s demand story is not a single-sector narrative. It is three independent technological adoptions converging on one element
            simultaneously, each driven by physics advantages that leave no room for substitution. Fiber laser manufacturers chose ytterbium because no other
            dopant delivers equivalent efficiency at multi-kilowatt power. Atomic clock engineers chose ytterbium because no other atom provides equivalent
            optical transition stability. Quantum computing architects chose ytterbium-171 because no other trapped ion offers equivalent qubit fidelity at
            scale. Each of these choices was made independently, by different industries, for different applications, based on different physics. All of them
            draw from the same 635-tonne annual supply produced as a byproduct of someone else&apos;s heavy rare earth processing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Industrial Fiber Lasers: The Technology That Consumed 65% of Global Metal Processing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium fiber lasers have captured 65% of the industrial metal cutting and welding market in less than fifteen years, displacing CO₂ systems
                that dominated for decades. With 45,000 fiber laser systems shipped annually, automotive production lines converting entirely to fiber laser
                processing, aerospace manufacturers laser-cutting titanium and Inconel components, and EV battery manufacturing requiring laser welding at
                industrial scale, fiber lasers consume approximately 475 tonnes of ytterbium per year. Growth continues at 18% compound annual growth rate as
                manufacturing automation expands globally and remaining CO₂ installations are replaced.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Metal Additive Manufacturing: Building the Impossible with Ytterbium Photons</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Selective laser melting (SLM) and direct metal laser sintering (DMLS) systems use ytterbium fiber lasers to build aerospace engine components,
                medical implants, and structural parts with geometries impossible through casting or machining. The metal 3D printing sector consumes approximately
                85 tonnes of ytterbium annually, growing at 28% compound annual growth rate as additive manufacturing transitions from prototyping to series
                production for flight-critical and load-bearing applications across defense, commercial aerospace, and automotive industries.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Atomic Clocks and Precision Timing: Measuring the Universe&apos;s Most Fundamental Quantity
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium optical lattice clocks achieve 10⁻¹⁸ fractional frequency uncertainty, the most precise measurement of time ever accomplished, accurate
                enough that they would not drift by a single second over the 13.8-billion-year age of the universe. GPS satellites, 5G and future 6G network
                synchronization, financial trading timestamp infrastructure, and fundamental physics experiments (gravitational wave detection, dark matter
                searches) depend on ytterbium precision timing. The sector consumes approximately 18 tonnes annually, with demand growing at 35% as quantum
                sensing and precision navigation applications commercialize.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Quantum Computing Qubits: Ytterbium at the Core of Programmable Quantum Processors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium-171 ions serve as the primary qubit platform in trapped-ion quantum computers developed by IonQ, Quantinuum (formerly Honeywell
                Quantum Solutions), and leading research institutions worldwide. Yb-171&apos;s nuclear spin-1/2 ground state provides exceptionally long coherence
                times, high-fidelity single and two-qubit gate operations, and all-to-all qubit connectivity that superconducting architectures cannot match.
                The quantum computing sector consumes approximately 12 tonnes annually, projected to reach 65 tonnes by 2030 as quantum processors scale from
                hundreds to thousands of qubits for commercial error-corrected computation.
              </p>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
            role="img"
            aria-label="Bar chart showing global ytterbium demand rising from 760 tonnes in 2025 to 1,425 tonnes by 2030, with supply reaching approximately 945 tonnes, creating a 480-tonne annual deficit"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">Three Technological Revolutions, One Byproduct Supply</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '760', note: '—', metric: 'Demand (tonnes)' },
                { year: '2028', val: '1,080', note: '—', metric: 'Demand (tonnes)' },
                { year: '2030', val: '1,425', note: '—', metric: 'Demand (tonnes)' },
                { year: '2035', val: '2,100', note: 'Roskill projection', metric: 'Demand (tonnes)' },
                {
                  year: '2030 Supply',
                  val: '~945',
                  note: 'Gap: 480+ tonnes (34% shortfall)',
                  highlight: true,
                  metric: 'Supply (tonnes)',
                },
              ].map((d, i) => (
                <div
                  key={i}
                  className={`text-center p-4 rounded-xl ${d.highlight ? 'bg-orange-950/10 border border-orange-200' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${d.highlight ? 'text-orange-900 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {d.metric}: {d.val}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, Laser Institute of America.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Ytterbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the element that powers the lasers building the physical world, the clocks measuring time itself, and
            the quantum computers that will reshape computation comes to life in two products. One for ytterbium oxide that has already been separated, purified,
            and vaulted. One for ytterbium still locked in heavy rare earth deposits awaiting extraction. Both backed by physical material. Both settleable in
            stablecoins. Both built to give the fiber laser manufacturers, atomic clock developers, quantum computing companies, and investors who understand
            that three independent technology adoptions cannot be sustained by a 635-tonne byproduct supply chain a way to secure the element at the center of
            all three.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">ASSET-BACKED TOKEN</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Ytterbium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical ytterbium. Every token is backed 1:1 by refined ytterbium oxide (Yb₂O₃) in insured, audited vault facilities.
                High-purity grade (99.9%+ Yb₂O₃), ready for fiber laser crystal and preform doping, Yb:YAG disk laser production, atomic clock species
                preparation, quantum computing ion trap loading, and stainless steel alloy manufacturing. Redeemable for physical ytterbium on demand. Not a
                derivative. Not a basket. Not an equity proxy. The actual oxide, at laser-grade purity.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined ytterbium oxide (99.9%+ Yb₂O₃ purity grade)</li>
                <li>Always redeemable for physical ytterbium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>
                  Ready for industrial end-use: Yb-doped fiber laser preforms, Yb:YAG disk laser crystals, atomic clock species, Yb-171 quantum computing ion
                  traps, stainless steel grain refinement, Yb-169 radiography sources
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Ytterbium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in ytterbium that has not been separated yet. Tokenized future delivery contracts backed by proven ytterbium content in heavy
                rare earth deposits at certified mining operations. For organizations that understand that ytterbium&apos;s 480-tonne deficit is the predictable
                consequence of three independent technology adoptions converging on a single byproduct supply chain that was never designed to be the feedstock
                of global manufacturing, global timekeeping, and global quantum computing simultaneously.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven ytterbium content in heavy rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting byproduct supply constraints and multi-sector demand convergence</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for fiber laser manufacturers, quantum computing companies, atomic clock developers, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
              <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-medium mb-3">1 to 12 Months</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Near-term ytterbium delivery contracts tied to active rare earth operations with heavy rare earth separation capacity. For fiber laser
                manufacturers managing quarterly preform production, additive manufacturing companies scaling laser system output, and commodity specialists
                positioning in a market where 45,000 fiber laser systems ship annually and every system requires ytterbium-doped components whose supply is
                controlled by a handful of Chinese separation facilities.
              </p>
            </div>
            <div className="bg-slate-800 text-white rounded-2xl p-6 md:p-8 border border-slate-700">
              <p className="text-xs font-semibold tracking-wider text-slate-400 mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-medium mb-3">1 to 6 Years</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Multi-year ytterbium positions backed by proven heavy rare earth content at earlier-stage mining operations. Built for sovereign manufacturing
                competitiveness reserves, laser OEMs planning decade-scale production expansion, quantum computing companies securing qubit material supply ahead
                of commercial scaling, and institutional allocators who understand that ytterbium&apos;s deficit is structural: three technology adoptions
                outpacing a byproduct supply chain that has no mechanism to scale independently of yttrium, dysprosium, and terbium economics.
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
            Securing the Element That 65% of Global Metal Cutting Depends On. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Ytterbium is recovered during heavy rare earth separation, a fraction of output from facilities whose primary purpose is producing yttrium,
            dysprosium, and terbium. Its supply is permanently linked to the processing economics of other heavy rare earths, unable to scale independently
            regardless of how much the laser, timing, and quantum computing industries demand. Toto Finance works directly with{' '}
            <Link href="/about" className="text-slate-900 underline underline-offset-2 hover:text-slate-600">
              rare earth mining companies and heavy rare earth separation facilities
            </Link>{' '}
            across every production region, securing ytterbium at the point of heavy rare earth fractionation where it separates from the heavier lanthanide
            stream and becomes an individually addressable, industrial-grade oxide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                region: 'China',
                desc: 'China produces 87% of global ytterbium from ion-adsorption clay deposits across Jiangxi, Guangdong, and Yunnan provinces. Chinese heavy rare earth separation facilities in these regions perform the multi-stage fractionation that isolates ytterbium alongside yttrium, dysprosium, terbium, and other heavy lanthanides. Export quotas and domestic consumption priority for Chinese fiber laser manufacturing (China is simultaneously the world\'s largest producer and consumer of industrial lasers) are reducing international availability at the exact moment non-Chinese laser and quantum technology sectors are scaling.',
              },
              {
                region: 'North America (United States and Canada)',
                desc: 'US heavy rare earth development includes Round Top (Texas), projects in Alaska and Nevada targeting heavy lanthanide separation, and British Columbia rare earth deposits with ytterbium concentrations. Critical mineral designations under the Defense Production Act and manufacturing competitiveness initiatives are accelerating domestic heavy rare earth fractionation capacity that will produce ytterbium for American fiber laser, atomic clock, and quantum computing supply chains.',
              },
              {
                region: 'Australia',
                desc: 'Australia hosts ytterbium-bearing xenotime mineral sand deposits and heavy rare earth clay formations across Northern Territory and Western Australia. Advanced hydrometallurgical separation technologies developed for Australian ore types enable ytterbium recovery at commercial purity. Australian production is strategically important for allied manufacturing, defense laser, and quantum technology supply chains.',
              },
              {
                region: 'Southeast Asia and Vietnam',
                desc: "Vietnam's ionic clay deposits in northern provinces contain heavy rare earth concentrations including ytterbium. Emerging Southeast Asian heavy rare earth processing facilities provide alternative ytterbium supply channels outside Chinese-dominated separation infrastructure for international fiber laser and quantum computing manufacturers.",
              },
              {
                region: 'Brazil and Madagascar',
                desc: "Brazil's monazite beach sand deposits and Madagascar's heavy rare earth projects contain ytterbium at concentrations supporting commercial recovery. New separation facilities under development offer additional ytterbium supply diversity for regional laser manufacturing and scientific research institutions in South America and the Indian Ocean region.",
              },
              {
                region: 'Exploration and Development',
                desc: 'New heavy rare earth projects across Africa (Tanzania, Burundi), Scandinavia (Sweden, Norway), and Greenland are in exploration and feasibility stages with confirmed ytterbium content. These represent the next generation of ytterbium supply. In-Ground Ytterbium positions offer access at pre-production economics before fractionation output reaches the fiber laser and quantum computing markets.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Secured at the heavy rare earth fractionation stage.</strong> Ytterbium does not come from an ytterbium mine. It comes from the heavy
              rare earth fractionation process that separates yttrium, dysprosium, terbium, and ytterbium from a shared concentrate. Its availability is governed
              by the production decisions of facilities whose primary customers are the magnet and phosphor industries, not the laser and quantum industries.
              Toto Finance works at this critical fractionation point, securing ytterbium at the moment it becomes an individual oxide rather than a component
              of mixed heavy rare earth output. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="text-white underline underline-offset-2 hover:text-orange-100">
                mine to factory floor
              </Link>
              . Access to the element that cuts metal, measures time, and computes at the quantum level.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Ytterbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Ytterbium has never been individually accessible as an investment asset. It has been procured through heavy rare earth channels, embedded in
            combined oxide pricing, and traded through Chinese-dominated networks whose allocation priorities reflect magnet and phosphor industry demand rather
            than the laser and quantum sectors that now dominate ytterbium consumption. The fiber laser manufacturers, atomic clock developers, and quantum
            computing companies that have built entire technology platforms on ytterbium have had no mechanism to secure forward supply, hedge ytterbium-specific
            price risk, or invest in the element independently of the broader rare earth market. Toto Finance creates that mechanism for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-orange-100 text-orange-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 leading-tight">
                LASER, TIMING, AND QUANTUM MANUFACTURERS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">The Companies That Built Three Industries on One Element</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on ytterbium. They consume it: in the fiber laser preforms that become the cutting tools of modern manufacturing,
                in the atomic clock cells that synchronize the infrastructure of global communication, and in the ion traps that hold the qubits of quantum
                computation. Tokenized ytterbium gives them{' '}
                <Link href="/products" className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600">
                  supply continuity
                </Link>
                , forward procurement capability, and physical delivery infrastructure for the element that three separate billion-dollar technology sectors
                independently chose as foundationally irreplaceable.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Industries: </span>
                Industrial fiber laser manufacturers (IPG Photonics, TRUMPF, Coherent, nLIGHT), metal cutting and welding equipment OEMs, selective laser
                melting and DMLS additive manufacturing system producers, automotive and aerospace laser processing integrators, atomic clock and precision
                timing developers (NIST, PTB, major GPS satellite contractors), quantum computing hardware companies (IonQ, Quantinuum, research institutions),
                laser crystal and fiber preform manufacturers, Yb:YAG disk laser producers, semiconductor manufacturing equipment makers, stainless steel alloy
                producers, Yb-169 industrial radiography source manufacturers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                ADVANCED MANUFACTURING INVESTORS
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Investing in the Element That Replaced CO₂ Lasers and Is Now Building the Quantum Era
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium&apos;s investment case spans two distinct horizons. In the present, it is the dominant dopant in industrial fiber lasers that have
                captured 65% of global metal cutting, a sector shipping 45,000 systems annually at 18% growth. In the future, it is the qubit species scaling
                trapped-ion quantum computers from laboratory to commercial computation. Few elements in the periodic table serve as the irreplaceable input to
                a current manufacturing revolution and the foundational material for a future computing paradigm simultaneously. Tokenized ytterbium offers
                direct exposure to both trajectories through a single asset, with fractional access from $1 and a supply deficit driven by convergent demand
                that byproduct production economics cannot address.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                ON-CHAIN INFRASTRUCTURE
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Collateral Backed by the Element at the Intersection of Physical Manufacturing and Quantum Computing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When an element&apos;s demand profile spans industrial manufacturing (current, massive, growing) and quantum computing (emerging, transformative,
                accelerating), the resulting value trajectory is unique in the commodities market: near-term demand underwritten by a manufacturing revolution
                already in progress and long-term demand catalyzed by a computing revolution just beginning. Tokenized ytterbium offers on-chain participants
                collateral backed by an element that simultaneously anchors the physical economy (factory lasers) and the quantum economy (trapped-ion
                processors), with supply constrained by byproduct recovery economics that cannot respond to either demand driver independently.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">Buyers: </span>
                Crypto funds seeking exposure to the intersection of advanced manufacturing and quantum computing through a single physical asset, protocol
                treasuries diversifying into materials consumed by both present-day industrial automation and frontier computation, DeFi protocols building
                collateral pools backed by multi-sector converging demand dynamics, blockchain foundations investing in the physical bottleneck behind three
                independent technology adoptions, DAOs with advanced manufacturing, deep tech, and quantum technology investment mandates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 8: SETTLEMENT */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">GLOBAL TRADE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement for Tokenized Ytterbium. No Heavy Rare Earth Traders. No Factory Downtime.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Ytterbium is traded through the same Chinese-dominated heavy rare earth channels that control dysprosium and terbium, but with an additional
            complication: ytterbium&apos;s primary consumers are fiber laser and quantum technology companies, industries that the Chinese rare earth trading
            infrastructure was not designed to serve. Pricing is opaque, settlement takes weeks, and allocation is determined by Chinese processing facility
            output rates and export policy rather than international laser manufacturer production schedules. For a fiber laser company whose quarterly revenue
            depends on ytterbium preform availability, weeks of settlement delay translates directly into manufacturing downtime and unshipped orders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Chinese Export Channels. Weeks to Settle. Laser Production Delayed.</p>
              <div className="space-y-3">
                {traditionalSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-600">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-red-600 font-medium">Settlement: T+5 to T+21 (standard for heavy rare earth transactions)</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">1</div>
                  <span className="text-sm">Mining / Heavy Rare Earth Fractionation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">2</div>
                  <Link href="/products" className="text-sm text-white underline underline-offset-2 hover:text-orange-100">
                    Toto Finance Platform
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">3</div>
                  <span className="text-sm">Buyer</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Ytterbium&apos;s market operates with an infrastructure mismatch: the element is produced by heavy rare earth processors whose primary
                customers are magnet manufacturers but consumed primarily by fiber laser companies and quantum technology developers whose production cadences,
                quality specifications, and supply chain expectations are fundamentally different. Chinese export channels were built for rare earth magnet
                materials, not for laser-grade and quantum-grade oxide delivery. Toto Finance uses blockchain to bridge this mismatch, creating a transparent,
                continuous, instant-settlement market where ytterbium sources connect with fiber laser manufacturers, atomic clock developers, quantum computing
                companies, and institutional investors through infrastructure designed for the precision and delivery reliability that advanced manufacturing and
                quantum technology supply chains demand.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6">Settlement at Manufacturing Speed</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                desc: 'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that industrial laser OEMs, quantum computing companies, and defense advanced manufacturing programs require for auditable digital transactions involving materials critical to national manufacturing infrastructure.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                desc: "Over $140 billion in global circulation providing settlement depth at the scale fiber laser manufacturing demands. When procurement operates at the tonnage levels of IPG Photonics' annual preform production or TRUMPF's global laser output, USDT delivers execution infrastructure that eliminates the counterparty friction of Chinese export trader banking channels.",
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                desc: 'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical mineral procurement where Defense Production Act manufacturing provisions, CHIPS and Science Act advanced manufacturing requirements, and US domestic laser and quantum technology supply chain mandates govern the acquisition of materials essential to American manufacturing competitiveness.',
              },
            ].map((coin, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 border border-gray-200">
                    {coin.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{coin.name}</p>
                    <p className="text-xs text-gray-500">{coin.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{coin.desc}</p>
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
            DeFi Infrastructure for Tokenized Ytterbium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Ytterbium has never existed as an independently tradeable financial asset. Embedded in combined heavy rare earth pricing, invisible as a standalone
            material in a supply chain that treats it as a minor fraction of heavy lanthanide output, and absent from every financial platform, exchange, and
            instrument that references rare earth markets. The element that 65% of global metal cutting depends on has no ETF, no futures contract, no
            exchange listing, and no dedicated financial instrument of any kind. Tokenization does not merely digitize ytterbium. It extracts it from combined
            heavy rare earth pricing for the first time, creating an independent financial identity for the element that powers precision manufacturing,
            precision time, and precision computation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The First Independent Ytterbium Market, Designed for the Industries That Consume It
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, ytterbium had a line item in combined heavy rare earth quotations, priced alongside dysprosium and terbium by Chinese export
                traders whose allocation priorities reflected magnet industry demand. No fiber laser manufacturer could hedge ytterbium independently. No
                quantum computing company could secure forward supply through financial instruments. Tokenized ytterbium creates the first dedicated trading
                venue: a continuous secondary market on decentralized exchanges where price discovery reflects laser manufacturing demand, atomic clock
                deployment schedules, and quantum computing scaling timelines rather than bundled heavy rare earth export pricing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Derived from the Element Cutting Metal in Every Factory on Earth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend ytterbium tokens to counterparties seeking leveraged exposure to advanced manufacturing materials or hedged positions in laser technology
                supply chains. Interest rates reflect real-world demand driven by fiber laser system shipments, additive manufacturing expansion, automotive
                production line conversions, and quantum computing hardware development. Yield generated by three independent technology adoption curves
                simultaneously drawing from one byproduct supply, applied to an asset whose financial identity did not exist before Toto Finance created it.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Capital Without Surrendering Positions in the Manufacturing and Quantum Supply Chain
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fiber laser manufacturers and institutional investors holding ytterbium positions have historically had no mechanism for accessing capital from
                those holdings, because ytterbium has never been independently held as a financial asset.{' '}
                <Link href="/products" className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600">
                  Borrow against ytterbium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For a laser OEM managing preform inventory against automotive customer delivery
                schedules, or a quantum computing company securing qubit material ahead of processor scaling, liquidity without liquidation is not a financial
                convenience. It is a supply chain capability that has never existed for this element.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risk Architecture for an Element Whose Supply Is Governed by Other Industries&apos; Economics
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ytterbium&apos;s supply risk is structurally unique: its production is determined by demand for yttrium (for ceramics and phosphors), dysprosium
                (for magnets), and terbium (for magnets and phosphors), not by the laser and quantum industries that now dominate ytterbium consumption.
                Traditional commodity risk models do not account for an element whose supply is governed by entirely different industries&apos; economics.
                Smart contract infrastructure automates collateral monitoring calibrated to cross-industry demand dynamics, margin management reflecting the
                disconnect between ytterbium demand growth (18% from lasers, 35% from timing, 28% from additive manufacturing) and supply growth (limited to
                heavy rare earth processing expansion driven by other elements&apos; demand).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Heavy Rare Earth Fractionation to Global Digital Market: The Ytterbium Token Path
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  label: 'Fractionated:',
                  text: 'Ytterbium oxide isolated during heavy rare earth separation, purified to 99.9%+ laser and quantum application grade, secured in insured custody, and bound to on-chain token identity',
                },
                {
                  label: 'Acquired:',
                  text: 'Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time fiber laser demand, atomic clock deployment, and quantum computing scaling signals',
                },
                {
                  label: 'Positioned:',
                  text: 'Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                },
                {
                  label: 'Activated:',
                  text: 'Deployed into yield protocols, pledged as loan collateral, or structured for advanced manufacturing supply disruption hedging',
                },
                {
                  label: 'Delivered:',
                  text: 'Redeemed for physical ytterbium oxide (Yb₂O₃, 99.9%+) for fiber laser preform doping, Yb:YAG crystal growth, atomic clock species preparation, Yb-171 ion trap loading, or stainless steel alloy production',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-sm font-semibold text-gray-900 shrink-0 w-28">{step.label}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
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
            Tokenized Ytterbium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a way to invest in ytterbium independently. Rare earth ETFs bury it in baskets dominated by lighter rare earths. Mining stocks
            carry heavy rare earth byproduct revenue that is a fraction of total mine economics. Physical procurement operates through Chinese export channels
            with opaque pricing and weeks-long settlement. Toto Finance built what the advanced manufacturing and quantum technology supply chains have never had:
            standalone, fractional, instant access to the element that cuts the metal, keeps the time, and holds the qubit.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table
              className="w-full text-sm text-left"
              aria-label="Comparison table of tokenized ytterbium on Toto Finance versus rare earth ETFs, physical ytterbium procurement, and mining stocks across 10 features including ytterbium-specific exposure, settlement speed, price transparency, and DeFi access."
            >
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Ytterbium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Ytterbium-Specific', 'No (basket)', 'Yes (1:1)', 'Direct ownership', 'No (byproduct revenue)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Chinese export hours', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$25,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Opaque / bilateral', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Chinese traders + banks', 'Broker'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-semibold bg-orange-50/60">{row[2]}</td>
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
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PLATFORM</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Building Financial Infrastructure for the Element That Cuts Metal, Keeps Time, and Holds the Qubit
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Ytterbium has never had dedicated financial infrastructure because it has been invisible inside combined heavy rare earth pricing, traded through
            channels built for the magnet industry rather than the laser, timing, and quantum sectors that now dominate its consumption. No exchange listing. No
            standalone contract. No benchmark price. No collateral framework. Every feature of the Toto Finance platform for ytterbium was designed to create
            what the fiber laser manufacturers, atomic clock developers, and quantum computing companies that depend on this element have never had: independent
            financial infrastructure for an asset whose industrial importance spans three technological frontiers while its market infrastructure has remained at
            zero.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Physical Backing with Multi-Application-Grade Delivery Capability',
                desc: 'Every ytterbium token connects to verified ytterbium oxide (Yb₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for fiber laser preform doping, Yb:YAG disk laser crystal growth, atomic clock species preparation, Yb-171 quantum computing ion trap loading, stainless steel grain refinement, or Yb-169 industrial radiography source fabrication. In a market where ytterbium has been embedded in combined heavy rare earth quotations with no standardized standalone delivery specification, on-chain proof-of-reserves creates the first continuously verifiable record of laser-grade and quantum-grade ytterbium holdings with guaranteed purity.',
              },
              {
                title: 'Price Discovery for an Element Buried Inside Combined Heavy Rare Earth Pricing',
                desc: "Ytterbium has never had its own transparent price. It has been quoted as a component of heavy rare earth packages, bundled with dysprosium and terbium by Chinese export traders whose pricing reflects magnet industry economics rather than fiber laser production demand or quantum computing scaling timelines. Toto Finance's oracle feeds and on-chain trading activity create the first public, real-time ytterbium pricing mechanism: independently verifiable, reflective of three distinct technology demand drivers, and accessible to every market participant rather than confined to bilateral heavy rare earth export negotiations.",
              },
              {
                title: 'Instant Settlement for a Material Where Weeks of Delay Mean Lasers Unshipped and Factories Idle',
                desc: 'Traditional ytterbium procurement operates through Chinese heavy rare earth export channels with settlement timelines of five to twenty-one days, allocation determined by processing facility output rates, and logistics chains designed for magnet materials rather than laser-grade oxide delivery. Token settlement creates instant procurement capability, settling T+0 with stablecoins. For a fiber laser manufacturer whose quarterly production capacity is constrained by ytterbium preform availability, or a quantum computing company whose processor scaling timeline depends on Yb-171 supply, instant settlement is not a convenience improvement. It is the difference between shipping systems or missing delivery windows.',
              },
              {
                title: 'Compliance for Cross-Industry Critical Material Transactions',
                desc: 'Ytterbium entering fiber laser manufacturing, atomic clock production, quantum computing hardware, and defense advanced manufacturing programs is subject to critical mineral sourcing regulations, export control frameworks, and supply chain traceability mandates that span multiple regulatory regimes simultaneously. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, creating a compliance layer designed for a material that serves civilian manufacturing, precision timing infrastructure, and national security quantum computing programs concurrently.',
              },
              {
                title: 'Financial Tools for an Element That Three Industries Chose Independently and None Can Substitute',
                desc: 'Lending, borrowing, hedging, and collateral management for ytterbium as a standalone asset: capabilities that have never existed because ytterbium has been financially invisible inside combined heavy rare earth pricing. Smart contract protocols enable yield generation from ytterbium positions, stablecoin borrowing against holdings, and programmable hedging strategies built for an element whose demand is driven simultaneously by fiber laser manufacturing (18% CAGR), precision timing infrastructure (35% CAGR), additive manufacturing (28% CAGR), and quantum computing scaling, while supply remains locked to heavy rare earth byproduct recovery economics governed by entirely different industries.',
              },
              {
                title: 'Multi-Chain Presence',
                desc: 'Tokenized ytterbium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Fiber laser manufacturers, atomic clock developers, quantum computing companies, institutional custodians, DeFi protocols, and individual holders can interact with ytterbium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific constraints on the element that powers precision manufacturing, precision time, and precision computation.',
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLD 12: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Tokenized Ytterbium FAQ
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 text-center">
            Direct answers about tokenized ytterbium, In-Ground Ytterbium, fiber laser manufacturing, atomic clocks, quantum computing qubits, and how Toto
            Finance provides the first independent market access to the element powering 65% of global metal cutting.
          </p>
          <YtterbiumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-orange-950 via-slate-900 to-gray-950 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-orange-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6">
            65% of Global Metal Cutting. The World&apos;s Most Precise Clocks. The Qubits Inside Quantum Computers. One Element. One Byproduct Supply Chain. The
            Gap Is Widening.
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            The world needs 1,425 tonnes of ytterbium by 2030. Heavy rare earth fractionation will deliver 945. The 480-tonne deficit is not a market cycle. It
            is the arithmetic of three independent technology adoptions converging on a single byproduct supply chain that was never designed to feed the fiber
            lasers cutting metal in every factory on Earth, the atomic clocks synchronizing every network, and the quantum processors scaling toward commercial
            computation simultaneously. Every fiber laser shipped widens the gap. Every atomic clock deployed widens it further. Every quantum processor scaled
            adds another demand vector that the same 635-tonne supply must absorb. Toto Finance is building the infrastructure to bring the element at the center
            of precision manufacturing, precision time, and precision computing to an open, transparent, instant-settlement market for the first time.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Early Access
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
