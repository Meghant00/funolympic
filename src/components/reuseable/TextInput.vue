<template>
  <div class="flex flex-col gap-4 justify-start items-start w-full">
    <label
      >{{ props.label }}
      <span class="text-red-800" v-if="props.rules.required">*</span></label
    >
    <input
      :type="props.type"
      placeholder="Email or Username"
      class="border border-transparent bg-gray-100 rounded px-2 py-2 w-full hover:border-gray-200 focus:bg-transparent focus:outline-none focus:border-primary"
      :class="validationClass"
      :value="props.modelValue"
      @input="updateValue"
      @focusout="validate"
    />
    <p class="text-red-800 italic" v-if="error">
      {{ props.label }} is required
    </p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const validationClass = ref(null);
const error = ref(false);

const props = defineProps({
  modelValue: String,
  label: String,
  rules: Object,
  type: { default: "text" },
});
const emits = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
  emits("update:modelValue", event.target.value);
};
const validate = () => {
  if (props.rules.required && !props.modelValue) {
    validationClass.value = "border-red-800 hover:border-red-800";
    error.value = true;
    return;
  }
  error.value = false;
  validationClass.value = null;
};
</script>
