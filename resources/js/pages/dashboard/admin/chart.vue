<template>
<div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6 text-center">
                  <div class="card">
                    <div class="card-body">
                      <h3 class="card-title">Total Revenue</h3>
                      <div style="max-width: 568px">
                       <vue3-chart-js v-bind="{ ...barChart }" />
                       </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-center">
                  <div class="card">
                    <div class="card-body">
                      <h3 class="card-title">Sales Overview</h3>
                       <vue3-chart-js
        :id="lineChart.id"
        :type="lineChart.type"
        :data="lineChart.data"
        :options="lineChart.options"
    ></vue3-chart-js>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 </template>
 <script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  components: {
    Vue3ChartJs,
  },
  setup() {
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        
      },
      data: {
        labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
        datasets: [
          {
            label: "Total Income",
            backgroundColor: ["#ff9b44", "#ff9b44", "#ff9b44", "#ff9b44", "#ff9b44", "#ff9b44", "#ff9b44", "#ff9b44"],
            data: [100, 75, 50, 75, 50, 75, 100],
          },
          {
            label: "Total outcome",
            backgroundColor: ["#fc6075", "#fc6075", "#fc6075", "#fc6075", "#fc6075", "#fc6075", "#fc6075", "#fc6075"],
            data: [90, 65, 40, 65, 40, 65, 90],
          },
        ],
      },
    };
    const lineChart = {
      id: 'line',
      type: 'line',
      data: {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
          {
            label: "Total Sales",
            data: [50, 75, 50, 75, 50, 75, 100],
            fill: false,
            borderColor: "#ff9b44",
            tension: 0.5,
            backgroundColor: "#ff9b44",
          },
          {
            label: "Total Revenue",
            data: [90, 65, 40, 65, 40, 65, 50],
            fill: false,
            borderColor: "#fc6075",
            tension: 0.5,
            backgroundColor: "#fc6075",
          },
        ],
      },
      options: {
        plugins: {
         
        },
      },
    };
    return {
      barChart,
      lineChart
    };
  }
  }
</script>
