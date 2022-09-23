<template>
  <div class="px-4 py-4">
    <div
      class="flex flex-row items-center justify-between pb-8 w-[90%] mx-auto"
    >
      <h3 class="text-3xl">Results</h3>
      <router-link :to="{ name: 'MedalDistribution' }"
        ><button
          class="text-white px-4 py-2 bg-primary transition duration-100 ease-linear hover:bg-primary-hover font-semibold"
        >
          See Medal Distribution
        </button></router-link
      >
    </div>
    <div class="flex flex-col items-start justify-start gap-4 md:w-4/5 mx-auto">
      <result-cards />
    </div>
  </div>
</template>
<script setup>
import ResultCards from "@/components/results/ResultCards.vue";
</script>
