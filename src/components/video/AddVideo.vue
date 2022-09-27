<template>
  <div class="w-full">
    <h3 class="font-bold text-xl py-4">
      {{ !props.id ? "Add Video" : "Edit Video" }}
    </h3>
    <n-form :model="formData">
      <n-form-item label="Title" path="video.title">
        <n-input
          placeholder="Enter Title"
          v-model:value="formData.video.title"
        />
      </n-form-item>
      <n-form-item label="Description" path="video.description">
        <n-input
          placeholder="Enter Description"
          type="textarea"
          v-model:value="formData.video.description"
        />
      </n-form-item>
      <n-form-item label="Link" path="video.video">
        <n-input
          placeholder="Enter Video Link"
          v-model:value="formData.video.video"
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
import { liveGameData } from "@/utils/liveGameData";
const props = defineProps(["id"]);
const emits = defineEmits(["addClicked", "editClicked"]);

const formData = ref({
  video: {
    title: null,
    description: null,
    video: null,
    id: props.id ? props.id : null,
  },
});

const addClicked = () => {
  emits("addClicked", formData.value.video);
};
const editClicked = () => {
  emits("editClicked", formData.value.video);
};

onMounted(() => {
  if (props.id) {
    formData.value.video = liveGameData.filter(
      (schedule) => schedule.id === props.id
    )[0];
  }
});
</script>
