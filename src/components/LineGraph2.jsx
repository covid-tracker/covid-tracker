import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class LineGraph2 extends Component {
  render() {
    console.log(this.props.lineGraphFinalFunction);
    return (
      <div className="customBox shadowTwo">
        {/* <ResponsiveContainer width={550}> */}
        <LineChart
          width={400}
          height={480}
          data={this.props.lineGraphFinalFunction}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
        </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
  }
}
export default LineGraph2;
