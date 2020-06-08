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

const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 9800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 3800,
  },
  {
    name: "Page G",
    pv: 4300,
  },
];

class LineGraph2 extends Component {
  render() {
    console.log(this.props.lineGraphFinalFunction);
    return (
      <div className="customBox shadowTwo">
        {/* <VictoryChart
          className="image"
          height={500}
          width={600}
          animate={{ duration: 0, easing: "exp" }}
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fill: "white", fontSize: 20 },
          }}
        >
          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            style={{
              tickLabels: { fill: "white", fontSize: 20 },
              data: {
                stroke: "#4F7CFF",
                strokeWidth: 7,
                strokeLinecap: "round",
              },
              // labels: { fontSize: 15, fill: "#111", padding: 5 },
            }}
            data={this.props.lineGraphFinalFunction}
            theme={VictoryTheme.material}
            // labels={({ datum }) => datum.y}
            animate={{
              onExit: {
                duration: 100,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE",
                }),
              },
            }}
          />
        </VictoryChart> */}

        <LineChart
          width={400}
          height={460}
          data={this.props.lineGraphFinalFunction}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}
export default LineGraph2;
