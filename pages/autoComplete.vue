<template>
  <v-row>
    <v-col>
      <v-autocomplete
        v-model="selectItem"
        v-model:search="textSearch"
        :items="listItem"
        item-title="text"
        item-value="value"
        multiple
        density="compact"
        :clear-on-select="true"
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>

<script setup>
const listItem = ref([
  {
    text: "Ha Noi",
    value: "ha_noi",
  },
  {
    text: "Vung Tau",
    value: "vung_tau",
  },
  {
    text: "Sai Gon",
    value: "sai_gon",
  },
  {
    text: "Nghe An",
    value: "nghe_an",
  },
]);
// const selectItem = ref([]);
const selectItem = ref(listItem.value.map((item) => item.value));

const textSearch = ref("");
watch(selectItem, (value) => {
  console.log(value);
});

// const search = (event) => {
//   console.log(event);
// };

watch(selectItem, (value) => {
    textSearch.value=""
});
</script>
