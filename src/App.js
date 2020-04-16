import React, { Component } from "react";
import axios from "axios";
import Chart from "./components/Chart";
class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: "2020-04-15T00:00:00Z",
      toDate: "2020-04-16T00:00:00Z",
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
        canadianSummary: response.data.reverse(),
      });
      console.log(this.state.canadianSummary);
    });
  }

  provinceData = () => {
    let provinceInfo = this.state.canadianSummary
      .splice(1, 14)
      .map((provinceName) => {
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
    // const latestDate = this.state.canadianSummary.filter(() => {
    //   const today = new Date();
    //   let todayDate =
    //     today.getFullYear() +
    //     "-" +
    //     (today.getMonth() + 1) +
    //     "-" +
    //     (today.getDate() - 1);
    //   return todayDate;
    // });
    // console.log(latestDate);

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <button onClick={() => this.provinceData()}>Click me</button>
          <ul>
            {this.state.canadianSummary
              .splice(1, 14)
              .map((singleProvince, index) => {
                return (
                  <li key={index}>
                    {singleProvince.Province} - Number of cases -
                    {singleProvince.Cases} - Date -{singleProvince.Date}
                  </li>
                );
              })}
          </ul>
        </div>
        <Chart provinceNames={this.state.provinceData} />
      </section>
    );
  }
}

export default App;
