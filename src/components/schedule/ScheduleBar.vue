<template>
  <div
    class="w-full flex flex-row items-center justify-between text-xl px-4 py-2 mx-auto bg-background-gray text-gray-700"
  >
    <button
      class="w-[10%] flex flex-row items-center justify-start"
      @click="decreaseDate"
      :class="{ 'text-gray-700': currentStartDate === 0 }"
      :disabled="currentStartDate < 1"
    >
      <Icon> <ChevronLeft /></Icon>
    </button>
    <div
      class="flex flex-row items-center justify-between w-4/5 overflow-hidden"
    >
      <button
        v-for="(date, i) in filteredDates"
        :key="date"
        class="w-full px-4"
        :class="{
          'text-black': active_el === i,
        }"
        @click="dateClicked(i)"
      >
        <span>{{ date }}</span>
      </button>
    </div>
    <button
      class="w-[10%] flex flex-row items-center justify-end"
      :class="{ 'text-gray-300': currentEndDate === 30 }"
      @click="increaseDate"
      :disabled="currentEndDate > 29"
    >
      <Icon> <ChevronRight /></Icon>
    </button>
  </div>
</template>

<script setup>
import moment from "moment";
import { onMounted, ref } from "vue";
import { ChevronLeft, ChevronRight } from "@vicons/fa";
import { Icon } from "@vicons/utils";
const dates = ref([]);
const currentStartDate = ref(3);
const currentEndDate = ref(8);
const filteredDates = ref([]);
const active_el = ref(2);

const emits = defineEmits(["dateClicked"]);
onMounted(() => {
  for (let i = 0; i < 30; i++) {
    const currentDate = new Date();
    if (i < 5) {
      currentDate.setDate(i - currentDate.getDate());
    } else {
      currentDate.setDate(currentDate.getDate() + i);
    }
    if (i === 5) {
      dates.value.push("Today");
    }
    const date = moment(currentDate).format("DD dddd");
    dates.value.push(date);
  }
  getDates();
});

const getDates = () => {
  const filteredDate = dates.value.slice(
    currentStartDate.value,
    currentEndDate.value
  );
  filteredDates.value = filteredDate;
};

const increaseDate = () => {
  if (currentEndDate.value < 30) {
    currentEndDate.value = currentEndDate.value + 1;
    currentStartDate.value = currentStartDate.value + 1;

    emits("dateClicked", currentStartDate.value + 1);
  }
  getDates();
};
const decreaseDate = () => {
  if (currentStartDate.value > 0) {
    currentEndDate.value = currentEndDate.value - 1;
    currentStartDate.value = currentStartDate.value - 1;
    emits("dateClicked", currentStartDate.value - 1);
  }
  getDates();
};

const dateClicked = (number) => {
  active_el.value = number;
  emits("dateClicked", number);
};
</script>
