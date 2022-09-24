import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import DashboardLayout from "@/views/DashboardLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import Broadcast from "@/views/Broadcast.vue";
import SignUp from "@/views/SignUp.vue";
import User from "@/views/User.vue";
import Schedule from "@/views/Schedule.vue";
import Results from "@/views/Results.vue";
import MedalDistribution from "@/views/MedalDistribution.vue";
import LiveVideo from "@/views/LiveVideo.vue";
import EditProfile from "@/views/EditProfile.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
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
      path: "/forgot-password",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      component: ResetPassword,
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

        { path: "/results", name: "Results", component: Results },

        {
          path: "/medal-distribution",
          name: "MedalDistribution",
          component: MedalDistribution,
        },
        { path: "/live-video", name: "LiveVideo", component: LiveVideo },

        { path: "/edit-profile", name: "EditProfile", component: EditProfile },
      ],
    },
  ],
});

export default router;
