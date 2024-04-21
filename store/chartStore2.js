export const useChartStore2 = defineStore("chart store 2", {
  state: () => {
    return {
      dataChart: [],
    };
  },
  actions: {
    transform() {
      const data = {
        items: [
          {
            key: "2024-01-26T00:00:00.063Z",
            label: null,
            data_points: [
              {
                key: "total",
                label: "Total",
                value: 67899008,
              },
              {
                key: "001",
                label: "Siknakarin",
                value: 21422223,
              },
              {
                key: "002",
                label: "Chiang Mai",
                value: 41422223,
              },
            ],
          },
          {
            key: "2024-01-27T00:00:00.063Z",
            label: null,
            data_points: [
              {
                key: "total",
                label: "Total",
                value: 77899008,
              },
              {
                key: "001",
                label: "Siknakarin",
                value: 91422223,
              },
              {
                key: "002",
                label: "Chiang Mai",
                value: 21422223,
              },
            ],
          },
          {
            key: "2024-01-27T00:00:00.063Z",
            label: null,
            data_points: [
              {
                key: "total",
                label: "Total",
                value: 77899008,
              },
              {
                key: "001",
                label: "Siknakarin",
                value: 81422223,
              },
              {
                key: "002",
                label: "Chiang Mai",
                value: 31422223,
              },
            ],
          },
        ],
      };
      if (data) {
        const result = {};
        const keys = data.items[0].data_points.map((item) => ({
          id: item.key,
          label: item.label,
        }));
        keys.forEach(
          (key) => (result[key.id] = { label: key.label, data: [] })
        );
        data.items.forEach((item) => {
          item.data_points.forEach((data_point) => {
            result[data_point.key]["data"].push({
              x: item.key,
              y: data_point.value,
            });
          });
        });
        console.log("result", result);
        this.dataChart = result;
      }
    },
  },
});
