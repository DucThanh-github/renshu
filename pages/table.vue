<template>
  <EasyDataTable
    :headers="headers_1"
    :items="items_1"
    @expand-row="showDivision"
    table-class-name="custom-table"
  >
    <template #expand="item">
      <div>
        <EasyDataTable
          table-class-name="department-table"
          :headers="headers_2"
          :items="item.introduction ?? []"
          :hide-footer="true"
          :loading="item.expand_loading"
          @expand-row="showSubDepartment"
        >
          <template #expand="item">
            <div>
              <EasyDataTable
                :headers="headers_3"
                :items="item.subItem ?? []"
                :hide-footer="true"
                :loading="item.expand_loading"
              >
                <template #item-sub_department="item">
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
                </template>
              </EasyDataTable>
            </div>
          </template>

          <template #item-department="item">
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
      </div>
    </template>

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
    </template>
  </EasyDataTable>

  <button id="count" @click="count++">{{ count }}</button>
</template>

<script setup>
const count = ref(0);
onBeforeUpdate(() => {
  console.log("before update");
});
onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log("onUpdated");
  //   console.log(document.getElementById('count').textContent)
});
const headers_1 = [
  { text: "Division", value: "division", width: 200 },
  { text: "Sale", value: "sale", width: 200 },
  { text: "Total", value: "total", width: 200 },
  { text: "Change", value: "change", width: 200 },
];

const headers_2 = [
  { text: "Department", value: "department", width: 200 },
  { text: "", value: "sale", width: 200 },
  { text: "", value: "total", width: 200 },
  { text: "", value: "change", width: 200 },
];

const headers_3 = [
  { text: "", value: "" },
  { text: "Sub Department", value: "sub_department", width: 200 },
  { text: "", value: "sale", width: 200 },
  { text: "", value: "total", width: 200 },
  { text: "", value: "change", width: 200 },
];

const items_1 = ref([
  {
    name: "Division 1",
    sale: 100,
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
    sale: 100,
    total: 300,
    change: 50,
  },
]);
const updateDOM=() => {
  const arrayRow = document.querySelectorAll(".custom-table tbody>tr");
  console.log("arrayRow", arrayRow);

  arrayRow.forEach((item) => {
    if (item.firstElementChild.classList.contains("expand")) {
      item.classList.add("disable_hover");
    } else {
      item.classList.add("able_hover");
    }
  });
  // const expandEl = document.querySelectorAll(".expand");
  // expandEl.forEach((item) => {
  //   item.parentElement.classList.add("disable_hover");
  //   console.log("expandEl", item.parentElement);
  // });
};
const showDivision = async (index, item) => {
  // const expandedItem = items_1[index];
  // console.log("item", item);
  if (!item.introduction) {
    item.expand_loading = true;
    item.introduction = await mockItemIntroduction(item.name);
    item.expand_loading = false;
  }
  await nextTick()
  updateDOM()
  // console.log("item", item);
};

const mockItemIntroduction = async (name) => {
  await new Promise((s) => setTimeout(s, 2000));
  const result = [];
  for (let i = 1; i < 3; i++) {
    result.push({
      name: `${name} Department_${i}`,
      sale: 50,
      total: 30,
      change: 4,
    });
  }
  return result;
};

const loadingSubDepartment = ref(true);

const showSubDepartment = async (_, item) => {
  console.log("item.subItem", item.subItem);

  if (!item.subItem) {
    // loadingSubDepartment.value = true;
    item.expand_loading = true;
    const result = [];
    for (let i = 1; i < 5; i++) {
      result.push({
        name: `${item.name} Sub Department_${i}`,
        sale: 10,
        total: 20,
        change: 1 + i,
      });
    }
    await new Promise((res, rej) => {
      setTimeout(res, 1000);
    });
    item.subItem = result;
    item.expand_loading = false;
    await nextTick()
    updateDOM()
  }

  console.log("item.subItem", item.subItem);
  console.log("item", item);
  // loadingSubDepartment.value = false
};

const checkLoading = (item) => {
  if (item.subItem) {
    console.log("loaded");
    return false;
  }
  console.log("loading");
  return true;
};


</script>

<style lang="css" scope>
.department-table .can-expand {
  padding-left: 48px !important;
}

.custom-table,
.custom-table .vue3-easy-data-table {
  padding: 10px;
  --easy-table-header-background-color: #b3a7a7;
}
.custom-table .vue3-easy-data-table__main {
  border: 1px solid #ccc !important;
  min-height: 100px;
}

.expand-icon {
  border-width: 0 1px 1px 0 !important;
}

.disable_hover:hover {
  --easy-table-body-row-hover-background-color: white;
}
.able_hover:hover {
  --easy-table-body-row-hover-background-color: #eee;
}
</style>
