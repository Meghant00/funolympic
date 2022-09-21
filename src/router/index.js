import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import DashboardLayout from "@/views/DashboardLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import Broadcast from "@/views/Broadcast.vue";
import SignUp from "@/views/SignUp.vue";
import User from "@/views/User.vue";
import Schedule from "@/views/Schedule.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/:pathMatch(.*)*", name: "NotFound", component: Dashboard },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/sign-up",
      name: "Signup",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "DashboardLayout",
      component: DashboardLayout,
      children: [
        { path: "/dashboard", name: "Dashboard", component: Dashboard },
        { path: "/broadcast/:id", name: "Broadcast", component: Broadcast },
        { path: "/user", name: "User", component: User },

        { path: "/schedule", name: "Schedule", component: Schedule },
      ],
    },
  ],
});

export default router;
