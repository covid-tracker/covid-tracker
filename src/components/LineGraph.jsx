import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



let exampleData = [
  {
    Date: 'Jan 1', Cases: 100,
  },
  {
    Date: 'Feb 1', Cases: 500,
  },
  {
    Date: 'Mar 1', Cases: 300,
  },
  {
    Date: 'Apr 1', Cases: 800,
  },
  {
    Date: 'May 1', Cases: 500,
  },
  {
    Date: 'Jun 1', Cases: 1300,
  },
  {
    Date: 'Jul 1', Cases: 1200,
  },
  {
    Date: 'Auq 1', Cases: 2100,
  },
];

class LineGraph extends Component {
  render() {
    const { lineGraphFinalFunction } = this.props;
    console.log(this.props)
    return (
      <div className="customBox shadowTwo">
        <h3 style={{ textAlign: "center", color: "white", fontSize: 15 }}>
          Province Cases
        </h3>
        <ResponsiveContainer width='100%' aspect={3.5 / 3.1}>
          <LineChart
            width={510}
            height={430}
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
        </ResponsiveContainer>
      </div>
    );
  }
}
export default LineGraph;
