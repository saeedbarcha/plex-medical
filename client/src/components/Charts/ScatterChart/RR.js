import React from "react";
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  ResponsiveContainer
} from "recharts";
import { data01, data02 } from "../../../pages/Data/data3";
import { data2 } from "../../../pages/Data/data2";

const RRChart = ({ width, height }) => {
  return (
    <ResponsiveContainer height="100%" width="80%">
      <ScatterChart
        style={{ background: "transparent" }}
        width={width}
        height={height}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <XAxis display="none" dataKey="x" name="stature" unit="cm" />
        <YAxis display="none" dataKey="y" name="weight" unit="kg" />
        <ZAxis
          display="none"
          dataKey="z"
          range={[64, 144]}
          name="score"
          unit="km"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        {/* <Legend /> */}
        <Scatter
          markerHeight={2}
          data-radius={2}
          name="A school"
          data={data01}
          fill="#fe706f"
        />
        {/* <Scatter name="B school" data={data02} fill="#fe706f" /> */}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default RRChart;
