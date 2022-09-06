import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import DashboardLayout from "@/views/DashboardLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
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
      path: "/dashboard",
      name: "DashboardLayout",
      component: DashboardLayout,
      children: [
        { path: "/dashboard", name: "Dashboard", component: Dashboard },
      ],
    },
  ],
});

export default router;
