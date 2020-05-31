import React, { Component } from "react";
import axios from "axios";
import LineGraph from "./components/LineGraph";
import LineGraph2 from "./components/LineGraph2";
import Map from "./components/Map";
// import Table from "./components/Table";
import Widget from "./components/Widget";
import BarGraph from "./components/BarGraph";
import LogoMain from "./components/LogoMain";
import Footer from "./components/Footer";
// import { MetroSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

const provinceDataURL =
  "https://api.covid19api.com/country/canada/status/confirmed/live";
const summaryDataURL = "https://api.covid19api.com/summary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-05-29T00:00:00Z",
      toDate: "2020-05-29T01:00:00Z",
      fromDateAll: "",
      toDateAll: "",
      // loading: false,
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
    const { data: canadianSummaryLineGraph } = await axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
    });
    const { data: canadianSummaryAll } = await axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
      params: {
        from: this.state.fromDate,
        to: this.state.toDate,
      },
    });
    const { data: canadianSummaryBarGraph } = await axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
      params: {
        from: this.state.fromDate,
        to: this.state.toDate,
      },
    });
    const { data: canadianSummaryCanada } = await axios({
      url: `https://api.covid19api.com/summary`,
      method: `GET`,
      params: {
        from: this.state.fromDateAll,
        to: this.state.toDateAll,
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
        province: provinceName.Province,
        cases: provinceName.Cases,
        date: provinceName.Date,
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
        if (provinceName.Province === singleProvince.Province) {
          return {
            finalizedCases: provinceName,
          };
        }
      }
    );
    this.setState({
      historicalProvinceDataForGraph: provinceHistoricalData,
    });
  };

  provinceData = () => {
    let provinceInfo = this.state.canadianSummary.map((provinceName) => {
      return {
        province: provinceName.Province,
        cases: provinceName.Cases,
        date: provinceName.Date,
      };
    });
    this.setState({
      provinceData: provinceInfo,
    });
  };

  functionForLineGraph = (provinceInfoForLineGraph) => {
    let fullProvinceTimeline;
    let filteredSpecificProvince = this.state.canadianSummaryLineGraph.filter(
      (e) => {
        return e.Province === provinceInfoForLineGraph
          ? {
              cases: e.Cases,
              date: e.Date,
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
      let data = { date: e.Date, cases: e.Cases };
      return data;
    });
    this.setState({
      handOffToLineGraph: lineGraphArray,
    });
  }

  render() {
    return (
      <motion.div animate={{ scale: 2 }} transition={{ duration: 200 }}>
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
                  barChartInfo={this.state.canadianSummaryBarGraph}
                  lineGraphHandler={this.functionForLineGraph}
                />
              </div>
              <div className="column is-5">
                <LogoMain />
                <Map markerData={this.state.canadianSummaryAll} />
              </div>
              <div className="column is-4">
                <Widget widgetData={this.state.canadianSummaryCanada} />
                {/* <LineGraph
                  graphStyle={this.state.graphComponentData}
                  lineGraphFinalFunction={this.state.handOffToLineGraph}
                  // provinceNames={this.state.fullProvinceTimeline}
                /> */}
                <LineGraph2
                  graphStyle={this.state.graphComponentData}
                  lineGraphFinalFunction={this.state.handOffToLineGraph}
                />
              </div>
            </section>
            <Footer />
            {/* <MetroSpinner size={70} color="#686769" loading={loading} /> */}
          </motion.div>
        </main>
      </motion.div>
    );
  }
}
export default App;
