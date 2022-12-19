<template>

      <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      series: [{
            name: 'north',
            data: [{
                x: 1996,
                y: 322
              },
              {
                x: 1997,
                y: 324
              },
              {
                x: 1998,
                y: -329
              },
            ]
          }, {
            name: 'south',
            data: [
              {
                x: 1996,
                y: 162
              },
              {
                x: 1997,
                y: -90
              },
              {
                x: 1998,
                y: 50
              }
            ]
          }],
          chartOptions: {
            chart: {
              type: 'area',
              height: 350
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },

            title: {
              text: 'Area with Negative Values',
              align: 'left',
              style: {
                fontSize: '14px'
              }
            },
            xaxis: {
              type: 'datetime',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              }
            },
            yaxis: {
              tickAmount: 4,
              floating: false,

              labels: {
                style: {
                  colors: '#8e8da4',
                },
                offsetY: -7,
                offsetX: 0,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false
              }
            },
            fill: {
              opacity: 0.5
            },
            tooltip: {
              x: {
                format: "yyyy",
              },
              fixed: {
                enabled: false,
                position: 'topRight'
              }
            },
            grid: {
              yaxis: {
                lines: {
                  offsetX: -30
                }
              },
              padding: {
                left: 20
              }
            }
          },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
