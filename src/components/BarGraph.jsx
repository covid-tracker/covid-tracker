import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

class BarGraph extends Component {
  constructor() {
    super();
    this.state = {
      dataForLineGraph: null,
    };
  }

  onBarClick = (obj) => {
    let province = obj.activePayload[0].payload.State;
    this.setState({ dataForLineGraph: province}, () => {
      this.props.lineGraphHandler(this.state.dataForLineGraph);
    });
  };

  render() {
    const { barChartInfo } = this.props;
    // console.log(this.barChartInfo)
    return (
      <motion.div whileTap={{ scale: 1.1, x: "-5px", y: "5px" }}>
        <div className="customBox" style={{ textAlign: "center", width: "100%", height: 740 }}>
          <h1 className="title">Total Confirmed Cases</h1>
          <ResponsiveContainer>
            <BarChart
              data={barChartInfo.map((e) => {
                return e.Region.province !== ""
                  ? { Province: e.Region.province, Cases: e.Confirmed}
                  : null;
              })}
              maxBarSize={20}
              layout={"vertical"}
              style={{ paddingBottom: 20 }}
              onClick={this.onBarClick}
            >
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis type={"number"} orientation={"bottom"} stroke="#f35163" />
              <YAxis
                type={"category"}
                orientation={"left"}
                dataKey={"Province"}
                stroke="#f35163"
              />
              <Tooltip />
              <Bar dataKey="Cases" fill="#4f7cff" barSize={37} radius={2} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    );
  }
}

export default BarGraph;
