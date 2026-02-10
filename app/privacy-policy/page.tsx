// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <PageStructuredData
        title="Privacy Policy | Toto Finance"
        description="Privacy policy for Toto Finance Inc. How we collect, use, and protect your personal data when you use our website and services."
        url="https://totofinance.co/privacy-policy"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Privacy Policy', item: 'https://totofinance.co/privacy-policy' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Privacy Policy', item: 'https://totofinance.co/privacy-policy' },
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>

          <div className="prose prose-gray max-w-none space-y-10">
            <section>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy explains how Toto Finance Inc. collects, uses, stores, and protects personal information when you interact with our websites, platforms, and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Company information</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Toto Finance Inc.</strong><br />
                447 Broadway, 2nd Floor, 3342, New York, NY 10013, United States
              </p>
              <p className="text-gray-600 leading-relaxed">
                General inquiries: <a href="mailto:hello@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">hello@totofinance.co</a><br />
                Privacy: <a href="mailto:privacy@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">privacy@totofinance.co</a><br />
                Data Protection Officer: <a href="mailto:dpo@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">dpo@totofinance.co</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Data we collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li><strong>Personal:</strong> Name and contact details; professional and company information; identity documents where legally required.</li>
                <li><strong>Account and transaction:</strong> Wallet addresses and transaction references; account credentials and access records; asset ownership or participation data.</li>
                <li><strong>Technical:</strong> IP address and device information; browser and usage logs; security and access metadata.</li>
                <li><strong>Communications:</strong> Emails and messages; support requests; investor or partner correspondence.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">How we use your data</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Operate and maintain our platform</li>
                <li>Meet legal and regulatory obligations</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Manage investor, partner, and customer relationships</li>
                <li>Respond to inquiries and provide service updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Legal basis</h2>
              <p className="text-gray-600 leading-relaxed mb-2">We process personal data based on:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Contractual necessity</li>
                <li>Legal and regulatory compliance</li>
                <li>Legitimate business interests</li>
                <li>User consent where required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Data sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-2">We may share data with:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li>KYC and identity verification providers</li>
                <li>Blockchain analytics services</li>
                <li>Cloud and infrastructure providers</li>
                <li>Custody, settlement, and compliance partners</li>
                <li>Legal, audit, and accounting firms</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-2">
                Data may be disclosed where required by law or regulatory request.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Data may be transferred as part of mergers, acquisitions, or corporate restructuring.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">International transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Personal data may be processed outside your country of residence using approved legal safeguards such as Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Security</h2>
              <p className="text-gray-600 leading-relaxed mb-2">We implement measures including:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Access control and role-based permissions</li>
                <li>Encryption in transit and at rest</li>
                <li>Continuous monitoring and audits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Retention</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li><strong>Account data:</strong> Account lifetime plus up to 7 years</li>
                <li><strong>Transaction records:</strong> Up to 7 years where legally required</li>
                <li><strong>Technical logs:</strong> Up to 12 months</li>
                <li><strong>Communications:</strong> Up to 3 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Your rights</h2>
              <p className="text-gray-600 leading-relaxed mb-2">You may have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Access and correction</li>
                <li>Deletion and restriction</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
                <li>Human review of automated decisions</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                To exercise these rights, contact us at <a href="mailto:privacy@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">privacy@totofinance.co</a> or our Data Protection Officer at <a href="mailto:dpo@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">dpo@totofinance.co</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Children</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under 18 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Changes to this policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this policy from time to time. Material changes will be communicated through our platform or email.
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
