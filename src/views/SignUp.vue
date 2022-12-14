<template>
  <div
    class="w-full flex flex-col items-center justify-center mx-auto py-8 h-screen relative overflow-x-hidden overflow-y-scroll"
  >
    <div class="w-[30%] px-6 py-4 bg-white rounded-md">
      <div class="flex flex-row items-center justify-start gap-4 w-full">
        <img :src="logo" alt="logo" class="w-16 h-16" />
        <h2 class="text-3xl text-primary font-medium">Signup to FunOlympic</h2>
      </div>
      <form
        class="py-4 w-full flex flex-col items-start gap-4"
        @submit.prevent=""
      >
        <text-input v-model="email" label="Email" type="email" :rules="rules" />
        <text-input
          v-model="username"
          label="Username"
          type="text"
          :rules="rules"
        />
        <text-input
          v-model="password"
          label="Password"
          type="password"
          :rules="rules"
        />
        <text-input
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          :rules="rules"
        />
        <p class="text-red-800 italic" v-if="signupError">
          {{ errorMessage }}
        </p>
        <div class="w-full flex flex-row items-center justify-center">
          <button
            class="bg-primary rounded text-white text-xl font-semibold w-full py-2 transition-all duration-150 ease-linear hover:bg-primary-hover"
            @click.prevent="signupClicked"
          >
            Signup
          </button>
        </div>
        <div class="w-full flex flex-row items-center justify-start">
          <span class="w-full h-0.5 bg-gray-400"></span>
          <span
            class="text-gray-600 border-2 border-gray-600 rounded px-2 py-1 font-semibold"
            >OR</span
          >
          <span class="w-full h-0.5 bg-gray-400"></span>
        </div>
        <div class="flex flex-row items-center justify-center gap-4 w-full">
          <a
            href="https://google.com"
            target="_blank"
            class="border border-gray-500 w-12 h-12 flex flex-row items-center justify-center rounded shadow"
          >
            <img :src="googleLogo" alt="logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            class="border border-gray-500 w-12 h-12 flex flex-row items-center justify-center rounded shadow"
          >
            <img :src="facebookLogo" alt="logo" class="w-[36px] h-[36px]" />
          </a>
        </div>
        <router-link :to="{ name: 'Login' }" class="text-blue-600"
          >Already Have an account? <span>Log in</span></router-link
        >
      </form>
    </div>
    <div class="absolute -z-10 -right-32">
      <img :src="hand" alt="hand" class="object-cover" />
    </div>
  </div>
</template>
<script setup>
import TextInput from "@/components/reuseable/TextInput.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/img/logo/fun-olympic.png";
import { useUserStore } from "@/stores/userStore.js";
import { useMessage } from "naive-ui";
import googleLogo from "@/assets/img/google-logo.svg";
import facebookLogo from "@/assets/img/facebook-logo.svg";
import hand from "@/assets/img/bg.jpg";
("SignUp");

const router = useRouter();
const email = ref(null);
const username = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const signupError = ref(false);
const rules = ref({
  required: true,
});
const errorMessage = ref(null);

const userStore = useUserStore();
const message = useMessage();

const signupClicked = () => {
  signupError.value = false;

  if (
    !email.value &&
    !password.value &&
    !username.value &&
    !confirmPassword.value
  ) {
    signupError.value = true;
    errorMessage.value = "Please Enter all the fields";
    return;
  }

  if (password.value !== confirmPassword.value) {
    console.log(
      "Password",
      password.value,
      "Confirm Password",
      confirmPassword.value
    );
    signupError.value = true;
    errorMessage.value = "Password and Confirm Password do not match";
    return;
  }

  if (!signupError.value) {
    const user = {
      username: username.value,
      password: password.value,
      email: email.value,
      isAdmin: 0,
      blocked: 0,
    };
    userStore.addUser(user);
    message.success("User Added Successfully");
    router.push({ name: "Login" });
  }
};
</script>
