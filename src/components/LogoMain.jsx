import React, { Component } from "react";

class LogoMain extends Component {
  render() {
    console.log(this.props.widgetData);
    return (
      <section className="box container">
        <div style={{ textAlign: "center" }}>
          <h1 className="title" style={{ textAlign: "center" }}>
            COVID Tracker
          </h1>
          <p className="subtitle">Counting Down to the End Days</p>
        </div>
      </section>
    );
  }
}

export default LogoMain;
