<template>
  <div class="px-4 py-4">
    <div
      class="flex flex-row items-center justify-between pb-8 w-[90%] mx-auto"
    >
      <h3 class="text-3xl">Results</h3>
      <router-link
        :to="{ name: 'MedalDistribution' }"
        class="font-semibold text-primary transition-all duration-100 ease-linear hover:text-primary-hover"
        >See Medal Distribution</router-link
      >
    </div>
    <div class="flex flex-col items-start justify-start gap-4 md:w-4/5 mx-auto">
      <div
        class="flex flex-col items-start justify-start gap-4 bg-white w-full px-8 py-4 rounded"
        v-for="i in 7"
        :key="i"
      >
        <h4 class="text-xl">{{ getRandomGame().title }}</h4>
        <div class="flex flex-row items-center justify-between w-1/2">
          <div class="flex flex-row items-center gap-4 justify-start w-full">
            <div class="w-16 h-16">
              <img
                :src="getCountry(i).image"
                alt="flag"
                class="w-full h-full object-contain"
              />
            </div>
            <h6 class="text-gray-700 font-semibold">
              {{ getCountry(i).name }}
            </h6>
          </div>
          <div
            class="flex flex-row items-center justify-between gap-8 bg-gray-800 text-gray-300 px-4 py-1"
          >
            <div class="font-bold text-lg text-center">
              {{ getRandomNumber() }}
            </div>
            <div class="h-8 w-[1px] bg-gray-200 py-2"></div>
            <div class="font-bold text-lg text-center">
              {{ getRandomNumber() }}
            </div>
          </div>
          <div class="flex flex-row items-center gap-4 justify-end w-full">
            <div class="w-16 h-16">
              <img
                :src="getNextCountry(i).image"
                alt="flag"
                class="w-full h-full object-contain"
              />
            </div>
            <h6 class="text-gray-700 font-semibold">
              {{ getNextCountry(i).name }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { countryData } from "@/utils/countryData.js";
import { useLiveGameStore } from "@/stores/liveGameStore";

const liveGameStore = useLiveGameStore();
const getCountry = (id) => {
  return countryData.filter((country) => country.id === id)[0];
};

const getNextCountry = (id) => {
  return countryData.filter((country) => country.id === id + 1)[0];
};

const getRandomGame = () => {
  const number = Math.floor(Math.random() * (8 - 1) + 1);
  return liveGameStore.liveGameData[number];
};

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * (25 - 1) + 1);
  return number;
};
</script>
