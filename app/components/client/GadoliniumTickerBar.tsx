"use client";

export function GadoliniumTickerBar() {
  const items = [
    '$420M+ Global Gadolinium Market',
    '95% MRI & Medical Demand',
    '950 Tonne Supply Gap by 2030',
    '1:1 Backed Redeemable Gadolinium Oxide',
    'In-Ground Gadolinium Future Delivery Contracts',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    '$16T+ Tokenized Asset Market by 2030',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-teal-900 text-teal-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
