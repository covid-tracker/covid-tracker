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
import { motion } from "framer-motion";

class LineGraph extends Component {
  lineGraphRender = () => {
    if (this.props.lineGraphFinalFunction.length === 0) {
      return (
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ ease: "linear", duration: 2, loop: Infinity }}
        >
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
            CLICK A PROVINCE FROM "BAR GRAPH" TO DISPLAY CASE DATA
          </h2>
        </motion.div>
      );
    } else {
      return (
        <div className="customBox shadowTwo">
          <h1 className="title" style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Provincial Recovered Cases
          </h1>
          <ResponsiveContainer width="100%" aspect={3.6 / 6
          }>
            <LineChart
              // width={510}
              // height={430}
              data={this.props.lineGraphFinalFunction}
              margin={{ top: 0, right: 5, left: 0, bottom: 0 }}
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
    return <div>{this.lineGraphRender()}</div>;
  }
}
export default LineGraph;
