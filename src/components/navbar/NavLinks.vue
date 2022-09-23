<template>
  <div class="flex flex-row items-center justify-start gap-4">
    <nav-link
      v-for="link in navLinks"
      :key="link.name"
      :name="link.name"
      :text="link.text"
    />
    <drop-down />
  </div>
</template>
<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import DropDown from "@/components/reuseable/DropDown.vue";
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
</script>
