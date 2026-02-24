"use client";

export function TinTickerBar() {
  const items = [
    '$56,800 All-Time High Jan 2026',
    '40,000 t/year Deficit by 2030',
    '50% of Tin Demand is Solder',
    '71% Supply Disruptions from Myanmar & Indonesia',
    '1:1 Backed Redeemable Tin Ingots',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$580B Data Center Investment 2025',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-slate-800 text-slate-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
