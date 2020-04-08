import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    canadianSummary: [],
    allProvincesData: [],
    caseNumber: [],
  };

    componentDidMount() {
    axios({
      url: `https://api.covid19api.com/country/canada/status/confirmed/live`,
      method: `GET`,
    })
        .then((response) => {
        this.setState({
          canadianSummary: response,
        });
      });
  }

  // 1. Spread operator to pull provinces out of the summary array and store in a new variable (Using Map function instead)
  getCanadianProvinces = () => {
    // Using reverse() to rearrange latest data on top
    const allProvincesData = this.state.canadianSummary.data.reverse();
    this.setState({ allProvincesData });
  }

  //2. Filter through to get individual provinces
  getCaseNumber = () => {
    let cases = this.state.allProvincesData.filter(e => {
        if (e.Province === "Grand Princess") {
          return e.Cases;
        } else {
          return 'Nothing found';
        }
    })
    this.setState({
      caseNumber: cases,
    });
    console.log(this.state.caseNumber);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <button className="button" onClick={this.getCanadianProvinces}>All Provinces Data</button>
          <button className="button" style={{'marginLeft':20}} onClick={this.getCaseNumber}>Grand Princess Data</button>

          <ul>
            {/* {this.state.caseNumber.map ( cases => (
              <li>{cases}</li>
            ))} */}
          </ul>

        </div>
      </section>
    );
  }
}

export default App;
