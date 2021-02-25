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

// URLs, Currently taking care of the total National Figures // 
const provinceDataURL ="https://api.covid19api.com/country/canada/status/confirmed/live";
const summaryDataURL = "https://api.covid19api.com/summary";

// New URLs, currently taking care of the provincial stats // 
const newApiResponse = "https://covid-19-statistics.p.rapidapi.com/reports"
// const newApiResponseDate = "https://covid-19-statistics.p.rapidapi.com/provinces"

class App extends Component {
  constructor() {
    super();
    this.state = {
      newApi: [],
      widgetDataData: [],
      // newApiDate: [],
      allProvinceData: [],

      handOffToLineGraphTwo: [],


      allRegionProvinceData: [],
      canadianSummaryLineGraph: [],
      canadianSummaryAll: [],
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
    // To generate today's date // 
    let fromDate = new Date();
    let toDate = new Date();
    // Adjusting time to get yesterday's date // 
    fromDate.setHours(-30, 0, 0, 0);
    toDate.setHours(-27, 0, 0, 0);
    // fromDate and toDate Range // 
    fromDate = fromDate.toISOString().split(".")[0] + "Z";
    toDate = toDate.toISOString().split(".")[0] + "Z";

        const { data: newApi } = await axios ({
      url: newApiResponse,
      method: `GET`,
      params: {
        iso: `CAN`,
        date: '2021-02-23', 
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
        date: '2021-02-14', 
      },
      headers :{
        'x-rapidapi-key': '63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      }
    });

      //   const { data: newApiDate } = await axios ({
      // url: newApiResponseDate,
      // method: `GET`,
      // params: {
      //   from: fromDate,
      //   to: toDate,
      //   iso: `CAN`,
      //   date: '2021-02-14',
      // },
      // headers :{
      //   'x-rapidapi-key': '63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6',
      //   'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
      // }
      //     });

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
      widgetDataData: newApiWidget.data[10],
      canadianSummaryAll,
      canadianSummaryCanada: canadianSummaryCanada.Countries[30],
      loading: false,
    });
    this.firstDataGather()
    console.log(this.state.canadianSummaryAll)
    console.log(this.state.canadianSummaryCanada)
    // console.log(this.state.newApi)
    // console.log(this.state.allProvinceData.data)
    // console.log(this.state.newApi[0].region.province)
    // console.log(this.state.allProvinceData[0].Region)
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
    this.secondDataGather()
  };

    secondDataGather() {  
    let allProvincialStatsRegions = this.state.allProvinceData.map((provinceDataSetsTwo) => {
      const returnedCoordinates = {
        Latitude: provinceDataSetsTwo.Region.lat,
        Longitude: provinceDataSetsTwo.Region.long,
        Province: provinceDataSetsTwo.Region.province,
      };
      return returnedCoordinates;
    });
    this.setState({
      allRegionProvinceData: allProvincialStatsRegions,
    });
    this.coordinateValuesTwo() 
  };

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

  // Add a unique key, for each set in the array // 
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

    coordinateValuesTwo() {
    let lineGraphArray = this.state.allProvinceData.map((e) => {
      let data = { Date: e.Region.province, Cases: e.Confirmed };
      return data;
    });
    this.setState({
      handOffToLineGraphTwo: lineGraphArray,
    });
  }


  render() {
    console.log(this.state.allRegionProvinceData)
    console.log(this.state.allProvinceData)
    const {
      allProvinceData,
      canadianSummaryAll,
      handOffToLineGraphTwo,
      // allRegionProvinceData,
      widgetDataData,
      canadianSummaryCanada,
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
                barChartInfo={allProvinceData}
                lineGraphHandler={this.functionForLineGraph}
              />
            </div>
            <div className="column is-5">
              <motion.div whileHover={{ scale: 1.01, y: "-20px" }}>
                <Map markerData={canadianSummaryAll} />
              </motion.div>
            </div>
            <div className="column is-4">
              <Widget 
                widgetData={canadianSummaryCanada} 
                />
              <WidgetTwo 
                widgetDataTwo={widgetDataData} 
                />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
              >
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
