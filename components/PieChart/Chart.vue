<template>
  <Pie :data="data" :options="options" />
</template>
  
  <script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
Legend.position = 'bottom';
const { data, options} = chartConfig;
</script>