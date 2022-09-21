<template>
  <div class="flex flex-row items-center justify-start gap-4 text-lg">
    <button
      class="text-primary transition duration-100 ease-linear hover:text-blue-800"
      @click="editClicked"
    >
      <Icon><Edit /></Icon></button
    ><button
      class="text-danger transition duration-100 ease-linear hover:text-red-800"
      @click="deleteClicked"
    >
      <Icon><Trash /></Icon>
    </button>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { Edit, Trash } from "@vicons/fa";
const emits = defineEmits(["editClicked", "deleteClicked"]);

const editClicked = () => {
  emits("editClicked");
};

const deleteClicked = () => {
  emits("deleteClicked");
};
</script>
