<template>
  <div class="w-full">
    <div
      class="flex flex-col items-start justify-start gap-8 w-[90%] mx-auto lg:col-span-2"
    >
      <h3 class="text-3xl">Schedule</h3>
      <schedule-bar @dateClicked="dateClicked" />
      <schedule-card
        v-for="schedule in schedules"
        :key="schedule"
        :title="schedule.title"
        :description="schedule.description"
        :image="schedule.image"
        :time="schedule.time"
        :date="schedule.date"
        :link="schedule.link"
        :id="schedule.id"
      />
    </div>
  </div>
</template>
<script setup>
import ScheduleBar from "@/components/schedule/ScheduleBar.vue";
import ScheduleCard from "@/components/schedule/ScheduleCard.vue";
import { scheduleData } from "@/utils/scheduleData";
import { onMounted, ref } from "vue";

const schedules = ref([]);

onMounted(() => {
  schedules.value = scheduleData.filter(
    (schedule) => schedule.date === "15/09/2022"
  );
});
const dateClicked = (number) => {
  if (number % 2 === 0) {
    schedules.value = scheduleData.filter(
      (schedule) => schedule.date === "16/09/2022"
    );
  } else {
    schedules.value = scheduleData.filter(
      (schedule) => schedule.date === "15/09/2022"
    );
  }
};
</script>
