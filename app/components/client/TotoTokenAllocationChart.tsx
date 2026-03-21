"use client";

import { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

type AllocationRow = {
  name: string;
  value: number;
  color: string;
};

const allocation: AllocationRow[] = [
  { name: 'Own to earn (future)', value: 35.0, color: '#1F2937' },
  { name: 'Ecosystem', value: 32.5, color: '#4B5563' },
  { name: 'Own to earn (current)', value: 16.0, color: '#6B7280' },
  { name: 'Community', value: 10.5, color: '#9CA3AF' },
  { name: 'Growth', value: 6.0, color: '#D1D5DB' },
];

type PieLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  fill?: string;
  index?: number;
  labelOffset?: number;
};

function renderPieLabel(props: PieLabelProps) {
  const { cx, cy, midAngle, outerRadius, percent, fill, index, labelOffset = 24 } = props;
  const sliceColor = fill ?? (typeof index === 'number' ? allocation[index]?.color : undefined) ?? '#1F2937';
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + labelOffset;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const textAnchor = x > cx ? 'start' : 'end';
  return (
    <text
      x={x}
      y={y}
      fill={sliceColor}
      textAnchor={textAnchor}
      dominantBaseline="middle"
      className="recharts-text recharts-pie-label-text text-sm"
      style={{ cursor: 'default' }}
    >
      <tspan x={x} dy="0em">
        {(percent * 100).toFixed(1)}%
      </tspan>
    </text>
  );
}

function legendFormatter(value: string, entry: unknown) {
  const p = (entry as { payload?: Record<string, unknown> }).payload;
  const name = typeof p?.name === 'string' ? p.name : null;
  const val = typeof p?.value === 'number' ? p.value : null;
  if (name != null && val != null) {
    return (
      <span className="text-gray-700">
        {name}: {val.toFixed(1)}%
      </span>
    );
  }
  return <span className="text-gray-700">{value}</span>;
}

export function TotoTokenAllocationChart() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const apply = () => setDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const outerRadius = desktop ? '66%' : '58%';
  const labelOffset = desktop ? 28 : 24;

  return (
    <div className="w-full max-w-md lg:max-w-2xl mx-auto">
      <div className="recharts-responsive-container w-full min-w-0 h-[400px] lg:h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <Pie
              data={allocation}
              cx="50%"
              cy="50%"
              dataKey="value"
              nameKey="name"
              innerRadius={0}
              outerRadius={outerRadius}
              paddingAngle={0.35}
              stroke="#fff"
              strokeWidth={2}
              label={(props) => renderPieLabel({ ...props, labelOffset })}
              labelLine={false}
              isAnimationActive
            >
              {allocation.map((entry) => (
                <Cell key={entry.name} fill={entry.color} stroke="#fff" strokeWidth={2} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="horizontal"
              iconType="circle"
              iconSize={14}
              formatter={legendFormatter}
              wrapperStyle={{
                width: '100%',
                paddingTop: 8,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
