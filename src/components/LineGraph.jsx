import React, { Component } from "react";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from "victory";

class LineGraph extends Component {
  render() {
    // console.log(this.props.lineGraphFinalFunction);
    return (
      <div className="customBox shadowTwo">
        <VictoryChart
          className="image"
          height={500}
          width={600}
          animate={{ duration: 0, easing: "exp" }}
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fill: "white", fontSize: 20 },
          }}
        >
          {/* <VictoryAxis
            // scale="time"
            // standalone={false}
            // style={styles.axisYears}
            // tickValues={tickValues}
            tickFormat={(x) => {
              if (x.getFullYear() === 2000) {
                return x.getFullYear();
              }
              if (x.getFullYear() % 10 === 0) {
                return x.getFullYear().toString().slice(2);
              }
            }}
          /> */}
          <VictoryLine
            interpolation={this.props.graphStyle.interpolation}
            style={{
              tickLabels: { fill: "white", fontSize: 20 },
              data: {
                stroke: "#4F7CFF",
                strokeWidth: 7,
                strokeLinecap: "round",
              },
              // labels: { fontSize: 15, fill: "#111", padding: 5 },
            }}
            data={this.props.lineGraphFinalFunction}
            theme={VictoryTheme.material}
            // labels={({ datum }) => datum.y}
            animate={{
              onExit: {
                duration: 100,
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
