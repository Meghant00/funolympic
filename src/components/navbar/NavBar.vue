<template>
  <div
    class="w-full h-[50px] flex flex-row items-center justify-between px-4 py-4 sticky top-0 bg-white"
  >
    <div class="logo w-full flex flex-row items-center justify-start gap-16">
      <router-link :to="{ name: 'Dashboard' }">
        <img :src="logo" alt="logo" class="w-full h-12 object-contain" />
      </router-link>

      <div v-if="!isAdmin">
        <nav-links />
      </div>
    </div>
    <div class="flex flex-row items-center justify-end gap-4 w-full">
      <div class="relative">
        <button
          @click="notificationClicked"
          class="text-primary transition-all duration-100 ease-linear hover:bg-black/[15%] text-lg rounded w-10 h-10 flex flex-row items-center justify-center"
        >
          <Badge :badgeClicked="notificationStore.notificationClicked" />
        </button>
        <div
          class="absolute -left-[250px] top-full w-64 bg-white rounded shadow-md px-4 py-4"
          v-if="notificationOpened"
        >
          <div class="flex flex-col items-start justify-start gap-4 w-full">
            <h4 class="font-semibold text-sm">Notifications</h4>
            <p
              v-for="notification in notificationStore.notifications"
              :key="notification"
            >
              {{ notification }}
            </p>
          </div>
        </div>
      </div>
      <button
        class="w-10 h-10 rounded relative flex flex-row items-center justify-center text-primary hover:bg-black/[15%]"
        @click="menuOpened = !menuOpened"
      >
        <Icon><UserRegular /></Icon>
        <div
          class="absolute -left-[230px] top-full w-64 bg-white rounded shadow-md px-4 py-4 z-50"
          v-if="menuOpened"
        >
          <div class="flex flex-col items-start justify-start gap-4 w-full">
            <button
              class="bg-primary rounded text-white w-full py-2 px-4 transition-all duration-150 ease-linear hover:bg-primary-hover"
              @click="logoutClicked"
            >
              Logout
            </button>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/img/logo/fun-olympic.png";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@vicons/utils";
import { UserRegular } from "@vicons/fa";
import { liveGameData } from "@/utils/liveGameData";
import Badge from "@/components/reuseable/Badge.vue";
import { useNotificationStore } from "@/stores/notificationStore.js";
import { scheduleData } from "@/utils/scheduleData.js";
import NavLinks from "./NavLinks.vue";
("NavBar");
const menuOpened = ref(false);
const notificationOpened = ref(false);
const router = useRouter();
const broadcastOptions = ref([]);
const broadcast = ref(null);
const notificationStore = useNotificationStore();
const isAdmin = ref(false);
const logoutClicked = () => {
  router.push({ name: "Login" });
  localStorage.setItem("user", JSON.stringify(null));
};

onMounted(() => {
  liveGameData.map((liveGame) => {
    broadcastOptions.value.push({
      label: liveGame.title,
      value: liveGame.id,
    });
  });

  scheduleData.map((scheduledGame) => {
    broadcastOptions.value.push({
      label: scheduledGame.title,
      value: scheduledGame.id,
    });
  });

  isAdmin.value = JSON.parse(localStorage.getItem("user")).isAdmin;
});

const broadcastSelected = () => {
  router.push({ name: "Broadcast", params: { id: broadcast.value } });
};

const notificationClicked = () => {
  notificationOpened.value = !notificationOpened.value;

  notificationStore.notificationClicked = true;
};
</script>
