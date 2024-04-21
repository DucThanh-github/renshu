<template>
  <v-layout>
    <v-navigation-drawer>
      <v-list nav>
        <v-list-item-title>{{ dashBoardTitle }}</v-list-item-title>
        <!-- <v-list-group :v-model:opened="open" value="dashboard">
          <template #activator="{ props }">
            <v-list-item v-bind="props">
              <v-list-item-title> DashBoard </v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(item, index) in dashBoardItem"
            :key="index"
            :title="item"
            :value="item"
          >
          </v-list-item>
        </v-list-group> -->
      <v-list-item v-for="(item, i) in dashBoardItem" :key="i" :title="item">

      </v-list-item>
      
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item v-for="(item,index) of listAppenItem" :key="index" :title="item" >
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0"> </v-app-bar>

    <v-main>
      <v-container class="bg-slate-400 min-h-[2000px]">
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
const dashBoardTitle = ref("Dashboard");
const open = ref(dashBoardTitle);
// console.log(dashBoard);
const dashboard = ref(true);
const dashBoardItem = ref([
  "Learning Management",
  "Job Management",
  "Crm",
  "Sales",
  "Learning Management",
  "Job Management",
  "Crm",
  "Sales",
  "Learning Management",
  "Job Management",
  "Crm",
  "Sales",
  "Learning Management",
  "Job Management",
  "Crm",
  "Sales",
  "Learning Management",
  "Job Management",
  "Crm",
  "Sales",
  "Learning Management",
  "Job Management",
  "Crm",
  "Sales",
]);

const listAppenItem = ref(ref([
  "Learning Management",
  "Job Management",
  
]))
</script>
