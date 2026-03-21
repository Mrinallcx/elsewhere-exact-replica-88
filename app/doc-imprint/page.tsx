// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function DocImprintPage() {

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Legal Information & Imprint | Toto Finance"
        description="Legal information, company details, and imprint for Toto Finance Inc. A corporation incorporated in the United States of America."
        url="https://totofinance.co/doc-imprint"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Legal Information & Imprint', item: 'https://totofinance.co/doc-imprint' },
        ]}
      />
      
      {/* Breadcrumb Structured Data */}
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Legal Information', item: 'https://totofinance.co/doc-imprint' },
        ]}
      />
      
      {/* Gradual Blur Effect */}
      <GradualBlur 
        preset="page-footer" 
        strength={2} 
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />
      
      {/* Navigation */}
      <Navigation pastHero={true} />

      {/* Feature Boxes Section */}
      <section className="feature-boxes-section px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Official Publications & Resources
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Tokenization Report 2025-2030 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Tokenization Report 2025&ndash;2030</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Independent research published in December 2025 analyzing the impact of tokenization on the commodities
                markets, capital markets, and the digital transformation of real-world value.
              </p>
              <a 
                href="https://toto-finance.s3.us-east-1.amazonaws.com/Updated%2BTokenization%2BReport.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View Report
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 2. MiCA-Compliant Whitepaper */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">MiCA-Compliant Whitepaper</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The official regulatory whitepaper describing Toto Finance&apos;s infrastructure, tokenization framework,
                governance structure, and regulatory compliance framework in accordance with relevant MiCA and
                international regulations.
              </p>
              <a 
                href="https://toto-finance.s3.us-east-1.amazonaws.com/Toto+Finance+-+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 3. Total Tokenization: Global Vision & Architecture */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Total Tokenization: Global Vision & Architecture</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The international whitepaper of Toto Finance, describing the global vision of Total Tokenization,
                including platform architecture, asset coverage, settlement layers, and the design of programmable
                real-world assets on a global scale.
              </p>
              <a 
                href="https://toto-finance.s3.us-east-1.amazonaws.com/Toto+Finance+-+TOTO+White+Paper+-+International+Edition.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 4. The Future of Asset Tokenization */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">The Future of Asset Tokenization</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A strategic research report published on the occasion of the first Crypto Summit in Washington, D.C.
                (March 7, 2025), analyzing the impact of blockchain infrastructure on global markets by 2030, financial
                infrastructure, and real-world asset distribution.
              </p>
              <a 
                href="https://toto-finance.s3.us-east-1.amazonaws.com/Tokenization%2BReport%2B2025-2030.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View Report
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 5. Cardano Foundation Case Study: Toto Finance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Cardano Foundation Case Study: Toto Finance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A published institutional case study by the Cardano Foundation analyzing Toto Finance&apos;s approach to
                real-world asset tokenization as an infrastructure and engineering problem, rather than a speculative
                one, focusing on security, verification, and production-level implementation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://cardanofoundation.org/toto-finance-case-study.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="https://cardanofoundation.org/case-studies/toto-finance" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200 text-sm"
                >
                  View on Cardano Foundation
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 6. Media Kit */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Media Kit</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Official Toto Finance logos, brand assets, and approved media resources for partners, media, and
                third-party use.
              </p>
              <a 
                href="https://www.notion.so/Toto-Finance-Media-Kit-2d1797abde9e803fb0f0c0eed0d72f97" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View Media Kit
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-white">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
            Legal Information
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Legal Entity</h3>
              <p className="text-gray-600 leading-relaxed">
                Toto Finance Inc.<br />
                A corporation incorporated in the United States of America.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Principal Business Address</h3>
              <p className="text-gray-600 leading-relaxed">
                447 Broadway, 2nd Floor, Suite 3342<br />
                New York, NY 10013<br />
                United States
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Company Registration Number</h3>
              <p className="text-gray-600 leading-relaxed">10480139 (USA)</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Copyright</h3>
              <p className="text-gray-600 leading-relaxed">&copy; 2026 Toto Finance Inc. All rights reserved.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Disclaimer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Digital assets, such as tokenized commodities and other real-world assets, are associated with material
                risks, including price volatility, illiquidity, counterparty risk, and regulatory uncertainty. Digital
                asset markets may lack the same level of protections as traditional financial markets and are subject to
                changing regulatory environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance Inc. offers information and services related to blockchain tokenization and digital
                representations of real-world assets. Unless otherwise stated, products and services mentioned on this
                website have not been registered as securities under applicable laws and regulations and may not be
                offered or sold in certain jurisdictions without registration or exemption.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tokenized assets may represent direct or indirect economic interests in underlying assets and may or may
                not represent ownership rights or direct legal claims, depending on the applicable structure,
                documentation, and jurisdiction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nothing on this website should be considered financial, investment, legal, or tax advice, or an offer or
                solicitation to purchase or sell any asset. It is the responsibility of the user to conduct their own
                due diligence and seek the advice of professional experts before participating in any product or
                service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Additional terms, conditions, and geographical restrictions may apply.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4 mt-12 pt-8 border-t border-gray-200">
                Asset Custody &amp; Storage
              </h3>

              <h3 className="text-xl font-medium text-gray-900 mb-2">Custody Service Provider</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Physical asset custody for tokenized assets is offered by:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>TotoHolding AG</strong>
                <br />
                Herrengasse 6
                <br />
                9490 Vaduz
                <br />
                Liechtenstein
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Legal Entity Identifier (LEI): 5299005UXAQFO3US5C38</strong>
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">Secure Vault Storage</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The physical assets that underlie Toto Finance tokens are stored in secure vault storage facilities in
                Liechtenstein. The vault storage facilities are located in the Swiss Alps, which is one of the most
                secure and politically neutral regions in the world for asset storage, with a history of wealth
                preservation and financial secrecy dating back centuries.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">Insurance &amp; Protection</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The custody service is insured against loss, theft, or damage by Lloyd&apos;s of London.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-2">Custody Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Token holders are provided with notarized evidence of ownership and real-time access to their
                asset&apos;s custody status.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Purpose of This Website</h3>
              <p className="text-gray-600 leading-relaxed">
                The purpose of this website is to offer general information about Toto Finance Inc., its technology,
                infrastructure, research publications, and services, as well as general educational content on blockchain
                technology, tokenization, real-world assets, and economic research.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Official Channels</h3>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://www.totofinance.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    www.totofinance.co
                  </a>
                </p>
                <p>
                  <strong>X (Twitter):</strong>{' '}
                  <a
                    href="https://x.com/totofinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    @TotoFinance
                  </a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/company/totofinance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Toto Finance
                  </a>
                </p>
                <p>
                  <strong>Telegram:</strong>{' '}
                  <a
                    href="https://t.me/totofinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Toto Finance
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Compliance &amp; Legal Inquiries</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Toto Finance Inc. believes that regulatory compliance and legal clarity are critical to the future
                success of digital finance and real-world asset tokenization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For legal or compliance-related inquiries, please contact:{' '}
                <a
                  href="mailto:legal@totofinance.co"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  legal@totofinance.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
