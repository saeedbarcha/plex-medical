import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const CVPChart = ({ data, width, height }) => {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <AreaChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <Area
          type="linear"
          dataKey="cvp"
          stroke="#b3f1ff"
          fillOpacity={1}
          fill="url(#colorUv3)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default CVPChart;
