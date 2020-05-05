import React, { Component } from "react";

class Widget extends Component {
  render() {
    console.log(this.props.widgetData);
    console.log(this.props.widgetData.TotalConfirmed);
    console.log(this.props.widgetData.TotalDeaths);
    console.log(this.props.widgetData.TotalRecovered);
    return (
      <section className="section">
        <main>
          <div className="box container" style={{ textAlign: "center" }}>
            <h1 class="title">Live Count</h1>
            <ul>
              <li>
                <div className="widBox widgetOne container">
                  <h1 class="widTitle">
                    {this.props.widgetData.TotalConfirmed}
                  </h1>
                </div>
                <div className="widBox container widgetTwo">
                  <h1 class="widTitle">{this.props.widgetData.TotalDeaths}</h1>
                </div>
                <div className="widBox container widgetThree">
                  <h1 class="widTitle">
                    {this.props.widgetData.TotalRecovered}
                  </h1>
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
