import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: [
        {
          username: "meghant",
          email: "meghant@gmail.com",
          password: "meghant",
          isAdmin: 0,
        },

        {
          username: "admin",
          email: "admin@gmail.com",
          password: "admin",
          isAdmin: 1,
        },

        {
          username: "user",
          email: "normal.user@gmail.com",
          password: "user",
          isAdmin: 0,
        },

        {
          username: "blocked-user",
          email: "blocked@gmail.com",
          password: "blocked",
          isAdmin: 0,
        },
      ],
    };
  },
  actions: {
    addUser(user) {
      this.user.push(user);
    },
  },
});
