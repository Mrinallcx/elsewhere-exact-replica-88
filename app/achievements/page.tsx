// Server Component (NO "use client")
// Static Generation with ISR - equivalent to getStaticProps with revalidate: 60
export const revalidate = 60;

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

// Equivalent to getStaticProps - fetch data here
export default async function AchievementsPage() {
  // Example: Fetch achievements data from API if available
  // const achievements = await fetch('https://api.example.com/achievements', {
  //   next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  // }).then(res => res.json());
  
  // For now, using static data
  return (
    <div className="min-h-screen w-full relative">
      {/* Structured Data */}
      <PageStructuredData
        title="Achievements & Milestones | Industry Firsts in RWA Tokenization | Toto Finance"
        description="Toto Finance achievements: First RWA on Cardano, XRP Ledger & Solana. 30,000+ tokenized assets. MiCA-compliant."
        url="https://totofinance.co/achievements"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Achievements', item: 'https://totofinance.co/achievements' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Achievements', item: 'https://totofinance.co/achievements' },
        ]}
      />
      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Toto Finance &middot; Formerly Tiamonds</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
            Achievements, Firsts<br className="hidden md:block" /> &amp; Milestones
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
            A track record of industry firsts in real-world asset tokenization across multiple blockchains. Over 30,000 tokenized assets issued, the world&apos;s largest tokenized asset marketplace, and recognized as a pioneer in commodity tokenization under Liechtenstein&apos;s TVTG regulatory framework.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">30,000+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Tokenized Assets</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">5+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Blockchains</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">20,000+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Diamonds Listed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-white">MiCA</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Compliant</p>
            </div>
          </div>

          {/* Achievement Navigation Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {[
              { num: 'I', title: 'Largest RWA Marketplace', tag: '30,000+ Real Assets', id: 'milestone-1' },
              { num: 'II', title: '$1.2M Diamond Tokenized ', tag: '10-Carat D Flawless', id: 'milestone-2' },
              { num: 'III', title: 'MiCA ESMA Registered', tag: 'EU Compliance', id: 'milestone-3' },
              { num: 'IV', title: 'Cardano Grant Winner ', tag: 'Fund 12', id: 'milestone-4' },
              { num: 'V', title: 'Gold, Silver & Platinum', tag: 'Precious Metals', id: 'milestone-5' },
              { num: 'VI', title: 'Cardano First Tokenized Diamonds', tag: 'Via NMKR', id: 'milestone-6' },
              { num: 'VII', title: 'Solana’s First Tokenized Diamonds', tag: 'Via OREMOB', id: 'milestone-7' },
              { num: 'VIII', title: 'First RWA on XRPL', tag: 'Via xrp.cafe', id: 'milestone-8' },
              { num: 'IX', title: 'First Tokenized Sapphires ', tag: 'Ever on Blockchain', id: 'milestone-9' },
              { num: 'X', title: 'Polygon’s First Tokenized Diamonds ', tag: 'Via Polytrade', id: 'milestone-10' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-yellow-500/30 rounded-xl p-4 text-center transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-2.5 rounded-full border border-yellow-500/40 flex items-center justify-center">
                  <span className="text-yellow-400 text-xs font-bold">{item.num}</span>
                </div>
                <p className="text-[13px] font-medium text-white leading-tight mb-1 group-hover:text-yellow-50 transition-colors">{item.title}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">{item.tag}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ALL MILESTONES 1-10 ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Industry Firsts &amp; Milestones</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
            Pioneering Firsts in RWA Tokenization
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mb-16">
            From Cardano to XRP Ledger to Solana, Toto Finance has consistently been the first to bring real-world assets on-chain across major blockchain ecosystems.
          </p>

          <div className="divide-y divide-gray-200">
            {/* Milestone 1 */}
            <div id="milestone-1" className="py-10 md:py-12 first:pt-0 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">30,000+ Assets</span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">World Record</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Largest Tokenized Asset Marketplace in the World</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance operates the world&apos;s largest tokenized real-world asset marketplace, with over 30,000 individual assets issued on-chain. Spanning certified diamonds, sapphires, gold, silver, platinum, and other physical commodities, each asset is 1:1 backed by a real-world item held in insured, audited custody. Operating under Liechtenstein&apos;s TVTG regulatory framework and EU MiCA compliance, this marketplace represents the most extensive and regulated RWA ecosystem ever built on blockchain – featured alongside JPMorgan, BlackRock, and Goldman Sachs in Plume Network&apos;s RWA market report.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://plumenetwork.xyz/blog/plumeberg-6-2025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Plumeberg RWA Report <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://cryptorank.io/news/feed/d31af-cardano-pushes-forward-in-rwa-tokenization-genius" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">CryptoRank Coverage <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://bitcourier.co.uk/blog/tiamonds-review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">BitCourier Review <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 2 */}
            <div id="milestone-2" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">10CT D Flawless</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">GIA Certified</span>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Lloyd&apos;s Insured</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Most Valuable Diamond Ever Tokenized on Blockchain</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance tokenized the most valuable diamond in blockchain history – a 10-carat, D Flawless diamond valued at $1.2 million. D color represents absolute colorlessness, the highest grading possible. Flawless (FL) clarity means zero internal or external imperfections under any magnification. GIA-certified and secured in a Liechtenstein vault insured by Lloyd&apos;s of London, this landmark tokenization was covered by Yahoo Finance and distributed via Globe Newswire – demonstrating that institutional-grade luxury assets can be transparently owned and traded on blockchain.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://finance.yahoo.com/news/tiamonds-landmark-launch-unmissable-1-010000749.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Yahoo Finance <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://www.globenewswire.com/news-release/2023/10/06/2755872/0/en/Tiamonds-Landmark-Launch-The-Unmissable-1-2M-10-Carat-D-Flawless-Diamond.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Globe Newswire <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://blog.totofinance.co/tiamonds-sets-the-bar-1-2-million-10-carat-tokenized-diamond/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Toto Finance Blog <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 3 */}
            <div id="milestone-3" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">EU Compliance</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">MiCA</span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">ESMA</span>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">TVTG</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">MiCA ESMA Registered – Built for Institutional Trust</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance is registered and compliant under the EU&apos;s Markets in Crypto-Assets (MiCA) regulation – administered by ESMA (European Securities and Markets Authority). This makes Toto Finance one of a very small number of RWA tokenization platforms operating within a fully recognized, enforceable European regulatory framework. Combined with Liechtenstein&apos;s TVTG blockchain law – under which LCX serves as a licensed Physical Validator – Toto Finance offers investors one of the most legally robust and transparent ownership structures in the entire digital asset space. For institutional investors and regulated entities, this is the standard that matters.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://blockchainwire.io/press-release/toto-finance-debuts-new-brand-and-platform-for-tokenization-of-commodities-and-real-world-assets" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">BlockchainWire <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://tiamonds.s3.us-east-1.amazonaws.com/website/Tiamonds+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">MiCA Whitepaper <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://hacken.io/audits/tiamonds/sca-tiamonds-toto-contracts-jan2025/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Hacken Audit <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 4 */}
            <div id="milestone-4" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Cardano</span>
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Fund 12</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Community Validated</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Cardano Project Catalyst Fund 12 Grant Winner</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance was selected as a Fund 12 winner through Cardano&apos;s community-governed Catalyst program – one of the most competitive decentralized grant programs in the blockchain industry. The grant recognized Toto Finance&apos;s contribution to real-world asset infrastructure, on-chain compliance, and the expansion of Cardano&apos;s RWA ecosystem. This milestone validates not just technical innovation, but the trust placed by the Cardano community in Toto Finance&apos;s long-term vision for tokenized commodities and real-world asset accessibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://projectcatalyst.io/funds/12/cardano-use-cases-concept/cardano-powered-rwa-tokenization-for-real-world-diamonds" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Cardano Catalyst <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://cryptorank.io/news/feed/d31af-cardano-pushes-forward-in-rwa-tokenization-genius" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">CryptoRank <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 5 */}
            <div id="milestone-5" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Precious Metals</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Gold</span>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Silver</span>
                <span className="inline-block bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Platinum</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">Tokenized Gold, Silver &amp; Platinum – On-Chain Precious Metals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance expanded its tokenization infrastructure beyond gemstones to include the world&apos;s most trusted store-of-value assets – gold, silver, and platinum. Each tokenized metal is physically held in audited, insured custody with on-chain proof-of-reserves, oracle price feeds, and full redemption rights. This expansion positions Toto Finance as a comprehensive commodity tokenization platform, giving global investors compliant, borderless, 24/7 access to precious metals – without brokers, intermediaries, delays, or geographic restrictions.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://blockchainwire.io/press-release/toto-finance-debuts-new-brand-and-platform-for-tokenization-of-commodities-and-real-world-assets" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">BlockchainWire <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://blockchainreporter.net/toto-finance-brings-real-world-assets-on-chain-with-rwa-tokenization" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Blockchain Reporter <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://www.mexc.com/news/365939" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">MEXC Coverage <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 6 */}
            <div id="milestone-6" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Cardano</span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Blockchain First</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">First Ever Tokenized Diamonds on Cardano</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                World&apos;s first real-world diamonds tokenized on the Cardano blockchain. Launched at Cardano Summit 2023 in partnership with NMKR, Toto Finance (formerly Tiamonds) debuted 34 diamond NFTs – each backed 1:1 by a certified physical diamond stored in an insured Liechtenstein vault. The collection sold out within 48 hours. A giveaway of 10 diamond NFTs was distributed to Summit attendees via 1,000 QR codes. A follow-up batch of 15 diamonds also sold out within hours, followed by an 11-day daily drop series – establishing Toto Finance as the undisputed pioneer of gemstone tokenization on Cardano.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">EMURGO Case Study <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://www.jpg.store/collection/tiamondsxnmkr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">JPG Store <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://www.nmkr.io/clients/nmkr-x-tiamonds" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">NMKR Partnership <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://blog.tiamonds.com/world-first-real-world-diamonds-tokenized-on-cardano/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Tiamonds Blog <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://www.nmkr.io/drops/tiamonds-2023" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Collection <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 7 */}
            <div id="milestone-7" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mr-2">Solana</span>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mr-2">Blockchain First</span>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Multi-Chain RWA</span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">First Ever Tokenized Diamonds on Solana</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance extended its multi-chain RWA infrastructure to Solana, becoming the first platform to bring certified, vault-stored, insured physical diamonds on-chain within the Solana ecosystem. Each diamond NFT was backed 1:1 by a GIA-certified physical diamond, stored in an insured Liechtenstein vault and verified by LCX. This milestone made Toto Finance the only RWA project to have launched regulated, asset-backed tokenized diamonds across multiple major blockchain networks – each with live sales, verified custody, and institutional-grade compliance infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://tiamonds.oremob.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Collection <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://x.com/totofinance/status/1846622409400766932?s=20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Announcements <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 8 */}
            <div id="milestone-8" className="py-10 md:py-12 scroll-mt-24">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mr-2">XRP Ledger</span>
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Blockchain First</span>
              </div> 
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">First Ever RWA on the XRP Ledger</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              Toto Finance became the first project to bring a real-world asset onto the XRP Ledger ecosystem – minting certified, physical diamond-backed NFTs via xrp.cafe, the leading NFT marketplace on XRPL. Each diamond was non-conflict-zone sourced, verified by LCX and GIA, and insured by Lloyd's of London. A follow-up themed collection – "Tiamond Delights" (Chocolate Collection) – added 10 uniquely themed diamond NFTs on XRPL, further cementing Toto Finance's position as a cross-chain RWA pioneer. Referenced by Messari in their ecosystem research on the XRP Ledger.             </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://xrp.cafe/collection/tiamonds-rwa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Collection <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://messari.io/copilot/share/understanding-xrp-cafe-8eeb408d-98ac-4c50-9dd1-c55f6e62bafe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Messari Research <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>

            {/* Milestone 9 */}
            <div id="milestone-9" className="py-10 md:py-12 scroll-mt-24">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 mr-2">Gemstones</span>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mr-2">World First</span>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">New Asset Class</span>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">First Ever Tokenized Sapphires in the World</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              Beyond diamonds, Toto Finance pioneered the world's first tokenization of sapphires on blockchain – opening an entirely new gemstone asset class to global investors. Each tokenized sapphire is physically verified, vault-stored, and insured, following the same institutional-grade custody model established with diamonds. This launch marked a pivotal expansion from a single-asset platform into a full-spectrum gemstone tokenization marketplace, laying the groundwork for Toto Finance's broader commodity and real-world asset vision
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://blog.totofinance.co/introducing-tokenized-sapphires/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Blog<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                 </div>
            </div>

            {/* Milestone 10 */}
            <div id="milestone-10" className="py-10 md:py-12 last:pb-0 scroll-mt-24">
              <span className="inline-block bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 mr-2">Polygon</span>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Blockchain First</span>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">First Ever Tokenized Diamonds on Polygon</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              Toto Finance launched the first-ever tokenized diamonds on the Polygon blockchain, in partnership with Polytrade – Polygon's leading RWA marketplace. Each diamond NFT was backed 1:1 by a certified physical diamond, stored in an insured Liechtenstein vault, and verified by LCX and GIA. This milestone made Toto Finance the only RWA project in the world to have launched regulated, asset-backed tokenized diamonds across four major blockchain networks – Cardano, XRP Ledger, Solana, and Polygon – each with live sales, verified custody, and institutional-grade compliance infrastructure    </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://market.polytrade.app/asset-hub?market_place_v2_backend_prod%5BrefinementList%5D%5Bdata.protocol_name%5D%5B0%5D=Tiamonds" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Collection <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
                <a href="https://blog.totofinance.co/tiamonds-partnering-with-polytrade/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-900 px-3 py-1 rounded-full transition-colors border border-amber-200/60">Blog <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRESS & MEDIA ===================== */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Press &amp; Recognition</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12">
            Industry Research &amp; Media Coverage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { outlet: 'Yahoo Finance', title: 'Tiamonds Landmark Launch: The Unmissable $1.2M, 10-Carat, D Flawless Diamond', tag: 'Globe Newswire', link: 'https://finance.yahoo.com/news/tiamonds-landmark-launch-unmissable-1-010000749.html' },
              { outlet: 'EMURGO (Cardano)', title: 'Cardano NFT Case Study: NMKR and Tiamonds', tag: 'Case Study', link: 'https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/' },
              { outlet: 'Plumeberg News', title: 'Featured alongside JPMorgan, BlackRock, Goldman Sachs in RWA market report', tag: 'Plume Network' , link: 'https://plumenetwork.xyz/blog/plumeberg-6-2025'},
              { outlet: 'Messari', title: 'Referenced Tiamonds in "Understanding XRP.Cafe" as key RWA example on XRPL', tag: 'Research', link: 'https://messari.io/copilot/share/understanding-xrp-cafe-8eeb408d-98ac-4c50-9dd1-c55f6e62bafe'},
              { outlet: 'CryptoRank', title: 'Cardano Pushes Forward in RWA Tokenization — names Tiamonds as key initiative', tag: 'Analysis', link: 'https://cryptorank.io/news/feed/d31af-cardano-pushes-forward-in-rwa-tokenization-genius' },
              { outlet: 'BlockchainWire / CoinWagmi', title: 'Toto Finance Debuts New Brand and Platform for Tokenization of Commodities and RWA', tag: 'Nov 2025', link: 'https://blockchainwire.io/press-release/toto-finance-debuts-new-brand-and-platform-for-tokenization-of-commodities-and-real-world-assets' },
              { outlet: 'Blockchain Reporter / MEXC', title: 'Toto Finance Brings Real-World Assets On-Chain with RWA Tokenization', tag: 'Dec 2025', link: 'https://blockchainreporter.net/toto-finance-brings-real-world-assets-on-chain-with-rwa-tokenization' },
              { outlet: 'BitCourier', title: 'Tiamonds: One-Stop Shop for Tokenized Real-World Assets — Full review', tag: 'Review', link: 'https://bitcourier.co.uk/blog/tiamonds-review' },
              { outlet: 'CoinMarketCap / CoinGecko', title: 'Listed with full project profiles across major aggregators and exchanges', tag: 'Listings' , link: 'https://coinmarketcap.com/currencies/tia/'},
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-900 text-sm">{item.outlet}</p>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{item.tag}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.title}</p>
              </a>
            ))}
          </div>

          {/* Key Resources */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Key Resources</p>
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Reports, Audits &amp; Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Tokenization Report',
                  subtitle: '2025\u20132030 Market Analysis',
                  href: 'https://tiamonds.s3.us-east-1.amazonaws.com/website/Tiamonds+-+Tokenization+Report+2025-2030.pdf',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  title: 'MiCA Whitepaper',
                  subtitle: 'EU/EEA Regulatory Compliance',
                  href: 'https://tiamonds.s3.us-east-1.amazonaws.com/website/Tiamonds+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  color: 'from-indigo-500 to-indigo-600',
                },
                {
                  title: 'EMURGO Case Study',
                  subtitle: 'Cardano NFT Integration',
                  href: 'https://emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  ),
                  color: 'from-emerald-500 to-emerald-600',
                },
                {
                  title: 'Hacken Audit',
                  subtitle: 'Smart Contract Security',
                  href: 'https://hacken.io/audits/toto-finance/',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  color: 'from-orange-500 to-orange-600',
                },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} text-white flex items-center justify-center mb-4`}>
                    {link.icon}
                  </div>
                  <p className="text-base font-semibold text-gray-900 mb-1">{link.title}</p>
                  <p className="text-sm text-gray-500 mb-4">{link.subtitle}</p>
                  <span className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    View Resource
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
            Building the Future of Asset Tokenization
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            From tokenizing the first diamond on Ethereum to building the world&apos;s largest tokenized assets marketplace, Toto Finance continues to pioneer real-world asset tokenization across blockchains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Explore Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER + FOOTER ===================== */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}
