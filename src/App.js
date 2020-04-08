import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    canadianProvinceSummary: [],
  };

  componentDidMount() {
    axios
      .get("https://api.covid19api.com/country/canada/status/confirmed/live")
      .then((response) => {
        const canadianProvinceSummary = response;
        this.setState({
          canadianProvinceSummary: canadianProvinceSummary,
        });
      });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    );
  }
}

export default App;
