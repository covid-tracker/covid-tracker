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
      // isLoaded: false,
    };
  }

  _onBarClick = (obj, $event) => {
    // if (!obj || !$event != null) {
    //   return false;
    // console.log(`Failed`);
    //   // Captures the chart element you click
    //   // Contained in that is the attributes for province and cases at some depth in the object
    // } else {
    const province = obj.activePayload[0].payload.province;
    // const caseCount = obj.activePayload[0].payload.cases;
    // alert(`You select ${province}, which has ${caseCount} cases`);
    this.setState({
      dataForLineGraph: province,
      // init: 1,
    });
    // You have the data you need now to use React Hooks to stoare this as global state that your Victory Chart can read from
    // }
  };

  render() {
    const { dataForLineGraph } = this.state;
    const { lineGraphHandler, barChartInfo } = this.props;
    return (
      <div className="customBox" style={{ width: "100%", height: 650 }}>
        <ResponsiveContainer>
          <BarChart
            data={barChartInfo.map((e) => {
              return e.Province !== ""
                ? { province: e.Province, cases: e.Cases }
                : {};
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
              dataKey={"province"}
              stroke="#f35163"
            />
            <Tooltip onClick={() => lineGraphHandler(dataForLineGraph)} />
            <Bar
              dataKey="cases"
              fill="#4f7cff"
              barSize={30}
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
