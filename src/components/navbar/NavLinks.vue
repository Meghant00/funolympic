<template>
  <div class="flex flex-row items-center justify-start gap-4">
    <nav-link
      v-for="link in navLinks"
      :key="link.name"
      :name="link.name"
      :text="link.text"
      :class="{
        'text-orange-600 hover:text-orange-700': link.name === getActiveKey,
      }"
    />
    <drop-down />
    <nav-link
      name="Results"
      text="Results"
      :class="{
        'text-orange-600 hover:text-orange-700': 'Results' === getActiveKey,
      }"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import DropDown from "@/components/reuseable/DropDown.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const navLinks = ref([
  {
    name: "Dashboard",
    text: "Home",
  },
  {
    name: "Schedule",
    text: "Schedule",
  },
]);

const route = useRoute();
const getActiveKey = computed(() => {
  console.log(route.path);
  if (route.path === "/dashboard") {
    return "Dashboard";
  }

  if (route.path === "/results" || route.path === "/medal-distribution") {
    return "Results";
  }

  if (route.path === "/schedule" || route.path.includes("broadcast")) {
    return "Schedule";
  }

  return "";
});
</script>
