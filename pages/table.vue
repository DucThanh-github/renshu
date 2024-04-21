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
          :loading="item.expandLoading"
          @expand-row="showSubDepartment"
          
        >
          <template #expand="item">
            <div>
              <EasyDataTable
                :headers="headers_3"
                :items="item.subItem ?? []"
                :hide-footer="true"
                :loading="item.expandLoading"
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
</template>

<script setup>
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

const showDivision = async (index, item) => {
  // const expandedItem = items_1[index];
  console.log("item",item)
  if (!item.introduction) {
    item.expandLoading = true;
    item.introduction = await mockItemIntroduction(item.name);
    item.expandLoading = false;
  }

  console.log("item",item)

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
  console.log("item.subItem", item.subItem)

  if (!item.subItem) {
    // loadingSubDepartment.value = true;
    item.expandLoading = true;
    const result = [];
    for (let i = 1; i < 5; i++) {
      result.push({
        name: `${item.name} Sub Department_${i}`,
        sale: 10,
        total: 20,
        change: 1 + i,
      });
    }
    await new Promise ((res, rej) => {
    setTimeout(res,1000)
  })
    item.subItem = result
    item.expandLoading = false;
  }

  console.log("item.subItem", item.subItem)
  console.log("item", item)
  // loadingSubDepartment.value = false
};

const checkLoading = (item) => {
  if (item.subItem ) {
    console.log("loaded")
    return false;
  }
  console.log("loading")
   return true;
}
</script>

<style lang="css" scope>
.expand {
  padding: 0px !important;
}

.department-table .can-expand {
  padding-left: 48px !important;
}

.custom-table .vue3-easy-data-table__main {
  min-height: 100px;
}

.expand-icon {
  border-width: 0 1px 1px 0!important;
}
</style>
