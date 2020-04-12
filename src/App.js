import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      canadianSummary: [],
      allProvincesData: [],
      caseNumber: "",
      individualProvince: [],
    };
  }

  componentDidMount() {
    axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
    }).then((response) => {
      this.setState({
        canadianSummary: response.data.reverse(),
      });
    });
  }

  // 1. Pull provinces out of the canadianSummary array and store in a new state
  getCanadianProvinces = () => {
    // Using reverse() to rearrange latest data on top
    const allProvincesData = this.state.canadianSummary;
    this.setState({ allProvincesData });
  };

  //2. Filter through to get individual provinces
  getCaseNumber = () => {
    for (let i = 0; i < 100; i++) {
      let provinceNames = {};
      provinceNames.ProvinceName = this.state.allProvincesData[i].Province;
      provinceNames.ConfirmedCases = this.state.allProvincesData[i].Cases;
      provinceNames.Date = this.state.allProvincesData[i].Date;

      this.setState({
        individualProvince: provinceNames,
      });
      // console.log(provinceNames);
    }

    // let cases = this.state.allProvincesData.filter((e) => {
    //   return e.Province === "New Brunswick" ? e.Cases : "Nothing Found";
    // });

    // this.setState({
    //   caseNumber: cases,
    // });
  };

  render() {
    console.log(this.state.canadianSummary);
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <button className="button" onClick={this.getCanadianProvinces}>
            All Provinces Data
          </button>
          <button
            className="button"
            style={{ margin: 20 }}
            onClick={this.getCaseNumber}
          >
            Grand Princess Data
          </button>
          <ul>
            {this.state.canadianSummary.map((singleProvince, index) => {
              return (
                <li key={index}>
                  {singleProvince.Province} - Number of cases
                  {singleProvince.Cases}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
