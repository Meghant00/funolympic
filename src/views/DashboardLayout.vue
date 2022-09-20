<template>
  <div class="flex flex-col items-start justify-start">
    <nav-bar />
    <div
      class="grid grid-cols-1 gap-4 h-[93.2vh] lg:grid-cols-12 bg-[#f7f7f8] w-full"
    >
      <div class="w-full h-full bg-background-gray-dark col-span-2"></div>
      <router-view
        class="col-span-10 h-full overflow-y-scroll"
        :key="$route.path"
      ></router-view>
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
</script>
