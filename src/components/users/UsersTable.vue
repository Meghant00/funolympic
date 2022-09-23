<template>
  <n-data-table :columns="columns" :data="data" />
  <n-modal
    v-model:show="showModal"
    closable
    class="w-full md:w-1/2 lg:w-1/4 bg-white px-4 py-4"
  >
    <div class="flex flex-col items-start justify-start gap-4">
      <div class="text-lg">
        Are you sure you want to
        {{ currentUser.blocked ? "unblock" : "block" }} user
        {{ currentUser.username }} ?
      </div>
      <div class="flex flex-row w-full items-center justify-end gap-4">
        <primary-button name="Yes" theme="danger" @click="yesClicked" />
        <primary-button name="No" @click="showModal = false" />
      </div>
    </div>
  </n-modal>
</template>
<script setup>
import { NDataTable, NModal, useMessage } from "naive-ui";
import { h, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import PrimaryButton from "@/components/reuseable/PrimaryButton.vue";
const userStore = useUserStore();

const data = ref(userStore.user);

const currentUser = ref(null);
const showModal = ref(false);
const columns = ref([
  {
    key: "username",
    title: "Username",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "action",
    title: "Action",
    render(row) {
      return h(
        PrimaryButton,
        {
          onClick: () => {
            currentUser.value = row;
            showModal.value = true;
          },
          name: row.blocked ? "Unblock" : "Block",
        },
        { default: () => "Block" }
      );
    },
  },
]);

const message = useMessage();

const yesClicked = () => {
  if (currentUser.value.blocked) {
    unblockUser(currentUser.value.username);
  } else {
    blockUser(currentUser.value.username);
  }

  showModal.value = false;

  message.success(
    `User ${currentUser.value.blocked ? "Blocked" : "Unblocked"} Successfully`
  );
};

const blockUser = (username) => {
  const user = data.value.filter((user) => user.username == username)[0];
  user.blocked = 1;
  userStore.blockUser(username);
};

const unblockUser = (username) => {
  const user = data.value.filter((user) => user.username == username)[0];
  user.blocked = 0;
  userStore.unBlockUser(username);
};
</script>
