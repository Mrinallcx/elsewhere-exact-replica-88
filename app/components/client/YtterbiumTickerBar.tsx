"use client";

export function YtterbiumTickerBar() {
  const items = [
    '$185M+ Global Ytterbium Market',
    '1.06 \u03BCm High-Power Fiber Lasers',
    '480 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Ytterbium Oxide',
    'In-Ground Ytterbium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
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
