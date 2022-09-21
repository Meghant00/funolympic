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
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Dashboard",
          },
        },
        { default: () => "Dashboard" }
      ),
    key: "dashboard",
    icon: renderIcon(Home),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "User",
          },
        },
        { default: () => "User" }
      ),
    key: "users",
    icon: renderIcon(Users),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Schedule",
          },
        },
        { default: () => "Schedule" }
      ),
    key: "schedule",
    icon: renderIcon(CalendarAlt),
  },
]);
</script>
