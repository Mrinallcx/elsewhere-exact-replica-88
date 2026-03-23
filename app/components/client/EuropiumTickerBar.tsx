"use client";

export function EuropiumTickerBar() {
  const items = [
    '$1.2B+ Global Europium Market',
    'Only 0.05% of Rare Earth Deposits',
    '650 Tonne Supply Gap by 2030',
    '95% Demand from Display & Lighting Phosphors',
    '1:1 Backed Redeemable Europium Oxide',
    'USDC + USDT + USAT Settlement',
    '18% CAGR Display Market Growth',
    'In-Ground Europium Future Delivery Contracts',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-violet-900 text-violet-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
