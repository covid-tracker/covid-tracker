import React, { Component } from "react";
import axios from "axios";
import Widget from "./components/Widget";
import LogoMain from "./components/LogoMain";
import Footer from "./components/Footer";
import LineGraph from "./components/LineGraph"; // Rechart Graphs
import BarGraph from "./components/BarGraph"; // Rechart Graphs
import Map from "./components/Map"; // MapBox
import { motion } from "framer-motion"; //Framer motion for animations

// URLs
const provinceDataURL =
  "https://api.covid19api.com/country/canada/status/confirmed/live";
const summaryDataURL = "https://api.covid19api.com/summary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-05-30T00:00:00Z",
      toDate: "2020-05-30T01:00:00Z",
      fromDateAll: "",
      toDateAll: "",
      canadianSummaryLineGraph: [],
      canadianSummaryAll: [],
      canadianSummaryBarGraph: [],
      canadianSummaryCanada: [],
      provinceData: [],
      historicalProvinceDataForGraph: [],
      handOffToLineGraph: [],
      filteredEmptyString: [],
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
      lineGraphData: "",
      fullProvinceTimeline: "",
      // init:0,
    };
    this.coordinateValues = this.coordinateValues.bind(this);
  }

  // async componentDidMount() {
  //   let fromDate = new Date();
  //   fromDate.setHours(-8, 0, 0, 0);
  //   fromDate = fromDate.toISOString().split(".")[0] + "Z";
  //   let toDate = new Date();
  //   toDate.setHours(-5, 0, 0, 0);
  //   toDate = toDate.toISOString().split(".")[0] + "Z";
  //   const response = await axios({
  //     url: "https://api.covid19api.com/country/canada/status/confirmed/live",
  //     method: "GET",
  //     params: {
  //       from: "2020-04-29T01:00:00Z",
  //       to: "2020-04-29T02:00:00Z",
  //     },
  //   }).catch((err) => console.log(err, "An Error occured"));
  //   this.setState({
  //     canadianSummary: response.data,
  //     fromDate,
  //     toDate,
  //   });
  // }

  async componentDidMount() {
    const { fromDate, toDate, fromDateAll, toDateAll } = this.state;
    const { data: canadianSummaryLineGraph } = await axios({
      url: provinceDataURL,
      method: `GET`,
    });

    const { data: canadianSummaryAll } = await axios({
      url: provinceDataURL,
      method: `GET`,
      params: {
        from: fromDate,
        to: toDate,
      },
    });

    const { data: canadianSummaryBarGraph } = await axios({
      url: provinceDataURL,
      method: `GET`,
      params: {
        from: fromDate,
        to: toDate,
      },
    });

    const { data: canadianSummaryCanada } = await axios({
      url: summaryDataURL,
      method: `GET`,
      params: {
        from: fromDateAll,
        to: toDateAll,
      },
    });

    this.setState({
      canadianSummaryBarGraph,
      canadianSummaryLineGraph,
      canadianSummaryAll,
      canadianSummaryCanada: canadianSummaryCanada.Countries[30],
    });
  }

  // filteredEmptyString = () => {
  //   let rawBarData = this.state.canadianSummaryBarGraph.filter((Boolean) => {
  //     return {
  //       province: Boolean.Province,
  //     };
  //   });
  //   this.setState({
  //     filteredEmptyString: rawBarData,
  //   });
  // };

  provinceData = () => {
    let provinceInfo = this.state.canadianSummary.map((provinceName) => {
      return {
        Province: provinceName.Province,
        Cases: provinceName.Cases,
        Date: provinceName.Date,
      };
    });
    this.setState({
      provinceData: provinceInfo,
    });
  };

  // dateFunction = () => {
  //   let date = new Date();
  //   date.setDate(date.getDate() - 1);
  //   date.setHours(-4);
  //   date.setMinutes(0);
  //   date.setSeconds(0);
  //   let yesterdayString = date.toISOString().split(".")[0] + "Z";
  //   date.setHours(0);
  //   let yesterdayStringTime = date.toISOString().split(".")[0] + "Z";
  //   this.setState({
  //     fromDate: yesterdayString,
  //     toDate: yesterdayStringTime,
  //   });
  // };

  provinceGraph = (singleProvince) => {
    let provinceHistoricalData = this.state.canadianSummaryAll.filter(
      (provinceName) => {
        return provinceName.Province === singleProvince.Province
          ? {
              finalizedCases: provinceName,
            }
          : null;
      }
    );
    this.setState({
      historicalProvinceDataForGraph: provinceHistoricalData,
    });
  };

  provinceData = () => {
    let provinceInfo = this.state.canadianSummary.map((provinceName) => {
      return {
        Province: provinceName.Province,
        Cases: provinceName.Cases,
        Date: provinceName.Date,
      };
    });
    this.setState({
      provinceData: provinceInfo,
    });
  };

  functionForLineGraph = (provinceInfoForLineGraph) => {
    let filteredSpecificProvince = this.state.canadianSummaryLineGraph.filter(
      (e) => {
        return e.Province === provinceInfoForLineGraph
          ? {
              Cases: e.Cases,
              Date: e.Date,
            }
          : null;
      }
    );

    this.setState(
      {
        fullProvinceTimeline: filteredSpecificProvince,
      },
      () => {
        this.coordinateValues();
      }
    );
  };

  coordinateValues() {
    let lineGraphArray = this.state.fullProvinceTimeline.map((e) => {
      let data = { Date: e.Date, Cases: e.Cases };
      return data;
    });
    this.setState({
      handOffToLineGraph: lineGraphArray,
    });
  }

  render() {
    const {
      canadianSummaryBarGraph,
      canadianSummaryAll,
      canadianSummaryCanada,
      graphComponentData,
      handOffToLineGraph,
    } = this.state;
    return (
      <motion.div>
        <main className="section">
          <motion.div
            intial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            translate={{
              duration: 5,
            }}
          >
            <section className="columns">
              <div className="column is-3">
                <BarGraph
                  barChartInfo={canadianSummaryBarGraph}
                  lineGraphHandler={this.functionForLineGraph}
                />
              </div>
              <div className="column is-5">
                <LogoMain />
                <motion.div whileHover={{ scale: 1.3, y: "-20px" }}>
                  <Map markerData={canadianSummaryAll} />
                </motion.div>
              </div>
              <div className="column is-4">
                <Widget widgetData={canadianSummaryCanada} />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                >
                  <LineGraph
                    graphStyle={graphComponentData}
                    lineGraphFinalFunction={handOffToLineGraph}
                  />
                </motion.div>
              </div>
            </section>
            <Footer />
          </motion.div>
        </main>
      </motion.div>
    );
  }
}
export default App;
