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
          blocked: 0,
        },

        {
          username: "admin",
          email: "admin@gmail.com",
          password: "admin",
          isAdmin: 1,
          blocked: 0,
        },

        {
          username: "user",
          email: "user@gmail.com",
          password: "user",
          isAdmin: 0,
          blocked: 0,
          hasLoggedIn: 0,
        },

        {
          username: "blocked-user",
          email: "blocked@gmail.com",
          password: "blocked",
          isAdmin: 0,
          blocked: 1,
        },
      ],
    };
  },
  actions: {
    addUser(user) {
      this.user.push(user);
    },
    blockUser(username) {
      const user = this.user.filter((user) => user.username == username)[0];
      user.blocked = 1;
    },
    unBlockUser(username) {
      const user = this.user.filter((user) => user.username == username)[0];
      user.blocked = 0;
    },
    editProfile(user, email) {
      let tempUser = this.user.filter((user) => user.email === email)[0];
      tempUser = user;
    },
    changePassword(newPassword) {
      const user = this.user.filter(
        (user) => user.email === "meghant@gmail.com"
      )[0];
      user.password = newPassword;
    },
  },
});
