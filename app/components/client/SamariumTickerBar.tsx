"use client";

export function SamariumTickerBar() {
  const items = [
    '$3.8B+ Global Samarium Market',
    '85% Production Controlled by China',
    '4,200 Tonne Supply Gap by 2030',
    'SmCo Magnets Operate at 350°C',
    '12 to 15 kg per F-35 Fighter Jet',
    '1:1 Backed Redeemable Samarium Metal',
    'USDC + USDT + USAT Settlement',
    'In-Ground Samarium Future Delivery Contracts',
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
