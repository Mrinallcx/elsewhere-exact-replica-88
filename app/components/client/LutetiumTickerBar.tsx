"use client";

export function LutetiumTickerBar() {
  const items = [
    '$48M+ Global Lutetium Market',
    'Rarest Rare Earth Element',
    '12 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Lutetium Oxide',
    'In-Ground Lutetium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
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
