import ReactApexChart from "react-apexcharts";

const AudienceChart = () => {
        
    const state = {
          
            series: [{
              name: 'Audiences',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
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
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: 'Audiences'
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
                <ReactApexChart className="dark:text-gray-300 dark:bg-gray-900" options={state.options} series={state.series} type="bar" height={350} />
            </div>
          )
        
    }

export default AudienceChart
