// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function CookieSettingsPage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <PageStructuredData
        title="Cookie Settings | Toto Finance"
        description="Cookie settings and cookie policy for Toto Finance. Learn how we use cookies and manage your preferences."
        url="https://totofinance.co/cookie-settings"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Cookie Settings', item: 'https://totofinance.co/cookie-settings' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Cookie Settings', item: 'https://totofinance.co/cookie-settings' },
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
            Cookie Settings
          </h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: February 2026</p>

          <div className="prose prose-gray max-w-none space-y-10">
            <section>
              <p className="text-gray-600 leading-relaxed">
                Toto Finance uses cookies and similar technologies to ensure platform functionality, security, and performance. For more on how we handle personal data, see our{' '}
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Types of cookies we use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Necessary</h3>
                  <p className="text-gray-600 leading-relaxed mb-1">
                    <strong>Purpose:</strong> Core functionality, authentication, and security.
                  </p>
                  <p className="text-gray-600 leading-relaxed">Duration: Session-based.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics</h3>
                  <p className="text-gray-600 leading-relaxed mb-1">
                    <strong>Purpose:</strong> Understand usage and improve platform performance.
                  </p>
                  <p className="text-gray-600 leading-relaxed">Duration: Up to 12 months.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Preferences</h3>
                  <p className="text-gray-600 leading-relaxed mb-1">
                    <strong>Purpose:</strong> Remember user settings and choices.
                  </p>
                  <p className="text-gray-600 leading-relaxed">Duration: Up to 12 months.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Advertising</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not use cookies for third-party advertising or cross-context behavioral tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Managing cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                You can manage or disable cookies through your browser or device settings. Some features may not function correctly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Updates</h2>
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy may be updated periodically to reflect changes in technology or legal requirements.
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
