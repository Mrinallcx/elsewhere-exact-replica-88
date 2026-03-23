"use client";

export function PraseodymiumTickerBar() {
  const items = [
    '$12B+ Global NdPr Magnet Market',
    '90% Production Controlled by China',
    '11,500 Tonne Supply Gap by 2030',
    '98% NdPr Magnet Manufacturing in China',
    '2 to 4 kg per EV Motor',
    '1:1 Backed Redeemable Praseodymium Oxide',
    'USDC + USDT + USAT Settlement',
    'In-Ground Praseodymium Future Delivery Contracts',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-lime-900 text-lime-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
