import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Customer from "../views/CustomerView.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/", component: Login, name: "Login" },
  { path: "/dashboard", component: Dashboard, name: "Dashboard" },
  { path: "/chat", component: Customer, name: "Customer" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
