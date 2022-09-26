<template>
  <router-link
    :to="{ name: 'Broadcast', params: { id: props.id } }"
    class="flex flex-col items-start justify-start gap-4 w-full transition-all duration-150 ease-linear group py-4 my-4 px-4 shadow-none rounded-md lg:w-4/5 bg-[#e9e9e9] hover:bg-[#ccc] hover:shadow-md"
  >
    <div
      class="flex flex-col items-start justify-start gap-4 w-full lg:w-[75%]"
    >
      <h4 class="text-xl">{{ props.title }}</h4>
    </div>
    <div class="flex flex-row w-full items-center justify-between">
      <div class="flex flex-row items-center gap-4 justify-start">
        <div class="flex flex-row items-center gap-4 justify-start">
          <div class="w-16 h-16">
            <img
              :src="country.image"
              alt="flag"
              class="w-full h-full object-contain"
            />
          </div>
          <h6 class="text-gray-700 font-semibold">
            {{ country.name }}
          </h6>
        </div>

        <span class="font-bold text-xl text-gray-700">VS</span>
        <div class="flex flex-row items-center gap-4 justify-start w-full">
          <div class="w-16 h-16">
            <img
              :src="nextCountry.image"
              alt="flag"
              class="w-full h-full object-contain"
            />
          </div>
          <h6 class="text-gray-700 font-semibold">
            {{ nextCountry.name }}
          </h6>
        </div>
      </div>
      <div class="text-xl">{{ props.time }}</div>
    </div>
  </router-link>
</template>
<script setup>
import { countryData } from "@/utils/countryData";
import { ref } from "vue";
const props = defineProps(["title", "date", "time", "link", "id"]);
const country = ref(null);
const nextCountry = ref(null);

const getCountry = () => {
  const id = rng();
  return countryData.filter((country) => country.id === id)[0];
};

const getNextCountry = () => {
  const id = rng();
  return countryData.filter((country) => country.id === id)[0];
};

const rng = () => Math.floor(Math.random() * (8 - 1) + 1);

country.value = getCountry();
nextCountry.value = getNextCountry();
</script>
