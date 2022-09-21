import React, { Component } from 'react'
import Chart from "react-apexcharts";


    class Q1Chart extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            options: {

                fill: {
                    colors: [function({ value, seriesIndex, w }) {
                      if(value === 55) {
                          return '#0C0C0C'
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
                data: [2, 40, 55, 50, 49],
              
              }
            ],
         
            
           // this.props.numb
              
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
      
      export default Q1Chart;

