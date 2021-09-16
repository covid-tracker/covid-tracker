import React, { Component } from "react";
import { motion } from "framer-motion";

class WidgetTwo extends Component {
  render() {
    const {
      confirmed,
      active,
      deaths,
      fatality_rate,
    } = this.props.widgetDataTwo;

    return (
      <div className="customBox shadowTwo" style={{ textAlign: "center" }}>
        <h1 className="title">Ontario Live Count</h1>
        <div className="is-multiline columns">

          <motion.div
            key={confirmed}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetTwo shadowThree"
          >
            <h3>CASES</h3>
            <h2>{confirmed}</h2>
          </motion.div>

          <motion.div
            key={deaths}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>DEATHS</h3>
            <h2>{deaths}</h2>
          </motion.div>
        </div>

        <div className="is-multiline columns">
          <motion.div
            key={active}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetOne shadowThree"
          >
            <h3>ACTIVE CASES</h3>
            <h2>{active}</h2>
          </motion.div>

          <motion.div
            key={fatality_rate}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="column widBox widgetThree shadowThree"
          >
            <h3>FATALITY RATE</h3>
            <h2>{fatality_rate}</h2>
          </motion.div>

        </div>
      </div>
      
    );
  }
}

export default WidgetTwo;