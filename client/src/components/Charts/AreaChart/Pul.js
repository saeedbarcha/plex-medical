import React from "react";
import { useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const PulChart = ({ data, width, height }) => {
  return (
    <ResponsiveContainer height="80%" width="80%">
      <AreaChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00a99d" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#00a99d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#00a99d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PulChart;
