"use client";

export function HolmiumTickerBar() {
  const items = [
    '$95M+ Global Holmium Market',
    '2.1 μm Wavelength Medical Lasers',
    '32 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Holmium Oxide',
    'In-Ground Holmium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-emerald-900 text-emerald-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
