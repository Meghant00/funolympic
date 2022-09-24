<template>
  <div class="px-16 flex flex-col items-start justify-start gap-8">
    <h2 class="text-xl font-semibold py-4 text-gray-700">
      Password Reset Link
    </h2>
    <n-alert
      v-if="showAlert"
      title="Password Reset Link Sent"
      type="success"
      class="w-full"
    >
      <p>Please check your email to find your password reset link.</p>
      <p>
        If you have not recieved the link please click send link button after a
        few minutes.
      </p>
      <router-link :to="{ name: 'Login' }" class="text-blue-600 py-4"
        >Go To Login Page</router-link
      >
    </n-alert>
    <p>Please Enter Your email in order to send you password reset link</p>
    <div class="w-1/4">
      <n-input v-model:value="email" placeholder="Enter Email" />
    </div>
    <primary-button name="Send Link" @click="showAlert = true" />
  </div>
</template>
<script setup>
import { NInput, NAlert } from "naive-ui";
import { ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
const email = ref();

const showAlert = ref(false);
</script>
