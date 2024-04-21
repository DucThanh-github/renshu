<template>
  <v-row>
    <v-col cols="4">
      <div class="h-8 flex">
        <div class="w-1/3">Yesterday</div>
        <div class="bg-yellow grow flex">
          <div class="bg-red h-full" :style="{ width: widthCustom + '%' }">
            {{ widthCustom }}
          </div>
          <div class="grow h-full bg-slate-600 ">
          </div>
        </div>
      </div>
      <button @click="customerWidth">click</button>
    </v-col>
  </v-row>
</template>

<script setup>
const widthCustom = ref(10);
const customerWidth = () => {
  widthCustom.value += 5;
};
</script>
