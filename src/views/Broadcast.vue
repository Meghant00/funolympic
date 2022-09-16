<template>
  <div class="grid grid-cols-1 gap-4 py-4 px-4 w-full lg:grid-cols-3">
    <div
      class="w-full lg:col-span-2 flex flex-col items-start justify-start gap-2"
    >
      <live-game />
      <comments class="row-start-3 lg:row-start-1" />
    </div>
    <div class="w-full h-full flex flex-col items-start justify-start gap-4">
      <router-link
        class="flex flex-col items-start justify-start lg:flex-row gap-x-4 gap-y-2 w-full"
        v-for="liveGame in liveGames"
        :key="liveGame"
        :to="{ name: 'Broadcast', params: { id: liveGame.id } }"
      >
        <div class="w-full h-full lg:w-64 lg:h-36">
          <img
            :src="liveGame.image"
            alt="Cycling"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col items-start gap-2">
          <h3 class="text-lg">{{ liveGame.title }}</h3>
          <div class="flex flex-row items-center justify-start gap-2">
            <div class="w-2 h-2 rounded-full bg-red-600"></div>
            <span class="text-red-600 text-sm font-semibold uppercase"
              >Live</span
            >
            <div class="text-gray-700 font-semibold">7,000 Watching Now</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import LiveGame from "@/components/livegame/LiveGame.vue";
import Comments from "@/components/livegame/Comments.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { liveGameData } from "@/utils/liveGameData";
const route = useRoute();
const liveGames = ref([]);

onMounted(async () => {
  liveGames.value = await liveGameData.filter(
    (liveGame) => liveGame.id !== Number(route.params.id)
  );
});
</script>
