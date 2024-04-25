<template>
  <EasyDataTable
    :headers="headers_1"
    :items="listItem"
    v-model:server-options="serverOptions"
  >
    <template #item-division="item">
      <span>
        {{ item.name }}
      </span>
    </template>

    <template #item-sale="item">
      <span>
        {{ item.sale }}
      </span>
    </template>

    <template #item-total="item">
      <span>
        {{ item.total }}
      </span>
    </template>

    <template #item-change="item">
      <span>
        {{ item.change }}
      </span>
    </template></EasyDataTable
  >
</template>

<script setup>
const sortType = ref();
const headers_1 = [
  { text: "Division", value: "division", width: 200 },
  { text: "Sale", value: "sale", width: 200, sortable: true },
  { text: "Total", value: "total", width: 200 },
  { text: "Change", value: "change", width: 200 },
];

const group = ref([
  {
    name: "Division 1",
    sale: 200,
    total: 300,
    change: 50,
  },
  {
    name: "Division 2",
    sale: 100,
    total: 300,
    change: 50,
  },
  {
    name: "Division 3",
    sale: 300,
    total: 300,
    change: 50,
  },
]);

const groupDefault = ref([...group.value]);
const totalItem = ref({
  name: "Total",
  sale: 1000,
  total: 3000,
  change: 500,
});
const listItem = computed(() => {
  return [...group.value, totalItem.value];
});
const serverOptions = ref({
  page: 1,
  rowsPerPage: 5,
  sortBy: "age",
  sortType: "desc",
});

const sortable = () => {
  if (serverOptions.value.sortType === "asc") {
    group.value = _orderBy([...group.value], ["sale"], ["asc"]);
    return;
  }
  if (serverOptions.value.sortType === "desc") {
    group.value = _orderBy([...group.value], ["sale"], ["desc"]);
    return;
  }
  if (serverOptions.value.sortType === null) {
    group.value = [...groupDefault.value];
    return;
  }
};

watch(
  serverOptions,
  (value) => {
    sortable();
    console.log("group", group.value);
  },
  { deep: true }
);
</script>
