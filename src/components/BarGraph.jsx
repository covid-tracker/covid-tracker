import React, { Component } from "react";

import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class BarGraph extends Component {
  constructor() {
    super();
    this.state = {
      dataForLineGraph: null,
      dataForProvincialStats: null,
    };
  }

  onBarClick = (obj) => {
    let province = obj.activePayload[0].payload.State;
    this.setState({ dataForLineGraph: province}, () => {
      this.props.lineGraphHandler(this.state.dataForLineGraph);
    });
    // console.log(this.state.dataForLineGraph)
  };

  //   onBarClickTwo = (obj) => {
  //   let province = obj.activePayload[0].payload.State;
  //   this.setState({ dataForProvincialStats: province}, () => {
  //     this.props.provincialStatsHandler(this.state.dataForProvincialStats);
  //   });
  //   // console.log(this.province)
  // };

  render() {
    const { barChartInfo } = this.props;
    return (
      <motion.div whileTap={{ scale: 1.1, x: "-5px", y: "5px" }}>
        <div className="customBox" style={{ textAlign: "center", width: "100%", height: 740 }}>
          <h1 className="barGraphTitle">Total Confirmed Cases</h1>
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
              // onClick={this.onBarClickTwo}
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
