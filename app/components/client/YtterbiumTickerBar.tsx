"use client";

export function YtterbiumTickerBar() {
  const items = [
    '$185M+ Global Ytterbium Market',
    '65% of Metal Cutting Now Fiber Laser',
    '480 Tonne Supply Gap by 2030',
    '87% Production Controlled by China',
    '1:1 Backed Redeemable Ytterbium Oxide',
    'USDC + USDT + USAT Settlement',
    'In-Ground Ytterbium Future Delivery Contracts',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-orange-950 text-orange-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
