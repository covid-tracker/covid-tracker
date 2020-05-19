import React, { Component } from "react";
import axios from "axios";
import LineGraph from "./components/LineGraph";
import Map from "./components/Map";
// import Table from "./components/Table";
import Widget from "./components/Widget";
import BarGraph from "./components/BarGraph";
import LogoMain from "./components/LogoMain";
import Footer from "./components/Footer";
// import { MetroSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-05-01T00:00:00Z",
      toDate: "2020-05-15T01:00:00Z",
      fromDateAll: "2020-05-15T01:00:00Z",
      toDateAll: "2020-05-15T01:00:00Z",
      // loading: false,
      canadianSummaryLineGraph: [],
      canadianSummaryAll: [],
      canadianSummaryCanada: [],
      provinceData: [],
      historicalProvinceDataForGraph: [],
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
      lineGraphData: "",
    };
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
  componentDidMount() {
    axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
    }).then((response) => {
      this.setState({
        canadianSummaryLineGraph: response.data,
      });
    });

    axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
      params: {
        from: this.state.fromDate,
        to: this.state.toDate,
      },
    }).then((response) => {
      this.setState({
        canadianSummaryAll: response.data,
      });
    });

    axios({
      url: `https://api.covid19api.com/summary`,
      method: `GET`,
      params: {
        from: this.state.fromDateAll,
        to: this.state.toDateAll,
      },
    }).then((response) => {
      this.setState({
        canadianSummaryCanada: response.data.Countries[30],
      });
    });
  }
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
    console.log(this.state.canadianSummaryLineGraph);
    // let province = provinceInfoForLineGraph.map((e) => e.province);
    // this.setState({
    //   historicalData: province,
    // });

    // let specificProvince = this.state.lineGraphData.filter((e) => {
    //   console.log(e);
    // });
  };

  render() {
    console.log(this.state.canadianSummaryAll);
    console.log(this.state.canadianSummaryCanada);
    // const { canadianSummaryAll, graphComponentData } = this.state;
    return (
      <body>
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
                  barChartInfo={this.state.canadianSummaryAll}
                  clickEventForGraph={this.provinceGraph}
                  lineGraphHandler={this.functionForLineGraph}
                />
              </div>
              <div className="column is-5">
                <LogoMain />
                <Map markerData={this.state.canadianSummaryAll} />
              </div>
              <div className="column is-4">
                <Widget widgetData={this.state.canadianSummaryCanada} />
                <LineGraph
                  graphStyle={this.state.graphComponentData}
                  provinceNames={this.state.historicalProvinceDataForGraph}
                />
              </div>
              {/* <BarChart barChartInfo={canadianSummary} className="column" /> */}
              {/* <Table
                className="column"
                // dateEven={this.dateFunction()}
                tableInfo={this.state.canadianSummary}
                provinceNames={this.state.historicalProvinceDataForGraph}
                clickEventForGraph={this.provinceGraph}
              /> */}
            </section>
            <Footer />
            {/* <MetroSpinner size={70} color="#686769" loading={loading} /> */}
          </motion.div>
        </main>
      </body>
    );
  }
}

export default App;
