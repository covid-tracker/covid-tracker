import React, { Component } from "react";
import axios from "axios";
import Chart from "./components/Chart";
import BarChart from "./components/BarChart";
import Map from "./components/Map";
// import Table from "./components/Table";
import Widget from "./components/Widget";
import { MetroSpinner } from "react-spinners-kit";
import BarChartNew from "./components/BarChartNew";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-04-29T00:00:00Z",
      toDate: "2020-04-29T02:00:00Z",
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
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
      params: {
        from: this.state.fromDate,
        to: this.state.toDate,
      },
    }).then((response) => {
      this.setState({
        canadianSummary: response.data,
      });
      // console.log(this.state.canadianSummary);
    });

    axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
      params: {
        from: this.state.fromDateAll,
        to: this.state.toDateAll,
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
        canadianSummaryCanada: response.data.Countries[39],
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
    const { loading, canadianSummary, graphComponentData } = this.state;
    return (
      <section className="section">
        <header>
          <h1 className="title" style={{ textAlign: "center" }}>
            COVID Tracker
          </h1>
          <p className="subtitle">
            AKA<strong> Apocalypse Clock</strong>!
          </p>
        </header>
        <div className="container columns" style={{ textAlign: "center" }}>
          <BarChartNew
            barChartInfo={canadianSummary}
            className="column"
            clickEventForGraph={this.provinceGraph}
          />
          {/* <BarChart barChartInfo={canadianSummary} className="column" /> */}
          <main className="columns">
            {/* <Table
              className="column"
              // dateEven={this.dateFunction()}
              tableInfo={this.state.canadianSummary}
              provinceNames={this.state.historicalProvinceDataForGraph}
              clickEventForGraph={this.provinceGraph}
            /> */}
            <Chart
              className="mainChart column"
              graphStyle={this.state.graphComponentData}
              provinceNames={this.state.historicalProvinceDataForGraph}
            />
            <BarChart barChartInfo={this.state.canadianSummary} />
            <Widget widgetData={this.state.canadianSummaryCanada} />
          </main>
          <Map markerData={this.state.canadianSummary} />
          <MetroSpinner size={70} color="#686769" loading={loading} />
        </div>
      </section>
    );
  }
}

export default App;
