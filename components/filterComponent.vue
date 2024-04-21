<template>
  <v-menu v-model="menu" :close-on-content-click="false" width="500" persistent>
    <template v-slot:activator="{ props }">
      <v-btn color="primary" dark v-bind="props"> Filter </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <!-- Customer Type -->
        <v-row class="d-flex align-center">
          <v-col cols="4">
            <span>Customer Type</span>
          </v-col>
          <v-col cols="8">
            <v-select
              :items="listCustomerType"
              item-title="value"
              item-value="text"
              placeholder="Please select"
              variant="outlined"
              hide-details="true"
              :model-value="customerType"
            >
            </v-select>
          </v-col>
        </v-row>

        <!-- Customer Group Type -->
        <v-row class="d-flex align-center">
          <v-col cols="4">
            <span>Customer Group</span>
          </v-col>
          <v-col cols="8">
            <v-select
              :items="selectCustomerGroup"
              item-title="group_name"
              item-value="group_code"
              v-model="customerGroup"
              placeholder="Please select"
              variant="outlined"
              hide-details="true"
            >
            </v-select>
          </v-col>
        </v-row>

        <!-- CT code -->
        <v-row class="d-flex align-center">
          <v-col cols="4">
            <span>CT Code</span>
          </v-col>
          <v-col cols="8">
            <v-select
              :items="selectCtCode"
              item-title="name"
              item-value="ct_code"
              v-model="ctCode"
              placeholder="Please select"
              variant="outlined"
              hide-details="true"
            >
            </v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex align-center justify-center">
        <v-col>
          <v-btn color="red-lighten-4" class="w-100" @click="close">
            close
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="purple-lighten-3" class="w-100" @click="applySearch">
            Apply
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-menu>

  <div>19 CT CODE</div>
</template>

<script setup>
const menu = ref(false);
const customerType = ref(null);
const customerGroup = ref(null);
const ctCode = ref(null);

const selectCustomerGroup = ref([]);
const selectCtCode = ref([]);

const listCustomerType = ref([
  { text: "End User", value: "END_USER" },
  { text: "Juristic", value: "JURISTIC" },
  { text: "Non Juristic", value: "NON_JURISTIC" },
]);

const responeEndUser = ref({
  Other: {
    SubOther1: [
      {
        group_code: "E00",
        group: "Other",
        ct_code: "000",
        sub_group_code: "SubOther1",
      },
      {
        group_code: "E00",
        group: "Other",
        ct_code: "001",
        sub_group_code: "SubOther1",
      },
      {
        group_code: "E00",
        group: "Other",
        ct_code: "002",
        sub_group_code: "SubOther1",
      },
    ],
    SubOther2: [
      {
        group_code: "E00",
        group: "Other",
        ct_code: "003",
        sub_group_code: "SubOther2",
      },
      {
        group_code: "E00",
        group: "Other",
        ct_code: "004",
        sub_group_code: "SubOther2",
      },
    ],
  },
});

const responeProfessinal = ref({
  Other: {
    SubOther1: [
      {
        group_code: "E00",
        group: "Other",
        ct_code: "000",
        sub_group_code: "SubOther1",
      },
      {
        group_code: "E00",
        group: "Other",
        ct_code: "001",
        sub_group_code: "SubOther1",
      },
      {
        group_code: "E00",
        group: "Other",
        ct_code: "002",
        sub_group_code: "SubOther1",
      },
    ],
  },
  Professional1: {
    SubProfessional1_1: [
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "010",
        sub_group_code: "SubProfessional1_1",
      },
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "011",
        sub_group_code: "SubProfessional1_1",
      },
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "012",
        sub_group_code: "SubProfessional1_1",
      },
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "013",
        sub_group_code: "SubProfessional1_1",
      },
    ],
    SubProfessional1_2: [
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "020",
        sub_group_code: "SubProfessional1_2",
      },
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "021",
        sub_group_code: "SubProfessional1_2",
      },
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "022",
        sub_group_code: "SubProfessional1_2",
      },
      {
        group_code: "P00",
        group: "Professional1",
        ct_code: "024",
        sub_group_code: "SubProfessional1_2",
      },
    ],
  },
  Professional2: {
    SubProfessional2_1: [
      {
        group_code: "P01",
        group: "Professional2",
        ct_code: "030",
        sub_group_code: "SubProfessional2_1",
      },
      {
        group_code: "P01",
        group: "Professional2",
        ct_code: "031",
        sub_group_code: "SubProfessional2_1",
      },
    ],
    SubProfessional2_2: [
      {
        group_code: "P01",
        group: "Professional2",
        ct_code: "040",
        sub_group_code: "SubProfessional2_2",
      },
      {
        group_code: "P01",
        group: "Professional2",
        ct_code: "041",
        sub_group_code: "SubProfessional2_2",
      },
      {
        group_code: "P01",
        group: "Professional2",
        ct_code: "042",
        sub_group_code: "SubProfessional2_2",
      },
      {
        group_code: "P01",
        group: "Professional2",
        ct_code: "043",
        sub_group_code: "SubProfessional2_2",
      },
    ],
  },
});

onMounted(() => {
  loadListDefault();
});

const listCustomerGroupDefault = ref([]);
const listCtCodeDefault = ref([]);
const loadListDefault = () => {
  // Professional
  const listKeyPro = getKeyObj(responeProfessinal.value);
  // console.log("listKeyPro", listKeyPro)
  listKeyPro.forEach((key) => {
    const subGroups = getKeyObj(responeProfessinal.value[key]);
    subGroups.forEach((subGroup) => {
      const detail = responeProfessinal.value[key][subGroup];
      // console.log(`detail ${subGroup}`, detail)
      detail.forEach((subGroupItem) => {
        if (
          !listCustomerGroupDefault.value.some((item) => {
            return item.group_code == subGroupItem.group_code;
          })
        ) {
          listCustomerGroupDefault.value.push({
            group_code: subGroupItem.group_code,
            group_name: subGroupItem.group,
            customerType:
              subGroupItem.group_code == "E00"
                ? "END_USER AND NON_JURISTIC JURISTIC"
                : "NON_JURISTIC JURISTIC",
          });
        }

        if (
          listCtCodeDefault.value.find(
            (item) =>
              item.group_code == subGroupItem.group_code &&
              item.ct_code == subGroupItem.ct_code
          )
        ) {
          listCtCodeDefault.value.find(
            (item) =>
              item.group_code == subGroupItem.group_code &&
              item.ct_code == subGroupItem.ct_code
          ).customerType = "END_USER AND NON_JURISTIC JURISTIC";
        } else {
          listCtCodeDefault.value.push({
            ct_code: subGroupItem.ct_code,
            name: subGroupItem.ct_code,
            group_code: subGroupItem.group_code,
            customerType: "NON_JURISTIC JURISTIC",
          });
        }
      });
    });
  });

  // End User
  const listKeyEndUser = getKeyObj(responeEndUser.value);
  // console.log("listKeyPro", listKeyPro)
  listKeyEndUser.forEach((key) => {
    const subGroups = getKeyObj(responeEndUser.value[key]);
    subGroups.forEach((subGroup) => {
      const detail = responeEndUser.value[key][subGroup];
      // console.log(`detail ${subGroup}`, detail)
      detail.forEach((subGroupItem) => {
        if (
          !listCustomerGroupDefault.value.some((item) => {
            return item.group_code == subGroupItem.group_code;
          })
        ) {
          listCustomerGroupDefault.value.push({
            group_code: subGroupItem.group_code,
            group_name: subGroupItem.group,
            customerType:
              subGroupItem.group_code == "E00"
                ? "END_USER AND NON_JURISTIC JURISTIC"
                : "END_USER",
          });
        }
        if (
          listCtCodeDefault.value.find(
            (item) =>
              item.group_code == subGroupItem.group_code &&
              item.ct_code == subGroupItem.ct_code
          )
        ) {
          listCtCodeDefault.value.find(
            (item) =>
              item.group_code == subGroupItem.group_code &&
              item.ct_code == subGroupItem.ct_code
          ).customerType = "END_USER AND NON_JURISTIC JURISTIC";
        } else {
          listCtCodeDefault.value.push({
            ct_code: subGroupItem.ct_code,
            name: subGroupItem.ct_code,
            group_code: subGroupItem.group_code,
            customerType: "END_USER",
          });
        }
      });
    });
  });
  // console.log("listCustomerGroupDefault", listCustomerGroupDefault.value);
  // console.log("listCtCodeDefault", listCtCodeDefault.value);
  selectCustomerGroup.value = listCustomerGroupDefault.value;
  selectCtCode.value = listCtCodeDefault.value;
};

watch(
  customerType,
  (value) => {
    if (value) {
      selectCustomerGroup.value = listCustomerGroupDefault.value.filter(
        (item) => item.customerType.includes(value)
      );
      selectCtCode.value = listCtCodeDefault.value.filter((item) =>
        item.customerType.includes(value)
      );

      // console.log("selectCtCode", selectCtCode.value);
      if (value == "END_USER") {
        customerGroup.value = "E00";
      } else {
        customerGroup.value = null;
        ctCode.value = null;
      }
    }
    // console.log("watch customerGroup", selectCustomerGroup.value);
    // console.log("watch ctCode", selectCtCode.value);
  },
  {
    deep: true,
  }
);

watch(customerGroup, (value) => {
  if (value) {
    console.log("customerGroup", customerGroup.value);
    if (customerType.value) {
      selectCtCode.value = listCtCodeDefault.value.filter(
        (item) =>
          item.group_code == value &&
          item.customerType.includes(customerType.value)
      );
    } else {
      selectCtCode.value = listCtCodeDefault.value.filter(
        (item) => item.group_code == value
      );
    }

    ctCode.value = null;
    console.log("selectCtCode", selectCtCode.value);
  }
});

function applySearch() {
  let emitData = null;
  if (customerType.value) {
    if (customerGroup.value && !ctCode.value) {
      emitData = {
        customerType: customerType.value,
        customerGroup: selectCtCode.value.map((item) => item.ct_code),
      };
    }
    if (!customerGroup.value && !ctCode.value) {
      emitData = {
        customerType: customerType.value,
      };
    }
    if (ctCode.value) {
      emitData = {
        customerType: customerType.value,
        customerGroup: ctCode.value,
      };
    }
  } else {
    if (customerGroup.value && !ctCode.value) {
      emitData = {
        customerGroup: selectCtCode.value.map((item) => item.ct_code),
      };
    }
    if (ctCode.value) {
      emitData = {
        customerType: customerType.value,
      };
    }
    if (!customerGroup.value && !ctCode.value) {
      console.log("emtry");
    }
  }
  console.log("emitData", emitData);
  menu.value = false;
}

function close() {
  selectCustomerGroup.value = listCustomerGroupDefault.value;
  selectCtCode.value = listCtCodeDefault.value;
  customerType.value = null;
  customerGroup.value = null;
  ctCode.value = null;
  menu.value = false;
}

function getKeyObj(Object) {
  const keys = [];
  for (let key in Object) {
    keys.push(key);
  }
  return keys;
}
</script>
