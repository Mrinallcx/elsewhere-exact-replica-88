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
const GadoliniumTickerBar = dynamicImport(
  () => import('../components/client/GadoliniumTickerBar').then((mod) => ({ default: mod.GadoliniumTickerBar }))
);
const GadoliniumFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-gadolinium';
const PAGE_TITLE = 'Tokenized Gadolinium | Digital Rare Earth Backed by Physical Assets | Toto Finance';
const PAGE_DESCRIPTION =
  'Every MRI scan that detects cancer depends on gadolinium. Toto Finance brings this critical rare earth on-chain from 1:1 redeemable oxide tokens to In-Ground future delivery contracts. The element modern medicine physically cannot diagnose without. Instant stablecoin settlement. DeFi secondary markets.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Gadolinium', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What is tokenized gadolinium?',
    answer:
      'A blockchain-based digital asset backed 1:1 by refined gadolinium oxide (Gd₂O₃) in insured, audited vaults. High-purity grade (99.9%+ Gd₂O₃), ready for pharmaceutical contrast agent production, nuclear reactor applications, and industrial processing. Redeemable for physical gadolinium on demand. Toto Finance is building the infrastructure to bring gadolinium on-chain with instant stablecoin settlement and DeFi secondary markets.',
  },
  {
    question: 'What is In-Ground Gadolinium?',
    answer:
      'A tokenized future delivery contract for gadolinium still contained in rare earth deposits at certified mining operations. Short-term (1 to 12 months) for operations with active separation capacity, long-term (1 to 6 years) for earlier-stage deposits. Built for pharmaceutical manufacturers, hospital systems, sovereign funds, and institutional investors positioning for the structural gadolinium deficit.',
  },
  {
    question: 'Where does the gadolinium come from?',
    answer:
      'Directly from rare earth mining companies and separation facilities across China (85% of production from ionic clay and bastnäsite deposits), North America (USA and Canada developing domestic rare earth separation for healthcare supply security), Australia (Lynas operations and emerging processors), Southeast Asia and Vietnam (ionic clay processing and concentrate separation), and Brazil and India (monazite and heavy mineral sand deposits). No middlemen. No intermediary traders.',
  },
  {
    question: 'Who buys tokenized gadolinium?',
    answer:
      'Three groups: (1) Healthcare and nuclear operators, including pharmaceutical and MRI contrast agent manufacturers, medical imaging equipment companies, hospital radiology departments, nuclear reactor operators, magnetic refrigeration developers, data storage manufacturers, garnet crystal producers. (2) Healthcare economy investors, including funds and allocators seeking direct exposure to the physical material driving diagnostic imaging growth, without company-specific operational risk. (3) On-chain participants, including crypto funds, protocol treasuries, and DeFi protocols seeking real-world collateral with demand floors anchored in biological necessity.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT. Traditional gadolinium procurement involves specialized traders, pharmaceutical intermediaries, quality certification, logistics coordination, and banking settlement measured in weeks. Toto Finance connects gadolinium sources with buyers directly on-chain, eliminating every intermediary and settling transactions instantly.',
  },
  {
    question: 'Can I trade tokenized gadolinium on DeFi platforms?',
    answer:
      'Yes. After acquisition, trade on decentralized exchanges globally, generate yield by lending to counterparties, or use gadolinium tokens as collateral for stablecoin loans. Gadolinium has never had secondary market infrastructure of any kind. Tokenization creates it for the first time.',
  },
  {
    question: 'Why is gadolinium irreplaceable in MRI imaging?',
    answer:
      'Gadolinium possesses unique paramagnetic properties that alter the magnetic relaxation times of water protons in human tissue, creating enhanced contrast between healthy and abnormal tissue on MRI scans. Gadolinium-based contrast agents enable visualization of tumors, blood vessel abnormalities, inflammation, and tissue damage that remain invisible on standard imaging. Over 100 million MRI scans are performed annually, 40% to 50% require gadolinium contrast, and no other element provides equivalent paramagnetic enhancement at clinically safe concentrations. 95% of all gadolinium consumed globally goes to healthcare applications.',
  },
  {
    question: 'What is the gadolinium price outlook?',
    answer:
      'Roskill forecasts $78,000/mt in 2026. Critical Minerals Intelligence projects exceeding $85,000/mt by 2027 as medical imaging demand accelerates while rare earth production remains structurally constrained. The deficit is expected to intensify through 2030 as aging populations drive MRI procedure volume growth, cancer screening programs expand globally, and nuclear reactor construction accelerates for carbon-neutral energy targets.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Visit https://totofinance.co/. Pharmaceutical manufacturers, hospital networks, nuclear operators, institutional investors, mining partners, and industrial buyers can reach out directly for partnership and early allocation discussions.',
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
        'Tokenized commodity platform offering 1:1 asset-backed gadolinium oxide tokens and In-Ground Gadolinium future delivery contracts with instant stablecoin settlement.',
    },
    {
      '@type': 'Product',
      name: '1:1 Gadolinium Oxide Token',
      description:
        'Digital asset backed 1:1 by refined gadolinium oxide (Gd₂O₃) in insured custody, redeemable for physical delivery. Category: Tokenized Commodity.',
      category: 'Tokenized Commodity',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
    {
      '@type': 'Product',
      name: 'In-Ground Gadolinium',
      description:
        'Tokenized future delivery contract for gadolinium in rare earth deposits at certified mining operations. Category: Commodity Future Delivery Contract.',
      category: 'Commodity Future Delivery Contract',
      brand: { '@type': 'Brand', name: 'Toto Finance' },
      url: PAGE_URL,
    },
  ],
};

export default function TokenizedGadoliniumPage() {
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
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-left">
          <h1 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-teal-200/90 mb-4">
            Tokenized Gadolinium by Toto Finance
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Every MRI That Detects Cancer Depends on Gadolinium. Now Anyone Can Own It.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl text-left">
            Right now, somewhere in the world, a doctor is reviewing an MRI scan where gadolinium made a tumor visible. Over 100 million MRI
            scans are performed globally each year, and nearly half require gadolinium-based contrast agents to reveal what standard imaging
            cannot see: tumors, vascular damage, neurological disease. Gadolinium is the only element with the paramagnetic properties
            required for this function, and 95% of all gadolinium produced goes directly into healthcare. Yet global production covers barely
            a fraction of projected demand, and access to gadolinium as an asset has never existed outside specialized rare earth
            procurement.{' '}
            <Link href="/" className="text-white underline underline-offset-2 hover:text-teal-200">
              Toto Finance
            </Link>{' '}
            is changing that by bringing the element that makes disease visible on-chain for the first time.
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
              Why Gadolinium Matters
            </a>
          </div>
        </div>
      </section>

      <GadoliniumTickerBar />

      {/* FOLD 2: Crisis */}
      <section id="crisis" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">THE WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Modern Medicine Depends on Gadolinium. And Supply Is Running Out.
          </h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12 space-y-4">
            <p>
              We chose gadolinium because it represents the most consequential material dependency in modern healthcare. Not consequential
              because it is expensive. Consequential because when gadolinium is unavailable, cancers go undetected, neurological conditions
              go undiagnosed, and cardiovascular disease goes unseen.
            </p>
            <p>
              Gadolinium possesses unique paramagnetic properties that alter the magnetic relaxation times of water molecules in human
              tissue, creating the contrast that transforms MRI scans from blurred grey images into precise diagnostic tools. Without
              gadolinium-based contrast agents, radiologists lose the ability to distinguish tumors from healthy tissue, to map blood vessel
              abnormalities, to identify inflammation and infection at early stages. Over 100 million MRI scans are performed every year,
              and 40% to 50% of them require gadolinium enhancement. The healthcare systems of every developed nation depend on a rare earth
              element that is produced at just 500 tonnes per year, overwhelmingly in China, with no viable substitute in development. The
              hospitals ordering MRI contrast agents today face a supply chain they cannot control and a deficit they cannot outspend.
            </p>
            <p className="font-medium text-gray-900">That is why we exist.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">280 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Deficit Is Already Clinical</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Roskill forecasts a 280-tonne gadolinium deficit in 2025, with the gap widening through 2030. Over 95% of gadolinium demand
                comes from MRI contrast agents essential for cancer detection, neurological imaging, and cardiovascular diagnostics. This is
                not a commodity cycle. Supply shortages directly impact patient access to life-saving medical procedures.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">100M+</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">MRI Scans Every Year. Nearly Half Need Gadolinium.</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Over 100 million MRI scans are performed globally each year, with 40% to 50% requiring gadolinium-based contrast agents for
                enhanced imaging. Each scan uses 15 to 30 milliliters of contrast solution containing gadolinium chelates. Medical demand
                alone consumes 380 tonnes annually, representing 95% of total gadolinium use, and procedure volumes are growing at 8% per year.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">950 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A Gap Measured in Missed Diagnoses</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global gadolinium demand is projected to reach 1,450 tonnes per year by 2030, while supply from existing and planned rare
                earth mines will deliver only 500 tonnes. The 950-tonne gap represents a 66% shortfall. Every new hospital, every aging
                population initiative, every cancer screening program widens it further.
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
            Understanding Why Gadolinium Has No Substitute
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-14">
            The rare earth element that makes disease visible. Essential for MRI contrast imaging, nuclear reactor safety, and emerging
            magnetic refrigeration technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-teal-900 to-slate-950 text-white p-6 mb-4 font-mono text-sm"
                role="img"
                aria-label="Gadolinium element card showing Gd symbol, atomic number 64, density, paramagnetic properties, and MRI contrast agent classification"
              >
                <p className="text-3xl font-light mb-1">Gd</p>
                <ul className="space-y-1 text-teal-100/90">
                  <li>Atomic Number: 64</li>
                  <li>Density: 7,895 kg/m³</li>
                  <li>Melting Point: 1,313°C</li>
                  <li>Magnetic Property: Ferromagnetic at Room Temperature</li>
                  <li>Classification: MRI Contrast Agent Core</li>
                </ul>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Element</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-cyan-800/70 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Rare earth mining operation extracting monazite and bastnäsite minerals containing gadolinium"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Comes From</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Extracted from monazite, bastnäsite, and ionic clay minerals in China, USA, Australia, and Myanmar. Produced as a component
                of rare earth separation, with China controlling 85% of global output from deposits in southern provinces and the Bayan Obo
                complex in Inner Mongolia.
              </p>
              <p className="text-xs text-gray-500 mt-3 font-mono">Ore → Chemical Separation → Ion Exchange → Purification → 99.9% Pure Gadolinium</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-emerald-800/50 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Gadolinium paramagnetic contrast enhancement visualization showing MRI tissue differentiation capability"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Paramagnetism That Makes It Irreplaceable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Possesses the highest magnetic moment of any element and is ferromagnetic at room temperature. When chelated and injected
                intravenously, gadolinium ions alter the magnetic relaxation times of nearby water protons, creating the contrast that makes
                tumors, vascular damage, and neurological abnormalities visible on MRI. Also possesses the highest thermal neutron capture
                cross-section of any stable element, making it essential for nuclear reactor control.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div
                className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 min-h-[160px] mb-4"
                role="img"
                aria-label="Applications of gadolinium including MRI contrast agents in hospitals, nuclear reactor control rods, and magnetic refrigeration systems"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Where It Goes</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                MRI contrast agents (gadolinium-based contrast agents or GBCAs), nuclear reactor control rods and emergency shutdown systems,
                magnetic refrigeration systems, magneto-optical recording media, garnet crystals for microwave applications, phosphor
                activators, specialized neutron shielding.
              </p>
              <p className="text-sm font-semibold text-teal-800 bg-teal-50 rounded-lg px-3 py-2">
                $420M+ global market (500+ tonnes annual production)
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
            Healthcare Is Expanding. Gadolinium Supply Is Collapsing Behind It.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There is a direct physical link between the growth of global healthcare systems and the consumption of gadolinium. Every
            contrast-enhanced MRI requires gadolinium chelates. Every new hospital with radiology capability increases demand. Every cancer
            screening initiative drives procedure volume. MRI utilization is growing at 8% annually. Gadolinium production, concentrated in a
            handful of Chinese rare earth operations, has no mechanism to scale proportionally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">MRI Contrast Agents: 95% of All Gadolinium Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gadolinium-based contrast agents enable radiologists to visualize tumors, blood vessel abnormalities, inflammation, and tissue
                damage that remain invisible on standard MRI scans. With over 100 million MRI procedures performed annually and 40% to 50%
                requiring contrast enhancement, medical imaging alone consumes 380 tonnes of gadolinium per year. Each oncology patient
                undergoes 3 to 5 contrast MRI scans during treatment, and aging populations are driving procedure volumes upward at 8%
                compound annual growth.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Cancer Detection and Screening: The Diagnostic Imperative</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gadolinium-enhanced MRI is the gold standard for detecting brain tumors, liver lesions, breast cancer, and metastatic disease.
                Global cancer cases are projected to reach 30 million annually by 2030, and contrast-enhanced MRI is the frontline diagnostic
                tool for the majority of solid tumor types. Every expansion of cancer screening programs, every new oncology center, every
                government health initiative translates directly into increased gadolinium consumption.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Nuclear Reactor Control: Safety at the Atomic Level</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gadolinium has the highest thermal neutron capture cross-section of any stable element, making it essential for nuclear reactor
                control rods and emergency shutdown systems. The nuclear energy sector consumes 45 tonnes annually. With over 60 reactors
                under construction worldwide and governments accelerating nuclear buildout to meet carbon-neutral energy commitments,
                demand for gadolinium in nuclear safety applications is growing at pace with the global energy transition.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Magnetic Refrigeration: Cooling Without Chemical Refrigerants</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gadolinium alloys enable magnetic refrigeration systems that operate near room temperature, offering energy-efficient cooling
                without the hydrofluorocarbon refrigerants responsible for greenhouse gas emissions. Emerging applications in data center
                thermal management, automotive climate control, and consumer appliances are creating an entirely new demand vector consuming
                15 tonnes annually with 25% compound annual growth as environmental regulations phase out conventional refrigerants.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-2">A Deficit Measured in Patients Who Cannot Be Diagnosed</h3>
            <p className="text-sm text-gray-500 mb-6">
              Bar chart showing global gadolinium demand rising from 480 tonnes in 2025 to 1,450 tonnes by 2030, with supply reaching
              approximately 500 tonnes, creating a 950 tonne annual deficit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { year: '2025', val: '480', note: 'Demand (t)' },
                { year: '2028', val: '890', note: 'Demand (t)' },
                { year: '2030', val: '1,450', note: 'Demand (t)' },
                { year: '2035', val: '2,200', note: 'Roskill' },
                { year: '2030 Supply', val: '~500', note: 'Gap: 950+ t' },
              ].map((d, i) => (
                <div
                  key={d.year}
                  className={`text-center p-4 rounded-xl ${i === 4 ? 'bg-red-50 border border-red-100' : i === 3 ? 'bg-teal-50' : 'bg-white border border-gray-100'}`}
                >
                  <p className={`text-sm mb-2 ${i === 4 ? 'text-red-800 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.val} t</p>
                  <p className="text-xs text-gray-500 mt-1">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Sources: Roskill, Critical Minerals Intelligence, USGS, International Society for Magnetic Resonance in Medicine.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 5: TWO PRODUCTS */}
      <section id="products" className="scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">TWO PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Two Ways to Own Tokenized Gadolinium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Everything we believe about opening access to critical healthcare materials comes to life in two products. One for gadolinium
            that is already refined and vaulted. One for gadolinium still contained in rare earth deposits awaiting separation. Both backed by
            physical assets. Both settleable in stablecoins. Both built to give the healthcare systems and investors confronting a 950-tonne
            supply gap a way to secure the element that makes diagnosis possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full mb-4">
                ASSET-BACKED TOKEN
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-teal-700 underline-offset-2 hover:underline">
                  1:1 Gadolinium Oxide Token
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Digital ownership of physical gadolinium. Every token is backed 1:1 by refined gadolinium oxide (Gd₂O₃) in insured, audited
                vaults. High-purity grade (99.9%+ Gd₂O₃), ready for pharmaceutical contrast agent manufacturing, nuclear reactor component
                production, and industrial processing. Redeemable for physical gadolinium on demand. Not a derivative. Not a tracker. The
                actual material.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed 1:1 by refined gadolinium oxide (99.9%+ purity grade)</li>
                <li>Always redeemable for physical gadolinium delivery on demand</li>
                <li>Stored in insured, independently audited vault and warehouse facilities</li>
                <li>On-chain proof-of-reserves with real-time oracle feeds</li>
                <li>Fractional ownership, from $1, tradeable 24/7 with instant stablecoin settlement</li>
                <li>Ready for industrial end-use: MRI contrast agents, nuclear control rods, magnetic refrigeration, garnet crystals</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <span className="inline-block text-xs font-bold tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full mb-4">
                FUTURE DELIVERY CONTRACT
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                <Link href="/products" className="hover:text-teal-700 underline-offset-2 hover:underline">
                  In-Ground Gadolinium
                </Link>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Forward positions in gadolinium that has not been separated yet. Tokenized future delivery contracts backed by proven
                gadolinium content in rare earth deposits at certified mining operations. For organizations that understand that 500 tonnes
                of annual production serving a 1,450-tonne demand curve by 2030 creates a pricing trajectory that rewards those who secure
                supply before the healthcare system consumes what remains.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Backed by proven gadolinium content in rare earth reserves at partner mining sites</li>
                <li>Pre-production pricing reflecting separation constraints and healthcare demand acceleration</li>
                <li>On-chain reserve tracking with geological data transparency</li>
                <li>Physical delivery or settlement at maturity</li>
                <li>Verified reserves with third-party geological audits</li>
                <li>Built for pharmaceutical companies, hospital systems, sovereign funds, and institutional allocators</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-900/10 border border-teal-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2">SHORT-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 12 Months</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Near-term gadolinium delivery contracts tied to active rare earth operations with separation capacity. For pharmaceutical
                manufacturers managing quarterly contrast agent production, hospital networks securing imaging supply, and commodity
                specialists trading near-term gadolinium pricing dynamics.
              </p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LONG-TERM DELIVERY</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">1 to 6 Years</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-year gadolinium positions backed by proven rare earth reserves at earlier-stage operations. Built for sovereign
                healthcare reserves, pharmaceutical companies planning decade-scale contrast agent manufacturing, and institutional allocators
                who recognize that a 66% supply shortfall by 2030 is not a forecast to observe but a reality to position against.
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
            Securing the Element That Makes Diagnosis Possible. Directly.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Gadolinium is not mined independently. It is separated from mixed rare earth concentrates at specialized processing facilities,
            with 85% of global output controlled by Chinese operations. Toto Finance works directly with{' '}
            <Link href="/about" className="text-teal-800 font-medium underline underline-offset-2 hover:text-teal-600">
              rare earth mining companies and separation facilities
            </Link>{' '}
            to secure gadolinium at the processing level, bypassing the trader networks and broker chains that add cost and opacity to a
            supply chain that healthcare systems cannot afford to see disrupted.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'China',
                text: 'China produces 85% of global gadolinium from ionic clay deposits in southern provinces and bastnäsite ores at the Bayan Obo complex in Inner Mongolia. Chinese separation facilities supply gadolinium oxide for both domestic pharmaceutical manufacturing and export markets. Strategic reserve policies and domestic healthcare demand are progressively reducing the volume available for international procurement.',
              },
              {
                title: 'North America (USA and Canada)',
                text: 'US and Canadian rare earth projects are developing separation capabilities at Mountain Pass (California), Bear Lodge (Wyoming), and Nechalacho (Northwest Territories). Critical mineral designation has prioritized domestic gadolinium supply chains to ensure that MRI contrast agent manufacturing and nuclear reactor operations are not dependent on a single foreign source.',
              },
              {
                title: 'Australia',
                text: 'Western Australian and Northern Territory rare earth deposits contain gadolinium as a heavy rare earth component. Lynas Rare Earths and emerging Australian processors produce gadolinium oxide for pharmaceutical and industrial applications, providing a key allied-nation supply source for Western healthcare manufacturing.',
              },
              {
                title: 'Southeast Asia and Vietnam',
                text: 'Vietnamese ionic clay deposits and Malaysian rare earth processing facilities produce gadolinium oxide from regional mining operations and imported concentrates. These operations provide alternative supply channels for pharmaceutical companies seeking procurement diversification beyond Chinese-dominated production.',
              },
              {
                title: 'Brazil and India',
                text: 'Brazilian monazite deposits and Indian coastal heavy mineral sands contain meaningful gadolinium concentrations. New separation facilities under development in both countries will extract gadolinium for regional pharmaceutical manufacturing and nuclear industry supply chains.',
              },
              {
                title: 'Exploration and Development',
                text: 'New rare earth projects across Africa, Scandinavia, and Greenland are in exploration and feasibility stages. These represent the next generation of gadolinium supply, and In-Ground Gadolinium positions offer access at pre-production economics before separation output reaches the market.',
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
              <strong>Secured at the separation stage.</strong> Gadolinium does not come from a mine. It comes from a separation facility.
              Toto Finance works at this critical processing point, eliminating the broker and trader layers that sit between separation
              output and end-user delivery. Verified provenance. Transparent chain of custody from{' '}
              <Link href="/how-tokenization-works" className="underline underline-offset-2 hover:text-teal-200">
                mine to token
              </Link>
              . Access at the point where gadolinium actually becomes available, not three intermediaries downstream.
            </p>
          </div>
        </div>
      </section>

      {/* FOLD 7: PARTICIPANTS */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">PARTICIPANTS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 text-center">
            Who Buys Tokenized Gadolinium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Gadolinium has always moved through specialized rare earth traders and pharmaceutical supply intermediaries, at prices negotiated
            privately, in quantities accessible only to the largest procurement operations. The organizations that depend on it most,
            hospitals, pharmaceutical manufacturers, nuclear operators, have had no transparent mechanism to secure supply directly. Toto
            Finance opens that mechanism for the first time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-teal-800">HEALTHCARE AND NUCLEAR OPERATORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">The Organizations Where Gadolinium Saves Lives</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                These buyers do not speculate on gadolinium prices. They consume gadolinium in the contrast agents that reveal cancers, in
                the control rods that keep nuclear reactors safe, in the refrigeration systems that cool critical infrastructure. Tokenized
                gadolinium gives them{' '}
                <Link href="/products" className="text-teal-800 font-medium underline underline-offset-2">
                  supply continuity
                </Link>
                , transparent procurement, and physical delivery capability without the lead times and pricing opacity of traditional rare
                earth broker channels.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Pharmaceutical and MRI contrast agent manufacturers, medical imaging equipment manufacturers (MRI systems), hospital
                radiology departments and imaging centers, nuclear reactor operators and fuel rod manufacturers, magnetic refrigeration system
                developers, data storage and magneto-optical media manufacturers, garnet crystal producers for microwave and optical
                applications, phosphor material suppliers, specialized neutron shielding manufacturers, rare earth alloy and materials
                processors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-blue-800">HEALTHCARE ECONOMY INVESTORS</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Investing in What Modern Medicine Is Physically Made Of</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Investors allocate billions to pharmaceutical stocks, hospital REITs, and medical device companies, yet the physical element
                that makes MRI diagnostics function has been entirely uninvestable. Until now. Tokenized gadolinium offers direct exposure to a
                material with 8% annual demand growth driven by aging populations and expanding cancer screening, fractional access from $1,
                and zero dependence on any company&apos;s operational execution. The thesis requires no speculation: more people need MRI
                scans every year, gadolinium supply cannot grow proportionally, and the gap between the two widens with every hospital that
                opens its doors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <span className="text-xs font-bold tracking-widest text-purple-800">ON-CHAIN INFRASTRUCTURE</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-4">Backing Digital Finance with the Material That Protects Human Health</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Healthcare is the largest sector of global GDP, and gadolinium sits at the diagnostic foundation of modern medicine. Tokenized
                gadolinium offers on-chain participants something rare in the RWA landscape: collateral backed by a material with inelastic
                demand driven by biological necessity rather than market sentiment. For protocols, treasuries, and funds seeking real-world
                assets with demand floors set by human health rather than economic cycles.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto funds seeking healthcare-correlated commodity exposure, protocol treasuries diversifying into the physical layer of global
                health infrastructure, DeFi protocols building collateral pools with demand driven by demographic inevitability, blockchain
                foundations investing in materials with non-discretionary end markets, DAOs with healthcare and life sciences investment
                mandates.
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
            Instant Settlement for Tokenized Gadolinium. No Rare Earth Traders. No Delays.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Gadolinium has never appeared on a commodities exchange. There is no spot market, no futures contract, no public price discovery
            mechanism. Every kilogram is procured through private channels, specialized rare earth traders, pharmaceutical supply
            intermediaries, and bilateral agreements where the buyer has no visibility into pricing benchmarks or available inventory. For the
            material that enables the most important diagnostic tool in modern medicine, the procurement infrastructure operates like a closed
            guild. We built something that puts the power of access back in the hands of the organizations that actually need it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">The Old Way</h3>
              <p className="text-sm text-gray-500 mb-6">8+ Intermediaries. Weeks to Settle. Opaque Pricing.</p>
              <div className="space-y-3">
                {[
                  'Mining Company / Ore Producer',
                  'Rare Earth Separation Facility',
                  'Specialized Rare Earth Trader',
                  'Pharmaceutical Supply Intermediary',
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
                        <Link href="/products" className="underline underline-offset-2 hover:text-teal-200">
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
                The gadolinium supply chain has operated as a closed network of specialized traders and pharmaceutical intermediaries for
                decades. No public pricing. No standardized contracts. No settlement infrastructure. Toto Finance uses blockchain to create
                what the healthcare supply chain has never had: a transparent, instant-settlement market connecting gadolinium sources with
                buyers, removing every layer of intermediation that traditionally separates separation facility output from the hospitals and
                manufacturers that consume it.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Settlement at the Speed of a Diagnosis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'USDC',
                issuer: 'Circle',
                detail:
                  'Fully reserved and independently attested dollar stablecoin built for institutional settlement. The compliance profile and DeFi integration breadth that pharmaceutical procurement operations and healthcare supply chains require for regulated digital transactions.',
              },
              {
                name: 'USDT',
                issuer: 'Tether',
                detail:
                  'Over $140 billion in global circulation providing unmatched settlement depth. When gadolinium transactions demand immediate execution across time zones and without counterparty delay, USDT provides the liquidity infrastructure to settle at any volume.',
              },
              {
                name: 'USAT',
                issuer: 'Tether (US Regulated)',
                detail:
                  'US-regulated stablecoin under the GENIUS Act framework. Designed for healthcare and pharmaceutical supply transactions where domestic regulatory compliance, auditable settlement rails, and US jurisdictional requirements govern procurement operations.',
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
            DeFi Infrastructure for Tokenized Gadolinium
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Gadolinium has had zero financial infrastructure since its commercial use began with the first MRI contrast agent approval in 1988.
            No exchange listing. No ETF. No futures market. No lending facility. No collateral framework. Tokenization does not simply
            digitize gadolinium. It builds an entire financial system around a material that the healthcare industry has procured through
            phone calls and private negotiations for its entire commercial history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The First Gadolinium Secondary Market</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Before tokenization, repositioning a gadolinium holding meant contacting one of a small number of rare earth traders or
                pharmaceutical supply intermediaries and accepting whatever terms they dictated. There was no market. Only gatekeepers. Tokenized
                gadolinium establishes a continuous secondary market on decentralized exchanges, enabling transparent pricing, instant transfers,
                and cross-chain liquidity for a material that has never had a single venue where buyers and sellers could meet openly. This is
                not market access. This is market genesis.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Yield Anchored in Healthcare Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lend gadolinium tokens to counterparties seeking leveraged exposure to rare earth pricing or hedged positions in healthcare
                materials. Interest rates reflect real-world demand for gadolinium exposure, tied to MRI procedure volume growth, hospital
                construction rates, and nuclear energy deployment timelines. Yield generated by the biological certainty that aging populations
                require more diagnostic imaging, not by algorithmic emissions or protocol subsidies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Working Capital Without Surrendering Supply</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pharmaceutical companies and institutional investors holding gadolinium positions have historically had one option for
                accessing capital from those holdings: liquidate entirely through a rare earth trader at opaque pricing. Tokenized gadolinium
                changes this equation.{' '}
                <Link href="/products" className="text-teal-800 font-medium underline underline-offset-2">
                  Borrow against gadolinium
                </Link>{' '}
                tokens to receive stablecoins while maintaining full exposure. For healthcare supply chains managing cash flow against
                multi-year contrast agent manufacturing commitments, this unlocks liquidity without breaking strategic procurement positions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Risk Controls for a Market with No Precedent</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gadolinium&apos;s market is small, geographically concentrated, and vulnerable to policy shocks that can disrupt supply with
                minimal warning. A single Chinese export quota adjustment or a separation facility maintenance shutdown can alter global
                availability overnight. Conventional risk management through broker phone calls and manual contract renegotiation cannot react at
                that velocity. Smart contract infrastructure automates collateral monitoring, margin adjustments, and position management in
                real time, delivering institutional-grade risk architecture to a market that has never had risk infrastructure of any kind.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              From Separation Facility to Global Digital Market: The Gadolinium Token Path
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                'Authenticated: Gadolinium oxide verified at separation facility, secured in insured custody, and bound to on-chain token identity',
                'Acquired: Purchased with USDC, USDT, or USAT at transparent pricing reflecting real-time healthcare and industrial demand',
                'Positioned: Held in wallet, traded on secondary markets, or bridged across chains to align with holder infrastructure',
                'Activated: Deployed into yield protocols, pledged as loan collateral, or structured for supply disruption hedging',
                'Delivered: Redeemed for physical gadolinium oxide (Gd₂O₃) for contrast agent manufacturing, nuclear applications, or industrial use',
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
            Tokenized Gadolinium vs Every Other Way to Get Exposure
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            There has never been a direct way to invest in gadolinium. Rare earth ETFs dilute exposure across dozens of elements. Mining stocks
            carry operational risk unrelated to gadolinium pricing. Physical procurement requires separation facility relationships and
            pharmaceutical-grade quality certifications. Toto Finance built what the healthcare materials market has always been missing.
          </p>

          <div
            className="overflow-x-auto rounded-2xl border border-gray-200"
            aria-label="Comparison table of tokenized gadolinium on Toto Finance versus rare earth ETFs, physical gadolinium procurement, and mining stocks across 10 features including gadolinium-specific exposure, settlement speed, price transparency, and DeFi access."
          >
            <table className="w-full text-sm text-left min-w-[720px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Rare Earth ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Gadolinium</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Mining Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Gadolinium-Specific', 'No (basket)', 'Yes (1:1)', 'Yes', 'No (equity)'],
                  ['Trading Hours', 'Market hours only', '24/7/365', 'Private negotiation', 'Market hours only'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Weeks to months', 'T+2'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$25,000+ (pharma grade)', '1 share (~$10+)'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Price Transparency', 'NAV-based', 'Real-time oracle', 'Private negotiation', 'Stock price only'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple traders', 'Broker'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-teal-50/50">{row[2]}</td>
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
            Building Financial Infrastructure for the Element That Powers Modern Diagnostics
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Gadolinium has been procured through pharmaceutical supply intermediaries and specialized rare earth traders since the first MRI
            contrast agent received clinical approval in 1988. No standardized contracts. No public pricing benchmarks. No settlement
            infrastructure. No collateral frameworks. Every feature of the Toto Finance platform for gadolinium was constructed from the
            ground up because the healthcare supply chain never built the financial infrastructure this critical material deserves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Physical Backing with Pharmaceutical-Grade Delivery',
                b: 'Every gadolinium token connects to verified gadolinium oxide (Gd₂O₃, 99.9%+) in insured custody. Request physical delivery and receive material ready for contrast agent manufacturing, nuclear control rod production, or magnetic refrigeration development. In a market where supply verification has always depended on the reputation of a broker, on-chain proof-of-reserves replaces intermediary trust with transparent, auditable verification.',
              },
              {
                t: 'Price Transparency for a Market That Has Never Had Any',
                b: "Gadolinium has never had a public price. Every gram is negotiated privately between traders and buyers, with pricing information treated as proprietary intelligence. Toto Finance's oracle feeds and on-chain trading activity create the first transparent gadolinium pricing mechanism: real-time, independently verifiable, and accessible to every participant, from pharmaceutical procurement teams to individual investors.",
              },
              {
                t: 'Instant Settlement for a Supply Chain That Operates in Quarters',
                b: "Traditional gadolinium procurement follows pharmaceutical supply chain timelines: purchase orders, quality certification, logistics coordination, regulatory documentation, and banking settlement that can span weeks or months. Token settlement is T+0 with stablecoins. For pharmaceutical manufacturers managing production schedules against unpredictable rare earth availability, instant execution transforms procurement from a planning exercise into a responsive capability.",
              },
              {
                t: 'Compliance Architecture for Healthcare Supply Chains',
                b: 'Gadolinium trade crosses jurisdictions with pharmaceutical import regulations, strategic material designations, and end-use verification requirements that exceed standard commodity compliance. Smart contracts embed KYC/AML verification, transfer restrictions, and jurisdiction-specific regulatory rules directly into token architecture, ensuring every transaction automatically satisfies applicable requirements without the manual documentation burden that slows traditional procurement.',
              },
              {
                t: 'Complete Financial Infrastructure for a 500-Tonne Market',
                b: 'Lending, borrowing, hedging, and collateral management for gadolinium: functions that pharmaceutical supply chains and commodity investors have never been able to access for this material. Smart contract protocols enable yield generation from gadolinium positions, stablecoin borrowing against holdings, and programmable hedging strategies. An entire financial stack, purpose-built for a material where supply constraints carry life-or-death consequences.',
              },
              {
                t: 'Multi-Chain Presence',
                b: 'Tokenized gadolinium is deployed across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Institutional custodians, DeFi protocols, pharmaceutical procurement platforms, and individual holders can interact with gadolinium tokens on whatever chain infrastructure their operations already use. No migration required, no ecosystem lock-in.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Tokenized Gadolinium FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Direct answers about tokenized gadolinium, In-Ground Gadolinium, healthcare and nuclear demand, and how Toto Finance provides
            access to the element that makes modern diagnostics possible.
          </p>
          <GadoliniumFAQ faqs={faqData} />
        </div>
      </section>

      {/* FOLD 13: Final CTA */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-teal-200/80 font-semibold mb-3">THIS IS WHY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
            Healthcare Demand Grows Every Year. Gadolinium Supply Does Not.
          </h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10">
            Every contrast-enhanced MRI depends on gadolinium. Every cancer screening, every neurological assessment, every cardiac imaging
            procedure. The world needs 1,450 tonnes by 2030. Supply will deliver 500. The 950-tonne gap compounds with every hospital that
            opens, every aging population that requires more diagnostics, every nuclear reactor commissioned for carbon-neutral energy.
            Toto Finance is building the infrastructure to bring this life-saving material to an open, transparent, instant-settlement market
            for the first time in its history.
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
