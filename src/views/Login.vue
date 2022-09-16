<template>
  <div
    class="w-1/4 flex flex-col items-center justify-center mx-auto py-8 max-h-screen bg-white"
  >
    <div class="flex flex-row items-center justify-between w-full">
      <img :src="logo" alt="logo" class="w-24 h-24" />
      <h2 class="text-3xl text-primary font-medium">Log in to FunOlympic</h2>
    </div>
    <form class="py-4 w-full flex flex-col items-start gap-4">
      <text-input
        v-model="email"
        label="Username or Email"
        type="text"
        :rules="rules"
      />
      <text-input
        v-model="password"
        label="Password"
        type="password"
        :rules="rules"
      />
      <p class="text-red-800 italic" v-if="loginError">
        {{ errorMessage }}
      </p>
      <router-link to="" class="text-blue-600">Forget Password?</router-link>
      <div class="w-full flex flex-row items-center justify-center">
        <button
          class="bg-primary rounded text-white text-xl font-semibold w-full py-2 transition-all duration-150 ease-linear hover:bg-primary-hover"
          @click.prevent="loginClicked"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import TextInput from "@/components/reuseable/TextInput.vue";
import { ref } from "vue";
import logo from "@/assets/img/logo/fun-olympic.png";
import { userData } from "@/utils/userData.js";
("Login");
const router = useRouter();
const email = ref(null);
const password = ref(null);
const loginError = ref(false);
const rules = ref({
  required: true,
});
const errorMessage = ref(null);

const loginClicked = () => {
  loginError.value = false;
  if (!email.value && !password.value) {
    loginError.value = true;
    errorMessage.value = "Please Enter all the fields";
    return;
  }

  let flag = false;
  userData.map((user) => {
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
        userData.filter(
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
