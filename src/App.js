import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      canadianSummary: [],
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
  //2. Filter through to get individual provinces
  render() {
    console.log(this.state.canadianSummary);
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <ul>
            {this.state.canadianSummary
              .slice(0, 100)
              .map((singleProvince, index) => {
                return (
                  <li key={index}>
                    {singleProvince.Province} - Number of cases -
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
