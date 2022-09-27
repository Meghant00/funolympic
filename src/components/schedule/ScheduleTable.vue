<template>
  <div class="w-full flex flex-row items-center justify-end mb-4">
    <primary-button name="Add Schedule" @click="addModal = true" />
  </div>
  <n-data-table :columns="columns" :data="data" />
  <n-modal
    v-model:show="showModal"
    closable
    class="w-full md:w-1/2 lg:w-1/4 bg-white px-4 py-4"
  >
    <div
      class="flex flex-col items-start justify-start gap-4"
      v-if="deleteModal"
    >
      <button
        class="w-full flex flex-row justify-end"
        @click="showModal = false"
      >
        <Icon><Times /></Icon>
      </button>
      <h3 class="text-xl">Delete Schedule</h3>
      <div class="text-lg">
        Are you sure you want delete {{ currentSchedule.title }} ?
      </div>
      <div class="flex flex-row w-full items-center justify-end gap-4">
        <primary-button name="Yes" theme="danger" @click="yesClicked" />
        <primary-button name="No" @click="showModal = false" />
      </div>
    </div>
    <div v-else></div>
  </n-modal>
  <n-modal
    v-model:show="addModal"
    closable
    class="w-full md:w-1/2 lg:w-1/4 bg-white px-4 py-4"
  >
    <div class="w-full flex flex-col items-start justify-start gap-4">
      <button
        class="w-full flex flex-row justify-end"
        @click="addModal = false"
      >
        <Icon><Times /></Icon>
      </button>
      <add-schedule @addClicked="addClicked" class="w-full" />
    </div>
  </n-modal>
  <n-modal
    v-model:show="editModal"
    closable
    class="w-full md:w-1/2 lg:w-1/4 bg-white px-4 py-4"
  >
    <div class="w-full flex flex-col items-start justify-start gap-4">
      <button
        class="w-full flex flex-row justify-end"
        @click="editModal = false"
      >
        <Icon><Times /></Icon>
      </button>
      <add-schedule @editClicked="editClicked" :id="currentSchedule.id" />
    </div>
  </n-modal>
</template>
<script setup>
import { Icon } from "@vicons/utils";
import { Times } from "@vicons/fa";
import { NDataTable, NModal, useMessage } from "naive-ui";
import { h, ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
import { scheduleData } from "@/utils/scheduleData";
import ScheduleActions from "@/components/schedule/ScheduleActions.vue";
import AddSchedule from "./AddSchedule.vue";

import moment from "moment";

const data = ref(scheduleData);

const showModal = ref(false);
const currentSchedule = ref(null);
const addModal = ref(false);
const editModal = ref(false);
const deleteModal = ref(false);
const columns = ref([
  {
    key: "title",
    title: "Title",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "time",
    title: "Time",
  },
  {
    key: "action",
    title: "Action",
    render(row) {
      return h(
        ScheduleActions,
        {
          onDeleteClicked: () => {
            currentSchedule.value = row;
            deleteModal.value = true;
            showModal.value = true;
          },
          onEditClicked: () => {
            const test = row;
            currentSchedule.value = test;

            editModal.value = true;
          },
        },
        { default: () => "Block" }
      );
    },
  },
]);

const message = useMessage();

const yesClicked = () => {
  data.value = data.value.filter(
    (schedule) => schedule.title !== currentSchedule.value.title
  );

  showModal.value = false;

  message.success("Schedule Deleted Successfully");
};

const addClicked = (schedule) => {
  try {
    schedule.id = data.value[data.value.length - 1].id + 1;
    schedule.date = moment(schedule.date).format("DD/MM/YYYY");
    schedule.time = moment(schedule.time).format("HH:mm");
    data.value.push(schedule);
    addModal.value = false;
    message.success("Schedule Added Successfully");
  } catch {
    message.error("Schedule Not Added ");
  }
};

const editClicked = (schedule) => {
  data.value.map((scheduleData) => {
    if (scheduleData.id === schedule.id) {
      scheduleData = schedule;
      schedule.date = moment(schedule.date).format("DD/MM/YYYY");
      schedule.time = moment(schedule.time).format("HH:mm");
    }
  });
  editModal.value = false;

  message.success("Schedule Updated Successfully");
};
</script>
