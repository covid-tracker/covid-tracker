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
    };
  }

  _onBarClick = (obj) => {
    let province = obj.activePayload[0].payload.Province;
    this.setState({ dataForLineGraph: province }, () => {
      this.props.lineGraphHandler(this.state.dataForLineGraph);
    });
  };

  render() {
    const { barChartInfo } = this.props;
    return (
      <div className="customBox" style={{ width: "100%", height: 730 }}>
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
            <Bar dataKey="Cases" fill="#4f7cff" barSize={37} radius={2} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default BarGraph;
