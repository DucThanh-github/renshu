<template>
  <v-row class="picker_body">
    <v-col><date-time-picker v-model="date" auto-apply :teleport="body" />/></v-col>
    <v-col>
      <v-select
        v-model="select1"
        :items="listItems"
        multiple
        chips
        item-title="title"
        item-value="value"
      >
      </v-select
    ></v-col>
  </v-row>
</template>

<script setup>
const date = ref(new Date());
const select1 = ref([])
const listItems = computed(() => [
        { title: "item1", value: 1 },
        { title: "item2", value: 2 },
        { title: "item3", value: 3 },
        { title: "item4", value: 4 },
      ])
</script>