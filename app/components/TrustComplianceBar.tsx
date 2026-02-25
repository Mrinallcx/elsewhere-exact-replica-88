/**
 * TrustComplianceBar — E-E-A-T: compact horizontal trust strip.
 * Server component (zero client JS). Placed on homepage, product pages.
 * Mobile: 2×3 grid. Desktop: single row.
 */

import Link from 'next/link';

const TRUST_ITEMS = [
  {
    badge: '🛡',
    label: 'MiCA Registered',
    detail: 'EU ESMA Compliance',
    href: 'https://totofinance.co/doc-imprint',
    aria: 'MiCA ESMA Compliance',
  },
  {
    badge: '⚖',
    label: 'TVTG Compliant',
    detail: 'Liechtenstein Blockchain Law',
    href: '/achievements',
    aria: 'TVTG Compliance',
  },
  {
    badge: '🔒',
    label: 'Hacken Audited',
    detail: 'Smart Contract Security',
    href: 'https://totofinance.co/achievements',
    aria: 'Hacken security audit',
  },
  {
    badge: '🏦',
    label: "Lloyd's Insured",
    detail: 'Vault Insurance Coverage',
    href: '/doc-imprint',
    aria: "Lloyd's of London insurance",
  },
  {
    badge: '✓',
    label: 'LCX Validated',
    detail: 'Licensed Physical Validator',
    href: '/achievements',
    aria: 'LCX validation',
  },
];

interface TrustComplianceBarProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export function TrustComplianceBar({ variant = 'light', compact = false }: TrustComplianceBarProps) {
  const isDark = variant === 'dark';
  const textClass = isDark ? 'text-gray-300' : 'text-gray-700';
  const detailClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const borderClass = isDark ? 'border-gray-600' : 'border-gray-200';
  const hoverClass = isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50';

  return (
    <section
      className={`px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 ${isDark ? 'bg-gray-900/50' : 'bg-white'}`}
      aria-label="Trust and compliance credentials"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-2 md:flex md:flex-row md:flex-wrap gap-3 md:gap-4 ${compact ? 'md:gap-3' : 'md:gap-6'}`}
        >
          {TRUST_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-3 ${compact ? 'py-2 md:py-2' : 'py-3 md:py-4'} px-4 rounded-xl border ${borderClass} ${hoverClass} transition-colors ${textClass}`}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={item.aria}
            >
              <span className="text-lg flex-shrink-0" aria-hidden="true">
                {item.badge}
              </span>
              <div className="min-w-0">
                <span className={`font-medium block ${compact ? 'text-sm' : 'text-sm md:text-base'}`}>
                  {item.label}
                </span>
                <span className={`text-xs ${detailClass} block truncate`}>{item.detail}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
