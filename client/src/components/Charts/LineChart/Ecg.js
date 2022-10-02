import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Legend,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import { data2 } from "../../../pages/Data/data2";

const ECGChart = ({ width, height }) => {
  return (
    <ResponsiveContainer height="100%" width="80%">
      <AreaChart
        style={{ background: "transparent" }}
        width={width}
        height={height}
        data={data2}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient
            id="colorPv"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          ></linearGradient>
        </defs>
        <Tooltip />

        <Area
          type="linear"
          dataKey="pv"
          stroke="#fe706f"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="linear"
          dataKey="pv1"
          stroke="#65bceb"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default ECGChart;
