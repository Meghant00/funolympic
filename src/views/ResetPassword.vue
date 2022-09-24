<template>
  <div class="px-16 flex flex-col items-start justify-start gap-8">
    <h2 class="text-xl font-semibold py-4 text-gray-700">Reset Password</h2>
    <n-alert
      v-if="showAlert"
      title="Password Reset"
      type="success"
      class="w-full"
    >
      <p>Password Reset Successful</p>
      <router-link :to="{ name: 'Login' }" class="text-blue-600 py-4"
        >Go To Login Page</router-link
      >
    </n-alert>
    <div class="w-full" v-else>
      <p>Please Enter and Confirm your new password</p>
      <div class="w-1/4">
        <n-input
          v-model:value="password"
          placeholder="Enter Password"
          type="password"
          show-password-on="click"
          class="my-2"
        />
        <n-input
          v-model:value="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          show-password-on="click"
          class="my-2"
        />
      </div>
      <primary-button name="Reset Password" @click="resetPassword" />
    </div>
  </div>
</template>
<script setup>
import { NInput, NAlert } from "naive-ui";
import { ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
import { useUserStore } from "@/stores/userStore";
const password = ref(null);
const confirmPassword = ref(null);
const showAlert = ref(false);

const userStore = useUserStore();

const resetPassword = () => {
  userStore.changePassword(password.value);
  showAlert.value = true;
};
</script>
