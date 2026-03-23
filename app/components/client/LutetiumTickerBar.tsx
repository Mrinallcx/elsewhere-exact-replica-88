"use client";

export function LutetiumTickerBar() {
  const items = [
    '$48M+ Global Lutetium Market',
    'Only 6.5 Tonnes Produced Annually',
    '12 Tonne Supply Gap by 2030',
    '90% Demand from Cancer Detection',
    '$2.85M per Metric Tonne',
    '1:1 Backed Redeemable Lutetium Oxide',
    'USDC + USDT + USAT Settlement',
    'In-Ground Lutetium Future Delivery Contracts',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-fuchsia-900 text-fuchsia-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
