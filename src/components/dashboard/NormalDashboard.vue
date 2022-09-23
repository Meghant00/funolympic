<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-16 pt-4 w-full lg:grid-cols-3">
    <router-link
      :to="{ name: 'Broadcast', params: { id: `1` } }"
      class="w-full lg:col-span-2 flex flex-col items-start justify-start gap-2 px-8"
    >
      <div class="w-full">
        <h2 class="text-3xl font-semibold pb-4">Currently Most Watched Game</h2>
        <div class="w-full lg:h-[76vh]">
          <img
            :src="liveGameData[0].image"
            alt="main-event"
            class="h-full w-full object-fill"
          />
        </div>
      </div>
    </router-link>
    <div
      class="w-full h-full flex flex-col items-start justify-start gap-4 px-8 lg:pl-0"
    >
      <router-link
        :to="{ name: 'Broadcast', params: { id: `1` } }"
        class="flex flex-col items-start justify-start gap-2"
      >
        <h2 class="text-3xl font-semibold">{{ liveGameData[0].title }}</h2>
        <p class="font-light">
          {{ liveGameData[0].description }}
        </p>
        <div class="w-full h-0.5 bg-black my-8 px-4"></div>
      </router-link>
      <div class="flex flex-col items-start justify-start gap-4 text-gray-700">
        <div class="flex flex-row items-start justify-center gap-8">
          <span>20:00</span>
          <span class="font-semibold uppercase">Up Next</span>
        </div>
        <router-link
          :to="{ name: `Broadcast`, params: { id: `2` } }"
          class="flex flex-col items-start justify-start gap-2"
        >
          <h3 class="text-2xl font-semibold">{{ liveGameData[1].title }}</h3>
          <p class="font-light">
            {{ liveGameData[1].description }}
          </p>
        </router-link>
      </div>
    </div>
    <div class="lg:col-span-3 py-4 bg-background-gray-dark px-8">
      <h3 class="text-3xl pb-4">Today's Schedule</h3>
      <schedule-card
        v-for="schedule in data"
        :key="schedule"
        :title="schedule.title"
        :date="schedule.date"
        :time="schedule.time"
        :link="schedule.link"
        :id="schedule.id"
      />
      <div class="w-full flex flex-row justify-end">
        <router-link :to="{ name: 'Schedule' }"
          ><button
            class="text-white px-4 py-2 bg-primary transition duration-100 ease-linear hover:bg-primary-hover font-semibold"
          >
            See More
          </button></router-link
        >
      </div>
    </div>
    <div
      class="lg:col-span-3 py-4 flex flex-col items-start justify-start gap-4 bg-background-gray-dark px-8"
    >
      <h3 class="text-3xl pb-4">Recent Results</h3>
      <result-cards :length="4" />
      <div class="w-full flex flex-row justify-end">
        <router-link :to="{ name: 'Results' }"
          ><button
            class="text-white px-4 py-2 bg-primary transition duration-100 ease-linear hover:bg-primary-hover font-semibold"
          >
            See More
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { liveGameData } from "@/utils/liveGameData";
import ScheduleCard from "@/components/schedule/ScheduleCard.vue";
import ResultCards from "@/components/results/ResultCards.vue";
import { scheduleData } from "@/utils/scheduleData";
import { ref } from "vue";

const data = ref(scheduleData.slice(0, 4));
</script>
