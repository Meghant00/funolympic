<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-16 pt-4 w-full lg:grid-cols-3">
    <router-link
      :to="{ name: 'Broadcast', params: { id: `1` } }"
      class="w-full lg:col-span-2 flex flex-col items-start justify-start gap-2 px-8"
    >
      <div class="w-full">
        <h2 class="text-3xl font-semibold pb-4">Currently Most Watched Game</h2>
        <div class="w-full lg:h-[70vh]">
          <img
            :src="mainImage"
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
        <h2 class="text-3xl font-semibold">Men's 1000m Relay</h2>
        <p class="font-light">
          Relay race, also called Relay is a track and field sport that consists
          of a set number of stages (legs) in which four members of a team take
          turns in running down the track. The runner finishing one leg is
          required to pass on the next runner with a stick-like object known as
          a “Baton”.
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
          <h3 class="text-2xl font-semibold">Men's Shot put</h3>
          <p class="font-light">
            Shot put is an athletics sport where people try to "put" a heavy
            weighted ball as far as they can. They are not allowed to throw it,
            but instead they push the ball out into the air. They "put" the ball
            by holding it at their neck and pushing it through the air. The shot
            put has been part of the Olympics since 1896.
          </p>
        </router-link>
      </div>
    </div>
    <Schedule class="lg:col-span-3 py-4 bg-background-gray-dark px-8" />
  </div>
</template>
<script setup>
import mainImage from "@/assets/img/dashboard-main.jpg";
import Schedule from "@/components/schedule/Schedule.vue";
</script>
