import { Bar, Line, Pie } from 'vue-chartjs'

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.component("bar-chart", Bar)
    nuxtApp.vueApp.component("line-chart", Line)
    nuxtApp.vueApp.component("pie-chart", Pie)
  })
