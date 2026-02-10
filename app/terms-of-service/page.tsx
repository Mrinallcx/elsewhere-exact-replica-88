// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <PageStructuredData
        title="Terms of Service | Toto Finance"
        description="Terms of service for Toto Finance AG. Terms and conditions governing use of our website and services."
        url="https://totofinance.co/terms-of-service"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Terms of Service', item: 'https://totofinance.co/terms-of-service' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Terms of Service', item: 'https://totofinance.co/terms-of-service' },
        ]}
      />
      <GradualBlur
        preset="page-footer"
        strength={2}
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />
      <Navigation pastHero={true} />

      <section className="px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>

          <div className="prose prose-gray max-w-none space-y-10">
            <section>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service govern your access to and use of Toto Finance platforms, products, and infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Eligibility</h2>
              <p className="text-gray-600 leading-relaxed">
                You must be at least 18 years old and legally permitted to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Toto Finance provides infrastructure and technology for the tokenization, settlement, and lifecycle management of real-world assets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Your responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the security of your credentials</li>
                <li>Use the platform only for lawful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Compliance</h2>
              <p className="text-gray-600 leading-relaxed">
                Users may be subject to KYC, AML, sanctions screening, and other regulatory checks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Intellectual property</h2>
              <p className="text-gray-600 leading-relaxed">
                All platform content, software, and trademarks are owned by Toto Finance or its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Disclaimer of warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                Services are provided on an &quot;as-is&quot; basis without warranties of uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Limitation of liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Toto Finance is not liable for indirect or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may suspend or terminate access if you violate these Terms or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Governing law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by the laws of the State of New York, United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Updates to these terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may modify these Terms from time to time. Continued use of the services constitutes acceptance of updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions regarding these Terms can be sent to <a href="mailto:hello@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">hello@totofinance.co</a>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
