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
                data: [this.props.never, this.props.rarely, this.props.sometimes, this.props.often, this.props.always],
      
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

