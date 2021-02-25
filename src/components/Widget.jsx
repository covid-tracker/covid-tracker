import React, { Component } from "react";
import { motion } from "framer-motion";

class Widget extends Component {
  render() {
    const {
      TotalConfirmed,
      TotalRecovered,
      TotalDeaths,
      NewConfirmed,
      NewRecovered,
      NewDeaths

    } = this.props.widgetData;
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
            <h3>RECOVERED</h3>
            <h2>{TotalRecovered}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetTwo shadowThree"
          >
            <h3>DEATHS</h3>
            <h2>{TotalDeaths}</h2>
          </motion.div>
        </div>
        
        <div className="is-multiline columns">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>RECENT</h3>
            <h2>{NewConfirmed}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetThree shadowThree"
          >
            <h3>RECENT DEATHS</h3>
            <h2>{NewDeaths}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetTwo shadowThree"
          >
            <h3>RECENT RECOVERIES</h3>
            <h2>{NewRecovered}</h2>
          </motion.div>
        </div>
      </div>
      
    );
  }
}

export default Widget;
