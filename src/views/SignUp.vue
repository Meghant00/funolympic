<template>
  <div
    class="w-1/4 flex flex-col items-center justify-center mx-auto py-8 max-h-screen bg-white"
  >
    <div class="flex flex-row items-center justify-start gap-4 w-full">
      <img :src="logo" alt="logo" class="w-16 h-16" />
      <h2 class="text-3xl text-primary font-medium">Signup to FunOlympic</h2>
    </div>
    <form class="py-4 w-full flex flex-col items-start gap-4">
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
      <router-link :to="{ name: 'Login' }" class="text-blue-600"
        >Already Have an account? <span>Log in</span></router-link
      >
    </form>
  </div>
</template>
<script setup>
import TextInput from "@/components/reuseable/TextInput.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/img/logo/fun-olympic.png";
import { useUserStore } from "@/stores/userStore.js";
import { useMessage } from "naive-ui";
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
