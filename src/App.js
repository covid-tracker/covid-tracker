import React, { Component } from "react";
import axios from "axios";
import LineGraph from "./components/LineGraph";
import Map from "./components/Map";
// import Table from "./components/Table";
import Widget from "./components/Widget";
import BarGraph from "./components/BarGraph";
import LogoMain from "./components/LogoMain";
import { MetroSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-05-02T00:00:00Z",
      toDate: "2020-05-02T01:00:00Z",
      fromDateAll: "",
      toDateAll: "",
      loading: false,
      canadianSummary: [],
      canadianSummaryAll: [],
      canadianSummaryCanada: [],
      provinceData: [],
      historicalProvinceDataForGraph: [],
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
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
      url: `https://api.covid19api.com/total/country/canada/status/confirmed`,
      method: `GET`,
      params: {
        from: this.state.fromDate,
        to: this.state.toDate,
      },
    }).then((response) => {
      this.setState({
        canadianSummary: response.data,
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

  render() {
    const { loading, canadianSummaryAll, graphComponentData } = this.state;
    return (
      <body>
        <main className="section">
          <section className="columns">
            <div className="column is-3">
              <BarGraph
                barChartInfo={canadianSummaryAll}
                clickEventForGraph={this.provinceGraph}
              />
            </div>
            <div className="column is-5">
              <LogoMain />
              <Map markerData={this.state.canadianSummaryAll} />
            </div>
            <div className="column is-4">
              <Widget widgetData={this.state.canadianSummaryCanada} />
              <LineGraph
                graphStyle={graphComponentData}
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
          {/* <MetroSpinner size={70} color="#686769" loading={loading} /> */}
        </main>
      </body>
    );
  }
}

export default App;
