import React, { Component } from "react";
import { motion } from "framer-motion";

class WidgetTwo extends Component {
  render() {
    const {
      confirmed,
      active,
      deaths,
      recovered,
      fatality_rate,
    } = this.props.widgetDataTwo;
    console.log(this.widgetDataTwo)
    return (
      <div className="customBox shadowTwo" style={{ textAlign: "center" }}>
        <h1 className="title">Ontario Live Count</h1>
        <div className="is-multiline columns">

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>cases</h3>
            <h2>{confirmed}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetThree shadowThree"
          >
            <h3>active cases</h3>
            <h2>{active}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetTwo shadowThree"
          >
            <h3>DEATHS</h3>
            <h2>{deaths}</h2>
          </motion.div>
        </div>

        <div className="is-multiline columns">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>recovered</h3>
            <h2>{recovered}</h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetThree shadowThree"
          >
            <h3>fatality rate</h3>
            <h2>{fatality_rate}</h2>
          </motion.div>

        </div>
      </div>
      
    );
  }
}

export default WidgetTwo;