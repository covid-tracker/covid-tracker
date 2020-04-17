import React, { Component } from "react";
import {
  VictoryBar,
  VictoryChart,
  Bar,
  VictoryTheme,
  VictoryLabel,
} from "victory";

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
          style={{ parent: { maxWidth: "60%" } }}
          theme={VictoryTheme.material}
          height={300}
          width={600}
          padding={{ left: 180, right: 0, bottom: 40, top: 30 }}
        >
          <VictoryBar
            dataComponent={<Bar events={{ onMouseOver: handleMouseOver }} />}
            style={
              (this.state.style,
              {
                labels: {
                  fontSize: 200,
                },
              })
            }
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
