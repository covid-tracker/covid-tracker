import React, { Component } from "react";
import axios from "axios";

// URLs
const newApiResponse = "https://covid-19-statistics.p.rapidapi.com/reports"

class GetProvincialStats extends Component {
    constructor() {
        super();
        this.state = {
            newApi: [],
            firstMapOfProvince: [
                {
                    active: '',
                    confirmed: '',
                    deaths: '',
                    fatality_rate: '',
                    recovered: '',
                }
            ],
        };
    }

    // // componentDidMount() {
    // //     axios ({
    // //         url: newApiResponse,
    // //         method: `GET`,
    // //         params: {
    // //         iso: `CAN`,
    // //         // date: '2021-02-14',
    // //     },
    // //         headers :{
    // //             'x-rapidapi-key': '63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6',
    // //             'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
    // //         }
    // //     }).then(response => {

    // //         const provinces = response.data;
            
    // //         let arrayOfRestaurants = provinces.map(provincialStatsFirstMap => {
    // //             const provincesObject = {
    // //                 name: provincialStatsFirstMap.active,
    // //                 image: provincialStatsFirstMap.confirmed,
    // //                 cuisine: provincialStatsFirstMap.deaths,
    // //                 review: provincialStatsFirstMap.fatality_rate,
    // //                 poo: provincialStatsFirstMap.recovered,
    // //             };
    // //             return provincesObject;
    // //         });
    // //         // suggestions =  arrayOfRestaurants
    // //     })
    // // }
    

    // firstDataGather() {  
    //     let allProvincialStats = this.state.newApi.map((provinceDataSets) => {
    //         return {
    //             Active: provinceDataSets.active,
    //             Confirmed: provinceDataSets.confirmed,
    //             Deaths: provinceDataSets.deaths,
    //             Fatality: provinceDataSets.fatality_rate,
    //             Recovered: provinceDataSets.recovered,
    //         };
    //     });
    //     this.setState({
    //         allProvinceData: allProvincialStats,
    //     });
    // };

    // allProvinceDataTwo() {
    //     let allProvincialStatsTwo = this.state.newApi.map((provinceDataSetsTwo) => {
    //     let data = { Active: provinceDataSetsTwo.active,
    //         Confirmed: provinceDataSetsTwo.confirmed,
    //         Deaths: provinceDataSetsTwo.deaths,
    //         Fatality: provinceDataSetsTwo.fatality_rate,
    //         Recovered: provinceDataSetsTwo.recovered, };
    //     return data;
    //     });
    //         this.setState({
    //     allProvinceDataTwo: allProvincialStatsTwo,
    //     });
    // }

    render() {
        return (
            <main className="section">
                <div className="column is-3"></div>
            </main>
        );
    }
}

export default GetProvincialStats;
