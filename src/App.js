import React, { Component } from "react";
import axios from "axios";

import { motion } from "framer-motion"; //Framer motion for animations //
import Loader from "react-loader-spinner"; // Loading screen //

import Widget from "./components/Widget"; // Widget made for the total stats in top right corner // 
import WidgetTwo from "./components/WidgetTwo"; // Widget made for the total stats in top right corner // 
import LogoMain from "./components/LogoMain"; 
import LineGraph from "./components/LineGraph"; // Rechart Graphs // 
import BarGraph from "./components/BarGraph"; // Rechart Graphs // 
import Map from "./components/Map"; // MapBox //

// New URLs, currently taking care of the provincial stats // 
const newApiResponse = "https://covid-19-statistics.p.rapidapi.com/reports"
// const newApiResponseDate = "https://covid-19-statistics.p.rapidapi.com/provinces"

class App extends Component {
  constructor() {
    super();
    this.state = {
      newApi: [],
      widgetDataData: [],
      allProvinceData: [
        {
          Active: "",
          Confirmed:"",
          Deaths: "",
          Fatality: "",
          Recovered: "",
          Date: "",
          Region: {},
          Latitude: "",
          Longitude: "",
          Province: "",
        }
      ],
      handOffToLineGraphTwo: [],

      allRegionProvinceData: [],
      canadianSummaryLineGraph: [],
      handOffToLineGraph: [],
      loading: true,
      graphComponentData: {
        interpolation: "natural",
        polar: false,
      },
      fullProvinceTimeline: "",
    };

    // This function was for the old api call when the first api returned provinces numbers, this binded the coordinateValue function for passing props (a function) from the barGraph.jsx back to app.js then back to the lineGraph.jsx so it could be plotted //

    // this.coordinateValues = this.coordinateValues.bind(this);
  }

  async componentDidMount() {

    // setting time for the second newApi Call //
    let dailyDate = new Date()
    // setting hours for the second newApi Call //
    dailyDate.setHours(-30, 0, 0, 0)
    // converting into the format i need in order for it to be valid for the second api //
    dailyDate = dailyDate.toISOString().slice(0, 10);

    const { data: newApi } = await axios ({
      url: newApiResponse,
      method: `GET`,
      params: {
        iso: `CAN`,
        date: dailyDate, 
      },
      headers :{
        'x-rapidapi-key': '63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    });

    const { data: newApiWidget } = await axios ({
      url: newApiResponse,
      method: `GET`,
      params: {
        iso: `CAN`,
        date: dailyDate, 
      },
      headers :{
        'x-rapidapi-key': '63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    })

    this.setState({
      newApi: newApi.data,
      widgetDataData: newApiWidget.data[10],
      loading: false,
      });
      this.firstDataGather()
      // console.log(this.state.allProvinceData)
  }

  firstDataGather() {  
    let allProvincialStats = this.state.newApi.map((provinceDataSets) => {
      const returnProvinceStats = {
        Active: provinceDataSets.active,
        Confirmed: provinceDataSets.confirmed,
        Deaths: provinceDataSets.deaths,
        Fatality: provinceDataSets.fatality_rate,
        Recovered: provinceDataSets.recovered,
        Date: provinceDataSets.date,
        Region: provinceDataSets.region,
      };
      return returnProvinceStats
    });
    this.setState({
      allProvinceData: allProvincialStats,
    });
    this.secondDataGather()
  };

  secondDataGather() {  
    let allProvincialStatsRegions = this.state.allProvinceData.map((provinceDataSetsTwo) => {
      const returnedCoordinates = {
          Active: provinceDataSetsTwo.Active,
          Latitude: provinceDataSetsTwo.Region.lat,
          Longitude: provinceDataSetsTwo.Region.long,
          Province: provinceDataSetsTwo.Region.province,
        };
      if (provinceDataSetsTwo.Region.lat !== null) { 
        return returnedCoordinates;
      }
      else return false;
    })
    this.setState({
      allRegionProvinceData: allProvincialStatsRegions.filter(Boolean),
    });
    this.coordinateValuesTwo() 
    console.log(this.state.allProvinceData)
  };

  coordinateValuesTwo() {
    let lineGraphArray = this.state.allProvinceData.map((e) => {
      let data = { Date: e.Region.province, Cases: e.Recovered };
      return data;
    });
    this.setState({
      handOffToLineGraphTwo: lineGraphArray,
    });
  }

  // map through the canadian canada summary and kick out province and case number. then filter through through that, if case = 0 remove it from the array // 

  // Add a unique key, for each set in the array // 
  // functionForLineGraph = (provinceInfoForLineGraph) => {
  //   let filteredSpecificProvince = this.state.canadianSummaryLineGraph.filter(
  //     (e) => {
  //       return e.Province === provinceInfoForLineGraph
  //         ? {
  //           Cases: e.Cases,
  //           Date: e.Date,
  //           Province: e.Province,
  //         }
  //         : null;
  //     }
  //   );
  //   this.setState({ fullProvinceTimeline: filteredSpecificProvince }, () => {
  //     this.coordinateValues();
  //   });
  // };

  // coordinateValues() {
  //   let lineGraphArray = this.state.fullProvinceTimeline.map((e) => {
  //     let data = { Date: e.Date, Cases: e.Cases };
  //     return data;
  //   });
  //   this.setState({
  //     handOffToLineGraph: lineGraphArray,
  //   });
  // }

  render() {
    console.log(this.state.allRegionProvinceData)
    const {
      allProvinceData,
      handOffToLineGraphTwo,
      allRegionProvinceData,
      widgetDataData,
      graphComponentData,
      // handOffToLineGraph,
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

          <section>
            <div className="columns">
              <div className="column is-4">
                <Widget/>
              </div>
              <div className="column is-4 ">
                <LogoMain />
              </div>
                <div className="column is-4">
              <WidgetTwo 
                widgetDataTwo={widgetDataData} 
              />
            </div>
          </div>
          </section>

          <section className="columns">
            <div className="column is-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                <BarGraph
                  barChartInfo={allProvinceData}
                  lineGraphHandler={this.functionForLineGraph}
                />
              </motion.div>
            </div>
            <div className="column is-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                <Map markerData={allRegionProvinceData}/>
              </motion.div>
            </div>
            <div className="column is-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                <LineGraph
                  graphStyle={graphComponentData}
                  lineGraphFinalFunction={handOffToLineGraphTwo}
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
