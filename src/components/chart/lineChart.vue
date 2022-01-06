<template>
  <div>
      <canvas ref="chart" :style="{height: height+'px'}"></canvas>
  </div>
</template>

<style lang="less">

</style>

<script>
  import {Chart, registerables} from 'chart.js';
  Chart.register(...registerables);

  export default {
    name: '',
    props: [
        'data',
        'height'
    ],
    data() {
      return {
        chart: null
      }
    },
    methods: {
      init() {
        let ctx = this.$refs.chart.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: {
            layout: {
              padding: {
                top: 10,
                right: 15,
                left: 10,
                bottom: 5,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
              }
            },
            scales: {
              y: {
                grid: {
                  display: true,
                  color: "rgba(0, 0, 0, .2)",
                  zeroLineColor: "#000000",
                  borderDash: [6],
                  borderDashOffset: [6],
                },
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 1000,
                  display: true,
                  color: "#8C8C8C",
                },
                type: 'linear',
                display: true,
                position: 'left',
              },
              x: {
                grid: {
                  display: false,
                },
              }
            }
          },
        })
      }
    },
    mounted() {
      this.init();
    },
    destroyed() {
      this.chart.destroy();
    }
  }

</script>
