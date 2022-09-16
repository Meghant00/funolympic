<template>
  <div
    class="w-full h-[50px] flex flex-row items-center justify-between px-4 py-4"
  >
    <div class="logo w-full flex items-center justify-start">
      <router-link :to="{ name: 'Dashboard' }">
        <img :src="logo" alt="logo" class="w-full h-12 object-contain" />
      </router-link>
    </div>
    <div class="w-full">
      <n-select
        placeholder="Select Broadcast"
        v-model:value="broadcast"
        :options="broadcastOptions"
        clearable
        filterable
        @update:value="broadcastSelected"
      />
    </div>
    <div class="flex flex-row items-center justify-end gap-4 w-full">
      <div class="relative">
        <button
          @click="notificationOpened = !notificationOpened"
          class="text-primary transition-all duration-100 ease-linear hover:bg-black/[15%] text-lg rounded w-10 h-10 flex flex-row items-center justify-center"
        >
          <Icon><BellRegular /></Icon>
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
      <button
        class="w-10 h-10 rounded relative flex flex-row items-center justify-center text-primary hover:bg-black/[15%]"
        @click="menuOpened = !menuOpened"
      >
        <Icon><UserRegular /></Icon>
        <div
          class="absolute -left-[230px] top-full w-64 bg-white rounded shadow-md px-4 py-4"
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
      </button>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/img/logo/fun-olympic.png";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@vicons/utils";
import { BellRegular, UserRegular } from "@vicons/fa";
import { NSelect } from "naive-ui";
import { liveGameData } from "@/utils/liveGameData";
("NavBar");
const menuOpened = ref(false);
const notificationOpened = ref(false);
const router = useRouter();
const broadcastOptions = ref([]);
const broadcast = ref(null);
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
});

const broadcastSelected = () => {
  router.push({ name: "Broadcast", params: { id: broadcast.value } });
};
</script>
