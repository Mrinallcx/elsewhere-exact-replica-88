"use client";

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Sector } from 'recharts';

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartSectionProps {
  data: PieChartData[];
}

export function PieChartSection({ data }: PieChartSectionProps) {
  const [activePieIndex, setActivePieIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-md lg:max-w-lg">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            activeIndex={activePieIndex ?? undefined}
            activeShape={(props: any) => {
              const {
                cx,
                cy,
                innerRadius,
                outerRadius,
                startAngle,
                endAngle,
                fill,
              } = props;
              return (
                <Sector
                  cx={cx}
                  cy={cy}
                  innerRadius={innerRadius}
                  outerRadius={outerRadius + 10}
                  startAngle={startAngle}
                  endAngle={endAngle}
                  fill={fill}
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))',
                    transition: 'all 0.3s ease',
                  }}
                />
              );
            }}
            onMouseEnter={(_, index) => setActivePieIndex(index)}
            onMouseLeave={() => setActivePieIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Pie>
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value, entry: any) => (
              <span className="text-gray-700">{value}: {entry.payload.value.toFixed(1)}%</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

