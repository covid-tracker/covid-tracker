import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      canadianSummary: [],
      allProvincesData: [],
      caseNumber: "",
    };
  }

  componentDidMount() {
    axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
    }).then((response) => {
      this.setState({
        canadianSummary: response,
      });
    });
  }

  // 1. Pull provinces out of the canadianSummary array and store in a new state
  getCanadianProvinces = () => {
    // Using reverse() to rearrange latest data on top
    const allProvincesData = this.state.canadianSummary.data.reverse();
    this.setState({ allProvincesData });
  };

  //2. Filter through to get individual provinces
  getCaseNumber = () => {
    // console.log(this.state);

    for (let i = 0; i < 100; i++) {
      let provinceNames = {};
      (provinceNames = this.state.allProvincesData[i].Province), this.state;

      console.log(provinceNames);
      console.log(this.state.allProvincesData[i]);
    }

    // let cases = this.state.allProvincesData.filter((e) => {
    //   return e.Province === "New Brunswick" ? e.Cases : "Nothing Found";
    // });

    // this.setState({
    //   caseNumber: cases,
    // });
  };

  render() {
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
        </div>
      </section>
    );
  }
}

export default App;
