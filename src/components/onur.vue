<template>
<div>
    <p class="point">İşsizlik - Yıllık İstihdam Kayıpları</p>
    <apexchart style="max-width:900px;" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    <p style="margin-top:382px;" class="point">2013-2016 Arasında Yerinden Edilen İşçilerin İstihdam Durumu</p>
    <apexchart type="pie" width="380" :options="chartOptions2" :series="series2"></apexchart>
    <img style="margin-top:382px;" src="./fredgraph.png">
    <img style="margin-top:382px;" src="./cyb2.png" width="900" height="500">
    <p class="point" style="font-size:20px;">Siber suç sürekli artıyor. 2001'den bu yana, çevrimiçi suç kurbanı sayısı 17 kat arttı (saatte 6 kurbandan 97 kurbana) ve mali kayıplar neredeyse 400 kat arttı (saatte 2.000 dolardan 788.000 dolara). Toplamda, siber suçlar 21 yıllık süre içinde en az 6.502.323 kurban ve 26.116.000.000 $ kayıp talep etti.</p>
    <img style="margin-top:382px;" src="https://cdn.statcdn.com/Infographic/images/normal/24980.jpeg" width="900" height="500">

</div>
</template>

<script>
export default {
  data(){
    return {
      series2: [15.9, 18.6, 65.5],
          chartOptions2: {
            chart: {
              width: '100%',
              type: 'pie',
            },
            labels: ["Unemployed", "Out of the workforce", "Employed"],
            theme: {
              monochrome: {
                enabled: true
              }
            },
            stroke: {
              colors: ["red","blue","green"]
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  offset: -5
                }
              }
            },
            title: {
              text: "Employment Status Of Workers Displaced"
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
      series: [{
            name: 'Value',
            data: [1.2, 0.8, 2.5]
          }],
          chartOptions: {
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
              categories: ['Agriculture (1900-1940)', 'Manufacturing (1970-1990)', 'Service Sector Automation (2020 and after)'],
            },
            yaxis: {
              title: {
                text: 'Annual Employment Losses'
              }
            },
            fill: {
              opacity: 1
            }
          },
    }
  }
}
</script>

<style>

</style>
