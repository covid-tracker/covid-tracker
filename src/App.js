import React, { Component } from "react";
import axios from "axios";
import Chart from "./components/Chart";
class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-04-15T00:00:00Z",
      toDate: "2020-04-15T01:00:00Z",
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
      console.log(this.state.canadianSummary);
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
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <button onClick={() => this.provinceData()}>Click me</button>
          <ul>
            <table class="table">
              <thead>
                <tr>
                  <th>Province Name</th>
                  <th>Case Numbers</th>
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
          </ul>
        </div>
        <Chart provinceNames={this.state.provinceData} />
      </section>
    );
  }
}

export default App;
