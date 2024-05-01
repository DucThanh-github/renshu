<template>
  <div>chart</div>
</template>

<script setup>
const respone = {
  data: [
    {
      key: "1",
      value: 100,
      children: [
        {
          key: "sale_month",
          value: "01-05-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 100,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 110,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 120,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 130,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-06-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 140,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 150,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 160,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 170,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-07-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 180,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 190,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 200,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 210,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-08-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 220,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 230,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 240,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 250,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-09-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 260,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 270,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 280,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 290,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-10-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 300,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 310,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 320,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 330,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-11-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 340,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 350,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 360,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 370,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-12-2023",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 380,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 390,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 400,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 410,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-01-2024",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 420,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "KHONG CO 1",
              children: [
                {
                  key: "sale_amount",
                  value: 420,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 430,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 440,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 450,
                  children: null,
                },
              ],
            },
          ],
        },
        {
          key: "sale_month",
          value: "01-02-2024",
          children: [
            {
              key: "department_name",
              value: "FRESH FOOD 1",
              children: [
                {
                  key: "sale_amount",
                  value: 460,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "KHONG CO 2",
              children: [
                {
                  key: "sale_amount",
                  value: 420,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 2",
              children: [
                {
                  key: "sale_amount",
                  value: 470,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "FRESH FOOD 3",
              children: [
                {
                  key: "sale_amount",
                  value: 480,
                  children: null,
                },
              ],
            },
            {
              key: "department_name",
              value: "NONE FOOD",
              children: [
                {
                  key: "sale_amount",
                  value: 490,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const getData = computed(() => {
  const listKey = [];
  respone.data[0].children.forEach((item) => {
    item.children.forEach((department) => {
      const checkDepartment = listKey.find((key) => key.value === department.value);
      if (!checkDepartment) {
        listKey.push({ key: department.key, value: department.value });
      }
    });
  });
  return listKey;
});
// console.log(respone.data[0].children)
console.log(getData)

</script>
