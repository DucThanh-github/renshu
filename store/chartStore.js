import { defineStore } from 'pinia'
// import axios from 'axios';

export const useChartStore = defineStore("chart-store", {
  state: () => {
    return {
      chartLabelSaleTrend: [],
      dataSaleTrend: [],
      listItem: [],
    };
  },
  getters: {
    getChartData: (state) => {
      return {
        chartLabelSaleTrend: state.chartLabelSaleTrend,
        dataSaleTrend: state.dataSaleTrend,
      };
    },
  },
  actions: {
    getChartInvoiceByDay: async () => {
      // const data = await fetch("http://localhost:8000/sale_trend")
      //   .then((res) => res.json())
      //   .then((respone) => {
      //     console.log("respone", respone);
      //     return respone;
      //   })
      //   .catch((err) => err);
      const data = [
        {
          date: "12/17/2023",
          sale_amount: 2200000,
          id: "acc4",
        },
        {
          date: "12/18/2023",
          sale_amount: 3100000,
          id: "6156",
        },
        {
          date: "12/19/2023",
          sale_amount: 1800000,
          id: "1798",
        },
        {
          date: "12/20/2023",
          sale_amount: 2500000,
          id: "a3eb",
        },
        {
          date: "12/21/2023",
          sale_amount: 3600000,
          id: "6976",
        },
        {
          date: "12/22/2023",
          sale_amount: 2900000,
          id: "a164",
        },
        {
          date: "12/23/2023",
          sale_amount: 1500000,
          id: "3a17",
        },
        {
          date: "12/24/2023",
          sale_amount: 4000000,
          id: "f9d1",
        },
        {
          date: "12/25/2023",
          sale_amount: 2800000,
          id: "74f1",
        },
        {
          date: "12/26/2023",
          sale_amount: 3300000,
          id: "321b",
        },
        {
          date: "12/27/2023",
          sale_amount: 2000000,
          id: "a546",
        },
        {
          date: "12/28/2023",
          sale_amount: 2700000,
          id: "16c7",
        },
        {
          date: "12/29/2023",
          sale_amount: 3600000,
          id: "b83b",
        },
        {
          date: "12/30/2023",
          sale_amount: 3100000,
          id: "1dbd",
        },
        {
          date: "12/31/2023",
          sale_amount: 2200000,
          id: "d7c1",
        },
        {
          date: "1/1/2024",
          sale_amount: 4000000,
          id: "8d24",
        },
        {
          date: "1/2/2024",
          sale_amount: 3400000,
          id: "301d",
        },
        {
          date: "1/3/2024",
          sale_amount: 2900000,
          id: "ab80",
        },
        {
          date: "1/4/2024",
          sale_amount: 1800000,
          id: "46a1",
        },
        {
          date: "1/5/2024",
          sale_amount: 2500000,
          id: "b01e",
        },
        {
          date: "1/6/2024",
          sale_amount: 3200000,
          id: "ea74",
        },
        {
          date: "1/7/2024",
          sale_amount: 2600000,
          id: "414f",
        },
      ];
      if (data) {
        console.log("data", data);
        const lable = [];
        const dataSets = [];
        data.forEach((item) => {
          lable.push(item.date);
          dataSets.push(item.sale_amount);
        });
        this.chartLabelSaleTrend = lable;
        this.dataSaleTrend = dataSets;
        // console.log("this.chartLabelSaleTrend, ", this.chartLabelSaleTrend)
        // console.log("this.dataSaleTrend, ", this.dataSaleTrend)
      }
    },
    getListStore: async () => {
      const data = [
        { title: "item1", value: 1 },
        { title: "item2", value: 2 },
        { title: "item3", value: 3 },
        { title: "item4", value: 4 },
      ];
      if(data) {
        // this.listItem = data;
      }
      console.log("state.listStore", state.listItem)
    },
  },
});



