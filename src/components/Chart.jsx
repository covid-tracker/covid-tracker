import React, { Component } from "react";
import { VictoryBar, VictoryChart, Bar, VictoryTheme } from "victory";
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
          // scale={{ x: "province" }}
          theme={VictoryTheme.material}
          height={500}
          width={900}
          padding={{ left: 180, top: 30 }}
        >
          <VictoryBar
            dataComponent={<Bar events={{ onMouseOver: handleMouseOver }} />}
            data={this.props.provinceNames}
            x="province"
            y="cases"
            horizontal={true}
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
