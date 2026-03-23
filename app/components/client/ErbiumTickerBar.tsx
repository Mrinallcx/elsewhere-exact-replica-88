"use client";

export function ErbiumTickerBar() {
  const items = [
    '$320M+ Global Erbium Market',
    'Only 385 Tonnes Produced Annually',
    '350 Tonne Supply Gap by 2030',
    '70% Demand from Fiber Optic Amplifiers',
    "1.55 μm: The Internet's Wavelength",
    '1:1 Backed Redeemable Erbium Oxide',
    'USDC + USDT + USAT Settlement',
    '28% Annual Internet Traffic Growth',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-rose-900 text-rose-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
