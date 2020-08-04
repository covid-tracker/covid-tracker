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
    Date: "Jan 1",
    Cases: 100,
  },
  {
    Date: "Feb 1",
    Cases: 500,
  },
  {
    Date: "Mar 1",
    Cases: 300,
  },
  {
    Date: "Apr 1",
    Cases: 800,
  },
  {
    Date: "May 1",
    Cases: 500,
  },
  {
    Date: "Jun 1",
    Cases: 1300,
  },
  {
    Date: "Jul 1",
    Cases: 1200,
  },
  {
    Date: "Auq 1",
    Cases: 2100,
  },
];

class LineGraph extends Component {
  lineGraphRender = () => {
    if (this.props.lineGraphFinalFunction.length === 0) {
      return (
        <h2
          className="customBox shadowTwo"
          style={{
            fontSize: "2rem",
            color: "#f35163",
            textAlign: "center",
            height: "40rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Please choose a province by clicking on bar graph
        </h2>
      );
    } else {
      return (
        <div className="customBox shadowTwo">
          <h3 style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Province Cases
            {/* Put the line graph display province here here here */}
          </h3>
          <ResponsiveContainer width="100%" aspect={3.5 / 3.75}>
            <LineChart
              width={510}
              height={430}
              data={this.props.lineGraphFinalFunction}
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
  };

  render() {
    // const { lineGraphFinalFunction } = this.props;
    console.log(this.props.lineGraphFinalFunction);
    return <div>{this.lineGraphRender()}</div>;
  }
}
export default LineGraph;
