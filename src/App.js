import React, { Component } from "react";
import axios from "axios";
import Chart from "./components/Chart";
import Map from "./components/Map";
import { MetroSpinner } from "react-spinners-kit";
class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-04-15T00:00:00Z",
      toDate: "2020-04-15T01:00:00Z",
      loading: false,
      canadianSummary: [],
      provinceData: [],
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
  }
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
              class="button is-danger is-rounded"
              onClick={() => this.provinceData()}
            >
              Click Me
            </button>
          </header>
          <main className="columns">
            <table className="table is-bordered is-hoverable is-striped column">
              <thead>
                <tr>
                  <th
                    style={{
                      backgroundColor: "Black",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    PROVINCE NAME
                  </th>
                  <th
                    style={{
                      backgroundColor: "Black",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    TOTAL CASES
                  </th>
                </tr>
              </thead>
              {this.state.canadianSummary.map((singleProvince, index) => {
                return (
                  <tbody>
                    <tr key={index}>
                      <td key={singleProvince.Lon}>
                        {singleProvince.Province}
                      </td>
                      <td key={singleProvince.Lat}>{singleProvince.Cases}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <Chart className="column" provinceNames={this.state.provinceData} />
          </main>
          <Map markerData={this.state.canadianSummary} />
          <MetroSpinner size={70} color="#686769" loading={loading} />
        </div>
      </section>
    );
  }
}
export default App;
