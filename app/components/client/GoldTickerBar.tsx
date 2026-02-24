"use client";

export function GoldTickerBar() {
  const items = [
    '$4,135/oz Average Q4 2025 Record High',
    '53 New All-Time Highs in 2025',
    '863 Tonnes Central Bank Buying',
    '5,000+ Tonnes Total Demand Record',
    '$555B Total Demand Value',
    '$5,000/oz 2026 Forecast',
    '1:1 Backed Redeemable Gold Bullion',
    'USDC + USDT + USAT Instant Settlement',
    'DeFi Yield, Loans & Secondary Trading',
    'Central Banks Diversifying from USD',
  ];

  const tickerContent = items.map((item) => `${item}  \u2022  `).join('');

  return (
    <div className="w-full bg-yellow-900 text-yellow-50 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
        <span className="text-sm font-medium tracking-wide px-4">{tickerContent}</span>
      </div>
    </div>
  );
}
