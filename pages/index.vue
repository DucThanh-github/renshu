<template>
  <v-row class="p-3" no-gutters>
    <v-col>
      <v-sheet class="m-2">
        <div class="bg-red p-2 text-center">
          <span> No. of Invoice by day</span>
        </div>
        <v-col class="h-10"><Bar :data="data" :options="options" /></v-col>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const showDialog = ref(false);

const data = ref({
  labels: [""],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "red",
      data: [40],
    },
  ],
});
const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      }
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend:{display:false},
  },
  barThickness:20,
  indexAxis: "y",
});
</script>
