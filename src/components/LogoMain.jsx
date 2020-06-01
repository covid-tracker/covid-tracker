import React, { Component } from "react";

class LogoMain extends Component {
  render() {
    return (
      <section className="customBox shadowTwo">
        <div style={{ textAlign: "center" }}>
          <h1 className="title" style={{ textAlign: "center" }}>
            Canada COVID-19 Tracker
          </h1>
          <p className="subtitle">Provincial Case Numbers</p>
        </div>
      </section>
    );
  }
}

export default LogoMain;
