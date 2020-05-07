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
class BarChartNew extends Component {
  constructor() {
    super();
    this.state = {
      xAndYValue: "",
    };
  }
  coordinateValues = () => {
    let newArray = this.props.barChartInfo.map((e) => {
      let data = { province: e.Province, cases: e.Cases };
      return data;
    });
    this.setState({
      xAndYValue: newArray,
    });
  };
  render() {
    return (
      <div className="box" style={{ width: "100%", height: 650 }}>
        {/* <button
          className="button is-rounded is-info"
          onClick={this.coordinateValues}
        >
          Pull data
        </button> */}
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
            <Bar dataKey="cases" fill="#4f7cff" barSize={30} radius={2} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default BarChartNew;
