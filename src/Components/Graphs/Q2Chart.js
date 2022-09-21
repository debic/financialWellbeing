import React, { Component } from 'react'
import Chart from "react-apexcharts";


class Q2Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dataLabels: {
          style: {
            fontSize: '90px',
            fontWeight: 'bold',
            colors: ['#ffffff']
        },
          },
        theme: {
          monochrome: {
            enabled: true,
            color: '#F99746',
            shadeTo: 'light',
            shadeIntensity: 1
        },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
            
          }
        },
      
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          }
        },
        legend: {
          show: false
        }
      },
    
    
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
                  type="pie" width={380} 
                 
                />
              </div>
            </div>
          </div>

 
          );
        }
      }
      
      export default Q2Chart;

