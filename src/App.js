import React, { Component } from "react";
import axios from "axios";
import GetProvincialStats from "./components/GetProvincialStats";
import Widget from "./components/Widget";
import LogoMain from "./components/LogoMain";
import LineGraph from "./components/LineGraph"; // Rechart Graphs
import BarGraph from "./components/BarGraph"; // Rechart Graphs
import Map from "./components/Map"; // MapBox
import Loader from "react-loader-spinner";
import { motion } from "framer-motion"; //Framer motion for animations

// URLs
const provinceDataURL ="https://api.covid19api.com/country/canada/status/confirmed/live";
const summaryDataURL = "https://api.covid19api.com/summary";

const newApiResponse = "https://covid-19-statistics.p.rapidapi.com/reports"

class App extends Component {
  constructor() {
    super();
    this.state = {
      newApi: [],
      allProvinceData: [],
      allProvinceDataTwo: [],
      allProvinceDataThree: [],

      canadianSummaryLineGraph: [],
      canadianSummaryAll: [],
      canadianSummaryBarGraph: [],
      canadianSummaryCanada: [],
      handOffToLineGraph: [],
      loading: true,
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
      fullProvinceTimeline: "",
    };
    this.coordinateValues = this.coordinateValues.bind(this);
  }

  async componentDidMount() {

    // To generate today's date
    let fromDate = new Date();
    let toDate = new Date();
    // Adjusting time to get yesterday's date
    fromDate.setHours(-30, 0, 0, 0);
    toDate.setHours(-27, 0, 0, 0);
    // fromDate and toDate Range
    fromDate = fromDate.toISOString().split(".")[0] + "Z";
    toDate = toDate.toISOString().split(".")[0] + "Z";

        const { data: newApi } = await axios ({
      url: newApiResponse,
      method: `GET`,
      params: {
        iso: `CAN`,
        // date: '2021-02-14',
      },
      headers :{
        'x-rapidapi-key': '63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    });

    const { data: canadianSummaryAll } = await axios({
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
      newApi: newApi.data,
      canadianSummaryAll,
      canadianSummaryCanada: canadianSummaryCanada.Countries[30],
      loading: false,
    });
    // this.allProvinceDataTwo(this.state.newApi)
    this.firstDataGather()
    console.log(this.state.allProvinceData)
    console.log(this.state.newApi[0].region)
    console.log(this.state.newApi[0].region.province)
  }

  firstDataGather() {  
    let allProvincialStats = this.state.newApi.map((provinceDataSets) => {
      return {
        Active: provinceDataSets.active,
        Confirmed: provinceDataSets.confirmed,
        Deaths: provinceDataSets.deaths,
        Fatality: provinceDataSets.fatality_rate,
        Recovered: provinceDataSets.recovered,
        Region: provinceDataSets.region,
      };
    });
    this.setState({
      allProvinceData: allProvincialStats,
    });
    this.threeDataGather()
    console.log(this.state.allProvinceData)
  };

    threeDataGather() {  
    let allProvincialStatsThree = this.state.allProvinceData.map((provinceDataSetsThree) => {
      return {
        Province: provinceDataSetsThree.province,
      };
    });
    this.setState({
      allProvinceDataThree: allProvincialStatsThree,
    });
  };

  // allProvinceDataTwo() {
  //   let allProvincialStatsTwo = this.state.newApi.map((provinceDataSetsTwo) => {
  //     let data = { Active: provinceDataSetsTwo.active,
  //       Confirmed: provinceDataSetsTwo.confirmed,
  //       Deaths: provinceDataSetsTwo.deaths,
  //       Fatality: provinceDataSetsTwo.fatality_rate,
  //       Recovered: provinceDataSetsTwo.recovered,
  //       Region: provinceDataSetsTwo.region,
  //     };
  //     return data;
  //   });
  //   this.setState({
  //     allProvinceDataTwo: allProvincialStatsTwo,
  //   });
  // }

  // provinceGraph = (singleProvince) => {
  //   let provinceHistoricalData = this.state.canadianSummaryAll.filter(
  //     (provinceName) => {
  //       return provinceName.Province === singleProvince.Province
  //         ? {
  //           finalizedCases: provinceName,
  //         }
  //         : null;
  //     }
  //   );
  //   this.setState({
  //     historicalProvinceDataForGraph: provinceHistoricalData,
  //   });
  // };

  // map through the canadian canada summary and kick out province and case number. then filter through through that, if case = 0 remove it from the array // 

  // add a unique key, for each set in the array // 
  functionForLineGraph = (provinceInfoForLineGraph) => {
    let filteredSpecificProvince = this.state.canadianSummaryLineGraph.filter(
      (e) => {
        return e.Province === provinceInfoForLineGraph
          ? {
            Cases: e.Cases,
            Date: e.Date,
            Province: e.Province,
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
    // console.log(this.state.newApi)
    // console.log(this.state.newApi[0])
    // console.log(this.state.allProvinceData)
    // console.log(this.state.allProvinceDataThree)
    // console.log(this.state.allProvinceDataTwo)
    // console.log(this.state.newApi[0].region.province)
    // console.log(newApi.data[0].date)
    // console.log(newApi.data[0].confirmed)
    const {
      allProvinceData,
      // canadianSummaryBarGraph,
      canadianSummaryAll,
      canadianSummaryCanada,
      graphComponentData,
      handOffToLineGraph,
    } = this.state;
    if (this.state.loading) {
      return (
        <div className="loadScreen">
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
          <div className="columns is-centered">
            <div className="column is-3"></div>
            <div className="column is-5 ">
              <LogoMain />
            </div>
            <div className="column is-4"></div>
          </div>
          <section className="columns">
            <div className="column is-3">
              <BarGraph
                // barChartInfo={canadianSummaryBarGraph}
                barChartInfo={allProvinceData}
                lineGraphHandler={this.functionForLineGraph}
              />
              <GetProvincialStats/>
            </div>
            <div className="column is-5">
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
        </main>
      </motion.div>
    );
  }
}

export default App;
