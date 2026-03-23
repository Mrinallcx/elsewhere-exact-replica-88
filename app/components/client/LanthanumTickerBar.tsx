"use client";

export function LanthanumTickerBar() {
  const items = [
    '$1.8B+ Global Lanthanum Market',
    '85% Production Controlled by China',
    '48,000 Tonne Supply Gap by 2030',
    '40% Demand from Petroleum Catalysts',
    '100M Barrels/Day Refined Through Lanthanum',
    '1:1 Backed Redeemable Lanthanum Oxide',
    'USDC + USDT + USAT Settlement',
    'In-Ground Lanthanum Future Delivery Contracts',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-cyan-900 text-cyan-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
