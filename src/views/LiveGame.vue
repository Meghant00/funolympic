<template>
  <div class="grid grid-cols-1 gap-4 py-4 px-4 w-full lg:grid-cols-3">
    <div
      class="w-full lg:col-span-2 flex flex-col items-start justify-start gap-2"
    >
      <div class="w-full h-[72vh]">
        <img :src="mainImage" alt="main-event" class="w-full h-full" />
      </div>
      <div class="flex flex-row items-center justify-start gap-2">
        <div class="w-2 h-2 rounded-full bg-red-600"></div>
        <span class="text-red-600 text-sm font-semibold uppercase">Live</span>
      </div>
      <h3 class="text-xl font-semibold">Men's 1000m Marathon</h3>

      <div class="flex flex-row justify-between w-full">
        <div class="flex flex-row items-center justify-start gap-6 w-1/2">
          <div class="text-gray-700 font-semibold">7,000 Watching Now</div>
          <div class="text-gray-700 font-semibold">Started on 8/31/2022</div>
        </div>
        <div class="flex flex-row items-center justify-end gap-6 w-1/2">
          <button>Like</button>
          <button>Dislike</button>
          <button>Share</button>
        </div>
      </div>
      <div class="flex flex-col items-start justify-start gap-4">
        <h3 class="text-xl py-8">Comments</h3>
        <div
          class="flex flex-row items-start gap-4"
          v-for="item in 10"
          :key="item"
        >
          <div class="w-24 h-14 bg-green-700 rounded-full"></div>
          <div class="flex flex-col items-start justify-start gap-4">
            <h5>Username</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              quia repellat, tempore eaque officia quam repellendus placeat
              necessitatibus culpa ipsum? Placeat culpa suscipit quo perferendis
              dolores vel quis odio hic.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex flex-col items-start justify-start gap-2">
      <div
        class="flex flex-row items-start gap-4 w-full"
        v-for="item in 10"
        :key="item"
      >
        <div class="w-full h-full lg:w-64">
          <img :src="menCycling" alt="Cycling" />
        </div>
        <div class="flex flex-col items-start gap-2">
          <h3 class="text-lg">Men's Cycling Live 2022</h3>
          <div class="flex flex-row items-center justify-start gap-2">
            <div class="w-2 h-2 rounded-full bg-red-600"></div>
            <span class="text-red-600 text-sm font-semibold uppercase"
              >Live</span
            >
            <div class="text-gray-700 font-semibold">7,000 Watching Now</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import mainImage from "@/assets/img/dashboard-main.jpg";
import menCycling from "@/assets/img/men-cycling.jpg";
</script>
