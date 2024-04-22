<script setup>
import { ref, onUpdated } from 'vue'

const count = ref(0)
onBeforeUpdate(() => {
    console.log("before update")
})
onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log("onUpdated")
//   console.log(document.getElementById('count').textContent)
})
</script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>