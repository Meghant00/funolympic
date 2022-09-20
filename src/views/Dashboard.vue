<template>
  <normal-dashboard v-if="!getAdminStatus" />
  <admin-dashboard v-else />
</template>
<script setup>
import NormalDashboard from "@/components/dashboard/NormalDashboard.vue";
import AdminDashboard from "@/components/dashboard/AdminDashboard.vue";
import { computed } from "vue";

const getAdminStatus = computed(() => {
  return JSON.parse(localStorage.getItem("user")).isAdmin;
});
</script>
