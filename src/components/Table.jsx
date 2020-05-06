import React, { Component } from "react";
class Table extends Component {
  render() {
    return (
      <section className="section">
        <div className="box container" style={{ textAlign: "center" }}>
          <header>
            <h1 className="title" style={{ textAlign: "center" }}>
              Click Province Name
            </h1>
            <main className="columns">
              <table className="table is-bordered is-hoverable is-striped column">
                <thead>
                  <tr>
                    <th
                      style={{
                        backgroundColor: "#575a86",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      PROVINCE NAME
                    </th>
                    <th
                      style={{
                        backgroundColor: "#575a86",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      TOTAL CASES
                    </th>
                  </tr>
                </thead>
                {this.props.tableInfo.map((singleProvince, index) => {
                  return (
                    <tbody>
                      <tr key={index}>
                        <td
                          onClick={() =>
                            this.props.clickEventForGraph(singleProvince)
                          }
                          key={singleProvince.Lon}
                        >
                          {singleProvince.Province}
                        </td>
                        <td
                          onClick={() =>
                            this.props.clickEventForGraph(singleProvince)
                          }
                          key={singleProvince.Lat}
                        >
                          {singleProvince.Cases}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </main>
          </header>
        </div>
      </section>
    );
  }
}
export default Table;
