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
const ThuliumTickerBar = dynamicImport(
  () => import('../components/client/ThuliumTickerBar').then((mod) => ({ default: mod.ThuliumTickerBar }))
);
const ThuliumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-thulium';
const PAGE_TITLE = 'Tokenized Thulium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every thulium fiber laser replacing a scalpel in a surgical suite depends on an element the world produces at 4.2 tonnes per year. Toto Finance brings the surgeon\'s rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element powering minimally invasive surgery and portable diagnostics. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Rare Earth Minerals', item: 'https://totofinance.co/rare-earth-mineral' },
  { name: 'Tokenized Thulium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized thulium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined thulium oxide (Tm₂O₃) in insured, audited vaults. High-purity grade (99.9%+ Tm₂O₃), ready for medical fiber laser doping, Tm-170 radioisotope target preparation, Tm:YAG crystal growth, and superconductor compound synthesis. Redeemable for physical thulium on demand. Toto Finance is building the infrastructure to bring thulium on-chain as an independent asset with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Thulium?',
    answer:
      'A tokenized future delivery contract for thulium still contained in heavy rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active heavy rare earth fractionation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for medical device manufacturers, radioisotope producers, superconductor developers, sovereign healthcare supply reserves, and institutional investors positioning for the structural thulium deficit in a market where 4.2 tonnes of annual production faces a surgical technology adoption curve growing at 32%.',
  },
  {
    question: 'Where does the thulium come from?',
    answer:
      'Directly from rare earth mining companies and heavy rare earth separation facilities across China (91% of production from ion-adsorption clays in Jiangxi, Fujian, Guangdong), North America (emerging US and Canadian heavy rare earth fractionation for medical device supply security), Australia (xenotime and clay deposits in Northern Territory and Western Australia), Southeast Asia and Vietnam (ionic clay with heavy rare earth concentrations), and Greenland/Scandinavia (European medical supply chain sourcing). No middlemen. No specialty dealers. Secured at the point of final-stage heavy rare earth fractionation. More on partnerships: https://totofinance.co/about',
  },
  {
    question: 'Who buys tokenized thulium?',
    answer:
      'Three groups: (1) Medical device and radioisotope manufacturers, including thulium fiber laser system companies (Olympus, Quanta System, Lisa Laser), surgical equipment OEMs, urology device producers, Tm-170 portable X-ray manufacturers, industrial NDT equipment makers, Tm:YAG laser manufacturers, TBCO superconductor developers, and quantum computing hardware companies. (2) Medical supply chain investors, including funds and allocators seeking direct exposure to the material bottleneck behind a 32%-growth surgical technology, with demand driven by clinical evidence rather than market cycles. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking collateral backed by medtech-driven material demand uncorrelated to macroeconomic conditions.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional thulium procurement operates through specialty dealers with settlement measured in one to three weeks, opaque bilateral pricing, and minimal inventory. Toto Finance creates a direct settlement mechanism connecting heavy rare earth sources with medical device manufacturers, radioisotope producers, and investors on-chain, eliminating every intermediary in the specialty dealer supply chain.',
  },
  {
    question: 'Can I trade tokenized thulium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties seeking medical rare earth exposure, or use thulium tokens as collateral for stablecoin loans. Thulium has never existed as a tradeable financial asset. Its market has been too small for any traditional instrument. Tokenization creates both the asset class and its market simultaneously.',
  },
  {
    question: 'Why are thulium fiber lasers replacing holmium lasers in surgery?',
    answer:
      'Thulium fiber lasers operating at 1.94 to 2.0 μm offer a wavelength with approximately ten times higher water absorption than holmium\'s 2.1 μm, delivering superior hemostasis, finer tissue ablation, and significantly reduced collateral thermal damage. With 450,000 thulium laser procedures performed annually (growing at 32% compound annual growth rate), each system containing 30 to 80 grams of thulium-doped fiber, urologists are rapidly adopting thulium for kidney stone fragmentation, prostate enucleation, and bladder tumor resection. 85% of global thulium demand is driven by medical fiber lasers, consuming 3.5 tonnes of the 4.2-tonne annual production.',
  },
  {
    question: 'What is the thulium price outlook?',
    answer:
      'Roskill forecasts $1,850,000/mt in 2026. Critical Minerals Intelligence projects prices exceeding $2,000,000/mt by 2027 as surgical laser adoption accelerates, portable X-ray systems scale globally, and quantum computing hardware development intensifies while production remains constrained at approximately 4.2 tonnes annually from heavy rare earth byproduct recovery.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Medical device manufacturers, radioisotope producers, surgical laser companies, hospital procurement programs, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed thulium oxide tokens and In-Ground Thulium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Thulium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined thulium oxide (Tm₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Thulium',
      description:
        'Tokenized future delivery contract for thulium in heavy rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedThuliumPage() {
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
            Tokenized Thulium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            The Element Replacing the Scalpel. 4.2 Tonnes a Year. 450,000 Surgeries and Counting. Now On-Chain.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            Somewhere in a surgical suite right now, a urologist is vaporizing a kidney stone with a beam of light instead of cutting a patient open. That
            beam is generated by a thulium fiber laser operating at 1.94 to 2.0 micrometers, a wavelength so precisely absorbed by water in soft tissue that
            it ablates with minimal thermal damage and superior hemostasis compared to any alternative. Thulium made that possible. And the world produces
            4.2 tonnes of it per year. That is not a typo. The entire annual global supply of the element revolutionizing minimally invasive surgery,
            powering portable X-ray devices for field hospitals, enabling next-generation superconductors for quantum computing, and providing radiation
            sources for industrial inspection would fit in the trunk of a car. Thulium is the second-rarest stable rare earth element, constituting just
            0.007% of monazite sand. China controls 91% of production. Demand is growing at 32% annually from medical lasers alone. And the 8.5-tonne supply
            gap projected for 2030 means a world where surgical suites compete for grams of an element that most people have never heard of.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-slate-200">
              Toto Finance
            </Link>{' '}
            is building the infrastructure to bring the surgeon&apos;s element on-chain for the first time, from 1:1 redeemable refined oxide to In-Ground
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
              Why Thulium Matters
            </a>
          </div>
        </div>
      </section>

      <ThuliumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            The Surgical Revolution Running on an Element the World Produces in Single-Digit Tonnes.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose thulium because it represents the collision between a medical technology revolution that is transforming patient outcomes and a supply
              reality that cannot sustain it.
            </p>
            <p>
              Thulium fiber lasers are replacing conventional surgical instruments across urology, oncology, dermatology, and pulmonology because they
              offer something no scalpel, no electrocautery device, and no competing laser wavelength can match: tissue ablation at 1.94 to 2.0 micrometers
              with near-perfect water absorption, delivering precise cutting with immediate hemostasis and minimal collateral thermal damage. Urologists
              performing kidney stone fragmentation, prostate enucleation, and bladder tumor resection are adopting thulium lasers at 32% annual growth
              because patient outcomes are measurably superior. But every fiber laser system contains 30 to 80 grams of thulium-doped fiber. And the world
              produces 4.2 tonnes of thulium per year. Total. For every application. That is barely enough to supply two major medical laser
              manufacturers&apos; annual production, before accounting for portable X-ray devices, industrial radiation sources, superconductor research, and
              every other application drawing from the same microscopic supply pool. Thulium constitutes 0.007% of monazite sand, the second-lowest
              concentration of any stable lanthanide. China produces 91% of it. There is no mechanism on Earth to scale thulium supply independently of
              other heavy rare earth production, and the surgical revolution consuming it is accelerating faster than any mine can respond.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">4.2 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">An Entire Year&apos;s Production Fits in a Car Trunk</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global thulium production is approximately 4.2 tonnes annually, nearly all of it recovered as a minor byproduct during heavy rare earth
                separation at Chinese ion-adsorption clay processing facilities. Thulium is the second-rarest stable lanthanide, present at just 0.007% in
                typical monazite sand, roughly 50 times less abundant than neodymium within the same ore bodies. This extreme geological scarcity means that
                even dramatic expansion of rare earth mining increases thulium supply by only kilograms, not tonnes. Roskill forecasts a 1.8-tonne deficit in
                2025, a shortfall that represents 43% of current production capacity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">2.0 μm</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Wavelength That Replaced the Scalpel</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium fiber lasers emit at 1.94 to 2.0 micrometers, a wavelength near the peak absorption coefficient of water in biological tissue. This
                means the laser energy is absorbed within a superficial layer of tissue, creating precise ablation with immediate coagulation and minimal
                thermal penetration into surrounding structures. No other rare earth laser, including holmium at 2.1 μm, achieves this combination of
                precision and hemostasis at the power levels required for urological surgery. 85% of global thulium consumption is driven by medical fiber
                laser manufacturing, a sector growing at 32% compound annual growth rate.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">8.5 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Deficit Measured in Grams per Surgical System</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global thulium demand is projected to reach 21 tonnes per year by 2030, while supply from existing and planned rare earth operations will
                deliver approximately 12.5 tonnes. The 8.5-tonne gap represents a 40% shortfall. Each thulium fiber laser system consumes 30 to 80 grams of the
                element. With 450,000 thulium laser procedures performed annually and growing, the cumulative demand from medical devices alone will consume
                the majority of global production, leaving portable X-ray, superconductor, and industrial applications to compete for an ever-shrinking
                remainder.
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
            Understanding Why Thulium Powers Surgical Precision That No Other Element Can Deliver
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The second-rarest stable lanthanide. The fiber laser wavelength that tissue absorbs perfectly. The portable radiation source that brings
            diagnostics to battlefields and disaster zones. Produced at 4.2 tonnes per year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Thulium element card showing Tm symbol, atomic number 69, density, melting point, and classification as the second-rarest stable rare earth element"
              >
                <p className="text-3xl font-light mb-1">Tm</p>
                <ul className="space-y-1 text-slate-200/90">
                  <li>Atomic Number: 69</li>
                  <li>Density: 9,320 kg/m³</li>
                  <li>Melting Point: 1,545°C</li>
                  <li>Ore Concentration: 0.007% in Monazite</li>
                  <li>Classification: Second-Rarest Stable Lanthanide</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Ion-adsorption clay processing and heavy rare earth separation facility in southern China where thulium is recovered as a minor byproduct"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium is recovered as a minor byproduct during heavy rare earth separation, primarily from ion-adsorption clay deposits in southern China
                (Jiangxi, Fujian, Guangdong) and secondarily from xenotime, monazite, and euxenite ores in Australia, Brazil, and the USA. At 0.007%
                concentration in typical monazite sand, thulium is approximately 50 times less abundant than neodymium within the same deposits. China
                produces 91% of global output. Total annual production: 4.2 tonnes, making thulium&apos;s supply entirely dependent on heavy rare earth
                processing decisions driven by elements that are far more abundant.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">
                Ore / Clay → Leaching → Chemical Separation → Multi-Stage Ion Exchange → Heavy Rare Earth Fractionation → Precipitation → 99.9% Pure
                Thulium Oxide (Tm₂O₃)
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-rose-950/60 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Thulium-doped fiber laser emitting at 2.0 μm wavelength and thulium-170 portable X-ray radiation source demonstrating dual medical applications"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Physics That Make Surgeons Choose Thulium</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium&apos;s Tm³⁺ ions emit at 1.94 to 2.0 micrometers when excited in fiber or crystal host materials, a wavelength absorbed by water with
                an absorption coefficient roughly ten times higher than holmium&apos;s 2.1 μm emission. This creates precise, superficial tissue ablation with
                immediate hemostasis. Thulium-170, a radioactive isotope with a 128-day half-life, emits low-energy gamma radiation (84 keV) ideal for
                portable X-ray devices that require no electrical power source. Thulium also exhibits bright blue luminescence from Tm³⁺ transitions, becomes
                ferromagnetic below 32K, and forms high-temperature superconducting compounds (TBCO) for quantum computing research.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-600 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of thulium including fiber laser surgical systems, Tm-170 portable X-ray devices, high-temperature superconductors, and anti-counterfeiting UV markers"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Thulium fiber laser surgical systems (urology, oncology, dermatology, pulmonology), Tm:YAG solid-state lasers for military range-finding and
                materials processing, Tm-170 portable X-ray devices for field hospitals and disaster response, industrial radiography for non-destructive weld
                and structural testing, thulium-barium-copper-oxide (TBCO) high-temperature superconductors, quantum computing cryogenic components,
                anti-counterfeiting UV luminescent markers for currency and documents.
              </p>
              <p className="text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg px-3 py-2">
                $28M+ global thulium market (85% consumed by medical laser applications, growing 32% annually)
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
            Surgeons Are Adopting Thulium Lasers at 32% Annual Growth. The World Produces Enough Thulium for a Fraction of Them.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            The medical technology industry does not adopt new surgical platforms at 32% annual growth unless patient outcomes compel it. Thulium fiber
            lasers are not a marginal improvement over existing surgical tools. They are a generational shift in how urologists treat kidney stones, how
            oncologists resect tumors, and how dermatologists ablate tissue. The clinical evidence is unambiguous: superior hemostasis, reduced thermal
            damage, faster recovery. Hospitals are purchasing thulium laser systems as fast as manufacturers can build them. And the manufacturers are
            constrained not by engineering or demand but by an element the world produces at 4.2 tonnes per year, of which 3.5 tonnes is already consumed by
            medical fiber laser production. The remaining 700 kilograms must serve every other application on Earth that requires thulium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Thulium Fiber Lasers: The Surgical Platform That Consumes 85% of Global Supply
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium fiber lasers are revolutionizing urological surgery, delivering superior kidney stone fragmentation, prostate enucleation, and
                bladder tumor resection compared to holmium laser alternatives. With 450,000 thulium laser procedures performed annually and growing at 32%
                compound annual growth rate, each laser system containing 30 to 80 grams of thulium-doped fiber, and major medical device companies (Olympus,
                Boston Scientific, Quanta System) expanding their thulium laser portfolios, medical fiber lasers consume approximately 3.5 tonnes of thulium
                annually. By 2030, medical laser demand alone is projected to require 15 tonnes, exceeding current total global production by more than three
                times.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Portable X-Ray Systems: Diagnostics Where Hospitals Cannot Reach
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium-170 isotopes (128-day half-life, 84 keV gamma emission) enable compact, portable X-ray devices that require no electrical power
                source, operating from radioactive decay alone. Military field hospitals, disaster response teams, remote clinics, and veterinary practices
                deploy Tm-170 portable imaging where conventional X-ray infrastructure is impossible. Each portable unit requires 5 to 15 grams of thulium-170.
                The sector consumes approximately 0.4 tonnes annually, growing at 28% compound annual growth rate as point-of-care diagnostics expand
                across conflict zones, humanitarian operations, and underserved healthcare systems worldwide.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial Radiography: Inspecting What Eyes Cannot See</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium-170 radiation sources power non-destructive testing (NDT) of welds, castings, and structural components in aerospace, oil and gas,
                nuclear, and construction industries. The element&apos;s low-energy gamma emission provides ideal penetration depth for thin-to-medium section
                radiography with superior image contrast compared to iridium-192 for certain applications. Industrial NDT consumes approximately 0.2 tonnes
                annually, with demand growing as infrastructure inspection requirements intensify across aging pipeline networks, offshore platforms, and
                nuclear facilities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Superconductors and Quantum Computing: Thulium at the Frontier of Physics
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium-barium-copper-oxide (TBCO) compounds achieve superconductivity above liquid nitrogen temperatures (77K), making thulium a material of
                active research for next-generation MRI magnets, particle accelerators, and quantum computing cryogenic infrastructure. Research institutions
                and quantum hardware developers consume approximately 0.1 tonnes annually, projected to reach 1.5 tonnes by 2030 as quantum computing
                transitions from laboratory prototypes to commercial deployment and TBCO superconductors advance toward industrial application.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Medical Revolution Outrunning Its Own Material Supply</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global thulium demand rising from 6.0 tonnes in 2025 to 21.0 tonnes by 2030, with supply reaching approximately 12.5 tonnes,
              creating an 8.5-tonne annual deficit representing 40% of projected demand.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '6.0 t', note: 'Demand' },
                { year: '2028', val: '12.5 t', note: 'Demand' },
                { year: '2030', val: '21.0 t', note: 'Demand' },
                { year: '2035', val: '38.0 t', note: 'Roskill projection' },
                { year: '2030 Supply', val: '~12.5 t', note: 'Gap: 8.5+ t (40%)' },
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
            <p className="text-xs text-gray-400">Sources: Roskill, Critical Minerals Intelligence, USGS, American Urological Association.</p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Thulium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to the element that is transforming how surgeons operate, how field hospitals diagnose, and how the
            world inspects its critical infrastructure comes to life in two products. One for thulium oxide that has already been separated, purified, and
            vaulted. One for thulium still locked in heavy rare earth deposits awaiting extraction. Both backed by physical material. Both settleable in
            stablecoins. Both built to give the medical device manufacturers, radioisotope producers, superconductor researchers, and investors who understand
            that 4.2 tonnes per year cannot sustain a surgical revolution growing at 32% annually a way to secure the element that is redefining minimally
            invasive medicine.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  1:1 Thulium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical thulium. Every token is backed 1:1 by refined thulium oxide (Tm₂O₃) in insured, audited vault facilities.
                High-purity grade (99.9%+ Tm₂O₃), ready for medical fiber laser doping, Tm-170 radioisotope target preparation, Tm:YAG crystal growth, and
                superconductor compound synthesis. Redeemable for physical thulium on demand. Not a derivative. Not a rare earth basket. Not a mining equity.
                The actual oxide, at medical-application purity.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined thulium oxide (99.9%+ Tm₂O₃ purity grade)</li>
                <li>Always redeemable for physical thulium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>
                  Ready for industrial end-use: medical fiber laser doping, Tm-170 portable X-ray sources, Tm:YAG solid-state lasers, TBCO superconductors,
                  industrial radiography, anti-counterfeiting markers
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-slate-600 underline-offset-2 hover:underline">
                  In-Ground Thulium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in thulium that has not been separated yet. Tokenized future delivery contracts backed by proven thulium content in heavy
                rare earth deposits at certified mining operations. For organizations that understand that an element constituting 0.007% of monazite sand and
                produced at 4.2 tonnes annually is facing a surgical technology adoption curve growing at 32% per year, creating a supply arithmetic where
                medical laser demand alone will exceed total global production before the end of the decade.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven thulium content in heavy rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting extreme geological scarcity and medical demand acceleration</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>
                  Built for medical device manufacturers, radioisotope producers, sovereign funds, superconductor developers, and institutional allocators
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/10 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term thulium delivery contracts tied to active rare earth operations with heavy rare earth separation capacity. For medical device
                companies managing laser system production schedules, radioisotope producers coordinating Tm-170 target fabrication, and commodity
                specialists positioning in a market where a single large medical device order can absorb a significant fraction of available global supply and
                where 85% of production is already consumed by one application sector.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year thulium positions backed by proven heavy rare earth content at earlier-stage mining operations. Built for sovereign healthcare
                supply reserves, medical device OEMs planning decade-scale surgical laser production, quantum computing companies securing superconductor
                feedstock, and institutional allocators who understand that thulium&apos;s supply deficit is the consequence of a 0.007% ore concentration
                colliding with the fastest-growing surgical technology adoption curve in modern urology.
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
            Securing the Rarest Stable Rare Earth on Earth. From Every Heavy Rare Earth Source That Produces It.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Thulium is one of the least abundant lanthanides in the Earth&apos;s crust, present at just 0.007% in typical monazite sand and recoverable only
            during the final fractionation stages of heavy rare earth separation. Its production is entirely dependent on the processing decisions of
            facilities whose primary products are yttrium, dysprosium, terbium, and other heavier lanthanides. Toto Finance works directly with{' '}
            <Link href="/about" className="text-slate-800 font-medium underline underline-offset-2 hover:text-slate-600">
              rare earth mining companies and heavy rare earth separation facilities
            </Link>{' '}
            across every production pathway, securing thulium at the point of final-stage fractionation where it transitions from a minor constituent in
            mixed heavy rare earth concentrate to a purified, individually valuable medical-grade oxide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 91% of global thulium from ion-adsorption clay deposits across Jiangxi, Fujian, and Guangdong provinces. Chinese heavy rare earth separation facilities in these regions perform the multi-stage ion exchange processing required to isolate thulium from the other 16 rare earth elements. Chinese export controls and production quotas are tightening availability for international medical device supply chains at the exact moment surgical laser adoption is accelerating globally.',
              },
              {
                title: 'North America (United States and Canada)',
                text: 'US heavy rare earth development includes Round Top (Texas), Bear Lodge (Wyoming), and projects targeting ion-adsorption clay analogs with heavy rare earth fractionation capability. Canadian projects in Quebec and Saskatchewan are developing heavy rare earth separation infrastructure. Critical mineral designations and defense/medical supply chain security initiatives are accelerating domestic thulium separation capacity for medical device and radioisotope applications.',
              },
              {
                title: 'Australia',
                text: 'Australia hosts thulium-bearing heavy rare earth deposits in xenotime mineral sands and clay formations across Northern Territory and Western Australia. Advanced hydrometallurgical separation technologies enable economic thulium recovery from ores where the element\'s extreme scarcity has historically made extraction uneconomical. Australian operations represent a strategic source for allied medical device supply chains.',
              },
              {
                title: 'Southeast Asia and Vietnam',
                text: "Vietnam's ionic clay deposits in the northern highlands contain heavy rare earth concentrations including thulium. Emerging Southeast Asian processing facilities are developing specialized heavy rare earth fractionation capabilities, creating alternative thulium supply pathways outside the Chinese processing monopoly for medical laser and radioisotope manufacturers.",
              },
              {
                title: 'Greenland and Scandinavia',
                text: "Greenland's Kvanefjeld project and Scandinavian rare earth deposits (Norra Kärr in Sweden) contain heavy rare earth content including thulium. Strategic importance for European medical device manufacturers and scientific research institutions seeking non-Chinese sourcing for an element critical to the continent's surgical technology and quantum computing research programs.",
              },
              {
                title: 'Exploration and Development',
                text: 'New heavy rare earth projects across Africa (Tanzania, Burundi, Madagascar), South America (Brazil), and Central Asia are in exploration and feasibility stages. These represent the next generation of thulium supply. In-Ground Thulium positions offer access at pre-production economics before heavy rare earth fractionation output reaches the medical device market.',
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
              <strong>Secured at the final-stage fractionation point.</strong> Thulium does not come from a thulium mine. It emerges at the tail end of heavy
              rare earth separation, after yttrium, dysprosium, terbium, and other heavier lanthanides have been extracted, in quantities measured in
              kilograms per processing batch. Toto Finance works at this critical final-stage fractionation point, partnering directly with heavy rare earth
              separators to secure thulium at the moment it becomes an individual medical-grade oxide rather than a trace constituent in mixed concentrate.
              Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-slate-200">
                mine to operating room
              </Link>
              . Access to the element that is transforming surgery, one laser at a time.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">Who Buys Tokenized Thulium</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Thulium has never been accessible as an investment asset in any form. Its market is too small for an ETF (4.2 tonnes globally). Its production is
            too concentrated for a futures contract (91% China). Its applications are too specialized for commodity dealers to maintain inventory
            (medical-grade purity requirements). The medical device manufacturers and radioisotope producers that consume thulium have had no mechanism to
            secure forward supply independently, hedge thulium-specific price risk, or guarantee material availability for surgical laser production
            schedules. For an element consumed at 30 to 80 grams per laser system in a market growing at 32% annually, this absence of procurement
            infrastructure is not a market inconvenience. It is a constraint on how quickly a life-improving surgical technology can reach patients. Toto
            Finance creates that infrastructure for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-slate-800">MEDICAL DEVICE AND RADIOISOTOPE MANUFACTURERS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Companies Building the Surgical Tools That Save Lives</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers consume thulium to build the fiber laser systems that urologists use to treat kidney stones without open surgery, that
                oncologists use to resect tumors with precision impossible ten years ago, that dermatologists use to ablate tissue with minimal scarring. They
                also produce the Tm-170 portable X-ray sources that bring diagnostic imaging to conflict zones and disaster sites where patients would
                otherwise go undiagnosed. Tokenized thulium gives them{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  supply assurance
                </Link>
                , forward procurement capability, and physical delivery infrastructure for an element that determines their production capacity and,
                downstream, patient access to better surgical outcomes.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Thulium fiber laser system manufacturers (Olympus, Quanta System, Lisa Laser), surgical equipment OEMs and medical device companies, urology and
                minimally invasive surgery device producers, Tm-170 portable X-ray and diagnostic imaging manufacturers, industrial radiography and NDT
                equipment producers, Tm:YAG solid-state laser manufacturers, nuclear medicine and radioisotope target producers, high-temperature superconductor
                developers (TBCO), quantum computing hardware and cryogenic system manufacturers, laser fiber and optical component manufacturers,
                anti-counterfeiting and security marking companies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">MEDICAL SUPPLY CHAIN INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                Investing in the Material Bottleneck Behind a 32%-Growth Surgical Technology
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Medical technology investors evaluate market size, adoption curves, and competitive dynamics. They rarely examine the material supply chain
                beneath the technology. Thulium fiber lasers are growing at 32% annually, the fastest adoption rate of any surgical platform in urology, and 85%
                of global thulium production is consumed by this single application. When a surgical technology&apos;s growth rate outpaces its input
                material&apos;s production capacity by a factor of seven, the material becomes the bottleneck that determines how fast the technology scales.
                Tokenized thulium offers direct exposure to this bottleneck, with fractional access from $1 and a supply deficit that is widening with every
                laser system shipped.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">
                Collateral Backed by the Element Behind the Fastest-Growing Surgical Technology on Earth
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When an element&apos;s primary demand driver is a medical technology growing at 32% compound annual growth rate, consuming 85% of available
                supply, with clinical evidence compelling adoption across every major hospital system globally, the demand trajectory is not speculative. It is
                clinical. Tokenized thulium offers on-chain participants collateral backed by an element whose consumption is driven by patient outcomes
                rather than market sentiment: hospitals adopt thulium lasers because patients recover faster, not because commodity markets move.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking exposure to medtech-driven material demand uncorrelated to macroeconomic cycles, protocol treasuries diversifying into
                physical assets whose consumption is driven by clinical evidence rather than consumer discretion, DeFi protocols building collateral pools
                backed by elements at the supply bottleneck of high-growth medical technologies, blockchain foundations investing in the physical constraint
                behind surgical technology adoption, DAOs with healthcare technology and critical material investment mandates.
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
            Instant Settlement for Tokenized Thulium. No Specialty Dealers. No Medical Supply Chain Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Thulium procurement operates through a microscopic market: a handful of Chinese heavy rare earth exporters, a few specialty commodity dealers
            internationally, and a medical device supply chain where material availability determines how many laser systems can be manufactured in a given
            quarter. Settlement timelines are measured in weeks. Pricing is opaque, varies by customer relationship, and changes with Chinese production
            quotas rather than international market demand. For a medical device manufacturer whose production schedule is constrained by thulium availability,
            waiting weeks for settlement of material measured in kilograms means surgical systems delayed, hospital orders unfilled, and patients waiting for
            procedures that technology has already made possible. We built what the medical rare earth supply chain needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">Specialty Dealers. Weeks to Settle. Medical Supply Chain Bottleneck.</p>
              <div className="space-y-3">
                {[
                  'Mining Operation / Ion-Adsorption Clay',
                  'Heavy Rare Earth Separation Facility',
                  'Chinese Export Trader',
                  'Specialty Commodity Dealer',
                  'Clearing Agent',
                  'Custodian Bank',
                  'Correspondent Bank',
                  'Medical Device Manufacturer / Buyer',
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
                Settlement: T+5 to T+21 (standard for specialty heavy rare earth transactions)
              </p>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">The Toto Finance Way</h3>
              <p className="text-sm text-gray-400 mb-6">Source ↔ Buyer. Direct. Instant.</p>
              <div className="space-y-3">
                {['Mining / Heavy Rare Earth Fractionation', 'Toto Finance Platform', 'Buyer'].map((step, i) => (
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
                Thulium&apos;s market is so small that traditional commodity infrastructure has never been built for it. No exchange lists it. No clearing house
                processes it. No standardized contract exists. Medical device manufacturers procure thulium through personal relationships with a handful of
                specialty dealers who maintain minimal inventory and quote prices bilaterally. A surgical laser manufacturer&apos;s production capacity can be
                constrained by a single dealer&apos;s allocation decision. Toto Finance uses blockchain to create what the medical rare earth supply chain has
                never had: a transparent, continuous, instant-settlement market where thulium sources connect with medical device manufacturers, radioisotope
                producers, institutional investors, and qualified buyers through infrastructure designed for the precision and reliability that the surgical
                technology supply chain demands.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement Calibrated to Surgical Precision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin engineered for institutional settlement. The compliance architecture and regulatory transparency that medical device manufacturers, hospital procurement systems, and sovereign healthcare supply programs require for auditable digital transactions involving materials that become components of Class II and Class III surgical devices.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  "Over $140 billion in global circulation providing settlement depth for an element whose entire annual global market trades in the tens of millions. USDT's liquidity infrastructure eliminates the counterparty friction of specialty dealer banking channels where a single delayed wire transfer can hold up a medical device manufacturer's quarterly production.",
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Purpose-built for critical material procurement where FDA supply chain traceability expectations, Defense Production Act provisions for medical countermeasures, and US healthcare supply security mandates govern the acquisition of materials entering surgical device manufacturing.',
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
            DeFi Infrastructure for Tokenized Thulium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Thulium has never existed as a financial asset. Its market is too small for any traditional financial instrument. No ETF includes it as an
            identifiable holding. No futures contract references it. No commodity index tracks it. No lending facility recognizes it as collateral. The
            element that is reshaping minimally invasive surgery has been financially invisible for its entire commercial existence, traded through handshake
            deals between specialty dealers and medical device procurement teams. Tokenization does not merely digitize thulium. It creates thulium as a
            financial asset for the first time, constructing market infrastructure for an element whose medical importance vastly exceeds its financial
            recognition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                The First Thulium Market, Calibrated to the Surgical Technology Supply Chain
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, thulium traded through phone calls between specialty dealers and medical device procurement managers. No continuous
                market. No visible pricing. No order book. No mechanism for price discovery beyond bilateral negotiation. Tokenized thulium creates the first
                open trading venue: a secondary market on decentralized exchanges where price discovery reflects real-time surgical laser production
                schedules, hospital adoption rates, and medical device manufacturing demand, making thulium&apos;s value visible to the financial system for
                the first time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Yield Derived from the Material That Surgical Suites Cannot Operate Without
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend thulium tokens to counterparties seeking leveraged exposure to medical rare earth pricing or hedged positions in surgical technology
                supply chains. Interest rates reflect real-world demand driven by thulium laser adoption curves, hospital capital expenditure cycles,
                portable X-ray deployment schedules, and quantum computing hardware development timelines. Yield generated by a material whose primary
                consumption driver is clinical evidence compelling surgical adoption, not cyclical market demand.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Capital Without Surrendering Positions in the Surgical Revolution&apos;s Material Bottleneck
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Medical device manufacturers and institutional investors holding thulium positions have historically had no mechanism for accessing capital from
                those holdings, because thulium has never existed as a financial asset and its market has had zero secondary liquidity.{' '}
                <Link href="/products" className="text-slate-800 font-medium underline underline-offset-2">
                  Borrow against thulium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure to an element whose 32%-growth demand trajectory, 4.2-tonne production base,
                and 40% supply deficit create a fundamentally different value dynamic than any commodity with established production infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Risk Architecture for an Element Whose Supply Is Measured in Single-Digit Tonnes
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thulium&apos;s supply risk is unique even among rare earths: 4.2 tonnes of annual production, 91% concentration in China, 0.007% ore
                concentration, and dependence on heavy rare earth processing decisions driven by more abundant elements. Traditional commodity risk models do
                not account for markets measured in tonnes rather than thousands of tonnes. Smart contract infrastructure automates collateral monitoring
                calibrated to micro-market dynamics, margin management reflecting the extreme price sensitivity of a 4.2-tonne market to individual large
                orders, and position tracking for an asset whose entire global supply can be materially affected by a single medical device manufacturer&apos;s
                procurement decision.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Heavy Rare Earth Fractionation to Global Digital Market: The Thulium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Fractionated: Thulium oxide isolated during final-stage heavy rare earth separation, purified to 99.9%+ medical-application grade, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time surgical laser demand and heavy rare earth fractionation output',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to integrate with holder procurement and portfolio infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for medical supply chain disruption hedging',
                'Delivered: Redeemed for physical thulium oxide (Tm₂O₃, 99.9%+) for fiber laser doping, Tm-170 radioisotope target preparation, Tm:YAG crystal growth, or superconductor compound synthesis',
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
            Tokenized Thulium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a practical way to invest in thulium. No ETF tracks it. No futures exchange lists it. Specialty dealers trade it in kilogram
            lots through personal relationships with opaque pricing. Mining stocks bury thulium revenue beneath dominant light rare earth production. Toto
            Finance built what the medical rare earth market has never had: standalone, fractional, instant access to the element that powers the
            fastest-growing surgical technology in urology and the portable X-ray devices bringing diagnostics to the world&apos;s most underserved
            patients.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized thulium on Toto Finance versus specialty dealers, physical thulium ownership, and mining stocks across 10 features including thulium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Specialty Dealers</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Thulium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Thulium-Specific', 'Yes (limited lots)', 'Yes (1:1)', 'Direct ownership', 'No (minor byproduct)'],
                  ['Trading Hours', 'Business hours only', '24/7/365', 'Dealer availability', 'Market hours only'],
                  ['Settlement', 'T+5 to T+21', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via dealer)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '$150,000+', 'Fractional (from $1)', '$150,000+', '1 share (~$10+)'],
                  ['Physical Redemption', 'By arrangement', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'Bilateral / opaque', 'Real-time oracle', 'Dealer quotation', 'Stock price only'],
                  ['Intermediaries', 'Multiple dealers', 'None (P2P)', 'Multiple dealers', 'Broker'],
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
            Building Financial Infrastructure for the Element That Is Rewriting Surgical Standards
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Thulium has never had financial infrastructure because its market has been too small, too concentrated, and too specialized for traditional
            institutions to recognize as an asset class. Four tonnes of annual production, 91% from a single country, 85% consumed by a single application
            sector, traded through personal dealer relationships with no public benchmark. No contracts. No exchange listings. No settlement standards. No
            collateral frameworks. Every feature of the Toto Finance platform for thulium was designed to create what the medical rare earth market has never
            built: independent financial infrastructure for an element whose clinical importance is growing exponentially while its market infrastructure
            remains at zero.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Medical-Application-Grade Delivery Capability',
                b: 'Every thulium token connects to verified thulium oxide (Tm₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for medical fiber laser doping, Tm-170 radioisotope target fabrication, Tm:YAG crystal growth, or superconductor compound synthesis. In a market where thulium has traded through dealer handshakes with no standardized delivery specification, on-chain proof-of-reserves creates the first continuously verifiable record of medical-grade thulium holdings with guaranteed purity.',
              },
              {
                t: 'Price Discovery for an Element That Has Never Had a Public Price',
                b: "Thulium has never had a transparent price visible to the market. Specialty dealers quote bilaterally, vary pricing by customer relationship and order size, and adjust with Chinese production quotas rather than international demand signals. Toto Finance's oracle feeds and on-chain trading activity create the first public, real-time thulium pricing mechanism: independently verifiable, reflective of surgical laser demand and heavy rare earth fractionation output, and accessible to every market participant rather than confined to dealer telephone negotiations.",
              },
              {
                t: 'Instant Settlement for a Material Where Weeks of Delay Mean Surgical Systems Unbuilt',
                b: "Traditional thulium procurement operates through specialty dealers with settlement timelines of one to three weeks, limited inventory, and logistics chains not designed for the urgency of medical device manufacturing schedules. Token settlement creates instant procurement capability, settling T+0 with stablecoins. For a surgical laser manufacturer whose quarterly production capacity is constrained by thulium availability, instant settlement is not a convenience improvement. It is the difference between shipping laser systems to hospitals or sending apologies.",
              },
              {
                t: 'Compliance for Medical Material Supply Chain Transactions',
                b: 'Thulium entering medical device manufacturing is subject to FDA supply chain documentation requirements, critical mineral sourcing regulations, and quality management system traceability mandates that govern materials incorporated into Class II and Class III surgical devices. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific compliance rules directly into token architecture, creating a compliance layer designed for a material that transitions from commodity to medical device component.',
              },
              {
                t: 'Financial Tools for a Market That Has Never Had a Single Instrument',
                b: "Lending, borrowing, hedging, and collateral management for thulium as a standalone asset: capabilities that have never existed because thulium's market has been invisible to the financial system. Smart contract protocols enable yield generation from thulium positions, stablecoin borrowing against holdings, and programmable hedging strategies built for an element whose 32%-growth demand curve, 4.2-tonne production base, and single-country concentration create risk dynamics that no existing commodity instrument captures.",
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized thulium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Medical device procurement platforms, institutional custodians, DeFi protocols, and individual holders can interact with thulium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in, no chain-specific constraints on the rare earth element reshaping minimally invasive surgery.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Thulium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized thulium, In-Ground Thulium, medical fiber lasers, portable X-ray systems, and how Toto Finance provides the first
            open market access to the element behind the fastest-growing surgical technology in urology.
          </p>
          <ThuliumFAQ faqs={faqData} />
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
            450,000 Surgeries a Year Run on an Element the World Produces at 4.2 Tonnes. The Gap Is Widening.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            The world needs 21 tonnes of thulium by 2030. Heavy rare earth fractionation will deliver 12.5. The 8.5-tonne deficit is not a market cycle. It
            is the arithmetic of a 0.007% ore concentration colliding with the fastest-growing surgical technology adoption curve in modern urology. Every
            fiber laser system shipped to a hospital contains 30 to 80 grams of an element whose total global production would fit in a car trunk. Every
            quarter, more surgical suites adopt thulium lasers because patient outcomes demand it. And every quarter, the gap between clinical demand and
            material reality widens. Toto Finance is building the infrastructure to bring the surgeon&apos;s element to an open, transparent,
            instant-settlement market for the first time.
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
