import React, { Component } from "react";
// import { PureComponent } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

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
          console.log(province);
          return (
            <Marker
              latitude={37}
              longitude={-122}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div>{province.Province}</div>
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  }
}

export default Map;
