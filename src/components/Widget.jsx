import React, { Component } from "react";

class Widget extends Component {
  render() {
    console.log(this.props.widgetData);
    console.log(this.props.widgetData.TotalConfirmed);
    console.log(this.props.widgetData.TotalDeaths);
    console.log(this.props.widgetData.TotalRecovered);
    return (
      <section className="section">
        <div className="box container" style={{ textAlign: "center" }}>
          <h1>Widget</h1>
          {/* {this.props.widgetData.map((finalizedTotal) => {
            return (
              <ul>
                <li className="imgBacker">
                  <h2>{finalizedTotal.TotalConfirmed}</h2>
                  <h3>{finalizedTotal.TotalDeaths}</h3>
                  <h4>{finalizedTotal.TotalRecovered}</h4>
                </li>
              </ul>
            );
          })} */}
        </div>
      </section>
    );
  }
}

export default Widget;
