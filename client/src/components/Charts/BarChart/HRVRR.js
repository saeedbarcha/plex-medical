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
import { data02 } from "../../../pages/Data/data4";

const HRVRr = ({ width, height }) => {
  return (
    <ResponsiveContainer height="100%" width="80%">
      <BarChart
        style={{ background: "transparent" }}
        width={width}
        height={height}
        data={data02}
      >
        <Tooltip />
        <Bar dataKey="uv" fill="#cc8588" />
        <Bar dataKey="pv" fill="#e57b7d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HRVRr;
