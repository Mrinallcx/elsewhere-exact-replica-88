"use client";

export function ErbiumTickerBar() {
  const items = [
    '$320M+ Global Erbium Market',
    '1.55 μm Wavelength Fiber Amplification',
    '350 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Erbium Oxide',
    'In-Ground Erbium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
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
