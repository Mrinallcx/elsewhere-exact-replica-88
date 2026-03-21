// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { FAQPageClient } from '../components/client/FAQPageClient';
import { HubSpotChat, ContactSupportButton } from '../components/client/HubSpotChat';
import { faqItems } from './faq-data';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const Footer = dynamicImport(() => import('../components/Footer'));

export default function FAQPage() {
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general-overview', name: 'General Overview' },
    { id: 'platform-process', name: 'Platform and Process' },
    { id: 'toto-token', name: 'Toto Token' },
    { id: 'roadmap-launch', name: 'Roadmap and Launch' },
    { id: 'user-experience', name: 'User Experience' },
    { id: 'compliance-regulation', name: 'Compliance and Regulation' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'asset', name: 'Asset' },
  ];

  const assetSubcategories = [
    { id: 'diamonds', name: 'Diamonds' },
    { id: 'gold', name: 'Gold' },
    { id: 'platinum', name: 'Platinum' },
    { id: 'sapphire', name: 'Sapphire' },
    { id: 'silver', name: 'Silver' },
  ];

  const faqs = faqItems;

  return (
    <div className="min-h-screen w-full relative bg-white">
      <PageStructuredData
        title="FAQ — Frequently Asked Questions | Toto Finance"
        description="Get answers about Toto Finance, tokenization, the platform, assets, and services."
        url="https://totofinance.co/faq"
        pageType="FAQPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'FAQ', item: 'https://totofinance.co/faq' },
        ]}
      />

      <FAQStructuredData faqs={faqs} />

      <GradualBlur
        preset="page-footer"
        strength={2}
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />

      <Navigation pastHero={true} />

      <main className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Get answers to your questions about Toto Finance, our platform, and services.
            </p>
          </div>

          <FAQPageClient
            faqs={faqs}
            categories={categories}
            assetSubcategories={assetSubcategories}
          />

          <div className="mt-16 md:mt-20 text-center">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                If you can&apos;t find the answer you&apos;re looking for, our support team is here to help.
              </p>
              <ContactSupportButton />
            </div>
          </div>
        </div>
      </main>

      <NewsletterSection />
      <Footer />

      <HubSpotChat />
    </div>
  );
}
