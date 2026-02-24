// Server Component (NO "use client")
export const revalidate = 86400; // ISR: regenerate every 24 hours

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function HowTokenizationWorksPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="How Tokenization Works | Toto Finance"
        description="Learn how Toto Finance enables instant settlement, DeFi trading, and institutional-grade compliance for tokenized commodities."
        url="https://totofinance.co/how-tokenization-works"
        pageType="WebPage"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Products', item: 'https://totofinance.co/products' },
          { name: 'How Tokenization Works', item: 'https://totofinance.co/how-tokenization-works' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-gray-500/30">
            Platform Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            How Tokenization Works
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
            From physical vault to digital wallet in seconds. Toto Finance eliminates intermediaries with instant stablecoin settlement, enables DeFi yield and collateral loans for commodity holders, and enforces compliance at the protocol level.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore Tokenized Assets
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===================== SECTION 1: WHO BUYS TOKENIZED COMMODITIES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Participants</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Who Buys Tokenized Commodities
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Toto Finance serves three distinct categories of buyers, each with different motivations for accessing tokenized real-world assets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 1</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Industrial &amp; Institutional Clients</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Companies and institutions that need physical commodity exposure — from central banks building gold reserves to manufacturers securing critical raw materials. Tokenization provides instant settlement, transparent custody, and programmable compliance.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Central banks, sovereign wealth funds, pension funds, insurance companies, hedge funds, family offices, automotive manufacturers, electronics producers, energy companies, and construction firms.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 2</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Investors &amp; Commodity Brokers</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Mid-size and smaller investment firms, commodity brokers, and individual investors who typically cannot access premium commodity deals at the pricing and scale that major institutions command.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Toto Finance democratizes access to institutional-grade commodity positions. Fractional ownership, no minimum tonnage requirements, no warehouse logistics, and no counterparty risk through intermediaries.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Category 3</span>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Crypto-Native Participants</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Blockchain-native organizations and investors seeking real-world asset diversification, on-chain yield, and commodity-backed collateral for DeFi strategies.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Crypto hedge funds, blockchain foundations, protocol treasuries, DeFi protocols seeking real-world collateral, crypto-native investors diversifying into commodity-backed tokens, and DAOs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: INSTANT SETTLEMENT ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Global Trade</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Instant Settlement, No Intermediaries
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Traditional commodity trading involves a chain of middlemen — brokers, banks, clearing houses, custodians, and settlement agents — that delay settlement by days or weeks and extract fees at every step. Toto Finance removes them all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Traditional Commodity Trade</h3>
              <p className="text-sm text-gray-500 mb-6">7+ Intermediaries, Days to Settle</p>
              <div className="space-y-3">
                {['Producer / Mining Company', 'Commodity Broker / Trader', 'Clearing House', 'Custodian Bank', 'Correspondent Bank', 'Settlement Agent', 'Buyer'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-500">{i + 1}</div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-red-600 font-medium">Settlement: T+2 to T+5 (or longer)</p>
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-1">Toto Finance</h3>
              <p className="text-sm text-gray-400 mb-6">Buyer &harr; Seller, Direct Match</p>
              <div className="space-y-3">
                {['Producer / Vault Operator', 'Toto Finance Platform', 'Buyer (Token in Wallet)'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold">{i + 1}</div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-green-400 font-medium">Settlement: T+0 (Instant)</p>
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Similar to how Amazon and eBay match buyers and sellers directly for physical goods, Toto Finance uses blockchain technology to connect commodity producers with buyers, eliminating banks, clearing houses, and settlement agents entirely.
              </p>
            </div>
          </div>

          {/* Stablecoins */}
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Instant Settlement with Stablecoins</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'USDC', issuer: 'Circle', desc: 'The most widely adopted dollar-backed stablecoin for institutional use. Full reserve transparency, monthly attestations, and broad DeFi integration across all major chains.' },
              { name: 'USDT', issuer: 'Tether', desc: 'The highest-liquidity stablecoin in the world with over $140 billion in circulation. The default settlement currency for global crypto trading and commodity markets.' },
              { name: 'USAT', issuer: 'Tether (US Framework)', desc: "Tether's US stablecoin under the GENIUS Act framework. Designed for compliant domestic transactions, bridging traditional finance with digital asset infrastructure." },
            ].map((coin, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">{coin.name.charAt(0)}</div>
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

      {/* ===================== SECTION 3: DeFi TRADING ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Secondary Markets</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            DeFi Trading, Yield &amp; Collateral Loans
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Once tokenized commodities are purchased on Toto Finance, secondary trading happens on DeFi platforms globally. Hold, trade, hedge, earn yield, or borrow against your assets. All on-chain. All programmable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'Global 24/7 Trading', desc: 'Tokenized commodities trade around the clock on decentralized exchanges and DeFi platforms worldwide. Buy, sell, and transfer tokens across chains without gatekeepers, brokers, or trading hour restrictions. True global liquidity.' },
              { title: 'On-Chain Yield', desc: 'Earn yield by exposing commodity assets to smart contract yield contracts. Lend tokenized assets to short sellers or leveraged traders who borrow and pay interest. Passive income backed by physical assets.' },
              { title: 'Collateral Loans', desc: 'Use tokenized commodities as collateral for on-chain loans. Borrow stablecoins against your holdings without selling the underlying asset. All managed at the protocol level — no bank approval, no credit checks, no delays.' },
              { title: 'Programmable Finance', desc: 'Smart contracts automate liquidation thresholds, interest payments, and margin requirements. Physical commodity value meets decentralized infrastructure. Collateral loans backed by tokenized assets represent a new programmable financial model.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Token Lifecycle */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">The Lifecycle of a Tokenized Commodity</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {[
                'Asset Secured & Verified',
                'Minted as On-Chain Token',
                'Purchased with Stablecoins',
                'Held, Traded or Transferred',
                'Yield, Loans or Hedging',
                'Redeemed for Physical Asset',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold mb-2">{i + 1}</div>
                    <p className="text-xs md:text-sm text-gray-700 max-w-[120px] leading-tight">{step}</p>
                  </div>
                  {i < 5 && (
                    <svg className="w-5 h-5 text-gray-300 hidden md:block mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4: COMPARISON TABLE ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Why Tokenized</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Tokenized Assets vs. Traditional Investments
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            See how tokenized commodities on Toto Finance compare to traditional ETFs, futures contracts, and physical ownership.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 md:px-6 py-4 font-medium">Feature</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Commodity ETFs</th>
                  <th className="px-4 md:px-6 py-4 font-medium bg-white/10">Toto Finance</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Physical Ownership</th>
                  <th className="px-4 md:px-6 py-4 font-medium">Futures</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ['Trading Hours', 'Market hours only', '24/7/365', 'OTC / Dealer', 'Exchange hours'],
                  ['Settlement', 'T+2', 'T+0 (Instant)', 'Days to weeks', 'T+1'],
                  ['Settlement Currency', 'Fiat (via broker)', 'USDC, USDT, USAT', 'Wire transfer', 'Fiat (via broker)'],
                  ['Physical Backing', 'Synthetic / Basket', '1:1 Asset-Backed', 'Direct ownership', 'Cash settled'],
                  ['Min. Investment', '1 share (~$50+)', 'Fractional (from $1)', '$10,000+', '$50,000+ margin'],
                  ['Physical Redemption', 'No', 'Yes', 'Yes', 'No'],
                  ['On-Chain Transparency', 'No', 'Yes', 'No', 'No'],
                  ['DeFi Yield / Loans', 'No', 'Yes', 'No', 'No'],
                  ['Storage Costs', 'Expense ratio', 'None (on-chain)', 'Vault fees', 'Roll costs'],
                  ['Intermediaries', 'Broker + Clearing', 'None (P2P)', 'Multiple', 'Broker + Exchange'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[1]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-900 font-medium bg-blue-50/50">{row[2]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[3]}</td>
                    <td className="px-4 md:px-6 py-3 text-gray-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5: PLATFORM FEATURES ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Platform</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Institutional-Grade Commodity Tokenization
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            Transparency, compliance, and programmable infrastructure embedded into every transaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Redeemable Assets', desc: 'All tokenized commodities are linked to insured vaults, warehouses, or custody facilities. Redeem tokens for physical asset delivery on demand. Verified purity, allocated holdings, and full chain of custody.' },
              { title: 'Transparent Reserves', desc: 'On-chain proof-of-reserves, real-time oracle feeds, and third-party audits ensure continuous 1:1 asset backing. Every token is verifiable on the blockchain at any time.' },
              { title: 'Instant Settlement', desc: 'T+0 settlement with USDC, USDT, and USAT eliminates counterparty risk and delays. No banks, no clearing houses, no intermediaries.' },
              { title: 'Programmable Compliance', desc: 'Smart contracts enforce KYC/AML requirements, transfer restrictions, and permissions at the protocol level. Compliance is built into the token, not bolted on.' },
              { title: 'DeFi Yield & Loans', desc: 'Earn yield through lending protocols, use commodities as collateral for on-chain loans, or hedge positions through smart contracts. Programmable finance for physical assets.' },
              { title: 'Multi-Chain Access', desc: 'Tokenized commodities are accessible across Ethereum, Polygon, Cardano, Solana, and XRP Ledger. Trade on the chain that works best for your strategy.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPLORE ASSETS CTA ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Explore Tokenized Assets
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            From gold and silver to rare earth minerals and energy — explore the full range of tokenized commodities available on Toto Finance.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            View All Assets
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
