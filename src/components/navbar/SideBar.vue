<template>
  <div class="w-full h-full bg-background-gray-dark col-span-2">
    <n-menu :options="menuOptions" class="!text-lg !font-medium" />
  </div>
</template>
<script setup>
import { NIcon, NMenu } from "naive-ui";
import { h, ref } from "vue";
import { RouterLink } from "vue-router";
import { Home, Users, CalendarAlt } from "@vicons/fa";
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const menuOptions = ref([
  {
    label: "Dashboard",
    key: "dashboard",
    icon: renderIcon(Home),
  },
  {
    label: "Users",
    key: "users",
    icon: renderIcon(Users),
  },
  {
    label: "Schedule",
    key: "schedule",
    icon: renderIcon(CalendarAlt),
  },
]);
</script>
