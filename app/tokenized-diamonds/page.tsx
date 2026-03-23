// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import type { ReactNode } from 'react';
import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const DiamondFAQ = dynamicImport(
  () => import('../components/client/SilverFAQ').then((mod) => ({ default: mod.SilverFAQ }))
);

const PAGE_URL = 'https://totofinance.co/tokenized-diamonds';
const PAGE_TITLE =
  'Tokenized Diamonds | Buy, Trade & Own Real Diamonds | Toto Finance';
const PAGE_DESCRIPTION =
  'Access the largest tokenized diamonds marketplace. Buy blockchain backed, GIA certified diamonds with full transparency, insurance, and true digital ownership.';

const breadcrumbItems = [
  { name: 'Home', item: 'https://totofinance.co' },
  { name: 'Products', item: 'https://totofinance.co/products' },
  { name: 'Tokenized Diamonds', item: PAGE_URL },
];

const faqData = [
  {
    question: 'What are the 4Cs of Diamonds?',
    answer:
      'The 4Cs, Cut, Clarity, Colour, and Carat, are the internationally recognized standard for evaluating diamond quality and determining value. Together, they provide a consistent framework used by gemologists worldwide. An increasingly important fifth C is "Conflict Free," which ensures ethical sourcing and adds both moral and market value to a diamond.',
  },
  {
    question: 'What are the different types of diamonds?',
    answer:
      "Diamonds broadly fall into two categories. Natural diamonds form over millions of years deep within the Earth's mantle under extreme heat and pressure. Synthetic (lab grown) diamonds are created in controlled laboratory environments that replicate natural conditions. Both can be graded using the 4Cs, though natural diamonds typically carry greater rarity value.",
  },
  {
    question: 'How should diamonds be stored to avoid damage?',
    answer:
      'Despite being the hardest natural material on Earth, diamonds can still be chipped or scratched by other diamonds. Store each stone separately in a fabric lined jewellery case or individual soft pouch. Avoid contact between diamonds and other gemstones. Clean periodically with warm soapy water and a soft brush to maintain brilliance.',
  },
  {
    question: 'How are diamonds graded and certified?',
    answer:
      "Diamond grading involves a detailed professional assessment of each stone's Cut, Colour, Clarity, and Carat weight. Independent gemological laboratories, such as GIA, IGI, and HRD, issue certificates that verify these qualities. Certification ensures transparency, builds buyer confidence, and establishes an objective market value for each stone.",
  },
  {
    question: 'How can you tell if a diamond is real?',
    answer:
      "Authentic diamonds exhibit unique physical properties including exceptional hardness (10 on the Mohs scale) and distinctive light refraction. Simple home tests include the fog test (real diamonds disperse heat instantly and won't stay fogged), the water test (diamonds sink due to high density), and the newspaper test (you can't read text through a real diamond). For definitive verification, professional diamond testers and gemological examination are recommended.",
  },
  {
    question: 'Why do diamonds make a good investment?',
    answer:
      'Diamonds have historically preserved value due to their extreme rarity, unmatched durability, and consistent global demand. High quality diamonds with strong certification from reputable labs (GIA, IGI, HRD) can appreciate over time, particularly larger stones with exceptional grades. Through tokenization on Toto Finance, diamond investment becomes more accessible, liquid, and transparent, removing traditional barriers like physical storage and authentication concerns.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tokenized Diamonds',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  brand: {
    '@type': 'Brand',
    name: 'Toto Finance',
  },
};

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function TokenizedDiamondsPage() {
  return (
    <div className="min-h-screen w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageStructuredData
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        pageType="WebPage"
        breadcrumbItems={breadcrumbItems}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <FAQStructuredData faqs={faqData} />

      <GradualBlur preset="page-footer" strength={2} height="4rem" animated="scroll" duration="0.5s" />
      <Navigation pastHero={true} />

      {/* Section 1: Hero */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-gray-900 text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Largest Tokenized Diamonds Marketplace
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Everything about diamonds, from A to Z. This handbook is your complete guide, from beginner
              basics to expert investment insights.
            </p>
            <ExternalLink
              href="https://blog.totofinance.co/diamond-handbook-index/"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Diamond Handbook
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </ExternalLink>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Tokenized Diamonds */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-12 md:mb-16 text-center max-w-4xl mx-auto">
            Choose Diamonds: Shine Brighter, Ethically Sourced
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ethical Practices</h3>
              <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                Our diamonds are conflict free and crafted with fair labour practices across every stage of
                the supply chain. Each stone is responsibly sourced, giving you confidence that your
                investment supports ethical mining standards.
              </p>
              <ExternalLink
                href="https://blog.totofinance.co/what-is-ethical-sourcing-of-diamonds/"
                className="text-neutral-900 font-medium text-sm hover:underline inline-flex items-center gap-1"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                Choosing our tokenized diamonds means supporting sustainable mining operations that protect
                the planet&apos;s natural resources. Every diamond is traceable from mine to marketplace,
                ensuring environmental accountability at every step.
              </p>
              <ExternalLink
                href="https://blog.totofinance.co/diamond-traceability-with-tiamonds/"
                className="text-neutral-900 font-medium text-sm hover:underline inline-flex items-center gap-1"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 4Cs */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-4 text-center">
            The 4Cs: The Global Standard of Diamond Quality
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center mb-14 md:mb-16">
            Diamonds are valued for their brilliance, rarity, and uniqueness. The 4Cs, Cut, Colour, Clarity,
            and Carat Weight, form the universal benchmark for evaluating diamond quality with precision and
            consistency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Cut',
                body: "A diamond's cut determines its brilliance, fire, and scintillation. Only round brilliant diamonds receive official cut grades from gemological labs. Fancy shapes follow unique proportions that influence their visual beauty and light performance.",
                href: 'https://blog.totofinance.co/an-overview-on-diamond-cuts/',
              },
              {
                title: 'Colour',
                body: 'Diamonds range from completely colourless to subtle shades of yellow and brown. The less body colour present, the rarer and more valuable the stone. Colour grading uses a D to Z scale, with D being perfectly colourless and commanding the highest premiums.',
                href: 'https://blog.totofinance.co/guide-to-diamond-colors/',
              },
              {
                title: 'Clarity',
                body: 'Natural inclusions are like fingerprints, they make each diamond one of a kind. Fewer and smaller inclusions mean higher clarity, greater light transmission, and more brilliance. Clarity is graded from Flawless (FL) to Included (I3) under 10x magnification.',
                href: 'https://blog.totofinance.co/an-overview-of-diamond-clarity/',
              },
              {
                title: 'Carat',
                body: "Carat measures a diamond's weight, not its physical size. One carat equals 0.2 grams. While larger diamonds are exponentially rarer and more valuable, a stone's overall worth is determined by the interplay of all four Cs together.",
                href: 'https://blog.tiamonds.com/an-overview-of-diamond-carat/',
              },
            ].map((col) => (
              <div
                key={col.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{col.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">{col.body}</p>
                <ExternalLink
                  href={col.href}
                  className="text-neutral-900 font-medium text-sm hover:underline inline-flex items-center gap-1 mt-auto"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </ExternalLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Journey of Diamonds */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-14 md:mb-16 text-center">
            Journey of Diamonds: From Earth to Blockchain
          </h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                title: 'Mining',
                body: 'Rough diamonds are unearthed from deep within the earth through carefully managed mining operations, beginning their journey from raw geological formation to finished masterpiece.',
                href: 'https://blog.tiamonds.com/an-overview-of-diamond-mining',
                cta: 'Read More',
              },
              {
                title: 'Polishing',
                body: 'Skilled artisans meticulously cut and polish each rough diamond, unlocking its natural brilliance. This transformation from rough stone to polished gem requires decades of expertise and precision craftsmanship.',
                href: 'https://blog.tiamonds.com/an-overview-on-diamond-cuts',
                cta: 'Read More',
              },
              {
                title: 'Grading',
                body: 'Every diamond is expertly assessed using the 4Cs framework, Carat, Cut, Colour, and Clarity, by trained gemologists who assign objective quality grades that determine the stone\'s market value.',
                href: 'https://blog.tiamonds.com/an-overview-of-diamond-grading-process/',
                cta: 'Read More',
              },
              {
                title: 'Certification',
                body: 'Independent gemological laboratories such as GIA, IGI, and HRD issue formal certificates verifying each diamond\'s quality attributes. These certificates serve as the diamond\'s permanent identity document and proof of quality.',
                href: 'https://blog.tiamonds.com/an-overview-of-diamond-certification',
                cta: 'Read More',
              },
              {
                title: 'Tokenization & Retailing',
                body: 'Certified diamonds are securely stored, insured, and digitized as blockchain backed tokens on Toto Finance. Buyers can purchase, trade, or redeem their tokenized diamonds through the marketplace, combining traditional diamond value with modern digital ownership.',
                href: 'https://blog.tiamonds.com/classical-vs-tokenized-diamonds-a-comparative-insight',
                cta: 'Read More',
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col sm:flex-row sm:items-start gap-6 pb-12 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.body}</p>
                  <ExternalLink
                    href={step.href}
                    className="text-neutral-900 font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    {step.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </ExternalLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
            Get answers to your questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
            No more confusion gains clear insights into asset tokenization with direct, easy-to-understand
            answers. These insights help you navigate the world of tokenization.
          </p>
          <DiamondFAQ faqs={faqData} />
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
