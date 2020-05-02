import React, { Component } from "react";

// render() {
//   console.log(this.props.widgetData);
//   {this.props.widgetData.map((mainStats, index) => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button
//         onClick={() => this.props.widgetData(mainStats)}
//         key={mainStats.Slug}
//       >
//         {mainStats.TotalConfirmed}
//       </button>
//     </div>
//   );
//     })}
//   );
// }

class Widget extends Component {
  render() {
    console.log(this.props.widgetData);
    return (
      <section className="section">
        <div className="box container" style={{ textAlign: "center" }}>
          <header>
            <h1 className="title" style={{ textAlign: "center" }}>
              Widgets
            </h1>
            {/* {this.props.widgetData.map((singleProvince, index) => {
                  return (
                    // <tbody>
                    //   <tr key={index}>
                    //     <td
                    //       onClick={() =>
                    //         this.props.clickEventForGraph(singleProvince)
                    //       }
                    //       key={singleProvince.Lon}
                    //     >
                    //       {singleProvince.Province}
                    //     </td>
                    //     <td
                    //       onClick={() =>
                    //         this.props.clickEventForGraph(singleProvince)
                    //       }
                    //       key={singleProvince.Lat}
                    //     >
                    //       {singleProvince.Cases}
                    //     </td>
                    //   </tr>
                    // </tbody>
                  );
                })} */}
          </header>
        </div>
      </section>
    );
  }
}

export default Widget;
