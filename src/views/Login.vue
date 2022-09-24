<template>
  <div
    class="w-full flex flex-col items-center justify-center h-screen gradient relative overflow-hidden"
  >
    <div class="lg:w-[30%] px-6 py-4 bg-white rounded-md">
      <div class="flex flex-row items-center justify-between w-full">
        <img :src="logo" alt="logo" class="w-24 h-24" />
        <h2 class="text-3xl text-primary font-medium">Log in to FunOlympic</h2>
      </div>
      <form
        class="py-4 w-full flex flex-col items-start gap-4"
        @submit.prevent=""
      >
        <text-input v-model="email" label="Email" type="text" :rules="rules" />
        <text-input
          v-model="password"
          label="Password"
          type="password"
          :rules="rules"
        />
        <p class="text-red-800 italic" v-if="loginError">
          {{ errorMessage }}
        </p>
        <router-link to="" class="text-blue-600">Forgot Password?</router-link>
        <div class="w-full flex flex-row items-center justify-center">
          <button
            class="bg-primary rounded text-white text-xl font-semibold w-full py-2 transition-all duration-150 ease-linear hover:bg-primary-hover"
            @click.prevent="loginClicked"
          >
            Login
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
        <router-link :to="{ name: 'Signup' }" class="text-blue-600"
          >Need an account? <span>Sign Up</span></router-link
        >
      </form>
    </div>
    <div class="absolute -z-10 -right-32">
      <img :src="hand" alt="hand" class="object-cover" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import TextInput from "@/components/reuseable/TextInput.vue";
import { ref } from "vue";
import logo from "@/assets/img/logo/fun-olympic.png";
import { useUserStore } from "@/stores/userStore.js";
import hand from "@/assets/img/bg.jpg";
import googleLogo from "@/assets/img/google-logo.svg";
import facebookLogo from "@/assets/img/facebook-logo.svg";
("Login");
const router = useRouter();
const email = ref(null);
const password = ref(null);
const loginError = ref(false);
const rules = ref({
  required: true,
});
const errorMessage = ref(null);
const userStore = useUserStore();

const loginClicked = () => {
  loginError.value = false;
  if (!email.value && !password.value) {
    loginError.value = true;
    errorMessage.value = "Please Enter all the fields";
    return;
  }

  let flag = false;
  userStore.user.map((user) => {
    loginError.value = false;
    if (
      (email.value === user.email || email.value === user.username) &&
      password.value === user.password
    ) {
      flag = true;
      return;
    }
    if (!flag) {
      {
        loginError.value = true;
        errorMessage.value = "Invalid Username/Email or Password";
        return;
      }
    }
  });

  if (!loginError.value) {
    localStorage.setItem(
      "user",
      JSON.stringify(
        userStore.user.filter(
          (user) =>
            (user.username === email.value || user.email === email.value) &&
            user.password === password.value
        )[0]
      )
    );
    router.push({ name: "Dashboard" });
  }
};
</script>
<style scoped></style>
