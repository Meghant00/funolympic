<template>
  <div>
    <normal-dashboard v-if="!getAdminStatus && !getBlockedStatus" />
    <admin-dashboard v-if="getAdminStatus" />
    <blocked-dashboard v-if="getBlockedStatus" />
  </div>
</template>
<script setup>
import NormalDashboard from "@/components/dashboard/NormalDashboard.vue";
import AdminDashboard from "@/components/dashboard/AdminDashboard.vue";
import { computed } from "vue";
import BlockedDashboard from "@/components/dashboard/BlockedDashboard.vue";

const getAdminStatus = computed(() => {
  return JSON.parse(localStorage.getItem("user")).isAdmin;
});

const getBlockedStatus = computed(() => {
  return JSON.parse(localStorage.getItem("user")).blocked;
});
</script>
