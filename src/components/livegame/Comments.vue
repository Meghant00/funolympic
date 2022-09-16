<template>
  <div class="flex flex-col items-start justify-start gap-4 w-full">
    <h3 class="text-xl py-8">Comments</h3>
    <div class="flex flex-row items-center justify-start w-full gap-2">
      <div
        class="rounded-full w-16 h-16 px-5 py-2 text-white flex flex-row items-center justify-center text-lg uppercase"
        :class="{
          'bg-green-700': username.length % 2 === 0,
          'bg-blue-700': username.length % 2 === 1,
        }"
      >
        {{ username.slice(0, 1) }}
      </div>
      <form
        class="flex flex-row items-center justify-start gap-4 w-full px-4"
        @submit.prevent="addComment"
      >
        <textarea
          class="w-full bg-transparent border-2 border-gray-300 rounded-sm px-4 py-4 focus:outline-none focus:border-primary"
          placeholder="Add Comment"
          v-model="inputComment"
          rows="1"
        >
        </textarea>
        <button
          class="text-primary transition-all duration-100 ease-linear hover:text-primary-hover"
        >
          <Icon class="transform rotate-45"><PaperPlane /></Icon>
        </button>
      </form>
    </div>
    <div
      class="flex flex-row items-start gap-4"
      v-for="comment in comments"
      :key="comment"
    >
      <div
        class="w-16 h-16 rounded-full flex flex-row items-center justify-center uppercase text-white"
        :class="{
          'bg-green-700': comment.username.length % 2 === 0,
          'bg-blue-700': comment.username.length % 2 === 1,
        }"
      >
        {{ comment.username.slice(0, 1) }}
      </div>
      <div class="flex flex-col items-start justify-start gap-4">
        <h5>{{ comment.username }}</h5>
        <p>
          {{ comment.comment }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@vicons/utils";
import { PaperPlane } from "@vicons/fa";
import { ref } from "vue";
import { commentData } from "@/utils/commentData.js";
("Comments");
const inputComment = ref(null);
const comments = ref(commentData);
const username = ref(JSON.parse(localStorage.getItem("user")).username);
const addComment = () => {
  comments.value.push({
    username: JSON.parse(localStorage.getItem("user")).username,
    comment: inputComment.value,
  });

  inputComment.value = null;
};
</script>
