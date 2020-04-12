import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      canadianSummary: [],
      allProvincesData: [],
      filteredProvincesData: [],
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
    let provinceObject = {};
    let provinceArray = [];
    for (let i = 0; i < 100; i++) {
      provinceObject.ProvinceName = this.state.allProvincesData[i].Province;
      provinceObject.ConfirmedCases = this.state.allProvincesData[i].Cases;
      provinceObject.Date = this.state.allProvincesData[i].Date;
      provinceArray.push(provinceObject);
      this.setState({
        filteredProvincesData: provinceArray,
      });
    }
    // Maybe try spreading and pushing the items in the array??
    // console.log(provinceArray);
    console.log(this.state.filteredProvincesData);
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Covid-19 Tracker</h1>
          <p className="subtitle">
            AKA <strong>Apocalypse Clock!</strong>
          </p>

          <button className="button" onClick={this.getCanadianProvinces}>
            1. API Call
          </button>

          <button className="button" onClick={this.getCaseNumber}>
            2. Provinces Data
          </button>
        </div>
      </section>
    );
  }
}

export default App;
