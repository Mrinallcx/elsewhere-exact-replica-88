"use client";

export function SilverTickerBar() {
  const items = [
    '$60+ All-Time High 2025',
    '120M oz Supply Deficit (5th Consecutive Year)',
    'Industrial Demand at Record Highs',
    '29% Solar Panel Demand',
    'EVs Use 67-79% More Silver Than ICE Vehicles',
    'IT Power Capacity Up 5,252% Since 2000',
    '1:1 Backed Redeemable Silver Bullion',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    'Silver Outperforms Nvidia, Nasdaq, Gold Combined',
  ];

  const tickerContent = items.map((item) => `${item}  •  `).join('');

  return (
    <div className="w-full bg-gray-900 text-white py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
