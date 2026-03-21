/**
 * ProductTrustSection — E-E-A-T: detailed 3-column trust section for flagship product pages.
 * Shows specific, verifiable data: Regulatory, Custody & Insurance, Audit & Certification.
 * Server component.
 */

import Link from 'next/link';

interface ProductTrustSectionProps {
  assetName: string;
  regulatory: {
    frameworks: string;
    proofLink?: string;
  };
  custody: {
    entity: string;
    location?: string;
    insurance?: string;
    vaultPartners?: string;
  };
  audit: {
    summary: string;
    auditLink?: string;
    certification?: string;
  };
}

export function ProductTrustSection({
  assetName,
  regulatory,
  custody,
  audit,
}: ProductTrustSectionProps) {
  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white border-t border-gray-100"
      aria-label={`Trust and compliance for ${assetName}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
          Trust &amp; Compliance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Regulatory */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{regulatory.frameworks}</p>
            {regulatory.proofLink && (
              <Link
                href={regulatory.proofLink}
                className="text-sm font-medium text-[#00375e] hover:underline"
              >
                View compliance details →
              </Link>
            )}
          </div>

          {/* Custody & Insurance */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custody &amp; Insurance</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">{custody.entity}</strong>
              {custody.location && ` · ${custody.location}`}
            </p>
            {custody.insurance && (
              <p className="text-sm text-gray-600 leading-relaxed mt-2">{custody.insurance}</p>
            )}
            {custody.vaultPartners && (
              <p className="text-sm text-gray-600 leading-relaxed mt-1">{custody.vaultPartners}</p>
            )}
          </div>

          {/* Audit & Certification */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit &amp; Certification</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">{audit.summary}</p>
            {audit.auditLink && (
              <a
                href={audit.auditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#00375e] hover:underline block mb-2"
              >
                View audit report →
              </a>
            )}
            {audit.certification && (
              <p className="text-sm text-gray-600 leading-relaxed">{audit.certification}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
