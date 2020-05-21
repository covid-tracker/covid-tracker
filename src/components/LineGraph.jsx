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
  render() {
    console.log(this.props.lineGraphFinalFunction);
    return (
      <div className="customBox shadowTwo">
        <VictoryChart
          className="image"
          height={500}
          width={600}
          animate={{ duration: 0, easing: "exp" }}
        >
          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            style={{ data: { stroke: "#4F7CFF" } }}
            data={this.props.lineGraphFinalFunction}
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
