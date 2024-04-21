<template>
  <div style="height: 500px">
    <v-row>
      <v-col>
        <bar-chart :data="data" :options="options" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useChartStore } from "~/store/chartStore.js";
const store = useChartStore();

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);
// const data = ref();
const loadFromServer = () => {
  store.getChartInvoiceByDay();
};
loadFromServer();

// console.log("dataLabels", dataLabels.value);
// console.log("dataSets", dataSets.value);
const dataLabels = computed(() => store.getChartData.chartLabelSaleTrend);
const dataSets = computed(() => store.getChartData.dataSaleTrend);
console.log("dataLabels", dataLabels.value);
console.log("dataSets", dataSets.value);
const data = computed(() => {
  return {
    labels: dataLabels.value,
    datasets: [{
      label: "Data One",
      backgroundColor: "blue",
      data: dataSets.value,
    }],
  };
});

console.log("data beforeMount", data);
// const data = ref({
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Data One",
//       backgroundColor: "blue",
//       data: [3000000, 710000, 600000, 2000000, 3300000],
//     },
//   ],
// });
// const data2 = ref({
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Data One",
//       backgroundColor: "blue",
//       data: [3000, 7100, 6000, 20000, 33000],
//     },
//   ],
// });
const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: function (value, index, ticks) {
          //   console.log(value);
          if (value == 0) {
            return value;
          }
          if (value >= 100000) {
            return Math.round((value * 10) / 1000000) / 10 + "M";
          }
          if (1000 <= value < 100000) {
            return Math.round((value * 10) / 1000) / 10 + "K";
          }
          if (value < 1000) {
            return value;
          }
        },
      },
      suggestedMin: 0,
      grid: {
        color: "red",
      },
      border: {},

      weight: 0,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      color: "red",
      anchor: "end",
      align: "bottom",
      //   offset: 0,
      formatter: function (value, context) {
        console.log("value", value);
        if (value >= 100000) {
          return Math.round((value * 10) / 1000000) / 10 + "M";
        }
        if (1000 <= value < 100000) {
          return Math.round((value * 10) / 1000) / 10 + "K";
        }
        if (value < 1000) {
          return value;
        }
      },
    },
  },
});
</script>