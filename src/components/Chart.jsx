import React, { Component } from "react";
import {
  // VictoryBar,
  VictoryChart,
  // Bar,
  // VictoryTheme,
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

// const InterpolationSelect = ({ currentValue, values, onChange }) => (
//   <select onChange={onChange} value={currentValue} style={{ width: 75 }}>
//     {values.map((value) => (
//       <option value={value} key={value}>
//         {value}
//       </option>
//     ))}
//   </select>
// );

class Chart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     clicked: false,
  //     style: {
  //       data: { fill: "teal" },
  //     },
  //   };
  // }

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
      <div>
        {/* <InterpolationSelect
          currentValue={this.state.interpolation}
          values={
            this.state.polar ? polarInterpolations : cartesianInterpolations
          }
          onChange={(event) =>
            this.setState({ interpolation: event.target.value })
          }
        />
        <input
          type="checkbox"
          id="polar"
          value={this.state.polar}
          onChange={(event) =>
            this.setState({
              polar: event.target.checked,
              interpolation: "linear",
            })
          }
          style={{ marginLeft: 25, marginRight: 5 }}
        />
        <label htmlFor="polar">polar</label> */}
        <button className="button" onClick={() => this.coordinateValues()}>
          Click Me
        </button>
        <VictoryChart height={600} width={600}>
          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            data={this.state.xAndYValue}
            style={{ data: { stroke: "#c43a31" } }}
          />
          <VictoryScatter
            data={this.state.xAndYValue}
            size={4}
            style={{ data: { fill: "#c43a31" } }}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
