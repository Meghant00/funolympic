<template>
  <div class="pr-8">
    <h2 class="text-xl font-semibold py-4 text-gray-700">Dashboard</h2>
    <!-- <div class="py-4">
      <UserChart />
    </div> -->
    <div class="grid md:grid-cols-3 gap-4">
      <div
        class="bg-white rounded-md shadow-md px-4 py-4 flex flex-col items-center justify-center gap-4 md:col-span-2"
      >
        <h5 class="text-gray-700 font-semibold text-lg">
          User Status of FunOlympic in Percentage
        </h5>
        <div><user-status-chart /></div>
      </div>
      <div class="flex flex-col items-start justify-start gap-4">
        <div
          class="bg-white shadow rounded px-4 py-6 flex flex-row items-center justify-start gap-4 w-full text-2xl font-semibold text-primary"
        >
          <div
            class="rounded-full w-16 h-16 flex flex-row items-center justify-center bg-primary text-white"
          >
            <Icon><Users /></Icon>
          </div>
          <div class="flex flex-col items-start justify-start gap-4">
            <h3>10050</h3>
            <h3>Total Users</h3>
          </div>
        </div>
        <div
          class="bg-white shadow rounded px-4 py-6 flex flex-row items-center justify-start gap-4 w-full text-2xl font-semibold text-success"
        >
          <div
            class="rounded-full w-16 h-16 flex flex-row items-center justify-center bg-success text-white"
          >
            <Icon><UserFriends /></Icon>
          </div>
          <div class="flex flex-col items-start justify-start gap-4">
            <h3>5000</h3>
            <h3>Active Users</h3>
          </div>
        </div>
        <div
          class="bg-white shadow rounded px-4 py-6 flex flex-row items-center justify-start gap-4 w-full text-2xl font-semibold text-danger"
        >
          <div
            class="rounded-full w-16 h-16 flex flex-row items-center justify-center bg-danger text-white"
          >
            <Icon><UsersSlash /></Icon>
          </div>
          <div class="flex flex-col items-start justify-start gap-4">
            <h3>500</h3>
            <h3>Blocked Users</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 flex flex-col items-start justify-start gap-4">
      <h3 class="text-xl font-semibold text-gray-700">Likes on Live Games</h3>
      <div class="bg-white w-[90%] mx-auto shadow rounded px-4 py-6">
        <game-like-distribution />
      </div>
    </div>
    <div class="py-4 flex flex-col items-start justify-start gap-4">
      <h3 class="text-xl font-semibold text-gray-700">User Growth</h3>
      <div class="bg-white w-[90%] mx-auto shadow rounded px-4 py-6">
        <user-chart />
      </div>
    </div>
  </div>
</template>
<script setup>
import UserStatusChart from "@/components/users/UserStatusChart.vue";
import GameLikeDistribution from "@/components/users/GameLikeDistribution.vue";
import { Icon } from "@vicons/utils";
import { UserFriends, UsersSlash, Users } from "@vicons/fa";
import UserChart from "@/components/users/UserChart.vue";
</script>
