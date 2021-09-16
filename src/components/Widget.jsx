import React, { Component } from "react";
import axios from "axios";

import { motion } from "framer-motion";

const summaryDataURL = "https://api.covid19api.com/summary";

class Widget extends Component {
    constructor() {
    super();
    this.state = {
      canadianSummaryCanada: [],
    };
  }

  async componentDidMount() {
    const { data: canadianSummaryCanada } = await axios({
      url: summaryDataURL,
      method: `GET`,
    });

    this.setState({
      canadianSummaryCanada: canadianSummaryCanada.Countries[30],
    });
  }

  render() {
    const {
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewConfirmed,
    } = this.state.canadianSummaryCanada;

    return (
      <div className="customBox shadowTwo" style={{ textAlign: "center" }}>
        <h1 className="title">National Live Count</h1>
        <div className="is-multiline columns">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>CASES</h3>
            <h2>{TotalConfirmed}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetThree shadowThree"
          >
            <h3>NEW DEATHS</h3>
            <h2>{NewDeaths}</h2>
          </motion.div>
        </div>

        <div className="is-multiline columns">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetTwo shadowThree"
          >
            <h3>RECENT CASES</h3>
            <h2>{NewConfirmed}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>DEATHS</h3>
            <h2>{TotalDeaths}</h2>
          </motion.div>
        </div>
      </div>
      
    );
  }
}

export default Widget;
