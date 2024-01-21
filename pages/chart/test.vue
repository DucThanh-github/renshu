<template>
  <div style="height: 500px">
    test chart
    <bar-chart :data="data" :options="options" />
  </div>
</template>

<script setup>
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useChartStore } from "~/store/chartStore.js";
const store = useChartStore();

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const loadFromServer = () => {
  store.getChartInvoiceByDay();
};
loadFromServer();

const dataLabels = computed(() => store.getChartData.chartLabelSaleTrend);
const dataSets = computed(() => store.getChartData.dataSaleTrend);
// console.log("dataLabels", dataLabels.value);
// console.log("dataSets", dataSets.value);
// const data = ref({
//   labels: dataLabels.value,
//   dataSets: {
//     labels: "Sale Mount",
//     backgroundColor: "blue",
//     data: dataSets.value,
//   },
// });
// console.log("data beforeMount", data);
const data = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "blue",
      data: [3000, 7100, 6000, 20000, 33000],
    },
  ],
});

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: function (value, index, ticks) {
          //   console.log(value);
          if (value < 1000) {
            return value;
          }
          if (1000 <= value < 100000) {
            return Math.round((value * 10) / 1000) / 10 + "K";
          }
          if (value >= 100000) {
            return Math.round((value * 10) / 1000000) / 10 + "M";
          }
        },
      },
      grid: {
        color: "red",
      },
      border: {
        
      },
      suggestedMax: 50000,
      suggestedMin: 1000,
      weight: 0
    },
    x: {
        grid: {
            display: false
        }
    }
  },
  plugins: {
    datalabels: {
      color: "white",
      formatter: function (value, context) {
        console.log("value", value);
        if (value < 1000) {
          return value;
        }
        if (1000 <= value < 100000) {
          return Math.round((value * 10) / 1000) / 10 + "K";
        }
        if (value >= 100000) {
          return Math.round((value * 10) / 1000000) / 10 + "M";
        }
      },
    },
  },
});
</script>