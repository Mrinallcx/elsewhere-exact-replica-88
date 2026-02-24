// Server Component (NO "use client")
export const revalidate = 3600; // ISR: regenerate every hour

import dynamicImport from 'next/dynamic';
import { JobPostingStructuredData } from '../components/JobPostingStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { JobList } from '../components/client/JobList';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const Footer = dynamicImport(() => import('../components/Footer'));

interface ResponsibilityCategory {
  category: string;
  items: string[];
}

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  preview: string;
  fullDescription: string;
  requirements: string[];
  responsibilities: string[] | ResponsibilityCategory[];
  benefits?: string[];
  preferredSkills?: string[];
  niceToHave?: string[];
  applyUrl?: string;
}

export default function CareersPage() {

  // Placeholder job positions - replace with actual content later
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Business Development Associate',
      location: 'Remote — US preferred',
      type: 'Full-time',
      department: 'Business Development',
      preview: 'Toto Finance is seeking a Business Development Associate to support the expansion of its tokenization infrastructure across commodities and real-world assets.',
      fullDescription: 'Toto Finance is seeking a Business Development Associate to support the expansion of its tokenization infrastructure across commodities and real-world assets. You will work directly with partners, issuers, and ecosystem participants to onboard assets and grow institutional adoption. This role is suited to someone who understands digital assets but is comfortable operating in structured, professional environments.',
      requirements: [
        '1–3+ years of professional experience in BD, partnerships, or related roles',
        'Strong understanding of digital assets, tokenization, and blockchain ecosystems',
        'Ability to communicate clearly with technical and non-technical stakeholders',
        'Excellent written and spoken business English',
        'Strong sense of ownership and follow-through',
        'Existing industry network is a plus'
      ],
      responsibilities: [
        'Source, evaluate, and onboard new asset and infrastructure partners',
        'Support negotiations and commercial structuring with issuers and counterparties',
        'Manage inbound partnership requests and maintain a structured BD pipeline',
        'Present Toto Finance\'s platform and roadmap to partners and clients',
        'Support deal execution across commodities, RWAs, and tokenized assets',
        'Contribute to the evolution of the company\'s business development strategy'
      ],
      benefits: [
        'Exposure to institutional-grade RWA tokenization',
        'Direct involvement in building a global infrastructure platform',
        'Fast-moving, execution-focused environment',
        'Long-term growth opportunities'
      ]
    },
    {
      id: '2',
      title: 'Content Writer & Social Media Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      preview: 'We are looking for a Content Writer & Social Media Specialist to support Toto Finance\'s communication and content strategy.',
      fullDescription: 'We are looking for a Content Writer & Social Media Specialist to support Toto Finance\'s communication and content strategy. The role focuses on translating complex topics - commodities, tokenization, regulation, and infrastructure - into clear, accurate, and consistent messaging.',
      requirements: [
        '1–2+ years of experience in content or communications (crypto/RWA preferred)',
        'Strong writing skills with attention to clarity and accuracy',
        'Solid understanding of blockchain and digital assets',
        'Ability to explain complex topics in simple language',
        'Familiarity with CMS tools and basic SEO principles'
      ],
      responsibilities: [
        {
          category: 'Content',
          items: [
            'Write articles, blog posts, research summaries, and announcements',
            'Support long-form content such as explainers, whitepapers, and insights',
            'Ensure accuracy, consistency, and alignment with regulatory positioning'
          ]
        },
        {
          category: 'Social Media',
          items: [
            'Manage and grow presence on X, LinkedIn, Telegram, and other channels',
            'Plan and schedule content aligned with product and market updates',
            'Engage professionally with the community and external stakeholders'
          ]
        },
        {
          category: 'Strategy',
          items: [
            'Collaborate with leadership on messaging and positioning',
            'Track performance and refine content based on engagement and reach',
            'Stay informed on market developments and regulatory context'
          ]
        }
      ],
      benefits: [
        'Work on substantive topics with real market relevance',
        'High autonomy and responsibility',
        'Direct access to leadership and strategic discussions'
      ]
    },
    {
      id: '3',
      title: 'Full-Stack Engineer (Web3)',
      location: 'Gurgaon, India or Remote',
      type: 'Full-time',
      department: 'Engineering',
      preview: 'Toto Finance is hiring a Full-Stack Engineer to help build and maintain its tokenization platform and digital commodity marketplace.',
      fullDescription: 'Toto Finance is hiring a Full-Stack Engineer to help build and maintain its tokenization platform and digital commodity marketplace. You will work across frontend and backend systems, integrating blockchain components into a scalable, production-grade application.',
      requirements: [
        '3+ years of experience in full-stack or frontend engineering',
        'Strong experience with React, Next.js, and modern JavaScript/TypeScript',
        'Familiarity with EVM, ERC-20/721/1155, wallet integrations',
        'Experience with REST APIs and backend integrations',
        'Understanding of performance optimization and secure development practices',
        'Comfortable working in a distributed team'
      ],
      responsibilities: [
        'Build and maintain frontend components using React and Next.js',
        'Develop and integrate backend services and APIs',
        'Integrate blockchain functionality (EVM, wallets, token standards)',
        'Collaborate with product and infrastructure teams on new features',
        'Optimize performance, security, and reliability',
        'Maintain CI/CD pipelines and testing workflows',
        'Use AI-assisted development tools responsibly to improve efficiency'
      ],
      niceToHave: [
        'Smart contract interaction experience',
        'Analytics tooling (GA4, Mixpanel)',
        'Docker or cloud deployment exposure'
      ],
      benefits: [
        'Work on real production systems with real assets',
        'Exposure to regulated, institutional environments',
        'Long-term technical challenges beyond typical Web3 projects'
      ],
      applyUrl: 'https://apply.workable.com/lcx/j/30DA786FFA/'
    }
  ];


  // Convert job positions to structured data format
  const jobPostingsForStructuredData = jobPositions.map((job) => {
    // Combine responsibilities into a single description
    const responsibilitiesText = Array.isArray(job.responsibilities)
      ? job.responsibilities
          .map((resp) => (typeof resp === 'string' ? resp : resp.items?.join(' ') || ''))
          .join(' ')
      : '';

    const description = `${job.fullDescription}\n\nKey Responsibilities: ${responsibilitiesText}\n\nRequirements: ${job.requirements.join(', ')}`;

    return {
      title: job.title,
      description: description,
      location: job.location,
      employmentType: (job.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME') as 'FULL_TIME' | 'PART_TIME',
      datePosted: new Date().toISOString().split('T')[0], // Today's date
      validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 90 days from now
      hiringOrganization: {
        name: 'Toto Finance AG',
        sameAs: 'https://totofinance.co',
      },
      jobLocation: {
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
    };
  });

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="Careers at Toto Finance — Join the Future of Tokenized Assets"
        description="Join Toto Finance in shaping the future of real-world asset tokenization. Explore careers in engineering, business, and marketing."
        url="https://totofinance.co/careers"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Careers', item: 'https://totofinance.co/careers' },
        ]}
      />
      
      {/* Job Posting Structured Data */}
      <JobPostingStructuredData jobs={jobPostingsForStructuredData} />
      
      {/* Gradual Blur Effect */}
      <GradualBlur 
        preset="page-footer" 
        strength={2} 
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            Careers at Toto Finance
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Toto Finance is building regulated, institutional-grade infrastructure for tokenized commodities and real-world assets. We are looking for experienced, motivated professionals who want to work on real systems operating at the intersection of commodities, finance, and blockchain.
          </p>
        </div>
      </section>

      {/* Job Listings Section with Sidebar */}
      <section className="px-6 md:px-8 lg:px-12 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* How to Apply Box */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">
                    How to apply?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    Send your CV and a short statement of motivation to:
                  </p>
                  <a 
                    href="mailto:jobs@totofinance.co" 
                    className="text-blue-600 hover:text-blue-700 font-medium underline inline-flex items-center text-sm mb-4"
                  >
                    📩 jobs@totofinance.co
                  </a>
                  <p className="text-gray-600 leading-relaxed text-sm mb-2">
                    Please include the role you are applying for in the subject line.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Shortlisted candidates will be contacted directly.
                  </p>
                </div>

                {/* Why Join Box */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-medium text-gray-900 mb-6">
                    Why Toto Finance
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-600 font-semibold text-sm">1</span>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-1">
                            Global Market Infrastructure
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Work on systems that digitize and modernize global commodity markets, not experimental consumer apps.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-green-600 font-semibold text-sm">2</span>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-1">
                            Real Assets, Real Impact
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Build technology connected to physical assets, regulated frameworks, and institutional counterparties.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600 font-semibold text-sm">3</span>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-1">
                            Long-Term Platform
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Join a company focused on building durable infrastructure, not short-term hype cycles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Job Listings */}
            <div className="lg:col-span-2">
              <JobList jobs={jobPositions} />
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}

