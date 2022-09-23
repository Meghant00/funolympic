<template>
  <div class="w-full flex flex-row items-center justify-end mb-4">
    <primary-button name="Add Video" @click="addModal = true" />
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
    <add-video @addClicked="addClicked" />
  </n-modal>
  <n-modal
    v-model:show="editModal"
    closable
    class="w-full md:w-1/2 lg:w-1/4 bg-white px-4 py-4"
  >
    <add-video @editClicked="editClicked" :id="currentSchedule.id" />
  </n-modal>
</template>
<script setup>
import { NDataTable, NModal, useMessage } from "naive-ui";
import { h, ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
import ScheduleActions from "@/components/schedule/ScheduleActions.vue";
import AddVideo from "./AddVideo.vue";

import moment from "moment";
import { liveGameData } from "@/utils/liveGameData";

const data = ref(liveGameData);

const showModal = ref(false);
const currentSchedule = ref(null);
const addModal = ref(false);
const editModal = ref(false);
const deleteModal = ref(false);
const columns = ref([
  {
    key: "title",
    title: "Title",
    width: 100,
  },
  {
    key: "description",
    title: "Description",
    width: 100,
  },
  {
    key: "video",
    title: "Video Link",
    width: 200,
  },
  {
    key: "action",
    title: "Action",
    width: 50,
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

  message.success("Video Deleted Successfully");
};

const addClicked = (schedule) => {
  try {
    schedule.id = data.value[data.value.length - 1].id + 1;
    data.value.push(schedule);
    addModal.value = false;
    message.success("Video Added Successfully");
  } catch {
    message.error("Video Not Added ");
  }
};

const editClicked = (schedule) => {
  data.value.map((scheduleData) => {
    if (scheduleData.id === schedule.id) {
      scheduleData = schedule;
    }
  });
  editModal.value = false;

  message.success("Video Updated Successfully");
};
</script>
