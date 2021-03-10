import React, { Component } from "react";
import axios from "axios";

import ReactMapGL, { Marker } from "react-map-gl";

const provinceDataURL ="https://api.covid19api.com/country/canada/status/confirmed/live";

const style = {
  padding: "3px 10px",
  color: "#fff",
  cursor: "pointer",
  background: "#111",
  borderRadius: "50px",
  fontSize: 13,
};

class Map extends Component {
  constructor() {
    super();
    this.state = {
      canadianSummaryAll: [],
      viewport: {
        width: "auto",
        height: 605,
        latitude: 58.5,
        longitude: -94,
        zoom: 3,
        isDrabble: "false",
        cluster: "true",
        clusterRadius: 80,
        },
      showPopup: true,
    };
  }

    async componentDidMount() {

    // To generate today's date on first api // 
    let fromDate = new Date();
    let toDate = new Date();
    // Adjusting time to get yesterday's date on first api // 
    fromDate.setHours(-30, 0, 0, 0);
    toDate.setHours(-27, 0, 0, 0);
    // fromDate and toDate Range on first api // 
    fromDate = fromDate.toISOString().split(".")[0] + "Z";
    toDate = toDate.toISOString().split(".")[0] + "Z";

    const { data: canadianSummaryAll } = await axios({
      url: provinceDataURL,
      method: `GET`,
      params: {
        from: fromDate,
        to: toDate,
      },
    });

    this.setState({
      canadianSummaryAll,
    });
  }

  render() {
  // console.log(this.props.markerData)
    return (
      <div className="customBox shadowTwo" style={{ textAlign: "center" }}>
        <h1 className="title">National Active Cases</h1>
        <ReactMapGL
          style={{ minWidth: "100%", maxWidth: "100%" }}
          {...this.state.viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoieGVub2pheCIsImEiOiJjazk5MDlpNDEwN2o2M21ueDVoNXQ1eWpnIn0.-Sy_LkU_ZYcmyH09Zl-MYw"
          }
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/mapbox/dark-v10"
        >
          {this.props.markerData.map((province) => {
            return (
              <Marker
                latitude={parseFloat(province.Latitude)}
                longitude={parseFloat(province.Longitude)}
                key={province.Province}
              >
                {/* <div style={style}>{province.Province}</div> */}
                <div style={style}>{province.Active}</div>
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
