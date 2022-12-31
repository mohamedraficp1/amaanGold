import Chart from "react-apexcharts";
import React from "react";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55],

      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Gold", "Silver"],
        colors: ["#546E7A", "#F7A928"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={380}
        />
      </div>
    );
  }
}

export default ApexChart;
