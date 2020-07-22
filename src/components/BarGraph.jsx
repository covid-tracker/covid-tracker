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

class BarGraph extends Component {
  constructor() {
    super();
    this.state = {
      dataForLineGraph: null,
      provinceCaseNumber: null,
    };
  }

  _onBarClick = (obj, $event) => {
    // if (!obj || !$event != null) {
    //   return false;
    //   console.log(`Failed`);
    //   // Captures the chart element you click
    //   // Contained in that is the attributes for province and cases at some depth in the object
    // } else {

    let cases = obj.activePayload[0].payload.Cases;
    let province = obj.activePayload[0].payload.Province;

    console.log(province);
    console.log(cases);

    // if (obj && obj.activePayload && obj.activePayload.length <= 0) {
    //   return province.push(obj.activePayload[0].payload.Cases);
    // }

    alert(`You select ${province}, which has ${cases} cases`);

    this.setState({
      dataForLineGraph: province,
      provinceCaseNumber: cases,
    });

    // You have the data you need now to use React Hooks to store this as global state that your Victory Chart can read from
    // }
    console.log(this.state.provinceCaseNumber);
    console.log(this.state.dataForLineGraph)
  };

  render() {
    const { dataForLineGraph } = this.state;
    const { lineGraphHandler, barChartInfo } = this.props;

    return (
      <div className="customBox" style={{ width: "100%", height: 650 }}>
        <p className="barGra">Double click Province</p>
        <ResponsiveContainer>
          <BarChart
            data={barChartInfo.map((e) => {
              return e.Province !== ""
                ? { Province: e.Province, Cases: e.Cases }
                : null;
            })}
            maxBarSize={20}
            layout={"vertical"}
            style={{ paddingBottom: 20 }}
            onClick={this._onBarClick}
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
            <Bar
              dataKey="Cases"
              fill="#4f7cff"
              barSize={37}
              radius={2}
              onClick={() => lineGraphHandler(dataForLineGraph)}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default BarGraph;