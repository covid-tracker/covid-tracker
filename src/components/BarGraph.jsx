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
      xAndYValue: "",
    };
    this.initData = this.initData.bind(this);
  }
  componentDidMount() {
    window.addEventListener("load", this.initData);
  }

  _onClickMap = (map, evt) => {
    console.log(map);
    console.log(evt);
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
            width={"auto"}
            height={"auto"}
            data={this.state.xAndYValue}
            maxBarSize={20}
            layout={"vertical"}
            style={{ paddingBottom: 20 }}
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
              onClick={this._onClickMap}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default BarGraph;
