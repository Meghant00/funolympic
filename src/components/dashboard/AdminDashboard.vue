<template>
  <div>
    <h2 class="text-xl font-semibold py-4 text-gray-700">Dashboard</h2>
    <div class="flex flex-row items-center justify-between gap-4 w-full">
      <div
        class="bg-white shadow rounded px-4 py-6 flex flex-row items-center justify-start gap-4 w-full text-2xl font-semibold text-primary"
      >
        <div
          class="rounded-full w-16 h-16 flex flex-row items-center justify-center bg-primary text-white"
        >
          <Icon><Users /></Icon>
        </div>
        <div class="flex flex-col items-start justify-start gap-4">
          <h3>1000</h3>
          <h3>Total Users</h3>
        </div>
      </div>
      <div
        class="bg-white shadow rounded px-4 py-6 flex flex-row items-center justify-start gap-4 w-full text-2xl font-semibold text-fun-orange"
      >
        <div
          class="rounded-full w-16 h-16 flex flex-row items-center justify-center bg-fun-orange text-white"
        >
          <Icon><UserFriends /></Icon>
        </div>
        <div class="flex flex-col items-start justify-start gap-4">
          <h3>3000</h3>
          <h3>Active Users</h3>
        </div>
      </div>
      <div
        class="bg-white shadow rounded px-4 py-6 flex flex-row items-center justify-start gap-4 w-full text-2xl font-semibold text-primary-red"
      >
        <div
          class="rounded-full w-16 h-16 flex flex-row items-center justify-center bg-primary-red text-white"
        >
          <Icon><UsersSlash /></Icon>
        </div>
        <div class="flex flex-col items-start justify-start gap-4">
          <h3>100</h3>
          <h3>Blocked Users</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@vicons/utils";
import { Users, UsersSlash, UserFriends } from "@vicons/fa";
</script>
