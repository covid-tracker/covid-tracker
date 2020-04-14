import React, { Component } from "react";
import { VictoryBar, VictoryChart, Bar } from "victory";

const data = [
  { Name: "Ontario", Cases: 2000 },
  { Name: "Grand Princess", Cases: 500 },
  { Name: "Yukon", Cases: 550 },
  { Name: "BC", Cases: 800 },
];

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      style: {
        data: { fill: "tomato" },
      },
    };
  }

  render() {
    const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "blue" : "tomato";
      const clicked = !this.state.clicked;
      this.setState({
        clicked,
        style: {
          data: { fill: fillColor },
        },
      });
    };
    return (
      <div>
        <VictoryChart
          height={400}
          width={400}
          domainPadding={{ x: 10, y: [0, 10] }}
          scale={{ x: "Name" }}
        >
          <VictoryBar
            dataComponent={<Bar events={{ onMouseOver: handleMouseOver }} />}
            style={this.state.style}
            data={data}
            x="Name"
            y="Cases"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Chart;
