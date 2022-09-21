<template>
  <div class="w-full md:w-1/2 lg:w-1/4">
    <n-form :model="formData">
      <n-form-item label="Title" path="schedule.title">
        <n-input
          placeholder="Enter Title"
          v-model:value="formData.schedule.title"
        />
      </n-form-item>
      <n-form-item label="Description" path="schedule.description">
        <n-input
          placeholder="Enter Description"
          type="textarea"
          v-model:value="formData.schedule.description"
        />
      </n-form-item>
      <n-form-item label="Date" path="schedule.date">
        <n-input
          placeholder="Enter Date"
          v-model:value="formData.schedule.date"
        />
      </n-form-item>
      <n-form-item label="Time" path="schedule.time">
        <n-input
          placeholder="Enter Time"
          v-model:value="formData.schedule.time"
        />
      </n-form-item>
      <primary-button name="Add" @click="addClicked" v-if="!props.id" />

      <primary-button name="Edit" @click="editClicked" v-else />
    </n-form>
  </div>
</template>
<script setup>
import { NForm, NInput, NFormItem } from "naive-ui";
import { onMounted, ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
import { scheduleData } from "@/utils/scheduleData";
import moment from "moment";
const props = defineProps(["id"]);
const emits = defineEmits(["addClicked", "editClicked"]);

const formData = ref({
  schedule: {
    title: null,
    description: null,
    date: null,
    time: null,
    id: props.id ? props.id : null,
  },
});

const addClicked = () => {
  emits("addClicked", formData.value.schedule);
};
const editClicked = () => {
  emits("editClicked", formData.value.schedule);
};

onMounted(() => {
  if (props.id) {
    formData.value.schedule = scheduleData.filter(
      (schedule) => schedule.id === props.id
    )[0];
  }
});
</script>
