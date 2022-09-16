<template>
  <router-link
    :to="{ name: 'Broadcast', params: { id: props.id } }"
    class="flex flex-col items-start justify-start gap-4 w-full transition-all duration-150 ease-linear group py-8 px-4 shadow-none lg:flex-row lg:w-4/5 hover:bg-background-gray hover:shadow-md"
  >
    <div class="text-xl">{{ props.time }}</div>
    <div class="w-64 h-32 md:w-full md:h-full lg:w-64 lg:h-32 overflow-hidden">
      <img
        :src="props.image"
        :alt="props.title"
        class="h-32 w-64 md:w-full md:h-full object-fill transform transition-all duration-150 ease-linear group-hover:scale-150"
      />
    </div>
    <div
      class="flex flex-col items-start justify-start gap-4 w-full lg:w-[75%]"
    >
      <h4 class="text-xl">{{ props.title }}</h4>
      <p>
        {{ props.description }}
      </p>
    </div>
  </router-link>
</template>
<script setup>
const props = defineProps([
  "title",
  "date",
  "description",
  "image",
  "time",
  "link",
  "id",
]);
</script>
