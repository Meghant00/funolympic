<template>
  <div class="flex flex-col items-start justify-start">
    <nav-bar />
    <div
      class="grid grid-cols-1 gap-4 h-[93.2vh] lg:grid-cols-12 bg-[#f7f7f8] w-full"
    >
      <side-bar v-if="user.isAdmin" />
      <router-view
        class="h-full overflow-y-scroll"
        :class="{ 'col-span-10 ': user.isAdmin, 'col-span-12': !user.isAdmin }"
        :key="$route.path"
      ></router-view>
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
import SideBar from "@/components/navbar/SideBar.vue";
import { ref } from "vue";

const user = ref(JSON.parse(localStorage.getItem("user")));
</script>
