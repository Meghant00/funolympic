<template>
  <div class="px-8">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-xl font-semibold py-4 text-gray-700">Profile</h2>
      <primary-button
        name="Edit Profile"
        @click="disabled = false"
        v-if="disabled"
      />
    </div>
    <n-form :model="formData" class="w-1/2">
      <n-form-item label="Username" path="user.username">
        <n-input
          placeholder="Enter Username"
          v-model:value="formData.user.username"
          :disabled="disabled"
        />
      </n-form-item>
      <n-form-item label="Email" path="user.email">
        <n-input
          placeholder="Enter Email"
          v-model:value="formData.user.email"
          :disabled="disabled"
        />
      </n-form-item>
      <div v-if="!disabled">
        <n-form-item label="Old Password" path="user.oldPassword">
          <n-input
            placeholder="Enter Old Password"
            v-model:value="formData.user.oldPassword"
            :disabled="disabled"
            type="password"
            show-password-on="click"
          />
        </n-form-item>
        <n-form-item label="New Password" path="user.newPassword">
          <n-input
            placeholder="Enter New Password"
            v-model:value="formData.user.newPassword"
            :disabled="disabled"
            type="password"
            show-password-on="click"
          />
        </n-form-item>
        <n-form-item label="Confirm New Password" path="confirmPassword">
          <n-input
            placeholder="Confirm New Password"
            :disabled="disabled"
            v-model:value="confirmPassword"
            type="password"
            show-password-on="click"
          />
        </n-form-item>
      </div>
      <div class="flex flex-row items-center justify-between" v-if="!disabled">
        <primary-button
          theme="success"
          name="Edit Profile"
          @click="editClicked"
        />
        <primary-button theme="danger" name="Cancel" @click="disabled = true" />
      </div>
    </n-form>
  </div>
</template>
<script setup>
import { NForm, NFormItem, NInput, useMessage } from "naive-ui";
import { onMounted, ref } from "vue";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
import { useUserStore } from "@/stores/userStore";

const formData = ref({
  user: {
    username: null,
    oldPassword: null,
    newPassword: null,
    email: null,
  },
});

const confirmPassword = ref(null);

const disabled = ref(true);
const user = ref(null);

const message = useMessage();

const userStore = useUserStore();
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user"));

  formData.value.user.username = user.value.username;

  formData.value.user.email = user.value.email;
});

const editClicked = () => {
  if (
    formData.value.user.email === user.value.email &&
    formData.value.user.oldPassword === user.value.password
  ) {
    try {
      const tempUser = {
        username: formData.value.user.username,
        email: formData.value.user.email,
        password: formData.value.user.newPassword,
        isAdmin: 0,
        blocked: 0,
      };
      userStore.editProfile(tempUser, user.value.email);
      message.success("Profile Updated Successfully");
      disabled.value = true;
    } catch {
      message.error("Profile Not Updated");
    }
  } else {
    message.error("Please Enter correct old Password");
  }
};
</script>
