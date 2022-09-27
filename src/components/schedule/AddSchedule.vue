<template>
  <div class="w-full">
    <h3 class="font-bold text-xl py-4">
      {{ !props.id ? "Add Schedule" : "Edit Schedule" }}
    </h3>
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
        <n-date-picker placeholder="Select Date" v-model:value="date" />
      </n-form-item>
      <n-form-item label="Time" path="schedule.time">
        <n-time-picker placeholder="Select Time" v-model:value="time" />
      </n-form-item>
      <primary-button name="Add" @click="addClicked" v-if="!props.id" />

      <primary-button name="Edit" @click="editClicked" v-else />
    </n-form>
  </div>
</template>
<script setup>
import { NForm, NInput, NFormItem, NDatePicker, NTimePicker } from "naive-ui";
import { onMounted, ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
import { scheduleData } from "@/utils/scheduleData";
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

const date = ref(null);
const time = ref(null);

const addClicked = () => {
  formData.value.schedule.date = date.value;
  formData.value.schedule.time = time.value;
  emits("addClicked", formData.value.schedule);
};
const editClicked = () => {
  formData.value.schedule.date = date.value;
  formData.value.schedule.time = time.value;
  emits("editClicked", formData.value.schedule);
};

onMounted(() => {
  if (props.id) {
    formData.value.schedule = scheduleData.filter(
      (schedule) => schedule.id === props.id
    )[0];

    const tempDate = new Date();
    const separate = formData.value.schedule.date.split("/");
    tempDate.setDate(separate[0]);
    tempDate.setMonth(separate[1]);
    tempDate.setFullYear(separate[2]);

    const tempTime = new Date();

    const timeSeparate = formData.value.schedule.time.split(":");

    tempTime.setHours(timeSeparate[0]);
    tempTime.setMinutes(timeSeparate[1]);

    date.value = tempDate.getTime();

    time.value = tempTime.getTime();
  }
});
</script>
