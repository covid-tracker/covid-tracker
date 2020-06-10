import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

class LineGraph extends Component {
  render() {
    const { lineGraphFinalFunction } = this.props;
    return (
      <div className="customBox shadowTwo">
        <LineChart
          width={400}
          height={480}
          data={lineGraphFinalFunction}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="Date" stroke="#f35163" />
          <YAxis stroke="#f35163" />
          <Tooltip />
          <Line
            dot={false}
            animationDuration={3000}
            type="monotone"
            dataKey="Cases"
            stroke="#4f7cff"
            strokeWidth="6"
          />
        </LineChart>
      </div>
    );
  }
}
export default LineGraph;
