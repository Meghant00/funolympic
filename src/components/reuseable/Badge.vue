<template>
  <div class="relative">
    <Icon><BellRegular /></Icon>
    <div
      class="absolute top-0 -right-1 text-white bg-red-600 rounded-full text-[8px] w-3 h-3 flex flex-row items-center justify-center"
      v-if="!props.badgeClicked"
    >
      {{ notificationNumber }}
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@vicons/utils";
import { BellRegular } from "@vicons/fa";
import { useNotificationStore } from "@/stores/notificationStore";
import { computed } from "vue";

const props = defineProps(["badgeClicked"]);
const notificationStore = useNotificationStore();
const notificationNumber = computed(() => {
  return notificationStore.notifications.length;
});
</script>
