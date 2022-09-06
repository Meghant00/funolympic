<template>
  <div class="flex flex-col items-start justify-start gap-4">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>
<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
</script>
