"use client";

export function SamariumTickerBar() {
  const items = [
    '$3.8B+ Global Samarium Market',
    '350°C Operating Temperature',
    '4,200 t Supply Gap by 2030',
    '1:1 Backed Redeemable Samarium Metal',
    'In-Ground Samarium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-slate-800 text-slate-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
