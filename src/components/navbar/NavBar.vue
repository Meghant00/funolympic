<template>
  <div class="w-full h-16 py-4 px-4 flex flex-row items-center justify-between">
    <div class="logo">
      <img :src="logo" alt="logo" class="w-14 h-14" />
    </div>
    <div class="flex flex-row items-center justify-start gap-4">
      <div class="relative">
        <button @click="notificationOpened = !notificationOpened">
          Notifications
        </button>
        <div
          class="absolute -left-[250px] top-full w-64 bg-white rounded shadow-md px-4 py-4"
          v-if="notificationOpened"
        >
          <div class="flex flex-col items-start justify-start gap-4 w-full">
            <span>Notifications</span>
          </div>
        </div>
      </div>
      <div
        class="w-12 h-12 rounded-full bg-primary relative"
        @click="menuOpened = !menuOpened"
      >
        <div
          class="absolute -left-[250px] top-full w-64 bg-white rounded shadow-md px-4 py-4"
          v-if="menuOpened"
        >
          <div class="flex flex-col items-start justify-start gap-4 w-full">
            <span>Other Options</span>
            <button
              class="bg-primary rounded text-white text-lg w-full py-2 px-4 transition-all duration-150 ease-linear hover:bg-primary-hover"
              @click="logoutClicked"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/img/logo/fun-olympic.png";
import { ref } from "vue";
import { useRouter } from "vue-router";

("NavBar");
const menuOpened = ref(false);
const notificationOpened = ref(false);
const router = useRouter();
const logoutClicked = () => {
  router.push({ name: "Login" });
};
</script>
