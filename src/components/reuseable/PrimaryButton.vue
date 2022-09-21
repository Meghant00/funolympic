<template>
  <button
    class="rounded text-white font-semibold py-2 px-8 transition-all duration-150 ease-linear"
    :class="{
      'bg-primary hover:bg-primary-hover': theme === 'primary',
      'bg-danger hover:bg-red-800': theme === 'danger',
    }"
  >
    {{ props.name }}
  </button>
</template>
<script setup>
const props = defineProps({
  name: { type: String },
  theme: { default: "primary" },
});
</script>
