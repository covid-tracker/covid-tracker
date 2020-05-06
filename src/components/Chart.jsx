import React, { Component } from "react";
import {
  // VictoryBar,
  VictoryChart,
  // Bar,
  VictoryTheme,
  VictoryLine,
  VictoryScatter,
} from "victory";

const cartesianInterpolations = [
  "basis",
  "bundle",
  "cardinal",
  "catmullRom",
  "linear",
  "monotoneX",
  "monotoneY",
  "natural",
  "step",
  "stepAfter",
  "stepBefore",
];
const polarInterpolations = ["basis", "cardinal", "catmullRom", "linear"];

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      xAndYValue: [],
    };
  }

  coordinateValues = () => {
    let newArray = this.props.provinceNames.map((e) => {
      let data = { x: e.Date, y: e.Cases };
      return data;
    });
    this.setState({
      xAndYValue: newArray,
    });
  };

  render() {
    // console.log(this.state.xAndYValue);
    return (
      <div>
        <button className="button" onClick={() => this.coordinateValues()}>
          Click Me
        </button>
        <VictoryChart
          height={600}
          width={600}
          animate={{ duration: 1000, easing: "elastic" }}
        >
          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            style={{ data: { stroke: "#c43a31" } }}
            data={this.state.xAndYValue}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE",
                }),
              },
            }}
          />
          <VictoryScatter
            size={4}
            style={{ data: { fill: "#c43a31" } }}
            data={this.state.xAndYValue}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE",
                }),
              },
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
