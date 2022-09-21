<template>
  <div class="py-4" :class="{ 'bg-background-gray-dark': !user.isAdmin }">
    <h3 class="text-gray-700 font-semibold text-xl pb-4" v-if="user.isAdmin">
      Schedule
    </h3>
    <schedule-table v-if="user.isAdmin" />
    <Schedule-Vue v-else />
  </div>
</template>
<script setup>
import ScheduleTable from "@/components/schedule/ScheduleTable.vue";
import ScheduleVue from "@/components/schedule/Schedule.vue";
import { ref } from "vue";

const user = ref(JSON.parse(localStorage.getItem("user")));
</script>
