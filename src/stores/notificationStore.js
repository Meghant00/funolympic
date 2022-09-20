import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notificationStore", {
  state: () => {
    return { notifications: [], notificationClicked: true };
  },
  actions: {
    addNotification(notification) {
      this.notifications.push(notification);
    },
  },
});
