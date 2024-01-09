<template>
  <h1>main</h1>
  <v-row>
    <v-col>
      <filter-component/>
    </v-col>
  </v-row>
</template>

<script setup>
import FilterComponent from "../componens/filterComponent.vue";
definePageMeta({
  layout: 'default-layout'
})
function seach(mess) {
  console.log("mess:", mess)
}
</script>