import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const BPMChart = ({ data, stroke, stopColor }) => {
  return (
    <ResponsiveContainer height="100%" width="80%">
      <AreaChart
        width={400}
        height={40}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00a99d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00a99d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="bpm"
          stroke="#00a99d"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default BPMChart;
