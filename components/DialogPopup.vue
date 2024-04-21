<template>
  <v-dialog v-model="showDialog">
    <v-card>
      test
      <v-btn @click="emit('closeDialog')"> close </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["closeDialog"]);

const showDialog = computed(() => props.show);

</script>
