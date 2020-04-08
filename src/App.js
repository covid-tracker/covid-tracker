import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    canadianSummary: [],
    allProvincesData: [],
    caseNumber: '',
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

  // Function for pulling Canadian Province array from Summary Array
  getCanadianProvinces = () => {
    // Using reverse() to rearrange latest data on top
    const allProvincesData = this.state.canadianSummary.data.reverse();
    this.setState({ allProvincesData });
    let cases;
    let newArray = this.state.allProvincesData.filter(e => {
        // console.log(e.Cases);

        if (e.Province == "Grand Princess") {
          cases = e.Cases;
        } else {
          cases = 'Nothing found';
        }
        console.log(cases);
    })

    this.setState({
      caseNumber: newArray,
    });

    //  this.setState({
    //   //  caseNumber: cases,
    //  });

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
          <button className="button" onClick={this.getCanadianProvinces}>All Provinces Data</button>
          <button className="button" style={{'margin-left':20}}>Grand Princess Data</button>

          <ul>
            {this.state.caseNumber.map ( e => {
              <li>{e}</li>
            })}
          </ul>

        </div>
      </section>
    );
  }
}

export default App;
