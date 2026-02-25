/**
 * TrustComplianceBar — compact horizontal trust strip for E-E-A-T.
 * Server component. Use on homepage, product pages.
 * variant: 'light' | 'dark', compact: boolean. Mobile: 2×3 grid. Desktop: single row.
 */

import Link from 'next/link';

const MICA_WHITEPAPER_URL = 'https://tiamonds.s3.us-east-1.amazonaws.com/website/Tiamonds+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf';
const HACKEN_AUDIT_URL = 'https://hacken.io/audits/tiamonds/sca-tiamonds-toto-contracts-jan2025/';

const badges = [
  { icon: '🛡', label: 'MiCA Registered', detail: 'EU ESMA Compliance', href: MICA_WHITEPAPER_URL, external: true },
  { icon: '⚖', label: 'TVTG Compliant', detail: 'Liechtenstein Blockchain Law', href: '/achievements', external: false },
  { icon: '🔒', label: 'Hacken Audited', detail: 'Smart Contract Security', href: HACKEN_AUDIT_URL, external: true },
  { icon: '🏦', label: "Lloyd's Insured", detail: 'Vault Insurance Coverage', href: '/doc-imprint', external: false },
  { icon: '✓', label: 'LCX Validated', detail: 'Licensed Physical Validator', href: '/achievements', external: false },
];

interface TrustComplianceBarProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export function TrustComplianceBar({ variant = 'light', compact = false }: TrustComplianceBarProps) {
  const isDark = variant === 'dark';
  const bg = isDark ? 'bg-gray-900' : 'bg-gray-100';
  const text = isDark ? 'text-gray-200' : 'text-gray-800';
  const subtext = isDark ? 'text-gray-400' : 'text-gray-600';
  const border = isDark ? 'border-gray-700' : 'border-gray-200';
  const hover = isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200';

  return (
    <section className={`${bg} py-6 md:py-8`} aria-label="Trust and compliance credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={`grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4 ${compact ? 'md:gap-3' : ''}`}>
          {badges.map((badge) => {
            const content = (
              <>
                <span className="text-lg md:text-xl mr-2" aria-hidden="true">{badge.icon}</span>
                <span className="flex flex-col items-start md:items-center text-left md:text-center">
                  <span className={`font-semibold text-sm ${text}`}>{badge.label}</span>
                  <span className={`text-xs ${subtext}`}>{badge.detail}</span>
                </span>
              </>
            );
            const className = `inline-flex items-center ${compact ? 'px-3 py-2' : 'px-4 py-3'} rounded-lg border ${border} ${hover} transition-colors`;
            if (badge.external) {
              return (
                <a
                  key={badge.label}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                  <span className="ml-1 text-xs opacity-70">↗</span>
                </a>
              );
            }
            return (
              <Link key={badge.label} href={badge.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
