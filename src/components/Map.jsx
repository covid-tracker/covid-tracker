import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
//
const style = {
  padding: "3px 10px",
  color: "#fff",
  cursor: "pointer",
  background: "#111",
  borderRadius: "50px",
  fontSize: 15,
};

class Map extends Component {
  state = {
    viewport: {
      width: "auto",
      height: 716,
      latitude: 56,
      longitude: -97.81,
      zoom: 3,
      isDrabble: "false",
      cluster: "true",
      clusterRadius: 80,
    },
    showPopup: true,
  };

  render() {
    // console.log(this.props.markerData)
    return (
      <div className="customBox shadowTwo" style={{ textAlign: "center" }}>
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
                latitude={parseFloat(province.Lat)}
                longitude={parseFloat(province.Lon)}
              >
                <div style={style}>{province.Cases}</div>
                <div style={style}>{province.Cases}</div>
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
