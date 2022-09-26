<template>
  <div class="grid grid-cols-1 gap-4 py-4 px-4 w-full lg:grid-cols-3">
    <div
      class="w-full lg:col-span-2 flex flex-col items-start justify-start gap-2"
      v-if="route.params.id < 9"
    >
      <live-game @shareClicked="shareClicked" />
      <comments class="row-start-3 lg:row-start-1" />
    </div>
    <div
      class="w-full lg:col-span-2 flex flex-col items-start justify-start gap-2"
      v-else
    >
      <scheduled-game @shareClicked="shareClicked" />
      <comments class="row-start-3 lg:row-start-1" />
    </div>
    <div
      class="w-full h-full flex flex-col items-start justify-start gap-4 lg:col-span-1"
    >
      <h3 class="text-xl font-semibold">Current Live Games</h3>
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
            <div class="text-gray-700 font-semibold">
              {{ getLiveNumber() }} Watching Now
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <n-modal
      v-model:show="showModal"
      class="flex flex-col w-full md:w-1/2 lg:w-1/4 bg-white rounded px-4 py-4"
    >
      <div>
        <h3 class="text-lg font-semibold py-4">Share Link on</h3>
        <div class="flex flex-row items-start justify-start gap-8 text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="transition duration-100 ease-linear hover:text-primary"
            @click="showModal = false"
            ><Icon><Facebook /></Icon>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            class="transition duration-100 ease-linear hover:text-primary"
            @click="showModal = false"
            ><Icon><Twitter /></Icon>
          </a>
        </div>
      </div>
    </n-modal>
  </div>
</template>
<script setup>
import LiveGame from "@/components/livegame/LiveGame.vue";
import Comments from "@/components/livegame/Comments.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { liveGameData } from "@/utils/liveGameData";
import ScheduledGame from "@/components/livegame/ScheduledGame.vue";
import { NModal } from "naive-ui";
import { Icon } from "@vicons/utils";
import { Facebook, Twitter } from "@vicons/fa";
const route = useRoute();
const liveGames = ref([]);

const showModal = ref(false);

onMounted(async () => {
  liveGames.value = await liveGameData.filter(
    (liveGame) => liveGame.id !== Number(route.params.id)
  );
});

const getLiveNumber = () => {
  return Math.floor(Math.random() * (7000 - 1000) + 1000);
};

const shareClicked = () => {
  showModal.value = true;
};
</script>
