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
const SilverTickerBar = dynamicImport(
  () => import('../components/client/SilverTickerBar').then((mod) => ({ default: mod.SilverTickerBar }))
);
const SilverFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized silver?',
    answer:
      'Tokenized silver is a blockchain-based digital asset backed 1:1 by allocated physical silver bars stored in tier-1 insured vault facilities. Each token represents a specific quantity of silver with verified bar serial numbers, refinery certificates, and full chain of custody. Always redeemable for physical silver delivery. Toto Finance is building this with instant stablecoin settlement and DeFi integration.',
  },
  {
    question: 'How is silver stored and secured?',
    answer:
      'All silver is stored in tier-1 vault facilities operated by Loomis, Brink\u2019s, Swiss vaults, and Singapore Freeport. Every bar is allocated (not pooled), serialized, and independently audited monthly. Full insurance coverage with Lloyd\u2019s of London and specialist precious metals insurers. Same security standards used by industrial buyers and institutional investors.',
  },
  {
    question: 'Can I redeem tokens for physical silver?',
    answer:
      'Yes. Tokens are always redeemable for physical silver delivery to any location globally. Minimum 500 ounces for delivery. Partner with Brink\u2019s, Loomis, and Malca-Amit for secure insured logistics. Redemption process takes 2\u20137 business days. Full chain of custody documentation provided with each delivery.',
  },
  {
    question: 'Who buys tokenized silver?',
    answer:
      'Three categories: (1) Industrial clients \u2014 solar panel manufacturers, EV battery makers, electronics manufacturers, medical device producers, data center companies, and semiconductor fabs. (2) Investors and commodity traders seeking exposure to both monetary and industrial dynamics. (3) Crypto-native participants \u2014 protocol treasuries, DeFi protocols, digital asset funds, and DAOs seeking real-world asset collateral.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT stablecoins. Send stablecoins, receive silver tokens instantly to your wallet. Blockchain settlement eliminates banks, clearing houses, and 2\u20135 day waiting periods. Like Amazon for silver \u2014 instant digital ownership of physical assets.',
  },
  {
    question: 'Can I trade tokenized silver on DeFi platforms?',
    answer:
      'Yes. Once purchased, tokenized silver trades 24/7 on DeFi platforms globally. Earn yield by lending to industrial buyers and institutional borrowers through protocols. Use silver as collateral for stablecoin loans without selling. Trade across Ethereum, Polygon, Solana, Cardano, and XRP Ledger.',
  },
  {
    question: 'Why is silver demand surging in 2026?',
    answer:
      'Fifth consecutive year of supply deficit (120M oz in 2025). Industrial demand at record highs driven by solar energy (29% of demand), electric vehicles (67\u201379% more silver than ICE), and AI data centers (IT power up 5,252% since 2000). Silver Institute forecasts automotive demand growing at 3.4% CAGR through 2031. Solar manufacturers will require over 20% of annual silver supply by 2027. Supply is price-inelastic \u2014 75% mined as by-product.',
  },
  {
    question: 'What are the storage fees?',
    answer:
      'For 1:1 Silver Bullion Tokens: No storage fees. Custody costs are eliminated by blockchain technology. For Silver Vault Certificates: 0.15% annually, paid automatically via smart contract. Significantly lower than traditional vault storage fees (typically 0.5\u20131% annually).',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to stay updated on launch announcements. Industrial buyers, institutional investors, and high net worth individuals can reach out for early allocation and partnership discussions. Registration opens Q2 2026.',
  },
];

export default function TokenizedSilverPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Silver | Digital Silver Backed by Physical Bullion | Toto Finance"
        description="Tokenized silver by Toto Finance. 1:1 asset-backed silver bullion tokens, always redeemable. Industrial demand at record highs."
        url="https://totofinance.co/tokenized-silver"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Silver', item: 'https://totofinance.co/tokenized-silver' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/20">
                The Dual-Purpose Asset
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Silver
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Silver has surged past $60/oz in 2025, more than doubling in value as the world faces its fifth consecutive year of supply deficit. Industrial demand hit record highs driven by solar energy, electric vehicles, and AI data centers. Toto Finance is building the infrastructure to tokenize physical silver bullion &mdash; 1:1 redeemable tokens backed by allocated bars in insured vaults &mdash; with instant stablecoin settlement and DeFi secondary markets.
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

      {/* ===================== FOLD 2: TICKER + THE SILVER SURGE ===================== */}
      <SilverTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Silver Surge</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Silver Is the Next Generation Metal
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Silver more than doubled in 2025, breaking its 1980 all-time high and reaching $64/oz following record demand from solar energy, electric vehicles, and AI infrastructure. The world is in its fifth consecutive year of supply deficit &mdash; 120 million ounces in 2025 alone. This is not a cyclical commodity rally. It is a structural transformation driven by the clean energy transition and digital economy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Crisis Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">120M oz</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Supply Deficit (5th Consecutive Year)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The silver market faces a 120 million ounce deficit in 2025 &mdash; the fifth consecutive year of structural shortage. Metal Focus forecasts the deficit continuing into 2026 at 30.5 million ounces. Silver mine production has decreased over the past decade, with approximately 75% mined as a by-product of other metals. Supply is price-inelastic. Aboveground stocks are running dry.
              </p>
            </div>
            {/* Crisis Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">29%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Solar Panel Demand Share</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Solar photovoltaics accounted for 29% of silver demand in 2024, up from just 11% in 2014. Silver is the best conductor of electricity at room temperature, making it essential for solar panels. Each panel contains about 0.64 ounces of silver. In the first half of 2025 alone, over 700 million solar panels were installed globally. The EU aims to deliver 700 gigawatts of solar capacity by 2030.
              </p>
            </div>
            {/* Crisis Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">3.4%</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Automotive Silver Demand CAGR (2025&ndash;2031)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Silver Institute forecasts global automotive silver demand to increase at a 3.4% compound annual growth rate between 2025 and 2031. Electric vehicles use 67&ndash;79% more silver than internal combustion vehicles. By 2027, EVs will overtake ICE vehicles as the primary source of automotive silver demand, reaching 59% of the market by 2031.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: INDUSTRIAL DEMAND DRIVERS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Industrial Revolution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Solar, EVs, and AI Are Devouring Silver
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Silver&apos;s superior electrical and thermal conductivity properties are increasingly essential to the technological transformation driving the global economy. Three sectors &mdash; solar energy, electric vehicles, and AI data centers &mdash; are creating price-inelastic demand for silver. Running out of supply is not an option for manufacturers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Demand Fact 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Solar Energy Explosion</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global solar capacity added 380 gigawatts in the first half of 2025 alone &mdash; a 64% rise from H1 2024. China installed more solar panels than the rest of the world combined. The EU mandates solar energy integration in new buildings starting in 2026. Solar manufacturers will likely require over 20% of current annual silver supply by 2027. By 2050, solar panel production will use approximately 85&ndash;98% of current global silver reserves.
              </p>
            </div>
            {/* Demand Fact 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Electric Vehicle Revolution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                In 2026, Gartner forecasts the number of EVs on roads will rise by 30% to a total of 116 million vehicles. Each battery-electric vehicle uses approximately 25&ndash;50 grams of silver (67&ndash;79% more than ICE vehicles) across battery management systems, power electronics, charging infrastructure, and electrical contacts. By 2027, EVs will overtake internal combustion vehicles as the primary source of automotive silver demand.
              </p>
            </div>
            {/* Demand Fact 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">AI &amp; Data Center Buildout</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Total global IT power capacity increased by approximately 53 times, from 0.93 GW in 2000 to nearly 50 GW in 2025 &mdash; a 5,252% increase. Silver&apos;s unmatched electrical conductivity makes it essential for semiconductors, which are expected to consume 23 million ounces of silver by 2030. Governments worldwide are prioritizing data centers as critical infrastructure.
              </p>
            </div>
            {/* Demand Fact 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Price-Inelastic Industrial Demand</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For manufacturers of solar panels, electric vehicles, and AI data centers, silver is essential but represents a relatively small share of total production costs. Even at $60/oz, industrial demand continues growing. The Silver Institute projects industrial demand will rise through 2030. Substitution is difficult &mdash; silver&apos;s combination of electrical conductivity, thermal conductivity, and corrosion resistance is unmatched.
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Silver Industrial Demand by Sector (2014&ndash;2031F)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">2014</p>
                <p className="text-sm text-gray-700">Solar <strong>11%</strong></p>
                <p className="text-sm text-gray-700">Auto <strong>8%</strong></p>
                <p className="text-sm text-gray-700">Electronics <strong>15%</strong></p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">2024</p>
                <p className="text-sm text-gray-700">Solar <strong>29%</strong></p>
                <p className="text-sm text-gray-700">Auto <strong>12%</strong></p>
                <p className="text-sm text-gray-700">Electronics <strong>14%</strong></p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-600 mb-2">2027F</p>
                <p className="text-sm text-gray-700">Solar <strong>32%</strong></p>
                <p className="text-sm text-gray-700">Auto <strong>15%</strong></p>
                <p className="text-sm text-gray-700">Electronics <strong>14%</strong></p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-600 mb-2">2031F</p>
                <p className="text-sm text-gray-700">Solar <strong>35%</strong></p>
                <p className="text-sm text-gray-700">Auto <strong>18%</strong></p>
                <p className="text-sm text-gray-700">Electronics <strong>14%</strong></p>
              </div>
            </div>
            <p className="text-xs text-gray-400">Sources: Silver Institute, Oxford Economics, Metal Focus, Gartner.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: VAULT NETWORK ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Vault Network</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Silver Is Stored
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance partners with the world&apos;s leading secure logistics and vault operators. All silver is stored in tier-1 facilities with full insurance, independent audits, and continuous surveillance. Every bar is allocated, serialized, and tracked on-chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'Switzerland', desc: 'Swiss vault facilities with maximum security standards. Zurich and Geneva locations offering the highest level of precious metals storage. Third-party audited monthly with published bar lists.' },
              { region: 'United Kingdom', desc: 'London vaults storing LBMA Good Delivery silver bars. Direct access to the world\u2019s largest silver trading hub. Tier-1 security with continuous monitoring.' },
              { region: 'Singapore', desc: 'Singapore Freeport and secure vault facilities in the world\u2019s leading Asian precious metals hub. Tax-efficient storage with international settlement capabilities.' },
              { region: 'United States & Canada', desc: 'North American vault network including Delaware Depository, Brink\u2019s, and Canadian facilities. COMEX-grade security standards with continuous surveillance.' },
              { region: 'United Arab Emirates', desc: 'Dubai vault facilities serving Middle East and international clients. Strategic location for global silver flows. Full insurance coverage and independent audit verification.' },
              { region: 'Australia', desc: 'Perth Mint and secure vault facilities in Australia. Asia-Pacific storage options with government backing. Third-party audited with published assay certificates.' },
            ].map((vault, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{vault.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{vault.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Every bar is allocated and serialized.</strong> Toto Finance does not operate fractional reserve systems or unallocated silver schemes. Each token represents a specific quantity of physical silver with verified serial numbers and refinery certificates. Full transparency from refinery to vault.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Silver Works
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
            Everything About Tokenized Silver
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized silver, vault custody, instant settlement, physical redemption, and DeFi secondary markets on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <SilverFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Industrial Revolution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Silver Is Breaking Records. Own It On-Chain.
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Silver more than doubled in 2025, breaking its 1980 all-time high. The market faces a 120 million ounce deficit &mdash; the fifth consecutive year of structural shortage. Industrial demand hit record highs as solar, EVs, and AI devour supply. Toto Finance is building the platform to tokenize silver &mdash; from 1:1 allocated bars to fractional vault certificates &mdash; with instant stablecoin settlement and DeFi integration.
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
