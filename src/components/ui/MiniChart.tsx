import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

type MiniChartProps = {
  data: number[];
  positive?: boolean;
  height?: number;
};

export function MiniChart({ data, positive = true, height = 40 }: MiniChartProps) {
  const chartData = data.map((v, i) => ({ i, v }));
  const color = positive ? '#22c55e' : '#ef4444';

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        <Line
          type="monotone"
          dataKey="v"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
        <Tooltip
          contentStyle={{ display: 'none' }}
          cursor={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
