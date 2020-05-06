import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const style = {
  padding: "3px 10px",
  color: "#fff",
  cursor: "pointer",
  background: "#111",
  borderRadius: "50px",
};

class Map extends Component {
  state = {
    viewport: {
      height: 500,
      width: 590,
      latitude: 63,
      longitude: -96.81,
      zoom: 2.25,
    },
  };

  render() {
    return (
      <div className="box container" style={{ textAlign: "center" }}>
        {/* <div className="map-wrapper"> */}
        <ReactMapGL
          style={{ minWidth: "100%", maxWidth: "100%" }}
          {...this.state.viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoieGVub2pheCIsImEiOiJjazk5MDlpNDEwN2o2M21ueDVoNXQ1eWpnIn0.-Sy_LkU_ZYcmyH09Zl-MYw"
          }
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {this.props.markerData.map((province) => {
            return (
              <Marker
                latitude={parseFloat(province.Lat)}
                longitude={parseFloat(province.Lon)}
              >
                <div style={style}>
                  {province.Province} - {province.Cases}
                </div>
              </Marker>
            );
          })}
        </ReactMapGL>
        {/* </div> */}
      </div>
    );
  }
}
export default Map;
