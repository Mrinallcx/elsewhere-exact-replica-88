// Server Component (NO "use client")
export const revalidate = 86400; // ISR: regenerate every 24 hours

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
              <p className="text-gray-600 leading-relaxed mb-3">
                This Privacy Policy explains how Toto Finance Inc. collects, uses, stores, and protects personal data in connection with its platform and services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                Toto Finance Inc. is a U.S.-based infrastructure company providing technology for the tokenization, settlement, and lifecycle management of real-world assets, including commodities, metals, energy-related assets, and in-ground reserves.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">This policy applies to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Websites and digital platforms</li>
                <li>Investor, partner, and user onboarding</li>
                <li>Use of services and infrastructure</li>
                <li>Communications with Toto Finance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Data controller</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Toto Finance Inc.</strong><br />
                447 Broadway, 2nd Floor, 3342, New York, NY 10013, United States
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
                Local representatives or regulated partners may be appointed where required by law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Data Protection Officer: <a href="mailto:dpo@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">dpo@totofinance.co</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Information we collect</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-4">
                <li><strong>Personal information:</strong> Name; email address; phone number; company name; role and professional information; identification documents where required for compliance.</li>
                <li><strong>Account and transaction information:</strong> Wallet addresses; transaction identifiers; account credentials; access logs; asset ownership or participation records.</li>
                <li><strong>Technical and usage information:</strong> IP address; browser type; device identifiers; log files; platform interaction data; security and access monitoring data.</li>
                <li><strong>Communications:</strong> Emails; messages; meeting correspondence; investor or partner communications; support inquiries and responses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">How we use information</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-3">
                <li><strong>Service provision:</strong> Operate, maintain, and improve the platform and services.</li>
                <li><strong>Compliance and risk management:</strong> Meet legal, regulatory, KYC/AML, and sanctions obligations.</li>
                <li><strong>Security and integrity:</strong> Prevent fraud, unauthorized access, and misuse of the platform.</li>
                <li><strong>Business operations:</strong> Manage relationships with investors, partners, and asset owners.</li>
                <li><strong>Communications:</strong> Provide updates, respond to inquiries, and manage contractual relationships.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-3">Personal data is not sold.</p>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Automated decision-making:</strong> Automated systems may be used for compliance screening such as sanctions checks and KYC verification. Users may request human review of automated decisions that significantly affect them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Legal basis for processing</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-2">
                <li><strong>Contract performance:</strong> Account creation, transaction processing, and service delivery.</li>
                <li><strong>Legal obligations:</strong> KYC/AML verification, sanctions screening, and regulatory reporting.</li>
                <li><strong>Legitimate interests:</strong> Platform security, fraud prevention, and service improvement.</li>
                <li><strong>Consent:</strong> Marketing communications and optional analytics.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">Legitimate interests are balanced against user rights and interests.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Sharing and disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-2">We may share data with service providers and partners, including:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li>Identity verification and KYC/AML providers</li>
                <li>Blockchain analytics providers</li>
                <li>Cloud infrastructure and hosting services</li>
                <li>Custody and settlement partners</li>
                <li>Legal and compliance advisors</li>
                <li>Audit and accounting firms</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-2">Data may be disclosed to comply with applicable laws or lawful requests.</p>
              <p className="text-gray-600 leading-relaxed mb-2">Data may be shared during mergers, acquisitions, financing, or restructuring with appropriate safeguards.</p>
              <p className="text-gray-600 leading-relaxed">Non-identifiable data may be used for analytics, research, or reporting.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">International data transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Personal data may be transferred internationally, including to the United States and Europe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">Transfer safeguards include:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-3">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Binding Corporate Rules where applicable</li>
                <li>Explicit user consent for specific transfers</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                For details, contact <a href="mailto:privacy@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">privacy@totofinance.co</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Data security</h2>
              <p className="text-gray-600 leading-relaxed mb-2">We implement measures including:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-3">
                <li>Access controls and role-based permissions</li>
                <li>Encryption in transit and at rest</li>
                <li>Secure data storage and transmission</li>
                <li>Security monitoring and logging</li>
                <li>Regular security assessments and audits</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Absolute security cannot be guaranteed, but data protection practices are continuously reviewed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Data retention</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-2">
                <li><strong>Account and identity information:</strong> Duration of account plus 7 years</li>
                <li><strong>Off-chain transaction records:</strong> 7 years from transaction date</li>
                <li><strong>On-chain transaction records:</strong> Permanent due to blockchain immutability</li>
                <li><strong>KYC/AML documentation:</strong> 7 years after relationship ends</li>
                <li><strong>Communications and support:</strong> 3 years from last contact</li>
                <li><strong>Technical logs:</strong> 12 months</li>
                <li><strong>Marketing preferences:</strong> Until consent is withdrawn</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">Retention may be extended for legal, regulatory, or litigation reasons.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Your rights</h2>
              <p className="text-gray-600 leading-relaxed mb-2">You may have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li><strong>Access:</strong> Request a copy of personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request erasure of personal data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Receive data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw consent:</strong> Where applicable</li>
                <li><strong>Automated decisions:</strong> Request human review of automated decisions</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>How to exercise:</strong> Contact <a href="mailto:privacy@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">privacy@totofinance.co</a>. We aim to respond within 30 days or as required by law. Identity verification may be required before processing requests.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">You have the right to complain to a supervisory authority, including:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Liechtenstein Data Protection Office</li>
                <li>EU/EEA national Data Protection Authority</li>
                <li>UK Information Commissioner&apos;s Office</li>
                <li>Swiss Federal Data Protection and Information Commissioner</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Cookies and tracking</h2>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-2">
                <li><strong>Strictly necessary:</strong> Platform functionality, security, and authentication (Session)</li>
                <li><strong>Analytics:</strong> Understand platform usage and performance (Up to 12 months)</li>
                <li><strong>Preferences:</strong> Remember user settings and choices (Up to 12 months)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-2">No third-party advertising cookies are used.</p>
              <p className="text-gray-600 leading-relaxed">Cookie preferences can be managed through browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Children&apos;s data</h2>
              <p className="text-gray-600 leading-relaxed mb-2">Services are not intended for individuals under 18 years of age.</p>
              <p className="text-gray-600 leading-relaxed">Any personal data collected from minors will be deleted promptly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Changes to this policy</h2>
              <p className="text-gray-600 leading-relaxed mb-2">This policy may be updated to reflect service, operational, or legal changes. Changes are effective upon posting.</p>
              <p className="text-gray-600 leading-relaxed">Material changes may be communicated via platform or email.</p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Regional provisions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">California (CCPA / CPRA)</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">You may have the right to: know what personal information is collected, used, and shared; delete personal information; opt out of sale or sharing; and non-discrimination.</p>
                  <p className="text-gray-600 leading-relaxed">Personal information is not sold or shared for cross-context behavioral advertising.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">EEA / UK (GDPR, UK GDPR)</h3>
                  <p className="text-gray-600 leading-relaxed">See the user rights and legal bases sections above. Contact <a href="mailto:privacy@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">privacy@totofinance.co</a>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Switzerland</h3>
                  <p className="text-gray-600 leading-relaxed">Processing may be subject to the Federal Act on Data Protection. You may contact the Federal Data Protection and Information Commissioner.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact information</h2>
              <p className="text-gray-600 leading-relaxed">
                General inquiries: <a href="mailto:hello@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">hello@totofinance.co</a><br />
                Privacy and data protection: <a href="mailto:privacy@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">privacy@totofinance.co</a><br />
                Data Protection Officer: <a href="mailto:dpo@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">dpo@totofinance.co</a>
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
