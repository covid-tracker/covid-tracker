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
      xValue: {},
      yValue: {},
    };
  }

  coordinateValues = () => {
    const data = [
      {
        x: this.props.provinceNames.map((e) => e.Cases),
        y: this.props.provinceNames.map((e) => e.Date),
      },
    ];
    this.setState({
      xValue: data.x,
      yValue: data.y,
    });
  };

  render() {
    // console.log(data);
    // const handleMouseOver = () => {
    //   const fillColor = this.state.clicked ? "blue" : "lightred";
    //   const clicked = !this.state.clicked;
    //   this.setState({
    //     clicked,
    //     style: {
    //       data: { fill: fillColor },
    //     },
    //   });
    // };

    // return (
    //   <div>
    //     <VictoryChart
    //       domainPadding={{ x: 10, y: [0, 10] }}
    //       // scale={{ x: "province" }}
    //       theme={VictoryTheme.material}
    //       height={500}
    //       width={900}
    //       padding={{ left: 180, top: 30 }}
    //     >
    //       <VictoryBar
    //         dataComponent={<Bar events={{ onMouseOver: handleMouseOver }} />}
    //         data={this.props.provinceNames}
    //         x="province"
    //         y="cases"
    //         horizontal={true}
    //         animate={{
    //           duration: 300,
    //           onLoad: { duration: 100 },
    //         }}
    //       />
    //     </VictoryChart>
    //   </div>
    // );

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
        <VictoryChart
          height={600}
          width={600}
          onClick={this.coordinateValues()}
        >
          {/* <ul>
            {data.y.map((e) => {
              return <li>{e}</li>;
            })}
          </ul> */}

          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            style={{ data: { stroke: "#c43a31" } }}
          />
          <VictoryScatter size={4} style={{ data: { fill: "#c43a31" } }} />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
