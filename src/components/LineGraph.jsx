import React, { Component } from "react";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
// const cartesianInterpolations = [
//   "basis",
//   "bundle",
//   "cardinal",
//   "catmullRom",
//   "linear",
//   "monotoneX",
//   "monotoneY",
//   "natural",
//   "step",
//   "stepAfter",
//   "stepBefore",
// ];
// const polarInterpolations = ["basis", "cardinal", "catmullRom", "linear"];

class LineGraph extends Component {
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
    console.log(this.state.xAndYValue);
    return (
      <div className="customBox shadowTwo">
        {/* <button className="button" onClick={() => this.coordinateValues()}>
          Click Me
        </button> */}
        <VictoryChart
          className="image"
          height={500}
          width={600}
          animate={{ duration: 0, easing: "exp" }}
        >
          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            style={{ data: { stroke: "#4F7CFF" } }}
            data={this.state.xAndYValue}
            theme={VictoryTheme.material}
            animate={{
              onExit: {
                duration: 300,
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

export default LineGraph;
