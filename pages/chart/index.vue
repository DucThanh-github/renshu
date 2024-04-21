
<template>
  <v-row class="p-3" no-gutters>
    <v-col>
      <v-sheet class="m-2">
        <div class="bg-red p-2 text-center">
          <span> No. of Invoice by day</span>
        </div>
        <v-col><Bar :data="dataChartInvoiceByDay" :options="options" /></v-col>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class="m-2">
        <div class="bg-red p-2 text-center">
          <span> Sale by day</span>
        </div>
        <v-col>char</v-col>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
// definePageMeta({
//   layout: "default-layout",
// });
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { useChartStore2 } from "~/store/chartStore2.js";
const store = useChartStore2();



const data = computed(() =>  store.dataChart)
// const dataSet = [...data].map(item => {
//   return {label : item.label, data: item.data}
// })
// console.log(dataSet)
const dataChartInvoiceByDay = ref({
  
  datasets: {
    label: "Data One",
    backgroundColor: "#f87979",
    data: data[0],
  },
});
console.log("data", data);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = ref({
  responsive: true,
  maintainAspectRatio: false,
});

const loadFromServer = async () => {
  store.transform();
};

// init data from server
await loadFromServer();
const test = ref(1)



</script>