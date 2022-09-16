<template>
  <div class="flex flex-col items-start justify-start">
    <nav-bar />
    <router-view class="bg-[#f7f7f8]" :key="$route.path"></router-view>
  </div>
</template>
<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
</script>
