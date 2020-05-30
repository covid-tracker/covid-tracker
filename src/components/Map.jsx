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
      width: "auto",
      height: 500,
      latitude: 57,
      longitude: -96.81,
      zoom: 2.3,
    },
    showPopup: true,
  };

  render() {
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
                // closeButton={true}
                // closeOnClick={false}
                // onClose={() => this.setState({ showPopup: false })}
                // anchor="top"
                // dynamicPosition={false}
              >
                <div style={style}>{province.Cases}</div>
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
