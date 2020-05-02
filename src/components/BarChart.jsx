import React, { Component } from "react";
import { VictoryChart, VictoryTheme, VictoryBar } from "victory";

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
    console.log(newArray);

    this.setState({
      xAndYValue: newArray,
    });
    console.log(this.state.xAndYValue);
  };

  render() {
    return (
      <div>
        <button
          className="button button-rounded"
          onClick={this.coordinateValues}
        >
          Click
        </button>
        <VictoryChart
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
            style={{
              data: { fill: "#c43a31" },
            }}
            style={{ marginLeft: 100 }}
            data={this.state.xAndYValue}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default BarChart;
