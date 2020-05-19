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
      xAndYValue: null,
      activeProvince: {
        name: null,
        cases: null,
      },
      dataForLineGraph: "",
    };
    this.initData = this.initData.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.initData);
  }

  _onBarClick = (obj, $event) => {
    // if (!obj || $event != null) {
    //   return false;
    //   // console.log(`Failed`);
    //   // Captures the chart element you click
    //   // Contained in that is the attributes for province and cases at some depth in the object
    // } else {
    const province = obj.activePayload[0].payload.province;
    const caseCount = obj.activePayload[0].payload.cases;
    alert(`You select ${province}, which has ${caseCount} cases`);
    this.setState({
      dataForLineGraph: province,
    });
    // console.log(this.state.dataForLineGraph);
    // You have the data you need now to use React Hooks to store this as global state that your Victory Chart can read from
    // }
  };

  initData() {
    let newArray = this.props.barChartInfo.map((e) => {
      let data = { province: e.Province, cases: e.Cases };
      return data;
    });
    this.setState({
      xAndYValue: newArray,
    });
  }

  render() {
    return (
      <div className="customBox" style={{ width: "100%", height: 650 }}>
        <ResponsiveContainer>
          <BarChart
            data={this.state.xAndYValue}
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
            <Tooltip
              wrapperStyle={{ borderRadius: 20, backgroundColor: "#f35163" }}
            />
            <Bar
              dataKey="cases"
              fill="#4f7cff"
              barSize={30}
              radius={2}
              onClick={() =>
                this.props.lineGraphHandler(this.state.dataForLineGraph)
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default BarGraph;
