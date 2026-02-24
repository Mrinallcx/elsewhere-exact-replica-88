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
const GoldTickerBar = dynamicImport(
  () => import('../components/client/GoldTickerBar').then((mod) => ({ default: mod.GoldTickerBar }))
);
const GoldFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ })),
  { ssr: true }
);

// FAQ Data
const faqData = [
  {
    question: 'What is tokenized gold?',
    answer:
      'Tokenized gold is a blockchain-based digital asset backed 1:1 by allocated physical gold bars stored in tier-1 insured vault facilities. Each token represents a specific quantity of gold with verified bar serial numbers, refinery certificates, and full chain of custody. Always redeemable for physical gold delivery. Toto Finance is building this with instant stablecoin settlement and DeFi integration.',
  },
  {
    question: 'How is gold stored and secured?',
    answer:
      'All gold is stored in tier-1 vault facilities operated by Loomis, Brink\u2019s, Swiss vaults, and Singapore Freeport. Every bar is allocated (not pooled), serialized, and independently audited monthly. Full insurance coverage with Lloyd\u2019s of London and specialist precious metals insurers. Same security standards used by central banks.',
  },
  {
    question: 'Can I redeem tokens for physical gold?',
    answer:
      'Yes. Tokens are always redeemable for physical gold delivery to any location globally. Minimum 100 grams for delivery. Partner with Brink\u2019s, Loomis, and Malca-Amit for secure insured logistics. Redemption process takes 2\u20137 business days. Full chain of custody documentation provided with each delivery.',
  },
  {
    question: 'Who buys tokenized gold?',
    answer:
      'Three categories: (1) Institutional investors \u2014 central banks, sovereign wealth funds, pension funds, insurance companies, hedge funds, and family offices. (2) High net worth and retail investors seeking fractional gold ownership without storage costs. (3) Crypto-native participants \u2014 protocol treasuries, DeFi protocols, digital asset funds, and DAOs diversifying into safe-haven assets.',
  },
  {
    question: 'How does instant settlement work?',
    answer:
      'T+0 settlement using USDC, USDT, or USAT stablecoins. Send stablecoins, receive gold tokens instantly to your wallet. Blockchain settlement eliminates banks, clearing houses, and 2\u20135 day waiting periods. Like Amazon for gold \u2014 instant digital ownership of physical assets.',
  },
  {
    question: 'Can I trade tokenized gold on DeFi platforms?',
    answer:
      'Yes. Once purchased, tokenized gold trades 24/7 on DeFi platforms globally. Earn yield by lending to institutional borrowers through protocols. Use gold as collateral for stablecoin loans without selling. Trade across Ethereum, Polygon, Solana, Cardano, and XRP Ledger.',
  },
  {
    question: 'Why is gold demand surging in 2026?',
    answer:
      'Central banks purchased 863 tonnes in 2025 despite record high prices, with 755\u2013800 tonnes expected in 2026. Global gold demand exceeded 5,000 tonnes for the first time, with total value reaching $555 billion. Gold set 53 all-time highs in 2025, averaging $3,431/oz. J.P. Morgan forecasts $5,000/oz by Q4 2026. Geopolitical uncertainty, currency diversification, and safe-haven demand continue accelerating.',
  },
  {
    question: 'What are the storage fees?',
    answer:
      'For 1:1 Gold Bullion Tokens: No storage fees. Custody costs are eliminated by blockchain technology. For Gold Vault Certificates: 0.12% annually, paid automatically via smart contract. Significantly lower than traditional vault storage fees (typically 0.5\u20131% annually).',
  },
  {
    question: 'How can I get early access?',
    answer:
      'Visit totofinance.co to stay updated on launch announcements. Institutional investors and high net worth individuals can reach out for early allocation and partnership discussions. Registration opens Q2 2026.',
  },
];

export default function TokenizedGoldPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Tokenized Gold | Digital Gold Backed by Physical Bullion | Toto Finance"
        description="Tokenized gold by Toto Finance. 1:1 asset-backed gold bullion tokens, always redeemable. 863 tonnes central bank buying in 2025."
        url="https://totofinance.co/tokenized-gold"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'Tokenized Gold', item: 'https://totofinance.co/tokenized-gold' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== FOLD 1: HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-yellow-900 via-yellow-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
              <span className="inline-block bg-white/10 text-yellow-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-yellow-400/30">
                The Ultimate Safe-Haven Asset
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                Tokenized Gold
              </h1>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                The world&apos;s most trusted store of value is now accessible on-chain. Gold set 53 new all-time highs in 2025, surging past $4,135/oz as central banks purchased 863 tonnes and investors poured $555 billion into the metal. Toto Finance is building the infrastructure to tokenize physical gold bullion &mdash; 1:1 redeemable tokens backed by allocated bars in insured vaults &mdash; with instant stablecoin settlement and DeFi secondary markets.
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

      {/* ===================== FOLD 2: TICKER + THE GOLD RESURGENCE ===================== */}
      <GoldTickerBar />

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Gold Resurgence</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Why Gold Is Reclaiming Its Role as the Ultimate Safe Haven
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Gold set 53 new all-time highs in 2025, averaging $3,431/oz for the year &mdash; a 44% increase year-over-year. Central banks are buying at unprecedented levels, purchasing 863 tonnes despite record high prices. Investors are diversifying away from traditional assets amid geopolitical uncertainty, currency devaluation fears, and structural shifts in the global monetary system. This is not a cyclical trend. It is a fundamental realignment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Crisis Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">863 tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Central Bank Buying</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Central banks purchased 863 tonnes of gold in 2025, reaching the upper end of expected range despite record high prices. Poland added 102 tonnes (largest buyer), Kazakhstan added 57 tonnes (record level), and Brazil re-entered the market with 43 tonnes. This sustained institutional demand reflects long-term reserve diversification strategies and reduced reliance on USD-denominated assets.
              </p>
            </div>
            {/* Crisis Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">5,000+ tonnes</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2025 Total Gold Demand Record</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Total global gold demand exceeded 5,000 tonnes for the first time in 2025, with total value reaching a record $555 billion (up 45% year-over-year). Investment demand led the surge with 801 tonnes in ETF inflows (second-strongest annual increase on record) and bar and coin demand reaching a 12-year high. Q4 alone saw 1,303 tonnes of demand &mdash; the highest ever recorded for a fourth quarter.
              </p>
            </div>
            {/* Crisis Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-4xl md:text-5xl font-light text-gray-900 mb-3">$5,000/oz</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2026 Price Forecast</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                J.P. Morgan forecasts gold to average $5,055/oz by Q4 2026, rising toward $5,400/oz by end of 2027. Goldman Sachs targets $4,900, while Bank of America sees gold breaching $5,000 in 2026. The consensus among major institutions targets $4,800&ndash;$5,000/oz by year-end 2026, driven by continued central bank buying, investor diversification, and geopolitical uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOLD 3: CENTRAL BANK DEMAND + TECHNOLOGY APPLICATIONS ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Institutional Demand</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Central Banks Are Leading the Gold Accumulation
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Central banks are diversifying foreign exchange reserves at an accelerating pace, purchasing 863 tonnes in 2025 despite elevated gold prices. With approximately 755&ndash;800 tonnes of purchases expected in 2026 &mdash; equivalent to 26% of annual mine output &mdash; institutional demand remains a structural anchor. Poland targets 700 tonnes total, China exceeded 2,300 tonnes, and emerging markets lead the global shift away from USD reserves. The World Gold Council survey shows 95% of central bankers expect global gold reserves to increase in the next 12 months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Demand Fact 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm0 0h18" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Reserve Diversification Accelerating</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Central banks worldwide are reducing dollar exposure and increasing gold allocations as a geopolitically neutral reserve asset. Poland&apos;s National Bank added 102 tonnes in 2025 and announced plans to reach 700 tonnes for &ldquo;national security reasons.&rdquo; Kazakhstan purchased 57 tonnes (record level since 1993). Brazil re-entered the market after four years, adding 43 tonnes in just three months. Gold now accounts for 28% of Poland&apos;s reserves, approaching its 30% target.
              </p>
            </div>
            {/* Demand Fact 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Technology &amp; AI Applications</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gold demand from the technology sector remained stable at 323 tonnes in 2025, supported by continued growth in AI-related applications. The AI boom increased demand for high-speed computing and data center infrastructure, where gold is used in connectors, bonding wires, and circuit boards. Despite rising prices pushing manufacturers toward thrifting and substitution research, AI infrastructure demand provided stable baseline support.
              </p>
            </div>
            {/* Demand Fact 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">ETF &amp; Retail Inflows Surging</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Global gold ETFs recorded net inflows of 801 tonnes in 2025 &mdash; the second-strongest annual increase on record &mdash; reversing years of subdued ETF participation. North American retail-focused ETFs saw inflows equivalent to over 280 tonnes in Q4 alone, eclipsing quarterly central bank demand. Bar and coin demand accelerated to a 12-year high as retail and high-net-worth investors sought safe-haven exposure amid persistent geopolitical tensions.
              </p>
            </div>
            {/* Demand Fact 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Portfolio Diversification Benefits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gold provided significant portfolio diversification benefits in 2025, showing low correlations with other major asset classes. This was particularly evident during market declines in April following tariff announcements. Gold&apos;s share of total global financial assets increased to 2.8% by Q3 2025, up from lower levels in 2010. Analysts at Bank of America noted gold may be one of the strongest hedges if the AI bubble bursts.
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Gold Price Performance &amp; Central Bank Buying (2022&ndash;2027F)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              {[
                { year: '2022', avg: '$1,800/oz', cb: '1,080+ tonnes' },
                { year: '2023', avg: '$1,940/oz', cb: '1,030+ tonnes' },
                { year: '2024', avg: '$2,392/oz', cb: '1,037 tonnes' },
                { year: '2025', avg: '$3,431/oz', cb: '863 tonnes' },
                { year: '2026F', avg: '$5,000/oz', cb: '755-800 tonnes' },
                { year: '2027F', avg: '$5,400/oz', cb: '700-750 tonnes' },
              ].map((d, i) => (
                <div key={i} className={`text-center p-4 rounded-xl ${i >= 4 ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                  <p className={`text-sm mb-2 ${i >= 4 ? 'text-yellow-700 font-medium' : 'text-gray-500'}`}>{d.year}</p>
                  <p className="text-sm font-semibold text-gray-900">{d.avg}</p>
                  <p className="text-xs text-gray-500 mt-1">CB: {d.cb}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">Sources: World Gold Council, J.P. Morgan, LBMA, Goldman Sachs, Bank of America.</p>
          </div>
        </div>
      </section>

      

      {/* ===================== FOLD 5: VAULT NETWORK ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Vault Network</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Where the Gold Is Stored
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance partners with the world&apos;s leading secure logistics and vault operators. All gold is stored in tier-1 facilities with full insurance, independent audits, and continuous surveillance. Every bar is allocated, serialized, and tracked on-chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { region: 'Switzerland', desc: 'Swiss vault facilities with maximum security standards. Zurich and Geneva locations offering the highest level of precious metals storage. Full sovereign protection and regulatory oversight. Third-party audited monthly with published bar lists.' },
              { region: 'United Kingdom', desc: 'London vaults storing LBMA Good Delivery bars. Direct access to the world\u2019s largest gold trading hub. Tier-1 security with continuous monitoring. Independent audit reports published quarterly.' },
              { region: 'Singapore', desc: 'Singapore Freeport and secure vault facilities in the world\u2019s leading Asian precious metals hub. Tax-efficient storage with international settlement capabilities. Full insurance and independent verification.' },
              { region: 'United States & Canada', desc: 'North American vault network including Delaware Depository, Brink\u2019s, and Canadian facilities. Domestic storage options for US and Canadian investors. COMEX-grade security standards with continuous surveillance.' },
              { region: 'United Arab Emirates', desc: 'Dubai vault facilities serving Middle East and international clients. Strategic location for global gold flows. Full insurance coverage and independent audit verification.' },
              { region: 'Australia', desc: 'Perth Mint and secure vault facilities in Australia. Asia-Pacific storage options with government backing. Third-party audited with published assay certificates and bar serial numbers.' },
            ].map((vault, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{vault.region}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{vault.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              <strong>Every bar is allocated and serialized.</strong> Toto Finance does not operate fractional reserve systems or unallocated gold schemes. Each token represents a specific quantity of physical gold with verified serial numbers and refinery certificates. Full transparency from refinery to vault.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS CTA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            How Tokenized Gold Works
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
            Everything About Tokenized Gold
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            Common questions about tokenized gold, vault custody, instant settlement, physical redemption, and DeFi secondary markets on Toto Finance.
          </p>
          <FAQStructuredData faqs={faqData} />
          <GoldFAQ faqs={faqData} />
        </div>
      </section>

      {/* ===================== FOLD 7B: FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-yellow-900 via-yellow-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Digital Gold Rush</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Gold Is Breaking Records. Own It On-Chain.
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Gold set 53 all-time highs in 2025 and surpassed 5,000 tonnes in global demand for the first time. Central banks purchased 863 tonnes. Investment demand reached $555 billion. J.P. Morgan forecasts $5,000/oz by Q4 2026. Toto Finance is building the platform to tokenize gold &mdash; from 1:1 allocated bars to fractional vault certificates &mdash; with instant stablecoin settlement and DeFi integration.
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
