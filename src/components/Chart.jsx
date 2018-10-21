import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import Checkbox from "@material-ui/core/Checkbox";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  // handleChange for checkbox selection
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Risk Trend Analysis",
              fontSize: 20
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Risk Trend Analysis",
              fontSize: 20
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <div>
          <div>
            <p>Just an example of Material checkboxes:</p>
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange("checkedB")}
              value="checkedA"
              color="primary"
            />
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange("checkedB")}
              value="checkedB"
              color="primary"
            />
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange("checkedB")}
              value="checkedC"
              color="primary"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
