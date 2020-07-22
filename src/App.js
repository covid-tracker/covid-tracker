import React, { Component } from "react";
import axios from "axios";
import Widget from "./components/Widget";
import LogoMain from "./components/LogoMain";
import Footer from "./components/Footer";
import LineGraph from "./components/LineGraph"; // Rechart Graphs
import BarGraph from "./components/BarGraph"; // Rechart Graphs
import Map from "./components/Map"; // MapBox
import Loader from "react-loader-spinner";
// import { motion } from "framer-motion"; //Framer motion for animations

// URLs
const provinceDataURL =
  "https://api.covid19api.com/country/canada/status/confirmed/live";
const summaryDataURL = "https://api.covid19api.com/summary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromDate: null,
      toDate: null,
      fromDateAll: "",
      toDateAll: "",
      canadianSummaryLineGraph: [],
      canadianSummaryAll: [],
      canadianSummaryBarGraph: [],
      canadianSummaryCanada: [],
      provinceData: [],
      historicalProvinceDataForGraph: [],
      handOffToLineGraph: [],
      filteredEmptyString: [],
      finalArray: [],
      loading: true,
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
      lineGraphData: "",
      fullProvinceTimeline: "",
      // init:0,
    };
    this.coordinateValues = this.coordinateValues.bind(this);
  }
  // async componentDidMount() {

  // }

  componentWillMount() {}
  async componentDidMount() {
    let fromDateNew = new Date();
    fromDateNew.setHours(-48, 0, 0, 0);
    fromDateNew = fromDateNew.toISOString().split(".")[0] + "Z";
    let toDateNew = new Date();
    toDateNew.setHours(-47, 0, 0, 0);
    toDateNew = toDateNew.toISOString().split(".")[0] + "Z";
    this.setState({
      // canadianSummary: response.data,
      fromDate: fromDateNew,
      toDate: toDateNew,
    });
    // const response = await axios({
    //   url: "https://api.covid19api.com/country/canada/status/confirmed/live",
    //   method: "GET",
    //   params: {
    //     from: fromDateNew,
    //     to: toDateNew,
    //   },
    // }).catch((err) => console.log(err, "An Error occured"));

    const { fromDate, toDate, fromDateAll, toDateAll } = this.state;
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
      params: {
        from: fromDateAll,
        to: toDateAll,
      },
    });
    this.setState({
      canadianSummaryBarGraph: canadianSummaryBarGraph.slice(1),
      canadianSummaryLineGraph,
      canadianSummaryAll,
      canadianSummaryCanada: canadianSummaryCanada.Countries[30],
      loading: false,
    });

    console.log(typeof this.state.fromDate);
    console.log(typeof this.state.toDate);
    // console.log(this.state.canadianSummaryAll);
    // console.log(this.state.canadianSummaryAll.slice(1));
  }
  // dateFunction = () => {
  //   let date = new Date();
  //   date.setDate(date.getDate() - 1);
  //   date.setHours(-4);
  //   date.setMinutes(0);
  //   date.setSeconds(0);
  //   let yesterdayString = date.toISOString().split(".")[0] + "Z";
  //   date.setHours(0);
  //   let yesterdayStringTime = date.toISOString().split(".")[0] + "Z";
  //   this.setState({
  //     fromDate: yesterdayString,
  //     toDate: yesterdayStringTime,
  //   });
  //   console.log(this.state.fromDate);
  // };

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
            // timeout={4000} //3 secs
          />
        </div>
      );
    }
    return (
      // <motion.div>
      <main className="section">
        {/* <motion.div
            intial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            translate={{
              duration: 5,
            }}
          > */}
        <section className="columns">
          <div className="column is-3">
            <BarGraph
              barChartInfo={canadianSummaryBarGraph}
              lineGraphHandler={this.functionForLineGraph}
            />
          </div>
          <div className="column is-5">
            <LogoMain onClick={this.dateFunction} />
            {/* <motion.div whileHover={{ scale: 1.3, y: "-20px" }}> */}
            <Map markerData={canadianSummaryAll} />
            {/* </motion.div> */}
          </div>
          <div className="column is-4">
            <Widget widgetData={canadianSummaryCanada} />
            {/* <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                > */}
            <LineGraph
              graphStyle={graphComponentData}
              lineGraphFinalFunction={handOffToLineGraph}
            />
            {/* </motion.div> */}
          </div>
        </section>
        <Footer />
        {/* </motion.div> */}
      </main>
      // </motion.div>
    );
  }
}
export default App;
