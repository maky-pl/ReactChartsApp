import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/layauts/header";
import Chart from "./components/Chart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [["2016"], ["2017"], ["2017"]],
        datasets: [
          {
            label: "FHR",
            data: [72, 60, 45],
            backgroundColor: "rgba(255,99,132,0.2)"
          },
          {
            label: "CHS",
            data: [56, 57, 23],
            backgroundColor: "rgba(99,255,132,0.2)"
          },
          {
            label: "Simulated FHR",
            data: [72, 60, 41],
            backgroundColor: "rgba(139,207,239,0.2)"
          }
        ]
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="App">
          <Chart chartData={this.state.chartData} legendPosition="bottom" />
        </div>
      </Fragment>
    );
  }
}

export default App;
