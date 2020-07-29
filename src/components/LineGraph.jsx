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
        <h3 style={{ textAlign: "center", color: "white", fontSize: 15 }}>
          Province Cases
        </h3>
        <LineChart
          width={580}
          height={525}
          data={lineGraphFinalFunction}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          style={{ margin: "0 auto" }}
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
