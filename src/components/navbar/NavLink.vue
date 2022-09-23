<template>
  <router-link
    :to="{ name: props.name }"
    class="font-semibold text-primary transition-all duration-100 ease-linear hover:text-primary-hover"
    v-if="!params"
  >
    {{ props.text }}
  </router-link>
  <router-link
    :to="{ name: props.name, params: { id: props.params } }"
    class="font-semibold text-primary transition-all duration-100 ease-linear hover:text-primary-hover"
    v-else
  >
    {{ props.text }}
  </router-link>
</template>
<script setup>
const props = defineProps(["name", "text", "params"]);
</script>
