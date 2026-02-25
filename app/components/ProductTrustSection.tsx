/**
 * ProductTrustSection — 3-column trust section for flagship product pages.
 * Regulatory | Custody & Insurance | Audit & Certification.
 * Server component.
 */

import Link from 'next/link';

const HACKEN_AUDIT_URL = 'https://hacken.io/audits/tiamonds/sca-tiamonds-toto-contracts-jan2025/';

interface ProductTrustSectionProps {
  assetName: string;
  custody?: string;
  vaultPartners?: string;
  certification?: string;
  showGIA?: boolean;
}

export function ProductTrustSection({
  assetName,
  custody = 'TotoHolding AG, Vaduz',
  vaultPartners = 'Loomis, Brink\'s, Swiss vaults, Singapore Freeport',
  certification = 'LBMA Standards',
  showGIA = false,
}: ProductTrustSectionProps) {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 bg-gray-50" aria-labelledby="trust-section-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="trust-section-heading" className="text-2xl md:text-3xl font-light text-gray-900 mb-10">
          Trust &amp; Compliance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Regulatory</h3>
            <p className="text-gray-900 font-medium mb-2">MiCA (ESMA) · TVTG (FMA Liechtenstein)</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Toto Finance is registered and compliant under EU Markets in Crypto-Assets (MiCA) and Liechtenstein&apos;s Blockchain Act (TVTG). Physical validation by LCX under FMA oversight.
            </p>
            <Link href="/achievements" className="inline-block mt-3 text-sm font-medium text-[#00375e] hover:underline">
              View regulatory milestones →
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Custody &amp; Insurance</h3>
            <p className="text-gray-900 font-medium mb-2">{custody}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">{vaultPartners}</p>
            <p className="text-sm text-gray-600">Lloyd&apos;s of London vault insurance. Named vault partners with audited chain of custody.</p>
            <Link href="/doc-imprint" className="inline-block mt-3 text-sm font-medium text-[#00375e] hover:underline">
              Legal &amp; imprint →
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Audit &amp; Certification</h3>
            <p className="text-gray-900 font-medium mb-2">Hacken audit (Jan 2025)</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Smart contracts audited by Hacken. Direct link to full report.
            </p>
            {showGIA && (
              <p className="text-sm text-gray-600 leading-relaxed mb-2">GIA certification for diamonds.</p>
            )}
            <p className="text-sm text-gray-600">{certification}</p>
            <a
              href={HACKEN_AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#00375e] hover:underline"
            >
              Hacken audit report <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
