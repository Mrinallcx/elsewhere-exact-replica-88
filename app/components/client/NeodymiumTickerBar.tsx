"use client";

export function NeodymiumTickerBar() {
  const items = [
    '$12B+ Global NdFeB Magnet Market',
    '87% Processing Controlled by China',
    '45,000 Tonne Supply Gap by 2030',
    '1 kg Neodymium per EV Motor',
    '600 kg per Offshore Wind Turbine',
    '1:1 Backed Redeemable Neodymium Oxide',
    'USDC + USDT + USAT Settlement',
    '12% Annual Demand Growth',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-sky-900 text-sky-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
