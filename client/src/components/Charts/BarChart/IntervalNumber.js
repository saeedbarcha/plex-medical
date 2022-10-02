import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import { data01 } from "../../../pages/Data/data4";

const IntervalNumber = ({ width, height }) => {
  return (
    <ResponsiveContainer height="100%" width="80%">
      <BarChart
        style={{ background: "transparent" }}
        width={width}
        height={height}
        data={data01}
      >
        <Tooltip />
        <Bar dataKey="pv" fill="#e57b7d" />
        <Bar dataKey="uv" fill="#cc8588" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IntervalNumber;

