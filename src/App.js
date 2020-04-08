import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    canadianSummary: [],
    allProvincesData: [],
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

  // componentDidMount() {
  //   axios
  //     .get("https://api.covid19api.com/country/canada/status/confirmed/live")
  //     .then((response) => {
  //       const canadianSummary = response;
  //       this.setState({
  //         canadianSummary: canadianSummary,
  //       });
  //     });
  // }

  // Function for pulling Canadian Province array from Summary Array
  getCanadianProvinces = () => {
    // Using reverse() to rearrange latest data on top
    const allProvincesData = this.state.canadianSummary.data.reverse();
    this.setState({ allProvincesData });
    const newArray = this.state.allProvincesData.map(e => {
      console.log(e);
    })

    // Spread operator to pull provinces out of the summary array and store in a new variable


    // Filter through to get individual provinces
  }

  render() {
    // {console.log(this.state.canadianSummary)}
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <button className="button" onClick={this.getCanadianProvinces}>Button</button>
        </div>
      </section>
    );
  }
}

export default App;
