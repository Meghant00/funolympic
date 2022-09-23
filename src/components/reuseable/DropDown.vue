<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <div
        class="flex flex-row items-center justify-start gap-1 font-semibold text-red-600 uppercase"
      >
        <div class="w-2 h-2 rounded-full bg-red-600"></div>
        <span>Live</span><Icon><CaretDown /></Icon>
      </div>
    </template>
    <div class="flex flex-col items-start justify-start gap-2 px-2">
      <nav-link
        v-for="liveGame in liveGameStore.liveGameData"
        :key="liveGame"
        name="Broadcast"
        :params="liveGame.id"
        :text="liveGame.title"
        class="text-orange-400 hover:text-orange-500"
      />
    </div>
  </n-tooltip>
</template>
<script setup>
import { NTooltip } from "naive-ui";
import { Icon } from "@vicons/utils";
import { CaretDown } from "@vicons/fa";
import NavLink from "@/components/navbar/NavLink.vue";
import { useLiveGameStore } from "@/stores/liveGameStore.js";

const liveGameStore = useLiveGameStore();
</script>
<style scoped></style>
