import React, { Component } from "react";
import { VictoryBar, VictoryChart, Bar } from "victory";
class Chart extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      style: {
        data: { fill: "teal" },
      },
    };
  }
  render() {
    const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "blue" : "lightred";
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
          height={200}
          width={400}
          domainPadding={{ x: 10, y: [0, 10] }}
          scale={{ x: "province" }}
          style={{ parent: { maxWidth: "60%" } }}
        >
          <VictoryBar
            dataComponent={<Bar events={{ onMouseOver: handleMouseOver }} />}
            style={this.state.style}
            data={this.props.provinceNames}
            x="province"
            y="cases"
            animate={{
              duration: 300,
              onLoad: { duration: 100 },
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default Chart;
