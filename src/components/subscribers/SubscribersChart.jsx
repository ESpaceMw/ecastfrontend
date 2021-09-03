import ReactApexChart from "react-apexcharts"

import { useEffect, useState } from "react";

const SubscribersChart = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/statistics/annual-listens",{
            method: 'get',
            headers: {'Content-Type':'application/json'}
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setData(data)
        }).catch((err) => {
            console.log(err)
        })
  }, [])
        
  const state = {
        
          series: [{
            name: 'Subscribers',
            data: data
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
              title: {
                text: 'Subscribers'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val
                }
              }
            }
          },
        
        
      };
      

        return (
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
            </div>
          )
        
    }

export default SubscribersChart
