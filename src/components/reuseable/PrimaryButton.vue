<template>
  <button
    class="bg-primary rounded text-white font-semibold py-2 px-4 transition-all duration-150 ease-linear hover:bg-primary-hover"
  >
    {{ props.name }}
  </button>
</template>
<script setup>
const props = defineProps(["name"]);
</script>
