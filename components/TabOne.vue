<template>
  <v-col class="h-[200px]">
    <v-select
      v-model="select1"
      :items="prop1"
      multiple
      chips
      item-title="title"
      item-value="value"
    >
    </v-select>
    <!-- <chart-custom :data="data" typeChart="bar-chart" /> -->
    <!-- <bar-chart :data="data" :options="options" /> -->
  </v-col>
</template>

<script setup>
const props = defineProps({
  prop1: {
    type: Array,
  },
  // prop2: {
  //   type: Array,
  // },
});

const emit = defineEmits(["update:prop2"]);
const select1 = ref(props.prop1.map(item => item.value));

const data = ref({
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: ["blue", "red", "green", "yellow"],
      data: [3000000, 710000, 600000, 2000000, 3300000],
    },
  ],
});

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
// };
</script>