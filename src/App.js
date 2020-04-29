import React, { Component } from "react";
import axios from "axios";
import Chart from "./components/Chart";
import Map from "./components/Map";
import Table from "./components/Table";
import { MetroSpinner } from "react-spinners-kit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-04-26T00:00:00Z",
      toDate: "2020-04-26T00:01:00Z",
      fromDateAll: "",
      toDateAll: "",
      loading: false,
      canadianSummary: [],
      canadianSummaryAll: [],
      provinceData: [],
      historicalProvinceDataForGraph: [],
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
    };
  }
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
  }

  dateFunction = () => {
    let date = new Date();
    // To print yesterday's date
    date.setDate(date.getDate() - 1);
    let yesterdayString = date.toISOString();
    // Changing time to prevent looping on same date
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    // date.setMilliseconds(0);
    let yesterdayStringTime = date.toISOString();

    // this.setState({
    //   fromDate: yesterdayString,
    //   toDate: yesterdayStringTime,
    // });

    // console.log(this.state.fromDate);
    // console.log(this.state.toDate);
  };

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
    console.log(this.state.historicalProvinceDataForGraph);
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
    const { loading } = this.state;
    return (
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <header>
            <h1 className="title" style={{ textAlign: "center" }}>
              COVID Tracker
            </h1>
            <p className="subtitle">
              AKA<strong> Apocalypse Clock</strong>!
            </p>
            <button
              className="button is-danger is-rounded"
              onClick={() => this.provinceData()}
            >
              Click Me
            </button>
          </header>
          <main className="columns">
            <Table
              className="column"
              tableInfo={this.state.canadianSummary}
              provinceNames={this.state.historicalProvinceDataForGraph}
              clickEventForGraph={this.provinceGraph}
            />
            <Chart
              className="column"
              graphStyle={this.state.graphComponentData}
              provinceNames={this.state.historicalProvinceDataForGraph}
            />
          </main>
          <Map markerData={this.state.canadianSummary} />
          <MetroSpinner size={70} color="#686769" loading={loading} />
        </div>
      </section>
    );
  }
}
export default App;
