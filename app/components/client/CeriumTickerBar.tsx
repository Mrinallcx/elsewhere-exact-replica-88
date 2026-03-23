"use client";

export function CeriumTickerBar() {
  const items = [
    '$2.4B+ Global Cerium Market',
    '45% Automotive Catalyst Demand',
    '65,000 Tonne Supply Gap by 2030',
    '88% of Production from One Country',
    '1:1 Backed Redeemable Cerium Oxide',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    'Access Has Never Been This Concentrated',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-orange-900 text-orange-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
