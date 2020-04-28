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
      width: 900,
      height: 500,
      latitude: 53.76,
      longitude: -98.81,
      zoom: 2.8,
    },
  };

  render() {
    return (
      <ReactMapGL
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
    );
  }
}
export default Map;
