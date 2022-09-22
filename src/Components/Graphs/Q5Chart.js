import React, { Component } from 'react'
import Chart from "react-apexcharts";


class Q5Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {

          fill: {
              colors: [function({ value, seriesIndex, w }) {
                if(value === 55) {
                    return '#6EBBE5'
                } else if (value >= 55 && value < 80) {
                    return '#6EBBE5'
                } else {
                    return '#6EBBE5'
                }
              }],
            },
        xaxis: {
          categories: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],

        },
        legend: {
        }
      },
      series: [
        {
          name: "series-1",
          data: [this.props.first, this.props.sec, this.props.third, this.props.four, this.props.fifth],

        }
      ],
   
      
 
        
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
             
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Q5Chart;

