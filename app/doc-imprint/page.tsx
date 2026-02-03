// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import { Shield, Package, Eye, Lock, Database, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function DocImprintPage() {

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Legal Information & Imprint | Toto Finance"
        description="Legal information, company details, and imprint for Toto Finance AG. Registered in Liechtenstein under the Blockchain Act. LEI: 5299005UXAQFO3US5C38."
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
            Official Documentation
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tokenization Report 2025–2030 [Updated] */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Tokenization Report 2025–2030 [Updated]</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Updated independent research on how blockchain-based tokenization of real-world assets is reshaping global markets, liquidity, and institutional participation.
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

            {/* Total Tokenization - Vision & Framework */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Total Tokenization - Vision & Framework</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A global overview of Toto Finance’s long-term vision, platform architecture, and approach to tokenized real-world assets.
              </p>
              <a 
                href="https://tiamonds.s3.us-east-1.amazonaws.com/Report/Toto+Finance+-+TOTO+White+Paper+-+International+Edition.pdf" 
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

            {/* MiCA-Compliant Whitepaper */}
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
                The official whitepaper describing Toto Finance’s infrastructure, tokenization model, and compliance framework under applicable regulations.
              </p>
              <a 
                href="https://tiamonds.s3.us-east-1.amazonaws.com/Report/Toto+Finance+-+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf" 
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

            {/* Tokenization Report 2025–2030 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Tokenization Report 2025–2030</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Independent research on how blockchain-based tokenization of real-world assets is reshaping global markets, liquidity, and institutional participation.
              </p>
              <a 
                href="https://tiamonds.s3.us-east-1.amazonaws.com/website/Tiamonds+-+Tokenization+Report+2025-2030.pdf" 
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

            {/* Emurgo / NMKR Case Study */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Emurgo / NMKR Case Study</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A case study detailing how Toto Finance and NMKR leveraged Cardano to tokenize real-world assets with security and efficiency.
              </p>
              <a 
                href="https://www.emurgo.io/press-news/cardano-nft-case-study-nmkr-and-tiamonds/" 
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

            {/* Media Kit */}
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
                Official logos, branding assets, and media materials for partners, press, and third parties.
              </p>
              <a 
                href="https://www.notion.so/Toto-Finance-Media-Kit-2d1797abde9e803fb0f0c0eed0d72f97" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Download Media Kit
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Structural Overview Section */}
      <section id="regulatory-overview" className="px-6 md:px-8 lg:px-12 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6 text-left">
              Regulatory Oversight, Validation & Assurance
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Fully regulated entity ensuring compliant, secure, and transparent access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* GIA Certification */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">GIA Certification</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Diamond certification issued by the Gemological Institute of America (GIA), the world’s foremost authority on diamond grading and integrity.
              </p>
              <a 
                href="https://www.gia.edu/report-check-landing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* LCX - Physical Validator */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">LCX - Physical Validator</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The first global Physical Validator under the Liechtenstein Blockchain Act (TVTG), legally bridging physical assets and on-chain tokens.
              </p>
              <a 
                href="https://www.lcx.com/tiamonds-certification" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Lloyd’s of London - Insurance */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Lloyd’s of London - Insurance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Global insurance marketplace providing coverage for unique and complex risks through specialized underwriting.
              </p>
              <a 
                href="https://www.lloyds.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Physical Validation Framework */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Physical Validation Framework</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Independent verification of the existence, custody, and lawful ownership of tokenized physical assets.
              </p>
              <a 
                href="https://www.lcx.com/lcx-gains-regulatory-approval-as-a-physical-validator-to-enable-tokenization-of-assets" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Hacken - Security Audit */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Hacken - Security Audit</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Independent audit of the $TOTO token and smart contract infrastructure, ensuring adherence to security best practices.
              </p>
              <a 
                href="https://totofinance.co/blog/post/toto-token-is-fully-audited-by-hacken/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* CertiK - Smart Contract Audit */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">CertiK - Smart Contract Audit</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Security assessments and monitoring provided by CertiK, a leading blockchain security firm.
              </p>
              <a 
                href="https://skynet.certik.com/projects/tia" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Learn More
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
            <p className="text-gray-600 leading-relaxed mb-6">
              Toto Finance AG, a joint stock company incorporated in the Principality of Liechtenstein, Herrengasse 6, 9490 Vaduz, Principality of Liechtenstein.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Legal Entity</h3>
              <p className="text-gray-600 leading-relaxed">
                Toto Finance AG<br />
                A joint stock company incorporated in the Principality of Liechtenstein
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Registered Address</h3>
              <p className="text-gray-600 leading-relaxed">
                Herrengasse 6<br />
                9490 Vaduz<br />
                Principality of Liechtenstein
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">LEI (Legal Entity Identifier)</h3>
              <p className="text-gray-600 leading-relaxed">5299005UXAQFO3US5C38</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Registration Number</h3>
              <p className="text-gray-600 leading-relaxed">FL-0002.702.154-5</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Legal Entity Representative</h3>
              <p className="text-gray-600 leading-relaxed">Toto Finance AG</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Copyright</h3>
              <p className="text-gray-600 leading-relaxed">© 2023–2026 Toto Finance AG. All rights reserved.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Disclaimer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Digital assets, including tokenized commodities and real-world assets, involve significant risks, including price volatility, liquidity constraints, and regulatory uncertainty. Digital asset markets may not offer the same protections as traditional financial markets and are subject to evolving regulatory regimes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toto Finance Inc. (USA), Toto Finance International Inc., and Toto Holding AG (together with Toto Finance AG, “Toto Finance”) provide information and services related to tokenized assets. Unless explicitly stated, products have not been registered as securities under applicable laws and may not be offered or sold in certain jurisdictions without appropriate registration or exemption.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tokenized assets may provide direct or indirect economic exposure to underlying assets and may or may not confer ownership rights or direct claims, depending on structure and jurisdiction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nothing on this website constitutes financial, investment, legal, or tax advice, nor an offer or solicitation to buy or sell any asset. Users should conduct independent due diligence and consult qualified professionals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Additional terms, conditions, and restrictions may apply.
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
                {/* Add other channels here to mirror Linktree setup */}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Purpose of This Website</h3>
              <p className="text-gray-600 leading-relaxed">
                The purpose of this website is to present information about Toto Finance, its services, products, and infrastructure, as well as general information related to blockchain technology, tokenization, real-world assets, and economic research.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Compliance &amp; Legal Inquiries</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Toto Finance believes regulatory compliance is essential for the long-term development of digital finance.
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
