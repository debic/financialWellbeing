import React, { Component } from 'react'
import Chart from "react-apexcharts";


    class MunicipalityScoreYears extends Component {
        constructor(props) {
          super(props);
      
          this.state = {
            options: {

                fill: {
                    colors: [function({ value, seriesIndex, w }) {
                      if(value === 55) {
                          return '#0C0C0C'
                      } else if (value >= 55 && value < 80) {
                          return '#ffffff'
                      } else {
                          return '#ffffff'
                      }
                    }],
                  },
              xaxis: {
                categories: ['Mun1', 'Mun2', 'Mun3', 'Mun4', 'Mun5', 'Mun6', 'Mun7', 'Mun8', 'Mun9'],
                labels: {
                    style: {
                      colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                      fontSize: '12px'
                    }
                  }
              },
              legend: {
              }
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 55, 50, 49, 60, 70, 10],
              
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
      
      export default MunicipalityScoreYears;