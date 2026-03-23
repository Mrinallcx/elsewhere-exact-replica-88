"use client";

export function PromethiumTickerBar() {
  const items = [
    '$8M+ Global Promethium Market',
    'Only Radioactive Rare Earth',
    '<100g Annual Production',
    '1:1 Backed Redeemable Promethium Isotopes',
    'In-Ground Promethium Future Delivery Contracts',
    'USDC + USDT + USAT Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-amber-900 text-amber-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
