import React, { Component } from "react";
import { VictoryChart, VictoryTheme, VictoryBar, VictoryLabel } from "victory";
class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      xAndYValue: [],
    };
  }

  coordinateValues = () => {
    let newArray = this.props.barChartInfo.map((e) => {
      let data = { x: e.Province, y: e.Cases };
      return data;
    });
    this.setState({
      xAndYValue: newArray,
    });
  };
  render() {
    return (
      <div>
        <button
          className="button is-rounded is-success"
          onClick={this.coordinateValues}
        >
          Click
        </button>
        <VictoryChart
          height={650}
          style={{ marginLeft: 100 }}
          theme={VictoryTheme.material}
          domainPadding={{ x: 10 }}
          animate={{
            duration: 700,
            onLoad: { duration: 500 },
          }}
        >
          <VictoryBar
            horizontal
            cornerRadius={{ topLeft: 10, topRight: 10 }}
            labels={({ datum }) => datum.y}
            style={{
              data: { fill: "#4f7cff" },
              labels: { fill: "#4f7cff" },
            }}
            data={this.state.xAndYValue}
            labelComponent={<VictoryLabel dy={0} />}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default BarChart;
