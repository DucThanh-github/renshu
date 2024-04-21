<template>
  <pie-chart v-if="typeChart === 'pie-chart'" :data="data" :options="options" />
  <line-chart
    v-if="typeChart === 'line-chart'"
    :data="data"
    :options="options"
  />
  <bar-chart v-if="typeChart === 'bar-chart'" :data="data" :options="options" />
</template>

<script setup>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PointElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
const props = defineProps({
  typeChart: {
    type: String,
    require: true,
  },
  data: {
    type: Object,
    require: true,
  },
});
const options = {
  responsive: true,
  maintainAspectRatio: false,
};


</script>