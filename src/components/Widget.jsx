import React, { Component } from "react";

class Widget extends Component {
  render() {
    console.log(this.props.widgetData);
    return (
      <div className="customBox shadowTwo" style={{ textAlign: "center" }}>
        <h1 class="title">National Live Count</h1>
        <div className="columns">
          <div className="column widBox widgetOne shadowThree">
            <h3>CASES</h3>
            <h2>{this.props.widgetData.TotalConfirmed}</h2>
          </div>
          <div className="column widBox widgetThree shadowThree">
            <h3>RECOVERED</h3>
            <h2>{this.props.widgetData.TotalRecovered}</h2>
          </div>
          <div className="column widBox widgetTwo shadowThree">
            <h3>DEATHS</h3>
            <h2>{this.props.widgetData.TotalDeaths}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;
