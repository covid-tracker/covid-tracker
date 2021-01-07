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
          {/* <button className="alertButton"
            onClick={(e) => window.alert('covid19api.com went down on January 1st due to the year changing, Their dev team is working on a fix, Update coming soon, check back!')}>
            Important! - Click me first!
          </button> */}
        </div>
      </section>
    );
  }
}

export default LogoMain;
