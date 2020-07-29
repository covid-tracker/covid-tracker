import React, { Component } from "react";
import axios from "axios";
import Widget from "./components/Widget";
import LogoMain from "./components/LogoMain";
import Footer from "./components/Footer";
import LineGraph from "./components/LineGraph"; // Rechart Graphs
import BarGraph from "./components/BarGraph"; // Rechart Graphs
import Map from "./components/Map"; // MapBox
import Loader from "react-loader-spinner";
import { motion } from "framer-motion"; //Framer motion for animations

// URLs
const provinceDataURL =
  "https://api.covid19api.com/country/canada/status/confirmed/live";
const summaryDataURL = "https://api.covid19api.com/summary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      canadianSummaryLineGraph: [],
      canadianSummaryAll: [],
      canadianSummaryBarGraph: [],
      canadianSummaryCanada: [],
      provinceData: [],
      historicalProvinceDataForGraph: [],
      handOffToLineGraph: [],
      loading: true,
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
      lineGraphData: "",
      fullProvinceTimeline: "",
    };
    this.coordinateValues = this.coordinateValues.bind(this);
  }

  async componentDidMount() {
    // To generate today's date
    let fromDate = new Date();
    let toDate = new Date();

    // Adjusting time to get yesterday's date
    fromDate.setHours(-28, 0, 0, 0);
    toDate.setHours(-10, 0, 0, 0);

    // fromDate and toDate Range
    fromDate = fromDate.toISOString().split(".")[0] + "Z";
    toDate = toDate.toISOString().split(".")[0] + "Z";

    // const { fromDateAll, toDateAll } = this.state;
    const { data: canadianSummaryLineGraph } = await axios({
      url: provinceDataURL,
      method: `GET`,
    });

    const { data: canadianSummaryAll } = await axios({
      url: provinceDataURL,
      method: `GET`,
      params: {
        from: fromDate,
        to: toDate,
      },
    });

    const { data: canadianSummaryBarGraph } = await axios({
      url: provinceDataURL,
      method: `GET`,
      params: {
        from: fromDate,
        to: toDate,
      },
    });

    const { data: canadianSummaryCanada } = await axios({
      url: summaryDataURL,
      method: `GET`,
    });

    this.setState({
      canadianSummaryBarGraph: canadianSummaryBarGraph.slice(1),
      canadianSummaryLineGraph,
      canadianSummaryAll,
      canadianSummaryCanada: canadianSummaryCanada.Countries[30],
      loading: false,
    });
  }

  provinceGraph = (singleProvince) => {
    let provinceHistoricalData = this.state.canadianSummaryAll.filter(
      (provinceName) => {
        return provinceName.Province === singleProvince.Province
          ? {
            finalizedCases: provinceName,
          }
          : null;
      }
    );
    this.setState({
      historicalProvinceDataForGraph: provinceHistoricalData,
    });
  };

  provinceData = () => {
    let provinceInfo = this.state.canadianSummary.map((provinceName) => {
      return {
        Province: provinceName.Province,
        Cases: provinceName.Cases,
        Date: provinceName.Date,
      };
    });
    this.setState({
      provinceData: provinceInfo,
    });
  };

  functionForLineGraph = (provinceInfoForLineGraph) => {
    let filteredSpecificProvince = this.state.canadianSummaryLineGraph.filter(
      (e) => {
        return e.Province === provinceInfoForLineGraph
          ? {
            Cases: e.Cases,
            Date: e.Date,
          }
          : null;
      }
    );
    this.setState({ fullProvinceTimeline: filteredSpecificProvince }, () => {
      this.coordinateValues();
    });
  };

  coordinateValues() {
    let lineGraphArray = this.state.fullProvinceTimeline.map((e) => {
      let data = { Date: e.Date, Cases: e.Cases };
      return data;
    });
    this.setState({
      handOffToLineGraph: lineGraphArray,
    });
  }

  render() {
    const {
      canadianSummaryBarGraph,
      canadianSummaryAll,
      canadianSummaryCanada,
      graphComponentData,
      handOffToLineGraph,
    } = this.state;
    if (this.state.loading) {
      return (
        <div class="loadScreen">
          <Loader
            type="MutatingDots"
            color="#4f7cff"
            secondaryColor="#f35163"
            height={100}
            width={100}
          />
        </div>
      );
    }
    return (
      <motion.div>
        <main className="section">
          <section className="columns">
            <div className="column is-3">
              <BarGraph
                barChartInfo={canadianSummaryBarGraph}
                lineGraphHandler={this.functionForLineGraph}
              />
            </div>
            <div className="column is-5">
              <LogoMain onClick={this.dateFunction} />
              <motion.div whileHover={{ scale: 1.2, y: "-20px" }}>
                <Map markerData={canadianSummaryAll} />
              </motion.div>
            </div>
            <div className="column is-4">
              <Widget widgetData={canadianSummaryCanada} />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
              >
                <LineGraph
                  graphStyle={graphComponentData}
                  lineGraphFinalFunction={handOffToLineGraph}
                />
              </motion.div>
            </div>
          </section>
          <Footer class="footerContainer" />
        </main>
      </motion.div>
    );
  }
}
export default App;
