import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    globalSummary: [],
  };

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then((response) => {
      const globalSummary = response;
      this.setState({
        globalSummary: globalSummary,
      });
      console.log(this.state.globalSummary.data.Global);
    });
  }

  render() {
    return (
      <div className="container">
        <ul>
          {/* {this.state.summary.map((e) => {
            <li>{e}</li>;
          })} */}
        </ul>
      </div>
    );
  }
}

export default App;
