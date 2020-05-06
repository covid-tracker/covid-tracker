import React, { Component } from "react";

class Widget extends Component {
  render() {
    console.log(this.props.widgetData);
    return (
      <section className="section">
        <div className="box container" style={{ textAlign: "center" }}>
          <header>
            <h1 className="title" style={{ textAlign: "center" }}>
              Widget
            </h1>
          </header>
        </div>
      </section>
    );
  }
}

export default Widget;
