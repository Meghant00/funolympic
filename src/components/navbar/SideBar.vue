<template>
  <div class="w-full h-full bg-background-gray-dark col-span-2">
    <n-menu
      :options="menuOptions"
      class="!text-lg !font-medium"
      :value="getActiveKey"
    />
  </div>
</template>
<script setup>
import { NIcon, NMenu } from "naive-ui";
import { h, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Home, Users, CalendarAlt, Video } from "@vicons/fa";
import { computed } from "vue";
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
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "LiveVideo",
          },
        },
        { default: () => "Live Videos" }
      ),
    key: "live-video",
    icon: renderIcon(Video),
  },
]);
const route = useRoute();
const getActiveKey = computed(() => {
  if (route.path === "/dashboard") {
    return "dashboard";
  }

  if (route.path === "/user") {
    return "users";
  }

  if (route.path === "/schedule") {
    return "schedule";
  }

  if (route.path === "/live-video") {
    return "live-video";
  }
  return "";
});
</script>
