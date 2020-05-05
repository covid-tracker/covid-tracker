import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

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
      <div className="box">
        <button
          className="button is-rounded is-info"
          onClick={this.coordinateValues}
        >
          Pull data
        </button>
        <BarChart
          width={500}
          height={600}
          data={this.state.xAndYValue}
          maxBarSize={20}
          //   style={{ paddingLeft: 20 }}
          layout={"vertical"}
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
      </div>
    );
  }
}

export default BarChartNew;
