"use client";

export function GadoliniumTickerBar() {
  const items = [
    '$420M+ Global Gadolinium Market',
    '100M+ MRI Scans Annually',
    '950 Tonne Supply Gap by 2030',
    '95% Demand from Healthcare Applications',
    '1:1 Backed Redeemable Gadolinium Oxide',
    'USDC + USDT + USAT Settlement',
    '8% Annual Growth in Contrast MRI',
    'In-Ground Gadolinium Future Delivery Contracts',
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
