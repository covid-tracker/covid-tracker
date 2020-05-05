import React, { Component } from "react";

class Widget extends Component {
  render() {
    console.log(this.props.widgetData);
    return (
      <section className="section">
        <main>
          <div className="box container" style={{ textAlign: "center" }}>
            <h1 class="title">Live Count</h1>
            <ul>
              <li>
                <div className="widBox widgetOne">
                  <h3>National Confirmed Cases</h3>
                  <h2 class="widTitle">
                    {this.props.widgetData.TotalConfirmed}
                  </h2>
                </div>
                <div className="widBox widgetTwo">
                  <h3>National Confirmed Deaths</h3>
                  <h2 class="widTitle">{this.props.widgetData.TotalDeaths}</h2>
                </div>
                <div className="widBox widgetThree">
                  <h3>National Recovered Patients</h3>
                  <h2 class="widTitle">
                    {this.props.widgetData.TotalRecovered}
                  </h2>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </section>
    );
  }
}

export default Widget;
