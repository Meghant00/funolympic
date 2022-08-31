<template>
  <div
    class="w-1/4 flex flex-col items-center justify-center mx-auto py-8 max-h-screen"
  >
    <div class="flex flex-row items-center justify-between w-full">
      <img
        src="../assets/img/logo/fun-olympic.png"
        alt="logo"
        class="w-24 h-24"
      />
      <h2 class="text-3xl text-primary font-medium">Log in to FunOlympic</h2>
    </div>
    <form class="py-4 w-full flex flex-col items-start gap-4">
      <div class="flex flex-col gap-4 justify-start items-start w-full">
        <label>Email or Username <span class="text-red-800">*</span></label>
        <input
          type="text"
          placeholder="Email or Username"
          class="border border-transparent bg-gray-100 rounded px-2 py-2 w-full hover:border-gray-200 focus:bg-transparent focus:outline-none focus:border-primary"
        />
      </div>
      <div class="flex flex-col gap-4 justify-start items-start w-full">
        <label>Password <span class="text-red-800">*</span></label>
        <input
          type="password"
          placeholder="Password"
          class="border border-transparent bg-gray-100 rounded px-2 py-2 w-full hover:border-gray-200 focus:bg-transparent focus:outline-none focus:border-primary"
        />
      </div>
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

("Login");
const router = useRouter();
const loginClicked = () => {
  router.push({ name: "Dashboard" });
};
</script>
