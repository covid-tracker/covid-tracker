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
      <div className="container">
        <h1>Something</h1>
      </div>
    );
  }
}

export default App;
